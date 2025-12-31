import React from 'react';
import { motion as m } from 'framer-motion';
import { Printer, ScanBarcode, Scale, Tablet, Server, ArrowRight } from 'lucide-react';

const motion = m as any;

const HardwareItem = ({ label, icon: Icon }: { label: string, icon: any }) => (
  <div className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
    <Icon className="text-slate-700 w-10 h-10" />
    <span className="text-sm font-semibold text-slate-800">{label}</span>
  </div>
);

const Hardware: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#475569 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2 block">Ecosystem Integration</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Plug-and-Play Hardware Connectivity</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Datacare isn't just software; it's the central nervous system of your store. Our drivers communicate directly with industry-standard hardware for a lag-free experience.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
                <span className="text-slate-200">Zero-configuration setup for supported devices</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
                <span className="text-slate-200">Support for both USB and Network peripherals</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
                <span className="text-slate-200">Offline caching for uninterrupted sales</span>
              </li>
            </ul>

            <button className="text-blue-300 hover:text-white font-semibold flex items-center gap-2 transition-colors">
              View Supported Device List <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative">
            {/* Central Hub Visualization */}
            <div className="relative flex justify-center items-center">
               <motion.div 
                 animate={{ boxShadow: ["0 0 0 0px rgba(59, 130, 246, 0.2)", "0 0 0 20px rgba(59, 130, 246, 0)"] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center z-20 shadow-2xl"
               >
                 <Server className="w-12 h-12 text-white" />
                 <div className="absolute -bottom-8 text-xs font-bold uppercase tracking-widest">Core ERP</div>
               </motion.div>

               {/* Connecting Lines (Simplified with CSS) */}
               <div className="absolute w-[120%] h-[1px] bg-slate-700/50 top-1/2 left-[-10%] z-0"></div>
               <div className="absolute h-[120%] w-[1px] bg-slate-700/50 left-1/2 top-[-10%] z-0"></div>

               {/* Satellites */}
               <div className="absolute -top-20 -left-10 bg-slate-800 p-4 rounded-xl border border-slate-700">
                  <Printer className="text-blue-400 mb-2" />
                  <div className="text-xs">Thermal Printers</div>
               </div>
               <div className="absolute -top-20 -right-10 bg-slate-800 p-4 rounded-xl border border-slate-700">
                  <ScanBarcode className="text-blue-400 mb-2" />
                  <div className="text-xs">RFID Scanners</div>
               </div>
               <div className="absolute -bottom-20 -left-10 bg-slate-800 p-4 rounded-xl border border-slate-700">
                  <Scale className="text-blue-400 mb-2" />
                  <div className="text-xs">Precision Scales</div>
               </div>
               <div className="absolute -bottom-20 -right-10 bg-slate-800 p-4 rounded-xl border border-slate-700">
                  <Tablet className="text-blue-400 mb-2" />
                  <div className="text-xs">POS Terminals</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;