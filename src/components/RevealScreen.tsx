import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Volume2, Save, ArrowRight, MessageSquare, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GameSettings, SubjectItem } from '../types';
import { DrawingCanvas } from './DrawingCanvas';
import { translations } from '../data/translations';
import { audio } from '../lib/audio';

interface RevealScreenProps {
  settings: GameSettings;
  subject: SubjectItem;
  userSelection: string;
  isCorrect: boolean;
  encouragementText: string;
  onSaveNote: (note: string) => void;
  onNextRound: () => void;
}

export const RevealScreen: React.FC<RevealScreenProps> = ({
  settings,
  subject,
  userSelection,
  isCorrect,
  encouragementText,
  onSaveNote,
  onNextRound
}) => {
  const t = translations[settings.language];
  const confirmedName = subject.name[settings.language];
  const reminiscenceQuestion = subject.reminiscence[settings.language];

  const [showReminiscenceModal, setShowReminiscenceModal] = React.useState<boolean>(false);
  const [noteText, setNoteText] = React.useState<string>('');
  const [noteSaved, setNoteSaved] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Fire festive confetti visual celebration ONLY when answer is correct
    if (isCorrect) {
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#ec4899', '#3b82f6', '#10b981', '#f59e0b']
        });
      } catch (e) {
        // fallback safe
      }
      // Play success audio chime on reveal
      audio.playSuccessChime(settings.soundEnabled);
    } else {
      audio.playSoftTap(settings.soundEnabled);
    }

    // Speak confirmed name if read aloud enabled
    if (settings.readAloud) {
      audio.speak(confirmedName, settings.language, true);
    }
  }, [isCorrect, settings.soundEnabled, settings.readAloud, confirmedName]);

  const handleSaveNote = () => {
    if (!noteText.trim()) return;
    onSaveNote(noteText.trim());
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 3000);
  };

  const handleSpeakName = () => {
    audio.speak(confirmedName, settings.language, true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4 py-2 sm:py-6 flex flex-col items-center">
      
      {/* Title Header */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="flex flex-col items-center text-center mb-4 sm:mb-6"
      >
        <div className="flex items-center gap-3">
          <h2 className={`text-2xl sm:text-4xl font-black tracking-tight ${
            settings.highContrast ? 'text-white' : 'text-stone-900'
          }`}>
            {confirmedName}
          </h2>

          <button
            onClick={handleSpeakName}
            className={`p-2 rounded-full transition-all cursor-pointer shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center border active:scale-95 ${
              settings.highContrast
                ? 'bg-indigo-950 border-indigo-700 text-indigo-300'
                : 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-900 border-indigo-500/20'
            }`}
            title="Hear pronunciation"
          >
            <Volume2 className={`w-4 h-4 stroke-[1.75] ${settings.highContrast ? 'text-indigo-300' : 'text-indigo-600'}`} />
          </button>
        </div>
      </motion.div>

      {/* Main Drawing Showcase */}
      <div className="w-full max-w-md mx-auto mb-6">
        <DrawingCanvas
          subject={subject}
          stage={5}
          isRevealed={true}
          highContrast={settings.highContrast}
          lineThickness={settings.lineThickness}
        />
      </div>

      {/* Action Controls: Primary Next Button + Optional Reminiscence Popup Button */}
      <div className="w-full max-w-md flex flex-col gap-3">
        {/* Simple & Stylish Next Button */}
        <button
          onClick={onNextRound}
          className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-700 hover:to-violet-700 active:scale-[0.98] text-white font-extrabold text-base sm:text-lg shadow-xl shadow-indigo-500/25 transition-all cursor-pointer flex items-center justify-center gap-2.5 min-h-[56px] border border-indigo-400/30"
        >
          <span>{t.nextSketch}</span>
          <ArrowRight className="w-5 h-5 text-white shrink-0 stroke-[2]" />
        </button>

        {/* Extra Popup Button for "A Quiet Moment of Memory" */}
        <button
          onClick={() => {
            audio.playSoftTap(settings.soundEnabled);
            setShowReminiscenceModal(true);
          }}
          className={`w-full py-3.5 px-6 rounded-full font-extrabold text-xs sm:text-sm border shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 min-h-[48px] active:scale-[0.98] ${
            settings.highContrast
              ? 'bg-stone-800 hover:bg-stone-700 text-stone-100 border-stone-700'
              : 'bg-white/65 hover:bg-white/90 backdrop-blur-xl text-stone-900 border-white/80 shadow-purple-950/5 hover:border-purple-300/80'
          }`}
        >
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20 shrink-0 stroke-[2]" />
          <span>A Quiet Moment of Memory</span>
        </button>
      </div>

      {/* Popup Modal for "A Quiet Moment of Memory" */}
      <AnimatePresence>
        {showReminiscenceModal && (
          <div className="fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className={`rounded-t-3xl sm:rounded-3xl w-full max-w-lg shadow-2xl border overflow-hidden flex flex-col ${
                settings.highContrast
                  ? 'bg-stone-900 border-stone-700 text-stone-100'
                  : 'bg-white/80 backdrop-blur-2xl border-white/90 text-stone-900'
              }`}
            >
              {/* iOS Drag Handle Bar for mobile */}
              <div className="w-full flex justify-center pt-2.5 pb-1 sm:hidden">
                <div className="w-10 h-1 rounded-full bg-stone-300" />
              </div>

              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-white/70 backdrop-blur-md text-stone-900 flex items-center justify-between border-b border-stone-200/60">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-2xl bg-rose-500/10 text-rose-600 shrink-0 border border-rose-500/20">
                    <Heart className="w-5 h-5 fill-rose-500/20 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-stone-900">A Quiet Moment of Memory</h3>
                    <p className="text-[11px] sm:text-xs text-stone-500 font-medium">Reminiscence reflection for {confirmedName}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowReminiscenceModal(false)}
                  className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200/80 text-stone-600 transition-all cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center active:scale-95 border border-stone-200/60"
                >
                  <X className="w-4 h-4 stroke-[1.75]" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 space-y-4">
                <p className="text-xs sm:text-sm font-bold text-stone-900 leading-relaxed bg-rose-50/70 p-3.5 rounded-2xl border border-rose-200/60">
                  "{reminiscenceQuestion}"
                </p>

                <div>
                  <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-stone-400 shrink-0 stroke-[1.75]" />
                    <span>Caregiver / Memory Note</span>
                  </label>
                  <textarea
                    value={noteText}
                    onChange={e => setNoteText(e.target.value)}
                    placeholder={t.caregiverNotePlaceholder}
                    className="w-full p-3 rounded-2xl border border-stone-200/80 bg-white focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-stone-800 text-xs sm:text-sm outline-none resize-none min-h-[80px] shadow-2xs"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <button
                      onClick={handleSaveNote}
                      disabled={!noteText.trim()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-bold text-xs transition-all cursor-pointer disabled:opacity-40 shadow-2xs"
                    >
                      <Save className="w-3.5 h-3.5 stroke-[1.75]" />
                      <span>{t.saveNoteBtn}</span>
                    </button>
                    {noteSaved && (
                      <span className="text-[11px] font-bold text-emerald-700 animate-fade-in">
                        ✓ {t.noteSaved}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-3.5 sm:p-4 bg-stone-100/60 backdrop-blur-md border-t border-stone-200/60 text-right">
                <button
                  onClick={() => setShowReminiscenceModal(false)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-stone-900 text-white font-extrabold text-xs sm:text-sm hover:bg-stone-800 transition-colors cursor-pointer min-h-[40px] active:scale-95"
                >
                  {t.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
