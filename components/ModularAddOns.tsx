import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

const motion = m as any;
import { 
  Gem, 
  Scan, 
  Smartphone, 
  BarChart3, 
  Users, 
  FileText, 
  CreditCard, 
  Settings,
  Star,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Scale,
  Building2
} from 'lucide-react';
import FeatureCard3D from './FeatureCard3D';

interface AddOn {
  id: string;
  title: string;
  description: string;
  features: string[];
  valueProposition: string;
  successMetrics: string;
  icon: React.ReactNode;
  color: string;
  details: string;
}

const ModularAddOns: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const addOns: AddOn[] = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Integration',
      description: 'Seamless customer communication and support',
      features: [
        'Automated order notifications',
        'Customer inquiry handling',
        'Appointment scheduling',
        'Payment reminders'
      ],
      valueProposition: 'Increase customer engagement by 70%',
      successMetrics: 'Used by 1000+ jewellers for customer communication',
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      details: 'Our WhatsApp integration allows you to communicate with customers directly through the platform they use most. Send order updates, respond to inquiries, schedule appointments, and send payment reminders automatically.'
    },
    {
      id: 'jadatar',
      title: 'Jadatar Process',
      description: 'Advanced gold testing and certification system',
      features: [
        'Accurate gold purity testing',
        'Digital certification',
        'Quality assurance tracking',
        'Compliance reporting'
      ],
      valueProposition: 'Ensure 99.9% accuracy in gold testing',
      successMetrics: 'Trusted by 500+ jewellers for quality assurance',
      icon: <Gem className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-500',
      details: 'The Jadatar Process integration ensures accurate gold testing and certification. Our system provides digital certificates and tracks quality assurance metrics to maintain compliance with industry standards.'
    },
    {
      id: 'weight-scale',
      title: 'Weight Scale Attachment',
      description: 'Precise digital weighing integration',
      features: [
        'Real-time weight capture',
        'Automated data logging',
        'Calibration tracking',
        'Integration with inventory'
      ],
      valueProposition: 'Achieve 0.001g precision in weighing',
      successMetrics: 'Used by 2000+ jewellers for accurate weighing',
      icon: <Scale className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      details: 'Connect digital scales directly to your ERP system for real-time weight capture. Our integration automatically logs data, tracks calibration schedules, and syncs with inventory management for precise tracking.'
    },
    {
      id: 'crm',
      title: 'CRM Report',
      description: 'Advanced customer relationship management',
      features: [
        'Customer history tracking',
        'Purchase pattern analysis',
        'Loyalty program management',
        'Targeted marketing tools'
      ],
      valueProposition: 'Increase customer retention by 45%',
      successMetrics: 'Helps businesses track 50,000+ customer interactions',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-500',
      details: 'Our CRM reporting system tracks customer interactions, purchase patterns, and preferences. Use this data to implement loyalty programs and targeted marketing campaigns for better customer retention.'
    },

    {
      id: 'branch',
      title: 'Branch Management',
      description: 'Multi-location business control system',
      features: [
        'Centralized inventory control',
        'Inter-branch transfers',
        'Performance tracking',
        'Unified reporting'
      ],
      valueProposition: 'Manage multiple locations from one dashboard',
      successMetrics: 'Helps businesses manage 100+ branches efficiently',
      icon: <Building2 className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-500',
      details: 'Our branch management system provides centralized control over multiple locations. Track inventory across all branches, manage transfers, monitor performance, and generate unified reports.'
    },
    {
      id: 'rfid',
      title: 'RFID Integration',
      description: 'Advanced tracking system for inventory management',
      features: [
        'Real-time inventory tracking',
        'Automated stock updates',
        'Theft prevention',
        'Detailed movement analytics'
      ],
      valueProposition: 'Reduce inventory discrepancies by up to 95%',
      successMetrics: 'Trusted by 2,000+ jewellers worldwide',
      icon: <Scan className="w-6 h-6" />,
      color: 'from-rose-500 to-pink-500',
      details: 'Our RFID integration provides seamless tracking from procurement to point of sale. Each item is tagged with a unique identifier that updates inventory levels in real-time, preventing loss and improving accuracy.'
    }
  ];

  return (
    <section id="addons" className="py-24 bg-gradient-to-br from-blue-50 via-sky-50/30 to-blue-50 relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 20%)" 
      }}></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Background 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-16 h-16 opacity-10">
          <FeatureCard3D 
            title="" 
            description="" 
            icon={<Gem className="w-6 h-6" />} 
            position={[-2, 0, 0]} 
            scale={0.5} 
            rotationSpeed={0.3} 
          />
        </div>
        <div className="absolute bottom-1/3 right-20 w-12 h-12 opacity-10">
          <FeatureCard3D 
            title="" 
            description="" 
            icon={<Settings className="w-6 h-6" />} 
            position={[2, 1, 0]} 
            scale={0.4} 
            rotationSpeed={0.5} 
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
            </motion.div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-montserrat font-bold text-stone-900 mb-6"
          >
            Modular <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500 font-extrabold">Add-Ons</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-montserrat"
          >
            Customize your ERP solution with premium add-ons designed for the jewellery industry. 
            Scale your business with only the features you need.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addOns.map((addOn, index) => (
            <motion.div
              key={addOn.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-white/70 via-blue-50/60 to-sky-50/50 backdrop-blur-sm rounded-2xl p-1 border border-blue-200/40 shadow-xl hover:shadow-2xl/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className={`bg-gradient-to-r ${addOn.color} p-6 text-white rounded-t-xl`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-white bg-opacity-20 rounded-xl">
                        {addOn.icon}
                      </div>
                      <h3 className="text-xl font-montserrat font-bold font-extrabold">{addOn.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-t-xl p-6 flex-grow">
                  <p className="text-stone-600 mb-4 font-montserrat">{addOn.description}</p>

                  <div className="mb-4 p-3 bg-gradient-to-r from-blue-50/60 to-cyan-50/50 rounded-xl border border-blue-200/40">
                    <div className="flex items-center text-sm text-stone-500 mb-2 font-montserrat">
                      <Star className="w-4 h-4 text-amber-500 mr-1" />
                      <span className="font-bold">Success Metrics</span>
                    </div>
                    <div className="text-sm text-stone-600 font-montserrat">{addOn.successMetrics}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-stone-700 mb-3 font-montserrat flex items-center gap-2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                      <span>Key Features:</span>
                    </div>
                    <ul className="space-y-2">
                      {addOn.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start p-2 -ml-2 rounded-lg hover:bg-blue-50/50 transition-colors duration-200">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-stone-600 font-montserrat">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => toggleExpand(addOn.id)}
                    className="w-full mt-4 py-3 bg-gradient-to-r from-blue-50/70 via-sky-50/60 to-cyan-50/50 hover:from-blue-100 hover:via-sky-100 hover:to-cyan-100 rounded-xl text-stone-700 font-medium transition-all duration-300 flex items-center justify-center font-montserrat shadow-sm hover:shadow-md border border-blue-200/50"
                  >
                    {expandedCard === addOn.id ? 'Show Less' : 'Learn More'}
                    <ArrowRight 
                      className={`w-4 h-4 ml-2 transition-transform ${expandedCard === addOn.id ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {expandedCard === addOn.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-stone-200/50 bg-stone-50/30 rounded-xl p-6"
                    >
                      <p className="text-stone-600 text-sm font-montserrat mb-6">{addOn.details}</p>
                      <div className="flex justify-end">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-500/30 font-montserrat">
                          Request Demo
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-cyan-500/10 rounded-full border border-blue-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider font-montserrat">Enterprise Edition Includes All Add-Ons</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModularAddOns;