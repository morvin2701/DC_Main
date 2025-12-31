import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Monitor, Smartphone } from 'lucide-react';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

interface PreviewCarouselProps {
  type: 'software' | 'mobile';
  images: string[];
  onClose: () => void;
}

const PreviewCarousel: React.FC<PreviewCarouselProps> = ({ type, images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const title = type === 'software' ? 'Software Preview' : 'Mobile App Preview';
  const icon = type === 'software' ? <Monitor className="w-8 h-8" /> : <Smartphone className="w-8 h-8" />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <div className="flex items-center gap-3">
            {icon}
            <h2 className="text-2xl font-bold text-stone-900">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-stone-600" />
          </button>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${title} ${currentIndex + 1}`}
              className="w-full h-96 object-contain p-8"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-stone-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-stone-700" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-amber-500 w-6' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>
          <div className="mt-4 text-center text-stone-600">
            {currentIndex + 1} of {images.length}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface PreviewBoxProps {
  type: 'software' | 'mobile';
  images: string[];
  title: string;
  description: string;
}

const PreviewBox: React.FC<PreviewBoxProps> = ({ type, images, title, description }) => {
  const [showCarousel, setShowCarousel] = useState(false);

  const icon = type === 'software' ? <Monitor className="w-12 h-12" /> : <Smartphone className="w-12 h-12" />;
  const gradient = type === 'software' 
    ? 'from-blue-600 to-cyan-600' 
    : 'from-amber-500 to-yellow-500';

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`relative bg-gradient-to-br ${gradient} rounded-2xl p-8 text-white cursor-pointer overflow-hidden`}
        onClick={() => setShowCarousel(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative z-10">
          <div className="mb-4">{icon}</div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-white/90 mb-6">{description}</p>
          <div className="flex justify-center">
            {images.length > 0 && (
              <img
                src={images[0]}
                alt={title}
                className="w-32 h-20 object-cover rounded-lg border-2 border-white/30 shadow-lg"
              />
            )}
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-sm opacity-75">
          Click to view {type} preview
        </div>
      </motion.div>

      <AnimatePresence>
        {showCarousel && (
          <PreviewCarousel
            type={type}
            images={images}
            onClose={() => setShowCarousel(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

interface PreviewCarouselSectionProps {
  softwareImages?: string[];
  mobileImages?: string[];
}

const PreviewCarouselSection: React.FC<PreviewCarouselSectionProps> = ({
  softwareImages = [],
  mobileImages = []
}) => {
  // Generate image paths for ProductScreen folder (01.jpg to 47.jpg)
  const defaultSoftwareImages = Array.from({ length: 47 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, '0');
    return `/ProductScreen/${num}.jpg`;
  });

  // Generate image paths for AndImg folder (01.jpg to 05.jpg)
  const defaultMobileImages = Array.from({ length: 5 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, '0');
    return `/AndImg/${num}.jpg`;
  });

  // Use default images if no custom images provided
  const finalSoftwareImages = softwareImages.length > 0 ? softwareImages : defaultSoftwareImages;
  const finalMobileImages = mobileImages.length > 0 ? mobileImages : defaultMobileImages;

  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Preview <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Our Solutions</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Explore our premium software and mobile applications with interactive previews
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PreviewBox
            type="software"
            images={finalSoftwareImages}
            title="Software Preview"
            description="Experience our comprehensive ERP software solution with advanced features and intuitive interface"
          />
          <PreviewBox
            type="mobile"
            images={finalMobileImages}
            title="Mobile App Preview"
            description="Discover our mobile application designed for on-the-go business management"
          />
        </div>
      </div>
    </section>
  );
};

export default PreviewCarouselSection;