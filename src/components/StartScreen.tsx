import React from 'react';
import { motion } from 'motion/react';
import { Play, HelpCircle, Settings, Brain, Heart } from 'lucide-react';
import { GameSettings } from '../types';
import { translations } from '../data/translations';

interface StartScreenProps {
  settings: GameSettings;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
  onStartGame: (totalRounds: number) => void;
  onOpenHowToPlay: () => void;
  onOpenSettings: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  settings,
  onStartGame,
  onOpenHowToPlay,
  onOpenSettings
}) => {
  const t = translations[settings.language];
  const [selectedRounds, setSelectedRounds] = React.useState<number>(5);

  const getDifficultyName = () => {
    if (settings.difficulty === 'easy') return t.easyTitle.split(' ')[0];
    if (settings.difficulty === 'medium') return t.mediumTitle.split(' ')[0];
    return t.hardTitle.split(' ')[0];
  };

  const getCategoryName = () => {
    if (settings.selectedCategory === 'all') return t.allCategories;
    if (settings.selectedCategory === 'household') return t.catHousehold;
    if (settings.selectedCategory === 'animals') return t.catAnimals;
    if (settings.selectedCategory === 'food') return t.catFood;
    if (settings.selectedCategory === 'nature') return t.catNature;
    return t.catTools;
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 sm:py-12 flex flex-col items-center justify-center min-h-[75vh]">
      {/* Minimalist Hero Card with Glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-white/65 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-white/80 shadow-2xl shadow-purple-950/10 text-center mb-6 relative overflow-hidden"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-950 text-xs font-bold uppercase tracking-wider mb-4">
          <Heart className="w-3.5 h-3.5 text-purple-600 fill-purple-600 shrink-0" />
          <span>Cognitive Wellness & Memory</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight bg-gradient-to-r from-purple-950 via-indigo-950 to-stone-900 bg-clip-text text-transparent">
          {t.appTitle}
        </h2>

        {/* iOS Style Segmented Control for Session Length */}
        <div className="mb-6 bg-stone-200/40 backdrop-blur-md p-1.5 rounded-full border border-white/60 inline-flex items-center justify-center gap-1 max-w-full">
          {[
            { num: 5, label: '5 Sketches' },
            { num: 10, label: '10 Sketches' },
            { num: 999, label: 'Continuous' }
          ].map(opt => (
            <button
              key={opt.num}
              onClick={() => setSelectedRounds(opt.num)}
              className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer active:scale-95 min-h-[36px] ${
                selectedRounds === opt.num
                  ? 'bg-white text-purple-950 shadow-sm border border-white/80'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Settings Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={onOpenSettings}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white active:scale-95 text-stone-800 text-xs font-bold border border-white/80 transition-all cursor-pointer shadow-2xs"
          >
            <Brain className="w-3.5 h-3.5 text-purple-600 shrink-0 stroke-[2]" />
            <span>{getDifficultyName()}</span>
            <span className="text-stone-300">•</span>
            <span>{getCategoryName()}</span>
            <Settings className="w-3.5 h-3.5 text-stone-400 ml-1 shrink-0 stroke-[1.75]" />
          </button>
        </div>
      </motion.div>

        {/* Modern Glassmorphic Action Button */}
        <div className="w-full max-w-md">
          <button
            onClick={() => onStartGame(selectedRounds)}
            className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 active:scale-[0.98] text-white font-extrabold text-base sm:text-lg shadow-xl shadow-purple-500/25 transition-all cursor-pointer flex items-center justify-center gap-2.5 min-h-[56px] border border-purple-400/30"
          >
            <Play className="w-5 h-5 fill-current shrink-0" />
            <span>{t.startSession}</span>
          </button>
        </div>
    </div>
  );
};

