import React from 'react';
import { Content } from '../types';
import { About as AboutSection } from '../components/About';

interface PageProps {
    content: Content;
}

export const About: React.FC<PageProps> = ({ content }) => {
    return (
        <div className="pt-24 pb-12">
            <AboutSection text={content.about} />
        </div>
    );
};
