import React from 'react';
import { Content } from '../types';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  text: Content['hero'];
}

export const Hero: React.FC<HeroProps> = ({ text }) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_bg.jpg"
          alt="MPC Community"
          className="w-full h-full object-cover"
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
        <Link
          to="/sobre"
          className="inline-block bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl"
        >
          {text.cta}
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};