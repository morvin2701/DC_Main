import React from 'react';
import { motion as m } from 'framer-motion';
import { Printer, ScanBarcode, Scale, Tablet, Server, ArrowRight, CheckCircle2, Laptop } from 'lucide-react';

const motion = m as any;

const HardwareItem = ({ label, icon: Icon }: { label: string, icon: any }) => (
  <div className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl">
    <div className="p-3 sm:p-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border border-slate-600">
      <Icon className="text-emerald-400 w-8 h-8 sm:w-10 sm:h-10" />
    </div>
    <span className="text-sm sm:text-base font-semibold text-slate-100">{label}</span>
  </div>
);

const Hardware: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(107, 114, 128, 0.1) 0%, transparent 20%)" 
      }}></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Mobile-First Layout: Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          {/* Text Content - Order First on Mobile */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-emerald-500/20 to-slate-500/20 rounded-full border border-emerald-500/30 mb-6">
              <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs sm:text-sm">Premium Ecosystem</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              Integrated Hardware Ecosystem
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Our comprehensive hardware integration ensures seamless connectivity across all your store devices. Each component works in harmony to deliver a unified, efficient experience.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-10">
              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2 className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm sm:text-base">Zero-configuration setup for supported devices</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2 className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm sm:text-base">Support for both USB and Network peripherals</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2 className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm sm:text-base">Offline caching for uninterrupted sales</span>
              </div>
            </div>

            <button className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-900 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 border border-emerald-500/30 text-sm sm:text-base">
              View Supported Device List
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Hardware Visualization - Order Second on Mobile */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            {/* Mobile-friendly visualization with premium container */}
            <div className="relative w-full max-w-md h-[500px] sm:h-[600px] bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-3xl backdrop-blur-sm border border-slate-700/50 p-4">
              {/* Enhanced Premium Layout - Hardware Devices in vertical list */}
              <div className="flex flex-col items-center gap-3 w-full max-w-md h-full">
                <div className="w-full flex flex-col items-center bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-emerald-500/40 p-4 sm:p-5 flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400/70 group">
                  <div className="relative mb-2">
                    <Printer className="text-emerald-400 transition-all duration-300 group-hover:scale-125 group-hover:text-emerald-300" size={28} />
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-500/30 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    <div className="absolute -inset-2 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-[10px] sm:text-[13px] font-bold text-slate-200 transition-colors duration-300 group-hover:text-emerald-400 uppercase tracking-widest">Barcode Sheet Form</div>
                </div>
                
                <div className="w-full flex flex-col items-center bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-emerald-500/40 p-4 sm:p-5 flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400/70 group">
                  <div className="relative mb-2">
                    <Printer className="text-emerald-400 transition-all duration-300 group-hover:scale-125 group-hover:text-emerald-300" size={28} />
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-500/30 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    <div className="absolute -inset-2 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-[10px] sm:text-[13px] font-bold text-slate-200 transition-colors duration-300 group-hover:text-emerald-400 uppercase tracking-widest">Barcode Printers</div>
                </div>
                
                <div className="w-full flex flex-col items-center bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-emerald-500/40 p-4 sm:p-5 flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400/70 group">
                  <div className="relative mb-2">
                    <ScanBarcode className="text-emerald-400 transition-all duration-300 group-hover:scale-125 group-hover:text-emerald-300" size={28} />
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-500/30 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    <div className="absolute -inset-2 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-[10px] sm:text-[13px] font-bold text-slate-200 transition-colors duration-300 group-hover:text-emerald-400 uppercase tracking-widest">Barcode Gun Scanners</div>
                </div>
                
                <div className="w-full flex flex-col items-center bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-emerald-500/40 p-4 sm:p-5 flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400/70 group">
                  <div className="relative mb-2">
                    <Printer className="text-emerald-400 transition-all duration-300 group-hover:scale-125 group-hover:text-emerald-300" size={28} />
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-500/30 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    <div className="absolute -inset-2 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-[10px] sm:text-[13px] font-bold text-slate-200 transition-colors duration-300 group-hover:text-emerald-400 uppercase tracking-widest">Barcode Ribbon</div>
                </div>
                
                <div className="w-full flex flex-col items-center bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-emerald-500/40 p-4 sm:p-5 flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400/70 group">
                  <div className="relative mb-2">
                    <Laptop className="text-emerald-400 transition-all duration-300 group-hover:scale-125 group-hover:text-emerald-300" size={28} />
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-500/30 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    <div className="absolute -inset-2 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-[10px] sm:text-[13px] font-bold text-slate-200 transition-colors duration-300 group-hover:text-emerald-400 uppercase tracking-widest">Refurbished Laptops</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;