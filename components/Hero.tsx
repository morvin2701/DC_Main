import React, { useRef } from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Play, Server, ShieldCheck } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, Octahedron } from '@react-three/drei';
import BackgroundParticles from './BackgroundParticles';
import JewelShowcase from './JewelShowcase';

const motion = m as any;

const Jewel = () => {
  const meshRef = useRef<any>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
      <Octahedron ref={meshRef} position={[0, 0, 0]} scale={1.8} args={[1, 0]}>
        {/* @ts-ignore */}
        <meshPhysicalMaterial 
          color="#D97706" 
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={1}
        />
      </Octahedron>
    </Float>
  );
};

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={targetRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-24 border-b border-stone-200">
      {/* 3D Background Particles */}
      <BackgroundParticles />
      
      {/* Technical Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-stone-100 z-10" />
        
        {/* Animated Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-stone-300 rounded-full bg-white text-stone-600 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              India's Leading Software Solution Provider 
            </div>
            
            <h1 className="font-sans text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-stone-900 tracking-tight">
              Enterprise ERP for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Modern Jeweller</span>
            </h1>
            
            <p className="text-lg text-stone-600 max-w-xl font-medium leading-relaxed mb-10 border-l-4 border-blue-600 pl-6">
              Streamline multi-store operations, automate inventory tracking, and ensure 100% compliance with Datacare's industry-leading software infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="px-8 py-4 bg-stone-900 text-white hover:bg-blue-700 font-bold text-sm rounded-md transition-all shadow-lg flex items-center justify-center gap-2">
                Schedule Demo <ArrowRight size={16} />
              </a>
              <a href="#features" className="px-8 py-4 bg-white border border-stone-300 text-stone-700 hover:border-blue-500 hover:text-blue-600 font-bold text-sm rounded-md transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <Server size={16} /> View Integrations
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-stone-500 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-600" /> SOC 2 Compliant
              </div>
              <div className="flex items-center gap-2">
                <Server size={18} className="text-blue-600" /> 99.99% Uptime
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3D Model & Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative h-[500px]"
        >
          {/* Premium 3D Jewellery Showcase */}
          <div className="absolute -top-20 -right-10 w-80 h-80 z-20 pointer-events-none">
            <JewelShowcase />
          </div>

          <div className="relative rounded-lg shadow-2xl border border-stone-200 bg-white overflow-hidden transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500 z-10 mt-16">
             {/* Fake Browser Header */}
             <div className="bg-stone-100 border-b border-stone-200 p-3 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 bg-white px-3 py-1 rounded text-[10px] text-stone-400 font-mono w-64">DataCare Softech - Dashboard Preview</div>
             </div>
             <img 
                src="assets/Next.jpg" 
                alt="Datacare ERP Dashboard"
                className="w-full h-auto opacity-95"
             />
             
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-stone-400 cursor-pointer"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;