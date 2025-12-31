import React from 'react';
import { motion as m } from 'framer-motion';
import { Shield, TrendingUp, Clock, Globe, FileCheck, Users } from 'lucide-react';

const motion = m as any;

const BenefitCard = ({ title, desc, icon: Icon, delay }: { title: string, desc: string, icon: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition-shadow group"
  >
    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
      <Icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
    </div>
    <h3 className="text-lg font-bold text-stone-900 mb-3">{title}</h3>
    <p className="text-stone-600 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Why Leading Enterprises Choose Datacare</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Our platform is engineered for the specific complexities of the jewellery supply chain, delivering accuracy where generic ERPs fail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard 
            title="Precision Compliance" 
            desc="Automated Hallmarking integration and GST reporting ensure your business meets all regulatory standards without manual intervention."
            icon={FileCheck}
            delay={0.1}
          />
          <BenefitCard 
            title="Loss Prevention" 
            desc="Granular tracking of metal loss during manufacturing and refining processes. Account for every milligram of gold."
            icon={Shield}
            delay={0.2}
          />
          <BenefitCard 
            title="Real-Time Scalability" 
            desc="Architecture designed to handle high-volume transaction loads during peak seasons like Dhanteras and Diwali."
            icon={TrendingUp}
            delay={0.3}
          />
          <BenefitCard 
            title="Multi-Location Sync" 
            desc="Centralized control for chains. Push pricing updates and view global inventory across 50+ stores instantly."
            icon={Globe}
            delay={0.4}
          />
          <BenefitCard 
            title="Accelerated Operations" 
            desc="Reduce checkout times by 40% with integrated RFID scanning and rapid billing interfaces."
            icon={Clock}
            delay={0.5}
          />
          <BenefitCard 
            title="Role-Based Security" 
            desc="Detailed access controls ensuring employees only see the data relevant to their specific function."
            icon={Users}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;