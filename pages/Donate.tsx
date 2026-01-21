import React from 'react';
import { Content } from '../types';

interface PageProps {
    content: Content;
}

export const Donate: React.FC<PageProps> = ({ content }) => {
    return (
        <div className="pt-24 pb-12 container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-brand-dark">Doação</h1>
            <p className="text-lg text-gray-700 mb-8">
                Sua contribuição faz a diferença. Abaixo você encontra as formas de apoiar nossa missão.
            </p>
            {/* The ActionSection (Footer) contains the donation cards */}
        </div>
    );
};
