import { SubjectItem } from '../../types';
import { buildProgressiveStages } from './svgHelper';

export const householdSubjects: SubjectItem[] = [
  {
    id: 'h_teapot',
    categoryId: 'household',
    name: { en: 'Teapot', si: 'තේ පෝච්චිය' },
    distractors: {
      en: ['Water Pitcher', 'Oil Lamp', 'Coffee Mug'],
      si: ['වතුර ජෝගුව', 'තෙල් පහන', 'කෝපි කෝප්පය']
    },
    reminiscence: {
      en: 'Did your family have a favorite teapot or teatime routine at home?',
      si: 'ඔබේ නිවසේ තේ පෝච්චියක් භාවිතා කළ හැටි හෝ සවස තේ වෙලාවේ මතකයන් තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 40 100 C 40 160, 160 160, 160 100 C 160 60, 40 60, 40 100 Z', // Body
      'M 80 60 L 80 45 C 80 40, 120 40, 120 45 L 120 60', // Lid neck
      'M 95 40 A 5 5 0 1 1 105 40 A 5 5 0 1 1 95 40', // Lid knob
      'M 160 85 C 190 70, 190 120, 155 125', // Spout
      'M 40 80 C 10 80, 10 130, 40 130', // Handle
      'M 60 100 C 80 120, 120 120, 140 100' // Decorative line
    ])
  },
  {
    id: 'h_umbrella',
    categoryId: 'household',
    name: { en: 'Umbrella', si: 'කුඩය' },
    distractors: {
      en: ['Mushroom', 'Walking Stick', 'Kite'],
      si: ['හතු', 'සැරයටිය', 'සූත්තර කොළය']
    },
    reminiscence: {
      en: 'Do you remember walking under a big umbrella in the monsoon rain or summer sun?',
      si: 'තද වැස්සේ හෝ අව්වේ කළු කුඩයක් ඉහළගෙන ගිය සුන්දර මතකයන් තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 20 110 C 20 40, 180 40, 180 110 Z', // Canopy arc
      'M 100 40 L 100 160 C 100 175, 80 175, 80 160', // Shaft & J-handle
      'M 20 110 C 60 100, 60 110, 100 110 C 140 110, 140 100, 180 110', // Scalloped bottom
      'M 100 40 C 70 70, 60 90, 60 110', // Left rib
      'M 100 40 C 130 70, 140 90, 140 110', // Right rib
      'M 100 35 L 100 40' // Top tip
    ])
  },
  {
    id: 'h_chair',
    categoryId: 'household',
    name: { en: 'Wooden Chair', si: 'ලී පුටුව' },
    distractors: {
      en: ['Table', 'Ladder', 'Bench'],
      si: ['මේසය', 'ඉණිමඟ', 'බංකුව']
    },
    reminiscence: {
      en: 'Was there a special rocking chair or easy chair where someone loved to sit and read?',
      si: 'ඔබේ ගෙදර ආච්චි හෝ සීයා වාඩිවී පත්තර බලපු ප්‍රියතම පුටුව මතකද?'
    },
    stages: buildProgressiveStages([
      'M 50 40 L 50 170', // Left back leg
      'M 150 40 L 150 170', // Right back leg
      'M 40 110 L 160 110 L 150 120 L 50 120 Z', // Seat cushion
      'M 65 120 L 65 170', // Front left leg
      'M 135 120 L 135 170', // Front right leg
      'M 50 60 L 150 60 M 50 80 L 150 80', // Backrest slats
      'M 65 150 L 135 150' // Foot rung
    ])
  },
  {
    id: 'h_table_lamp',
    categoryId: 'household',
    name: { en: 'Table Lamp', si: 'මේස ලාම්පුව' },
    distractors: {
      en: ['Vase', 'Streetlight', 'Candle Holder'],
      si: ['මල් පෝච්චිය', 'විදී පහන', 'පහන් පැල']
    },
    reminiscence: {
      en: 'Did you have a cozy reading lamp on your bedside table or desk?',
      si: 'රෑට පොත් කියවන්න මේසය උඩ තියාගත් ලාම්පුවක් තිබුණාද?'
    },
    stages: buildProgressiveStages([
      'M 60 100 L 140 100 L 120 40 L 80 40 Z', // Lampshade
      'M 100 100 L 100 150', // Stem
      'M 70 160 C 70 150, 130 150, 130 160 Z', // Base
      'M 100 100 A 15 15 0 0 1 100 130', // Decorative body bulb
      'M 100 35 L 100 40', // Top finial
      'M 50 30 L 40 20 M 150 30 L 160 20 M 100 25 L 100 15' // Light rays
    ])
  },
  {
    id: 'h_clock',
    categoryId: 'household',
    name: { en: 'Wall Clock', si: 'බිත්ති ඔරලෝසුව' },
    distractors: {
      en: ['Plate', 'Compass', 'Mirror'],
      si: ['පිඟාන', 'මාලිමාව', 'කණ්නාඩිය']
    },
    reminiscence: {
      en: 'Did your home have a chiming pendulum clock on the wall?',
      si: 'ගෙදර සාලයේ පැද්දෙන පෙන්ඩලයක් සහිත ලොකු බිත්ති ඔරලෝසුවක් තිබුණාද?'
    },
    stages: buildProgressiveStages([
      'M 100 100 m -70, 0 a 70,70 0 1,0 140,0 a 70,70 0 1,0 -140,0', // Outer circle
      'M 100 100 m -60, 0 a 60,60 0 1,0 120,0 a 60,60 0 1,0 -120,0', // Inner circle
      'M 100 100 L 100 55', // Hour hand
      'M 100 100 L 130 100', // Minute hand
      'M 100 100 A 4 4 0 1 1 100 101', // Center pin
      'M 100 45 L 100 50 M 155 100 L 150 100 M 100 155 L 100 150 M 45 100 L 50 100' // Hour tick marks
    ])
  },
  {
    id: 'h_basket',
    categoryId: 'household',
    name: { en: 'Woven Basket', si: 'වට්ටිය / පන් කූඩය' },
    distractors: {
      en: ['Hat', 'Bowl', 'Bird Nest'],
      si: ['තොප්පිය', 'තැටිය', 'කුරුලු කූඩුව']
    },
    reminiscence: {
      en: 'Did you use a woven basket for collecting fresh vegetables, flowers, or shopping?',
      si: 'වෙළඳපොළට යන්න හෝ වත්තෙන් මල් කඩන්න පන් කූඩයක් භාවිතා කළා මතකද?'
    },
    stages: buildProgressiveStages([
      'M 30 90 C 30 160, 170 160, 170 90 Z', // Basket bowl
      'M 30 90 C 30 30, 170 30, 170 90', // Handle arch
      'M 30 90 L 170 90', // Rim top
      'M 60 90 L 70 150 M 100 90 L 100 155 M 140 90 L 130 150', // Vertical weave lines
      'M 40 110 C 100 115, 100 115, 160 110 M 45 130 C 100 135, 100 135, 155 130' // Horizontal weave arcs
    ])
  },
  {
    id: 'h_telephone',
    categoryId: 'household',
    name: { en: 'Rotary Telephone', si: 'භ්‍රමණ දුරකථනය' },
    distractors: {
      en: ['Radio', 'Typewriter', 'Clock'],
      si: ['රේඩියෝව', 'ටයිප් රයිටරය', 'ඔරලෝසුව']
    },
    reminiscence: {
      en: 'Do you remember dialing numbers on a rotary telephone dial with your finger?',
      si: 'ඉස්සර ඇඟිල්ලෙන් කරකවන රොටරි දුරකථනයෙන් අංක ඩයල් කළ හැටි මතකද?'
    },
    stages: buildProgressiveStages([
      'M 50 120 L 150 120 L 140 160 L 60 160 Z', // Base trapezoid
      'M 30 80 C 30 50, 80 50, 90 70 L 110 70 C 120 50, 170 50, 170 80', // Handset cradle top
      'M 100 140 m -20,0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0', // Rotary dial circle
      'M 100 140 m -6,0 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0', // Inner center
      'M 40 100 C 20 100, 20 150, 60 155', // Coiled cord
      'M 90 125 A 3 3 0 1 1 90 126 M 110 125 A 3 3 0 1 1 110 126 M 100 122 A 3 3 0 1 1 100 123' // Dial finger holes
    ])
  },
  {
    id: 'h_teacup',
    categoryId: 'household',
    name: { en: 'Teacup and Saucer', si: 'තේ කෝප්පය සහ පීරිසිය' },
    distractors: {
      en: ['Soup Bowl', 'Flower Pot', 'Frying Pan'],
      si: ['තැටිය', 'මල් පෝච්චිය', 'තාච්චිය']
    },
    reminiscence: {
      en: 'How do you like your tea served — hot with milk, ginger, or lemon?',
      si: 'ඔබ වඩාත් කැමති කිරි තේ වලටද, ඉඟුරු තේ වලටද නැතහොත් කහට තේ වලටද?'
    },
    stages: buildProgressiveStages([
      'M 20 145 C 20 160, 180 160, 180 145 Z', // Saucer
      'M 50 80 L 150 80 L 135 140 L 65 140 Z', // Cup body
      'M 150 90 C 180 90, 180 130, 135 130', // Handle
      'M 70 65 C 70 50, 80 50, 80 40 M 100 65 C 100 50, 110 50, 110 40 M 130 65 C 130 50, 140 50, 140 40', // Steam swirls
      'M 50 80 C 100 85, 100 85, 150 80' // Rim curve
    ])
  },
  {
    id: 'h_book',
    categoryId: 'household',
    name: { en: 'Open Book', si: 'දිගහැරි පොත' },
    distractors: {
      en: ['Laptop', 'Tray', 'Envelope'],
      si: ['ලැප්ටොප්', 'තැටිය', 'ලියුම් කවරය']
    },
    reminiscence: {
      en: 'Did you enjoy reading bedtime stories or favorite novels in the evening?',
      si: 'හවසට ආසාවෙන් කියවපු පොතක් හෝ පුවත්පතක් මතකද?'
    },
    stages: buildProgressiveStages([
      'M 100 80 L 100 160', // Center spine
      'M 100 80 C 60 70, 30 75, 20 85 L 20 155 C 30 145, 60 140, 100 160', // Left page
      'M 100 80 C 140 70, 170 75, 180 85 L 180 155 C 170 145, 140 140, 100 160', // Right page
      'M 35 100 C 60 95, 80 98, 90 102 M 35 115 C 60 110, 80 113, 90 117 M 35 130 C 60 125, 80 128, 90 132', // Left text lines
      'M 110 102 C 120 98, 140 95, 165 100 M 110 117 C 120 113, 140 110, 165 115 M 110 132 C 120 128, 140 125, 165 130' // Right text lines
    ])
  },
  {
    id: 'h_scissors',
    categoryId: 'household',
    name: { en: 'Scissors', si: 'කතුර' },
    distractors: {
      en: ['Pliers', 'Tongs', 'Eyeglasses'],
      si: ['අඬුව', 'අඬු අඩස්සිය', 'කණ්නාඩිය']
    },
    reminiscence: {
      en: 'Did you use scissors for sewing, craft projects, or gardening?',
      si: 'මහන වැඩ වලට, මල් කපන්න හෝ කොළ කපන්න කතුරක් භාවිතා කළා මතකද?'
    },
    stages: buildProgressiveStages([
      'M 100 100 L 40 40', // Top left blade line
      'M 100 100 L 160 40', // Top right blade line
      'M 100 100 L 60 140', // Handle left leg
      'M 100 100 L 140 140', // Handle right leg
      'M 50 155 m -15,0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0', // Left handle loop
      'M 150 155 m -15,0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0', // Right handle loop
      'M 100 100 A 4 4 0 1 1 100 101' // Pivot screw
    ])
  },
  {
    id: 'h_vase',
    categoryId: 'household',
    name: { en: 'Flower Vase', si: 'මල් පෝච්චිය / වාස් එක' },
    distractors: {
      en: ['Water Bottle', 'Lamp', 'Jug'],
      si: ['වතුර බෝතලය', 'ලාම්පුව', 'කේතලය']
    },
    reminiscence: {
      en: 'Did you like keeping freshly cut flowers in a vase on the dining table?',
      si: 'සාලයේ මේසය උඩ නැවුම් මල් පෝච්චියක් තියන්න ආස කළාද?'
    },
    stages: buildProgressiveStages([
      'M 70 50 C 50 90, 140 90, 130 50 Z', // Neck curve
      'M 60 100 C 30 140, 30 170, 70 170 L 130 170 C 170 170, 170 140, 140 100 Z', // Bulbous body
      'M 70 50 L 130 50', // Top rim
      'M 100 20 L 100 70 M 80 30 L 100 50 L 120 30', // Flower stems inside vase
      'M 75 10 C 60 0, 90 0, 80 20 M 125 10 C 110 0, 140 0, 130 20' // Petal tops
    ])
  },
  {
    id: 'h_candle',
    categoryId: 'household',
    name: { en: 'Candle Holder', si: 'ඉටිපන්දම් පීඨය' },
    distractors: {
      en: ['Torch', 'Lighthouse', 'Wine Glass'],
      si: ['විදුලි පන්දම', 'ප්‍රදීපාගාරය', 'වයින් වීදුරුව']
    },
    reminiscence: {
      en: 'Do you remember lighting candles during quiet evenings or festive occasions?',
      si: 'උත්සව අවස්ථාවලදී හෝ හැන්දෑවේ ඉටිපන්දම් දැල්වූ ලස්සන මතකයන් තිබේද?'
    },
    stages: buildProgressiveStages([
      'M 85 80 L 115 80 L 110 150 L 90 150 Z', // Candle stick
      'M 60 160 L 140 160 L 150 170 L 50 170 Z', // Base stand
      'M 100 80 L 100 65', // Wick
      'M 100 65 C 90 50, 100 35, 100 30 C 100 35, 110 50, 100 65 Z', // Flame shape
      'M 80 45 L 70 40 M 120 45 L 130 40 M 100 20 L 100 12' // Flame glow rays
    ])
  },
  {
    id: 'h_fan',
    categoryId: 'household',
    name: { en: 'Table Fan', si: 'මේස පංකාව (ෆෑන් එක)' },
    distractors: {
      en: ['Clock', 'Wheel', 'Propeller'],
      si: ['ඔරලෝසුව', 'රෝදය', 'ප්‍රොපෙලරය']
    },
    reminiscence: {
      en: 'Did a gentle tabletop fan keep you cool during warm tropical afternoons?',
      si: 'තද රස්නේ දවස්වල සාලයේ බ්‍රමණය වන ෆෑන් එකෙන් හුළං ගත්තා මතකද?'
    },
    stages: buildProgressiveStages([
      'M 100 80 m -50,0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0', // Outer blade guard
      'M 100 130 L 100 170 L 70 180 L 130 180 L 100 170', // Neck & Base
      'M 100 80 m -12,0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0', // Center hub
      'M 100 68 C 85 45, 115 45, 100 68', // Top blade loop
      'M 110 86 C 135 75, 135 105, 110 86', // Right blade loop
      'M 90 86 C 65 105, 65 75, 90 86' // Left blade loop
    ])
  },
  {
    id: 'h_comb',
    categoryId: 'household',
    name: { en: 'Hair Comb', si: 'පනාව' },
    distractors: {
      en: ['Rake', 'Brush', 'Saw'],
      si: ['පෝරකය', 'බුරුසුව', 'කියත']
    },
    reminiscence: {
      en: 'Do you remember combing hair carefully before leaving for church, work, or family visits?',
      si: 'ගමනක් යන්න කලින් පනාවෙන් කොණ්ඩය පීරා අලංකාර ලෙස සැරසුණු හැටි මතකද?'
    },
    stages: buildProgressiveStages([
      'M 20 80 L 180 80 L 180 100 L 20 100 Z', // Spine handle
      'M 30 100 L 30 140 M 40 100 L 40 140 M 50 100 L 50 140', // Teeth set 1
      'M 60 100 L 60 140 M 70 100 L 70 140 M 80 100 L 80 140 M 90 100 L 90 140', // Teeth set 2
      'M 100 100 L 100 140 M 110 100 L 110 140 M 120 100 L 120 140 M 130 100 L 130 140', // Teeth set 3
      'M 140 100 L 140 140 M 150 100 L 150 140 M 160 100 L 160 140 M 170 100 L 170 140' // Teeth set 4
    ])
  },
  {
    id: 'h_eyeglasses',
    categoryId: 'household',
    name: { en: 'Reading Glasses', si: 'කියවන කණ්නාඩිය' },
    distractors: {
      en: ['Binoculars', 'Scissors', 'Goggles'],
      si: ['දුරදක්නය', 'කතුර', 'ආරක්ෂිත කණ්නාඩි']
    },
    reminiscence: {
      en: 'Where was your favorite spot to leave your reading glasses when resting?',
      si: 'පොතක් කියවලා ඉවර වුණාම උපැස් යුවල තියපු ප්‍රියතම තැන මතකද?'
    },
    stages: buildProgressiveStages([
      'M 60 100 m -30,0 a 30,25 0 1,0 60,0 a 30,25 0 1,0 -60,0', // Left rim
      'M 140 100 m -30,0 a 30,25 0 1,0 60,0 a 30,25 0 1,0 -60,0', // Right rim
      'M 90 95 C 100 90, 100 90, 110 95', // Nose bridge
      'M 30 95 L 10 85 L 5 95', // Left temple arm
      'M 170 95 L 190 85 L 195 95' // Right temple arm
    ])
  },
  {
    id: 'h_camera',
    categoryId: 'household',
    name: { en: 'Vintage Camera', si: 'පරණ කැමරාව' },
    distractors: {
      en: ['Radio', 'Television', 'Binoculars'],
      si: ['රේඩියෝව', 'රූපවාහිනිය', 'දුරදක්නය']
    },
    reminiscence: {
      en: 'Do you remember taking photos at family weddings, holidays, or birthdays?',
      si: 'පවුලේ මඟුල් ගෙවල්වල සහ උත්සවවලදී ෆොටෝ ගත්තු කැමරාවක් තිබුණාද?'
    },
    stages: buildProgressiveStages([
      'M 30 70 L 170 70 L 170 150 L 30 150 Z', // Main body box
      'M 100 110 m -30,0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0', // Outer lens
      'M 100 110 m -18,0 a 18,18 0 1,0 36,0 a 18,18 0 1,0 -36,0', // Inner glass lens
      'M 70 50 L 110 50 L 110 70 L 70 70 Z', // Top viewfinder housing
      'M 140 55 A 8 8 0 1 1 156 55', // Shutter button
      'M 45 85 L 60 85' // Flash window
    ])
  },
  {
    id: 'h_frame',
    categoryId: 'household',
    name: { en: 'Picture Frame', si: 'ඡායාරූප රාමුව' },
    distractors: {
      en: ['Window', 'Mirror', 'Painting Canvas'],
      si: ['ජනේලය', 'කණ්නාඩිය', 'චිත්‍ර පුවරුව']
    },
    reminiscence: {
      en: 'Whose portrait or family picture was displayed proudly in your living room?',
      si: 'සාලයේ බිත්තියේ අභිමානයෙන් එල්ලා තිබූ පවුලේ පින්තූරය කාගේද?'
    },
    stages: buildProgressiveStages([
      'M 30 30 L 170 30 L 170 170 L 30 170 Z', // Outer frame
      'M 50 50 L 150 50 L 150 150 L 50 150 Z', // Inner border
      'M 100 80 C 90 70, 70 80, 80 100 C 90 110, 100 120, 100 120 C 100 120, 110 110, 120 100 C 130 80, 110 70, 100 80 Z', // Center heart sketch inside
      'M 60 140 L 90 110 L 110 130 L 140 100 L 150 110', // Mountain horizon drawing in frame
      'M 30 30 L 50 50 M 170 30 L 150 50 M 170 170 L 150 150 M 30 170 L 50 150' // Corner bevel lines
    ])
  },
  {
    id: 'h_key',
    categoryId: 'household',
    name: { en: 'Brass Key', si: 'පිත්තල යතුර' },
    distractors: {
      en: ['Spoon', 'Whistle', 'Padlock'],
      si: ['හැන්ද', 'විසිල් එක', 'ඉබ්බා (අගුල)']
    },
    reminiscence: {
      en: 'Did you carry a heavy key ring for locking the main wooden front door?',
      si: 'ඉස්සර ගෙදර ප්‍රධාන දොර අගුලු ලන්න යතුරු කැරැල්ලක් ළඟ තිබුණාද?'
    },
    stages: buildProgressiveStages([
      'M 50 100 m -25,0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0', // Bow handle ring
      'M 75 100 L 170 100', // Long shaft
      'M 150 100 L 150 125 L 160 125 L 160 110 L 170 110 L 170 100', // Bit teeth
      'M 50 100 m -12,0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0', // Hole inside bow
      'M 90 95 L 90 105 M 110 95 L 110 105' // Shaft ridges
    ])
  },
  {
    id: 'h_radio',
    categoryId: 'household',
    name: { en: 'Transistor Radio', si: 'ට්‍රාන්සිස්ටර් රේඩියෝව' },
    distractors: {
      en: ['Television', 'Cassette Tape', 'Speaker'],
      si: ['රූපවාහිනිය', 'කැසට් පටය', 'ස්පීකරය']
    },
    reminiscence: {
      en: 'Did you tune in to early morning news or music programs on the radio?',
      si: 'උදේ පාන්දර පිරිත් හෝ පැරණි සිංහල සින්දු අහන්න රේඩියෝව දැමූ හැටි මතකද?'
    },
    stages: buildProgressiveStages([
      'M 30 70 L 170 70 L 170 160 L 30 160 Z', // Radio body
      'M 160 70 L 190 20', // Extended antenna line
      'M 75 115 m -25,0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0', // Speaker grill circle
      'M 140 95 A 10 10 0 1 1 140 115 A 10 10 0 1 1 140 95', // Volume dial
      'M 140 130 A 10 10 0 1 1 140 150 A 10 10 0 1 1 140 130', // Tuning dial
      'M 40 80 L 120 80 L 120 90 L 40 90 Z' // Frequency tuning scale
    ])
  },
  {
    id: 'h_shoe',
    categoryId: 'household',
    name: { en: 'Leather Shoe', si: 'සපත්තු යුවල' },
    distractors: {
      en: ['Slipper', 'Sock', 'Glove'],
      si: ['සෙරෙප්පුව', 'මේස් එක', 'අත්වැසුම']
    },
    reminiscence: {
      en: 'Did you have a polished pair of shoes saved for Sundays or special celebrations?',
      si: 'උත්සව අවස්ථාවලට පලඳින්න පොලිෂ් කරලා තියපු සපත්තු කුට්ටම මතකද?'
    },
    stages: buildProgressiveStages([
      'M 20 130 C 20 100, 70 80, 110 100 C 150 110, 180 120, 180 140 L 20 140 Z', // Shoe upper contour
      'M 15 140 L 185 140 L 185 155 L 15 155 Z', // Sole base
      'M 15 155 L 55 155 L 55 165 L 15 165 Z', // Heel block
      'M 80 90 C 80 80, 110 80, 110 100', // Ankle opening collar
      'M 70 110 L 85 125 M 80 105 L 95 120' // Laces crossing
    ])
  }
];
