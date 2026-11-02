import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionDivider, KalashMotif, DiyaMotif } from '../components/Ornaments';

export const Announcement = () => {
  return (
    <section id="announcement" className="relative py-24 sm:py-32 px-6 bg-[#FAF7F0] overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-champagne/20 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Sanskrit Mangalam Shloka Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-2">
            <DiyaMotif className="w-5 h-5 text-gold" />
            <span className="font-cinzel text-xs sm:text-sm tracking-widest-luxury uppercase text-gold-deep">
              {weddingConfig.announcement.subheading}
            </span>
            <DiyaMotif className="w-5 h-5 text-gold" />
          </div>
          <p className="font-serif italic text-base sm:text-lg text-espresso/90 whitespace-pre-line leading-relaxed font-medium">
            {weddingConfig.shlokas.mangalam}
          </p>
        </motion.div>

        {/* Main Invitation Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-espresso leading-tight mb-6"
        >
          {weddingConfig.announcement.heading}
        </motion.h2>

        <SectionDivider className="my-6" />

        {/* Formal Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 max-w-2xl mx-auto text-espresso/80 font-sans text-sm sm:text-base leading-relaxed font-light"
        >
          <p className="text-base sm:text-lg font-serif italic text-espresso">
            {weddingConfig.announcement.formalInvitation}
          </p>

          <p className="text-xs sm:text-sm leading-relaxed text-espresso/70">
            {weddingConfig.announcement.familyNote}
          </p>
        </motion.div>

        {/* Family Lineage Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left"
        >
          {/* Groom's Family */}
          <div className="p-8 rounded-2xl border border-gold/30 bg-white/70 backdrop-blur-sm shadow-sm relative group hover:border-gold transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="font-cinzel text-[11px] tracking-widest uppercase text-gold-deep block font-semibold">
                The Groom
              </span>
              <KalashMotif className="w-6 h-6 text-gold opacity-70" />
            </div>
            <h3 className="font-serif italic text-2xl sm:text-3xl text-espresso mb-1">
              {weddingConfig.couple.groom.fullName}
            </h3>
            <p className="font-sans text-xs text-espresso/80 tracking-wide font-medium">
              {weddingConfig.couple.groom.parentNames}
            </p>
            <p className="font-sans text-[11px] text-espresso/60 tracking-wider mt-0.5">
              {weddingConfig.couple.groom.grandParentNames}
            </p>
          </div>

          {/* Bride's Family */}
          <div className="p-8 rounded-2xl border border-gold/30 bg-white/70 backdrop-blur-sm shadow-sm relative group hover:border-gold transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="font-cinzel text-[11px] tracking-widest uppercase text-gold-deep block font-semibold">
                The Bride
              </span>
              <KalashMotif className="w-6 h-6 text-gold opacity-70" />
            </div>
            <h3 className="font-serif italic text-2xl sm:text-3xl text-espresso mb-1">
              {weddingConfig.couple.bride.fullName}
            </h3>
            <p className="font-sans text-xs text-espresso/80 tracking-wide font-medium">
              {weddingConfig.couple.bride.parentNames}
            </p>
            <p className="font-sans text-[11px] text-espresso/60 tracking-wider mt-0.5">
              {weddingConfig.couple.bride.grandParentNames}
            </p>
          </div>
        </motion.div>

        {/* Traditional Vedic Sankalpam Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gold/20"
        >
          <p className="font-serif italic text-lg sm:text-xl text-gold-deep max-w-xl mx-auto">
            {weddingConfig.announcement.quote}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
