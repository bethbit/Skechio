import React from 'react';
import { motion } from 'motion/react';
import { SubjectItem } from '../types';

interface DrawingCanvasProps {
  subject: SubjectItem;
  stage: number; // 1 to 5
  isRevealed: boolean;
  highContrast?: boolean;
  lineThickness?: number;
}

export const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  subject,
  stage,
  isRevealed,
  highContrast = false,
  lineThickness = 3.5
}) => {
  // Determine which stages to display
  // If isRevealed, show all 5 stages
  const activeStageCount = isRevealed ? 5 : Math.min(5, Math.max(1, stage));

  const strokeColor = highContrast ? '#FFFFFF' : '#1E293B';
  const bgStyle = highContrast
    ? 'bg-stone-900 border-2 border-white shadow-none'
    : 'bg-white/75 backdrop-blur-2xl border border-white/90 shadow-2xl shadow-purple-950/15 ring-1 ring-purple-500/10';

  return (
    <div className={`relative w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] aspect-square mx-auto rounded-3xl p-4 sm:p-6 flex items-center justify-center transition-all ${bgStyle}`}>
      {/* Ambient inner glow reflection */}
      {!highContrast && (
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-indigo-300/15 to-pink-200/10 rounded-3xl -z-10 pointer-events-none blur-xl" />
      )}

      <svg
        viewBox={subject.viewBox || "0 0 200 200"}
        className="w-full h-full max-w-[170px] xs:max-w-[200px] sm:max-w-[230px] max-h-[230px] select-none"
        style={{ overflow: 'visible' }}
      >
        {/* Render stages 0 to activeStageCount - 1 */}
        {subject.stages.slice(0, activeStageCount).map((stageData, stageIdx) => (
          <g key={`stage_${stageIdx}`}>
            {stageData.paths.map((p, pathIdx) => (
              <motion.path
                key={`p_${stageIdx}_${pathIdx}`}
                d={p.d}
                fill="none"
                stroke={strokeColor}
                strokeWidth={lineThickness}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: isRevealed ? 1.2 : 0.6,
                  delay: stageIdx * 0.12 + pathIdx * 0.05,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </g>
        ))}
      </svg>

    </div>
  );
};
