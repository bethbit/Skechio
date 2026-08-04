import React from 'react';
import { X, HelpCircle, Eye, MousePointerClick, Palette, Heart } from 'lucide-react';
import { GameSettings } from '../types';
import { translations } from '../data/translations';

interface HowToPlayModalProps {
  settings: GameSettings;
  onClose: () => void;
}

export const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ settings, onClose }) => {
  const t = translations[settings.language];

  const steps = [
    {
      icon: Eye,
      color: 'bg-amber-500/20 text-amber-600 border-amber-300/50',
      title: t.howToPlayStep1Title,
      desc: t.howToPlayStep1Desc
    },
    {
      icon: MousePointerClick,
      color: 'bg-amber-500/20 text-amber-600 border-amber-300/50',
      title: t.howToPlayStep2Title,
      desc: t.howToPlayStep2Desc
    },
    {
      icon: Palette,
      color: 'bg-emerald-500/20 text-emerald-600 border-emerald-300/50',
      title: t.howToPlayStep3Title,
      desc: t.howToPlayStep3Desc
    },
    {
      icon: Heart,
      color: 'bg-rose-500/20 text-rose-600 border-rose-300/50',
      title: t.howToPlayStep4Title,
      desc: t.howToPlayStep4Desc
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/40 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-all">
      <div className="bg-white/85 backdrop-blur-2xl rounded-t-3xl sm:rounded-3xl w-full max-w-lg shadow-2xl border border-white/90 overflow-hidden animate-fade-in max-h-[90vh] flex flex-col">
        {/* iOS Drag Handle Bar for mobile */}
        <div className="w-full flex justify-center pt-2.5 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-stone-300" />
        </div>

        {/* Header */}
        <div className="p-4 sm:p-5 bg-white/70 backdrop-blur-md text-stone-900 flex items-center justify-between border-b border-stone-200/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-amber-500/10 text-amber-700 shrink-0 border border-amber-500/20">
              <HelpCircle className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900">{t.howToPlayTitle}</h3>
              <p className="text-[11px] sm:text-xs text-stone-500 font-medium">{t.howToPlaySubtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200/80 text-stone-600 transition-all cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center active:scale-95 border border-stone-200/60"
          >
            <X className="w-4 h-4 stroke-[1.75]" />
          </button>
        </div>

        {/* Steps List */}
        <div className="p-4 sm:p-5 space-y-3 overflow-y-auto max-h-[65vh] sm:max-h-[70vh]">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs flex items-start gap-3"
              >
                <div className={`p-2.5 rounded-2xl border shrink-0 ${step.color}`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-stone-900 mb-0.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-600 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 bg-stone-100/60 backdrop-blur-md border-t border-stone-200/60 text-right">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer min-h-[40px] active:scale-95"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
