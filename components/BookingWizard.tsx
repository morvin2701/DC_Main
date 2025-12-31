import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, ArrowRight } from 'lucide-react';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

const BookingWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      nextStep();
    }, 1500);
  };

  return (
    <section id="demo" className="py-32 bg-stone-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-premium border border-stone-100 flex flex-col lg:flex-row h-auto lg:h-[700px]">
            
            {/* Left Panel: Light Luxury Invite */}
            <div className="p-12 lg:w-5/12 bg-champagne-50 text-stone-900 flex flex-col justify-center relative overflow-hidden border-r border-stone-100">
              <div className="relative z-10 p-8 rounded-xl">
                <div className="w-12 h-1 bg-champagne-500 mb-8"></div>
                <span className="text-champagne-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Exclusive Invitation</span>
                <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">Your Private <br/> Walkthrough</h3>
                <p className="text-stone-500 mb-10 leading-relaxed font-light">
                  Join our product specialists for a tailored demonstration. Discover how Datacare transforms operations into effortless elegance.
                </p>
                <div className="space-y-6">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center group cursor-default">
                       <span className={`w-8 h-8 flex items-center justify-center rounded-full border text-xs font-bold transition-colors ${step >= num ? 'bg-champagne-500 border-champagne-500 text-white' : 'border-stone-300 text-stone-400'}`}>
                         {num}
                       </span>
                       <div className={`h-px w-full ml-4 transition-colors ${step >= num ? 'bg-champagne-500' : 'bg-stone-200'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel: Form Wizard */}
            <div className="p-12 lg:w-7/12 bg-white relative">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col justify-center"
                  >
                    <h4 className="text-3xl font-serif font-bold text-stone-900 mb-8">Select a Date</h4>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-stone-400 tracking-wide">Preferred Date</label>
                        <input type="date" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-5 text-stone-900 focus:border-champagne-500 focus:ring-1 focus:ring-champagne-500 outline-none transition-all shadow-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-stone-400 tracking-wide">Available Slots</label>
                        <div className="grid grid-cols-3 gap-4">
                          {['10:00 AM', '02:00 PM', '04:00 PM'].map(time => (
                            <button key={time} className="px-4 py-4 bg-white hover:bg-stone-50 border border-stone-200 hover:border-champagne-400 rounded-xl text-stone-600 hover:text-stone-900 text-sm font-bold transition-all shadow-sm">
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                      <button onClick={nextStep} className="w-full mt-8 bg-stone-900 hover:bg-champagne-500 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg uppercase text-xs tracking-widest">
                        Continue <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full flex flex-col justify-center"
                  >
                    <h4 className="text-3xl font-serif font-bold text-stone-900 mb-8">Personal Details</h4>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-5">
                        <input required placeholder="First Name" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-5 text-stone-900 focus:border-champagne-500 outline-none transition-all placeholder:text-stone-400 shadow-sm" />
                        <input required placeholder="Last Name" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-5 text-stone-900 focus:border-champagne-500 outline-none transition-all placeholder:text-stone-400 shadow-sm" />
                      </div>
                      <input required type="email" placeholder="Business Email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-5 text-stone-900 focus:border-champagne-500 outline-none transition-all placeholder:text-stone-400 shadow-sm" />
                      <input required placeholder="Company / Jewelry House" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-5 text-stone-900 focus:border-champagne-500 outline-none transition-all placeholder:text-stone-400 shadow-sm" />
                      
                      <div className="flex gap-4 mt-8">
                        <button type="button" onClick={prevStep} className="px-8 bg-transparent border border-stone-200 text-stone-500 py-4 rounded-xl hover:bg-stone-50 font-bold uppercase text-xs tracking-widest">Back</button>
                        <button type="submit" disabled={isSubmitting} className="flex-1 bg-stone-900 hover:bg-champagne-500 text-white font-bold py-5 rounded-xl transition-all flex justify-center items-center shadow-lg uppercase text-xs tracking-widest">
                          {isSubmitting ? (
                            <Clock className="animate-spin w-5 h-5" />
                          ) : 'Confirm Reservation'}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col justify-center text-center"
                  >
                    <div className="w-24 h-24 bg-champagne-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
                      <CheckCircle className="w-12 h-12 text-champagne-600" />
                    </div>
                    <h4 className="text-4xl font-serif font-bold text-stone-900 mb-4">You're on the list.</h4>
                    <p className="text-stone-500 mb-10 text-lg max-w-md mx-auto">We've reserved your slot. A calendar invitation has been sent to your email.</p>
                    <button onClick={() => setStep(1)} className="text-champagne-600 hover:text-champagne-700 font-bold uppercase text-xs tracking-widest border-b-2 border-transparent hover:border-champagne-600 transition-all pb-1">Book another session</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWizard;