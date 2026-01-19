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
  const [selectedEdition, setSelectedEdition] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  const handleSelectEdition = (productName: string, tier: string, productId: string) => {
    setIsProcessing(productName);

    // Add animation effect
    setTimeout(() => {
      setSelectedEdition(productName);
      setIsProcessing(null);

      // Add the product to comparison
      if (!selectedForComparison.includes(productId)) {
        if (selectedForComparison.length < 2) {
          // Add if less than 2 selected
          const newComparisonList = [...selectedForComparison, productId];
          setSelectedForComparison(newComparisonList);

          // If we now have 2 products, show comparison view immediately
          if (newComparisonList.length === 2) {
            setComparisonMode(false); // Ensure comparison mode is off to show comparison view
          }
        } else {
          // If already 2 selected, replace the first one
          const newComparisonList = [selectedForComparison[1], productId];
          setSelectedForComparison(newComparisonList);
          setComparisonMode(false); // Show comparison view
        }
      }
    }, 500);
  };

  // Comparison functionality
  const [comparisonMode, setComparisonMode] = useState(false);
  const [selectedForComparison, setSelectedForComparison] = useState<string[]>([]);

  const toggleComparisonMode = () => {
    setComparisonMode(!comparisonMode);
    if (!comparisonMode) {
      setSelectedForComparison([]);
    }
  };

  const selectForComparison = (productId: string) => {
    if (selectedForComparison.includes(productId)) {
      // Remove if already selected
      setSelectedForComparison(selectedForComparison.filter(id => id !== productId));
    } else if (selectedForComparison.length < 2) {
      // Add if less than 2 selected
      setSelectedForComparison([...selectedForComparison, productId]);
    } else {
      // Replace second selection if 2 already selected
      setSelectedForComparison([selectedForComparison[0], productId]);
    }
  };

  const resetComparison = () => {
    setSelectedForComparison([]);
    setComparisonMode(false);
  };

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
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all border ${filter === type
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
                className={`flex flex-col bg-white border rounded-xl p-6 hover:shadow-xl transition-all duration-300 relative ${product.tier === 'Enterprise'
                  ? 'border-blue-500 ring-1 ring-blue-500 shadow-lg shadow-blue-100'
                  : 'border-stone-200 shadow-sm'
                  }`}
              >
                {comparisonMode && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className={`relative w-6 h-6 rounded-md flex items-center justify-center ${selectedForComparison.includes(product.id) ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-white border-2 border-stone-300'} transition-all duration-300`}>
                      <input
                        type="checkbox"
                        checked={selectedForComparison.includes(product.id)}
                        onChange={() => selectForComparison(product.id)}
                        className="absolute opacity-0 w-6 h-6 cursor-pointer z-20"
                      />
                      {selectedForComparison.includes(product.id) && (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-4 h-4 text-white z-10"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </motion.svg>
                      )}
                    </div>
                  </div>
                )}
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
                        <Check className={`w-3.5 h-3.5 mt-0.5 mr-2 flex-shrink-0 ${product.tier === 'Enterprise' ? 'text-blue-600' : 'text-green-500'
                          }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectEdition(product.name, product.tier, product.id)}
                  disabled={isProcessing === product.name}
                  className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${isProcessing === product.name
                    ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                    : product.tier === 'Enterprise'
                      ? 'bg-gradient-to-r from-blue-600 to-amber-500 text-white hover:from-blue-700 hover:to-amber-600 shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-stone-700 to-stone-800 text-white hover:from-stone-800 hover:to-stone-900 border border-stone-200 shadow-md hover:shadow-lg'
                    }`}
                >
                  {isProcessing === product.name ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Compare Version
                      <ArrowRight size={12} className="ml-1" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Comparison View */}
        {selectedForComparison.length === 2 && !comparisonMode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 rounded-3xl overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100 shadow-2xl border border-stone-200/50"
          >
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-amber-500 p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                  <h2 className="text-3xl font-bold font-montserrat">Product Comparison</h2>
                  <p className="text-blue-100 mt-1">Detailed feature comparison between selected editions</p>
                </div>
                <button
                  onClick={resetComparison}
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-white font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <span>Close Comparison</span>
                  <ArrowRight className="rotate-180" size={16} />
                </button>
              </div>
            </div>

            <div className="p-1 bg-gradient-to-r from-blue-500/20 via-transparent to-amber-500/20">
              <div className="overflow-x-auto bg-white rounded-2xl shadow-inner">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="border-b border-stone-200/70 bg-stone-50">
                      <th className="p-6 text-left text-stone-500 font-bold min-w-[250px] text-lg">Features</th>
                      {selectedForComparison.map(productId => {
                        const product = productsData.find(p => p.id === productId);
                        const isEnterprise = product?.tier === 'Enterprise';
                        return (
                          <th key={product?.id} className="p-6 text-center">
                            <div className="flex flex-col items-center">
                              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${isEnterprise ? 'bg-gradient-to-r from-blue-600 to-amber-500 text-white' : 'bg-stone-100 text-stone-700'}`}>
                                <span>{product?.name}</span>
                                {isEnterprise && <Diamond size={14} />}
                              </div>
                              <p className="text-stone-500 text-sm mt-3 font-medium">{product?.tagline}</p>
                              <div className="mt-4 text-stone-700 font-bold">
                                {product?.type}
                              </div>
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Features comparison with hierarchy */}
                    {(() => {
                      // Get both products
                      const product1 = productsData.find(p => p.id === selectedForComparison[0]);
                      const product2 = productsData.find(p => p.id === selectedForComparison[1]);

                      if (!product1 || !product2) return null;

                      // Define the tier hierarchy
                      const tierOrder = {
                        'Standard': 1,
                        'Ultra': 2,
                        'Pro': 3,
                        'Advanced': 4,
                        'Enterprise': 5
                      };

                      // Determine which product is higher in the hierarchy
                      const isProduct1Higher = tierOrder[product1.tier] > tierOrder[product2.tier];
                      const isProduct2Higher = tierOrder[product2.tier] > tierOrder[product1.tier];

                      // Get all features including inherited ones
                      const getAllFeaturesForProduct = (product) => {
                        let allFeatures = [...product.features];

                        // Based on the hierarchy, add features from lower tiers
                        if (product.tier === 'Ultra') {
                          // Ultra includes Standard features
                          const standardFeatures = productsData.find(p => p.tier === 'Standard')?.features || [];
                          allFeatures = [...new Set([...allFeatures, ...standardFeatures])];
                        } else if (product.tier === 'Pro') {
                          // Pro includes Ultra and Standard features
                          const ultraFeatures = productsData.find(p => p.tier === 'Ultra')?.features || [];
                          const standardFeatures = productsData.find(p => p.tier === 'Standard')?.features || [];
                          allFeatures = [...new Set([...allFeatures, ...ultraFeatures, ...standardFeatures])];
                        } else if (product.tier === 'Advanced') {
                          // Advanced includes Pro, Ultra, and Standard features
                          const proFeatures = productsData.find(p => p.tier === 'Pro')?.features || [];
                          const ultraFeatures = productsData.find(p => p.tier === 'Ultra')?.features || [];
                          const standardFeatures = productsData.find(p => p.tier === 'Standard')?.features || [];
                          allFeatures = [...new Set([...allFeatures, ...proFeatures, ...ultraFeatures, ...standardFeatures])];
                        } else if (product.tier === 'Enterprise') {
                          // Enterprise includes Advanced, Pro, Ultra, and Standard features
                          const advancedFeatures = productsData.find(p => p.tier === 'Advanced')?.features || [];
                          const proFeatures = productsData.find(p => p.tier === 'Pro')?.features || [];
                          const ultraFeatures = productsData.find(p => p.tier === 'Ultra')?.features || [];
                          const standardFeatures = productsData.find(p => p.tier === 'Standard')?.features || [];
                          allFeatures = [...new Set([...allFeatures, ...advancedFeatures, ...proFeatures, ...ultraFeatures, ...standardFeatures])];
                        }

                        return allFeatures;
                      };

                      // Get all features for both products including inherited
                      const product1AllFeatures = getAllFeaturesForProduct(product1);
                      const product2AllFeatures = getAllFeaturesForProduct(product2);

                      // Get all unique features
                      const allFeatures = Array.from(
                        new Set([...product1AllFeatures, ...product2AllFeatures])
                      ).sort();

                      return allFeatures.map((feature, index) => {
                        // Check if feature is directly included in each product
                        const isFeatureInProduct1 = product1.features.includes(feature);
                        const isFeatureInProduct2 = product2.features.includes(feature);

                        // Check if feature is inherited
                        const isFeatureInheritedInProduct1 = product1AllFeatures.includes(feature) && !isFeatureInProduct1;
                        const isFeatureInheritedInProduct2 = product2AllFeatures.includes(feature) && !isFeatureInProduct2;

                        // Determine visual indicators
                        const isStandardFeature = feature.includes('Standard') || feature.includes('Essential') || product1.type === 'Retail' && product2.type === 'Retail';
                        const isAdvancedFeature = feature.includes('Advanced') || feature.includes('Pro') || feature.includes('Enterprise');

                        return (
                          <motion.tr
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            key={index}
                            className={`border-b border-stone-100/50 hover:bg-blue-25/30 transition-colors ${index % 2 === 0 ? 'bg-blue-25/20' : 'bg-transparent'} ${isStandardFeature ? 'bg-blue-50/40' : isAdvancedFeature ? 'bg-amber-25/40' : ''}`}
                          >
                            <td className="p-6 font-medium text-stone-700 text-lg py-5">
                              <div className="flex items-start gap-3">
                                <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${isStandardFeature ? 'bg-blue-500' : isAdvancedFeature ? 'bg-amber-500' : 'bg-stone-400'}`}></div>
                                <span>{feature}</span>
                              </div>
                            </td>
                            <td className="p-6 text-center py-5">
                              {product1AllFeatures.includes(feature) ? (
                                <div className="relative inline-flex items-center justify-center">
                                  <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full border-2 ${isFeatureInheritedInProduct1 ? 'bg-gradient-to-br from-blue-100/70 to-blue-200/70 border-blue-300' : 'bg-gradient-to-br from-green-100 to-emerald-100 border-green-200'} text-blue-600`}
                                  >
                                    <Check className="w-6 h-6" />
                                  </motion.div>
                                  {isFeatureInheritedInProduct1 && (
                                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                                      <span className="text-[8px] text-white">↓</span>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-stone-100 to-stone-200 border-2 border-stone-200 text-stone-400">
                                  <span className="text-lg">—</span>
                                </div>
                              )}
                            </td>
                            <td className="p-6 text-center py-5">
                              {product2AllFeatures.includes(feature) ? (
                                <div className="relative inline-flex items-center justify-center">
                                  <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full border-2 ${isFeatureInheritedInProduct2 ? 'bg-gradient-to-br from-blue-100/70 to-blue-200/70 border-blue-300' : 'bg-gradient-to-br from-green-100 to-emerald-100 border-green-200'} text-blue-600`}
                                  >
                                    <Check className="w-6 h-6" />
                                  </motion.div>
                                  {isFeatureInheritedInProduct2 && (
                                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                                      <span className="text-[8px] text-white">↓</span>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-stone-100 to-stone-200 border-2 border-stone-200 text-stone-400">
                                  <span className="text-lg">—</span>
                                </div>
                              )}
                            </td>
                          </motion.tr>
                        );
                      });
                    })()}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-6 bg-stone-50 border-t border-stone-200/50">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span className="text-stone-600 text-sm">Standard Features</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                  <span className="text-stone-600 text-sm">Advanced Features</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-green-400"></div>
                    <span className="text-[10px] text-white w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">↓</span>
                  </div>
                  <span className="text-stone-600 text-sm">Inherited Feature</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-400"></div>
                  <span className="text-stone-600 text-sm">Direct Feature</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-stone-300"></div>
                  <span className="text-stone-600 text-sm">Not Included</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Add-ons Section */}
        {selectedForComparison.length !== 2 && (
          <div className="mt-16 text-center">
            <a href={`${import.meta.env.BASE_URL}versionlist.pdf`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold text-sm bg-blue-50 px-6 py-3 rounded-full transition-colors">
              <Download size={16} /> Download Complete Feature Matrix (PDF)
            </a>
          </div>
        )}


      </div>
    </section>
  );
};

export default Products;