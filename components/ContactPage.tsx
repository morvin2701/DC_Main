import React, { useState } from 'react';
import { motion as m } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, Phone as PhoneIcon, AtSign, MessageSquare, Building2, Loader2 } from 'lucide-react';
import { submitContactForm } from '../services/formService';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitMessage({ type: 'success', text: 'Thank you for your message! We will get back to you soon.' });
        // Reset form only after successful submission
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
          message: ''
        });
      } else {
        setSubmitMessage({ type: 'error', text: result.message || 'Failed to submit form. Please try again.' });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-stone-50 via-white to-stone-50 text-stone-900 relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(245, 158, 11, 0.05) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 20%)" 
      }}></div>
      
      {/* Premium Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-champagne-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
            Let's Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne-500 to-amber-600">Jewellery ERP</span> Needs
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Reach out to us for any inquiries, support, or to schedule a demo of our premium jewellery ERP solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-stone-200/50"
          >
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 flex items-center gap-3">
              <Send className="text-champagne-600" />
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-champagne-500" /> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-champagne-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-champagne-500" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-champagne-500 focus:border-transparent transition-all"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                  <AtSign className="w-4 h-4 text-champagne-500" /> Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-champagne-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-champagne-500" /> City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-champagne-500 focus:border-transparent transition-all"
                  placeholder="Enter your city"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-champagne-500" /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-champagne-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-champagne-500 to-amber-600 hover:from-champagne-600 hover:to-amber-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl border border-champagne-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
              
              {submitMessage && (
                <div className={`mt-4 p-4 rounded-xl text-center ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Email Us */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-stone-200/50">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-3">
                <Mail className="text-champagne-600" />
                Email Us
              </h3>
              <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100">
                <div className="p-3 bg-champagne-50 rounded-lg border border-champagne-100">
                  <Mail className="w-6 h-6 text-champagne-600" />
                </div>
                <a 
                  href="mailto:datacare.india@yahoo.com" 
                  className="text-lg font-bold text-champagne-600 hover:text-champagne-700 transition-colors"
                >
                  datacare.india@yahoo.com
                </a>
              </div>
            </div>

            {/* Our Branches */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-stone-200/50">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-3">
                <Building2 className="text-champagne-600" />
                Our Branches
              </h3>
              
              <div className="space-y-8">
                {/* India Branch */}
                <div className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                  <h4 className="font-bold text-lg text-stone-800 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-champagne-500" />
                    India
                  </h4>
                  <p className="text-stone-600 mb-2">
                    1019, STC (Shivam Trade Center),<br />
                    Beside One World West, Bopal,<br />
                    Ahmedabad, Gujarat 380058
                  </p>
                </div>
                
                {/* Dubai Branch */}
                <div>
                  <h4 className="font-bold text-lg text-stone-800 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-champagne-500" />
                    Dubai, UAE
                  </h4>
                  <p className="text-stone-600">
                    Datacare Softech FZCO<br />
                    Dubai Silicon Oasis, DDP, Dubai, UAE
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-stone-200/50">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-3">
                <Phone className="text-champagne-600" />
                Working Hours
              </h3>
              <div className="space-y-3">
                <p className="text-stone-600">
                  <span className="font-bold">Monday to Saturday:</span> 10:00 AM to 7:00 PM
                </p>
                <p className="text-stone-600">
                  <span className="font-bold">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;