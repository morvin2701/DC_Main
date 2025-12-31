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
    <section className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
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
                className="flex flex-col items-center text-center bg-white"
              >
                <div className="w-24 h-24 bg-white rounded-full border-4 border-stone-50 flex items-center justify-center mb-6 shadow-sm">
                   <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white">
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