import { SubjectItem } from '../../types';
import { buildProgressiveStages } from './svgHelper';

export const animalSubjects: SubjectItem[] = [
  {
    id: 'a_elephant',
    categoryId: 'animals',
    name: { en: 'Asian Elephant', si: 'අලියා / ඇතා' },
    distractors: {
      en: ['Hippopotamus', 'Rhinoceros', 'Cow'],
      si: ['ජල අශ්වයා', 'කඩ Normal', 'හරකා']
    },
    reminiscence: {
      en: 'Have you ever seen a majestic elephant during a procession or sanctuary visit?',
      si: 'පෙරහැරවල සරසා ඇති ගම්භීර ඇතුන් හෝ වනයේ අලියන් දැකීමේ අත්දැකීම් තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 50 120 C 30 100, 30 60, 80 50 C 130 40, 160 70, 160 110', // Body back arch
      'M 160 110 C 180 120, 190 150, 180 170 C 170 170, 160 150, 150 120', // Trunk curl
      'M 60 75 C 20 75, 20 125, 70 120', // Large fan ear
      'M 70 120 L 70 170 L 90 170 L 90 130', // Front leg
      'M 130 110 L 130 170 L 150 170 L 150 110', // Hind leg
      'M 140 100 C 150 110, 165 110, 160 120', // Tusk curve
      'M 140 80 A 3 3 0 1 1 140 81' // Eye
    ])
  },
  {
    id: 'a_cat',
    categoryId: 'animals',
    name: { en: 'Friendly Cat', si: 'පූසා' },
    distractors: {
      en: ['Dog', 'Rabbit', 'Squirrel'],
      si: ['බල්ලා', 'හාාවා', 'ලේනා']
    },
    reminiscence: {
      en: 'Did you have a favorite pet cat that purred softly beside you on the sofa?',
      si: 'ඔබේ ගෙදර හිටපු ආදරණීය පූස් පැටියා ගැන මතකයන් තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 100 80 m -35,0 a 35,35 0 1,0 70,0 a 35,35 0 1,0 -70,0', // Head circle
      'M 70 55 L 80 25 L 95 50', // Left pointed ear
      'M 130 55 L 120 25 L 105 50', // Right pointed ear
      'M 75 110 C 60 130, 60 170, 100 170 C 140 170, 140 130, 125 110 Z', // Seated body
      'M 135 150 C 170 150, 180 120, 175 100', // Curved tail
      'M 85 75 A 4 4 0 1 1 85 76 M 115 75 A 4 4 0 1 1 115 76 M 100 88 L 95 83 L 105 83 Z', // Eyes & Nose
      'M 90 90 C 70 90, 60 85, 50 85 M 110 90 C 130 90, 140 85, 150 85' // Whiskers
    ])
  },
  {
    id: 'a_dog',
    categoryId: 'animals',
    name: { en: 'Loyal Dog', si: 'බල්ලා' },
    distractors: {
      en: ['Cat', 'Fox', 'Goat'],
      si: ['පූසා', 'හිවලුන්', 'එළුවා']
    },
    reminiscence: {
      en: 'Did a loyal dog always wag its tail eagerly when you came home?',
      si: 'ගෙදර එනකොට වලිගය වනමින් සතුටින් ඔබව පිළිගත් සුරතල් බල්ලා මතකද?'
    },
    stages: buildProgressiveStages([
      'M 60 80 C 60 50, 110 50, 120 70 L 150 80 C 160 90, 160 110, 130 110 L 110 110', // Head & Snout
      'M 65 65 C 50 65, 45 95, 60 110', // Floppy ear
      'M 90 110 L 90 170 C 90 175, 110 175, 110 170 L 110 130 L 130 130 L 130 170 L 150 170 L 150 110', // Neck & Front legs
      'M 70 120 C 50 130, 50 160, 70 170', // Hind back curve
      'M 50 130 C 30 120, 20 100, 30 90', // Happy tail up
      'M 105 75 A 4 4 0 1 1 105 76 M 145 85 A 6 6 0 1 1 145 86' // Eye & Nose button
    ])
  },
  {
    id: 'a_bird',
    categoryId: 'animals',
    name: { en: 'Songbird on Branch', si: 'අත්තක ඉන්නා කුරුල්ලා' },
    distractors: {
      en: ['Bat', 'Butterfly', 'Squirrel'],
      si: ['වවුලා', 'සමනලයා', 'ලේනා']
    },
    reminiscence: {
      en: 'Did you like listening to birds singing in the garden during morning tea?',
      si: 'උදෑසන ගවුවේ ගස්වල කුරුල්ලන් ගී ගයන හඬට සවන් දුන්නා මතකද?'
    },
    stages: buildProgressiveStages([
      'M 80 70 m -25,0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0', // Round head
      'M 95 90 C 120 90, 150 100, 140 140 C 110 160, 70 140, 70 110 Z', // Body oval
      'M 20 140 L 180 140 L 180 148 L 20 148 Z', // Tree branch perch
      'M 105 65 L 125 70 L 105 75 Z', // Pointed beak
      'M 130 130 L 175 160 L 160 165 L 125 140 Z', // Tail feathers
      'M 90 110 C 110 105, 120 125, 100 130', // Wing outline
      'M 75 62 A 3 3 0 1 1 75 63' // Eye
    ])
  },
  {
    id: 'a_butterfly',
    categoryId: 'animals',
    name: { en: 'Garden Butterfly', si: 'සමනලයා' },
    distractors: {
      en: ['Dragonfly', 'Bee', 'Bird'],
      si: ['කූඩැල්ලා', 'මීමැස්සා', 'කුරුල්ලා']
    },
    reminiscence: {
      en: 'Do you remember watching colorful butterflies fluttering over blooming garden flowers?',
      si: 'වත්තේ මල් උඩ පියාඹන පාට පාට සමනලුන් දෙස ආසාවෙන් බලා සිටියා මතකද?'
    },
    stages: buildProgressiveStages([
      'M 100 50 L 100 150', // Body thorax stick
      'M 100 50 A 6 6 0 1 1 100 62 A 6 6 0 1 1 100 50', // Head
      'M 100 70 C 140 30, 180 50, 170 95 C 160 110, 120 110, 100 85', // Upper right wing
      'M 100 70 C 60 30, 20 50, 30 95 C 40 110, 80 110, 100 85', // Upper left wing
      'M 100 90 C 130 100, 160 130, 130 150 C 110 150, 105 130, 100 110', // Lower right wing
      'M 100 90 C 70 100, 40 130, 70 150 C 90 150, 95 130, 100 110', // Lower left wing
      'M 98 50 C 90 35, 80 30, 75 25 M 102 50 C 110 35, 120 30, 125 25' // Antennae
    ])
  },
  {
    id: 'a_fish',
    categoryId: 'animals',
    name: { en: 'Swimming Fish', si: 'මාළුවා' },
    distractors: {
      en: ['Frog', 'Turtle', 'Duck'],
      si: ['ගෙම්බා', 'ඉබ්බා', 'තාරාවා']
    },
    reminiscence: {
      en: 'Did you have a goldfish bowl or like watching fish swim peacefully in a garden pond?',
      si: 'වත්තේ පෝච්චියක හෝ පොකුණක පිහිනන මසුන් දෙස බලා සිටියා මතකද?'
    },
    stages: buildProgressiveStages([
      'M 40 100 C 70 50, 140 50, 160 100 C 140 150, 70 150, 40 100 Z', // Streamlined body
      'M 160 100 L 190 70 L 180 100 L 190 130 Z', // Tail fin
      'M 100 55 C 110 35, 130 35, 130 65', // Top dorsal fin
      'M 100 110 C 110 120, 120 120, 110 100', // Pectoral side fin
      'M 75 75 A 4 4 0 1 1 75 76', // Eye
      'M 80 60 C 70 80, 70 120, 80 140', // Gill arc
      'M 100 80 C 120 80, 130 100, 120 120' // Scale curve
    ])
  },
  {
    id: 'a_turtle',
    categoryId: 'animals',
    name: { en: 'Sea Turtle', si: 'කැස්බෑවා' },
    distractors: {
      en: ['Crab', 'Frog', 'Snail'],
      si: ['කකුළුවා', 'ගෙම්බා', 'ගොළුබෙල්ලා']
    },
    reminiscence: {
      en: 'Have you ever visited a sandy ocean beach where sea turtles swim?',
      si: 'මුහුදු වෙරළේ හෝ මුහුදේ පිහිනන කැස්බෑවන් දැක තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 60 100 C 60 50, 140 50, 140 100 C 140 130, 60 130, 60 100 Z', // Shell dome
      'M 140 90 C 165 85, 175 100, 165 110 C 150 115, 140 105, 140 90', // Head protruding
      'M 120 60 C 140 30, 170 30, 150 70', // Front right flipper
      'M 120 140 C 140 170, 170 170, 150 130', // Front left flipper
      'M 70 65 C 60 45, 50 45, 65 75 M 70 135 C 60 155, 50 155, 65 125', // Rear flippers
      'M 80 80 L 120 80 L 130 100 L 110 120 L 70 110 Z' // Shell pattern hexagon
    ])
  },
  {
    id: 'a_rabbit',
    categoryId: 'animals',
    name: { en: 'Fluffy Rabbit', si: 'හා පැටියා' },
    distractors: {
      en: ['Squirrel', 'Cat', 'Mouse'],
      si: ['ලේනා', 'පූසා', 'මීයා']
    },
    reminiscence: {
      en: 'Did you ever feed fresh carrot tops or green grass to a cute pet rabbit?',
      si: 'හා පැටවුන්ට අලුත් කැරට් අල හෝ තණකොළ කවපු අත්දැකීම් තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 110 80 m -25,0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0', // Round head
      'M 100 60 C 95 20, 80 15, 90 60', // Left long ear
      'M 115 60 C 120 20, 135 15, 125 60', // Right long ear
      'M 100 100 C 70 120, 70 160, 110 170 C 140 170, 150 140, 125 100 Z', // Body crouch
      'M 60 150 C 45 150, 45 135, 60 135 Z', // Fluffy puff tail
      'M 100 75 A 3 3 0 1 1 100 76 M 110 85 L 105 88 L 115 88 Z' // Eye & Nose
    ])
  },
  {
    id: 'a_duck',
    categoryId: 'animals',
    name: { en: 'Duck on Water', si: 'තාරාවා' },
    distractors: {
      en: ['Rooster', 'Swan', 'Penguin'],
      si: ['කුකුළා', 'හංසයා', 'පෙන්ගුයින්']
    },
    reminiscence: {
      en: 'Did you ever throw breadcrumbs to ducks paddling on a serene lake or pond?',
      si: 'විලක පිහිනන තාරාවුන්ට පාන් කෑලි කවපු සොඳුරු මතකයන් තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 60 60 m -20,0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0', // Head
      'M 40 60 L 15 65 L 40 70 Z', // Flat bill beak
      'M 65 75 L 75 100 C 60 110, 40 110, 30 130 C 30 160, 120 160, 140 130 C 150 110, 130 100, 100 100 Z', // Body floating
      'M 20 155 C 60 150, 100 160, 150 155', // Water ripple line
      'M 55 55 A 3 3 0 1 1 55 56', // Eye
      'M 80 115 C 100 110, 110 130, 95 135' // Wing feather
    ])
  },
  {
    id: 'a_peacock',
    categoryId: 'animals',
    name: { en: 'Proud Peacock', si: 'මොනරා' },
    distractors: {
      en: ['Parrot', 'Rooster', 'Flamingo'],
      si: ['ගිරවා', 'කුකුළා', 'ෆ්ලෙමින්ගෝ']
    },
    reminiscence: {
      en: 'Have you seen a peacock fan its brilliant tail feathers in full display?',
      si: 'මොනරෙකු තම ලස්සන පිල් විදහමින් නටන අයුරු දැක තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 100 90 C 85 90, 85 130, 100 150 C 115 130, 115 90, 100 90 Z', // Body neck
      'M 100 70 m -12,0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0', // Head
      'M 100 45 C 30 20, 20 130, 70 160', // Left fan arc
      'M 100 45 C 170 20, 180 130, 130 160', // Right fan arc
      'M 100 45 L 100 160 M 70 60 L 110 150 M 130 60 L 90 150', // Feather fan rays
      'M 50 50 A 6 6 0 1 1 50 51 M 150 50 A 6 6 0 1 1 150 51 M 100 30 A 6 6 0 1 1 100 31', // Feather eyes
      'M 100 58 L 95 50 M 100 58 L 100 48 M 100 58 L 105 50' // Head crest
    ])
  }
];
