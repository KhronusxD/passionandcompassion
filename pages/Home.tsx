import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Pillars } from '../components/Pillars';
import { GlobalImpact } from '../components/GlobalImpact';
import { SocialProjects } from '../components/SocialProjects';

import { Content } from '../types';

interface HomeProps {
    text: Content;
}

export const Home: React.FC<HomeProps> = ({ text }) => {
    return (
        <>
            <Hero text={text.hero} />
            <About text={text.about} />
            <Pillars text={text.pillars} />
            <SocialProjects text={text.socialProjects} />
            <GlobalImpact text={text.impact} />
        </>
    );
};
