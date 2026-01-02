import React from 'react';
import { motion as m } from 'framer-motion';
import { ClipboardList, Database, GraduationCap, Rocket } from 'lucide-react';

const motion = m as any;

const steps = [
  {
    id: 1,
    title: 'Discovery & Audit',
    desc: 'We analyze your current workflows and hardware to design a custom implementation plan.',
    icon: ClipboardList,
  },
  {
    id: 2,
    title: 'Data Migration',
    desc: 'Secure transfer of your legacy data (customers, inventory, ledgers) into Datacare cloud.',
    icon: Database,
  },
  {
    id: 3,
    title: 'Staff Training',
    desc: 'On-site or remote training sessions for your sales staff, accountants, and managers.',
    icon: GraduationCap,
  },
  {
    id: 4,
    title: 'Go Live',
    desc: 'Deployment with standby support to ensure a seamless transition on launch day.',
    icon: Rocket,
  }
];

const Journey: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-sky-50/30 to-blue-50 relative overflow-hidden">
      {/* Premium Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat opacity-45"></div>
      
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 20%)" 
      }}></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Your Journey With Us</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            We don't just sell software; we partner with you for success. Our proven onboarding methodology ensures rapid value realization.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-stone-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-stone-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 bg-white/90 rounded-full border-4 border-stone-50 flex items-center justify-center mb-6 shadow-sm">
                   <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white">
                      <step.icon size={28} />
                   </div>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-3">{step.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;