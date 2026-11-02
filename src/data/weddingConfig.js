/**
 * ==============================================================================
 * THE ETERNAL VOW — CENTRALIZED WEDDING CONFIGURATION
 * ==============================================================================
 * Royal Wedding Celebration for Sai & Shreya
 * Venue: PAI RESORTS, BELGAUM
 * Date: 26th December 2026
 */

export const weddingConfig = {
  // Brand & Metadata
  projectName: "THE ETERNAL VOW",
  edition: "Royal Heritage Edition",
  hashtag: "#SaiWedsShreya",
  tagline: "Two souls united by sacred Vedic vows, blessed by eternal constellations",

  // The Couple
  couple: {
    firstName: "Sai",
    groom: {
      firstName: "Sai",
      fullName: "Sai Hishobkar",
      parentNames: "Son of Smt. Jayashri & Sri Shripad Arjunrao Hishobkar of Belgaum",
      grandParentNames: "Grandson of Late Mrs. & Mr. Arjunrao Hishobkar and Mrs. & Mr. Balaram Patil",
      gothram: "Koundinya Gotram",
      instagram: "@saihishobkar",
    },
    bride: {
      firstName: "Shreya",
      fullName: "Shreya Shanbhag",
      parentNames: "Daughter of Smt. Pavitra & Sri Venkatesh Shantaram Shanbhag",
      grandParentNames: "Granddaughter of Late Mr. & Mrs. Shantaram Dasappa Shanbhag and Mr. & Mrs. Vaman Bhat",
      gothram: "Kashyapa Gotram",
      instagram: "@shreyashanbhag",
    },
    monogram: "S & S",
    jointNames: "Sai & Shreya",
    formalNames: "Sai Hishobkar & Shreya Shanbhag",
  },

  // Key Dates & Auspicious Muhurtham
  date: {
    primaryDate: "26th December 2026",
    isoDate: "2026-12-26T11:45:00+05:30", // Live countdown to exact Muhurtham on Dec 26, 2026 at 11:45 AM
    displayDate: "26 . 12 . 2026",
    daysSpan: "December 25 – 28, 2026",
    timezone: "Asia/Kolkata",
    muhurthamTime: "11:45 AM (Auspicious Sumuhurtham)",
  },

  // Sacred Invocations & Shlokas
  shlokas: {
    ganesha: "॥ श्री गणेशाय नमः ॥",
    invocation: "॥ ॐ श्री गणेशाय नमः ॥ श्री गुरुभ्यो नमः ॥",
    mangalam: "मंगलम् भगवान विष्णुः मंगलम् गरुडध्वजः ।\nमंगलम् पुण्डरीकाक्षः मङ्गलाय तनो हरिः ॥",
    mangalamMeaning: "All auspiciousness to Lord Vishnu, bearer of the Garuda banner. All auspiciousness to the Lotus-eyed One, may the Divine shower eternal grace upon this holy marriage.",
    mangalya: "माङ्गल्यं तन्तुनानेन मम जीवनहेतुना ।\nकण्ठे बध्नामि सुभगे सञ्जीव शरदः शतम् ॥",
    mangalyaMeaning: "“This sacred golden thread (Mangalsutra), the foundation of my life and spirit, I tie around your neck, O radiant bride. May you live with auspicious joy for a hundred autumns.”",
    jeelakarra: "॥ समये समये शं नो भवन्तु ॥",
    jeelakarraMeaning: "The auspicious bonding of cumin and jaggery on the crown of the head at the exact Muhurtham, signifying an inseparable and sweet eternal union.",
  },

  // Visual Assets
  assets: {
    heroImage: "/images/couple-hero.jpg",
    venueImage: "/images/venue-palace.jpg",
    ogImage: "/images/og-wedding.jpg",
    audioTrack: "/music/ambient-romance.mp3",
    audioTitle: "Nadaswaram & Shehnai — Raga Kalyani & Gambheera Nattai",
  },

  // Section 01 & 03 — Announcements & Invitations
  announcement: {
    subheading: "A SACRED WEDDING CELEBRATION",
    heading: "Shubh Vivah",
    formalInvitation: 
      "Together with our revered elders and families, Sai Hishobkar and Shreya Shanbhag joyfully request the honour of your auspicious presence and blessings at their wedding celebration.",
    familyNote:
      "With the divine grace of Lord Ganesha and our Kuladevatas, the Hishobkar and Shanbhag families invite you to join the wedding celebration at Pai Resorts, Belgaum.",
    quote: 
      "“Dharmecha, Arthecha, Kaamecha, Mokshecha... I promise to be with you in spiritual duty, righteous wealth, selfless love, and eternal liberation.”",
  },

  // Section 04 — Our Story
  story: [
    {
      id: "chapter-1",
      number: "01",
      title: "The Serendipitous Meeting",
      subtitle: "Autumn in Kyoto, 2021",
      description:
        "What was meant to be a chance meeting under the golden ginkgo trees of Kyoto turned into a ten-hour conversation on temple architecture, classical music, and life. As twilight fell over the Kamogawa river, they both sensed that destiny had quietly rearranged their constellations.",
      image: "/images/story-1.jpg",
      quote: "Some souls simply recognize each other across time.",
    },
    {
      id: "chapter-2",
      number: "02",
      title: "The Shared Odyssey",
      subtitle: "Four Years of Adventures & Belonging",
      description:
        "Through late-night drives along the coast, shared cups of fragrant degree filter coffee at dawn, and quiet moments between bustling city lights, their bond deepened into an unshakeable home. In each other, they found their fiercest cheerleader and gentlest sanctuary.",
      image: "/images/story-3.jpg",
      quote: "Love is not gazing at each other, but looking outward together in the same direction.",
    },
    {
      id: "chapter-3",
      number: "03",
      title: "The Sacred Promise",
      subtitle: "A Quiet Dusk at Lake Pichola, 2025",
      description:
        "On a private wooden boat bathed in amber candlelight and the soft ripples of Lake Pichola, Sai knelt with a family heirloom ring. Surrounded by floating lotus blossoms and ancient domes, Shreya spoke the most joyful 'Yes' of her life.",
      image: "/images/story-2.jpg",
      quote: "Here begins our forever, written in stars and gold.",
    },
  ],

  // Traditional Wedding Rituals
  rituals: [
    {
      id: "mangalasnanam",
      name: "Mangalasnanam & Haldi",
      subtitle: "Sacred Herbal Snanam & Turmeric Anointment",
      description: "Early morning rituals where the bride and groom are anointed with scented oils, fresh turmeric (Nalugu), and showered with holy water amidst Nadaswaram chants, preparing their souls for the sacred union.",
      symbol: "Kalasam & Nalugu",
    },
    {
      id: "kashi-yatra",
      name: "Snathakam & Kashi Yatra",
      subtitle: "The Symbolic Pilgrimage of Renunciation",
      description: "The groom playfully feigns a pilgrimage to holy Kashi with an umbrella, scriptures, and walking stick, until the bride's father graciously invites him back to enter the sacred Grihastha Ashrama (householder life).",
      symbol: "Umbrella & Geeta",
    },
    {
      id: "jeelakarra-bellam",
      name: "Jeelakarra Bellam (Sumuhurtham)",
      subtitle: "The Inseparable Union at 11:45 AM",
      description: "Separated by a silk screen, at the exact auspicious Muhurtham second (11:45 AM), the couple place a paste of cumin seeds and jaggery on each other's heads. Just as cumin and jaggery cannot be separated once blended, their lives become one sweet, inseparable bond.",
      symbol: "Cumin & Jaggery",
    },
    {
      id: "mangalya-dharanam",
      name: "Kanyadaanam & Mangalya Dharanam",
      subtitle: "The Three Sacred Knots of the Golden Thali",
      description: "To the crescendo of the kettimelam and Vedic mantras, Sai ties the three sacred knots of the golden Mangalsutra around Shreya's neck, sealing their marital devotion, family honor, and spiritual bond.",
      symbol: "Golden Thali",
    },
    {
      id: "talambralu",
      name: "Talambralu Extravaganza",
      subtitle: "Shower of Pearls, Turmeric Rice & Joy",
      description: "One of the most joyous wedding ceremonies! The newlyweds shower each other with heaps of sacred turmeric rice (Akshintalu), pearls, and fresh jasmine buds, filling the mandap with pure laughter and elder blessings.",
      symbol: "Akshintalu & Pearls",
    },
    {
      id: "saptapadi",
      name: "Saptapadi & Arundhati Darshanam",
      subtitle: "Seven Steps & The Eternal Star of Devotion",
      description: "The couple takes seven steps together around the holy Agni. As dusk falls, the groom guides the bride to behold the twin stars of Vashishta and Arundhati in the sky, symbolising unshakeable marital constancy.",
      symbol: "Agni & Stars",
    },
  ],

  // Saptapadi: The 7 Sacred Vows
  saptapadiVows: [
    {
      step: "1",
      sanskrit: "इष एकपदी भव",
      title: "The First Step — Nourishment & Pure Living",
      vow: "We take this first step together to nourish our household with pure food, healthy living, and shared reverence.",
    },
    {
      step: "2",
      sanskrit: "ऊर्जे द्विपदी भव",
      title: "The Second Step — Strength & Courage",
      vow: "We take this second step to stand steadfast through all challenges, sharing strength of body, mind, and spirit.",
    },
    {
      step: "3",
      sanskrit: "रायस्पोषाय त्रिपदी भव",
      title: "The Third Step — Prosperity & Righteous Wealth",
      vow: "We take this third step to cultivate honest prosperity, sacred charity, and wisdom together.",
    },
    {
      step: "4",
      sanskrit: "मायोभव्याय चतुष्पदी भव",
      title: "The Fourth Step — Joy & Family Harmony",
      vow: "We take this fourth step to fill our home with music, peace, family togetherness, and lifelong contentment.",
    },
    {
      step: "5",
      sanskrit: "प्रजाभ्यः पञ्चपदी भव",
      title: "The Fifth Step — Compassion & Noble Lineage",
      vow: "We take this fifth step to nurture noble virtues, protect all beings, and cherish our heritage.",
    },
    {
      step: "6",
      sanskrit: "ऋतुभ्यः षट्पदी भव",
      title: "The Sixth Step — Harmony Through All Seasons",
      vow: "We take this sixth step to remain united through joy and sorrow, across all changing seasons of life.",
    },
    {
      step: "7",
      sanskrit: "सखे सप्तपदी भव",
      title: "The Seventh Step — Eternal Companionship",
      vow: "Having walked seven steps together, you have become my eternal friend. May our sacred companionship never end.",
    },
  ],

  // Celebrations Timeline
  events: [
    {
      id: "sangeet",
      order: "01",
      title: "Shreemant Poojan & Sangeet Night",
      date: "Friday, 25th December 2026",
      time: "6:00 PM onwards",
      venue: "Pai Resorts, Belgaum",
      image: "/images/event-sangeet.jpg",
      accentColor: "#A67C37",
    },
    {
      id: "wedding",
      order: "02",
      title: "The Wedding",
      date: "Saturday, 26th December 2026",
      time: "Muhurtham at 11:45 AM",
      venue: "Pai Resorts, Belgaum",
      image: "/images/event-ceremony.jpg",
      accentColor: "#9E8148",
    },
    {
      id: "reception",
      order: "03",
      title: "Reception",
      date: "Monday, 28th December 2026",
      time: "7:00 PM onwards",
      venue: "Shagun Gardens, Belgaum",
      image: "/images/event-reception.jpg",
      accentColor: "#5A4434",
    },
  ],

  // Editorial Gallery
  gallery: [
    {
      id: "gal-1",
      src: "/images/couple-hero.jpg",
      title: "The Royal Wedding Portrait",
      caption: "Draped in heritage gold and ivory zari, an eternal sacred promise.",
      aspect: "portrait",
    },
    {
      id: "gal-2",
      src: "/images/event-ceremony.jpg",
      title: "The Floating Jasmine Mandap",
      caption: "Cascading tuberose and jasmine garlands glowing with sacred deepams.",
      aspect: "landscape",
    },
    {
      id: "gal-3",
      src: "/images/story-1.jpg",
      title: "Moments in Kyoto",
      caption: "Where two souls first crossed constellations.",
      aspect: "portrait",
    },
    {
      id: "gal-4",
      src: "/images/event-sangeet.jpg",
      title: "Night of Celestial Fire",
      caption: "Music and celebration under an amphitheatre of fairy lights.",
      aspect: "landscape",
    },
    {
      id: "gal-5",
      src: "/images/story-2.jpg",
      title: "Heirloom & Henna",
      caption: "Intricate mehendi patterns framing forever.",
      aspect: "square",
    },
    {
      id: "gal-6",
      src: "/images/venue-palace.jpg",
      title: "Pai Resorts Sanctuary",
      caption: "Serene manicured landscapes and glowing evening lanterns.",
      aspect: "landscape",
    },
    {
      id: "gal-7",
      src: "/images/gallery-1.jpg",
      title: "Graceful Footsteps",
      caption: "Walking into a lifetime of shared dreams in pure silk.",
      aspect: "portrait",
    },
    {
      id: "gal-8",
      src: "/images/gallery-2.jpg",
      title: "Chandelier Ambiance",
      caption: "Golden glow dancing across banquet crystal.",
      aspect: "landscape",
    },
    {
      id: "gal-9",
      src: "/images/gallery-3.jpg",
      title: "Golden Hour Embrace",
      caption: "The warmth of home found in each other.",
      aspect: "portrait",
    },
  ],

  // Venue Information — PAI RESORTS, BELGAUM
  venue: {
    name: "PAI RESORTS",
    city: "Belgaum, Karnataka, India",
    address: "Pai Resorts, PB Road, Belgaum, Karnataka 590001",
    googleMapsUrl: "https://maps.google.com/?q=Pai+Resorts+Belgaum",
    mapEmbedQuery: "Pai+Resorts+Belgaum",
    airportDistance: "Belagavi Airport (IXG) — 18 km (approx. 30 mins)",
    railwayDistance: "Belagavi Railway Station — 8 km (approx. 20 mins)",
    accommodations: 
      "Special room blocks and suites have been arranged for our honoured guests at Pai Resorts, Belgaum. Dedicated hospitality desks and guest concierge are available at the resort lobby.",
    conciergeEmail: "concierge@theeternalvow.com",
    conciergePhone: "+91 98765 43210",
  },

  // Closing & Blessings
  closing: {
    message: "We Seek Your Auspicious Ashirwad",
    signoff: "With Immense Love, Gratitude & Reverence,",
    familySignoff: "The Hishobkar & Shanbhag Families",
    compliments: "With Best Compliments from Grandparents, Uncles, Aunts, Sisters, Brothers, and loving Little Ones.",
    blessingQuote: "“स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः । स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः स्वस्ति नो बृहस्पतिर्दधातु ॥”",
    blessingEnglish: "May the divine forces bestow peace, longevity, prosperity, and eternal harmony upon this sacred union.",
  },

  // Color Tokens
  theme: {
    primaryBg: "#FAF7F0",
    champagne: "#E8D9BE",
    antiqueGold: "#B69A62",
    deepEspresso: "#382C25",
    softBeige: "#EDE5D8",
    pureWhite: "#FFFFFF",
    marigold: "#D97706",
    kumkumRed: "#8B1E1E",
    templeGreen: "#15803D",
  }
};
