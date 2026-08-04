import { SubjectItem } from '../../types';
import { buildProgressiveStages } from './svgHelper';

export const natureSubjects: SubjectItem[] = [
  {
    id: 'n_lotus',
    categoryId: 'nature',
    name: { en: 'Blooming Lotus Flower', si: 'පිපුණු නෙළුම් මල' },
    distractors: {
      en: ['Sunflower', 'Rose', 'Water Lily'],
      si: ['සූරියකාන්ත මල', 'රෝස මල', 'මානෙල් මල']
    },
    reminiscence: {
      en: 'Have you offered serene pink or white lotus flowers at a quiet shrine or temple?',
      si: 'පන්සලට හෝ පූජනීය ස්ථානයකට සුවඳවත් නෙළුම් මල් පූජා කළ ශාන්ත මතකයන් තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 100 80 C 85 50, 115 50, 100 80 Z', // Center petal
      'M 100 80 C 70 50, 80 80, 100 110 C 120 80, 130 50, 100 80 Z', // Inner pair
      'M 100 90 C 50 60, 60 100, 100 120 C 140 100, 150 60, 100 90 Z', // Outer pair
      'M 30 140 C 60 130, 140 130, 170 140 C 140 155, 60 155, 30 140 Z', // Floating lotus pad leaf
      'M 100 120 L 100 160' // Stem line
    ])
  },
  {
    id: 'n_palm_tree',
    categoryId: 'nature',
    name: { en: 'Coconut Palm Tree', si: 'පොල් ගස' },
    distractors: {
      en: ['Pine Tree', 'Oak Tree', 'Banyan Tree'],
      si: ['පයින් ගස', 'ඕක් ගස', 'නගරයේ නුග ගස']
    },
    reminiscence: {
      en: 'Did tall swaying coconut palms frame the horizon near your home or the beach?',
      si: 'සුළඟට පැද්දෙන උස පොල් ගස් පරිසරයේ සුන්දරත්වය වැඩි කළ හැටි මතකද?'
    },
    stages: buildProgressiveStages([
      'M 90 180 C 110 120, 100 80, 110 50 L 120 50 C 110 80, 120 120, 100 180 Z', // Trunk curve
      'M 115 50 C 70 30, 40 40, 20 60 M 115 50 C 160 30, 190 40, 200 60', // Left and right top fronds
      'M 115 50 C 80 60, 50 80, 30 110 M 115 50 C 150 60, 180 80, 200 110', // Lower drooping fronds
      'M 105 55 A 8 8 0 1 1 121 55 M 112 65 A 8 8 0 1 1 128 65', // Coconuts cluster
      'M 20 180 L 180 180' // Ground line
    ])
  },
  {
    id: 'n_sun_mountains',
    categoryId: 'nature',
    name: { en: 'Sunrise over Mountains', si: 'කඳු අතරින් පෑයූ හිරු' },
    distractors: {
      en: ['Volcano', 'Desert Sand Dune', 'Ocean Wave'],
      si: ['ගිනි කන්ද', 'වැලි කන්ද', 'මුහුදු රැල්ල']
    },
    reminiscence: {
      en: 'Do you remember watching the bright morning sun rise gently over lush green hills?',
      si: 'උදෑසන කඳු අතරින් රන්වන් හිරු පායා එන අලංකාර දර්ශනය මතකද?'
    },
    stages: buildProgressiveStages([
      'M 10 160 L 70 80 L 120 160 Z', // Left mountain peak
      'M 80 160 L 140 60 L 190 160 Z', // Right taller mountain peak
      'M 100 90 m -30,0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0', // Sun circle behind peaks
      'M 100 50 L 100 35 M 130 65 L 145 50 M 70 65 L 55 50 M 100 20 L 100 10', // Sun rays
      'M 10 160 L 190 160' // Ground horizon base line
    ])
  },
  {
    id: 'n_rainbow_cloud',
    categoryId: 'nature',
    name: { en: 'Rainbow and Cloud', si: 'දේදුන්න සහ වලාකුළ' },
    distractors: {
      en: ['Lightning Bolt', 'Tornado', 'Full Moon'],
      si: ['විදුලි කෙටීම', 'සුළි සුළඟ', 'පූර්ණ චන්ද්‍රයා']
    },
    reminiscence: {
      en: 'Do you remember pointing out a bright seven-colored rainbow in the sky after rain?',
      si: 'වැස්සෙන් පසු අහසේ පායන සප්ත වර්ණ දේදුන්න දැක ප්‍රීති වූ හැටි මතකද?'
    },
    stages: buildProgressiveStages([
      'M 20 140 C 20 60, 180 60, 180 140', // Outer rainbow arc 1
      'M 35 140 C 35 75, 165 75, 165 140', // Inner arc 2
      'M 50 140 C 50 90, 150 90, 150 140', // Inner arc 3
      'M 130 140 C 120 120, 150 110, 165 125 C 180 110, 200 130, 185 150 C 160 160, 130 160, 130 140 Z', // Cloud at right base
      'M 10 140 C 0 120, 30 110, 45 125 C 60 110, 80 130, 65 150 C 40 160, 10 160, 10 140 Z' // Cloud at left base
    ])
  },
  {
    id: 'n_flower_rose',
    categoryId: 'nature',
    name: { en: 'Garden Rose', si: 'රෝස මල' },
    distractors: {
      en: ['Tulip', 'Daisy', 'Carnation'],
      si: ['ටියුලිප් මල', 'ඩේසි මල', 'කනේෂන් මල']
    },
    reminiscence: {
      en: 'Did you have a rose bush in your home garden that produced sweet-smelling blooms?',
      si: 'වත්තේ රෝස පඳුරේ සුවඳවත් රෝස මල් පිපී තිබූ අයුරු මතකද?'
    },
    stages: buildProgressiveStages([
      'M 100 80 m -20,0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0', // Center spiral tight bud
      'M 100 80 C 70 50, 70 100, 100 110 C 130 100, 130 50, 100 80 Z', // Inner Petal cup
      'M 100 80 C 50 40, 40 110, 100 130 C 160 110, 150 40, 100 80 Z', // Outer Petal layer
      'M 100 130 L 100 180', // Stem
      'M 100 150 C 120 140, 130 150, 120 160 Z M 100 160 C 80 150, 70 160, 80 170 Z' // Leaves
    ])
  },
  {
    id: 'n_tree_oak',
    categoryId: 'nature',
    name: { en: 'Shady Garden Tree', si: 'සෙවණ දෙන ලොකු ගස' },
    distractors: {
      en: ['House', 'Mountain', 'Cloud'],
      si: ['ගෙදර', 'කන්ද', 'වලාකුළ']
    },
    reminiscence: {
      en: 'Did you like sitting under the cool shade of a large green tree on a warm afternoon?',
      si: 'දවල්ට ලොකු ගසක සෙවණේ වාඩිවී හමා එන සිසිල් සුළඟ වින්ද හැටි මතකද?'
    },
    stages: buildProgressiveStages([
      'M 90 180 L 90 120 L 70 90 L 90 110 L 100 180', // Left trunk
      'M 110 180 L 110 120 L 130 90 L 110 110 L 100 180', // Right trunk
      'M 100 80 C 50 80, 30 40, 70 30 C 90 10, 130 10, 140 30 C 180 40, 160 80, 100 80 Z', // Foliage canopy dome
      'M 50 60 C 40 80, 60 100, 80 90 C 110 100, 150 90, 150 70', // Lower foliage scalloped cloud
      'M 20 180 L 180 180' // Ground grass line
    ])
  },
  {
    id: 'n_moon_stars',
    categoryId: 'nature',
    name: { en: 'Crescent Moon & Stars', si: 'අඩ සඳ සහ තාරකා' },
    distractors: {
      en: ['Sun', 'Comet', 'Kite'],
      si: ['ඉර', 'වල්ගා තරුව', 'සූත්තර කොළය']
    },
    reminiscence: {
      en: 'Do you remember gazing at a clear starlit night sky before going to sleep?',
      si: 'රාත්‍රියට අහසේ බබළන අඩ සඳ සහ තාරකා දෙස බලා සිටි සන්සුන් මොහොතක් මතකද?'
    },
    stages: buildProgressiveStages([
      'M 80 40 C 40 40, 40 140, 120 140 C 80 120, 80 60, 80 40 Z', // Crescent moon shape
      'M 140 50 L 143 57 L 150 57 L 145 61 L 147 68 L 140 64 L 133 68 L 135 61 L 130 57 L 137 57 Z', // Big star top right
      'M 150 110 L 152 115 L 157 115 L 153 118 L 155 123 L 150 120 L 145 123 L 147 118 L 143 115 L 148 115 Z', // Star lower right
      'M 50 30 L 52 35 L 57 35 L 53 38 L 55 43 L 50 40 L 45 43 L 47 38 L 43 35 L 48 35 Z', // Star top left
      'M 110 150 A 2 2 0 1 1 110 151 M 160 80 A 2 2 0 1 1 160 81' // Tiny starlight dots
    ])
  },
  {
    id: 'n_birdhouse',
    categoryId: 'nature',
    name: { en: 'Wooden Birdhouse', si: 'කුරුලු කූඩු පැල' },
    distractors: {
      en: ['Mailbox', 'Doghouse', 'Lantern'],
      si: ['තැපැල් පෙට්ටිය', 'බලු කූඩුව', 'ලාම්පුව']
    },
    reminiscence: {
      en: 'Did you ever hang a wooden birdhouse or bird feeder in a garden tree?',
      si: 'වත්තේ ගසක කුරුල්ලන්ට කැම සහ වතුර තියන්න කූඩුවක් හදා තැබුවා මතකද?'
    },
    stages: buildProgressiveStages([
      'M 50 80 L 100 40 L 150 80 L 140 160 L 60 160 Z', // Wooden house contour
      'M 40 80 L 100 30 L 160 80', // Roof overhang eaves
      'M 100 105 m -20,0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0', // Entrance hole
      'M 100 135 L 100 150', // Perch peg stick
      'M 100 30 L 100 10' // Hanging rope loop
    ])
  }
];
