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
    <section ref={targetRef} className="relative min-h-screen w-full flex flex-col overflow-hidden bg-stone-50 selection:bg-corporate-blue/20 selection:text-corporate-blue">
      
      {/* 3D Scene Background - Fixed Layer */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Premium3DIntro onIntroComplete={() => setIntroFinished(true)} />
      </motion.div>
      
      {/* Premium Vignette & Atmosphere */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-stone-50/0 via-transparent to-stone-50/90 lg:to-stone-50/40"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[5000ms]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-400/10 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[7000ms]"></div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col lg:flex-row items-center min-h-screen">
        
        {/* Left Column: Text Content */}
        {/* Further reduced width to 40% and added max-width constraint to strictly avoid overlap */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="w-full lg:w-[40%] flex flex-col items-start justify-center pt-[55vh] pb-20 lg:py-0 lg:pr-8"
        >
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
               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
               <div className="relative inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/60 shadow-sm transition-all duration-300">
                  <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-corporate-blue"></span>
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-stone-600 group-hover:text-corporate-blue transition-colors">
                    Enterprise Edition 2.0 Live
                  </span>
               </div>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="mt-8 font-montserrat text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 text-stone-900 tracking-tighter"
            >
              Master Your <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue via-corporate-light to-corporate-blue bg-[length:200%_auto] animate-shine pb-2">
                Jewelry Empire
              </span>
            </motion.h1>
            
            {/* Premium Description */}
            <motion.p 
              variants={itemVariants} 
              className="font-sans text-lg md:text-xl text-stone-500/90 max-w-lg font-medium leading-relaxed mb-10 tracking-tight"
            >
              Experience the definitive ERP for modern jewellers. Unify multi-store inventory, intelligent sales, and compliance into one exquisite operating system.
            </motion.p>
            
            {/* Call to Action Area */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative group overflow-hidden px-8 py-4 bg-stone-900 text-white font-bold text-sm rounded-full shadow-2xl hover:shadow-corporate-blue/20 transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-corporate-blue to-corporate-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                <span className="relative flex items-center justify-center gap-2 font-montserrat tracking-wide">
                  Start Experience <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255,255,255,0.9)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/60 backdrop-blur-md border border-stone-200 text-stone-700 font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 font-montserrat tracking-wide group"
              >
                 <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-corporate-light/10 transition-colors border border-stone-200">
                    <Play size={12} className="ml-0.5 fill-stone-600 group-hover:fill-corporate-blue transition-colors" />
                 </div>
                 Watch Film
              </motion.button>
            </motion.div>

            {/* Feature Pills / Trust */}
            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
               {['SOC-2 Compliant', 'AI Analytics', 'Multi-Store'].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-stone-100/50 border border-stone-200/50 text-xs font-bold text-stone-500 uppercase tracking-wider backdrop-blur-sm">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-300 pointer-events-none z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={introFinished ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
         <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400/70">Scroll</span>
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