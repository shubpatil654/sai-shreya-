import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { BotanicalCorner, GaneshaMotif, DiyaMotif } from '../components/Ornaments';
import { ArrowUp, Heart } from 'lucide-react';

export const Closing = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-24 sm:py-32 px-6 bg-[#241C17] text-ivory-100 overflow-hidden text-center">
      
      {/* Decorative Gold Filigree Accents in Dark Mode */}
      <div className="absolute top-8 left-8 opacity-30">
        <BotanicalCorner position="top-left" className="w-24 h-24 text-gold" />
      </div>
      <div className="absolute top-8 right-8 opacity-30">
        <BotanicalCorner position="top-right" className="w-24 h-24 text-gold" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        {/* Lord Ganesha Watermark Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <GaneshaMotif className="w-16 h-16 text-gold mb-2 opacity-90" />
          <span className="font-serif italic text-sm tracking-widest text-gold-light">
            {weddingConfig.shlokas.ganesha}
          </span>
        </motion.div>

        {/* Closing Headline & Blessings */}
        <div className="space-y-4 max-w-xl mx-auto">
          <p className="font-cinzel text-xs tracking-widest-luxury uppercase text-gold">
            {weddingConfig.closing.message}
          </p>

          <h2 className="font-serif italic text-4xl sm:text-6xl text-white">
            {weddingConfig.couple.jointNames}
          </h2>

          <p className="font-sans text-xs tracking-widest uppercase text-champagne/70">
            {weddingConfig.date.primaryDate} &bull; {weddingConfig.venue.city}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 my-6">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold/50" />
          <Heart className="w-4 h-4 text-gold fill-gold/40" />
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Vedic Peace Blessing Mantra */}
        <div className="space-y-2 max-w-xl mx-auto">
          <p className="font-serif italic text-lg sm:text-xl text-gold-light font-medium leading-relaxed">
            {weddingConfig.closing.blessingQuote}
          </p>
          <p className="font-sans text-xs text-ivory-200/70 font-light leading-relaxed">
            {weddingConfig.closing.blessingEnglish}
          </p>
        </div>

        {/* Traditional With Best Compliments */}
        <div className="pt-6 space-y-2 border-t border-white/10 max-w-md mx-auto">
          <p className="font-sans text-xs uppercase tracking-widest text-champagne/60">
            {weddingConfig.closing.signoff}
          </p>
          <p className="font-serif italic text-xl text-gold">
            {weddingConfig.closing.familySignoff}
          </p>
          <p className="font-sans text-xs text-ivory-300/70 italic pt-1">
            {weddingConfig.closing.compliments}
          </p>
        </div>

        {/* Back to Top CTA */}
        <div className="pt-6">
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 bg-white/5 hover:bg-gold hover:text-espresso text-champagne font-sans text-xs tracking-widest uppercase transition-all duration-300"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Footer Copyright */}
        <div className="pt-8 text-[11px] font-sans text-ivory-300/40 tracking-wider">
          <p>
            {weddingConfig.projectName} &bull; {weddingConfig.edition}
          </p>
          <p className="mt-1 text-gold/40">
            Curated with eternal love, tradition, and artistic devotion.
          </p>
        </div>

      </div>
    </footer>
  );
};
