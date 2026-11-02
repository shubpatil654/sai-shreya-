import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionDivider, RoyalPeacock, AuspiciousParrots, SouthIndianToran } from '../components/Ornaments';

export const Story = () => {
  return (
    <section id="story" className="py-24 sm:py-32 px-6 bg-[#FAF7F0] relative overflow-hidden">
      
      {/* South Indian Toranam on top */}
      <SouthIndianToran className="mb-8" />

      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-champagne/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex justify-center mb-3">
            <AuspiciousParrots className="w-24 h-12 text-gold opacity-80" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-xs sm:text-sm tracking-widest-luxury uppercase text-gold-deep mb-2"
          >
            A Journey of Destiny &bull; Chapters of Love
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif italic text-4xl sm:text-6xl text-espresso mb-4"
          >
            Our Love Story
          </motion.h2>
          <SectionDivider />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-espresso/70 tracking-wider uppercase"
          >
            From quiet beginnings in Kyoto to a sacred lifetime promise in Belgaum
          </motion.p>
        </div>

        {/* Story Chapters - Alternating Magazine Editorial Layout */}
        <div className="space-y-28 sm:space-y-36">
          {weddingConfig.story.map((chapter, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={chapter.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Chapter Photo */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative group">
                    {/* Gold offset frame */}
                    <div className={`absolute -inset-3 rounded-2xl border border-gold/30 transition-transform duration-700 pointer-events-none ${
                      isEven ? 'transform -rotate-1 group-hover:rotate-0' : 'transform rotate-1 group-hover:rotate-0'
                    }`} />
                    
                    {/* Image container */}
                    <div className="relative rounded-xl overflow-hidden shadow-luxury aspect-[4/3] bg-champagne-light">
                      <img
                        src={chapter.image}
                        alt={chapter.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-espresso/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Chapter index watermark badge */}
                    <div className="absolute -bottom-5 right-6 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gold/40 shadow-md">
                      <span className="font-cinzel text-xs font-semibold tracking-widest text-gold-deep">
                        CHAPTER {chapter.number}
                      </span>
                    </div>

                    {/* Peacock Accent on the first chapter */}
                    {index === 0 && (
                      <div className="hidden sm:block absolute -top-8 -right-8 opacity-75">
                        <RoyalPeacock className="w-16 h-16 text-gold" flipped={true} />
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Chapter Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-5 text-center lg:text-left`}
                >
                  <div className="space-y-1">
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-deep">
                      {chapter.subtitle}
                    </span>
                    <h3 className="font-serif italic text-3xl sm:text-4xl text-espresso">
                      {chapter.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-espresso/80 font-light leading-relaxed">
                    {chapter.description}
                  </p>

                  <div className="pt-3 border-t border-gold/25">
                    <blockquote className="font-serif italic text-lg sm:text-xl text-espresso/90">
                      “{chapter.quote}”
                    </blockquote>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
