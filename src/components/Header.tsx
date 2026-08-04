import React from 'react';
import { Pencil, Volume2, VolumeX, Eye, BookOpen, Settings, Languages, Maximize, Minimize, HelpCircle } from 'lucide-react';
import { GameSettings, Language } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  settings: GameSettings;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
  savedNotesCount: number;
  onOpenNotes: () => void;
  onOpenSettings: () => void;
  onOpenHowToPlay: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  settings,
  onUpdateSettings,
  savedNotesCount,
  onOpenNotes,
  onOpenSettings,
  onOpenHowToPlay
}) => {
  const t = translations[settings.language];
  const [isFullscreen, setIsFullscreen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleFSChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFSChange);
    return () => document.removeEventListener('fullscreenchange', handleFSChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen request failed:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => {
          console.warn('Exit fullscreen failed:', err);
        });
      }
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = settings.language === 'en' ? 'si' : 'en';
    onUpdateSettings({ language: nextLang });
  };

  const cycleFontSize = () => {
    const sizes: Array<'normal' | 'large' | 'xlarge'> = ['normal', 'large', 'xlarge'];
    const currentIdx = sizes.indexOf(settings.fontSize);
    const nextSize = sizes[(currentIdx + 1) % sizes.length];
    onUpdateSettings({ fontSize: nextSize });
  };

  return (
    <header className={`w-full text-stone-900 sticky top-0 z-30 transition-all ${
      settings.highContrast
        ? 'bg-stone-900 border-b border-stone-800'
        : 'bg-white/65 backdrop-blur-xl border-b border-white/80 shadow-sm shadow-purple-950/5'
    }`}>
      <div className="max-w-6xl mx-auto px-3 sm:px-5 py-2.5 flex items-center justify-between gap-2">
        {/* Brand Title & Icon */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-violet-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20">
            <Pencil className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black tracking-tight leading-tight bg-gradient-to-r from-purple-950 via-indigo-950 to-stone-900 bg-clip-text text-transparent">
              {t.appTitle}
            </h1>
            <p className="text-[11px] sm:text-xs text-stone-500 font-medium hidden md:block">
              {t.appSubtitle}
            </p>
          </div>
        </div>

        {/* Header Control Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* How to Play Modal Trigger */}
          <button
            onClick={onOpenHowToPlay}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/65 hover:bg-white/90 backdrop-blur-md text-purple-950 border border-white/80 font-extrabold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all cursor-pointer min-h-[38px] active:scale-95"
            title={t.howToPlay}
          >
            <HelpCircle className="w-4 h-4 text-purple-600 shrink-0 stroke-[2]" />
            <span className="hidden sm:inline">{t.howToPlay}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/65 hover:bg-white/90 backdrop-blur-md text-stone-800 border border-white/80 font-bold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all cursor-pointer min-h-[38px] active:scale-95"
            title={t.languageToggle}
          >
            <Languages className="w-4 h-4 text-stone-600 shrink-0 stroke-[1.75]" />
            <span className="hidden xs:inline">{settings.language === 'en' ? 'සිංහල' : 'English'}</span>
            <span className="xs:hidden uppercase">{settings.language}</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className={`p-2 rounded-full border transition-all cursor-pointer min-h-[38px] min-w-[38px] flex items-center justify-center active:scale-95 shadow-2xs ${
              isFullscreen
                ? 'bg-purple-600 text-white border-purple-500 font-bold'
                : 'bg-white/65 hover:bg-white/90 backdrop-blur-md text-stone-600 border-white/80'
            }`}
            title={isFullscreen ? 'Exit Full Screen' : 'Full Screen Mode'}
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4 stroke-[1.75]" />
            ) : (
              <Maximize className="w-4 h-4 stroke-[1.75]" />
            )}
          </button>

          {/* Text Size Cycle */}
          <button
            onClick={cycleFontSize}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/65 hover:bg-white/90 backdrop-blur-md text-stone-700 border border-white/80 font-bold text-xs shadow-2xs transition-all cursor-pointer min-h-[38px] active:scale-95"
            title={t.fontSize}
          >
            <span className="text-[10px]">A</span>
            <span className="text-sm">A</span>
            <span className="text-[10px] text-purple-700 uppercase font-black">
              {settings.fontSize === 'normal' ? '1x' : settings.fontSize === 'large' ? '1.2x' : '1.4x'}
            </span>
          </button>

          {/* High Contrast Toggle */}
          <button
            onClick={() => onUpdateSettings({ highContrast: !settings.highContrast })}
            className={`hidden xs:flex p-2 rounded-full border font-medium text-sm transition-all cursor-pointer min-h-[38px] min-w-[38px] items-center justify-center active:scale-95 shadow-2xs ${
              settings.highContrast
                ? 'bg-purple-600 text-white border-purple-500 font-bold'
                : 'bg-white/65 hover:bg-white/90 backdrop-blur-md text-stone-600 border-white/80'
            }`}
            title={t.highContrast}
          >
            <Eye className="w-4 h-4 stroke-[1.75]" />
          </button>

          {/* Sound Mute Toggle */}
          <button
            onClick={() => onUpdateSettings({ soundEnabled: !settings.soundEnabled })}
            className="p-2 rounded-full bg-white/65 hover:bg-white/90 backdrop-blur-md text-stone-600 border border-white/80 shadow-2xs transition-all cursor-pointer min-h-[38px] min-w-[38px] flex items-center justify-center active:scale-95"
            title={t.soundEffects}
          >
            {settings.soundEnabled ? (
              <Volume2 className="w-4 h-4 text-purple-600 stroke-[2]" />
            ) : (
              <VolumeX className="w-4 h-4 text-stone-400 stroke-[1.75]" />
            )}
          </button>

          {/* Caregiver Saved Notes Button */}
          <button
            onClick={onOpenNotes}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm border border-purple-400/30 transition-all cursor-pointer min-h-[38px] shadow-md shadow-purple-500/20"
            title={t.caregiverNotesModalTitle}
          >
            <BookOpen className="w-4 h-4 shrink-0 stroke-[2]" />
            <span className="hidden lg:inline">{t.caregiverNotesModalTitle}</span>
            {savedNotesCount > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-white text-purple-900 text-[11px] font-black">
                {savedNotesCount}
              </span>
            )}
          </button>

          {/* Settings Modal Trigger */}
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-full bg-white/65 hover:bg-white/90 backdrop-blur-md text-stone-600 border border-white/80 shadow-2xs transition-all cursor-pointer min-h-[38px] min-w-[38px] flex items-center justify-center active:scale-95"
            title={t.settings}
          >
            <Settings className="w-4 h-4 stroke-[1.75]" />
          </button>
        </div>
      </div>
    </header>
  );
};
