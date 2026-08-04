import { SubjectItem } from '../../types';
import { buildProgressiveStages } from './svgHelper';

export const foodSubjects: SubjectItem[] = [
  {
    id: 'f_mango',
    categoryId: 'food',
    name: { en: 'Ripe Mango', si: 'ඉදුණු අඹ' },
    distractors: {
      en: ['Avocado', 'Papaya', 'Guava'],
      si: ['අලගැටපේර', 'පැපොල්', 'පේර']
    },
    reminiscence: {
      en: 'Did you enjoy plucking sweet ripe mangoes straight from the garden tree?',
      si: 'වත්තේ ගසෙන් කැඩූ ඉදුණු අඹ ගෙඩියක රස වින්ද සොඳුරු මතකයන් තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 80 50 C 130 30, 160 80, 140 130 C 120 170, 60 160, 60 110 C 60 80, 70 60, 80 50 Z', // Mango teardrop kidney contour
      'M 85 45 L 85 30', // Top stem
      'M 85 35 C 110 20, 120 30, 110 40 Z', // Attached leaf
      'M 120 80 C 110 110, 100 130, 85 140', // Inner highlight/blush line
      'M 85 35 L 105 32' // Leaf vein
    ])
  },
  {
    id: 'f_banana',
    categoryId: 'food',
    name: { en: 'Bunch of Bananas', si: 'කෙසෙල් ඇවරිය' },
    distractors: {
      en: ['Pineapple', 'Carrot', 'Sweet Potato'],
      si: ['අන්නාසි', 'කැරට්', 'බතල']
    },
    reminiscence: {
      en: 'Did your family keep a comb of fresh yellow bananas on the dining table?',
      si: 'කෑම මේසයේ කහ පාටට ඉදුණු කෙසෙල් ඇවරියක් තබා තිබුණා මතකද?'
    },
    stages: buildProgressiveStages([
      'M 40 60 C 80 130, 150 120, 170 70 C 140 100, 80 110, 40 60 Z', // Top banana curve
      'M 30 80 C 70 150, 140 140, 160 90 C 130 120, 70 130, 30 80 Z', // Second banana curve
      'M 20 100 C 60 170, 130 160, 150 110 C 120 140, 60 150, 20 100 Z', // Third banana curve
      'M 30 50 L 50 40 L 40 70 Z', // Crown stalk join
      'M 60 90 L 140 90 M 50 110 L 130 110' // Ridge lines
    ])
  },
  {
    id: 'f_hopper',
    categoryId: 'food',
    name: { en: 'Sri Lankan Hopper (Appam)', si: 'ආප්ප (Hopper)' },
    distractors: {
      en: ['Pancake', 'Roti', 'Omelette'],
      si: ['පෑන්කේක්', 'රොටී', 'ඔම්ලට්']
    },
    reminiscence: {
      en: 'Do you remember eating crispy-edged hot hoppers with egg or lunu miris for dinner?',
      si: 'රෑට කැරකිච්ච කරස් ගාන තච්චි ආප්පයක් හෝ බිත්තර ආප්පයක් ලුණු මිරිස් සමඟ කෑ හැටි මතකද?'
    },
    stages: buildProgressiveStages([
      'M 100 100 m -70,0 a 70,50 0 1,0 140,0 a 70,50 0 1,0 -140,0', // Outer bowl rim
      'M 100 110 m -35,0 a 35,25 0 1,0 70,0 a 35,25 0 1,0 -70,0', // Soft fluffy center soft yolk/appam heart
      'M 100 100 C 50 80, 40 110, 100 130 C 160 110, 150 80, 100 100', // Crispy lace edge texture
      'M 100 110 m -12,0 a 12,10 0 1,0 24,0 a 12,10 0 1,0 -24,0', // Egg yolk center circle
      'M 40 90 C 30 100, 30 110, 40 120' // Bowl depth shadow
    ])
  },
  {
    id: 'f_coconut',
    categoryId: 'food',
    name: { en: 'Fresh Coconut with Straw', si: 'තැඹිලි ගෙඩිය (King Coconut)' },
    distractors: {
      en: ['Watermelon', 'Papaya', 'Pineapple'],
      si: ['පැණි කොමඩු', 'පැපොල්', 'අන්නාසි']
    },
    reminiscence: {
      en: 'Do you remember drinking cool, refreshing king coconut water straight from the shell?',
      si: 'තද අව්වේදී රසවත් පැණි තැඹිලි ගෙඩියක වතුර බී පිපාසය නිවාගත් හැටි මතකද?'
    },
    stages: buildProgressiveStages([
      'M 100 110 m -60,0 a 60,60 0 1,0 120,0 a 60,60 0 1,0 -120,0', // Coconut body
      'M 75 55 L 125 55 L 100 40 Z', // Cut top cap notch
      'M 95 40 L 140 10', // Drinking straw line
      'M 90 60 C 90 50, 110 50, 110 60', // Opened hole rim
      'M 60 90 C 70 140, 130 140, 140 90', // Shell outer fiber ridge
      'M 100 40 L 100 20' // Stalk stem
    ])
  },
  {
    id: 'f_tea_pot_cup',
    categoryId: 'food',
    name: { en: 'Ceylon Tea Cup', si: 'ලංකා තේ කෝප්පය' },
    distractors: {
      en: ['Coffee Pot', 'Water Goblet', 'Milk Jug'],
      si: ['කෝපි කේතලය', 'වතුර වීදුරුව', 'කිරි ජෝගුව']
    },
    reminiscence: {
      en: ' Ceylon tea is world famous! Did you enjoy steaming milk tea or plain black tea with jaggery?',
      si: 'හකුරු කෑල්ලක් සමඟ රසවිඳි උණුසුම් කහට තේ කෝප්පයක සුවඳ මතකද?'
    },
    stages: buildProgressiveStages([
      'M 40 80 L 160 80 L 145 150 L 55 150 Z', // Cup shape
      'M 160 90 C 190 90, 190 135, 145 135', // Ear handle
      'M 30 155 L 170 155 C 170 165, 30 165, 30 155 Z', // Saucer base
      'M 60 60 C 60 40, 75 40, 75 25 M 100 60 C 100 40, 115 40, 115 25 M 140 60 C 140 40, 155 40, 155 25', // Steam swirls
      'M 40 80 C 100 90, 100 90, 160 80' // Liquid rim line
    ])
  },
  {
    id: 'f_pineapple',
    categoryId: 'food',
    name: { en: 'Sweet Pineapple', si: 'අන්නාසි ගෙඩිය' },
    distractors: {
      en: ['Jackfruit', 'Durian', 'Coconut'],
      si: ['කොස්', 'දුරියන්', 'පොල්']
    },
    reminiscence: {
      en: 'Did you like eating sliced pineapple sprinkled with a pinch of salt and chili powder?',
      si: 'ලුණු සහ මිරිස් කුඩු තවරා අන්නාසි පෙති කෑ සුවිශේෂී රසය මතකද?'
    },
    stages: buildProgressiveStages([
      'M 60 100 C 60 60, 140 60, 140 100 C 140 160, 60 160, 60 100 Z', // Oval fruit body
      'M 100 60 C 80 20, 120 20, 100 60', // Top center crown leaf
      'M 100 60 C 60 30, 90 20, 95 60', // Left crown leaf
      'M 100 60 C 140 30, 110 20, 105 60', // Right crown leaf
      'M 70 80 L 130 140 M 70 110 L 120 160 M 80 70 L 135 125', // Diagonal lattice set 1
      'M 130 80 L 70 140 M 130 110 L 80 160 M 120 70 L 65 125' // Diagonal lattice set 2
    ])
  },
  {
    id: 'f_bread',
    categoryId: 'food',
    name: { en: 'Loaf of Bread', si: 'පාන් ගෙඩිය' },
    distractors: {
      en: ['Cake', 'Cheese', 'Pie'],
      si: ['කේක්', 'චීස්', 'පයි']
    },
    reminiscence: {
      en: 'Do you remember the aroma of freshly baked crusty bread from the local bakery?',
      si: 'පාන්දර පෝරණුවෙන් ගෙනා උණු උණු පාන් ගෙඩියේ සුවඳ සහ රසය මතකද?'
    },
    stages: buildProgressiveStages([
      'M 40 100 C 40 60, 160 60, 160 100 L 160 150 L 40 150 Z', // Crust loaf body
      'M 40 100 L 160 100', // Sliced heel line
      'M 70 75 C 75 70, 85 70, 90 75', // Diagonal slash 1
      'M 110 75 C 115 70, 125 70, 130 75', // Diagonal slash 2
      'M 20 120 L 40 100 L 40 150 L 20 150 Z' // End slice cut
    ])
  },
  {
    id: 'f_watermelon',
    categoryId: 'food',
    name: { en: 'Watermelon Slice', si: 'පැණි කොමඩු පෙත්ත' },
    distractors: {
      en: ['Papaya', 'Pumpkin', 'Cake Slice'],
      si: ['පැපොල්', 'වට්ටක්කා', 'කේක් පෙත්ත']
    },
    reminiscence: {
      en: 'Nothing beats a juicy slice of red watermelon on a warm afternoon!',
      si: 'තද රස්නේ වෙලාවක පැණි බේරෙන රතු කොමඩු පෙත්තක් කෑ සොඳුරු මොහොතක් මතකද?'
    },
    stages: buildProgressiveStages([
      'M 20 60 C 60 160, 140 160, 180 60 Z', // Wedge rind arc
      'M 30 70 C 70 145, 130 145, 170 70 Z', // Red pulp inner border
      'M 60 90 A 4 6 0 1 1 60 102 A 4 6 0 1 1 60 90', // Seed 1
      'M 100 110 A 4 6 0 1 1 100 122 A 4 6 0 1 1 100 110', // Seed 2
      'M 140 90 A 4 6 0 1 1 140 102 A 4 6 0 1 1 140 90' // Seed 3
    ])
  },
  {
    id: 'f_rice_bowl',
    categoryId: 'food',
    name: { en: 'Steaming Rice Bowl', si: 'බත් පිඟාන' },
    distractors: {
      en: ['Noodle Soup', 'Salad', 'Curry Pot'],
      si: ['නූඩ්ල්ස්', 'සලාද', 'හොදි තාච්චිය']
    },
    reminiscence: {
      en: 'Did your family gather every afternoon around a warm home-cooked rice and curry meal?',
      si: 'දවල්ට මුළු පවුලම එකතු වී රසවත් බත් සහ වෑංජන කෑ සුන්දර මතකයන් තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 30 90 C 30 160, 170 160, 170 90 Z', // Bowl outline
      'M 30 90 L 170 90', // Rim top
      'M 40 85 C 60 60, 140 60, 160 85 Z', // Heap of white rice dome
      'M 70 40 C 70 25, 80 25, 80 15 M 100 40 C 100 25, 110 25, 110 15 M 130 40 C 130 25, 140 25, 140 15', // Steam lines
      'M 70 170 L 130 170 L 120 160 L 80 160 Z' // Base pedestal
    ])
  },
  {
    id: 'f_rambutan',
    categoryId: 'food',
    name: { en: 'Rambutan Fruit', si: 'රඹුටන් ගෙඩිය' },
    distractors: {
      en: ['Strawberry', 'Lychee', 'Passionfruit'],
      si: ['ස්ට්‍රෝබෙරි', 'ලොවි', 'වැල් දොඩම්']
    },
    reminiscence: {
      en: 'Do you remember peeling hairy red rambutans during fruit season in Malwana or the countryside?',
      si: 'රඹුටන් වාරයට රතු පාට මල් රඹුටන් ගෙඩි ලෙලි ගසා රස බැලූ හැටි මතකද?'
    },
    stages: buildProgressiveStages([
      'M 100 100 m -45,0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0', // Central round fruit
      'M 55 100 C 35 90, 30 100, 45 105 M 145 100 C 165 90, 170 100, 155 105', // Hair spines left/right
      'M 100 55 C 90 35, 100 30, 105 45 M 100 145 C 90 165, 100 170, 105 155', // Hair spines top/bottom
      'M 70 70 C 50 50, 60 45, 68 60 M 130 70 C 150 50, 140 45, 132 60', // Soft wavy spines top corners
      'M 70 130 C 50 150, 60 155, 68 140 M 130 130 C 150 150, 140 155, 132 140' // Soft wavy spines bottom corners
    ])
  }
];
