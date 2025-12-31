import React from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 pt-24 pb-12 border-t border-stone-200 text-sm text-stone-500 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
                <Logo className="w-8 h-8" />
                <span className="text-2xl font-serif font-bold text-stone-900 tracking-tight">Datacare<span className="text-champagne-500">.</span></span>
            </div>
            <p className="mb-8 leading-relaxed text-stone-500">
              Pioneering the digital transformation of the jewellery industry with precision software and hardware integration. Trusted by the best.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-champagne-500 hover:text-white hover:border-champagne-500 transition-colors shadow-sm"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-champagne-500 hover:text-white hover:border-champagne-500 transition-colors shadow-sm"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-champagne-500 hover:text-white hover:border-champagne-500 transition-colors shadow-sm"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-stone-900 font-bold mb-6 uppercase tracking-widest text-xs">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-champagne-600 transition-colors">Retail ERP</a></li>
              <li><a href="#" className="hover:text-champagne-600 transition-colors">Wholesale Management</a></li>
              <li><a href="#" className="hover:text-champagne-600 transition-colors">Manufacturing Units</a></li>
              <li><a href="#" className="hover:text-champagne-600 transition-colors">RFID Ecosystems</a></li>
              <li><a href="#" className="hover:text-champagne-600 transition-colors">Mobile Apps</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-stone-900 font-bold mb-6 uppercase tracking-widest text-xs">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-champagne-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-champagne-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-champagne-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-champagne-600 transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-stone-900 font-bold mb-6 uppercase tracking-widest text-xs">Contact HQ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-champagne-500 shrink-0 mt-0.5" />
                <span>1019, STC (Shivam Trade Center),<br />Beside One World West, Bopal,<br />Ahmedabad, Gujarat 380058</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-champagne-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-champagne-500 shrink-0" />
                <span>sales@datacaresoftech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Datacare Softech Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;