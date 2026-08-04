export type Language = 'en' | 'si';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type CategoryId = 'household' | 'animals' | 'food' | 'nature' | 'tools';

export interface SVGPathStage {
  /** Paths to render at this stage. Stage 1 paths are shown in stage 1. Stage 2 adds paths, etc. */
  paths: {
    d: string;
    strokeWidth?: number;
    strokeDasharray?: string;
    fill?: string; // Always 'none' or transparent for sketch line art
  }[];
}

export interface SubjectItem {
  id: string;
  categoryId: CategoryId;
  name: {
    en: string;
    si: string;
  };
  distractors: {
    en: [string, string, string];
    si: [string, string, string];
  };
  reminiscence: {
    en: string;
    si: string;
  };
  // 5 progressive reveal stages
  stages: [SVGPathStage, SVGPathStage, SVGPathStage, SVGPathStage, SVGPathStage];
  viewBox?: string;
  tags?: string[];
}

export type BgTheme = 'lavender' | 'mint' | 'peach' | 'sky' | 'rose' | 'slate';

export interface GameSettings {
  language: Language;
  difficulty: Difficulty;
  fontSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  soundEnabled: boolean;
  readAloud: boolean;
  selectedCategory: CategoryId | 'all';
  lineThickness: number; // default 3 or 4
  bgTheme?: BgTheme;
}

export interface RoundResult {
  roundNumber: number;
  subject: SubjectItem;
  userSelection: string;
  isCorrect: boolean;
  difficulty: Difficulty;
  hintUsed: boolean;
  reminiscenceNote?: string;
  timestamp: string;
}

export interface ShuffledChoice {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface GameState {
  screen: 'start' | 'game' | 'reveal' | 'summary';
  settings: GameSettings;
  currentRound: number;
  totalRounds: number; // e.g., 5, 10, or infinity
  currentSubject: SubjectItem | null;
  shuffledAnswers: ShuffledChoice[];
  revealedStage: number; // 1 to 5 (derived from difficulty or updated via hint)
  userChoice: string | null;
  score: {
    correct: number;
    total: number;
  };
  roundHistory: RoundResult[];
  savedNotes: Array<{
    subjectName: string;
    question: string;
    note: string;
    date: string;
  }>;
}
