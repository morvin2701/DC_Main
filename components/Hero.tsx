import React, { useRef, useState, useEffect } from 'react';
import { motion as m, useScroll, useTransform, Variants } from 'framer-motion';
import { ChevronDown, ArrowRight, Play, CheckCircle2, Gem, Sparkles, Star } from 'lucide-react';
import Premium3DIntro from './Premium3DIntro';

const motion = m as any;

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [introFinished, setIntroFinished] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg: block
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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

      {/* 3D Scene Background - Fixed Layer - Hidden on mobile */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 lg:block hidden">
        <Premium3DIntro onIntroComplete={() => setIntroFinished(true)} />
      </motion.div>

      {/* Mobile-optimized Hero Content - Shown only on mobile/tablet */}
      <div className="lg:hidden block relative z-10 w-full px-6 pt-0 pb-8 min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        {/* Animated Background Elements for Mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Gems */}
          <motion.div
            className="absolute top-1/4 left-10 text-amber-500/20"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Gem size={32} />
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-12 text-blue-500/20"
            animate={{
              y: [10, -10, 10],
              rotate: [5, -5, 5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Gem size={28} />
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 left-1/4 text-emerald-500/20"
            animate={{
              y: [15, -15, 15],
              rotate: [-5, 5, -5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <Star size={24} />
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-1/3 text-purple-500/20"
            animate={{
              y: [-10, 10, -10],
              rotate: [10, -10, 10],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Star size={20} />
          </motion.div>

          {/* Floating Sparkles */}
          <motion.div
            className="absolute top-1/5 right-1/4 text-amber-300/30"
            animate={{
              y: [-15, 15, -15],
              x: [-5, 5, -5],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <Sparkles size={24} />
          </motion.div>

          <motion.div
            className="absolute top-2/3 left-1/3 text-blue-300/30"
            animate={{
              y: [20, -20, 20],
              x: [5, -5, 5],
              scale: [0.9, 1.1, 0.9],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
          >
            <Sparkles size={20} />
          </motion.div>

          {/* Subtle animated background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-50/10 to-transparent"></div>

          {/* Additional animated elements for visual interest */}
          <motion.div
            className="absolute top-2/5 left-1/5 text-amber-400/15"
            animate={{
              y: [-12, 12, -12],
              rotate: [-5, 5, -5],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          >
            <Gem size={22} />
          </motion.div>

          <motion.div
            className="absolute bottom-2/5 right-1/4 text-blue-400/15"
            animate={{
              y: [12, -12, 12],
              rotate: [8, -8, 8],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          >
            <Sparkles size={18} />
          </motion.div>

          {/* Floating particle effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-corporate-blue/5 to-blue-600/5 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.2,
            }}
          ></motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial={isMobile ? "show" : "hidden"}
          animate={isMobile ? "show" : (introFinished ? "show" : "hidden")}
          className="flex flex-col items-center text-center w-full max-w-md mx-auto relative z-20"
        >

          {/* Mobile Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-3 bg-gradient-to-r from-corporate-blue/20 to-blue-600/20 rounded-full border border-corporate-blue/30"
          >
            <span className="text-corporate-blue font-bold uppercase tracking-wider text-xs">India's Leading Software Provider</span>
          </motion.div>

          {/* Mobile Subtitle - Added engaging content for mobile */}
          <motion.div
            variants={itemVariants}
            className="mb-4 max-w-sm mx-auto px-4"
          >
            <p className="text-slate-600 font-sans text-sm font-medium text-center">
              Transform your jewelry business with AI-powered ERP solutions
            </p>
          </motion.div>

          {/* Mobile Feature Highlight - Added jewelry-themed element */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex justify-center"
          >
            <div className="flex items-center gap-4 px-6 py-3 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                <span className="text-slate-600 font-sans text-xs font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-slate-600 font-sans text-xs font-medium">Real-time</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-slate-600 font-sans text-xs font-medium">Secure</span>
              </div>
            </div>
          </motion.div>

          {/* Mobile Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-montserrat text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight"
          >
            Master Your <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue to-blue-600">
              Jewelry Empire
            </span>
          </motion.h1>

          {/* Mobile Description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base text-slate-500 max-w-sm mx-auto font-medium leading-relaxed mb-6"
          >
            Experience the definitive ERP for modern jewellers. Unify inventory, sales, and compliance into one exquisite system.
          </motion.p>

          {/* Mobile Call to Action */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full max-w-xs mx-auto">
            <a
              href={`${import.meta.env.BASE_URL}Datacare_Softech_Brochure.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group overflow-hidden px-6 py-3 bg-slate-900 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-slate-900/20 transition-all duration-300 w-full"
              >
                <div className="absolute inset-0 w-full h-full bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2 font-montserrat tracking-wide">
                  Download Brochure <ArrowRight size={14} />
                </span>
              </motion.button>
            </a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 font-bold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-montserrat tracking-wide w-full"
            >
              <Play size={14} className="fill-slate-600" />
              Get Free Trial
            </motion.button>
          </motion.div>

          {/* Mobile Feature Pills */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center gap-2 max-w-xs">
            {['SOC-2 Compliant', 'AI Analytics', 'Multi-Store'].map((feat, i) => (
              <div key={i} className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                <CheckCircle2 size={10} className="text-corporate-blue" />
                {feat}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop Hero Content - Hidden on mobile */}
      <div className="lg:block hidden relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col lg:flex-row items-center min-h-screen">

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
            animate={!isMobile ? (introFinished ? "show" : "hidden") : "hidden"}
            className="flex flex-col items-start w-full max-w-xl"
          >

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
              <a
                href={`${import.meta.env.BASE_URL}Datacare_Softech_Brochure.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group overflow-hidden px-8 py-4 bg-slate-900 text-white font-bold text-sm rounded-full shadow-2xl hover:shadow-slate-900/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 w-full h-full bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2 font-montserrat tracking-wide">
                    Download Brochure <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </a>

              <a href="#team" className="block">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255,255,255,1)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/60 backdrop-blur-md border border-slate-200 text-slate-700 font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 font-montserrat tracking-wide group"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors border border-slate-200">
                    <Play size={12} className="ml-0.5 fill-slate-600 group-hover:fill-blue-600 transition-colors" />
                  </div>
                  Get Free Trial
                </motion.button>
              </a>
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

      {/* Scroll Indicator - Different for mobile and desktop */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-300 pointer-events-none z-30 flex flex-col items-center gap-2 lg:block hidden"
        initial={{ opacity: 0 }}
        animate={!isMobile && introFinished ? { opacity: 1 } : { opacity: 0 }}
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

      {/* Mobile Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-300 pointer-events-none z-30 flex flex-col items-center gap-2 lg:hidden block"
        initial={{ opacity: 0 }}
        animate={isMobile || introFinished ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
        <span className="text-[8px] font-bold uppercase text-slate-400/70 tracking-[0.15em]">Scroll</span>
      </motion.div>
    </section >
  );
};

export default Hero;