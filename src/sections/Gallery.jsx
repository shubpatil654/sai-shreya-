import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionDivider } from '../components/Ornaments';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const Gallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const images = weddingConfig.gallery;

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > 50;

    if (isSwipe) {
      if (distance > 0) {
        handleNext(); // Swiped left -> next
      } else {
        handlePrev(); // Swiped right -> prev
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 px-6 bg-[#FAF7F0] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-xs sm:text-sm tracking-widest-luxury uppercase text-gold-deep mb-3"
          >
            Moments in Stillness
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif italic text-4xl sm:text-6xl text-espresso mb-4"
          >
            The Editorial Gallery
          </motion.h2>
          <SectionDivider />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-espresso/70 tracking-wider uppercase"
          >
            Frames of devotion, timeless heritage, and quiet romance
          </motion.p>
        </div>

        {/* Editorial Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.map((item, index) => {
            const isTall = index === 0 || index === 6;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer shadow-luxury border border-gold/25 bg-champagne-light ${
                  isTall ? 'sm:row-span-2 aspect-[3/4] sm:aspect-auto' : 'aspect-[4/3]'
                }`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-ivory-100">
                  <span className="font-cinzel text-[10px] tracking-widest uppercase text-champagne">
                    FRAME {String(index + 1).padStart(2, '0')}
                  </span>
                  <h4 className="font-serif italic text-xl text-white">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-ivory-200/80 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                  
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between z-10">
              <span className="font-cinzel text-xs tracking-widest-luxury uppercase text-gold">
                {String(activeImageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Central Image & Navigation Arrows */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={images[activeImageIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={images[activeImageIndex].src}
                alt={images[activeImageIndex].title}
                className="max-h-[75vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              />

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="text-center z-10 max-w-xl mx-auto space-y-1">
              <h3 className="font-serif italic text-xl sm:text-2xl text-white">
                {images[activeImageIndex].title}
              </h3>
              <p className="font-sans text-xs text-champagne/80 font-light">
                {images[activeImageIndex].caption}
              </p>
              <p className="text-[10px] text-white/40 tracking-widest uppercase pt-2">
                Use arrow keys or swipe to navigate &bull; Press Esc to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
