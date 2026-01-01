import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Check, Phone, User, Building2, Loader2 } from 'lucide-react';

const motion = m as any;

interface FormData {
  name: string;
  phone: string;
  organization: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  organization?: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    organization: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }
    
    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization name is required';
    } else if (formData.organization.trim().length < 2) {
      newErrors.organization = 'Organization name must be at least 2 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', phone: '', organization: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 -m-16 rounded-3xl bg-gradient-to-br from-corporate-blue/5 via-corporate-light/5 to-corporate-accent/5 blur-2xl"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-corporate-blue/10 to-corporate-light/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-corporate-accent/10 to-corporate-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gradient-to-b from-white/90 to-stone-50/80 backdrop-blur-xl border border-stone-300/40 rounded-3xl shadow-2xl shadow-stone-900/10 p-12 z-10 overflow-hidden"
      >
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-corporate-blue/30 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-corporate-blue/30 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-corporate-blue/30 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-corporate-blue/30 rounded-br-3xl"></div>
        
        {/* Gradient Line Elements */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-corporate-blue to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-corporate-light to-transparent"></div>
        
        <div className="text-center mb-12 relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 10 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-corporate-blue to-corporate-light flex items-center justify-center mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-corporate-blue to-corporate-light flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold text-stone-900 font-serif mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-stone-800">Book a </span>
            <span className="bg-gradient-to-r from-corporate-blue via-corporate-light to-corporate-blue bg-clip-text text-transparent font-bold">Premium Demo</span>
          </motion.h2>
          
          <motion.p 
            className="text-stone-600 font-serif text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experience our cutting-edge jewellery ERP solution with a personalized demonstration tailored to your business needs. Discover how our premium platform can transform your operations.
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex flex-col items-center justify-center py-16 text-center relative z-10"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
                className="w-32 h-32 rounded-full bg-gradient-to-r from-corporate-blue to-corporate-light flex items-center justify-center mb-10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 animate-ping"></div>
                <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center relative z-10">
                  <Check className="w-16 h-16 text-corporate-blue" />
                </div>
              </motion.div>
              
              <motion.h3 
                className="text-4xl font-bold text-stone-900 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Demo Request Confirmed!
              </motion.h3>
              
              <motion.p 
                className="text-stone-600 text-xl max-w-2xl mb-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for your interest in our premium ERP solution. Our specialist will contact you within 24 hours to schedule your personalized demonstration.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-stone-500 text-lg italic flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-corporate-blue to-corporate-light flex items-center justify-center">
                  <Check className="w-2 h-2 text-white" />
                </div>
                Your information is securely protected with enterprise-grade encryption
              </motion.div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-10 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <div className="relative">
                    <div className="absolute -top-4 left-5 bg-gradient-to-r from-white to-stone-50 px-3 text-sm font-medium text-stone-500 font-serif">
                      Full Name *
                    </div>
                    <div className="relative flex items-center">
                      <div className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                        <User className="w-5 h-5 text-corporate-blue/60" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full pl-14 pr-5 py-5 bg-white/80 backdrop-blur-sm border ${
                          errors.name ? 'border-red-400/60' : 'border-stone-300/70'
                        } rounded-2xl focus:outline-none focus:ring-2 focus:ring-corporate-blue/40 focus:border-corporate-blue/80 transition-all duration-300 font-serif shadow-lg`}
                      />
                    </div>
                  </div>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-sm mt-2 font-serif pl-5"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <div className="relative">
                    <div className="absolute -top-4 left-5 bg-gradient-to-r from-white to-stone-50 px-3 text-sm font-medium text-stone-500 font-serif">
                      Phone Number *
                    </div>
                    <div className="relative flex items-center">
                      <div className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-corporate-blue/60" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className={`w-full pl-14 pr-5 py-5 bg-white/80 backdrop-blur-sm border ${
                          errors.phone ? 'border-red-400/60' : 'border-stone-300/70'
                        } rounded-2xl focus:outline-none focus:ring-2 focus:ring-corporate-blue/40 focus:border-corporate-blue/80 transition-all duration-300 font-serif shadow-lg`}
                      />
                    </div>
                  </div>
                  <AnimatePresence>
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-sm mt-2 font-serif pl-5"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
              
              {/* Organization Field */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -top-4 left-5 bg-gradient-to-r from-white to-stone-50 px-3 text-sm font-medium text-stone-500 font-serif">
                    Organization/Firm Name *
                  </div>
                  <div className="relative flex items-center">
                    <div className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-corporate-blue/60" />
                    </div>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Enter your organization name"
                      className={`w-full pl-14 pr-5 py-5 bg-white/80 backdrop-blur-sm border ${
                        errors.organization ? 'border-red-400/60' : 'border-stone-300/70'
                      } rounded-2xl focus:outline-none focus:ring-2 focus:ring-corporate-blue/40 focus:border-corporate-blue/80 transition-all duration-300 font-serif shadow-lg`}
                    />
                  </div>
                </div>
                <AnimatePresence>
                  {errors.organization && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 text-sm mt-2 font-serif pl-5"
                    >
                      {errors.organization}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-6"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 px-6 bg-gradient-to-r from-corporate-blue to-corporate-light hover:from-corporate-light hover:to-corporate-blue text-white font-medium rounded-2xl text-xl transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-corporate-accent/40 relative overflow-hidden group font-serif"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Processing Your Request...
                      </>
                    ) : (
                      'Request Premium Demo Experience'
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-corporate-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-corporate-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-stone-200/50 text-center relative z-10"
        >
          <div className="flex flex-wrap justify-center gap-8 text-stone-500 text-sm font-serif">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-corporate-blue to-corporate-light flex items-center justify-center">
                <Check className="w-2 h-2 text-white" />
              </div>
              Enterprise Security
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-corporate-blue to-corporate-light flex items-center justify-center">
                <Check className="w-2 h-2 text-white" />
              </div>
              24/7 Support
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-corporate-blue to-corporate-light flex items-center justify-center">
                <Check className="w-2 h-2 text-white" />
              </div>
              Premium Experience
            </div>
          </div>
          <p className="text-stone-400 text-xs mt-4">
            Your privacy is our priority. All information is securely encrypted.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BookingForm;