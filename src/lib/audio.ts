/**
 * Audio Synthesizer & Speech Utilities for Sketch Reveal
 * Uses Web Audio API for gentle, non-jarring acoustic feedback
 * Uses Web Speech API for optional voice narration in English or Sinhala
 */

class AudioController {
  private ctx: AudioContext | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Soft, warm chime tone (e.g., F5 + A5 bell tone with gentle decay)
   */
  playSuccessChime(soundEnabled: boolean = true) {
    if (!soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99]; // C5, E5, G5 warm chord

      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 1.3);
      });
    } catch (e) {
      console.warn('Audio playback not supported or blocked', e);
    }
  }

  /**
   * Gentle, soft click or hint tone
   */
  playSoftTap(soundEnabled: boolean = true) {
    if (!soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.08);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {
      // Ignore audio errors
    }
  }

  /**
   * Speak text out loud using browser Speech Synthesis
   */
  speak(text: string, lang: 'en' | 'si' = 'en', enabled: boolean = true) {
    if (!enabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    try {
      window.speechSynthesis.cancel(); // Stop current speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.88; // Slightly calmer, slower pace for older adults
      utterance.pitch = 1.0;

      // Try finding suitable voice
      const voices = window.speechSynthesis.getVoices();
      if (lang === 'si') {
        const siVoice = voices.find(v => v.lang.startsWith('si') || v.lang.includes('sinhala'));
        if (siVoice) {
          utterance.voice = siVoice;
          utterance.lang = 'si-LK';
        } else {
          // Fallback to clear neutral voice
          utterance.lang = 'en-US';
        }
      } else {
        const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel')));
        if (enVoice) {
          utterance.voice = enVoice;
        }
        utterance.lang = 'en-US';
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  }

  stopSpeech() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const audio = new AudioController();
