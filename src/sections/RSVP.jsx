import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../data/weddingConfig';
import { submitRSVP, isSupabaseConfigured } from '../utils/supabase';
import { SectionDivider } from '../components/Ornaments';
import { CheckCircle2, AlertCircle, Heart, Users, Mail, Phone, User, MessageSquare, Sparkles, Database } from 'lucide-react';

export const RSVP = () => {
  const [formData, setFormData] = useState({
    guestName: '',
    phone: '',
    email: '',
    attendance: 'joyfully_accept',
    guestCount: 1,
    attendingEvents: ['all'],
    dietaryPreference: weddingConfig.rsvp.dietaryOptions[0],
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.guestName.trim() || formData.guestName.trim().length < 2) {
      errs.guestName = 'Please provide your full name.';
    }
    if (!formData.phone.trim() || formData.phone.trim().replace(/\D/g, '').length < 8) {
      errs.phone = 'Please provide a valid phone number (at least 8 digits).';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleEventToggle = (eventId) => {
    if (eventId === 'all') {
      setFormData((prev) => ({
        ...prev,
        attendingEvents: prev.attendingEvents.includes('all') ? [] : ['all'],
      }));
      return;
    }

    setFormData((prev) => {
      let updated = prev.attendingEvents.filter((id) => id !== 'all');
      if (updated.includes(eventId)) {
        updated = updated.filter((id) => id !== eventId);
      } else {
        updated.push(eventId);
      }
      return { ...prev, attendingEvents: updated.length ? updated : ['all'] };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const res = await submitRSVP(formData);
      setIsSubmitting(false);
      setSubmissionResult(res);

      if (formData.attendance === 'joyfully_accept') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B69A62', '#E8D9BE', '#D4AF37', '#EDE5D8'],
        });
      }
    } catch (err) {
      setIsSubmitting(false);
      setSubmissionResult({
        success: false,
        message: 'An unexpected error occurred. Please try again or contact the concierge.',
      });
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFormData({
      guestName: '',
      phone: '',
      email: '',
      attendance: 'joyfully_accept',
      guestCount: 1,
      attendingEvents: ['all'],
      dietaryPreference: weddingConfig.rsvp.dietaryOptions[0],
      message: '',
    });
  };

  return (
    <section id="rsvp" className="py-24 sm:py-32 px-6 bg-[#FAF7F0] relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-champagne/20 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-xs sm:text-sm tracking-widest-luxury uppercase text-gold-deep mb-3"
          >
            Honour Us With Your Presence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif italic text-4xl sm:text-6xl text-espresso mb-4"
          >
            R. S. V. P.
          </motion.h2>
          <SectionDivider />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-espresso/70 leading-relaxed font-light"
          >
            {weddingConfig.rsvp.note}
          </motion.p>
          
          <p className="mt-3 font-cinzel text-xs tracking-widest uppercase text-gold-deep">
            Kindly respond by {weddingConfig.rsvp.deadline}
          </p>
        </div>

        {/* Database Status Pill */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-white/60 backdrop-blur-md text-[11px] font-sans tracking-wide text-espresso/70">
            <Database className="w-3.5 h-3.5 text-gold" />
            <span>
              {isSupabaseConfigured 
                ? "Supabase Cloud Database Connected" 
                : "Development Mode: Local Storage Active (Configure Supabase in .env)"}
            </span>
          </div>
        </div>

        {/* Main RSVP Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl border border-gold/30 bg-white/80 backdrop-blur-md p-8 sm:p-12 shadow-luxury relative"
        >
          {/* Inner double border */}
          <div className="absolute inset-3 border border-gold/15 rounded-2xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {submissionResult && submissionResult.success ? (
              /* Success Confirmation View */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-champagne-light border border-gold/40 flex items-center justify-center text-gold-deep shadow-inner-gold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif italic text-3xl sm:text-4xl text-espresso">
                    {formData.attendance === 'joyfully_accept' 
                      ? "We Look Forward to Welcoming You!" 
                      : "Thank You for Letting Us Know"}
                  </h3>
                  <p className="font-sans text-sm text-espresso/80 font-light max-w-md mx-auto">
                    {formData.attendance === 'joyfully_accept'
                      ? `Dear ${formData.guestName}, your confirmation for ${formData.guestCount} guest(s) has been recorded with grace and gratitude.`
                      : `Dear ${formData.guestName}, we will miss your presence and hold your warm wishes close to our hearts.`}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-champagne-light/50 border border-gold/20 text-xs font-sans text-espresso/70 max-w-md mx-auto">
                  <span className="font-semibold block mb-1">Status Notice:</span>
                  {submissionResult.message}
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full border border-gold text-espresso font-sans text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition-colors duration-300"
                  >
                    Submit Another Response
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Interactive RSVP Form */
              <form key="form" onSubmit={handleSubmit} className="space-y-6 text-left relative z-10">
                
                {/* Attendance Radio Options */}
                <div className="space-y-3">
                  <label className="block font-cinzel text-xs tracking-widest uppercase text-espresso font-semibold">
                    Will You Be Attending? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.attendance === 'joyfully_accept'
                        ? 'border-gold bg-champagne-light/70 shadow-sm'
                        : 'border-gold/25 hover:border-gold/50 bg-white/40'
                    }`}>
                      <input
                        type="radio"
                        name="attendance"
                        value="joyfully_accept"
                        checked={formData.attendance === 'joyfully_accept'}
                        onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                        className="accent-gold h-4 w-4"
                      />
                      <span className="font-serif italic text-base text-espresso">
                        Joyfully Accept With Pleasure
                      </span>
                    </label>

                    <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.attendance === 'regretfully_decline'
                        ? 'border-gold bg-champagne-light/70 shadow-sm'
                        : 'border-gold/25 hover:border-gold/50 bg-white/40'
                    }`}>
                      <input
                        type="radio"
                        name="attendance"
                        value="regretfully_decline"
                        checked={formData.attendance === 'regretfully_decline'}
                        onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                        className="accent-gold h-4 w-4"
                      />
                      <span className="font-serif italic text-base text-espresso">
                        Regretfully Decline in Spirit
                      </span>
                    </label>
                  </div>
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Guest Name */}
                  <div className="space-y-2">
                    <label className="block font-cinzel text-xs tracking-widest uppercase text-espresso font-semibold">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gold absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="e.g. Aditi Sharma"
                        value={formData.guestName}
                        onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gold/30 bg-white/70 text-espresso text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </div>
                    {errors.guestName && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.guestName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="block font-cinzel text-xs tracking-widest uppercase text-espresso font-semibold">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gold absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gold/30 bg-white/70 text-espresso text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Guests Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block font-cinzel text-xs tracking-widest uppercase text-espresso font-semibold">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gold absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        placeholder="aditi@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gold/30 bg-white/70 text-espresso text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Guest Count */}
                  <div className="space-y-2">
                    <label className="block font-cinzel text-xs tracking-widest uppercase text-espresso font-semibold">
                      Number of Guests Attending
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-gold absolute left-3.5 top-3.5" />
                      <select
                        value={formData.guestCount}
                        disabled={formData.attendance === 'regretfully_decline'}
                        onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gold/30 bg-white/70 text-espresso text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-50"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Attending Events Checkboxes */}
                {formData.attendance === 'joyfully_accept' && (
                  <div className="space-y-2.5 pt-2">
                    <label className="block font-cinzel text-xs tracking-widest uppercase text-espresso font-semibold">
                      Select Events You Will Attend
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {weddingConfig.rsvp.eventsList.map((evt) => {
                        const checked = formData.attendingEvents.includes(evt.id);
                        return (
                          <button
                            type="button"
                            key={evt.id}
                            onClick={() => handleEventToggle(evt.id)}
                            className={`flex items-center gap-3 p-3 rounded-xl border text-left text-xs transition-colors ${
                              checked
                                ? 'border-gold bg-champagne-light/60 text-espresso font-medium'
                                : 'border-gold/20 bg-white/30 text-espresso/70 hover:border-gold/40'
                            }`}
                          >
                            <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                              checked ? 'bg-gold border-gold text-white' : 'border-gold/40'
                            }`}>
                              {checked && <Sparkles className="w-3 h-3" />}
                            </span>
                            <span>{evt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Dietary Preferences */}
                {formData.attendance === 'joyfully_accept' && (
                  <div className="space-y-2">
                    <label className="block font-cinzel text-xs tracking-widest uppercase text-espresso font-semibold">
                      Dietary Preferences
                    </label>
                    <select
                      value={formData.dietaryPreference}
                      onChange={(e) => setFormData({ ...formData, dietaryPreference: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-white/70 text-espresso text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    >
                      {weddingConfig.rsvp.dietaryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Personal Message */}
                <div className="space-y-2">
                  <label className="block font-cinzel text-xs tracking-widest uppercase text-espresso font-semibold">
                    Warm Wishes &amp; Blessings for Sai &amp; Shreya
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-gold absolute left-3.5 top-3.5" />
                    <textarea
                      rows={3}
                      placeholder="Share a sweet memory, blessing, or song recommendation..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gold/30 bg-white/70 text-espresso text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-gold-antique via-gold to-gold-antique text-white font-sans text-xs uppercase tracking-super-wide shadow-luxury hover:shadow-luxury-hover transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Confirming..." : "Send R.S.V.P. Response"}
                  </button>
                </div>

              </form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
