import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Royal Traditional Doorway Entrance
 * Replicating the exact aesthetic from the reference:
 * - Stone archway with hanging marigold and jasmine garlands (toranam)
 * - Overhead leafy botanical canopy
 * - Antique lantern sconces on walls
 * - Brass elephants, flower bowls, and candles at the steps
 * - Warm wooden double doors that swing open in 3D on scroll
 * - Just the Shree Ganesh stamp on the door and nothing else
 */
export const RoyalPalaceDoors = ({ isOpen, onOpen, onAnimationComplete }) => {
  const hasTriggeredRef = useRef(false);

  const triggerDoorOpen = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try { navigator.vibrate(40); } catch (e) {}
    }
    onOpen();
  };

  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (e) => {
      // Trigger when scrolling downwards or trackpad swipe
      if (e.deltaY > 10 || Math.abs(e.deltaY) > 25) {
        triggerDoorOpen();
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
          triggerDoorOpen();
        }
      }
    };

    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', 'Space', 'Enter'].includes(e.code)) {
        triggerDoorOpen();
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF7F0] overflow-hidden select-none pointer-events-auto"
      onClick={triggerDoorOpen}
    >
      {/* Background Ambience & Soft Light Glow */}
      <div className="absolute inset-0 bg-[#FAF7F0] pointer-events-none" />

      {/* Main Perspective Scene Container */}
      <motion.div 
        animate={isOpen ? { scale: 1.35, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => {
          if (isOpen && onAnimationComplete) {
            onAnimationComplete();
          }
        }}
        className="relative w-full max-w-[500px] sm:max-w-[560px] md:max-w-[620px] aspect-[1200/2133] max-h-screen flex items-center justify-center"
      >
        
        {/* Door Aperture Viewport (Positioned exactly within the stone arch) */}
        <div 
          className="absolute z-10 overflow-visible"
          style={{
            left: "28.167%",
            top: "34.458%",
            width: "43.666%",
            height: "34.365%",
            perspective: "900px",
            perspectiveOrigin: "center center"
          }}
        >
          {/* Shaft of Golden Radiance behind the doors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: [0, 1, 0], scaleX: [0.3, 3, 6] } : { opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FFF4D0] to-transparent pointer-events-none z-10"
          />

          {/* Left Wooden Door Panel (Swings inward to the left) */}
          <motion.div
            initial={{ rotateY: 0, x: 0 }}
            animate={isOpen ? { rotateY: -85, x: "-6%" } : { rotateY: 0, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              transformOrigin: "left center",
              transformStyle: "preserve-3d"
            }}
            className="absolute left-0 top-0 w-1/2 h-full cursor-pointer shadow-[-8px_0_15px_rgba(0,0,0,0.5)]"
          >
            <img 
              src="/assets/entrance/door_panel_left.jpg" 
              alt="Left Palace Door" 
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />
          </motion.div>

          {/* Right Wooden Door Panel (Swings inward to the right) */}
          <motion.div
            initial={{ rotateY: 0, x: 0 }}
            animate={isOpen ? { rotateY: 85, x: "6%" } : { rotateY: 0, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              transformOrigin: "right center",
              transformStyle: "preserve-3d"
            }}
            className="absolute right-0 top-0 w-1/2 h-full cursor-pointer shadow-[8px_0_15px_rgba(0,0,0,0.5)]"
          >
            <img 
              src="/assets/entrance/door_panel_right.jpg" 
              alt="Right Palace Door" 
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />
          </motion.div>
        </div>

        {/* Foreground Artwork: Stone Arch, Garlands, Lanterns, Plants, Elephants, Steps */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
          <img 
            src="/assets/entrance/door_frame_cutout.png" 
            alt="Palace Entrance Archway" 
            className="w-full h-full object-contain select-none"
            draggable={false}
          />
        </div>

        {/* Minimal Scroll Cue (Fades instantly on scroll) */}
        <div 
          className="absolute z-30 flex flex-col items-center pointer-events-auto"
          style={{
            left: "50%",
            top: "72%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <motion.div
            animate={isOpen ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={triggerDoorOpen}
            className="flex flex-col items-center cursor-pointer group"
          >
            {/* Gold Capsule Track with Gliding Dot */}
            <div className="w-4 h-7 rounded-full border border-[#D4AF37]/80 flex items-start justify-center p-0.5 mb-1 bg-white/70 backdrop-blur-sm shadow-sm group-hover:border-[#FFE7A3] transition-colors">
              <motion.div 
                animate={{ y: [0, 9, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-[#B89647]"
              />
            </div>

            {/* Minimal Typography: SCROLL TO OPEN */}
            <span className="font-cinzel text-[9px] sm:text-[10px] tracking-super-wide uppercase text-[#5A4225] font-semibold group-hover:text-[#9E7A2E] transition-colors drop-shadow-sm">
              Scroll To Open
            </span>

            {/* Cascading Chevrons */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center -space-y-2 mt-0.5 text-[#B89647]"
            >
              <ChevronDown className="w-3 h-3 opacity-60" />
              <ChevronDown className="w-3 h-3 opacity-90" />
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
};
