import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion as m, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const motion = m as any;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '#features' },
    { name: 'Solutions', href: '#products' },
    { name: 'Integration', href: '#hardware' },
    { name: 'Company', href: '#team' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 font-serif overflow-hidden ${
        isScrolled 
          ? 'py-4 shadow-2xl border-b border-stone-300/50 shadow-stone-900/10' 
          : 'py-6 border-b border-stone-300/40'
      }`}
    >
    <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-stone-50/80 backdrop-blur-2xl"></div>
    <div className="absolute inset-0 bg-white"></div>
    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-corporate-blue/70 to-transparent animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20 relative z-10">
        <a href="#" className="flex items-center gap-2 group">
          <Logo className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" />
          <div>
            <span className="text-2xl font-bold text-stone-900 tracking-tight font-serif font-normal group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-corporate-blue group-hover:to-corporate-light transition-all duration-500">
              DataCare<span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue to-corporate-light font-medium">Softech</span>
            </span>
            <div className="text-[0.65rem] text-stone-500/80 font-normal tracking-[0.2em] uppercase pl-1 mt-1 group-hover:text-corporate-blue transition-colors duration-500 font-serif italic">Premium ERP Solutions</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a 
                href={link.href}
                className="text-lg font-medium text-stone-700 group-hover:text-corporate-blue transition-all duration-500 relative pb-2 font-serif"
              >
                <span className="absolute -bottom-1 left-0 w-full h-px bg-stone-300/60"></span>
                <span className="block relative z-10 font-normal">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-corporate-blue to-corporate-light transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-corporate-accent/30 to-transparent transition-all duration-700 group-hover:w-full delay-150"></span>
              </a>
            </div>
          ))}
          <a 
            href="#demo"
            className="px-7 py-3.5 bg-gradient-to-r from-corporate-blue to-corporate-light hover:from-corporate-light hover:to-corporate-blue text-white font-medium rounded-xl text-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 border border-corporate-accent/40 relative overflow-hidden group font-serif"
          >
            <span className="relative z-10 font-medium">Request Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-corporate-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-corporate-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-800 p-3 rounded-full hover:bg-stone-100 transition-colors duration-300 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} className="transition-transform duration-300" /> : <Menu size={24} className="transition-transform duration-300" />}
          {isMobileMenuOpen && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-corporate-blue/10 rounded-full animate-ping"></div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-300/50 overflow-hidden shadow-2xl relative z-10"
          >
            <div className="px-8 py-8 flex flex-col gap-7">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a 
                    href={link.href}
                    className="text-xl font-medium text-stone-800 group-hover:text-corporate-blue py-4 relative border-b border-stone-200/70 transition-all duration-500 font-serif"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative z-10 font-normal">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-corporate-blue to-corporate-light transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-corporate-accent/30 to-transparent transition-all duration-700 group-hover:w-full delay-150"></span>
                  </a>
                </div>
              ))}
              <a 
                href="#demo" 
                className="text-center py-5 bg-gradient-to-r from-corporate-blue to-corporate-light text-white rounded-xl font-medium text-xl mt-3 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group font-serif"
              >
                <span className="relative z-10 font-medium">Request Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-corporate-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-corporate-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;