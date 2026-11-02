import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "The Couple", href: "#announcement" },
    { label: "Our Story", href: "#story" },
    { label: "The 7 Vows", href: "#saptapadi" },
    { label: "Celebrations", href: "#events" },
    { label: "The Venue", href: "#venue" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FAF7F0]/90 backdrop-blur-md border-b border-gold/20 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center gap-2"
        >
          <span className="font-serif italic text-2xl font-semibold tracking-wider text-espresso group-hover:text-gold transition-colors">
            {weddingConfig.couple.monogram}
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gold/60" />
          <span className="hidden sm:inline-block font-sans text-xs tracking-widest uppercase text-espresso/70 group-hover:text-espresso transition-colors">
            {weddingConfig.date.displayDate}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-sans text-xs uppercase tracking-widest text-espresso/80 hover:text-gold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button: Celebrations */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#events"
            onClick={(e) => handleLinkClick(e, '#events')}
            className="relative px-5 py-2 rounded-full border border-gold/60 bg-[#FAF7F0]/60 hover:bg-gold hover:text-white text-espresso font-sans text-xs uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-luxury flex items-center gap-1.5"
          >
            <span>Celebrations</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-espresso hover:text-gold focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#FAF7F0]/98 backdrop-blur-xl border-b border-gold/30 px-6 py-8 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-serif text-lg tracking-wider text-espresso hover:text-gold transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gold/20">
              <a
                href="#events"
                onClick={(e) => handleLinkClick(e, '#events')}
                className="inline-block w-full py-3 rounded-full bg-gold text-white font-sans text-xs uppercase tracking-widest shadow-md"
              >
                Celebration Schedule
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
