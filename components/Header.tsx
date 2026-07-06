import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import { Language, Content } from '../types';
import { LOGO_URL, DONATE_URL } from '../constants';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  text: Content['nav'];
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, text }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  const navLinks = [
    { label: text.about, path: '/sobre' },
    { label: text.ministries, path: '/ministerios' },
    { label: text.projects, path: '/projetos' },
    // { label: text.contact, path: '#action' }, // Removing Contact for now or pointing to Donate? Keeping simple. 
    // User asked for specific tabs. I'll stick to those + Doação button. 
    // Actually, I'll map Contact to #action but if not home, it might fail. 
    // Let's just point Contact to footer via anchor if on home, or ignore for now?
    // I'll keep it as text.contact pointing to #action for legacy, but wrap logic.
    { label: text.contact, path: '/#action' }
  ];

  // Helper to determine text color based on route/scroll
  // If not home, always dark/scrolled style?
  const isTransparent = isHome && !isScrolled;
  const textColor = isTransparent ? 'text-white/90' : 'text-gray-700';
  const logoText = isTransparent ? 'text-white' : 'text-brand-dark';
  const headerBg = isTransparent ? 'bg-transparent py-4' : 'bg-white shadow-md py-2';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="MPC Logo"
            className="h-12 w-12 object-contain rounded-full bg-white p-1"
          />
          <span className={`font-bold text-xl tracking-tight ${logoText}`}>
            MPC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const activeClass = isActive ? 'text-brand-orange font-bold' : textColor;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${activeClass}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border transition-all ${!isTransparent
              ? 'border-gray-300 text-gray-600 hover:bg-gray-100'
              : 'border-white/30 text-white hover:bg-white/10'
              }`}
          >
            <Globe size={14} />
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange hover:bg-orange-600 text-white text-sm font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg"
          >
            {text.partner}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded border ${!isTransparent ? 'text-gray-800 border-gray-300' : 'text-white border-white/40'
              }`}
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${!isTransparent ? 'text-gray-800' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-4 border-t">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-gray-800 font-medium text-lg py-2 border-b border-gray-100 ${isActive ? 'text-brand-orange font-bold' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-brand-orange text-white text-center font-bold py-3 rounded-lg mt-2"
          >
            {text.partner}
          </a>
        </div>
      )}
    </header>
  );
};