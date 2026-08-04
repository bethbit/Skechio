import { Language } from '../types';

export interface TranslationDictionary {
  appTitle: string;
  appSubtitle: string;
  tagline: string;
  
  // Difficulty
  difficultyLabel: string;
  easyTitle: string;
  easyDesc: string;
  mediumTitle: string;
  mediumDesc: string;
  hardTitle: string;
  hardDesc: string;

  // Categories
  categoriesLabel: string;
  allCategories: string;
  catHousehold: string;
  catAnimals: string;
  catFood: string;
  catNature: string;
  catTools: string;

  // Game UI
  startSession: string;
  roundProgress: string;
  guessPrompt: string;
  gentleHint: string;
  hintUsedText: string;
  scoreTracker: string;
  momentsShared: string;

  // Feedback & Encouragement
  correctEncouragement: string[];
  incorrectEncouragement: string[];
  confirmedNamePrefix: string;
  reminiscenceHeader: string;
  reminiscenceSub: string;
  caregiverNotePlaceholder: string;
  saveNoteBtn: string;
  noteSaved: string;
  nextSketch: string;
  finishSession: string;

  // Session Summary
  summaryTitle: string;
  summarySub: string;
  totalCompleted: string;
  encouragingMessage: string;
  viewSavedMemories: string;
  playAgain: string;
  printNotes: string;

  // Header & Settings & How to Play
  howToPlay: string;
  howToPlayTitle: string;
  howToPlaySubtitle: string;
  howToPlayStep1Title: string;
  howToPlayStep1Desc: string;
  howToPlayStep2Title: string;
  howToPlayStep2Desc: string;
  howToPlayStep3Title: string;
  howToPlayStep3Desc: string;
  howToPlayStep4Title: string;
  howToPlayStep4Desc: string;
  languageToggle: string;
  settings: string;
  bgColorLabel: string;
  bgThemeLavender: string;
  bgThemeMint: string;
  bgThemePeach: string;
  bgThemeSky: string;
  bgThemeRose: string;
  bgThemeSlate: string;
  fontSize: string;
  fontNormal: string;
  fontLarge: string;
  fontXLarge: string;
  highContrast: string;
  soundEffects: string;
  readAloud: string;
  caregiverNotesModalTitle: string;
  noSavedNotes: string;
  close: string;
  copyNotes: string;
  copied: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    appTitle: "Sketchio",
    appSubtitle: "Cognitive Stimulation & Gentle Memory Game",
    tagline: "A calm, encouraging space for older adults and caregivers to explore drawings, evoke warm memories, and spark peaceful conversation.",

    difficultyLabel: "Select Reveal Stage Depth",
    easyTitle: "Easy (4 Reveal Stages)",
    easyDesc: "Shows 80% of the sketch — clear outline with defining details.",
    mediumTitle: "Medium (3 Reveal Stages)",
    mediumDesc: "Shows 60% of the sketch — balanced challenge.",
    hardTitle: "Hard (2 Reveal Stages)",
    hardDesc: "Shows 40% of the sketch — early outlines for a fun challenge.",

    categoriesLabel: "Choose Category Focus",
    allCategories: "All Categories",
    catHousehold: "Everyday Objects",
    catAnimals: "Familiar Animals",
    catFood: "Food & Heritage Fruit",
    catNature: "Nature & Outdoors",
    catTools: "Tools & Transport",

    startSession: "Begin Calm Session",
    roundProgress: "Drawing",
    guessPrompt: "Which object does this sketch represent?",
    gentleHint: "Gentle Nudge (+1 Detail)",
    hintUsedText: "Added a few more lines to help!",
    scoreTracker: "Inspiring Moments",
    momentsShared: "Sketches Explored",

    correctEncouragement: [
      "Wonderful observation!",
      "Spot on! You recognized it quickly.",
      "Splendid! A lovely eye for detail.",
      "How delightful! You got it right.",
      "Magnificent job! That is indeed correct."
    ],
    incorrectEncouragement: [
      "A very thoughtful guess! Here is the complete finished sketch.",
      "Lovely attempt! Let's watch the drawing come to life.",
      "Warm effort! See how the full picture reveals itself now.",
      "A wonderful idea! Let's enjoy the completed line art together.",
      "Beautiful choice! Here is the full drawing in all its detail."
    ],
    confirmedNamePrefix: "Confirmed Drawing",
    reminiscenceHeader: "A Quiet Moment of Memory",
    reminiscenceSub: "Invite reflection or share a story with your caregiver:",
    caregiverNotePlaceholder: "Share a story, reflection, or note from today...",
    saveNoteBtn: "Save Memory Note",
    noteSaved: "Memory Saved!",
    nextSketch: "Explore Next Sketch",
    finishSession: "View Session Summary",

