import React from 'react';
import {
  GameSettings,
  GameState,
  SubjectItem,
  ShuffledChoice,
  RoundResult
} from './types';
import {
  getRandomSubject,
  generateShuffledChoices,
  getRandomEncouragement
} from './data/subjects';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { RevealScreen } from './components/RevealScreen';
import { SummaryScreen } from './components/SummaryScreen';
import { CaregiverNotesModal } from './components/CaregiverNotesModal';
import { SettingsModal } from './components/SettingsModal';
import { HowToPlayModal } from './components/HowToPlayModal';

const INITIAL_SETTINGS: GameSettings = {
  language: 'en',
  difficulty: 'easy',
  fontSize: 'large',
  highContrast: false,
  soundEnabled: true,
  readAloud: false,
  selectedCategory: 'all',
  lineThickness: 3.5,
  bgTheme: 'lavender'
};

export default function App() {
  // Load saved settings from localStorage if present
  const [settings, setSettings] = React.useState<GameSettings>(() => {
    try {
      const saved = localStorage.getItem('sketch_reveal_settings');
      if (saved) return { ...INITIAL_SETTINGS, ...JSON.parse(saved) };
    } catch (e) {
      // Ignore fallback
    }
    return INITIAL_SETTINGS;
  });

  const [gameState, setGameState] = React.useState<GameState>({
    screen: 'start',
    settings,
    currentRound: 1,
    totalRounds: 5,
    currentSubject: null,
    shuffledAnswers: [],
    revealedStage: 4,
    userChoice: null,
    score: { correct: 0, total: 0 },
    roundHistory: [],
    savedNotes: []
  });

  const [usedSubjectIds, setUsedSubjectIds] = React.useState<string[]>([]);
  const [isNotesModalOpen, setIsNotesModalOpen] = React.useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = React.useState(false);
  const [isHowToPlayModalOpen, setIsHowToPlayModalOpen] = React.useState(false);
  const [encouragementMessage, setEncouragementMessage] = React.useState('');

  // Persist settings changes
  const handleUpdateSettings = (newSettings: Partial<GameSettings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...newSettings };
      try {
        localStorage.setItem('sketch_reveal_settings', JSON.stringify(updated));
      } catch (e) {
        // Ignore fallback
      }
      return updated;
    });
  };

  // Keep gameState.settings in sync
  React.useEffect(() => {
    setGameState(prev => ({ ...prev, settings }));
  }, [settings]);

  // Initial stage reveal calculator based on difficulty
  const getInitialStage = (difficulty: GameSettings['difficulty']): number => {
    switch (difficulty) {
      case 'easy':
        return 4; // shows 4 of 5 stages (~80%)
      case 'medium':
        return 3; // shows 3 of 5 stages (~60%)
      case 'hard':
        return 2; // shows 2 of 5 stages (~40%)
      default:
        return 4;
    }
  };

  // Start a new game session
  const handleStartGame = (totalRounds: number) => {
    const firstSubject = getRandomSubject(settings.selectedCategory, []);
    const choices = generateShuffledChoices(firstSubject, settings.language);
    const initialStage = getInitialStage(settings.difficulty);

    setUsedSubjectIds([firstSubject.id]);
    setGameState(prev => ({
      ...prev,
      screen: 'game',
      currentRound: 1,
      totalRounds,
      currentSubject: firstSubject,
      shuffledAnswers: choices,
      revealedStage: initialStage,
      userChoice: null,
      score: { correct: 0, total: 0 },
      roundHistory: []
    }));
  };

  // Hint / Gentle Nudge (+1 stage)
  const handleUseHint = () => {
    setGameState(prev => ({
      ...prev,
      revealedStage: Math.min(5, prev.revealedStage + 1)
    }));
  };

  // Handle user selecting an answer choice
  const handleSelectChoice = (choice: ShuffledChoice) => {
    if (!gameState.currentSubject) return;

    const isCorrect = choice.isCorrect;
    const msg = getRandomEncouragement(isCorrect, settings.language);
    setEncouragementMessage(msg);

    const roundResult: RoundResult = {
      roundNumber: gameState.currentRound,
      subject: gameState.currentSubject,
      userSelection: choice.text,
      isCorrect,
      difficulty: settings.difficulty,
      hintUsed: gameState.revealedStage > getInitialStage(settings.difficulty),
      timestamp: new Date().toLocaleTimeString()
    };

    setGameState(prev => ({
      ...prev,
      screen: 'reveal',
      userChoice: choice.text,
      score: {
        correct: prev.score.correct + (isCorrect ? 1 : 0),
        total: prev.score.total + 1
      },
      roundHistory: [...prev.roundHistory, roundResult]
    }));
  };

  // Save Caregiver / User Reminiscence Note
  const handleSaveNote = (noteText: string) => {
    if (!gameState.currentSubject) return;

    const newNote = {
      subjectName: gameState.currentSubject.name[settings.language],
      question: gameState.currentSubject.reminiscence[settings.language],
      note: noteText,
      date: new Date().toLocaleDateString()
    };

    setGameState(prev => ({
      ...prev,
      savedNotes: [newNote, ...prev.savedNotes]
    }));
  };

  // Proceed to next round or finish session
  const handleNextRound = () => {
    if (gameState.currentRound >= gameState.totalRounds) {
      setGameState(prev => ({ ...prev, screen: 'summary' }));
      return;
    }

    const nextRoundNum = gameState.currentRound + 1;
    const nextSubject = getRandomSubject(settings.selectedCategory, usedSubjectIds);
    const nextChoices = generateShuffledChoices(nextSubject, settings.language);
    const initialStage = getInitialStage(settings.difficulty);

    setUsedSubjectIds(prev => [...prev, nextSubject.id]);
    setGameState(prev => ({
      ...prev,
      screen: 'game',
      currentRound: nextRoundNum,
      currentSubject: nextSubject,
      shuffledAnswers: nextChoices,
      revealedStage: initialStage,
      userChoice: null
    }));
  };

  // Restart to main start screen
  const handleRestart = () => {
    setGameState(prev => ({
      ...prev,
      screen: 'start',
      currentRound: 1,
      currentSubject: null,
      roundHistory: []
    }));
  };

  // Determine root typography scale
  const fontSizeClass =
    settings.fontSize === 'xlarge'
      ? 'text-lg sm:text-xl'
      : settings.fontSize === 'large'
      ? 'text-base sm:text-lg'
      : 'text-sm sm:text-base';

  const bgTheme = settings.bgTheme || 'lavender';

  const themeBgClass = settings.highContrast
    ? 'bg-stone-900 text-stone-100'
    : bgTheme === 'mint'
    ? 'bg-gradient-to-br from-emerald-100/70 via-teal-50/50 to-cyan-100/60 text-stone-900'
    : bgTheme === 'peach'
    ? 'bg-gradient-to-br from-amber-100/70 via-orange-50/50 to-rose-100/60 text-stone-900'
    : bgTheme === 'sky'
    ? 'bg-gradient-to-br from-sky-100/70 via-blue-50/50 to-indigo-100/60 text-stone-900'
    : bgTheme === 'rose'
    ? 'bg-gradient-to-br from-rose-100/70 via-pink-50/50 to-purple-100/60 text-stone-900'
    : bgTheme === 'slate'
    ? 'bg-gradient-to-br from-slate-200/70 via-stone-100/60 to-zinc-200/60 text-stone-900'
    : 'bg-gradient-to-br from-indigo-100/70 via-purple-50/50 to-pink-100/60 text-stone-900';

  return (
    <div className={`min-h-screen min-h-dvh flex flex-col font-sans transition-colors duration-500 ${fontSizeClass} ${themeBgClass} relative overflow-x-hidden`}>
      {/* Soft multi-layer organic gradient mesh blurred behind content */}
      {!settings.highContrast && (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden transition-all duration-500">
          {bgTheme === 'mint' ? (
            <>
              <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-emerald-300/40 rounded-full blur-[110px] animate-pulse" />
              <div className="absolute top-[25%] -right-24 w-[500px] h-[500px] bg-teal-300/35 rounded-full blur-[110px]" />
              <div className="absolute -bottom-32 left-[15%] w-[550px] h-[550px] bg-cyan-200/45 rounded-full blur-[120px]" />
              <div className="absolute top-[60%] right-[30%] w-[400px] h-[400px] bg-emerald-200/30 rounded-full blur-[100px]" />
            </>
          ) : bgTheme === 'peach' ? (
            <>
              <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-amber-300/40 rounded-full blur-[110px] animate-pulse" />
              <div className="absolute top-[25%] -right-24 w-[500px] h-[500px] bg-rose-300/35 rounded-full blur-[110px]" />
              <div className="absolute -bottom-32 left-[15%] w-[550px] h-[550px] bg-orange-200/45 rounded-full blur-[120px]" />
              <div className="absolute top-[60%] right-[30%] w-[400px] h-[400px] bg-amber-200/30 rounded-full blur-[100px]" />
            </>
          ) : bgTheme === 'sky' ? (
            <>
              <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-sky-300/40 rounded-full blur-[110px] animate-pulse" />
              <div className="absolute top-[25%] -right-24 w-[500px] h-[500px] bg-blue-300/35 rounded-full blur-[110px]" />
              <div className="absolute -bottom-32 left-[15%] w-[550px] h-[550px] bg-indigo-200/45 rounded-full blur-[120px]" />
              <div className="absolute top-[60%] right-[30%] w-[400px] h-[400px] bg-cyan-200/30 rounded-full blur-[100px]" />
            </>
          ) : bgTheme === 'rose' ? (
            <>
              <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-rose-300/40 rounded-full blur-[110px] animate-pulse" />
              <div className="absolute top-[25%] -right-24 w-[500px] h-[500px] bg-pink-300/35 rounded-full blur-[110px]" />
              <div className="absolute -bottom-32 left-[15%] w-[550px] h-[550px] bg-purple-200/45 rounded-full blur-[120px]" />
              <div className="absolute top-[60%] right-[30%] w-[400px] h-[400px] bg-fuchsia-200/30 rounded-full blur-[100px]" />
            </>
          ) : bgTheme === 'slate' ? (
            <>
              <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-slate-300/40 rounded-full blur-[110px] animate-pulse" />
              <div className="absolute top-[25%] -right-24 w-[500px] h-[500px] bg-stone-300/35 rounded-full blur-[110px]" />
              <div className="absolute -bottom-32 left-[15%] w-[550px] h-[550px] bg-zinc-200/45 rounded-full blur-[120px]" />
              <div className="absolute top-[60%] right-[30%] w-[400px] h-[400px] bg-gray-200/30 rounded-full blur-[100px]" />
            </>
          ) : (
            <>
              <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-purple-300/40 rounded-full blur-[110px] animate-pulse" />
              <div className="absolute top-[25%] -right-24 w-[500px] h-[500px] bg-rose-300/35 rounded-full blur-[110px]" />
              <div className="absolute -bottom-32 left-[15%] w-[550px] h-[550px] bg-sky-200/45 rounded-full blur-[120px]" />
              <div className="absolute top-[60%] right-[30%] w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-[100px]" />
            </>
          )}
        </div>
      )}

      {/* Header */}
      <Header
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        savedNotesCount={gameState.savedNotes.length}
        onOpenNotes={() => setIsNotesModalOpen(true)}
        onOpenSettings={() => setIsSettingsModalOpen(true)}
        onOpenHowToPlay={() => setIsHowToPlayModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-12">
        {gameState.screen === 'start' && (
          <StartScreen
            settings={settings}
            onUpdateSettings={handleUpdateSettings}
            onStartGame={handleStartGame}
            onOpenHowToPlay={() => setIsHowToPlayModalOpen(true)}
            onOpenSettings={() => setIsSettingsModalOpen(true)}
          />
        )}

        {gameState.screen === 'game' && gameState.currentSubject && (
          <GameScreen
            settings={settings}
            currentRound={gameState.currentRound}
            totalRounds={gameState.totalRounds}
            subject={gameState.currentSubject}
            shuffledChoices={gameState.shuffledAnswers}
            revealedStage={gameState.revealedStage}
            scoreCount={gameState.roundHistory.length}
            onUseHint={handleUseHint}
            onSelectChoice={handleSelectChoice}
          />
        )}

        {gameState.screen === 'reveal' && gameState.currentSubject && (
          <RevealScreen
            settings={settings}
            subject={gameState.currentSubject}
            userSelection={gameState.userChoice || ''}
            isCorrect={
              gameState.roundHistory[gameState.roundHistory.length - 1]?.isCorrect || false
            }
            encouragementText={encouragementMessage}
            onSaveNote={handleSaveNote}
            onNextRound={handleNextRound}
          />
        )}

        {gameState.screen === 'summary' && (
          <SummaryScreen
            gameState={gameState}
            onRestart={handleRestart}
            onOpenNotes={() => setIsNotesModalOpen(true)}
          />
        )}
      </main>

      {/* Modals */}
      <CaregiverNotesModal
        isOpen={isNotesModalOpen}
        onClose={() => setIsNotesModalOpen(false)}
        settings={settings}
        notes={gameState.savedNotes}
      />

      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
      />

      {isHowToPlayModalOpen && (
        <HowToPlayModal
          settings={settings}
          onClose={() => setIsHowToPlayModalOpen(false)}
        />
      )}
    </div>
  );
}
