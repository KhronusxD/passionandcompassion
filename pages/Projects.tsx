import React from 'react';
import { Content } from '../types';
import { SocialProjects } from '../components/SocialProjects';
import { GlobalImpact } from '../components/GlobalImpact';

interface PageProps {
    content: Content;
}

export const Projects: React.FC<PageProps> = ({ content }) => {
    return (
        <div className="pt-24 pb-12">
            <SocialProjects text={content.socialProjects} />
            <GlobalImpact text={content.impact} />
        </div>
    );
};
