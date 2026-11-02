import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RoyalPalaceDoors } from './sections/RoyalPalaceDoors';
import { Hero } from './sections/Hero';
import { Announcement } from './sections/Announcement';
import { Story } from './sections/Story';
import { Saptapadi } from './sections/Saptapadi';
import { Events } from './sections/Events';
import { Countdown } from './sections/Countdown';
import { Venue } from './sections/Venue';
import { Closing } from './sections/Closing';
import { Navbar } from './components/Navbar';
import { AudioPlayer } from './components/AudioPlayer';
import { FloatingPetals, DreamyGlowParticles } from './components/Ornaments';

function App() {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [doorsUnmounted, setDoorsUnmounted] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAF7F0] text-[#382C25] selection:bg-[#E8D9BE] selection:text-[#382C25]">
      {/* SECTION 01: Royal Palace Doors Entrance with Shree Ganesh Stamp */}
      {!doorsUnmounted && (
        <RoyalPalaceDoors
          isOpen={doorsOpen}
          onOpen={() => setDoorsOpen(true)}
          onAnimationComplete={() => setDoorsUnmounted(true)}
        />
      )}

      {/* Main Royal Wedding Website Experience (Revealed as doors swing open) */}
      <div 
        className={`relative w-full overflow-x-hidden ${
          !doorsOpen ? 'h-screen overflow-hidden' : ''
        }`}
      >
          {/* Subtle Ambient Falling Marigold & Jasmine Petals */}
          <FloatingPetals />

          {/* Dreamy Golden Fireflies & Stardust Ambient Glow */}
          <DreamyGlowParticles />

          {/* Luxury Sticky Navbar */}
          <Navbar />

          {/* Ambient Music Player (Shehnai & Flute, User-Initiated) */}
          <AudioPlayer />

          {/* Main Website Sections */}
          <main>
            {/* Hero Experience */}
            <Hero />

            {/* Wedding Announcement & Vedic Shlokas */}
            <Announcement />

            {/* Our Story Editorial Chapters */}
            <Story />

            {/* Saptapadi: Seven Sacred Vows around the Holy Fire */}
            <Saptapadi />

            {/* Wedding Celebrations Timeline */}
            <Events />

            {/* Live Countdown to Muhurtham */}
            <Countdown />

            {/* Wedding Venue & Royal Palaces */}
            <Venue />
          </main>

          {/* Closing Experience */}
          <Closing />
        </div>
    </div>
  );
}

export default App;
