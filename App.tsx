import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Hardware from './components/Hardware';
import Journey from './components/Journey';
import MobileApps from './components/MobileApps';
import TeamSection from './components/TeamSection';
import BookingWizard from './components/BookingWizard';
import AIChat from './components/AIChat';
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
      <WhyChooseUs />
      <div id="hardware">
        <Hardware />
      </div>
      <ModularAddOns />
      <Products />
      <Journey />
      <MobileApps />
      <PreviewCarouselSection />
      <TeamSection />
      <BookingWizard />
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;