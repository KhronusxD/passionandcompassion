import React from 'react';
import { Content } from '../types';
import { BookOpen, Heart, Globe2 } from 'lucide-react';

interface PillarsProps {
  text: Content['pillars'];
}

export const Pillars: React.FC<PillarsProps> = ({ text }) => {
  return (
    <section id="pillars" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{text.title}</h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education Card */}
          <div className="bg-brand-dark rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group border-t-4 border-transparent hover:border-brand-orange h-full flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors backdrop-blur-sm">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{text.cards.education.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {text.cards.education.desc}
              </p>
            </div>
            <div>
              <span className="inline-block bg-white/5 text-gray-300 text-xs font-semibold px-4 py-2 rounded-full border border-white/10 tracking-wide uppercase">
                {text.cards.education.sub}
              </span>
            </div>
          </div>

          {/* Adoração / Social Card */}
          <div className="bg-brand-dark rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group border-t-4 border-transparent hover:border-brand-orange h-full flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors backdrop-blur-sm">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{text.cards.social.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {text.cards.social.desc}
              </p>
            </div>
            <div>
              <span className="inline-block bg-white/5 text-gray-300 text-xs font-semibold px-4 py-2 rounded-full border border-white/10 tracking-wide uppercase">
                {text.cards.social.sub}
              </span>
            </div>
          </div>

          {/* Missions Card */}
          <div className="bg-brand-dark rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group border-t-4 border-transparent hover:border-brand-orange h-full flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors backdrop-blur-sm">
                <Globe2 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{text.cards.missions.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {text.cards.missions.desc}
              </p>
            </div>
            <div>
              <span className="inline-block bg-white/5 text-gray-300 text-xs font-semibold px-4 py-2 rounded-full border border-white/10 tracking-wide uppercase">
                {text.cards.missions.sub}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};