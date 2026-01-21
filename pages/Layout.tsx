import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { ActionSection } from '../components/ActionSection';
import { Language, Content } from '../types';

interface LayoutProps {
    lang: Language;
    setLang: (lang: Language) => void;
    content: Content;
}

export const Layout: React.FC<LayoutProps> = ({ lang, setLang, content }) => {
    return (
        <div className="font-sans text-brand-dark bg-white min-h-screen flex flex-col">
            <Header lang={lang} setLang={setLang} text={content.nav} />
            <main className="flex-grow">
                <Outlet />
            </main>
            <ActionSection text={content.action} footerText={content.footer} />
        </div>
    );
};
