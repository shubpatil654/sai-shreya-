import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { 
  SectionDivider, 
  KalashMotif, 
  DiyaMotif, 
  SouthIndianToran, 
  HangingGarland, 
  LotusUrli,
  TempleZariBorder 
} from '../components/Ornaments';
import { Sparkles, Flame, Heart } from 'lucide-react';

export const SacredRituals = () => {
  return (
    <section id="rituals" className="py-24 sm:py-32 px-6 bg-[#FAF7F0] relative overflow-hidden">
      
      {/* Decorative Toranam on top */}
      <SouthIndianToran className="mb-6" />

      {/* Hanging Garlands in Background */}
      <div className="absolute top-0 left-4 hidden xl:block opacity-60">
        <HangingGarland className="h-[80vh] w-8 text-gold" />
      </div>
      <div className="absolute top-0 right-4 hidden xl:block opacity-60">
        <HangingGarland className="h-[80vh] w-8 text-gold" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <DiyaMotif className="w-6 h-6 text-gold" />
            <span className="font-cinzel text-xs sm:text-sm tracking-widest-luxury uppercase text-gold-deep">
              Vedic Rites &bull; Sacred Traditions
            </span>
            <DiyaMotif className="w-6 h-6 text-gold" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif italic text-4xl sm:text-6xl text-espresso mb-4"
          >
            Sacred Wedding Rites
          </motion.h2>

          <SectionDivider />

          {/* Mangalya Dharanam Sacred Shloka Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="my-8 p-6 sm:p-10 rounded-2xl border-2 border-gold/40 bg-white/80 backdrop-blur-md shadow-luxury relative"
          >
            <div className="absolute inset-2 border border-gold/15 rounded-xl pointer-events-none" />
            
            <div className="flex justify-center mb-3">
              <LotusUrli className="w-14 h-9 text-gold" />
            </div>

            <p className="font-serif italic text-xl sm:text-2xl text-gold-deep leading-relaxed whitespace-pre-line font-medium">
              {weddingConfig.shlokas.mangalya}
            </p>
            <p className="font-sans text-xs sm:text-sm text-espresso/80 font-light mt-3 max-w-xl mx-auto leading-relaxed italic">
              {weddingConfig.shlokas.mangalyaMeaning}
            </p>
            
            <TempleZariBorder className="mt-4" />
          </motion.div>

          <p className="font-sans text-xs sm:text-sm text-espresso/70 tracking-wider uppercase">
            From Jeelakarra Bellam to Talambralu: Sacred customs of eternal union
          </p>
        </div>

        {/* Rituals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddingConfig.rituals.map((ritual, index) => {
            return (
              <motion.div
                key={ritual.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-gold/35 bg-white/85 backdrop-blur-md p-8 shadow-luxury hover:border-gold hover:-translate-y-1 transition-all duration-300 text-left"
              >
                {/* Inner gold frame */}
                <div className="absolute inset-2.5 border border-gold/15 rounded-xl pointer-events-none" />

                {/* Ritual Order & Motif */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-cinzel text-xs font-semibold tracking-widest text-gold-deep">
                    SACRED RITE 0{index + 1}
                  </span>
                  <KalashMotif className="w-8 h-8 text-gold opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Ritual Title */}
                <h3 className="font-serif italic text-2xl text-espresso mb-1 group-hover:text-gold-antique transition-colors">
                  {ritual.name}
                </h3>

                <p className="font-sans text-[11px] font-medium tracking-wide text-gold-deep mb-3 uppercase">
                  {ritual.subtitle}
                </p>

                <p className="font-sans text-xs sm:text-sm text-espresso/75 leading-relaxed font-light">
                  {ritual.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
