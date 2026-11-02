import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionDivider } from '../components/Ornaments';
import { MapPin, Navigation, Plane, Train, ExternalLink } from 'lucide-react';

export const Venue = () => {
  return (
    <section id="venue" className="py-24 sm:py-32 px-6 bg-[#F5EFE6] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif italic text-4xl sm:text-6xl text-espresso mb-4"
          >
            The Destination
          </motion.h2>
          <SectionDivider />
        </div>

        {/* Venue Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-3xl overflow-hidden border border-gold/30 bg-white/80 shadow-luxury mb-12"
        >
          {/* Panoramic Venue Photo */}
          <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full overflow-hidden bg-champagne-light">
            <img
              src={weddingConfig.assets.venueImage}
              alt={weddingConfig.venue.name}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-white">
              <span className="font-cinzel text-xs tracking-widest uppercase text-champagne block mb-1">
                Primary Celebration Venue
              </span>
              <h3 className="font-serif italic text-3xl sm:text-5xl text-white">
                {weddingConfig.venue.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-ivory-200/90 mt-1 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>{weddingConfig.venue.city}</span>
              </p>
            </div>
          </div>

          {/* Venue Information */}
          <div className="p-8 sm:p-12 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-gold/20">
              <div className="space-y-2">
                <h4 className="font-cinzel text-xs tracking-widest uppercase text-gold-deep font-semibold">
                  Address &amp; Location
                </h4>
                <p className="font-sans text-sm sm:text-base text-espresso/85 leading-relaxed font-light">
                  {weddingConfig.venue.address}
                </p>
              </div>

              <div>
                <a
                  href={weddingConfig.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-espresso text-ivory-100 font-sans text-xs tracking-widest uppercase hover:bg-gold transition-colors duration-300 shadow-md shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5 text-gold" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              </div>
            </div>

            {/* Transit Distance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-champagne-light/50 border border-gold/20 text-xs sm:text-sm font-sans text-espresso/80">
                <Plane className="w-4 h-4 text-gold shrink-0" />
                <span>{weddingConfig.venue.airportDistance}</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-champagne-light/50 border border-gold/20 text-xs sm:text-sm font-sans text-espresso/80">
                <Train className="w-4 h-4 text-gold shrink-0" />
                <span>{weddingConfig.venue.railwayDistance}</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
