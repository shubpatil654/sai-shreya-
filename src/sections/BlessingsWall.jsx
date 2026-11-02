import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../data/weddingConfig';
import { 
  SectionDivider, 
  DiyaMotif, 
  LotusUrli, 
  HangingGarland, 
  SouthIndianToran,
  TempleZariBorder 
} from '../components/Ornaments';
import { Sparkles, Heart, Send, MessageSquareHeart } from 'lucide-react';

export const BlessingsWall = () => {
  const initialBlessings = [
    {
      id: "blessing-1",
      name: "Mrs. & Mr. Balaram Patil",
      relation: "Grandparents",
      message: "Chiranjeeva Sukhee Bhava! May Lord Ganesha and our Kuladevatas shower boundless health, prosperity, and peace upon Sai & Shreya for a hundred autumns.",
      date: "Family Elders",
    },
    {
      id: "blessing-2",
      name: "Smt. Pavitra & Sri Venkatesh Shanbhag",
      relation: "Parents of the Bride",
      message: "From her first dance steps to the sacred wedding mandap, watching Shreya begin this beautiful life with Sai fills our hearts with boundless joy and pride. Shubhamasthu!",
      date: "Parents",
    },
    {
      id: "blessing-3",
      name: "Rohan & Aditi Hishobkar",
      relation: "Cousins & Friends",
      message: "Ready to celebrate and dance to the festive beats all night! You two are truly made for each other. Heartiest congratulations Sai & Shreya!",
      date: "Family & Friends",
    },
  ];

  const [blessings, setBlessings] = useState(() => {
    try {
      const saved = localStorage.getItem('wedding_blessings_v3');
      return saved ? JSON.parse(saved) : initialBlessings;
    } catch {
      return initialBlessings;
    }
  });

  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Shower Akshintalu (Sacred Turmeric Rice), Pearls & Jasmine Confetti
  const showerAkshintalu = () => {
    // Golden Turmeric Rice
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#EAB308', '#D97706', '#FEF08A'],
      shapes: ['circle'],
      scalar: 0.8,
    });

    // White Jasmine Flowers & Pearls
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.55 },
      colors: ['#FFFFFF', '#FAF7F0', '#FDE047', '#FDA4AF'],
      scalar: 1.2,
    });
  };

  const handleSendBlessing = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    showerAkshintalu();

    const newBlessing = {
      id: `bless_${Date.now()}`,
      name: name.trim(),
      relation: relation.trim() || "Honoured Guest",
      message: message.trim(),
      date: "Just Now",
    };

    const updated = [newBlessing, ...blessings];
    setBlessings(updated);
    try {
      localStorage.setItem('wedding_blessings_v3', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    setName('');
    setRelation('');
    setMessage('');
    setHasSubmitted(true);
    setTimeout(() => setHasSubmitted(false), 4000);
  };

  return (
    <section id="blessings" className="py-24 sm:py-32 px-6 bg-[#FAF7F0] relative overflow-hidden">
      
      {/* Toranam on top */}
      <SouthIndianToran className="mb-6" />

      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-champagne/20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <DiyaMotif className="w-5 h-5 text-gold" />
            <span className="font-cinzel text-xs sm:text-sm tracking-widest-luxury uppercase text-gold-deep">
              Ashirwad &bull; Sacred Blessings
            </span>
            <DiyaMotif className="w-5 h-5 text-gold" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif italic text-4xl sm:text-6xl text-espresso mb-4"
          >
            Showers of Blessings
          </motion.h2>

          <SectionDivider />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-espresso/70 tracking-wider uppercase mb-8"
          >
            Shower sacred Akshintalu (turmeric rice) and leave your loving blessings for the couple
          </motion.p>

          {/* Akshintalu & Pearls Shower Button */}
          <button
            onClick={showerAkshintalu}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white font-sans text-xs tracking-widest uppercase shadow-luxury hover:scale-105 transition-all duration-300 border border-yellow-200/50"
          >
            <Sparkles className="w-4 h-4 text-yellow-100 animate-spin-slow" />
            <span>Shower Akshintalu &amp; Pearls</span>
          </button>
        </div>

        {/* Two Column Grid: Form (Left) + Wall (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Write a Blessing Form (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-3xl border-2 border-gold/30 bg-white/85 backdrop-blur-md p-6 sm:p-8 shadow-luxury relative">
            <div className="absolute inset-2 border border-gold/15 rounded-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif italic text-2xl text-espresso flex items-center gap-2">
                <MessageSquareHeart className="w-5 h-5 text-gold" />
                <span>Offer Ashirwad</span>
              </h3>
              <LotusUrli className="w-12 h-8 text-gold" />
            </div>

            <p className="font-sans text-xs text-espresso/70 mb-6 font-light">
              Your heartfelt prayers and warm wishes are the most auspicious gift for Sai &amp; Shreya.
            </p>

            <form onSubmit={handleSendBlessing} className="space-y-4 text-left">
              <div>
                <label className="block font-cinzel text-[11px] tracking-widest uppercase text-espresso font-semibold mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sri Rama Shanbhag & Family"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gold/30 bg-white/70 text-espresso text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block font-cinzel text-[11px] tracking-widest uppercase text-espresso font-semibold mb-1">
                  Relationship / City (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Family Friend, Belgaum"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gold/30 bg-white/70 text-espresso text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block font-cinzel text-[11px] tracking-widest uppercase text-espresso font-semibold mb-1">
                  Sacred Blessing / Ashirwad *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="May Lord Venkateshwara bless your union with eternal happiness, longevity, and joy..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gold/30 bg-white/70 text-espresso text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-espresso text-ivory-100 font-sans text-xs uppercase tracking-widest hover:bg-gold transition-colors duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <span>Send Auspicious Ashirwad</span>
                <Send className="w-3.5 h-3.5 text-gold" />
              </button>

              {hasSubmitted && (
                <p className="text-center text-xs font-serif italic text-gold-deep animate-fadeIn">
                  ✦ Thank you! Your sacred blessing has been placed on the wall ✦
                </p>
              )}
            </form>
          </div>

          {/* Wall of Blessings Feed (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4 max-h-[520px] overflow-y-auto pr-2">
            {blessings.map((b) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl border border-gold/25 bg-white/80 backdrop-blur-sm shadow-sm relative group hover:border-gold transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-serif italic text-lg text-espresso font-medium">
                      {b.name}
                    </h4>
                    <span className="font-cinzel text-[10px] tracking-wider uppercase text-gold-deep font-semibold">
                      {b.relation}
                    </span>
                  </div>
                  <Heart className="w-4 h-4 text-gold/60 fill-gold/20" />
                </div>

                <p className="font-sans text-xs sm:text-sm text-espresso/80 leading-relaxed font-light italic">
                  “{b.message}”
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Temple Zari Border */}
        <TempleZariBorder className="mt-8" />

      </div>
    </section>
  );
};
