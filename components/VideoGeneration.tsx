import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';
import { Sparkles, Video, Play, Zap, Gem, Eye, Download, Pause, Maximize, Image as ImageIcon } from 'lucide-react';
import Particles from './lightray';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

const VideoGeneration: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [inputImageError, setInputImageError] = useState(false);
  const [outputVideoError, setOutputVideoError] = useState(false);
  
  const handlePlay = () => {
    setIsPlaying(true);
    // Simulate video playback for demo purposes
    setTimeout(() => {
      setIsPlaying(false);
    }, 10000); // Reset after 10 seconds for demo
  };
  
  return (
    <section id="video-generation" className="py-24 bg-gradient-to-br from-slate-900 via-stone-900 to-slate-900 text-white relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 20%)" 
      }}></div>
      
      {/* Particles Effect - Premium Jewelry Theme */}
      <div className="absolute inset-0 w-full h-full z-[2]">
        <Particles
          particleColors={['#F59E0B', '#10B981']} // Amber and Emerald colors (jewelry tones)
          particleCount={150}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Mobile-First Layout: Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          {/* Video Showcase - Order First on Mobile */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            {/* Separate Input and Output Boxes */}
            <div className="w-full max-w-4xl space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Input Section - Left Box */}
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl border border-amber-500/30 p-6 flex flex-col items-center justify-center overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-amber-500/10 blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-emerald-500/10 blur-xl"></div>
                  
                  {/* <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 rounded-full border border-amber-500/30 shadow-lg">
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                      <span className="text-amber-300 font-bold text-sm">INPUT</span>
                    </span>
                  </div> */}
                  
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500/20 to-emerald-500/20 flex items-center justify-center mb-4 relative z-10">
                    <Sparkles className="text-amber-400" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-200 mb-2 relative z-10">Jewelry Image</h3>
                  
                  <div className="w-full h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500/5 to-emerald-500/5 border border-amber-500/20 flex items-center justify-center relative aspect-[9/16] mb-4">
                    {!inputImageError ? (
                      <img 
                        src="/assets/inputImage.jpeg" 
                        alt="Jewelry Input" 
                        className="w-full h-full object-cover"
                        onError={() => setInputImageError(true)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gradient-to-br from-amber-500/5 to-emerald-500/5">
                        <ImageIcon className="text-amber-400" size={48} />
                      </div>
                    )}
                    
                    {/* Glassmorphism Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
                  </div>
                  
                  <p className="text-slate-400 text-sm text-center relative z-10">Upload your jewelry image</p>
                </div>
                
                {/* Output Section - Right Box */}
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl border border-emerald-500/30 p-6 flex flex-col items-center justify-center overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-emerald-500/10 blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-amber-500/10 blur-xl"></div>
                  
                  {/* <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-full border border-emerald-500/30 shadow-lg">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-emerald-300 font-bold text-sm">OUTPUT</span>
                    </span>
                  </div> */}
                  
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500/20 to-amber-500/20 flex items-center justify-center mb-4 relative z-10">
                    <Video className="text-emerald-400" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-200 mb-2 relative z-10">AI Generated Video</h3>
                  
                  <div className="w-full h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/5 to-amber-500/5 border border-emerald-500/20 flex items-center justify-center relative aspect-[9/16] mb-4">
                    {!outputVideoError ? (
                      <video 
                        src="/assets/OutputVideo.mp4" 
                        controls
                        className="w-full h-full object-cover"
                        onError={() => setOutputVideoError(true)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gradient-to-br from-emerald-500/5 to-amber-500/5">
                        <Play className="text-emerald-400" size={48} />
                      </div>
                    )}
                    
                    {/* Glassmorphism Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
                  </div>
                  
                  <p className="text-slate-400 text-sm text-center relative z-10">Generated video preview</p>
                </div>
              </div>
              
              {/* Animated Arrow */}
              <div className="flex justify-center mt-2 relative z-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-emerald-500/10 rounded-full border border-amber-500/20">
                  <motion.div 
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-amber-400"
                  >
                    <Sparkles size={16} />
                  </motion.div>
                  <span className="text-slate-300 text-sm font-medium">AI Processing</span>
                  <motion.div 
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                    className="text-emerald-400"
                  >
                    <Sparkles size={16} />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Order Second on Mobile */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 rounded-full border border-amber-500/30 mb-6">
              <span className="text-amber-300 font-bold uppercase tracking-wider text-xs sm:text-sm">BETA Feature</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-emerald-300 bg-clip-text text-transparent">
              AI-Powered Video Generation
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your jewelry showcase with our cutting-edge AI video generation technology. Create stunning product videos that highlight every detail and captivate your customers.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-10">
              <div className="flex items-start gap-3 sm:gap-4">
                <Video className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm sm:text-base">AI-powered video creation with custom lighting effects</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <Sparkles className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm sm:text-base">Generate product videos from single images</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <Play className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm sm:text-base">360-degree rotation and zoom capabilities</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <Eye className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm sm:text-base">Realistic lighting and reflection simulation</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/20 border border-amber-500/30 text-sm sm:text-base">
                Request Beta Access
                <Zap size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-slate-800 text-white font-bold rounded-full transition-all duration-300 border border-amber-500/30 text-sm sm:text-base">
                View Demo
                <Eye size={16} className="text-emerald-400" />
              </button>
            </div>
            
            <div className="mt-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <p className="text-slate-300 text-sm">
                <span className="inline-flex items-center gap-1 text-emerald-400">
                  <Gem size={14} /> In Development:
                </span> Advanced video editing capabilities and integration with live inventory
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGeneration;