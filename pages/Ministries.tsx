import React from 'react';
import { Content } from '../types';
import { Check, BookOpen, Globe2, Flame, ArrowRight, MapPin, Clock } from 'lucide-react';

interface PageProps {
    content: Content;
}

export const Ministries: React.FC<PageProps> = ({ content }) => {
    const text = content.ministriesPage;

    return (
        <div className="bg-white">
            {/* 1. Hero Section - Immersive & Bold */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/worship.jpg"
                        alt="Adoração"
                        className="w-full h-full object-cover scale-105 animate-slow-zoom" // Hypothetical slow zoom class or just utility
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white max-w-5xl pt-20">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-sm bg-white/5">
                        {text.church.badge}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight drop-shadow-xl">
                        {text.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-light font-serif text-gray-200 max-w-3xl mx-auto leading-relaxed opacity-90">
                        {text.hero.subtitle}
                    </p>
                </div>
            </section>

            {/* 2. A Igreja Local - Asymmetrical Floating Layout */}
            <section className="py-24 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 hidden lg:block"></div>

                <div className="container mx-auto px-4 md:px-6">
                    <div className="relative lg:min-h-[600px] flex items-center">
                        {/* Large Background Image */}
                        <div className="w-full lg:w-3/4 h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl relative z-0">
                            <img
                                src="/assets/about_church.jpg"
                                alt="Igreja MPC"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
                        </div>

                        {/* Floating Text Card */}
                        <div className="lg:absolute lg:right-10 lg:w-1/2 bg-white p-8 md:p-12 rounded-3xl shadow-xl mt-[-80px] lg:mt-0 relative z-10 border border-gray-100">
                            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
                                {text.church.title}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {text.church.description}
                            </p>

                            <ul className="space-y-4">
                                {text.church.highlights.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1 w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-sm">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-800 font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Área Educacional - Editorial Zig-Zag */}
            <section className="py-24 bg-gray-900 text-white relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
                    {/* Abstract noise or pattern could go here */}
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-orange rounded-full blur-[120px]"></div>
                    <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossas Escolas</h2>
                        <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-col gap-24 lg:gap-32">
                        {/* FEATURE 1: Theocidade (Img Left, Text Right) */}
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-brand-orange/20 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 blur-sm"></div>
                                <img
                                    src="/assets/theocidade.jpg"
                                    alt="Instituto Theocidade"
                                    className="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-3 mb-4 text-brand-orange">
                                    <BookOpen size={24} />
                                    <span className="text-sm font-bold tracking-widest uppercase">Teologia</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold mb-6">{text.education.theocidade.title}</h3>
                                <p className="text-gray-300 text-xl leading-relaxed mb-8 font-light">
                                    {text.education.theocidade.desc}
                                </p>
                                <button className="group flex items-center gap-2 text-white font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors">
                                    {text.education.theocidade.btn}
                                    <ArrowRight className="transform group-hover:translate-x-1 transition-transform" size={20} />
                                </button>
                            </div>
                        </div>

                        {/* FEATURE 2: EMA (Text Left, Img Right) */}
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-3 mb-4 text-brand-orange">
                                    <Flame size={24} />
                                    <span className="text-sm font-bold tracking-widest uppercase">Missões</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold mb-6">{text.education.ema.title}</h3>
                                <p className="text-gray-300 text-xl leading-relaxed mb-8 font-light">
                                    {text.education.ema.desc}
                                </p>
                                <button className="group flex items-center gap-2 text-white font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors">
                                    {text.education.ema.btn}
                                    <ArrowRight className="transform group-hover:translate-x-1 transition-transform" size={20} />
                                </button>
                            </div>
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500 blur-sm"></div>
                                <img
                                    src="/assets/ema.jpg"
                                    alt="EMA Escola de Missões"
                                    className="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Comunidade Basileia - Textured Brand Block */}
            <section className="py-32 bg-gradient-to-br from-brand-orange to-red-600 text-white relative overflow-hidden">
                {/* Watermark Icon */}
                <div className="absolute -right-20 -bottom-20 text-white/5 pointer-events-none transform rotate-12">
                    <Globe2 size={400} strokeWidth={1} />
                </div>

                <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                    <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-8 backdrop-blur-md border border-white/20">
                        <Globe2 size={32} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">{text.basileia.title}</h2>
                    <p className="text-xl md:text-3xl text-orange-50 leading-relaxed font-serif font-light">
                        "{text.basileia.desc}"
                    </p>
                </div>
            </section>

            {/* 5. FAQ / Info - Floating Clean Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-dark mb-4">
                                    <Clock size={20} />
                                </div>
                                <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-bold">{text.info.cards[0].title}</h4>
                                <p className="text-brand-dark text-xl font-bold">{text.info.cards[0].value}</p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-dark mb-4">
                                    <Flame size={20} />
                                </div>
                                <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-bold">{text.info.cards[1].title}</h4>
                                <p className="text-brand-dark text-xl font-bold">{text.info.cards[1].value}</p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-dark mb-4">
                                    <MapPin size={20} />
                                </div>
                                <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-bold">{text.info.cards[2].title}</h4>
                                <p className="text-brand-dark text-xl font-bold">{text.info.cards[2].value}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
