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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 overflow-hidden ${
        isScrolled 
          ? 'py-3 shadow-2xl border-b border-stone-300 shadow-stone-900/10' 
          : 'py-5 border-b border-stone-300'
      }`}
    >
    {/* Dynamic Background */}
    <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white backdrop-blur-md shadow-sm"></div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-corporate-blue/70 to-transparent"></div>
    </div>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 relative z-10">
        <a href="#" className="flex items-center gap-3 group">
          <Logo className="w-14 h-14 transition-transform duration-300 group-hover:scale-105 drop-shadow-md" />
          <div>
            <span className="text-xl font-bold text-stone-900 tracking-tight font-montserrat group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-corporate-blue group-hover:to-corporate-light transition-all duration-500">
              DataCare<span className="text-corporate-blue font-extrabold">Softech</span>
            </span>
            <div className="text-[0.6rem] text-stone-500/80 font-bold tracking-[0.2em] uppercase pl-0.5 -mt-0.5 group-hover:text-corporate-blue transition-colors duration-500 font-montserrat">Premium ERP Solutions</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a 
                href={link.href}
                className="text-sm font-bold text-stone-600 group-hover:text-corporate-blue transition-all duration-500 relative pb-1 font-montserrat uppercase tracking-wide"
              >
                <span className="block relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-corporate-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          ))}
          <a 
            href="#demo"
            className="px-6 py-2.5 bg-stone-900 hover:bg-corporate-blue text-white font-bold rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-corporate-blue/30 transform hover:-translate-y-0.5 font-sans"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-800 p-2 rounded-full hover:bg-stone-100 transition-colors duration-300 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white backdrop-blur-xl border-b border-stone-200 overflow-hidden relative z-10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-stone-800 hover:text-corporate-blue transition-colors font-montserrat"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#demo" 
                className="text-center py-4 bg-corporate-blue text-white rounded-lg font-bold text-lg mt-4 shadow-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;