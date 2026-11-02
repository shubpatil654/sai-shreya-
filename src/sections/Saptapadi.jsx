import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionDivider, DiyaMotif, RoyalPeacock, RoyalElephant, TempleZariBorder } from '../components/Ornaments';
import { Flame } from 'lucide-react';

export const Saptapadi = () => {
  const [activeStep, setActiveStep] = useState(0);
  const vows = weddingConfig.saptapadiVows;

  return (
    <section id="saptapadi" className="py-24 sm:py-32 px-6 bg-[#F5EFE6] relative overflow-hidden">
      
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-champagne/30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header with Facing Peacocks */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-2">
            <RoyalPeacock className="w-14 h-14 text-gold drop-shadow-sm" />
            <div className="flex items-center justify-center gap-2">
              <Flame className="w-5 h-5 text-amber-600 animate-pulse" />
              <span className="font-cinzel text-xs sm:text-sm tracking-widest-luxury uppercase text-gold-deep">
                Agni Sakshi &bull; Saptapadi
              </span>
              <Flame className="w-5 h-5 text-amber-600 animate-pulse" />
            </div>
            <RoyalPeacock className="w-14 h-14 text-gold drop-shadow-sm" flipped={true} />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif italic text-4xl sm:text-6xl text-espresso mb-4"
          >
            Saptapadi: Seven Sacred Vows
          </motion.h2>

          <SectionDivider />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-espresso/70 tracking-wider uppercase"
          >
            Seven steps taken around the sacred agni, binding two destinies in eternal friendship
          </motion.p>
        </div>

        {/* Step Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {vows.map((item, index) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(index)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-cinzel text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                activeStep === index
                  ? 'bg-espresso text-ivory-100 shadow-luxury border border-gold scale-105'
                  : 'bg-white/60 hover:bg-white text-espresso/80 border border-gold/30 hover:border-gold'
              }`}
            >
              <span>Step {item.step}</span>
              {activeStep === index && <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />}
            </button>
          ))}
        </div>

        {/* Active Step Feature Showcase Card with Flanking Elephants */}
        <div className="relative max-w-4xl mx-auto flex items-center justify-center">
          
          {/* Saluting Elephant Left */}
          <div className="hidden lg:block absolute -left-12 bottom-6 z-20">
            <RoyalElephant className="w-24 h-24 text-gold drop-shadow-md" />
          </div>

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl rounded-3xl border-2 border-gold/40 bg-white/85 backdrop-blur-md p-8 sm:p-14 text-center shadow-luxury relative"
          >
            {/* Inner double border */}
            <div className="absolute inset-3 border border-gold/20 rounded-2xl pointer-events-none" />

            {/* Step Number Badge */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-champagne-light border border-gold/50 shadow-inner-gold mb-4">
              <span className="font-serif italic text-2xl font-semibold text-espresso">
                {vows[activeStep].step}
              </span>
            </div>

            {/* Sanskrit Mantra */}
            <h3 className="font-serif italic text-2xl sm:text-3xl text-gold-deep mb-2 font-medium">
              {vows[activeStep].sanskrit}
            </h3>

            {/* Step Meaning Title */}
            <p className="font-cinzel text-xs sm:text-sm tracking-widest uppercase text-espresso/80 mb-6 font-semibold">
              {vows[activeStep].title}
            </p>

            {/* Vow Description */}
            <p className="font-sans text-base sm:text-lg text-espresso/90 font-light leading-relaxed max-w-xl mx-auto italic">
              “{vows[activeStep].vow}”
            </p>

            {/* Bottom navigation helper */}
            <div className="mt-8 pt-6 border-t border-gold/25 flex items-center justify-between text-xs font-sans text-espresso/60">
              <button
                onClick={() => setActiveStep((prev) => (prev - 1 + vows.length) % vows.length)}
                className="hover:text-gold transition-colors uppercase tracking-wider"
              >
                &larr; Previous Vow
              </button>
              <span className="font-cinzel text-[11px] tracking-widest uppercase text-gold-deep">
                {activeStep + 1} of 7 Sacred Vows
              </span>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % vows.length)}
                className="hover:text-gold transition-colors uppercase tracking-wider"
              >
                Next Vow &rarr;
              </button>
            </div>
          </motion.div>

          {/* Saluting Elephant Right */}
          <div className="hidden lg:block absolute -right-12 bottom-6 z-20">
            <RoyalElephant className="w-24 h-24 text-gold drop-shadow-md" flipped={true} />
          </div>
        </div>

        {/* Bottom Temple Zari Border */}
        <TempleZariBorder className="mt-12" />

      </div>
    </section>
  );
};
