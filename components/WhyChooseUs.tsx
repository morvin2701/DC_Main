  import React from 'react';
import { motion as m } from 'framer-motion';
import { Shield, TrendingUp, Clock, Globe, FileCheck, Users, Sparkles, Gem, Star, Sparkle } from 'lucide-react';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

const BenefitCard = ({ title, desc, icon: Icon, delay, index }: { title: string, desc: string, icon: any, delay: number, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="relative group overflow-hidden bg-gradient-to-br from-white/70 via-blue-50/60 to-sky-50/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/40 shadow-xl hover:shadow-2xl/50 transition-all duration-500 hover:-translate-y-2"
  >
    {/* Premium background effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-sky-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Number badge */}
    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-sky-600 flex items-center justify-center text-white text-xs font-bold z-10">
      {index + 1}
    </div>
    
    <div className="relative z-10">
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-sky-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{desc}</p>
      
      {/* Hover effect line */}
      <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </motion.div>
);

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Precision Compliance",
      desc: "Automated Hallmarking integration and GST reporting ensure your business meets all regulatory standards without manual intervention.",
      icon: FileCheck
    },
    {
      title: "Loss Prevention",
      desc: "Granular tracking of metal loss during manufacturing and refining processes. Account for every milligram of gold.",
      icon: Shield
    },
    {
      title: "Real-Time Scalability",
      desc: "Architecture designed to handle high-volume transaction loads during peak seasons like Dhanteras and Diwali.",
      icon: TrendingUp
    },
    {
      title: "Multi-Location Sync",
      desc: "Centralized control for chains. Push pricing updates and view global inventory across 50+ stores instantly.",
      icon: Globe
    },
    {
      title: "Accelerated Operations",
      desc: "Reduce checkout times by 40% with integrated RFID scanning and rapid billing interfaces.",
      icon: Clock
    },
    {
      title: "Role-Based Security",
      desc: "Detailed access controls ensuring employees only see the data relevant to their specific function.",
      icon: Users
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-blue-50 via-sky-50/30 to-blue-50 relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 20%)" 
      }}></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-cyan-500/10 rounded-full border border-blue-500/30 mb-6">
            <Star className="text-blue-500" size={16} />
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider">Trusted by Leaders</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 relative"
          >
            Why Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500">Enterprises</span> Choose Datacare
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-stone-600 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Our platform is engineered for the specific complexities of the jewellery supply chain, delivering accuracy where generic ERPs fail.
          </motion.p>
          
          {/* Decorative elements */}
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <div 
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              title={benefit.title}
              desc={benefit.desc}
              icon={benefit.icon}
              delay={0.1 * index}
              index={index}
            />
          ))}
        </motion.div>
        
        {/* Premium footer element */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-10 py-6 bg-gradient-to-r from-blue-100/60 via-sky-50/50 to-blue-100/60 backdrop-blur-sm rounded-2xl border border-blue-500/20 shadow-xl shadow-blue-500/10">
            <Gem className="text-blue-600" size={28} />
            <div>
              <p className="font-bold text-stone-900 text-lg">Join the ranks of industry leaders</p>
              <p className="text-stone-600 text-sm mt-1">Experience the difference that true jewelry expertise makes</p>
            </div>
            <Sparkles className="text-sky-500" size={28} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;