    summaryTitle: "Session Well Completed",
    summarySub: "Thank you for spending time engaging with these gentle drawings today.",
    totalCompleted: "Total Sketches Explored",
    encouragingMessage: "Every moment spent observing, reflecting, and recalling warm stories supports cognitive vitality and peace of mind.",
    viewSavedMemories: "View Saved Reminiscence Notes",
    playAgain: "Start Another Session",
    printNotes: "Print / Export Memories",

    howToPlay: "How to Play",
    howToPlayTitle: "How to Play Sketchio",
    howToPlaySubtitle: "A calm, pressure-free game designed for joy, cognitive wellness, and warm connection.",
    howToPlayStep1Title: "1. Observe the Partial Sketch",
    howToPlayStep1Desc: "Each round begins with a gentle line drawing. Look closely at the shapes as they emerge.",
    howToPlayStep2Title: "2. Make a Relaxed Guess",
    howToPlayStep2Desc: "Tap the name option you feel best matches the drawing. There are no penalties or timers!",
    howToPlayStep3Title: "3. Enjoy the Full Reveal",
    howToPlayStep3Desc: "Watch the full completed sketch draw itself with acoustic audio feedback.",
    howToPlayStep4Title: "4. Share a Memory Story",
    howToPlayStep4Desc: "Use the warm reflection question to spark nostalgia or save personal caregiver notes.",

