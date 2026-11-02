import React from 'react';

/**
 * Regal Royal Peacock (Mayil / Mor)
 * Ornate crown, elegant neck, and magnificent plumage with gold eyespots
 */
export const RoyalPeacock = ({ className = "w-24 h-24 text-gold", flipped = false }) => (
  <svg 
    viewBox="0 0 120 120" 
    fill="none" 
    className={`${className} ${flipped ? 'scale-x-[-1]' : ''} transition-all duration-700 hover:scale-105 drop-shadow-sm`}
  >
    {/* Peacock Crown Feathers (Kalgi) */}
    <path d="M48 24 L42 12 M48 24 L48 9 M48 24 L54 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="42" cy="11" r="2" fill="#0284C7" />
    <circle cx="48" cy="8" r="2.2" fill="#D4AF37" />
    <circle cx="54" cy="11" r="2" fill="#0284C7" />

    {/* Head & Beak */}
    <path d="M46 25 C43 25 39 27 38 31 C37 34 39 37 42 38" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M38 31 L30 33 L38 35 Z" fill="#D4AF37" stroke="currentColor" strokeWidth="0.8" />
    <circle cx="42" cy="30" r="1.5" fill="#0F172A" />

    {/* Graceful S-Curved Neck */}
    <path 
      d="M44 38 C48 45 52 52 48 62 C45 68 38 72 36 78 C34 85 38 92 46 94" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3.2" 
      strokeLinecap="round" 
    />
    {/* Royal Blue / Emerald Neck Sheen */}
    <path 
      d="M46 39 C49 46 51 52 47 61 C45 66 39 70 38 77" 
      fill="none" 
      stroke="#0284C7" 
      strokeWidth="1.8" 
      opacity="0.85"
      strokeLinecap="round" 
    />

    {/* Body & Wing */}
    <path 
      d="M46 72 C55 68 68 70 72 78 C76 86 70 95 60 97 C48 98 42 92 46 72 Z" 
      fill="currentColor" 
      fillOpacity="0.15" 
      stroke="currentColor" 
      strokeWidth="1.8" 
    />
    {/* Wing Feathers layering */}
    <path d="M52 76 Q62 76 66 84" stroke="currentColor" strokeWidth="1.2" />
    <path d="M54 82 Q64 83 66 91" stroke="currentColor" strokeWidth="1.2" />

    {/* Magnificent Cascading Tail Plumage (Thogai) */}
    <path d="M68 76 Q92 65 110 74 Q116 88 104 98 Q92 104 70 96" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.4" />
    <path d="M72 82 Q98 78 114 90 Q112 104 96 108 Q82 110 66 98" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.2" />
    
    {/* Peacock Eyespots (Ocelli) */}
    {[
      { cx: 88, cy: 75, r: 4 },
      { cx: 104, cy: 82, r: 4.5 },
      { cx: 98, cy: 95, r: 4.2 },
      { cx: 84, cy: 88, r: 3.8 },
      { cx: 108, cy: 98, r: 3.5 },
    ].map((spot, i) => (
      <g key={i}>
        <ellipse cx={spot.cx} cy={spot.cy} rx={spot.r} ry={spot.r * 1.3} fill="#047857" stroke="#D4AF37" strokeWidth="0.8" transform={`rotate(${15 * i}, ${spot.cx}, ${spot.cy})`} />
        <circle cx={spot.cx} cy={spot.cy} r={spot.r * 0.6} fill="#0284C7" />
        <circle cx={spot.cx} cy={spot.cy} r={spot.r * 0.25} fill="#0F172A" />
      </g>
    ))}

    {/* Perched Floral Branch */}
    <path d="M25 105 Q55 96 85 102" stroke="#B69A62" strokeWidth="2" strokeLinecap="round" />
    <path d="M35 102 Q30 96 26 98 Q28 104 35 102 Z" fill="#15803D" stroke="#14532D" strokeWidth="0.5" />
    <path d="M70 100 Q76 94 80 96 Q78 102 70 100 Z" fill="#15803D" stroke="#14532D" strokeWidth="0.5" />
    <circle cx="28" cy="97" r="3" fill="#E11D48" />
  </svg>
);

/**
 * Royal Temple Caparisoned Elephant (Gaja Raja)
 * Raised trunk in auspicious blessing salute (Gaja Pooja), adorned with Nettipattam gold headgear and lotus
 */
