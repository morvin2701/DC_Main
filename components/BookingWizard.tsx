import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, ArrowRight, User, Phone, Calendar, Clock as ClockIcon } from 'lucide-react';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

const BookingWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingData, setBookingData] = useState({
    version: '',
    date: '',
    timeSlot: '',
    name: '',
    mobile: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // In a real application, you would send the booking data to Google Sheets
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Go directly to the confirmation step
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
                <span className="text-champagne-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Book a Demo</span>
                <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">Schedule Your <br/> Personal Demo</h3>
                <p className="text-stone-500 mb-10 leading-relaxed font-light">
                  Select your preferred version, date, and time. Our experts will guide you through the features tailored to your business needs.
                </p>
                <div className="space-y-6">
                  {[
                    { num: 1, title: 'Product & Date' },
                    { num: 2, title: 'Time Slot' },
                    { num: 3, title: 'Your Details' },
                    { num: 4, title: 'Confirmation' }
                  ].map((item) => (
                    <div key={item.num} className="flex items-center group cursor-default">
                       <span className={`w-8 h-8 flex items-center justify-center rounded-full border text-xs font-bold transition-colors ${step >= item.num ? 'bg-champagne-500 border-champagne-500 text-white' : 'border-stone-300 text-stone-400'}`}>
                         {item.num}
                       </span>
                       <div className={`h-px w-full ml-4 transition-colors ${step >= item.num ? 'bg-champagne-500' : 'bg-stone-200'}`}></div>
                       <span className={`ml-4 text-sm font-bold transition-colors ${step >= item.num ? 'text-stone-900' : 'text-stone-400'}`}>
                         {item.title}
                       </span>
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
                    <h4 className="text-3xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
                      <Calendar className="text-champagne-600" />
                      Product and Date
                    </h4>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-stone-400 tracking-wide">Which Version are you interested in?</label>
                        <select
                          name="version"
                          value={bookingData.version}
                          onChange={handleBookingChange}
                          required
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-5 text-stone-900 focus:border-champagne-500 focus:ring-1 focus:ring-champagne-500 outline-none transition-all shadow-sm"
                        >
                          <option value="">Select Version</option>
                          <option value="Standard">Standard</option>
                          <option value="Pro">Pro</option>
                          <option value="Ultra">Ultra</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Enterprise">Enterprise</option>
                          <option value="Mobile App">Mobile App</option>
                          <option value="E-Catalogue">E-Catalogue</option>
                          <option value="AI Integration">AI Integration</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-stone-400 tracking-wide">Preferred Date</label>
                        <input 
                          type="date" 
                          name="date"
                          value={bookingData.date}
                          onChange={handleBookingChange}
                          required
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-5 text-stone-900 focus:border-champagne-500 focus:ring-1 focus:ring-champagne-500 outline-none transition-all shadow-sm" 
                        />
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
                    <h4 className="text-3xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
                      <ClockIcon className="text-champagne-600" />
                      Time Slot
                    </h4>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                          { value: '10:00', label: '10:00 AM' },
                          { value: '11:30', label: '11:30 AM' },
                          { value: '14:00', label: '2:00 PM' },
                          { value: '15:30', label: '3:30 PM' },
                          { value: '17:00', label: '5:00 PM' },
                        ].map((slot) => (
                          <label key={slot.value} className="flex items-center">
                            <input
                              type="radio"
                              name="timeSlot"
                              value={slot.value}
                              checked={bookingData.timeSlot === slot.value}
                              onChange={handleBookingChange}
                              required
                              className="w-4 h-4 text-champagne-600 focus:ring-champagne-500"
                            />
                            <span className="ml-2 text-sm text-stone-700">{slot.label}</span>
                          </label>
                        ))}
                      </div>
                      
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
                    className="h-full flex flex-col justify-center"
                  >
                    <h4 className="text-3xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
                      <User className="text-champagne-600" />
                      Your Details
                    </h4>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-5">
                        <div>
                          <label className="text-xs font-bold uppercase text-stone-400 tracking-wide mb-2 block">Confirm booking with Version, Date, Time</label>
                          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                            <p className="text-stone-700">
                              <span className="font-bold">Version:</span> {bookingData.version || 'Not selected'}<br />
                              <span className="font-bold">Date:</span> {bookingData.date || 'Not selected'}<br />
                              <span className="font-bold">Time:</span> {bookingData.timeSlot ? `${bookingData.timeSlot} ${bookingData.timeSlot >= '12:00' ? 'PM' : 'AM'}` : 'Not selected'}
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="name" className="text-xs font-bold uppercase text-stone-400 tracking-wide mb-2 block">Enter Your Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={bookingData.name}
                            onChange={handleBookingChange}
                            required
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-5 text-stone-900 focus:border-champagne-500 outline-none transition-all placeholder:text-stone-400 shadow-sm"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="mobile" className="text-xs font-bold uppercase text-stone-400 tracking-wide mb-2 block">Enter Mobile Number</label>
                          <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={bookingData.mobile}
                            onChange={handleBookingChange}
                            required
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-5 text-stone-900 focus:border-champagne-500 outline-none transition-all placeholder:text-stone-400 shadow-sm"
                            placeholder="Your mobile number"
                          />
                        </div>
                      </div>
                      
                      <div className="flex gap-4 mt-8">
                        <button type="button" onClick={prevStep} className="px-8 bg-transparent border border-stone-200 text-stone-500 py-4 rounded-xl hover:bg-stone-50 font-bold uppercase text-xs tracking-widest">Back</button>
                        <button type="submit" disabled={isSubmitting} className="flex-1 bg-stone-900 hover:bg-champagne-500 text-white font-bold py-5 rounded-xl transition-all flex justify-center items-center shadow-lg uppercase text-xs tracking-widest">
                          {isSubmitting ? (
                            <Clock className="animate-spin w-5 h-5" />
                          ) : 'Confirm Booking'}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col justify-center text-center"
                  >
                    <div className="w-24 h-24 bg-champagne-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
                      <CheckCircle className="w-12 h-12 text-champagne-600" />
                    </div>
                    <h4 className="text-4xl font-serif font-bold text-stone-900 mb-4">Booking Confirmed!</h4>
                    <p className="text-stone-500 mb-10 text-lg max-w-md mx-auto">Thank you for booking your demo. We've reserved your slot and will contact you shortly to confirm your appointment.</p>
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