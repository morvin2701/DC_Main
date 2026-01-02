
import React, { useRef, useState } from 'react';
import { motion as m, useScroll, useTransform, Variants } from 'framer-motion';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;
import { ChevronDown, ArrowRight, Gem, Hexagon, Circle, Triangle, Square } from 'lucide-react';
import Scene3D from './Premium3DIntro';

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [introFinished, setIntroFinished] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section ref={targetRef} className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-stone-100/50 to-stone-50 border-b border-stone-200 selection:bg-blue-500/20 selection:text-blue-900 pt-24">
      
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D onIntroComplete={() => setIntroFinished(true)} />
      </div>
      
      {/* Subtle Static Gradient Overlays */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-stone-50 via-stone-50/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-stone-50 via-stone-50/50 to-transparent z-10 pointer-events-none"></div>

      {/* Main Content Container - Premium Responsive Layout */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-full flex flex-col lg:flex-row items-center pt-24 lg:pt-0 min-h-screen">
        
        {/* Left Column: Text Content */}
        {/* Mobile: pt-[35vh] pushes text down to reveal 3D element at top */}
        {/* Desktop: lg:pt-0 and lg:w-1/2 aligns text to left side vertically centered */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center pt-12 sm:pt-16 md:pt-20 pb-12 lg:pb-0 lg:pt-0 lg:pr-8 xl:pr-12">
          {/* Badge - Always visible */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-stone-200 rounded-full bg-white/50 backdrop-blur-sm text-stone-600 text-[11px] font-bold uppercase tracking-wider mb-8 shadow-sm">
             <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
             </span>
             The Gold Standard in ERP
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={introFinished ? "show" : "hidden"}
            className="flex flex-col items-start w-full max-w-xl"
          >
            
            {/* Heading */}
            <motion.h1 variants={itemVariants} className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-stone-900 tracking-tighter">
              Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-stone-800">
                Jewelry Business.
              </span>
            </motion.h1>
            
            
            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-stone-600 max-w-lg font-light leading-relaxed mb-8 sm:mb-10 tracking-tight">
              Experience seamless operations, real-time insights, and industry-leading security for your precious metals and gems.
            </motion.p>
            
            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group px-8 py-4 bg-stone-900 text-white font-semibold text-sm rounded-full transition-all hover:bg-stone-800 hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center gap-2">
                  Request Access <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 bg-white/40 backdrop-blur-md border border-stone-300 text-stone-700 font-semibold text-sm rounded-full transition-all hover:bg-white hover:border-stone-400 flex items-center justify-center gap-2">
                 <Gem size={16} className="text-stone-400" />
                 Explore Features
              </button>
            </motion.div>
        </motion.div>
      </div>

        {/* Right Column: Spacer for 3D View (Desktop) */}
        {/* The Scene3D component automatically positions the gem here on desktop */}
        <div className="hidden lg:block lg:w-1/2 h-full pointer-events-none"></div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400/50"
        animate={introFinished ? { opacity: 1, y: [0, 8, 0] } : { opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};

export default Hero;