import React from 'react';
import { motion as m } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kalyan',
    company: 'Kalyan Jewellers (Franchise)',
    role: 'Owner',
    content: 'Switching to Datacare was the best decision for our multi-store setup. The inventory sync is flawless, and the reporting gives us clarity we never had before.',
  },
  {
    id: '2',
    name: 'Meera Soni',
    company: 'Soni Art House',
    role: 'Creative Director',
    content: 'The custom cataloging features allowed us to showcase our antique pieces beautifully on tablets. Our sales conversion increased by 30% in just two months.',
  },
  {
    id: '3',
    name: 'Vikram Zaveri',
    company: 'Zaveri & Co.',
    role: 'Operations Head',
    content: 'Reliability is key in this business. Datacare’s support team is exceptional, and the software handles our heavy Diwali traffic without a glitch.',
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Success Stories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Join thousands of satisfied jewellers who have modernized their business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 relative"
            >
              <Quote className="absolute top-8 right-8 text-gold-200 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                ))}
              </div>
              
              <p className="text-slate-700 italic mb-8 leading-relaxed text-lg">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img src={`https://ui-avatars.com/api/?name=${t.name.replace(' ', '+')}&background=C5A028&color=fff`} alt={t.name} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Brand strip */}
        <div className="mt-20 pt-10 border-t border-slate-200 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {['TBZ', 'Malabar', 'Tanishq', 'Joyalukkas', 'PC Jeweller'].map((brand) => (
               <span key={brand} className="text-2xl font-serif font-bold text-slate-400">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;