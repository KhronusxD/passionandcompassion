import React from 'react';
import { Content, ProjectCard } from '../types';
import { Home, Music, Palette, Globe2, MapPin, HeartHandshake, Sprout, LucideIcon } from 'lucide-react';

interface SocialProjectsProps {
    text: Content['socialProjects'];
}

const FALLBACK_IMAGE =
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop';

const missionIcons: LucideIcon[] = [Palette, Music, Globe2, MapPin];
const socialIcons: LucideIcon[] = [Home, HeartHandshake, Sprout];

const ProjectCardItem: React.FC<{ card: ProjectCard; Icon: LucideIcon }> = ({ card, Icon }) => (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <img
            src={card.image || FALLBACK_IMAGE}
            alt={card.title}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
            <div className="bg-brand-orange w-10 h-10 rounded-full flex items-center justify-center mb-3 text-white">
                <Icon size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {card.desc}
            </p>
        </div>
    </div>
);

export const SocialProjects: React.FC<SocialProjectsProps> = ({ text }) => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{text.title}</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{text.description}</p>
                    <div className="w-20 h-1 bg-brand-orange mx-auto rounded mt-6"></div>
                </div>

                {/* Missions Projects */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-brand-dark mb-8 flex items-center gap-3">
                        <span className="inline-block w-8 h-1 bg-brand-orange rounded"></span>
                        {text.missionsTitle}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {text.missions.map((card, i) => (
                            <ProjectCardItem key={card.title} card={card} Icon={missionIcons[i % missionIcons.length]} />
                        ))}
                    </div>
                </div>

                {/* Social Projects */}
                <div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-8 flex items-center gap-3">
                        <span className="inline-block w-8 h-1 bg-brand-orange rounded"></span>
                        {text.socialTitle}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {text.social.map((card, i) => (
                            <ProjectCardItem key={card.title} card={card} Icon={socialIcons[i % socialIcons.length]} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
