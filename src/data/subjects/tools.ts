import { SubjectItem } from '../../types';
import { buildProgressiveStages } from './svgHelper';

export const toolSubjects: SubjectItem[] = [
  {
    id: 't_bicycle',
    categoryId: 'tools',
    name: { en: 'Classic Bicycle', si: 'පාපැදිය (බයිසිකලය)' },
    distractors: {
      en: ['Motorcycle', 'Wheelbarrow', 'Cart'],
      si: ['මෝටර් සයිකලය', 'අත් කරත්තය', 'කරත්තය']
    },
    reminiscence: {
      en: 'Do you remember riding a classic bicycle along quiet country roads or to school?',
      si: 'කුඩා කාලයේ හෝ තරුණ වියේදී පාපැදිය පැද්ද සුන්දර අත්දැකීම් මතකද?'
    },
    stages: buildProgressiveStages([
      'M 50 140 m -30,0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0', // Front wheel
      'M 150 140 m -30,0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0', // Rear wheel
      'M 50 140 L 80 80 L 120 140 L 150 140 L 110 80 L 50 140', // Diamond frame tubes
      'M 80 80 L 70 70 L 90 70', // Handlebar
      'M 110 80 L 105 70 L 125 70 Z', // Leather seat saddle
      'M 120 140 L 115 150 M 120 140 L 125 130' // Pedals crank
    ])
  },
  {
    id: 't_watering_can',
    categoryId: 'tools',
    name: { en: 'Garden Watering Can', si: 'මල් වලස්ස (වෝටරින් කැන්)' },
    distractors: {
      en: ['Bucket', 'Kettle', 'Flower Pot'],
      si: ['බෝතලය', 'කේතලය', 'මල් පෝච්චිය']
    },
    reminiscence: {
      en: 'Did you use a watering can to keep flowers and potted plants fresh every morning?',
      si: 'උදෑසන මල් පැළවලට මල් වලස්සෙන් වතුර දැමූ සුන්දර අත්දැකීම මතකද?'
    },
    stages: buildProgressiveStages([
      'M 50 90 L 120 90 L 110 160 L 60 160 Z', // Can body vessel
      'M 120 100 L 170 60', // Spout neck line
      'M 170 60 m -12,0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0', // Rose shower head
      'M 50 100 C 10 100, 10 150, 60 150', // Side arched handle
      'M 70 90 C 70 50, 100 50, 100 90', // Top arched handle
      'M 175 70 L 185 80 M 180 65 L 190 70 M 170 75 L 180 85' // Water droplets sprinkling
    ])
  },
  {
    id: 't_ladder',
    categoryId: 'tools',
    name: { en: 'Wooden Ladder', si: 'ලී ඉණිමඟ' },
    distractors: {
      en: ['Fence', 'Rake', 'Chair'],
      si: ['වැට', 'පෝරකය', 'පුටුව']
    },
    reminiscence: {
      en: 'Did you use a wooden ladder to pick fruits from tall garden trees or fix roof tiles?',
      si: 'ගස්වලින් ගෙඩි කඩන්න හෝ වහලයේ වැඩවලට ඉණිමඟ භාවිතා කළා මතකද?'
    },
    stages: buildProgressiveStages([
      'M 60 30 L 60 180', // Left rail pole
      'M 120 30 L 120 180', // Right rail pole
      'M 60 50 L 120 50', // Top rung 1
      'M 60 80 L 120 80', // Rung 2
      'M 60 110 L 120 110', // Rung 3
      'M 60 140 L 120 140', // Rung 4
      'M 60 165 L 120 165' // Bottom rung 5
    ])
  },
  {
    id: 't_sailboat',
    categoryId: 'tools',
    name: { en: 'Sailing Boat', si: 'පා යාත්‍රාව (ඔරුව / බෝට්ටුව)' },
    distractors: {
      en: ['Airplane', 'Submarine', 'Bridge'],
      si: ['ගුවන් යානය', 'ජලයෙන් යටවන නෞකාව', 'පාලම']
    },
    reminiscence: {
      en: 'Do you remember watching boats glide peacefully across a lake or the blue ocean?',
      si: 'මුහුදේ හෝ වැවක සන්සුන්ව පාවෙන ඔරුවක් හෝ බෝට්ටුවක් දැක තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 30 130 L 170 130 L 140 170 L 60 170 Z', // Hull boat vessel
      'M 100 130 L 100 30', // Center mast pole
      'M 100 35 L 160 120 L 100 120 Z', // Main triangular sail
      'M 100 45 L 50 120 L 100 120 Z', // Front foresail
      'M 10 175 C 50 165, 90 180, 130 165 C 160 180, 180 170, 190 175' // Ocean wave ripples
    ])
  },
  {
    id: 't_car',
    categoryId: 'tools',
    name: { en: 'Vintage Motor Car', si: 'පැරණි කාර් රථය' },
    distractors: {
      en: ['Bus', 'Train', 'Tractor'],
      si: ['බස් රථය', 'දුම්රිය', 'ට්‍රැක්ටරය']
    },
    reminiscence: {
      en: 'Did your family go on fun weekend drives or countryside trips in a classic car?',
      si: 'පවුලේ අය සමඟ පැරණි කාර් එකකින් නෑගම් හෝ විනෝද ගමන් ගිය අයුරු මතකද?'
    },
    stages: buildProgressiveStages([
      'M 30 120 C 30 100, 50 90, 70 90 L 80 60 L 130 60 L 150 90 L 170 90 C 180 90, 185 100, 185 120 Z', // Car roof and body shell
      'M 60 135 m -20,0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0', // Front wheel
      'M 140 135 m -20,0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0', // Rear wheel
      'M 85 65 L 110 65 L 110 90 L 80 90 Z', // Front door window
      'M 115 65 L 140 65 L 145 90 L 115 90 Z', // Rear door window
      'M 30 110 L 15 110 M 185 110 L 195 110' // Bumpers front and rear
    ])
  },
  {
    id: 't_train',
    categoryId: 'tools',
    name: { en: 'Steam Engine Train', si: 'දුම්රිය (කෝච්චිය)' },
    distractors: {
      en: ['Truck', 'Ship', 'Bicycle'],
      si: ['ලොරිය', 'නෞකාව', 'බයිසිකලය']
    },
    reminiscence: {
      en: 'Do you remember scenic train rides through misty green mountains and tea estates?',
      si: 'කඳුකර මඟ ඔස්සේ සුන්දර පරිසරය බලමින් කෝච්චියේ ගිය මනරම් ගමන මතකද?'
    },
    stages: buildProgressiveStages([
      'M 30 70 L 130 70 L 130 140 L 30 140 Z', // Locomotive main boiler cabin
      'M 130 50 L 170 50 L 170 140 L 130 140 Z', // Driver cab rear
      'M 50 140 m -15,0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0', // Wheel 1
      'M 90 140 m -15,0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0', // Wheel 2
      'M 150 140 m -15,0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0', // Wheel 3
      'M 50 70 L 50 40 L 65 35 L 65 70 Z', // Smokestack chimney
      'M 40 30 C 30 20, 20 25, 10 15 M 50 25 C 40 10, 30 15, 20 5' // Puffs of steam smoke
    ])
  },
  {
    id: 't_kite',
    categoryId: 'tools',
    name: { en: 'Flying Diamond Kite', si: 'සූත්තර කොළය (සරුංගලය)' },
    distractors: {
      en: ['Bird', 'Airplane', 'Shield'],
      si: ['කුරුල්ලා', 'ගුවන් යානය', 'පලිහ']
    },
    reminiscence: {
      en: 'Did you make paper kites with bamboo sticks and fly them high in the windy sky?',
      si: 'සුළං කාලෙට උසට උඩ යවන්න කඩදාසි සහ බම්බු වලින් සරුංගල් හැදූ හැටි මතකද?'
    },
    stages: buildProgressiveStages([
      'M 100 30 L 160 90 L 100 160 L 40 90 Z', // Diamond frame body
      'M 100 30 L 100 160', // Vertical spar spine
      'M 40 90 L 160 90', // Horizontal spar
      'M 100 160 C 120 180, 80 190, 110 200', // Long wavy tail string
      'M 110 175 L 120 175 M 90 185 L 100 185' // Bow ribbons on tail
    ])
  },
  {
    id: 't_wheelbarrow',
    categoryId: 'tools',
    name: { en: 'Garden Wheelbarrow', si: 'අත් කරත්තය (වීල්බැරෝ එක)' },
    distractors: {
      en: ['Lawnmower', 'Cart', 'Chair'],
      si: ['තණකොළ කපන යන්ත්‍රය', 'කරත්තය', 'පුටුව']
    },
    reminiscence: {
      en: 'Did you use a wheelbarrow to carry potting soil, fresh lawn grass, or garden flowers?',
      si: 'වත්තේ පස්, මල් පැළ හෝ කොළ රොඩු ගෙනියන්න අත් කරත්තය භාවිතා කළා මතකද?'
    },
    stages: buildProgressiveStages([
      'M 60 80 L 160 80 L 140 130 L 70 130 Z', // Bucket tray basin
      'M 40 130 m -20,0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0', // Front wheel
      'M 40 130 L 160 130 L 180 120', // Long support handle
      'M 100 130 L 100 165 L 115 165', // Support leg stand
      'M 180 115 L 190 120' // Rubber grip handle tip
    ])
  }
];
