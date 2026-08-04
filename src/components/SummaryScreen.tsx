import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, RotateCcw, Printer, Copy, Check, Pencil } from 'lucide-react';
import { GameState } from '../types';
import { translations } from '../data/translations';

interface SummaryScreenProps {
  gameState: GameState;
  onRestart: () => void;
  onOpenNotes: () => void;
}

export const SummaryScreen: React.FC<SummaryScreenProps> = ({
  gameState,
  onRestart,
}) => {
  const t = translations[gameState.settings.language];
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (gameState.savedNotes.length === 0) return;
    const formatted = gameState.savedNotes
      .map(
        (n, i) =>
          `[Memory ${i + 1}] Object: ${n.subjectName}\nQuestion: ${n.question}\nNote: ${n.note}\nDate: ${n.date}\n`
      )
      .join('\n---\n\n');

    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 py-2 sm:py-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="bg-white/70 backdrop-blur-2xl border border-white/90 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-purple-950/10 relative overflow-hidden"
      >
        {/* Soft background ambient glow */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-pink-400/20 rounded-full blur-2xl pointer-events-none" />

        {/* Compact Hero Header */}
        <div className="text-center mb-5 relative z-10">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-violet-600 text-white mb-3 shadow-md shadow-purple-500/25 ring-4 ring-purple-100/60">
            <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-1 bg-gradient-to-r from-purple-950 via-indigo-950 to-stone-900 bg-clip-text text-transparent">
            {t.summaryTitle}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-medium">
            {t.summarySub}
          </p>
        </div>

        {/* Compact Stats Row */}
        <div className="grid grid-cols-2 gap-3 mb-5 relative z-10">
          <div className="bg-white/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/90 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0 border border-purple-500/20">
              <Pencil className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-purple-950 leading-none block">
                {gameState.roundHistory.length}
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold text-stone-500 uppercase tracking-wider block mt-0.5">
                {t.totalCompleted}
              </span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/90 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-500/20">
              <BookOpen className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-indigo-950 leading-none block">
                {gameState.savedNotes.length}
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold text-stone-500 uppercase tracking-wider block mt-0.5 truncate">
                {t.caregiverNotesModalTitle}
              </span>
            </div>
          </div>
        </div>

        {/* Saved Memories Section (if any exist) */}
        {gameState.savedNotes.length > 0 && (
          <div className="bg-white/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/90 shadow-sm mb-5 relative z-10">
            <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-stone-200/60">
              <h3 className="text-xs sm:text-sm font-black text-stone-900 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-purple-600 shrink-0 stroke-[2]" />
                <span>{t.caregiverNotesModalTitle}</span>
              </h3>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-stone-50 text-stone-800 text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 border border-stone-200/80 shadow-2xs active:scale-95"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-600 shrink-0 stroke-[2]" /> : <Copy className="w-3 h-3 shrink-0 stroke-[1.75]" />}
                  <span>{copied ? t.copied : t.copyNotes}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-stone-50 text-stone-800 text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 border border-stone-200/80 shadow-2xs active:scale-95"
                >
                  <Printer className="w-3 h-3 shrink-0 stroke-[1.75]" />
                  <span>{t.printNotes}</span>
                </button>
              </div>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {gameState.savedNotes.map((note, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-purple-50/40 border border-purple-100/80">
                  <div className="flex items-center justify-between text-[11px] font-extrabold text-purple-950 mb-0.5">
                    <span>{note.subjectName}</span>
                    <span className="text-stone-400 font-normal text-[10px]">{note.date}</span>
                  </div>
                  <p className="text-[11px] text-stone-500 italic mb-1">"{note.question}"</p>
                  <p className="text-xs text-stone-800 font-medium bg-white/90 p-2 rounded-lg border border-purple-100/60 leading-snug">
                    {note.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-center relative z-10">
          <button
            onClick={onRestart}
            className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[48px] border border-purple-400/30"
          >
            <RotateCcw className="w-4 h-4 shrink-0 stroke-[2]" />
            <span>{t.playAgain}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

