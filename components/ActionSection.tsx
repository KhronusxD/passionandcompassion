import React from 'react';
import { Content } from '../types';
import { Instagram, Facebook, Mail, ArrowRight } from 'lucide-react';
import { DONATE_URL } from '../constants';

interface ActionProps {
  text: Content['action'];
  footerText: Content['footer'];
}

export const ActionSection: React.FC<ActionProps> = ({ text, footerText }) => {
  return (
    <footer id="action" className="bg-brand-dark text-white pt-24 pb-8 relative overflow-hidden">

      {/* Decorative bg element */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-orange to-red-500"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{text.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {/* Pray Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors text-center">
            <h3 className="text-2xl font-serif font-light mb-4 text-brand-orange">{text.cards.pray.title}</h3>
            <p className="text-gray-300">{text.cards.pray.desc}</p>
          </div>

          {/* Give Card - Highlighted */}
          <div className="bg-gradient-to-br from-brand-orange to-red-600 p-8 rounded-2xl shadow-2xl transform md:-translate-y-6 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">{text.cards.give.title}</h3>
            <p className="text-white/90 mb-6 font-medium">{text.cards.give.desc}</p>
            <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" className="w-full inline-block bg-white text-brand-orange font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              {text.cards.give.btn} <ArrowRight size={18} />
            </a>
          </div>

          {/* Go Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors text-center">
            <h3 className="text-2xl font-serif font-light mb-4 text-brand-orange">{text.cards.go.title}</h3>
            <p className="text-gray-300">{text.cards.go.desc}</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-tight">MPC</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-orange transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-brand-orange transition-colors"><Facebook size={24} /></a>
            <a href="mailto:contact@mpc.org" className="hover:text-brand-orange transition-colors"><Mail size={24} /></a>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MPC. {footerText.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};