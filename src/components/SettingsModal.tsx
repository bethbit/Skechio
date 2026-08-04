import React from 'react';
import { X, Settings, Volume2, Eye, Type, Languages, Sliders, Target, Layers, Palette } from 'lucide-react';
import { GameSettings, Language, BgTheme } from '../types';
import { translations } from '../data/translations';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: GameSettings;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings
}) => {
  if (!isOpen) return null;

  const t = translations[settings.language];

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/40 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white/85 backdrop-blur-2xl rounded-t-3xl sm:rounded-3xl w-full max-w-lg shadow-2xl border border-white/90 overflow-hidden animate-fade-in max-h-[90vh]">
        {/* iOS Drag Handle Bar for mobile */}
        <div className="w-full flex justify-center pt-2.5 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-stone-300" />
        </div>

        {/* Header */}
        <div className="p-4 sm:p-5 bg-white/70 backdrop-blur-md text-stone-900 flex items-center justify-between border-b border-white/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-purple-500/10 text-purple-600 shrink-0 border border-purple-500/20 shadow-2xs">
              <Settings className="w-5 h-5 stroke-[2]" />
            </div>
            <h3 className="text-base sm:text-lg font-black text-stone-900">{t.settings}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/80 hover:bg-white text-stone-600 transition-all cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center active:scale-95 border border-white/80 shadow-2xs"
          >
            <X className="w-4 h-4 stroke-[1.75]" />
          </button>
        </div>

        {/* Settings Form Body */}
        <div className="p-4 sm:p-5 space-y-4 sm:space-y-5 overflow-y-auto max-h-[65vh] sm:max-h-[75vh]">
          {/* Difficulty Level Selection */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-purple-900 mb-2 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-purple-600 shrink-0 stroke-[2]" />
              <span>{t.difficultyLabel}</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'easy', title: t.easyTitle.split(' ')[0], sub: '4 Stages' },
                { id: 'medium', title: t.mediumTitle.split(' ')[0], sub: '3 Stages' },
                { id: 'hard', title: t.hardTitle.split(' ')[0], sub: '2 Stages' }
              ].map(d => (
                <button
                  key={d.id}
                  onClick={() => onUpdateSettings({ difficulty: d.id as any })}
                  className={`p-2.5 rounded-2xl border font-bold text-xs text-center transition-all cursor-pointer active:scale-95 min-h-[44px] flex flex-col items-center justify-center ${
                    settings.difficulty === d.id
                      ? 'bg-purple-600 text-white border-purple-500 shadow-2xs'
                      : 'bg-white/80 border-white/80 hover:bg-white text-stone-800'
                  }`}
                >
                  <span className="font-extrabold">{d.title}</span>
                  <span className={`text-[10px] font-medium ${settings.difficulty === d.id ? 'text-purple-100' : 'text-stone-500'}`}>{d.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Background Color Palette Selection */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-purple-900 mb-2 flex items-center gap-1.5">
              <Palette className="w-4 h-4 text-purple-600 shrink-0 stroke-[2]" />
              <span>{t.bgColorLabel}</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'lavender', title: t.bgThemeLavender, swatch: 'from-indigo-400 via-purple-400 to-pink-400' },
                { id: 'mint', title: t.bgThemeMint, swatch: 'from-emerald-400 via-teal-400 to-cyan-400' },
                { id: 'peach', title: t.bgThemePeach, swatch: 'from-amber-400 via-orange-400 to-rose-400' },
                { id: 'sky', title: t.bgThemeSky, swatch: 'from-sky-400 via-blue-400 to-indigo-400' },
                { id: 'rose', title: t.bgThemeRose, swatch: 'from-rose-400 via-pink-400 to-purple-400' },
                { id: 'slate', title: t.bgThemeSlate, swatch: 'from-slate-400 via-stone-400 to-zinc-400' }
              ].map(bg => {
                const isSelected = (settings.bgTheme || 'lavender') === bg.id;
                return (
                  <button
                    key={bg.id}
                    onClick={() => onUpdateSettings({ bgTheme: bg.id as BgTheme })}
                    className={`p-2.5 rounded-2xl border font-bold text-xs text-left transition-all cursor-pointer active:scale-95 flex items-center gap-2 min-h-[44px] ${
                      isSelected
                        ? 'bg-purple-600 text-white border-purple-500 shadow-2xs'
                        : 'bg-white/80 border-white/80 hover:bg-white text-stone-800'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full bg-gradient-to-tr ${bg.swatch} shrink-0 ring-1 ring-black/10 shadow-xs`} />
                    <span className="font-extrabold truncate text-[11px] sm:text-xs">{bg.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-600 shrink-0 stroke-[1.75]" />
              <span>{t.categoriesLabel}</span>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: t.allCategories },
                { id: 'household', label: t.catHousehold },
                { id: 'animals', label: t.catAnimals },
                { id: 'food', label: t.catFood },
                { id: 'nature', label: t.catNature },
                { id: 'tools', label: t.catTools }
              ].map(c => (
                <button
                  key={c.id}
                  onClick={() => onUpdateSettings({ selectedCategory: c.id })}
                  className={`px-3 py-1.5 rounded-full font-bold text-xs border transition-all cursor-pointer active:scale-95 min-h-[36px] ${
                    settings.selectedCategory === c.id
                      ? 'bg-stone-900 text-white border-stone-900 shadow-2xs'
                      : 'bg-white/80 text-stone-700 border-stone-200/80 hover:bg-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Language Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 flex items-center gap-1.5">
              <Languages className="w-4 h-4 text-amber-600 shrink-0 stroke-[1.75]" />
              <span>{t.languageToggle}</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'en', label: 'English' },
                { id: 'si', label: 'සිංහල (Sinhala)' }
              ].map(l => (
                <button
                  key={l.id}
                  onClick={() => onUpdateSettings({ language: l.id as Language })}
                  className={`p-2.5 rounded-2xl border font-bold text-xs sm:text-sm text-center transition-all cursor-pointer active:scale-95 min-h-[40px] ${
                    settings.language === l.id
                      ? 'bg-stone-900 text-white border-stone-900 shadow-2xs'
                      : 'bg-white/80 border-stone-200/80 hover:bg-white text-stone-800'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Text Size Scale */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-purple-900 mb-2 flex items-center gap-1.5">
              <Type className="w-4 h-4 text-purple-600 shrink-0 stroke-[2]" />
              <span>{t.fontSize}</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'normal', label: t.fontNormal },
                { id: 'large', label: t.fontLarge },
                { id: 'xlarge', label: t.fontXLarge }
              ].map(s => (
                <button
                  key={s.id}
                  onClick={() => onUpdateSettings({ fontSize: s.id as any })}
                  className={`p-2 rounded-2xl border font-bold text-xs text-center transition-all cursor-pointer active:scale-95 min-h-[40px] ${
                    settings.fontSize === s.id
                      ? 'bg-purple-600 text-white border-purple-500 shadow-2xs'
                      : 'bg-white/80 border-white/80 hover:bg-white text-stone-800'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* High Contrast Toggle */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-white/80 border border-stone-200/80 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <Eye className="w-4 h-4 text-stone-700 shrink-0 stroke-[1.75]" />
              <div>
                <span className="font-bold text-xs text-stone-900 block">{t.highContrast}</span>
                <span className="text-[11px] text-stone-500">Pure high contrast black outlines</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={e => onUpdateSettings({ highContrast: e.target.checked })}
              className="w-4 h-4 accent-amber-600 cursor-pointer shrink-0"
            />
          </div>

          {/* Audio Chimes Toggle */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-white/80 border border-stone-200/80 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <Volume2 className="w-4 h-4 text-stone-700 shrink-0 stroke-[1.75]" />
              <div>
                <span className="font-bold text-xs text-stone-900 block">{t.soundEffects}</span>
                <span className="text-[11px] text-stone-500">Gentle acoustic chord feedback</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.soundEnabled}
              onChange={e => onUpdateSettings({ soundEnabled: e.target.checked })}
              className="w-4 h-4 accent-amber-600 cursor-pointer shrink-0"
            />
          </div>

          {/* Voice Read Aloud Toggle */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-white/80 border border-stone-200/80 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <Volume2 className="w-4 h-4 text-amber-600 shrink-0 stroke-[1.75]" />
              <div>
                <span className="font-bold text-xs text-stone-900 block">{t.readAloud}</span>
                <span className="text-[11px] text-stone-500">Speech synthesis for questions</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.readAloud}
              onChange={e => onUpdateSettings({ readAloud: e.target.checked })}
              className="w-4 h-4 accent-amber-600 cursor-pointer shrink-0"
            />
          </div>

          {/* Line Art Stroke Thickness */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-amber-600 shrink-0 stroke-[1.75]" />
              <span>Drawing Line Boldness</span>
            </label>
            <div className="flex items-center gap-2">
              {[3, 4, 5, 6].map(thick => (
                <button
                  key={thick}
                  onClick={() => onUpdateSettings({ lineThickness: thick })}
                  className={`flex-1 py-1.5 rounded-full border font-extrabold text-xs transition-all cursor-pointer active:scale-95 min-h-[36px] ${
                    settings.lineThickness === thick
                      ? 'bg-amber-600 text-white border-amber-600 shadow-2xs'
                      : 'bg-white/80 text-stone-700 border-stone-200/80 hover:bg-white'
                  }`}
                >
                  {thick}px
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 bg-stone-100/60 backdrop-blur-md border-t border-stone-200/60 text-right">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-stone-900 text-white font-extrabold text-xs sm:text-sm hover:bg-stone-800 transition-colors cursor-pointer min-h-[40px] active:scale-95"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
