import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Content } from '../types';
import { GLOBAL_COORDINATES } from '../constants';

interface GlobalImpactProps {
  text: Content['impact'];
}

export const GlobalImpact: React.FC<GlobalImpactProps> = ({ text }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(800);
  const height = 500;

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Init
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    // Projection
    const projection = d3.geoOrthographic()
      .scale(width / 2.5) // Adjust scale based on container
      .translate([width / 2, height / 2])
      .clipAngle(90)
      .rotate([55, -15, -10]); // Center on South America/Atlantic to show all points roughly

    const path = d3.geoPath().projection(projection);

    // Graticule (Grid lines)
    const graticule = d3.geoGraticule();

    // 1. Draw Water (Sphere background)
    svg.append("path")
      .datum({ type: "Sphere" })
      .attr("d", path)
      .attr("fill", "#eef2f6")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", 1.5);

    // 2. Draw Graticule
    svg.append("path")
      .datum(graticule)
      .attr("d", path)
      .attr("fill", "none")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", 0.5)
      .attr("stroke-opacity", 0.5);

    // 3. Draw Nodes (Manaus, Scotland, India)
    const manaus = GLOBAL_COORDINATES.find(c => c.name === "Manaus")!;
    
    // Draw Arcs
    GLOBAL_COORDINATES.forEach(coord => {
      if (coord.name === "Manaus") return;

      const link = { type: "LineString", coordinates: [[manaus.lng, manaus.lat], [coord.lng, coord.lat]] };
      
      svg.append("path")
        .datum(link)
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke", "#f07733")
        .attr("stroke-width", 2)
        .attr("stroke-linecap", "round")
        .attr("stroke-dasharray", function() { return this.getTotalLength(); })
        .attr("stroke-dashoffset", function() { return this.getTotalLength(); })
        .transition()
        .duration(2000)
        .ease(d3.easeCubicOut)
        .attr("stroke-dashoffset", 0);
    });

    // Draw Points
    GLOBAL_COORDINATES.forEach(coord => {
      // Use projection to find x, y
      const pos = projection([coord.lng, coord.lat]);
      if (!pos) return;

      const isSource = coord.type === 'source';

      const g = svg.append("g")
        .attr("transform", `translate(${pos[0]}, ${pos[1]})`);

      // Pulse effect for source
      if (isSource) {
        g.append("circle")
          .attr("r", 8)
          .attr("fill", "#f07733")
          .attr("opacity", 0.4)
          .append("animate")
          .attr("attributeName", "r")
          .attr("from", "8")
          .attr("to", "20")
          .attr("dur", "1.5s")
          .attr("repeatCount", "indefinite");
        
        g.append("circle")
           .attr("r", 8)
           .attr("fill", "#f07733")
           .attr("opacity", 0.4)
           .append("animate")
           .attr("attributeName", "opacity")
           .attr("from", "0.4")
           .attr("to", "0")
           .attr("dur", "1.5s")
           .attr("repeatCount", "indefinite");
      }

      g.append("circle")
        .attr("r", isSource ? 6 : 4)
        .attr("fill", isSource ? "#f07733" : "#333333")
        .attr("stroke", "#fff")
        .attr("stroke-width", 2);

      g.append("text")
        .attr("y", -10)
        .attr("text-anchor", "middle")
        .text(coord.name)
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .attr("fill", "#333333")
        .style("text-shadow", "0 1px 2px rgba(255,255,255,1)");
    });
    
    // Add simple rotation animation
    let t = 0;
    const rotate = () => {
        t += 0.1;
        // Subtle idle rotation
        projection.rotate([55 + Math.sin(t * 0.01) * 5, -15, -10]);
        svg.selectAll("path").attr("d", path);
        
        // Re-calculate point positions
        svg.selectAll("g").each(function(d: any, i) {
           // We need to re-bind data properly to use d3 data join efficiently for animation, 
           // but for this simple effect, we can just re-project the hardcoded list order if strictly matched.
           // However, simple static map is better for performance here unless we fully implement the timer.
           // Leaving static for stability, the arc animation is enough "wow" factor.
        });
    }

  }, [width]);

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
                A mission born in Manaus, now connecting hearts across continents. Through our missionary school and partnerships, we have established a presence in key locations worldwide.
              </p>
            </div>
          </div>

          <div ref={containerRef} className="md:w-2/3 flex justify-center relative">
            <svg 
              ref={svgRef} 
              width={width} 
              height={height} 
              className="max-w-full"
              style={{ cursor: 'grab' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};