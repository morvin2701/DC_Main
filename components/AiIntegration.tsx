import React from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Image, Scan, Database, Edit3, ArrowRight, Zap, Gem, Eye, Download, RotateCcw, ArrowDown } from 'lucide-react';
import Particles from './lightray';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

const AiIntegration: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
  return (
    <section id="ai-integration" className="py-24 bg-gradient-to-br from-stone-900 via-slate-900 to-stone-900 text-white relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(107, 114, 128, 0.1) 0%, transparent 20%)" 
      }}></div>
      
      {/* Particles Effect - Premium Jewelry Theme */}
      <div className="absolute inset-0 w-full h-full z-[2]">
        <Particles
          particleColors={['#F59E0B', '#10B981']} // Amber and Emerald colors (jewelry tones)
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Mobile-First Layout: Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          {/* Text Content - Order First on Mobile */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-full border border-emerald-500/30 mb-6">
              <span className="text-emerald-300 font-bold uppercase tracking-wider text-xs sm:text-sm">AI-Powered Innovation</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-amber-300 bg-clip-text text-transparent">
              Intelligent Image Generation
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your jewelry catalog with our cutting-edge AI technology. Create stunning new designs, variations, and visualizations that captivate your customers.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-10">
              <div className="flex items-start gap-3 sm:gap-4">
                <Sparkles className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm sm:text-base">AI-powered image generation with preferred references</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <Scan className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm sm:text-base">Auto-analysis of existing images to generate new variations</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <Database className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm sm:text-base">Integration with live inventory for dynamic image creation</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <Edit3 className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm sm:text-base">Seamless editing capabilities within our application</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://dcnextai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-900 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 border border-emerald-500/30 text-sm sm:text-base"
              >
                Explore Live Demo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-slate-800 text-white font-bold rounded-full transition-all duration-300 border border-emerald-500/30 text-sm sm:text-base">
                Contact Sales
                <Zap size={16} className="text-amber-400" />
              </button>
            </div>
            
            <div className="mt-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <p className="text-slate-300 text-sm">
                <span className="inline-flex items-center gap-1 text-amber-400">
                  <Gem size={14} /> Coming Soon:
                </span> Additional AI features to enhance your jewelry business
              </p>
            </div>
          </div>

          {/* AI Visualization - Order Second on Mobile */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            {/* Mobile-friendly visualization with premium container */}
            <div className="relative w-full max-w-md h-[500px] sm:h-[600px] bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-3xl backdrop-blur-sm border border-slate-700/50 p-4">
              {/* Premium AI Visualization */}
              <div className="flex flex-col items-center justify-center h-full gap-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full flex flex-col items-center bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-emerald-500/40 p-6 flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400/70 group"
                >
                  <div className="relative mb-4">
                    <Sparkles className="text-emerald-400 transition-all duration-300 group-hover:scale-125 group-hover:text-emerald-300" size={36} />
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-emerald-500/30 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    <div className="absolute -inset-4 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-[14px] sm:text-[16px] font-bold text-slate-200 transition-colors duration-300 group-hover:text-emerald-400 uppercase tracking-widest">AI Image Generation</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full flex flex-col items-center bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-amber-500/40 p-6 flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-amber-400/70 group"
                >
                  <div className="relative mb-4">
                    <Scan className="text-amber-400 transition-all duration-300 group-hover:scale-125 group-hover:text-amber-300" size={36} />
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    <div className="absolute -inset-4 rounded-full bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-[14px] sm:text-[16px] font-bold text-slate-200 transition-colors duration-300 group-hover:text-amber-400 uppercase tracking-widest">Auto-Analysis</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-full flex flex-col items-center bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-emerald-500/40 p-6 flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400/70 group"
                >
                  <div className="relative mb-4">
                    <Database className="text-emerald-400 transition-all duration-300 group-hover:scale-125 group-hover:text-emerald-300" size={36} />
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-emerald-500/30 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    <div className="absolute -inset-4 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-[14px] sm:text-[16px] font-bold text-slate-200 transition-colors duration-300 group-hover:text-emerald-400 uppercase tracking-widest">Live Inventory</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="w-full flex flex-col items-center bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-amber-500/40 p-6 flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-amber-400/70 group"
                >
                  <div className="relative mb-4">
                    <Edit3 className="text-amber-400 transition-all duration-300 group-hover:scale-125 group-hover:text-amber-300" size={36} />
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    <div className="absolute -inset-4 rounded-full bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-[14px] sm:text-[16px] font-bold text-slate-200 transition-colors duration-300 group-hover:text-amber-400 uppercase tracking-widest">Seamless Editing</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    </section>
  );
};

export default AiIntegration;