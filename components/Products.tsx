import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { Download, Check, ArrowRight, Plus, Box, ShieldCheck, Smartphone, Layers, Diamond } from 'lucide-react';

const motion = m as any;

const productsData: Product[] = [
  { 
    id: '1', 
    name: 'Standard', 
    tagline: 'Retail Essentials', 
    features: [
      'Barcode & Tag Stock Management',
      'GST, HUID & Compliance Reports',
      'Repairing Module & Order Booking',
      'Daily Gold/Silver Rate Fixing',
      'Dead Stock & Fine Reports'
    ], 
    type: 'Retail', 
    tier: 'Standard' 
  },
  { 
    id: '2', 
    name: 'Ultra', 
    tagline: 'Mobility Suite', 
    features: [
      'Includes All Standard Features',
      'iOS & Android Mobile Apps',
      'Monthly Gold/Amount Schemes',
      'Old Item Melt Process',
      'Bill-to-Bill Amount Receipt'
    ], 
    type: 'Retail', 
    tier: 'Ultra' 
  },
  { 
    id: '3', 
    name: 'Pro', 
    tagline: 'Wholesale & Finance', 
    features: [
      'Includes All Ultra Features',
      'Girvi / Loan Management',
      'Purchase Approval & Bill Images',
      'Bank Reconciliation & Analysis',
      'Stock Movement (Weight-wise)'
    ], 
    type: 'Wholesale', 
    tier: 'Pro' 
  },
  { 
    id: '4', 
    name: 'Advanced', 
    tagline: 'Manufacturing Unit', 
    features: [
      'Includes All Pro Features',
      'Employee Salary Management',
      'Jewellery Certificates',
      'Day Wise Trial Balance Sheet',
      'Sale Bill Split Facility'
    ], 
    type: 'Manufacturing', 
    tier: 'Advanced' 
  },
  { 
    id: '5', 
    name: 'Enterprise', 
    tagline: 'Multi-Chain Ecosystem', 
    features: [
      'Includes All Advanced Features',
      'Diamond & Bullion Management',
      'Customer Loyalty Program',
      'Deep Profitability Analytics',
      'Granular User Locks & Permissions'
    ], 
    type: 'Chain', 
    tier: 'Enterprise' 
  },
];

const Products: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredProducts = filter === 'All' 
    ? productsData 
    : productsData.filter(p => p.type === filter);

  return (
    <section id="products" className="py-24 bg-slate-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Enterprise Editions</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Select the tier that matches your operational scale. From single showrooms to complex multi-branch chains.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['All', 'Retail', 'Wholesale', 'Manufacturing', 'Chain'].map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all border ${
                  filter === type 
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md' 
                    : 'bg-white text-stone-500 border-stone-200 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`flex flex-col bg-white border rounded-xl p-6 hover:shadow-xl transition-all duration-300 relative ${
                  product.tier === 'Enterprise' 
                    ? 'border-blue-500 ring-1 ring-blue-500 shadow-lg shadow-blue-100' 
                    : 'border-stone-200 shadow-sm'
                }`}
              >
                {product.tier === 'Enterprise' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Diamond size={10} /> Ultimate
                  </div>
                )}

                <div className="mb-6 text-center border-b border-stone-100 pb-4">
                  <h3 className="text-lg font-bold text-stone-900">{product.name}</h3>
                  <p className="text-stone-500 text-xs font-medium uppercase tracking-wide mt-1">{product.tagline}</p>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-stone-600 text-xs leading-relaxed">
                        <Check className={`w-3.5 h-3.5 mt-0.5 mr-2 flex-shrink-0 ${
                            product.tier === 'Enterprise' ? 'text-blue-600' : 'text-green-500'
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${
                  product.tier === 'Enterprise' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg' 
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-900 hover:text-white border border-stone-200'
                }`}>
                  Select Edition
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Add-ons Section */}

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold text-sm bg-blue-50 px-6 py-3 rounded-full transition-colors">
            <Download size={16} /> Download Complete Feature Matrix (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;