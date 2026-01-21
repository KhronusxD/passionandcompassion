import React from 'react';
import { Content } from '../types';
import { Home, Music, Palette } from 'lucide-react';

interface SocialProjectsProps {
    text: Content['socialProjects'];
}

export const SocialProjects: React.FC<SocialProjectsProps> = ({ text }) => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{text.title}</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{text.description}</p>
                    <div className="w-20 h-1 bg-brand-orange mx-auto rounded mt-6"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Casa dos Filhos */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img
                            src={text.cards.casa.image || "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"}
                            alt={text.cards.casa.title}
                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                            <div className="bg-brand-orange w-10 h-10 rounded-full flex items-center justify-center mb-3 text-white">
                                <Home size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{text.cards.casa.title}</h3>
                            <p className="text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                {text.cards.casa.desc}
                            </p>
                        </div>
                    </div>

                    {/* Base Timbó */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img
                            src={text.cards.timbo.image || "https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?q=80&w=800&auto=format&fit=crop"}
                            alt={text.cards.timbo.title}
                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                            <div className="bg-brand-orange w-10 h-10 rounded-full flex items-center justify-center mb-3 text-white">
                                <Palette size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{text.cards.timbo.title}</h3>
                            <p className="text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                {text.cards.timbo.desc}
                            </p>
                        </div>
                    </div>

                    {/* Base Supiá */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img
                            src={text.cards.supia.image || "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop"}
                            alt={text.cards.supia.title}
                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                            <div className="bg-brand-orange w-10 h-10 rounded-full flex items-center justify-center mb-3 text-white">
                                <Music size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{text.cards.supia.title}</h3>
                            <p className="text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                {text.cards.supia.desc}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
