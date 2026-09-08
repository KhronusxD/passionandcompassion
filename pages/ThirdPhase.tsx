import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { DONATE_URL, LOGO_URL } from '../constants';

export const ThirdPhase: React.FC = () => {
  return (
    <section className="min-h-screen bg-brand-dark text-white flex flex-col items-center justify-center px-4 py-12">
      {/* Accent bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-orange to-red-500"></div>

      {/* Logo */}
      <Link to="/" className="mb-8 flex items-center gap-3">
        <img src={LOGO_URL} alt="MPC" className="h-14 w-14 object-contain rounded-full bg-white p-1" />
        <span className="font-bold text-xl tracking-tight">MPC</span>
      </Link>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 max-w-3xl leading-tight">
        Watch &amp; Partner With Us
      </h1>

      {/* Video */}
      <div className="w-full max-w-4xl">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10" style={{ paddingBottom: '56.25%' }}>
          <video
            className="absolute inset-0 w-full h-full"
            src="/assets/hillary_mensagem3.mp4"
            poster="/assets/hillary_poster.jpg"
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>

      {/* CTA */}
      <a
        href={DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl"
      >
        <Heart size={20} />
        Donate Now
      </a>
    </section>
  );
};
