import React from 'react';
import { Content } from '../types';
import { ArrowDown, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DONATE_URL } from '../constants';

interface HeroProps {
  text: Content['hero'];
}

const VIDEO_ID = 'Olx3aBEfsbo';

export const Hero: React.FC<HeroProps> = ({ text }) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background YouTube Video (cinematic, muted, looping) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Poster image as fallback while the video loads */}
        <img
          src="/assets/hero_bg.jpg"
          alt="MPC Community"
          className="w-full h-full object-cover"
        />
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full pointer-events-none"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&start=30`}
          title="Mission Passion and Compassion"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl mt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          {text.title}
        </h1>
        <p className="text-lg md:text-2xl font-light font-serif text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          {text.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <Heart size={20} />
            {text.donate}
          </a>
          <Link
            to="/sobre"
            className="inline-block border-2 border-white/80 hover:bg-white hover:text-brand-dark text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl"
          >
            {text.cta}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};
