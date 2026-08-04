import React from 'react';
import { X, BookOpen, Copy, Check, Printer, Trash2 } from 'lucide-react';
import { GameSettings } from '../types';
import { translations } from '../data/translations';

interface CaregiverNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: GameSettings;
  notes: Array<{
    subjectName: string;
    question: string;
    note: string;
    date: string;
  }>;
  onClearNotes?: () => void;
}

export const CaregiverNotesModal: React.FC<CaregiverNotesModalProps> = ({
  isOpen,
  onClose,
  settings,
  notes,
  onClearNotes
}) => {
  if (!isOpen) return null;

  const t = translations[settings.language];
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (notes.length === 0) return;
    const formatted = notes
      .map(
        (n, i) =>
          `[Memory Note ${i + 1}]\nSubject: ${n.subjectName}\nQuestion: ${n.question}\nCaregiver Note: ${n.note}\nRecorded: ${n.date}\n`
      )
      .join('\n------------------------\n\n');

    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/40 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white/85 backdrop-blur-2xl rounded-t-3xl sm:rounded-3xl w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] flex flex-col shadow-2xl border border-white/90 overflow-hidden animate-fade-in">
        {/* iOS Drag Handle Bar for mobile */}
        <div className="w-full flex justify-center pt-2.5 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-stone-300" />
        </div>

        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-white/70 backdrop-blur-md text-stone-900 flex items-center justify-between border-b border-white/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-purple-500/10 text-purple-600 shrink-0 border border-purple-500/20 shadow-2xs">
              <BookOpen className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900">{t.caregiverNotesModalTitle}</h3>
              <p className="text-[11px] sm:text-xs text-stone-500 font-medium">Saved stories and reminiscence notes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/80 hover:bg-white text-stone-600 transition-all cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center active:scale-95 border border-white/80 shadow-2xs"
          >
            <X className="w-4 h-4 stroke-[1.75]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3">
          {notes.length === 0 ? (
            <div className="text-center py-10 px-4 text-stone-500">
              <BookOpen className="w-10 h-10 text-stone-300 mx-auto mb-3 stroke-[1.75]" />
              <p className="text-xs sm:text-sm font-medium leading-relaxed max-w-md mx-auto">
                {t.noSavedNotes}
              </p>
            </div>
          ) : (
            notes.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs"
              >
                <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-1">
                  <span className="text-stone-900 font-extrabold text-sm">{item.subjectName}</span>
                  <span className="text-stone-400 font-normal text-[11px]">{item.date}</span>
                </div>
                <p className="text-xs text-stone-500 italic mb-2">"{item.question}"</p>
                <div className="p-3 bg-stone-50/80 rounded-xl border border-stone-200/60 text-stone-800 text-xs sm:text-sm font-medium leading-relaxed">
                  {item.note}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-stone-100/60 backdrop-blur-md border-t border-stone-200/60 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            {notes.length > 0 && (
              <>
                <button
                  onClick={handleCopy}
                  className="px-3.5 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5 active:scale-95 min-h-[38px]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[1.75]" /> : <Copy className="w-3.5 h-3.5 stroke-[1.75]" />}
                  <span>{copied ? t.copied : t.copyNotes}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-3.5 py-2 rounded-full bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5 active:scale-95 min-h-[38px]"
                >
                  <Printer className="w-3.5 h-3.5 stroke-[1.75]" />
                  <span>{t.printNotes}</span>
                </button>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs transition-colors cursor-pointer min-h-[38px] active:scale-95 shadow-2xs"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
