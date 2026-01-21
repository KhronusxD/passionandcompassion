import React from 'react';
import { Content } from '../types';
import { Users } from 'lucide-react';

interface AboutProps {
  text: Content['about'];
}

export const About: React.FC<AboutProps> = ({ text }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block w-16 h-1 bg-brand-orange mb-2"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              {text.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {text.description1}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-serif italic border-l-4 border-gray-200 pl-4">
              {text.description2}
            </p>

            <div className="flex gap-12 mt-8 pb-8 border-b border-gray-100">
              <div>
                <span className="block text-4xl font-bold text-brand-orange">{text.stat1}</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">{text.stat1Label}</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-brand-orange">{text.stat2}</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">{text.stat2Label}</span>
              </div>
            </div>

            {/* Projeto Aliança Block */}
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-brand-orange text-white p-2 rounded-lg">
                  <Users size={20} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">{text.allianceTitle}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {text.allianceDesc}
              </p>
            </div>

          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="/assets/about_community.jpg"
              alt="Community gathering"
              className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
            />
            <img
              src="/assets/about_church.jpg"
              alt="Culto e Batismo MPC"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};