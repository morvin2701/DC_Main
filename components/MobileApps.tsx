import React from 'react';
import { motion as m } from 'framer-motion';
import { Smartphone, CheckCircle, BookOpen, Layers, Star, Zap, MonitorSmartphone } from 'lucide-react';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

const MobileApps: React.FC = () => {
  return (
    <section id="mobile-apps" className="py-32 bg-stone-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-champagne-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Mobility & Innovation</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">
            Business in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne-500 to-champagne-700">Pocket</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Stay connected to your business 24/7. Our suite of mobile applications ensures you are always in control, whether you are on the floor or on the go.
          </p>
        </div>

        {/* 1. Main ERP App Section */}
        <div className="mb-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="order-2 md:order-1"
                >
                    <h3 className="text-3xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-3">
                        <MonitorSmartphone className="text-champagne-600" />
                        Jewellery Accounting App
                    </h3>
                    <p className="text-stone-600 mb-10 leading-relaxed text-lg">
                        Seamlessly connected to your main ERP, our mobile app puts the power of data in your hands. Real-time synchronization ensures your inventory and sales data is always accurate.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="group bg-white p-6 rounded-2xl border border-stone-200 shadow-sm transition-all">
                            <h4 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 font-bold text-xs">01</div> 
                                Essentials (Free)
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {['Ledger Reports', 'Item Wise Stock', 'Estimate Quotation', 'Stock Image Upload'].map((item, i) => (
                                    <div key={i} className="flex items-center text-sm text-stone-600">
                                        <CheckCircle className="w-4 h-4 text-stone-300 mr-2 shrink-0" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="group bg-white p-6 rounded-2xl border-l-4 border-champagne-500 shadow-lg relative overflow-hidden">
                            <h4 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-champagne-500 flex items-center justify-center text-white font-bold text-xs">02</div> 
                                Professional (Paid)
                            </h4>
                            <div className="grid grid-cols-2 gap-3 relative z-10">
                                {['Party Accounts', 'WhatsApp Sharing', 'PDF Reports', 'Order Management'].map((item, i) => (
                                    <div key={i} className="flex items-center text-sm text-stone-700">
                                        <Star className="w-4 h-4 text-champagne-500 mr-2 shrink-0" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9, y: 30 }}
                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
                   transition={{ duration: 0.8 }}
                   className="order-1 md:order-2 flex justify-center relative"
                >
                     <motion.div 
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                     >
                        <div className="absolute inset-0 bg-gradient-to-tr from-champagne-100 to-transparent rounded-[3rem] blur-2xl transform scale-90 -z-10"></div>
                        <img 
                            src="/assets/app-screenshots/Ultra-app.jpg" 
                            alt="Jewellery Accounting App" 
                            className="rounded-[2.5rem] shadow-2xl w-full max-w-md border-4 border-white ring-1 ring-stone-200"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://placehold.co/600x1200/e2e8f0/64748b?text=Ultra+App';
                            }}
                        />
                     </motion.div>
                </motion.div>
            </div>
        </div>

        {/* 2. E-Catalogue & Gold Scheme Grid */}
        <div className="grid md:grid-cols-2 gap-8">
            {/* E-Catalogue */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-10 relative overflow-hidden flex flex-col border border-stone-100 shadow-soft group"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <BookOpen size={150} />
                </div>
                <div className="mb-6">
                    <span className="px-4 py-1.5 bg-stone-100 text-stone-600 font-bold text-xs rounded-full uppercase tracking-wide">Digital Showcase</span>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4 text-stone-900">E-Catalogue</h3>
                <p className="text-stone-500 mb-8 leading-relaxed flex-grow">
                    Impress clients with a sleek, customizable digital catalogue. Replace bulky physical catalogs with high-resolution images and instant search capabilities.
                </p>
                <div className="flex gap-6 pt-6 border-t border-stone-100">
                    <div className="flex items-center gap-2 text-sm font-bold text-stone-700">
                        <Layers className="text-champagne-500" size={18} /> Customizable
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-stone-700">
                        <Zap className="text-champagne-500" size={18} /> Instant Share
                    </div>
                </div>
            </motion.div>

            {/* Gold Scheme App */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-10 border border-stone-100 shadow-soft relative overflow-hidden flex flex-col"
            >
                <div className="mb-6 relative z-10">
                    <span className="px-4 py-1.5 bg-champagne-500 text-white font-bold text-xs rounded-full uppercase tracking-wide">Customer Loyalty</span>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4 text-stone-900 relative z-10">Gold Scheme App</h3>
                <p className="text-stone-500 mb-8 leading-relaxed flex-grow relative z-10">
                    Modernize your monthly saving schemes. Customers can track payments, view maturity dates, and pay installments online, building trust and transparency.
                </p>
                <button className="w-full py-4 bg-stone-900 hover:bg-champagne-500 hover:text-white text-white rounded-xl font-bold transition-all shadow-md relative z-10 uppercase text-xs tracking-widest">
                    Request Demo
                </button>
            </motion.div>
        </div>
        
        <div className="mt-20 text-center">
            <p className="text-stone-400 text-xs mb-6 uppercase tracking-[0.2em] font-bold">Download Available On</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <button className="flex items-center gap-3 px-4 py-3 bg-[#4285F4] rounded-xl hover:bg-[#3367d6] transition-all duration-300 group min-w-[200px]">
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
                <button className="flex items-center gap-3 px-4 py-3 bg-black rounded-xl hover:bg-gray-800 transition-all duration-300 group min-w-[200px]">
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