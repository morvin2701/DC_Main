import React from 'react';
import { motion as m } from 'framer-motion';
import { Smartphone, CheckCircle, BookOpen, Layers, Star, Zap, MonitorSmartphone } from 'lucide-react';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

const MobileApps: React.FC = () => {
  return (
    <section id="mobile-apps" className="py-32 bg-gradient-to-br from-stone-50 via-amber-50 to-stone-50 overflow-hidden relative">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{ 
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(233, 211, 168, 0.1) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(120, 111, 100, 0.1) 0%, transparent 20%)" 
      }}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-champagne-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Mobility & Innovation</span>
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-stone-900 mb-6">
            Business in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne-500 to-champagne-700 font-extrabold">Pocket</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Stay connected to your business 24/7. Our suite of mobile applications ensures you are always in control, whether you are on the floor or on the go.
          </p>
        </div>

        {/* 1. Main ERP App Section */}
        <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="order-2 md:order-1 py-4"
                >
                    <h3 className="text-3xl font-montserrat font-bold text-stone-900 mb-6 flex items-center gap-3 group">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-champagne-100 to-amber-100 border border-champagne-200/50 group-hover:shadow-lg transition-all duration-300">
                          <MonitorSmartphone className="text-champagne-600" />
                        </div>
                        <span className="group-hover:bg-gradient-to-r group-hover:from-champagne-500 group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 font-extrabold">Jewellery Accounting App</span>
                    </h3>
                    <p className="text-stone-600 mb-10 leading-relaxed text-lg">
                       Seamlessly connected to your main ERP system, our mobile application provides powerful data access and control capabilities. Real-time synchronization technology ensures that your inventory levels, sales figures, and business data remain consistently accurate across all platforms. The app enables you to access critical business performance metrics, efficiently manage financial transactions, and maintain continuous connectivity to your core business operations from any location, at any time of day or night.
                    </p>
                    
                    <div className="space-y-8">
                        {/* Essentials (Free) Plan */}
                        <motion.div 
                          whileHover={{ y: -5 }}
                          className="group bg-gradient-to-br from-stone-50 to-stone-100 p-8 rounded-3xl border border-stone-200/70 shadow-lg transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-gradient-to-br from-amber-100/30 to-transparent rounded-full blur-xl"></div>
                            <h4 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center text-stone-600 font-bold text-sm border border-stone-300 shadow-sm">01</div> 
                                <span>Essentials (Free)</span>
                                <span className="ml-auto px-4 py-1.5 bg-gradient-to-r from-stone-200 to-stone-300 text-stone-600 text-xs font-bold rounded-full uppercase tracking-wider border border-stone-300 shadow-sm">No Cost</span>
                            </h4>
                            <p className="text-stone-600 mb-6 text-sm relative z-10">Perfect for small businesses and basic accounting needs.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                                {[
                                    { icon: <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />, text: 'Ledger Reports' },
                                    { icon: <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />, text: 'Item Wise Stock' },
                                    { icon: <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />, text: 'Estimate Quotation' },
                                    { icon: <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />, text: 'Stock Image Upload' },
                                    { icon: <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />, text: 'Basic Inventory Tracking' },
                                    { icon: <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />, text: 'Sales Overview' },
                                    { icon: <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />, text: 'Daily Transaction Summary' },
                                    { icon: <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />, text: 'Customer History' }
                                ].map((item, i) => (
                                    <motion.div 
                                      key={i}
                                      whileHover={{ x: 5 }}
                                      className="flex items-center text-sm text-stone-700 py-2 transition-colors duration-300"
                                    >
                                        {item.icon} {item.text}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Professional (Paid) Plan */}
                        <motion.div 
                          whileHover={{ y: -5 }}
                          className="group bg-gradient-to-br from-champagne-50/70 to-amber-50/70 p-8 rounded-3xl border-l-4 border-champagne-500 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-gradient-to-br from-champagne-200/30 to-transparent rounded-full blur-xl"></div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-champagne-500 to-transparent"></div>
                            <h4 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-champagne-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-md">02</div> 
                                <span>Professional (Paid)</span>
                                <span className="ml-auto px-4 py-1.5 bg-gradient-to-r from-champagne-500 to-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md">Premium</span>
                            </h4>
                            <p className="text-stone-600 mb-6 text-sm relative z-10">Advanced features for growing businesses with comprehensive management capabilities.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                                {[
                                    { icon: <Star className="w-4 h-4 text-champagne-500 mr-2" />, text: 'Party Accounts' },
                                    { icon: <Star className="w-4 h-4 text-champagne-500 mr-2" />, text: 'WhatsApp Sharing' },
                                    { icon: <Star className="w-4 h-4 text-champagne-500 mr-2" />, text: 'PDF Reports' },
                                    { icon: <Star className="w-4 h-4 text-champagne-500 mr-2" />, text: 'Order Management' },
                                    { icon: <Star className="w-4 h-4 text-champagne-500 mr-2" />, text: 'Advanced Analytics' },
                                    { icon: <Star className="w-4 h-4 text-champagne-500 mr-2" />, text: 'Multi-location Inventory' },
                                    { icon: <Star className="w-4 h-4 text-champagne-500 mr-2" />, text: 'Purchase Order Management' },
                                    { icon: <Star className="w-4 h-4 text-champagne-500 mr-2" />, text: 'Custom Report Builder' },
                                    { icon: <Star className="w-4 h-4 text-champagne-500 mr-2" />, text: 'Cloud Backup & Sync' },
                                    { icon: <Star className="w-4 h-4 text-champagne-500 mr-2" />, text: 'Custom Branding' },
                                    { icon: <Star className="w-4 h-4 text-champagne-500 mr-2" />, text: 'API Access' },
                                    { icon: <Star className="w-4 h-4 text-champagne-500 mr-2" />, text: 'Advanced Security' }
                                ].map((item, i) => (
                                    <motion.div 
                                      key={i}
                                      whileHover={{ x: 5 }}
                                      className="flex items-center text-sm text-stone-700 py-2 transition-colors duration-300"
                                    >
                                        {item.icon} {item.text}
                                    </motion.div>
                                ))}
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-stone-200/50 relative z-10">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.div whileHover={{ scale: 1.02 }} className="flex-1 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-stone-200/50 shadow-sm">
                                        <h5 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-champagne-500" /> Key Benefits
                                        </h5>
                                        <ul className="text-sm text-stone-600 space-y-1">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Real-time business insights
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Enhanced security features
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Priority customer support
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> 24/7 technical assistance
                                            </li>
                                        </ul>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.02 }} className="flex-1 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-stone-200/50 shadow-sm">
                                        <h5 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                                            <Smartphone className="w-4 h-4 text-champagne-500" /> Mobile Features
                                        </h5>
                                        <ul className="text-sm text-stone-600 space-y-1">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Offline data access
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Push notifications
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Multi-user collaboration
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Real-time synchronization
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9, y: 30 }}
                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
                   transition={{ duration: 0.8 }}
                   className="order-1 md:order-2 flex flex-col items-center justify-center gap-10 relative max-w-[400px] mx-auto"
                >
                     <div className="text-center mb-6">
                        <span className="inline-block px-6 py-2 bg-gradient-to-r from-champagne-500/15 to-amber-500/15 text-champagne-600 font-bold text-sm rounded-full uppercase tracking-wider border border-champagne-500/30 shadow-lg">
                          Premium Mobile Experience
                        </span>
                     </div>
                     
                     <div className="relative w-full flex flex-col items-center gap-16">
                        <motion.div 
                           animate={{ y: [-8, 8, -8] }}
                           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                           className="relative z-10 w-full"
                        >
                           <div className="absolute inset-0 bg-gradient-to-br from-champagne-300/20 to-amber-300/10 rounded-[4rem] blur-3xl transform scale-125 -z-10"></div>
                           <div className="relative bg-gradient-to-br from-stone-100/30 to-stone-200/20 backdrop-blur-xl rounded-[3rem] border border-stone-300/40 shadow-2xl overflow-hidden p-6">
                              <img 
                                  src="/assets/02.png" 
                                  alt="Jewellery Accounting App" 
                                  className="w-full max-w-md rounded-[2.5rem] shadow-inner"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://placehold.co/800x1600/fdf6f0/8b7355?text=Jewellery+Accounting';
                                  }}
                              />
                           </div>
                           <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-stone-800 to-stone-900 text-white px-8 py-4 rounded-2xl text-base font-bold whitespace-nowrap shadow-2xl border border-stone-700/50">
                             Jewellery Accounting
                           </div>
                        </motion.div>
                        
                        <motion.div 
                           animate={{ y: [8, -8, 8] }}
                           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                           className="relative z-10 w-full"
                        >
                           <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-yellow-300/10 rounded-[4rem] blur-3xl transform scale-125 -z-10"></div>
                           <div className="relative bg-gradient-to-br from-stone-100/30 to-stone-200/20 backdrop-blur-xl rounded-[3rem] border border-stone-300/40 shadow-xl overflow-hidden p-6">
                              <img 
                                  src="/assets/04.png" 
                                  alt="E-Catalogue" 
                                  className="w-full max-w-md rounded-[2.5rem] shadow-inner"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://placehold.co/800x1600/fdf6f0/8b7355?text=E-Catalogue';
                                  }}
                              />
                           </div>
                           <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-2xl text-base font-bold whitespace-nowrap shadow-2xl border border-amber-700/50">
                             E-Catalogue
                           </div>
                        </motion.div>
                        
                        <motion.div 
                           animate={{ y: [-8, 8, -8] }}
                           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                           className="relative z-10 w-full"
                        >
                           <div className="absolute inset-0 bg-gradient-to-br from-stone-300/20 to-gray-300/10 rounded-[4rem] blur-3xl transform scale-125 -z-10"></div>
                           <div className="relative bg-gradient-to-br from-stone-100/30 to-stone-200/20 backdrop-blur-xl rounded-[3rem] border border-stone-300/40 shadow-xl overflow-hidden p-6">
                              <img 
                                  src="/assets/05.png" 
                                  alt="Gold Scheme" 
                                  className="w-full max-w-md rounded-[2.5rem] shadow-inner"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://placehold.co/800x1600/fdf6f0/8b7355?text=Gold+Scheme';
                                  }}
                              />
                           </div>
                           <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-stone-600 to-stone-700 text-white px-8 py-4 rounded-2xl text-base font-bold whitespace-nowrap shadow-2xl border border-stone-700/50">
                             Gold Scheme
                           </div>
                        </motion.div>
                     </div>
                </motion.div>
            </div>
        </div>

        {/* 2. E-Catalogue & Gold Scheme Grid */}
        <div className="grid md:grid-cols-2 gap-8">
            {/* E-Catalogue */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/70 to-stone-50/70 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden flex flex-col border border-stone-200/70 shadow-lg group transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10"
            >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <BookOpen size={120} />
                </div>
                <div className="mb-4 relative z-10">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-amber-100/80 to-stone-100/80 text-stone-600 font-bold text-xs rounded-full uppercase tracking-wide border border-stone-200/70 shadow-sm">Digital Showcase</span>
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-3 text-stone-900 relative z-10 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 font-extrabold">E-Catalogue</h3>
                <p className="text-stone-500 mb-6 leading-relaxed flex-grow relative z-10">
                    Impress clients with a sleek, customizable digital catalogue. Replace bulky physical catalogs with high-resolution images and instant search capabilities.
                </p>
                <div className="flex gap-4 pt-4 border-t border-stone-200/50 relative z-10">
                    <div className="flex items-center gap-2 text-sm font-bold text-stone-700">
                        <Layers className="text-champagne-500" size={16} /> Customizable
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-stone-700">
                        <Zap className="text-champagne-500" size={16} /> Instant Share
                    </div>
                </div>
            </motion.div>

            {/* Gold Scheme App */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/70 to-stone-50/70 backdrop-blur-sm rounded-2xl p-8 border border-stone-200/70 shadow-lg relative overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-stone-500/10"
            >
                <div className="mb-4 relative z-10">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-champagne-500/90 to-amber-500/90 text-white font-bold text-xs rounded-full uppercase tracking-wide border border-champagne-200/50 shadow-sm">Customer Loyalty</span>
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-3 text-stone-900 relative z-10 group-hover:bg-gradient-to-r group-hover:from-stone-600 group-hover:to-stone-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 font-extrabold">Gold Scheme App</h3>
                <p className="text-stone-500 mb-6 leading-relaxed flex-grow relative z-10">
                    Modernize your monthly saving schemes. Customers can track payments, view maturity dates, and pay installments online, building trust and transparency.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-stone-900 to-stone-800 hover:from-champagne-500 hover:to-amber-500 hover:text-white text-white rounded-xl font-bold transition-all shadow-md relative z-10 uppercase text-xs tracking-widest border border-stone-200"
                >
                    Request Demo
                </motion.button>
            </motion.div>
        </div>
        
        <div className="mt-20 text-center">
            <p className="text-stone-400 text-xs mb-6 uppercase tracking-[0.2em] font-bold">Download Available On</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <button className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#4285F4] to-[#3367d6] rounded-xl hover:from-[#3367d6] hover:to-[#4285F4] transition-all duration-300 group min-w-[220px] shadow-lg hover:shadow-xl border border-white/20">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1024px-Google_Play_Store_badge_EN.svg.png" 
                        alt="Google Play Store" 
                        className="w-14 h-14 object-contain"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQ1OC4xIDQyNy44QzQ1MSA0MzIuMSA0NDAuNiA0MzIuMSA0MzMuNSA0MjcuOGMtMzQuMi0yMC4xLTM0LjItNjMuNiAwLTgzLjdsMTg1LTEwNy44YzM0LjItMTkuOSA1NS43LTcuOSA1NS43IDM5LjN2MzA0LjRjMCA0Ny4yLTIxLjUgNTkuMi01NS43IDM5LjN6TTgwMCAyNTZMNTQ0IDQxNlY5Nkw4MDAgMjU2eiIvPjwvc3ZnPg==';
                        }}
                    />
                    <div className="text-left">
                        <div className="text-[9px] uppercase tracking-wider text-white/80">GET IT ON</div>
                        <div className="font-bold text-white text-base leading-none">Google Play</div>
                    </div>
                </button>
                <button className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-black to-gray-800 rounded-xl hover:from-gray-800 hover:to-black transition-all duration-300 group min-w-[220px] shadow-lg hover:shadow-xl border border-white/20">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" 
                        alt="App Store" 
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTgwMCA0MTZMNzA0IDUxMlYzODRMMzIwIDM4NEwzMiA1MTJWMzIwTDEyOCAyMjRMMzIwIDEyOEw0MTYgMjI0TDUxMiAxMjhMNjA4IDIyNEw3MDQgMTI4TDgwMCAyMjRWNDE2ek0yMjQgMTI4TDEyOCAyMjRMMjI0IDMzNkwzMjAgMjI0TDIyNCAxMjh6Ii8+PC9zdmc+';
                        }}
                    />
                    <div className="text-left">
                        <div className="text-[9px] uppercase tracking-wider text-white/80">Download on the</div>
                        <div className="font-bold text-white text-base leading-none">App Store</div>
                    </div>
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApps;