import React from 'react';
import { motion as m } from 'framer-motion';
import { Smartphone, BarChart3, Lock, Zap, Gem, Layers } from 'lucide-react';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

const FeatureCard = ({ title, desc, icon: Icon, delay }: { title: string, desc: string, icon: any, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group p-8 rounded-2xl bg-white border border-stone-100 shadow-soft hover:shadow-premium transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform scale-150">
         <Icon size={100} className="text-champagne-500" />
      </div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-champagne-50 border border-champagne-100 flex items-center justify-center mb-6 text-champagne-600 group-hover:bg-champagne-500 group-hover:text-white transition-colors duration-300 shadow-sm">
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">{title}</h3>
        <p className="text-stone-500 leading-relaxed text-sm">{desc}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-champagne-300 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-stone-50 relative overflow-hidden">
      {/* Light Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block"
          >
             <span className="text-champagne-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Excellence by Design</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Refined <span className="italic text-champagne-600">Engineering</span></h2>
          </motion.div>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Crafted for high-end jewellers, our platform blends robust capability with an interface as elegant as the pieces you showcase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Mobile Freedom" 
            desc="Control your showroom from anywhere. Native iPad and Android apps that sync in real-time with military-grade security."
            icon={Smartphone}
            delay={0.1}
          />
          <FeatureCard 
            title="Crystal Clear Analytics" 
            desc="AI-driven insights that illuminate trends, stock velocity, and customer desires. Turn raw data into gold."
            icon={BarChart3}
            delay={0.2}
          />
          <FeatureCard 
            title="Vault-Grade Security" 
            desc="Advanced encryption and granular role management ensure your high-value inventory data is strictly protected."
            icon={Lock}
            delay={0.3}
          />
          <FeatureCard 
            title="Seamless Hardware" 
            desc="Plug-and-play support for RFID scanners, precision scales, and barcode printers. Speed up stock taking by 10x."
            icon={Zap}
            delay={0.4}
          />
          <FeatureCard 
            title="Precision Inventory" 
            desc="Track every milligram. Manage loose stones, melting losses, and complex making charges with absolute accuracy."
            icon={Gem}
            delay={0.5}
          />
          <FeatureCard 
            title="Multi-Store Sync" 
            desc="One central brain for your entire chain. Synchronize inventory and sales across multiple locations instantly."
            icon={Layers}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;