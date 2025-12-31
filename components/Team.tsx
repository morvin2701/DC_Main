import React, { useEffect, useState } from 'react';
import { TeamMember } from '../types';
import { Linkedin, Phone, MessageCircle } from 'lucide-react';
import { motion as m } from 'framer-motion';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

const rawTeam: TeamMember[] = [
  { 
    id: '1', 
    name: 'Rajesh Mehta', 
    role: 'CEO & Founder', 
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    phone: '+919876543210',
    whatsapp: '919876543210',
    bio: 'Pioneering jewellery ERP solutions for over two decades.'
  },
  { 
    id: '2', 
    name: 'Sarah Jenkins', 
    role: 'Head of Product', 
    image: 'https://images.unsplash.com/photo-1573496359-70142dd9892c?q=80&w=800&auto=format&fit=crop',
    phone: '+919876543211',
    whatsapp: '919876543211',
    bio: 'Driving innovation in user experience and feature capability.'
  },
  { 
    id: '3', 
    name: 'Amit Patel', 
    role: 'Lead Architect', 
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    phone: '+919876543212',
    whatsapp: '919876543212',
    bio: 'Building the robust and secure infrastructure you rely on.'
  },
  { 
    id: '4', 
    name: 'Priya Sharma', 
    role: 'Customer Success', 
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    phone: '+919876543213',
    whatsapp: '919876543213',
    bio: 'Ensuring seamless integration and satisfaction for every client.'
  },
  { 
    id: '5', 
    name: 'Vikram Singh', 
    role: 'Sales Director', 
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    phone: '+919876543214',
    whatsapp: '919876543214',
    bio: 'Connecting businesses with the technology they need to grow.'
  },
  { 
    id: '6', 
    name: 'Elena Rodriguez', 
    role: 'UX Designer', 
    image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?q=80&w=800&auto=format&fit=crop',
    phone: '+919876543215',
    whatsapp: '919876543215',
    bio: 'Crafting intuitive interfaces that simplify complex workflows.'
  },
];

const shuffleArray = (array: TeamMember[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Team: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    setTeam(shuffleArray(rawTeam));
  }, []);

  return (
    <section id="team" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-96 bg-champagne-50 -skew-y-3 origin-top-left -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-champagne-600 font-bold tracking-widest text-xs uppercase mb-4 block">Leadership</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Meet the Experts</h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Our team combines decades of industry experience with cutting-edge technical expertise to deliver excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
              className="group bg-white rounded-xl overflow-hidden border border-stone-100 shadow-soft hover:shadow-premium transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden bg-stone-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Role Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide shadow-sm">
                  {member.role}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-2 font-serif">{member.name}</h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-8 h-10 line-clamp-2">{member.bio}</p>

                <div className="flex items-center gap-3 pt-6 border-t border-stone-100">
                   <a 
                      href={`https://wa.me/${member.whatsapp}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-stone-50 text-stone-600 rounded-lg hover:bg-champagne-500 hover:text-white transition-all duration-300 border border-stone-200 hover:border-champagne-500 text-sm font-medium"
                   >
                      <MessageCircle size={16} /> WhatsApp
                   </a>
                   <a 
                      href={`tel:${member.phone}`}
                      className="w-12 h-12 flex items-center justify-center bg-stone-50 text-stone-600 rounded-lg hover:bg-stone-800 hover:text-white transition-all duration-300 border border-stone-200 hover:border-stone-800"
                   >
                      <Phone size={18} />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;