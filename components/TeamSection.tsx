import React from 'react';
import { motion as m } from 'framer-motion';
import { Users, Crown, Star, Award, Phone, MessageCircle, ExternalLink } from 'lucide-react';

const motion = m as any;

interface TeamMember {
  id: string;
  name: string;
  role: string;
  isLeader: boolean;
  isOwner: boolean;
  phone?: string;
}

const TeamSection: React.FC = () => {
  // Create team members array
  const baseTeamMembers: TeamMember[] = [
    {
      id: '00',
      name: 'Sanjay Vekariya',
      role: 'Owner & Founder',
      isLeader: true,
      isOwner: true,
      phone: '+91-9876543210'
    },
    {
      id: '01',
      name: 'Hemal Soni',
      role: 'Team Leader & Sales Executive',
      isLeader: true,
      isOwner: false,
      phone: '+91 9904469007'
    },
    {
      id: '02',
      name: 'Vishal Gundalia',
      role: 'Team Leader & Sales Executive',
      isLeader: true,
      isOwner: false,
      phone: '+91 9998049429'
    },
    {
      id: '03',
      name: 'Vikas Barvadiya',
      role: 'Team Leader & Sales Executive',
      isLeader: true,
      isOwner: false,
      phone: '+91 8758111027'
    },
    {
      id: '10',
      name: 'Devendra Dobariya',
      role: 'Team Leader & Sales Executive',
      isLeader: true,
      isOwner: false,
      phone: '+91 9173390193'
    },
    // Add remaining team members (04-09, 11, 13-16, 18-21) with updated details
    {
      id: '04',
      name: 'Team Member 04',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91-9876543004'
    },
    {
      id: '05',
      name: 'Bhaumik Desai',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 7878178174'
    },
    {
      id: '06',
      name: 'Kishor Jhavandhra',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 8866202589'
    },
    {
      id: '07',
      name: 'Prakash Soni',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 7802894502'
    },
    {
      id: '08',
      name: 'Ajay Kambaliya',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 7045854094'
    },
    {
      id: '09',
      name: 'Dipak Dobariya',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 9067948314'
    },
    {
      id: '11',
      name: 'Sunil Gajjar',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 8690016903'
    },
    {
      id: '13',
      name: 'Shreyansh Thummar',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+971 55 176 0454'
    },
    {
      id: '14',
      name: 'Sachin Vora',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 7984870694'
    },
    {
      id: '15',
      name: 'Parth Hirani',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 7069999887'
    },
    {
      id: '16',
      name: 'Pankaj Barvadiya',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 8485977347'
    },
    {
      id: '18',
      name: 'Morvin Vekariya',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 9558602244'
    },
    {
      id: '19',
      name: 'Amar Shingare',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 8128212511'
    },
    {
      id: '20',
      name: 'Darshit Savaliya',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 9328758868'
    },
    {
      id: '21',
      name: 'Divyesh Gajjar',
      role: 'Sales & Technical Service Provider',
      isLeader: false,
      isOwner: false,
      phone: '+91 9712150673'
    }
  ];

  // Shuffle team members (except owner) for fair display
  const shuffleArray = (array: TeamMember[]) => {
    const shuffled = [...array];
    // Keep owner at the beginning
    const owner = shuffled.shift()!;
    // Shuffle the rest
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Add owner back at the beginning
    return [owner, ...shuffled];
  };

  const shuffledTeamMembers = shuffleArray(baseTeamMembers);

  const owner = shuffledTeamMembers.find(member => member.isOwner);
  const leaders = shuffledTeamMembers.filter(member => member.isLeader && !member.isOwner);
  const team = shuffledTeamMembers.filter(member => !member.isLeader && !member.isOwner);

  const handleWhatsAppClick = (phone: string, name: string) => {
    const message = `Hello, I'm reaching out to connect with ${name} from the Datacare Softech team.`;
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        {/* Floating elements */}
        <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed"
          >
            Meet the dedicated professionals behind our premium jewellery ERP solutions.
          </motion.p>
        </div>

        {/* Owner Section */}
        {owner && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full text-sm font-bold mb-4">
                <Crown className="w-4 h-4" />
                Company Leadership
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 w-full max-w-md transform hover:-translate-y-2">
                <div className="p-8 flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <img 
                        src={`/assets/team/${owner.id}.png`} 
                        alt={owner.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/400x400/e2e8f0/64748b?text=${encodeURIComponent(owner.name)}`;
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-yellow-500 p-2 rounded-full shadow-lg">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -inset-4 rounded-full border border-amber-300 opacity-30 animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">{owner.name}</h3>
                  <p className="text-lg text-amber-600 font-semibold mb-4">{owner.role}</p>
                  <p className="text-stone-600 text-center mb-6">
                    Visionary leader and founder of our premium jewellery ERP solution.
                  </p>
                  
                  {/* Contact Information */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <a 
                      href={`tel:${owner.phone}`} 
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </a>
                    <button 
                      onClick={() => handleWhatsAppClick(owner.phone!, owner.name)}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Leaders Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-bold mb-4">
              <Star className="w-4 h-4" />
              Team Leaders & Sales Executives
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="relative mb-4">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={`/assets/team/${member.id}.png`} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://placehold.co/400x400/e2e8f0/64748b?text=${encodeURIComponent(member.name)}`;
                          }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full shadow-md">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                    <div className="flex justify-center space-x-2 mb-4">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    
                    {/* Contact Information */}
                    <div className="flex flex-col gap-2">
                      <a 
                        href={`tel:${member.phone}`} 
                        className="flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                      <button 
                        onClick={() => handleWhatsAppClick(member.phone!, member.name)}
                        className="flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Members Section - 5 rows x 3 columns grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-stone-600 to-stone-800 text-white rounded-full text-sm font-bold mb-4">
              <Award className="w-4 h-4" />
              Our Dedicated Team
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 text-center p-6 transform hover:-translate-y-2"
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                    <img 
                      src={`/assets/team/${member.id}.png`} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/400x400/e2e8f0/64748b?text=${encodeURIComponent(member.name)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </div>
                </div>
                <h3 className="font-bold text-stone-900 text-lg mb-2">{member.name}</h3>
                <p className="text-stone-600 mb-4">{member.role}</p>
                
                {/* Contact Information */}
                <div className="flex flex-col gap-2">
                  <a 
                    href={`tel:${member.phone}`} 
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call</span>
                  </a>
                  <button 
                    onClick={() => handleWhatsAppClick(member.phone!, member.name)}
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;