export const RoyalElephant = ({ className = "w-28 h-28 text-gold", flipped = false }) => (
  <svg 
    viewBox="0 0 130 120" 
    fill="none" 
    className={`${className} ${flipped ? 'scale-x-[-1]' : ''} transition-all duration-700 hover:scale-105 drop-shadow-sm`}
  >
    {/* Body & Back Arch */}
    <path 
      d="M32 95 C30 80 34 55 50 48 C65 42 85 44 98 52 C108 58 112 70 114 95" 
      fill="currentColor" 
      fillOpacity="0.12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />

    {/* Sturdy Legs */}
    {/* Back Leg */}
    <path d="M34 85 L35 110 H47 L46 88" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
    {/* Back Leg inner */}
    <path d="M48 85 L49 108 H58 L57 88" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.7" />
    {/* Front Leg */}
    <path d="M96 85 L97 110 H109 L108 85" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
    {/* Front Leg inner */}
    <path d="M84 85 L85 108 H94 L93 85" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.7" />

    {/* Royal Bridal Saddle (Jhool / Howdah) */}
    <path d="M52 48 Q75 52 94 49 L96 78 Q75 84 50 78 Z" fill="#991B1B" stroke="#D4AF37" strokeWidth="1.5" />
    <path d="M54 52 Q75 56 92 53 L94 74 Q75 80 52 74 Z" fill="#D4AF37" fillOpacity="0.3" stroke="#FEF08A" strokeWidth="0.8" strokeDasharray="2 2" />
    {/* Hanging Gold Bells from saddle */}
    {[58, 66, 74, 82, 90].map((bx, i) => (
      <g key={i} transform={`translate(${bx}, 78)`}>
        <line x1="0" y1="0" x2="0" y2="4" stroke="#D4AF37" strokeWidth="0.8" />
        <circle cx="0" cy="5" r="1.8" fill="#D4AF37" />
      </g>
    ))}

    {/* Head & Ear */}
    <path d="M96 50 C104 46 112 50 116 58 C120 66 118 78 112 84" stroke="currentColor" strokeWidth="2" />
    {/* Large Ornate Royal Ear with Temple Zari Border */}
    <path 
      d="M92 52 C82 50 76 60 78 72 C80 82 88 88 94 85 C96 78 94 65 92 52 Z" 
      fill="currentColor" 
      fillOpacity="0.2" 
      stroke="currentColor" 
      strokeWidth="1.8" 
    />
    <path d="M86 58 Q82 68 84 76" stroke="#D4AF37" strokeWidth="1" strokeDasharray="1 2" />

    {/* Golden Royal Headgear (Nettipattam) */}
    <polygon points="106,44 116,56 102,62 98,48" fill="#D4AF37" stroke="#9E8148" strokeWidth="1" />
    <circle cx="106" cy="52" r="2.5" fill="#DC2626" />
    <circle cx="102" cy="57" r="1.5" fill="#FEF08A" />

    {/* Tusk (Danta) */}
    <path d="M112 76 Q122 78 126 70 Q122 72 114 72 Z" fill="#FAF7F0" stroke="#B69A62" strokeWidth="1" />

    {/* Raised Trunk in Blessing (Abhaya Mudra) holding Pink Lotus */}
    <path 
      d="M114 68 C120 72 124 78 125 84 C126 92 120 96 116 94 C112 92 112 84 116 78 C120 72 124 64 125 54 C126 44 120 36 114 38 C108 40 110 48 116 48" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3.2" 
      strokeLinecap="round" 
    />
    
    {/* Lotus in trunk */}
    <g transform="translate(112, 32)">
      <path d="M0 0 C-4 -6 -6 -12 0 -16 C6 -12 4 -6 0 0 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="0.6" />
      <path d="M-2 0 C-8 -4 -8 -10 -2 -14 Z" fill="#F9A8D4" />
      <path d="M2 0 C8 -4 8 -10 2 -14 Z" fill="#F9A8D4" />
    </g>

    {/* Eye */}
    <circle cx="104" cy="54" r="1.2" fill="#0F172A" />

    {/* Tail */}
    <path d="M34 82 Q28 88 28 98" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M27 98 L29 104 L26 102 Z" fill="currentColor" />
  </svg>
);

