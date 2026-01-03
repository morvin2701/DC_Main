import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Hardware from './components/Hardware';
import Journey from './components/Journey';
import MobileApps from './components/MobileApps';
import AiIntegration from './components/AiIntegration';
import VideoGeneration from './components/VideoGeneration';
import TeamSection from './components/TeamSection';
import AIChat from './components/AIChat';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import ModularAddOns from './components/ModularAddOns';
import PreviewCarouselSection from './components/PreviewCarousel';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <BackgroundParticles />
      <Navbar />
      <Hero />
      <AiIntegration />
      <VideoGeneration />
      <WhyChooseUs />
      <div id="hardware">
        <Hardware  />
      </div>
      <ModularAddOns />
      <Products />
      <Journey />
      <MobileApps />
      <PreviewCarouselSection />
      <TeamSection />
      <div id="demo" className="py-20 px-4 bg-gradient-to-b from-stone-50/50 to-white/50">
        <div className="max-w-6xl mx-auto">
        </div>
      </div>
      <ContactPage />
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;