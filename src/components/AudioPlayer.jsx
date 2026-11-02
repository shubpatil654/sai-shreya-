import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    setHasInteracted(true);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn('Audio playback could not start:', e);
        setIsPlaying(false);
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <audio
        ref={audioRef}
        src={weddingConfig.assets.audioTrack}
        loop
        preload="metadata"
      />

      {/* Floating subtle control pill */}
      <div className="group relative flex items-center">
        {/* Tooltip badge */}
        <div className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-gold/30 bg-[#FAF7F0]/95 px-3 py-1 text-xs font-serif tracking-widest text-espresso shadow-luxury backdrop-blur-md transition-all sm:block group-hover:opacity-100 opacity-80">
          {isPlaying ? weddingConfig.assets.audioTitle : "Click to Play Ambient Music"}
        </div>

        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
          className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-[#FAF7F0]/90 text-gold-deep shadow-luxury backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-gold hover:text-espresso ${
            isPlaying ? "ring-2 ring-gold/40 ring-offset-2 ring-offset-[#FAF7F0]" : ""
          }`}
        >
          {isPlaying ? (
            <div className="flex items-center gap-[2px]">
              <span className="h-3 w-[2px] bg-gold animate-[pulse_1s_ease-in-out_infinite]" />
              <span className="h-5 w-[2px] bg-gold animate-[pulse_1.2s_ease-in-out_infinite_0.2s]" />
              <span className="h-2 w-[2px] bg-gold animate-[pulse_0.8s_ease-in-out_infinite_0.4s]" />
              <span className="h-4 w-[2px] bg-gold animate-[pulse_1.1s_ease-in-out_infinite_0.1s]" />
            </div>
          ) : (
            <VolumeX className="h-5 w-5 opacity-70 transition-opacity hover:opacity-100" />
          )}
        </button>
      </div>
    </div>
  );
};
