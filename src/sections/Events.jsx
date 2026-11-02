import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionDivider, SouthIndianToran, TempleZariBorder } from '../components/Ornaments';
import { Calendar, Clock, MapPin, Check } from 'lucide-react';

export const Events = () => {
  const [copiedEventId, setCopiedEventId] = useState(null);

  const handleCopyVenue = (event) => {
    navigator.clipboard.writeText(`${event.venue}`);
    setCopiedEventId(event.id);
    setTimeout(() => setCopiedEventId(null), 2500);
  };

  const getGoogleCalendarUrl = (event) => {
    const title = encodeURIComponent(`${weddingConfig.couple.jointNames} — ${event.title}`);
    const details = encodeURIComponent(`Wedding Celebration: ${event.title}\nDate: ${event.date}\nTime: ${event.time}\nVenue: ${event.venue}`);
    const location = encodeURIComponent(`${event.venue}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section id="events" className="py-24 sm:py-32 px-6 bg-[#FAF7F0] relative overflow-hidden">
      
      {/* South Indian Toranam on top */}
      <SouthIndianToran className="mb-6" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-xs sm:text-sm tracking-widest-luxury uppercase text-gold-deep mb-3"
          >
            Auspicious Schedule &bull; Sacred Celebrations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif italic text-4xl sm:text-6xl text-espresso mb-4"
          >
            Wedding Celebrations
          </motion.h2>
          <SectionDivider />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-espresso/70 tracking-wider uppercase"
          >
            Three days of auspicious rituals and eternal joy
          </motion.p>
        </div>

        {/* Timeline Events Stack */}
        <div className="space-y-20">
          {weddingConfig.events.map((event, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="group relative rounded-3xl border-2 border-gold/30 bg-white/80 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-luxury hover:border-gold transition-all duration-500"
              >
                {/* Gold inner outline */}
                <div className="absolute inset-2 sm:inset-3 border border-gold/15 rounded-2xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Event Visual (lg:col-span-6) */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-champagne-light shadow-md">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                        loading="lazy"
                      />
                      
                      {/* Event Order Badge */}
                      <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-espresso/80 backdrop-blur-md text-ivory-100 font-cinzel text-xs tracking-widest uppercase border border-gold/40">
                        EVENT 0{event.order}
                      </div>

                      {/* Subtle gradient vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Event Details Content (lg:col-span-6) */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'} space-y-6 text-left`}>
                    
                    {/* Title */}
                    <h3 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-espresso leading-snug">
                      {event.title}
                    </h3>

                    {/* Metadata List: Date, Time, Venue */}
                    <div className="space-y-3 py-4 border-y border-gold/20 text-sm sm:text-base font-sans text-espresso/85">
                      <div className="flex items-center gap-3.5">
                        <Calendar className="w-5 h-5 text-gold shrink-0" />
                        <span className="font-cinzel font-semibold tracking-wider">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3.5">
                        <Clock className="w-5 h-5 text-gold shrink-0" />
                        <span className="tracking-wide font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-start gap-3.5">
                        <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span className="tracking-wide font-medium">{event.venue}</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={getGoogleCalendarUrl(event)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full border border-gold/60 text-espresso hover:bg-gold hover:text-white font-sans text-xs tracking-widest uppercase transition-colors duration-300"
                      >
                        Add to Calendar
                      </a>
                      <button
                        onClick={() => handleCopyVenue(event)}
                        className="px-5 py-2 rounded-full border border-gold/30 text-espresso/80 hover:text-espresso hover:border-gold font-sans text-xs tracking-widest uppercase transition-colors duration-300 flex items-center gap-1.5"
                      >
                        {copiedEventId === event.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-green-700" />
                            <span>Address Copied</span>
                          </>
                        ) : (
                          <span>Copy Venue</span>
                        )}
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Temple Zari Border */}
        <TempleZariBorder className="mt-16" />

      </div>
    </section>
  );
};