/**
 * Auspicious Love Birds (Meenakshi Parrots / Killi)
 * Pair of auspicious green and gold parrots perched on a blooming jasmine garland
 */
export const AuspiciousParrots = ({ className = "w-28 h-16 text-gold" }) => (
  <svg viewBox="0 0 140 80" fill="none" className={className}>
    {/* Floral Garland Twig */}
    <path d="M10 50 Q70 65 130 50" stroke="#854D0E" strokeWidth="2" strokeLinecap="round" />
    <circle cx="35" cy="54" r="3" fill="#D97706" />
    <circle cx="70" cy="58" r="3.5" fill="#FAF7F0" stroke="#EDE5D8" strokeWidth="0.6" />
    <circle cx="105" cy="54" r="3" fill="#D97706" />

    {/* Left Parrot */}
    <g transform="translate(45, 20)">
      {/* Body & Wings */}
      <ellipse cx="12" cy="20" rx="10" ry="16" fill="#15803D" stroke="#14532D" strokeWidth="1" transform="rotate(-15, 12, 20)" />
      {/* Wing feathers */}
      <path d="M6 16 Q14 22 18 30" stroke="#D4AF37" strokeWidth="1.2" />
      {/* Long Tail */}
      <path d="M12 34 Q8 48 4 56 Q10 46 16 34 Z" fill="#16A34A" stroke="#15803D" strokeWidth="0.8" />
      {/* Head */}
      <circle cx="16" cy="6" r="6.5" fill="#16A34A" stroke="#15803D" strokeWidth="0.8" />
      {/* Red Beak */}
      <path d="M22 6 Q28 8 24 12 Q20 10 21 6 Z" fill="#DC2626" />
      <circle cx="17" cy="5" r="1.2" fill="#0F172A" />
      {/* Red Collar ring */}
      <path d="M12 9 Q16 12 20 8" stroke="#DC2626" strokeWidth="1.2" />
    </g>

    {/* Right Parrot (Facing Left) */}
    <g transform="translate(75, 20) scale(-1, 1)">
      <ellipse cx="12" cy="20" rx="10" ry="16" fill="#15803D" stroke="#14532D" strokeWidth="1" transform="rotate(-15, 12, 20)" />
      <path d="M6 16 Q14 22 18 30" stroke="#D4AF37" strokeWidth="1.2" />
      <path d="M12 34 Q8 48 4 56 Q10 46 16 34 Z" fill="#16A34A" stroke="#15803D" strokeWidth="0.8" />
      <circle cx="16" cy="6" r="6.5" fill="#16A34A" stroke="#15803D" strokeWidth="0.8" />
      <path d="M22 6 Q28 8 24 12 Q20 10 21 6 Z" fill="#DC2626" />
      <circle cx="17" cy="5" r="1.2" fill="#0F172A" />
      <path d="M12 9 Q16 12 20 8" stroke="#DC2626" strokeWidth="1.2" />
    </g>
  </svg>
);

/**
 * Dreamy Ambient Starlight & Fireflies Canvas
 * Soft golden sparkles floating gently in the background
 */
