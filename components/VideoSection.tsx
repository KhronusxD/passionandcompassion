import React from 'react';
import { Content } from '../types';

interface VideoSectionProps {
  text: Content['videoSection'];
}

const VIDEO_ID = 'Olx3aBEfsbo';

export const VideoSection: React.FC<VideoSectionProps> = ({ text }) => {
  return (
    <section id="video" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.title}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{text.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&playsinline=1`}
              title="Mission Passion and Compassion"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
