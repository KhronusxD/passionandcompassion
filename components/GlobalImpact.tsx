import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Content } from '../types';
import { GLOBAL_COORDINATES } from '../constants';

interface GlobalImpactProps {
  text: Content['impact'];
}

// Country outlines loaded at runtime (with graceful fallback to a sphere-only globe).
const LAND_URL =
  'https://cdn.jsdelivr.net/gh/nvkelso/natural-earth-vector@master/geojson/ne_110m_admin_0_countries.geojson';

// Countries the mission reaches — highlighted on the globe.
const HIGHLIGHT = new Set(['India', 'United Kingdom']);

const countryName = (d: any): string => {
  const p = (d && d.properties) || {};
  return p.ADMIN || p.admin || p.NAME || p.name || p.SOVEREIGNT || '';
};

export const GlobalImpact: React.FC<GlobalImpactProps> = ({ text }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(700);
  const [land, setLand] = useState<any>(null);
  const height = 500;

  // Responsive width
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) setWidth(containerRef.current.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch land outlines once
  useEffect(() => {
    let active = true;
    fetch(LAND_URL)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (active && data) setLand(data);
      })
      .catch(() => {
        /* keep sphere-only globe on failure */
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const size = Math.min(width, height);
    const radius = size * 0.46;
    const cx = width / 2;
    const cy = height / 2;

    // Center the globe so Manaus, Scotland and India are all on the visible hemisphere.
    const center: [number, number] = [10, 28];

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([cx, cy])
      .clipAngle(90)
      .rotate([-center[0], -center[1]]);

    const path = d3.geoPath(projection as any);

    // --- Defs: ocean gradient ---
    const defs = svg.append('defs');
    const ocean = defs
      .append('radialGradient')
      .attr('id', 'oceanGradient')
      .attr('cx', '35%')
      .attr('cy', '30%')
      .attr('r', '75%');
    ocean.append('stop').attr('offset', '0%').attr('stop-color', '#eef5fc');
    ocean.append('stop').attr('offset', '100%').attr('stop-color', '#cbdff1');

    // --- Ocean sphere ---
    svg
      .append('path')
      .datum({ type: 'Sphere' } as any)
      .attr('d', path as any)
      .attr('fill', 'url(#oceanGradient)')
      .attr('stroke', '#b3cbe0')
      .attr('stroke-width', 1);

    // --- Land ---
    const gLand = svg.append('g');
    if (land && land.features) {
      gLand
        .selectAll('path')
        .data(land.features)
        .join('path')
        .attr('d', path as any)
        .attr('fill', (d: any) => (HIGHLIGHT.has(countryName(d)) ? '#f6c6a4' : '#dde6ee'))
        .attr('stroke', (d: any) => (HIGHLIGHT.has(countryName(d)) ? '#f07733' : '#c2cdd9'))
        .attr('stroke-width', (d: any) => (HIGHLIGHT.has(countryName(d)) ? 1.1 : 0.4));
    }

    // --- Graticule ---
    svg
      .append('path')
      .datum(d3.geoGraticule10() as any)
      .attr('d', path as any)
      .attr('fill', 'none')
      .attr('stroke', '#b3cbe0')
      .attr('stroke-width', 0.4)
      .attr('stroke-opacity', 0.55);

    // --- Great-circle arcs from Manaus to each target ---
    const manaus = GLOBAL_COORDINATES.find((c) => c.name === 'Manaus')!;
    const targets = GLOBAL_COORDINATES.filter((c) => c.name !== 'Manaus');
    const gArcs = svg.append('g');

    targets.forEach((t, i) => {
      const interpolate = d3.geoInterpolate([manaus.lng, manaus.lat], [t.lng, t.lat]);
      // Densify into many points so the line follows the globe's curvature
      // and terminates exactly on the target country.
      const coordinates = d3.range(0, 1.00001, 0.02).map((s) => interpolate(s));
      const line = { type: 'LineString', coordinates } as any;

      const arc = gArcs
        .append('path')
        .datum(line)
        .attr('d', path as any)
        .attr('fill', 'none')
        .attr('stroke', '#f07733')
        .attr('stroke-width', 2.5)
        .attr('stroke-linecap', 'round');

      // One-time reveal, then switch to a continuous flowing-dash effect.
      const totalLength = (arc.node() as SVGPathElement).getTotalLength();
      arc
        .attr('stroke-dasharray', totalLength)
        .attr('stroke-dashoffset', totalLength)
        .transition()
        .delay(300 + i * 450)
        .duration(1600)
        .ease(d3.easeCubicInOut)
        .attr('stroke-dashoffset', 0)
        .on('end', function () {
          const self = d3.select(this);
          self.attr('stroke-dasharray', '2 11').attr('stroke-dashoffset', 0);
          self
            .append('animate')
            .attr('attributeName', 'stroke-dashoffset')
            .attr('from', '13')
            .attr('to', '0')
            .attr('dur', '1s')
            .attr('repeatCount', 'indefinite');
        });
    });

    // --- Points + labels ---
    const gPoints = svg.append('g');
    GLOBAL_COORDINATES.forEach((coord) => {
      // Hide markers that fall on the far side of the globe.
      if (d3.geoDistance([coord.lng, coord.lat], center) > Math.PI / 2) return;
      const pos = projection([coord.lng, coord.lat]);
      if (!pos) return;

      const isSource = coord.type === 'source';
      const g = gPoints.append('g').attr('transform', `translate(${pos[0]}, ${pos[1]})`);

      // Pulsing halo for the source (Manaus)
      if (isSource) {
        const pulse = g
          .append('circle')
          .attr('r', 6)
          .attr('fill', 'none')
          .attr('stroke', '#f07733')
          .attr('stroke-width', 2);
        pulse
          .append('animate')
          .attr('attributeName', 'r')
          .attr('from', '6')
          .attr('to', '22')
          .attr('dur', '1.8s')
          .attr('repeatCount', 'indefinite');
        pulse
          .append('animate')
          .attr('attributeName', 'stroke-opacity')
          .attr('from', '0.9')
          .attr('to', '0')
          .attr('dur', '1.8s')
          .attr('repeatCount', 'indefinite');
      }

      g.append('circle')
        .attr('r', isSource ? 6 : 5)
        .attr('fill', isSource ? '#f07733' : '#e2562b')
        .attr('stroke', '#fff')
        .attr('stroke-width', 2);

      const label = g
        .append('text')
        .attr('y', -14)
        .attr('text-anchor', 'middle')
        .text(coord.name)
        .attr('font-family', 'Inter, sans-serif')
        .attr('font-size', '13px')
        .attr('font-weight', '700')
        .attr('fill', '#2b3a4a');

      // White halo behind the label for legibility
      label.clone(true).lower().attr('stroke', '#fff').attr('stroke-width', 4).attr('fill', 'none');
    });
  }, [width, land]);

  return (
    <section id="impact" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{text.title}</h2>
            <p className="text-xl text-brand-orange font-medium mb-6">{text.subtitle}</p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">{text.legend}</h4>
              <p className="text-gray-600 text-sm">
                A mission born in Manaus, now connecting hearts across continents. Through our
                missionary school and partnerships, we have established a presence in key locations
                worldwide.
              </p>
            </div>
          </div>

          <div ref={containerRef} className="md:w-2/3 flex justify-center relative">
            <svg ref={svgRef} width={width} height={height} className="max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
