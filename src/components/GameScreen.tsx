import React from 'react';
import { motion } from 'motion/react';
import { Smile, Volume2 } from 'lucide-react';
import { GameSettings, SubjectItem, ShuffledChoice } from '../types';
import { DrawingCanvas } from './DrawingCanvas';
import { translations } from '../data/translations';
import { audio } from '../lib/audio';

interface GameScreenProps {
  settings: GameSettings;
  currentRound: number;
  totalRounds: number;
  subject: SubjectItem;
  shuffledChoices: ShuffledChoice[];
  revealedStage: number; // 1 to 5
  scoreCount: number;
  onUseHint: () => void;
  onSelectChoice: (choice: ShuffledChoice) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  settings,
  currentRound,
  totalRounds,
  subject,
  shuffledChoices,
  revealedStage,
  scoreCount,
  onUseHint,
  onSelectChoice
}) => {
  const t = translations[settings.language];

  const handleChoiceClick = (choice: ShuffledChoice) => {
    audio.playSoftTap(settings.soundEnabled);
    onSelectChoice(choice);
  };

  const handleReadAloud = () => {
    const textToSpeak = `${t.guessPrompt}. ${shuffledChoices.map(c => c.text).join(', ')}`;
    audio.speak(textToSpeak, settings.language, true);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-2 sm:px-4 py-1 sm:py-3 flex flex-col justify-start">
      {/* Top Status Bar */}
      <div className="flex items-center justify-between mb-4 bg-white/65 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-white/80 shadow-md shadow-purple-950/5 text-xs">
        {/* Gentle Score Counter */}
        <div className="flex items-center gap-1.5 text-purple-950 font-extrabold text-xs bg-purple-500/10 px-3.5 py-1 rounded-full border border-purple-500/20">
          <Smile className="w-4 h-4 text-purple-600 shrink-0" />
          <span>{scoreCount} <span className="hidden xs:inline">{t.momentsShared}</span></span>
        </div>

        {/* Prompt Header in center */}
        <h2 className="text-xs sm:text-sm font-black text-stone-900 tracking-tight hidden sm:block">
          {t.guessPrompt}
        </h2>

        {/* Voice Read Aloud Button */}
        <button
          onClick={handleReadAloud}
          className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 hover:bg-white backdrop-blur-md text-purple-950 border border-white/90 font-extrabold text-xs shadow-2xs transition-all cursor-pointer min-h-[34px] active:scale-95"
          title="Read prompt aloud"
        >
          <Volume2 className="w-3.5 h-3.5 text-purple-600 shrink-0 stroke-[2]" />
          <span className="hidden xs:inline">{t.readAloud}</span>
        </button>
      </div>

      <h2 className="text-sm font-black text-stone-900 tracking-tight text-center sm:hidden mb-2.5">
        {t.guessPrompt}
      </h2>

      {/* Main Layout: Drawing Canvas Top, 4 Answer Buttons Below */}
      <div className="flex flex-col items-center gap-4 sm:gap-6">
        {/* Center Drawing Canvas */}
        <div className="w-full flex flex-col items-center">
          <DrawingCanvas
            subject={subject}
            stage={revealedStage}
            isRevealed={false}
            highContrast={settings.highContrast}
            lineThickness={settings.lineThickness}
          />
        </div>

        {/* Unified 4 Answer Buttons Grid */}
        <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
          {shuffledChoices.map((choice, idx) => (
            <motion.button
              key={choice.id}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleChoiceClick(choice)}
              className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center justify-between min-h-[50px] sm:min-h-[56px] ${
                settings.highContrast
                  ? 'bg-white border-black text-black ring-2 ring-black/10'
                  : 'bg-white/65 hover:bg-white/90 backdrop-blur-xl border-white/80 text-stone-900 shadow-md shadow-indigo-950/5 hover:shadow-xl hover:shadow-purple-500/15 hover:border-purple-300/80'
              }`}
            >
              <span className="leading-snug pr-2 font-black">{choice.text}</span>
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 border border-purple-400/30 shadow-xs">
                {idx + 1}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};
