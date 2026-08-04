import { SubjectItem, CategoryId, Language } from '../../types';
import { householdSubjects } from './household';
import { animalSubjects } from './animals';
import { foodSubjects } from './food';
import { natureSubjects } from './nature';
import { toolSubjects } from './tools';
import { translations } from '../translations';

export const allSubjects: SubjectItem[] = [
  ...householdSubjects,
  ...animalSubjects,
  ...foodSubjects,
  ...natureSubjects,
  ...toolSubjects
];

export function getSubjectsByCategory(categoryId: CategoryId | 'all'): SubjectItem[] {
  if (categoryId === 'all') return allSubjects;
  return allSubjects.filter(s => s.categoryId === categoryId);
}

export function getRandomSubject(
  categoryId: CategoryId | 'all' = 'all',
  excludeIds: string[] = []
): SubjectItem {
  const candidates = getSubjectsByCategory(categoryId).filter(s => !excludeIds.includes(s.id));
  if (candidates.length === 0) {
    // If all subjects used, reset pool
    const pool = getSubjectsByCategory(categoryId);
    return pool[Math.floor(Math.random() * pool.length)] || allSubjects[0];
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}

export interface ShuffledChoice {
  id: string;
  text: string;
  isCorrect: boolean;
}

export function generateShuffledChoices(subject: SubjectItem, lang: Language): ShuffledChoice[] {
  const correctText = subject.name[lang];
  const wrongChoices = subject.distractors[lang];

  const choices: ShuffledChoice[] = [
    { id: 'correct', text: correctText, isCorrect: true },
    ...wrongChoices.map((text, idx) => ({
      id: `wrong_${idx}`,
      text,
      isCorrect: false
    }))
  ];

  // Fisher-Yates Shuffle
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }

  return choices;
}

export function getRandomEncouragement(isCorrect: boolean, lang: Language): string {
  const pool = isCorrect
    ? translations[lang].correctEncouragement
    : translations[lang].incorrectEncouragement;
  return pool[Math.floor(Math.random() * pool.length)];
}
