import React, { useRef, useState } from 'react';
import { motion as m, useScroll, useTransform, Variants } from 'framer-motion';
import { ChevronDown, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import Premium3DIntro from './Premium3DIntro';

const motion = m as any;

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [introFinished, setIntroFinished] = useState(false);

  // Scroll Animations
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Premium Entrance Animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section ref={targetRef} className="relative min-h-screen w-full flex flex-col overflow-hidden bg-white text-slate-900">
      
      {/* 3D Scene Background - Fixed Layer */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Premium3DIntro onIntroComplete={() => setIntroFinished(true)} />
      </motion.div>
      
      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col lg:flex-row items-center min-h-screen">
        
        {/* Left Column: Text Content */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="w-full lg:w-[40%] flex flex-col items-start justify-center pt-[55vh] pb-20 lg:py-0 lg:pr-8 relative"
        >
          {/* Subtle Live Glow Behind Text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-20 w-[120%] h-[120%] bg-blue-50/50 blur-3xl rounded-full -z-10 opacity-60 animate-pulse"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={introFinished ? "show" : "hidden"}
            className="flex flex-col items-start w-full max-w-xl"
          >
            {/* Live Status Badge */}
            <motion.div 
              variants={itemVariants}
              className="relative group cursor-pointer"
            >
               <div className="absolute -inset-0.5 bg-slate-200 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
               <div className="relative inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-blue-200">
                  <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-corporate-blue"></span>
                  </span>
                  {/* <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-600 group-hover:text-corporate-blue transition-colors">
                    Enterprise Edition 2.0 Live
                  </span> */}
               </div>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="mt-8 font-montserrat text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 text-slate-900 tracking-tighter"
            >
              Master Your <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue to-blue-600 pb-2">
                Jewelry Empire
              </span>
            </motion.h1>
            
            {/* Premium Description */}
            <motion.p 
              variants={itemVariants} 
              className="font-sans text-lg md:text-xl text-slate-500 max-w-lg font-medium leading-relaxed mb-10 tracking-tight"
            >
              Experience the definitive ERP for modern jewellers. Unify multi-store inventory, intelligent sales, and compliance into one exquisite operating system.
            </motion.p>
            
            {/* Call to Action Area */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative group overflow-hidden px-8 py-4 bg-slate-900 text-white font-bold text-sm rounded-full shadow-2xl hover:shadow-slate-900/20 transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2 font-montserrat tracking-wide">
                  Start Experience <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255,255,255,1)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/60 backdrop-blur-md border border-slate-200 text-slate-700 font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 font-montserrat tracking-wide group"
              >
                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors border border-slate-200">
                    <Play size={12} className="ml-0.5 fill-slate-600 group-hover:fill-blue-600 transition-colors" />
                 </div>
                 Watch Film
              </motion.button>
            </motion.div>

            {/* Feature Pills / Trust */}
            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
               {['SOC-2 Compliant', 'AI Analytics', 'Multi-Store'].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                     <CheckCircle2 size={14} className="text-corporate-blue" />
                     {feat}
                  </div>
               ))}
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Right Column: Spacer for Desktop Layout */}
        <div className="hidden lg:block lg:w-[60%] h-full pointer-events-none"></div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-300 pointer-events-none z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={introFinished ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
         <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400/70">Scroll</span>
         <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
         >
            <ChevronDown size={24} strokeWidth={1} />
         </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;