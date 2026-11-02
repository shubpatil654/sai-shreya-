import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { 
  BotanicalCorner, 
  SectionDivider, 
  KuthuVilakku, 
  HangingGarland, 
  SouthIndianToran,
  TempleZariBorder,
  RoyalPeacock,
  RoyalElephant,
  AuspiciousParrots 
} from '../components/Ornaments';
import { ChevronDown, Calendar, MapPin, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden paper-grain">
      
      {/* Hanging Jasmine & Marigold Garlands (Left & Right Margins) */}
      <div className="absolute top-0 left-2 sm:left-6 hidden lg:block z-10">
        <HangingGarland className="h-[90vh] w-8 text-gold" />
      </div>
      <div className="absolute top-0 right-2 sm:right-6 hidden lg:block z-10">
        <HangingGarland className="h-[90vh] w-8 text-gold" />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Top Fresh Mango & Marigold Toranam */}
        <div className="mb-6 hidden sm:block">
          <SouthIndianToran />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Content (lg:col-span-5) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 text-center lg:text-left space-y-6 order-2 lg:order-1 relative"
          >
            {/* Peacock Accent atop */}
            <div className="hidden lg:block absolute -top-12 -left-4 opacity-80">
              <RoyalPeacock className="w-16 h-16 text-gold" />
            </div>

            {/* Sacred Tagline pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white/70 backdrop-blur-sm text-gold-deep text-xs font-cinzel tracking-widest uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              <span>॥ ॐ श्री गणेशाय नमः ॥</span>
            </div>

            {/* Main Couple Names (Clean, without Pelli Koduku / Pelli Kooturu) */}
            <div className="space-y-1">
              <h1 className="font-serif italic text-5xl sm:text-6xl md:text-7xl text-espresso tracking-tight leading-[1.08]">
                {weddingConfig.couple.groom.firstName}
                <span className="block font-display font-light text-gold text-4xl sm:text-5xl my-1">
                  &amp;
                </span>
                {weddingConfig.couple.bride.firstName}
              </h1>
            </div>

            {/* Auspicious Love Birds */}
            <div className="flex justify-center lg:justify-start">
              <AuspiciousParrots className="w-24 h-12 text-gold opacity-80" />
            </div>

            <p className="font-sans text-sm sm:text-base text-espresso/80 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
              {weddingConfig.tagline}
            </p>

            {/* Sumuhurtham & Location Pill Block */}
            <div className="pt-2 border-t border-gold/30 space-y-2 text-xs font-sans text-espresso/80">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span className="font-cinzel font-semibold tracking-wider">{weddingConfig.date.primaryDate}</span>
                </div>
                <span className="hidden sm:inline text-gold/40">&bull;</span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="tracking-wide font-cinzel font-medium">{weddingConfig.venue.name}, {weddingConfig.venue.city}</span>
                </div>
              </div>
              
              <div className="p-2.5 rounded-xl bg-champagne-light/60 border border-gold/25 text-center lg:text-left text-[11px] font-cinzel tracking-wider text-gold-deep font-semibold">
                Sumuhurtham: {weddingConfig.date.muhurthamTime}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#events"
                className="px-7 py-3 rounded-full bg-espresso text-ivory-100 font-sans text-xs tracking-widest uppercase hover:bg-gold transition-colors duration-300 shadow-md hover:shadow-luxury flex items-center gap-2"
              >
                <span>Celebration Schedule</span>
              </a>
              <a
                href="#venue"
                className="px-7 py-3 rounded-full border border-gold text-espresso font-sans text-xs tracking-widest uppercase hover:bg-gold/10 transition-colors duration-300"
              >
                The Venue
              </a>
            </div>
          </motion.div>

          {/* Right Cinematic Hero Photograph (lg:col-span-7) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-7 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Saluting Royal Elephants at the sides */}
              <div className="absolute -left-12 bottom-8 hidden xl:block z-20">
                <RoyalElephant className="w-24 h-24 text-gold drop-shadow-md" />
              </div>
              <div className="absolute -right-12 bottom-8 hidden xl:block z-20">
                <RoyalElephant className="w-24 h-24 text-gold drop-shadow-md" flipped={true} />
              </div>

              {/* Flanking Kuthu Vilakku (Traditional Temple Deepams) */}
              <div className="absolute -left-6 top-1/4 hidden xl:block z-20">
                <KuthuVilakku className="w-9 h-28 text-gold drop-shadow-sm" />
              </div>
              <div className="absolute -right-6 top-1/4 hidden xl:block z-20 scale-x-[-1]">
                <KuthuVilakku className="w-9 h-28 text-gold drop-shadow-sm" />
              </div>

              {/* Ambient gold framing layers */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-gold/35 pointer-events-none transform -rotate-1 hidden sm:block" />
              <div className="absolute -inset-1 sm:-inset-2 rounded-2xl border border-gold/20 pointer-events-none transform rotate-1 hidden sm:block" />

              {/* Main Portrait Masked Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/30 bg-white/20 aspect-[3/4] max-h-[720px] w-full">
                <img
                  src={weddingConfig.assets.heroImage}
                  alt={`${weddingConfig.couple.jointNames} Wedding Portrait`}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="eager"
                />
                
                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent pointer-events-none" />

                {/* Bottom In-Image Badge with Updated Date & Venue */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/85 backdrop-blur-md border border-white/50 text-center shadow-lg">
                  <p className="font-serif italic text-lg sm:text-xl text-espresso font-medium">
                    {weddingConfig.couple.formalNames}
                  </p>
                  <p className="font-cinzel text-xs text-gold-deep tracking-widest uppercase mt-0.5">
                    {weddingConfig.venue.name}, {weddingConfig.venue.city} &bull; {weddingConfig.date.primaryDate}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Temple Zari Border */}
        <div className="mt-8">
          <TempleZariBorder />
        </div>

      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 text-gold-deep/70 hover:text-gold transition-colors">
        <span className="font-sans text-[10px] tracking-widest-luxury uppercase">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-gold" />
        </motion.div>
      </div>
    </section>
  );
};