    languageToggle: "English / සිංහල",
    settings: "Display & Accessibility Settings",
    bgColorLabel: "Background Color Palette",
    bgThemeLavender: "Lavender Calm",
    bgThemeMint: "Fresh Mint",
    bgThemePeach: "Warm Peach",
    bgThemeSky: "Sky Blue",
    bgThemeRose: "Rose Blossom",
    bgThemeSlate: "Cozy Slate",
    fontSize: "Text Size",
    fontNormal: "Standard",
    fontLarge: "Large",
    fontXLarge: "Extra Large",
    highContrast: "High Contrast Theme",
    soundEffects: "Gentle Audio Tones",
    readAloud: "Voice Read Aloud (TTS)",
    caregiverNotesModalTitle: "Saved Reminiscence Memories",
    noSavedNotes: "No memories recorded during this session yet. You can write down personal stories on the reveal screen!",
    close: "Close Window",
    copyNotes: "Copy All Memories to Clipboard",
    copied: "Copied!"
  },

  si: {
    appTitle: "Sketchio",
    appSubtitle: "මනස පුබුදුවන සන්සුන් මතක ක්‍රීඩාව",
    tagline: "වැඩිහිටියන්ට සහ සාත්තු සපයන්නන්ට චිත්‍ර නැරඹීමට, සුන්දර මතකයන් ආවර්ජනය කිරීමට සහ සන්සුන්ව සංවාදයේ යෙදීමට සුදුසු අවකාශයකි.",

    difficultyLabel: "චිත්‍ර විස්තර මට්ටම තෝරන්න",
    easyTitle: "පහසු මට්ටම (පියවර 4)",
    easyDesc: "චිත්‍රයෙන් 80% ක් පෙන්වයි — ඉතා පැහැදිලි ආකෘතියක් සහිතයි.",
    mediumTitle: "මධ්‍යම මට්ටම (පියවර 3)",
    mediumDesc: "චිත්‍රයෙන් 60% ක් පෙන්වයි — සමබර අභියෝගයකි.",
    hardTitle: "අභියෝගාත්මක මට්ටම (පියවර 2)",
    hardDesc: "චිත්‍රයෙන් 40% ක් පෙන්වයි — මූලික රේඛා පමණි.",

    categoriesLabel: "චිත්‍ර වර්ගය තෝරන්න",
    allCategories: "සියලු වර්ග",
    catHousehold: "එදිනෙදා ගෘහ භාණ්ඩ",
    catAnimals: "ප්‍රකට සතුන්",
    catFood: "ආහාර සහ පලතුරු",
    catNature: "ස්වාභාවික පරිසරය",
    catTools: "මෙවලම් සහ වාහන",

    startSession: "සන්සුන් ක්‍රීඩාව ආරම්භ කරන්න",
    roundProgress: "චිත්‍ර අංකය",
    guessPrompt: "මෙම සටහනෙන් දැක්වෙන්නේ කුමක්ද?",
    gentleHint: "තවත් රේඛා පෙන්වන්න (+1)",
    hintUsedText: "තවත් රේඛා කිහිපයක් එක් කළා!",
    scoreTracker: "සන්සුන් මොහොතවල්",
    momentsShared: "නැරඹූ චිත්‍ර ගණන",

    correctEncouragement: [
      "ඉතාමත් විශිෂ්ට නිරීක්ෂණයක්!",
      "නිවැරදියි! ඔබ ඉතා ඉක්මනින් හඳුනා ගත්තා.",
      "ඉතා අගනා උත්සාහයක්! නිවැරදි පිළිතුරයි.",
      "ඉතා සන්තෝෂයි! ඔබ නිවැරදිව හඳුනා ගත්තා.",
      "විශිෂ්ටයි! එය සැබවින්ම නිවැරදියි."
    ],
    incorrectEncouragement: [
      "ඉතා අගනා සිතුවිල්ලක්! මෙන්න සම්පූර්ණ චිත්‍රය.",
      "සුන්දර උත්සාහයක්! චිත්‍රය සම්පූර්ණ වන අයුරු බලමු.",
      "අගනා උත්සාහයක්! සම්පූර්ණ චිත්‍රය දැන් දිස්වේ.",
      "හොඳ උත්සාහයක්! අපි එකතු වී සම්පූර්ණ රේඛා චිත්‍රය නරඹමු.",
      "අලංකාර තේරීමක්! මෙන්න සියලු විස්තර සහිත සම්පූර්ණ චිත්‍රය."
    ],
    confirmedNamePrefix: "තහවුරු කළ චිත්‍රය",
    reminiscenceHeader: "සුන්දර මතක ආවර්ජනය",
    reminiscenceSub: "ඔබගේ අතීත මතකයක් හෝ කතාවක් පවුලේ අය සමඟ බෙදා ගන්න:",
    caregiverNotePlaceholder: "අද දිනයේ මතකයන් හෝ අදහස් මෙහි සටහන් කරන්න...",
    saveNoteBtn: "මතකය සුරකින්න",
    noteSaved: "මතකය සුරකින ලදී!",
    nextSketch: "ඊළඟ චිත්‍රය නරඹන්න",
    finishSession: "සාරාංශය බලන්න",

    summaryTitle: "වැඩසටහන සාර්ථකව නිම විය",
    summarySub: "අද දිනයේ මෙම සන්සුන් චිත්‍ර සමඟ කාලය ගත කිරීම ගැන ස්තූතියි.",
    totalCompleted: "නැරඹූ සමස්ත චිත්‍ර ගණන",
    encouragingMessage: "සන්සුන්ව නැරඹීම, මතකයන් ආවර්ජනය කිරීම සහ කතාබස් කිරීම මනසේ නිරවුල් භාවයට ඉතා උපකාරී වේ.",
    viewSavedMemories: "සුරකින ලද මතක සටහන් බලන්න",
    playAgain: "නැවත ආරම්භ කරන්න",
    printNotes: "මතක සටහන් මුද්‍රණය / සුරකින්න",

    howToPlay: "සෙල්ලම් කරන්නේ කෙසේද",
    howToPlayTitle: "ක්‍රීඩා කරන ආකාරය",
    howToPlaySubtitle: "මනස සන්සුන් කරන, ආතතියෙන් තොර සුන්දර මතක අත්දැකීමකි.",
    howToPlayStep1Title: "1. සටහන නරඹන්න",
    howToPlayStep1Desc: "එක් එක් පියවරේදී චිත්‍රයේ කොටසක් දිස්වේ. එහි හැඩතල දෙස බලන්න.",
    howToPlayStep2Title: "2. තේරීමක් කරන්න",
    howToPlayStep2Desc: "චිත්‍රයට වඩාත්ම ගැලපෙන නම තෝරන්න. කිසිදු කාල සීමාවක් හෝ දඬුවම් නොමැත!",
    howToPlayStep3Title: "3. සම්පූර්ණ චිත්‍රය විඳගන්න",
    howToPlayStep3Desc: "සම්පූර්ණ චිත්‍රය ඇඳෙන ආකාරය සන්සුන් නාද සමඟ නරඹන්න.",
    howToPlayStep4Title: "4. මතකයන් බෙදාගන්න",
    howToPlayStep4Desc: "අතීත මතකයන් ආවර්ජනය කරමින් අදහස් සටහන් කර සුරකින්න.",

    languageToggle: "English / සිංහල",
    settings: "පෙනුම සහ පහසුකම් සැකසුම්",
    bgColorLabel: "පසුබිම් වර්ණ තේමාව",
    bgThemeLavender: "ලැවෙන්ඩර් සන්සුන්",
    bgThemeMint: "මින්ට් කොළ",
    bgThemePeach: "පීච් පැහැය",
    bgThemeSky: "ආකාස නිල්",
    bgThemeRose: "රෝස වර්ණය",
    bgThemeSlate: "සන්සුන් අළු",
    fontSize: "අකුරු ප්‍රමාණය",
    fontNormal: "සාමාන්‍ය",
    fontLarge: "ලොකු",
    fontXLarge: "ඉතා ලොකු",
    highContrast: "තද වර්ණ පෙනුම (High Contrast)",
    soundEffects: "සන්සුන් ශබ්ද නගන්න",
    readAloud: "හඬින් කියවීම (Voice Read)",
    caregiverNotesModalTitle: "සුරකින ලද මතක සටහන්",
    noSavedNotes: "තවම මතක සටහන් කිසිවක් එක් කර නැත.",
    close: "වසා දමන්න",
    copyNotes: "සියලු සටහන් පිටපත් කරන්න",
    copied: "පිටපත් විය!"
  }
};
