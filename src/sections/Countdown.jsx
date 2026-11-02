import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionDivider } from '../components/Ornaments';
import { Heart } from 'lucide-react';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    const targetTime = new Date(weddingConfig.date.isoDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-24 sm:py-32 px-6 bg-[#F5EFE6] relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-radial-gradient opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Section Header */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cinzel text-xs sm:text-sm tracking-widest-luxury uppercase text-gold-deep mb-3"
        >
          Until We Say Forever
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif italic text-4xl sm:text-6xl text-espresso mb-4"
        >
          Counting Down The Moments
        </motion.h2>
        <SectionDivider />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-xs sm:text-sm text-espresso/70 tracking-widest uppercase mb-16"
        >
          {weddingConfig.date.primaryDate} &bull; {weddingConfig.date.muhurthamTime}
        </motion.p>

        {/* Countdown Grid Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="relative rounded-2xl border border-gold/40 bg-white/80 backdrop-blur-md p-6 sm:p-8 shadow-luxury group hover:border-gold hover:-translate-y-1 transition-all duration-300"
            >
              {/* Inner delicate border */}
              <div className="absolute inset-2 border border-gold/15 rounded-xl pointer-events-none" />

              {/* Number display */}
              <div className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-espresso tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </div>

              {/* Unit label */}
              <div className="font-cinzel text-[11px] sm:text-xs tracking-super-wide uppercase text-gold-deep mt-2">
                {unit.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Romantic Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gold/30 bg-white/50 text-xs font-serif italic text-espresso/80"
        >
          <Heart className="w-3.5 h-3.5 text-gold fill-gold" />
          <span>Every second brings us closer to a lifetime of love and joy</span>
        </motion.div>

      </div>
    </section>
  );
};