export const DreamyGlowParticles = () => (
  <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden opacity-40">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-amber-300 shadow-[0_0_8px_#F59E0B]"
        style={{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `fireflyDrift ${Math.random() * 8 + 6}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
    <style>{`
      @keyframes fireflyDrift {
        0%, 100% {
          transform: translateY(0px) translateX(0px) scale(0.8);
          opacity: 0.2;
        }
        50% {
          transform: translateY(-25px) translateX(15px) scale(1.4);
          opacity: 0.9;
        }
      }
    `}</style>
  </div>
);

/**
 * Vertical Hanging Jasmine & Marigold Garland (Poola Danda)
 */
export const HangingGarland = ({ className = "h-96 w-8 text-gold" }) => {
  return (
    <svg 
      viewBox="0 0 32 400" 
      fill="none" 
      className={`${className} pointer-events-none drop-shadow-sm`}
      preserveAspectRatio="none"
    >
      <line x1="16" y1="0" x2="16" y2="400" stroke="#B69A62" strokeWidth="0.75" strokeDasharray="1 2" opacity="0.6" />
      
      {[...Array(24)].map((_, i) => {
        const y = i * 16 + 8;
        const isAccent = i % 6 === 0;
        const isMarigold = i % 6 === 3;

        if (isAccent) {
          return (
            <g key={i} transform={`translate(16, ${y})`}>
              <circle cx="0" cy="0" r="6" fill="#991B1B" />
              <circle cx="0" cy="0" r="4" fill="#B91C1C" />
              <circle cx="0" cy="0" r="2" fill="#DC2626" />
              <circle cx="-1" cy="-1" r="1" fill="#FCA5A5" />
            </g>
          );
        }

        if (isMarigold) {
          return (
            <g key={i} transform={`translate(16, ${y})`}>
              <circle cx="0" cy="0" r="5.5" fill="#D97706" />
              <circle cx="0" cy="0" r="3.5" fill="#F59E0B" />
              <circle cx="0" cy="1.5" fill="#FEF08A" />
            </g>
          );
        }

        return (
          <g key={i} transform={`translate(16, ${y})`}>
            <ellipse cx="-3" cy="0" rx="3.2" ry="2.2" fill="#FAF7F0" stroke="#EDE5D8" strokeWidth="0.4" />
            <ellipse cx="3" cy="0" rx="3.2" ry="2.2" fill="#FAF7F0" stroke="#EDE5D8" strokeWidth="0.4" />
            <circle cx="0" cy="0" r="2.8" fill="#FFFFFF" stroke="#E8D9BE" strokeWidth="0.4" />
            <circle cx="0" cy="1.2" fill="#FEF08A" />
          </g>
        );
      })}

      <g transform="translate(16, 392)">
        <polygon points="-5,0 5,0 7,6 -7,6" fill="#D4AF37" stroke="#B69A62" strokeWidth="0.5" />
        <circle cx="0" cy="7" r="1.8" fill="#B69A62" />
      </g>
    </svg>
  );
};

/**
 * Traditional South Indian Kuthu Vilakku (Brass Multi-Tiered Temple Deepam)
 */
export const KuthuVilakku = ({ className = "w-10 h-28 text-gold" }) => {
  return (
    <svg viewBox="0 0 60 160" fill="none" className={className}>
      <ellipse cx="30" cy="152" rx="22" ry="6" fill="#B69A62" stroke="#9E8148" strokeWidth="1" />
      <ellipse cx="30" cy="148" rx="16" ry="4" fill="#D4AF37" stroke="#9E8148" strokeWidth="0.8" />
      <path d="M26 148 L28 120 H32 L34 148 Z" fill="#C5A869" stroke="#9E8148" strokeWidth="0.8" />
      
      <circle cx="30" cy="120" r="5" fill="#D4AF37" stroke="#9E8148" strokeWidth="0.8" />
      <path d="M28 120 L29 80 H31 L32 120 Z" fill="#C5A869" stroke="#9E8148" strokeWidth="0.8" />
      <circle cx="30" cy="80" r="5" fill="#D4AF37" stroke="#9E8148" strokeWidth="0.8" />
      
      <path d="M24 95 Q30 102 36 95" stroke="#FAF7F0" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="30" cy="99" r="1.5" fill="#DC2626" />

      <ellipse cx="30" cy="55" rx="24" ry="7" fill="#D4AF37" stroke="#9E8148" strokeWidth="1" />
      <ellipse cx="30" cy="53" rx="18" ry="4" fill="#B69A62" stroke="#9E8148" strokeWidth="0.6" />

      {[10, 20, 30, 40, 50].map((x, i) => (
        <g key={i} transform={`translate(${x}, 47)`}>
          <path d="M0 0 C-2 -5 0 -9 0 -11 C0 -9 2 -5 0 0 Z" fill="#F59E0B" className="animate-pulse" />
          <path d="M0 -2 C-1 -5 0 -8 0 -9 C0 -8 1 -5 0 -2 Z" fill="#FEF08A" />
        </g>
      ))}

      <path d="M28 53 L29 25 H31 L32 53 Z" fill="#C5A869" stroke="#9E8148" strokeWidth="0.8" />
      <path 
        d="M30 25 C26 20 25 15 28 10 C30 7 34 8 33 13 C36 10 40 12 38 18 C37 22 34 25 30 25 Z" 
        fill="#D4AF37" 
        stroke="#9E8148" 
        strokeWidth="0.8" 
      />
      <circle cx="30" cy="7" r="1.5" fill="#DC2626" />
    </svg>
  );
};

/**
 * Brass Urli with Floating Pink Lotus & Jasmine Petals
 */
export const LotusUrli = ({ className = "w-16 h-12 text-gold" }) => {
  return (
    <svg viewBox="0 0 100 70" fill="none" className={className}>
      <path d="M15 45 Q50 68 85 45 C78 35 65 32 50 32 C35 32 22 35 15 45 Z" fill="#C5A869" stroke="#9E8148" strokeWidth="1.5" />
      <ellipse cx="50" cy="35" rx="36" ry="10" fill="#D4AF37" stroke="#9E8148" strokeWidth="1.2" />
      <ellipse cx="50" cy="36" rx="32" ry="7" fill="#6EE7B7" fillOpacity="0.25" stroke="#9E8148" strokeWidth="0.5" />
      
      <circle cx="28" cy="35" r="2.2" fill="#FAF7F0" stroke="#EDE5D8" strokeWidth="0.5" />
      <circle cx="72" cy="35" r="2.2" fill="#FAF7F0" stroke="#EDE5D8" strokeWidth="0.5" />
      <circle cx="38" cy="38" r="1.8" fill="#FAF7F0" stroke="#EDE5D8" strokeWidth="0.5" />
      <circle cx="62" cy="38" r="1.8" fill="#FAF7F0" stroke="#EDE5D8" strokeWidth="0.5" />

      <g transform="translate(50, 32)">
        <path d="M0 2 C-10 -4 -12 -14 0 -22 C12 -14 10 -4 0 2 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="0.6" />
        <path d="M-4 2 C-16 0 -18 -10 -6 -17 C-1 -11 -2 -4 -4 2 Z" fill="#F9A8D4" stroke="#DB2777" strokeWidth="0.5" />
        <path d="M4 2 C16 0 18 -10 6 -17 C1 -11 2 -4 4 2 Z" fill="#F9A8D4" stroke="#DB2777" strokeWidth="0.5" />
        <path d="M0 0 C-6 -4 -7 -12 0 -16 C7 -12 6 -4 0 0 Z" fill="#FDF2F8" stroke="#DB2777" strokeWidth="0.5" />
        <circle cx="0" cy="-6" r="2" fill="#FEF08A" />
      </g>
    </svg>
  );
};

/**
 * Traditional South Indian Mango Leaf & Coconut Fronds Arch Toranam
 */
export const SouthIndianToran = ({ className = "w-full" }) => {
  return (
    <div className={`overflow-hidden flex justify-center ${className}`}>
      <svg viewBox="0 0 1000 65" fill="none" className="w-full max-w-5xl h-14" preserveAspectRatio="none">
        <path d="M0 12 Q250 24 500 12 Q750 24 1000 12" stroke="#854D0E" strokeWidth="2.5" strokeDasharray="3 2" />
        
        {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950].map((x, i) => (
          <g key={i} transform={`translate(${x}, 14)`}>
            <path d="M0 0 C-7 14 -5 32 0 42 C5 32 7 14 0 0 Z" fill="#15803D" stroke="#14532D" strokeWidth="0.8" />
            <line x1="0" y1="0" x2="0" y2="38" stroke="#166534" strokeWidth="0.5" />
            <path d="M-2 0 C-12 12 -10 26 -4 34 C-1 26 -1 12 -2 0 Z" fill="#16A34A" stroke="#14532D" strokeWidth="0.6" opacity="0.9" />
            <path d="M2 0 C12 12 10 26 4 34 C1 26 1 12 2 0 Z" fill="#16A34A" stroke="#14532D" strokeWidth="0.6" opacity="0.9" />
            <circle cx="0" cy="5" r="7" fill="#D97706" />
            <circle cx="0" cy="5" r="4.5" fill="#F59E0B" />
            <circle cx="0" cy="2" fill="#FEF08A" />
          </g>
        ))}

        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x, i) => (
          <g key={i} transform={`translate(${x}, 17)`}>
            <circle cx="0" cy="4" r="3" fill="#FAF7F0" stroke="#EDE5D8" strokeWidth="0.5" />
            <circle cx="0" cy="11" r="3" fill="#FAF7F0" stroke="#EDE5D8" strokeWidth="0.5" />
            <circle cx="0" cy="18" r="3" fill="#DC2626" />
            <line x1="0" y1="21" x2="0" y2="28" stroke="#B69A62" strokeWidth="0.8" />
            <polygon points="-3,28 3,28 4,34 -4,34" fill="#D4AF37" />
            <circle cx="0" cy="35" r="1.2" fill="#B69A62" />
          </g>
        ))}
      </svg>
    </div>
  );
};

/**
 * Traditional South Indian Temple Gopuram Zari Border Pattern
 */
export const TempleZariBorder = ({ className = "w-full my-4" }) => {
  return (
    <div className={`flex items-center justify-center overflow-hidden py-1 ${className}`}>
      <svg viewBox="0 0 600 20" fill="none" className="w-full max-w-4xl h-5 text-gold opacity-75">
        <line x1="0" y1="4" x2="600" y2="4" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="16" x2="600" y2="16" stroke="currentColor" strokeWidth="1" />
        
        {[...Array(30)].map((_, i) => (
          <polygon 
            key={i} 
            points={`${i * 20},15 ${i * 20 + 10},5 ${i * 20 + 20},15`} 
            fill="currentColor" 
            fillOpacity="0.35" 
            stroke="currentColor" 
            strokeWidth="0.6"
          />
        ))}
      </svg>
    </div>
  );
};

/**
 * Regal Lord Ganesha SVG Motif
 */
export const GaneshaMotif = ({ className = "w-16 h-16 text-gold" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="currentColor" 
    className={`${className} transition-transform duration-500 hover:scale-105`}
  >
    <path d="M47 16 H53 V28 H47 Z" opacity="0.9" />
    <circle cx="50" cy="13" r="2.5" />
    <path d="M42 22 Q50 25 58 22" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M36 28 C22 28 20 45 32 48 C36 49 40 46 44 43" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M64 28 C78 28 80 45 68 48 C64 49 60 46 56 43" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M42 26 L50 8 L58 26 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="50" cy="19" r="1.5" />
    <path d="M48 38 Q50 55 52 64 Q54 75 64 74 Q71 73 69 66 Q67 61 62 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="68" cy="64" r="3" opacity="0.9" />
    <circle cx="43" cy="34" r="1.5" />
    <circle cx="57" cy="34" r="1.5" />
    <circle cx="50" cy="46" r="42" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
    <circle cx="50" cy="46" r="38" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

/**
 * Sacred Kalash (Purna Kumbha) with Coconut & Mango Leaves
 */
export const KalashMotif = ({ className = "w-12 h-12 text-gold" }) => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" className={className}>
    <path d="M28 70 H52 M32 70 C24 55 24 45 30 40 H50 C56 45 56 55 48 70" strokeWidth="1.8" strokeLinecap="round" />
    <ellipse cx="40" cy="40" rx="14" ry="4" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
    <circle cx="40" cy="55" r="4" strokeWidth="1" strokeDasharray="1 1" />
    <path d="M40 38 Q30 25 22 28 Q32 35 37 38 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.2" />
    <path d="M40 38 Q50 25 58 28 Q48 35 43 38 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.2" />
    <path d="M40 38 Q35 18 30 18 Q36 28 39 38 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.2" />
    <path d="M40 38 Q45 18 50 18 Q44 28 41 38 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.2" />
    <circle cx="40" cy="24" r="8" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
    <path d="M40 16 L40 10" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Traditional Golden Diya with Glowing Flame
 */
export const DiyaMotif = ({ className = "w-8 h-8 text-gold" }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className}>
    <path 
      d="M10 38 Q30 52 50 38 C48 34 40 32 30 32 C20 32 12 34 10 38 Z" 
      fill="currentColor" 
      stroke="currentColor" 
      strokeWidth="1.5" 
    />
    <path d="M22 47 Q30 54 38 47" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path 
      d="M30 14 C26 22 23 27 25 31 C27 34 33 34 35 31 C37 27 34 22 30 14 Z" 
      fill="#F59E0B" 
      className="animate-pulse"
    />
    <path 
      d="M30 20 C28 24 27 27 28 29 C29 31 31 31 32 29 C33 27 32 24 30 20 Z" 
      fill="#FEF08A" 
    />
    <circle cx="30" cy="26" r="10" fill="#F59E0B" fillOpacity="0.2" className="animate-ping" />
  </svg>
);

/**
 * Botanical Corner Filigree SVG
 */
export const BotanicalCorner = ({ className = "w-16 h-16 text-gold/60", position = "top-left" }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right': return 'scale-x-[-1]';
      case 'bottom-left': return 'scale-y-[-1]';
      case 'bottom-right': return 'scale-x-[-1] scale-y-[-1]';
      default: return '';
    }
  };

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2"
      className={`${className} ${getTransform()} pointer-events-none transition-all duration-700`}
    >
      <path d="M5,5 Q5,50 35,50 Q65,50 65,80 Q65,95 95,95" strokeLinecap="round" strokeDasharray="1 2" opacity="0.6"/>
      <path d="M10,10 C10,35 25,60 55,60 C75,60 85,75 90,90" strokeLinecap="round" />
      <path d="M10,10 Q40,10 50,25 Q60,40 60,70" strokeLinecap="round" opacity="0.8"/>
      <path d="M25,20 C22,12 35,10 32,22 C30,28 26,24 25,20 Z" fill="currentColor" fillOpacity="0.25"/>
      <path d="M45,30 C48,22 58,25 53,35 C50,40 45,34 45,30 Z" fill="currentColor" fillOpacity="0.25"/>
      <path d="M60,55 C65,50 75,58 68,65 C64,68 60,60 60,55 Z" fill="currentColor" fillOpacity="0.25"/>
      <circle cx="10" cy="10" r="3" fill="currentColor" fillOpacity="0.5"/>
    </svg>
  );
};

/**
 * Central Section Divider with Floral Mandala
 */
export const SectionDivider = ({ className = "my-8" }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-gold/40 to-gold/70" />
    <div className="relative flex items-center justify-center">
      <svg className="w-6 h-6 text-gold animate-spin-slow opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="3" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
        <path d="M12 2C12 5 15 8 18 8C15 8 12 11 12 14C12 11 9 8 6 8C9 8 12 5 12 2Z" strokeWidth="0.8" fill="currentColor" fillOpacity="0.2"/>
        <path d="M12 14C12 17 15 20 18 20C15 20 12 23 12 26C12 23 9 20 6 20C9 20 12 17 12 14Z" strokeWidth="0.8" fill="currentColor" fillOpacity="0.2"/>
      </svg>
      <span className="absolute w-2 h-2 rounded-full bg-gold/50 animate-ping opacity-40"></span>
    </div>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-gold/40 to-gold/70" />
  </div>
);

/**
 * Interlocking Monogram Seal
 */
export const MonogramBadge = ({ monogram = "S & S", size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-16 h-16 text-lg",
    md: "w-24 h-24 text-2xl",
    lg: "w-32 h-32 text-3xl",
    xl: "w-40 h-40 text-4xl",
  }[size] || "w-24 h-24 text-2xl";

  return (
    <div className={`relative inline-flex items-center justify-center ${sizeClasses} ${className}`}>
      <svg className="absolute inset-0 w-full h-full text-gold/40 animate-spin-slow" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4"/>
        <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="1.25"/>
      </svg>
      
      <div className="w-[82%] h-[82%] rounded-full bg-[#FAF7F0] border border-gold/40 shadow-inner-gold flex items-center justify-center">
        <span className="font-serif italic font-medium tracking-widest text-gold-deep select-none">
          {monogram}
        </span>
      </div>
    </div>
  );
};

/**
 * Ambient Falling Jasmine Buds & Marigold Petals
 */
export const FloatingPetals = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden opacity-35">
      {[...Array(18)].map((_, i) => {
        const isJasmine = i % 2 === 0;
        return (
          <div
            key={i}
            className={`absolute rounded-full ${
              isJasmine 
                ? 'bg-gradient-to-br from-white via-yellow-100 to-amber-100 shadow-sm' 
                : 'bg-gradient-to-br from-amber-400 via-yellow-400 to-rose-400'
            }`}
            style={{
              width: `${Math.random() * 8 + (isJasmine ? 6 : 8)}px`,
              height: `${Math.random() * 10 + (isJasmine ? 6 : 10)}px`,
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              borderRadius: isJasmine ? '50%' : '60% 40% 70% 30% / 50% 60% 40% 50%',
              animation: `petalFall ${Math.random() * 12 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes petalFall {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.85;
          }
          90% {
            opacity: 0.65;
          }
          100% {
            transform: translateY(105vh) rotate(540deg) translateX(70px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
