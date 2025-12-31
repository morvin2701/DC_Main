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
  ArrowRight
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
      color: 'from-blue-500 to-cyan-500',
      details: 'Our RFID integration provides seamless tracking from procurement to point of sale. Each item is tagged with a unique identifier that updates inventory levels in real-time, preventing loss and improving accuracy.'
    },
    {
      id: 'mobile',
      title: 'Mobile Apps',
      description: 'Complete ERP functionality on your fingertips',
      features: [
        'Inventory management on-the-go',
        'Customer relationship tools',
        'Sales tracking',
        'Offline capabilities'
      ],
      valueProposition: 'Increase sales efficiency by 40%',
      successMetrics: 'Used by 500+ field sales teams',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      details: 'Our mobile application extends your ERP system to mobile devices, allowing staff to manage inventory, process sales, and interact with customers from anywhere in your store or at off-site events.'
    },
    {
      id: 'analytics',
      title: 'Deep Analytics',
      description: 'Advanced business intelligence tools',
      features: [
        'Predictive inventory models',
        'Sales trend analysis',
        'Customer behavior insights',
        'Financial reporting'
      ],
      valueProposition: 'Make data-driven decisions with 98% accuracy',
      successMetrics: 'Helps businesses increase profits by 25%',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-500',
      details: 'Leverage advanced analytics to understand your business better. Our AI-powered insights provide predictive models for inventory, sales forecasting, and customer behavior analysis.'
    },
    {
      id: 'workers',
      title: 'Karigar Management',
      description: 'Complete worker and artisan management system',
      features: [
        'Time tracking and payroll',
        'Project assignment',
        'Performance metrics',
        'Commission calculations'
      ],
      valueProposition: 'Optimize worker productivity by 35%',
      successMetrics: 'Manages 10,000+ artisans efficiently',
      icon: <Users className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-500',
      details: 'Efficiently manage your artisans and workers with our Karigar Management system. Track time, assign projects, calculate commissions, and monitor productivity with detailed analytics.'
    },
    {
      id: 'billing',
      title: 'Advanced Billing',
      description: 'Sophisticated invoicing solutions',
      features: [
        'Multi-currency support',
        'Custom invoice templates',
        'Automated billing processes',
        'Tax calculations'
      ],
      valueProposition: 'Reduce billing errors by 90%',
      successMetrics: 'Helps businesses process 10,000+ invoices efficiently',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-rose-500 to-pink-500',
      details: 'Our advanced billing system handles complex pricing structures, multi-currency transactions, and automated billing processes while ensuring compliance with local tax regulations.'
    }
  ];

  return (
    <section id="addons" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
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
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-6"
          >
            Modular <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Add-Ons</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed"
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
              <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className={`bg-gradient-to-r ${addOn.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-white bg-opacity-20 rounded-full">
                        {addOn.icon}
                      </div>
                      <h3 className="text-xl font-bold">{addOn.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <p className="text-stone-600 mb-4">{addOn.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center text-sm text-stone-500 mb-2">
                      <Star className="w-4 h-4 text-amber-500 mr-1" />
                      Success Metrics
                    </div>
                    <div className="text-sm text-stone-600">{addOn.successMetrics}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-stone-700 mb-2">Key Features:</div>
                    <ul className="space-y-1">
                      {addOn.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-stone-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => toggleExpand(addOn.id)}
                    className="w-full mt-4 py-3 bg-stone-50 hover:bg-stone-100 rounded-xl text-stone-700 font-medium transition-colors flex items-center justify-center"
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
                      className="mt-4 pt-4 border-t border-stone-200"
                    >
                      <p className="text-stone-600 text-sm">{addOn.details}</p>
                      <div className="mt-4 flex justify-end">
                        <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-amber-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-amber-500 text-white rounded-full text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Enterprise Edition Includes All Add-Ons
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModularAddOns;