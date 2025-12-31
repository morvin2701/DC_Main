export interface Product {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  type: 'Retail' | 'Wholesale' | 'Chain' | 'Manufacturing';
  tier: 'Standard' | 'Ultra' | 'Pro' | 'Advanced' | 'Enterprise';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  phone: string;
  whatsapp: string;
  bio: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
}