import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project.supabase.co'
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Submit RSVP with resilient fallback to localStorage when Supabase is unconfigured
 */
export async function submitRSVP(rsvpData) {
  const timestamp = new Date().toISOString();
  const payload = {
    ...rsvpData,
    created_at: timestamp,
    id: `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('rsvps')
        .insert([payload]);

      if (error) {
        console.warn('Supabase insert failed, falling back to local storage:', error.message);
        saveToLocal(payload);
        return {
          success: true,
          mode: 'local_fallback',
          message: 'Saved locally (Cloud sync unavailable).',
          data: payload
        };
      }

      return {
        success: true,
        mode: 'cloud',
        message: 'RSVP received and synchronized with cloud database.',
        data
      };
    } catch (err) {
      console.warn('Network or Supabase error, saving locally:', err);
      saveToLocal(payload);
      return {
        success: true,
        mode: 'local_fallback',
        message: 'Saved locally due to network connectivity.',
        data: payload
      };
    }
  }

  // Fallback to local storage
  saveToLocal(payload);
  return {
    success: true,
    mode: 'local',
    message: 'RSVP confirmed! (Stored in local storage demo mode).',
    data: payload
  };
}

function saveToLocal(item) {
  try {
    const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    existing.push(item);
    localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
  } catch (e) {
    console.error('LocalStorage write failed:', e);
  }
}

export function getLocalRSVPs() {
  try {
    return JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
  } catch {
    return [];
  }
}
