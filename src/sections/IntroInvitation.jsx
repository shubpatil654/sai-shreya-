import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { ChevronDown } from 'lucide-react';
import { 
  BotanicalCorner, 
  MonogramBadge, 
  SectionDivider, 
  GaneshaMotif, 
  HangingGarland, 
  KuthuVilakku, 
  LotusUrli, 
  SouthIndianToran, 
  TempleZariBorder, 
  RoyalPeacock, 
  RoyalElephant, 
  AuspiciousParrots 
} from '../components/Ornaments';

export const IntroInvitation = ({ onEnter }) => {
  const hasTriggeredRef = useRef(false);

  const triggerOpen = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try { navigator.vibrate(35); } catch (e) {}
    }
    onEnter();
  };

  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (e) => {
      // Trigger when scrolling downwards or trackpad gesture
      if (e.deltaY > 10 || Math.abs(e.deltaY) > 25) {
        triggerOpen();
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const currentY = e.touches[0].clientY;
        const diffY = touchStartY - currentY;
        // User swiped finger upwards (scrolling content down)
        if (diffY > 15 || Math.abs(diffY) > 25) {
          triggerOpen();
        }
      }
    };

    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', 'Space', 'Enter'].includes(e.code)) {
        triggerOpen();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -50,
        scale: 1.04,
        filter: "blur(8px)",
        transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] } 
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF7F0] px-4 py-8 overflow-y-auto paper-grain"
    >
      {/* Background radial gold glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Hanging Jasmine & Marigold Garlands (Left & Right Margins) */}
      <div className="fixed top-0 left-2 sm:left-6 hidden md:block z-10">
        <HangingGarland className="h-[95vh] w-8 sm:w-10 text-gold" />
      </div>
      <div className="fixed top-0 right-2 sm:right-6 hidden md:block z-10">
        <HangingGarland className="h-[95vh] w-8 sm:w-10 text-gold" />
      </div>

      {/* Main Luxury Royal Invitation Card */}
      <motion.div 
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-xl w-full mx-auto my-auto p-6 sm:p-12 text-center rounded-3xl border-2 border-gold/45 bg-white/85 backdrop-blur-md shadow-2xl"
      >
        {/* Top Fresh Mango & Marigold Toranam */}
        <div className="mb-1">
          <SouthIndianToran />
        </div>

        {/* Facing Royal Peacocks at Top Crest */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 -mt-2 mb-2">
          <RoyalPeacock className="w-16 h-16 text-gold drop-shadow-sm" />
          <div className="flex flex-col items-center">
            <GaneshaMotif className="w-14 h-14 text-gold mb-1" />
            <p className="font-serif italic text-xs sm:text-sm tracking-widest text-gold-deep font-semibold">
              {weddingConfig.shlokas.ganesha}
            </p>
          </div>
          <RoyalPeacock className="w-16 h-16 text-gold drop-shadow-sm" flipped={true} />
        </div>

        {/* Traditional Temple Zari Gold Border */}
        <TempleZariBorder className="my-1" />

        {/* Auspicious Shubh Vivah Banner */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-cinzel text-xs sm:text-sm tracking-super-wide uppercase text-espresso/80 mb-2 font-medium"
        >
          ॥ SHUBH VIVAH ॥ &bull; THE ROYAL WEDDING
        </motion.p>

        {/* Monogram Seal with Flanking Brass Kuthu Vilakku (Traditional Temple Deepams) */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-3 flex items-center justify-center gap-4 sm:gap-6"
        >
          <div className="hidden sm:block">
            <KuthuVilakku className="w-8 h-24 text-gold" />
          </div>
          
          <MonogramBadge monogram={weddingConfig.couple.monogram} size="md" />

          <div className="hidden sm:block">
            <KuthuVilakku className="w-8 h-24 text-gold scale-x-[-1]" />
          </div>
        </motion.div>

        {/* Couple Names (Without Pelli Koduku / Pelli Kooturu) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="space-y-1 mb-2"
        >
          <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-espresso leading-tight">
            {weddingConfig.couple.groom.firstName}
            <span className="font-display font-light text-gold mx-3 text-3xl sm:text-4xl">&amp;</span>
            {weddingConfig.couple.bride.firstName}
          </h1>
        </motion.div>

        {/* Auspicious Love Birds Accent */}
        <div className="flex justify-center my-1">
          <AuspiciousParrots className="w-24 h-12 text-gold opacity-90" />
        </div>

        <SectionDivider className="my-2" />

        {/* Muhurtham Announcement with Updated Date & Venue */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-y-1 mb-6"
        >
          <p className="font-cinzel text-sm sm:text-base tracking-widest text-espresso font-semibold">
            {weddingConfig.date.primaryDate}
          </p>
          <p className="font-sans text-xs font-medium text-gold-deep tracking-wider">
            Sumuhurtham: {weddingConfig.date.muhurthamTime}
          </p>
          <p className="font-cinzel text-xs tracking-wider text-espresso/80 uppercase font-semibold">
            {weddingConfig.venue.name} &bull; {weddingConfig.venue.city}
          </p>
        </motion.div>

        {/* Round Container with Logo of Shree Ganesh as the Stamp & Scroll to Open Cue */}
        <div className="relative flex flex-col items-center justify-center my-3">
          
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-2">
            <div className="hidden sm:block">
              <RoyalElephant className="w-20 h-20 text-gold" />
            </div>

            {/* Round Stamp Container (Interactive on click or scroll) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerOpen}
              role="button"
              tabIndex={0}
              aria-label="Scroll or Tap to Open Wedding Invitation"
              className="group relative flex flex-col items-center justify-center cursor-pointer focus:outline-none"
            >
              {/* Outer Royal Gold Circular Wax Seal Container */}
              <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#FAF7F0] via-[#F4ECE0] to-[#E8D9BE] border-2 border-gold shadow-[0_8px_25px_rgba(182,154,98,0.35)] group-hover:shadow-[0_0_35px_rgba(182,154,98,0.6)] group-hover:border-gold-deep transition-all duration-500">
                
                {/* Fine beaded spinning dashed ring */}
                <div className="absolute inset-1.5 rounded-full border border-gold/45 border-dashed animate-spin-slow pointer-events-none" />
                <div className="absolute inset-2.5 rounded-full border border-gold/30 pointer-events-none" />

                {/* Logo of Shree Ganesh as the Stamp */}
                <div className="relative flex items-center justify-center text-gold group-hover:text-gold-deep transition-colors duration-300">
                  <GaneshaMotif className="w-14 h-14 sm:w-16 sm:h-16 text-gold drop-shadow-sm transform group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>

            <div className="hidden sm:block">
              <RoyalElephant className="w-20 h-20 text-gold" flipped={true} />
            </div>
          </div>

          {/* Luxury Scroll-To-Open Cue (Inspired by High-End Stationery Invites) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            onClick={triggerOpen}
            className="flex flex-col items-center cursor-pointer group mt-2"
          >
            {/* Elegant Capsule Scroll Indicator with Gliding Golden Dot */}
            <div className="w-5 h-8 rounded-full border border-gold/60 flex items-start justify-center p-1 mb-1.5 bg-white/40 shadow-sm group-hover:border-gold transition-colors">
              <motion.div 
                animate={{ y: [0, 11, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-gold"
              />
            </div>

            {/* Typography: SCROLL TO OPEN */}
            <span className="font-cinzel text-[10px] sm:text-[11px] tracking-super-wide uppercase text-espresso/80 font-semibold group-hover:text-gold transition-colors">
              Scroll To Open
            </span>

            {/* Cascading Subtle Chevron Arrows */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center -space-y-2 mt-1 text-gold/80"
            >
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              <ChevronDown className="w-3.5 h-3.5 opacity-90" />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Lotus Urli Accent */}
        <div className="flex justify-center mt-2">
          <LotusUrli className="w-14 h-9 text-gold" />
        </div>

        {/* Bottom Temple Zari Border */}
        <TempleZariBorder className="my-2" />
      </motion.div>
    </motion.div>
  );
};
