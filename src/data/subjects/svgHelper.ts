import { SVGPathStage } from '../../types';

export function makeStage(pathsD: string[]): SVGPathStage {
  return {
    paths: pathsD.map(d => ({
      d,
      fill: 'none',
      strokeWidth: 3.5
    }))
  };
}

/**
 * Builds 5 progressive SVG stages from an array of path strings.
 * Stage 1 shows 20% of paths (1st chunk)
 * Stage 2 shows 40%
 * Stage 3 shows 60%
 * Stage 4 shows 80%
 * Stage 5 shows 100%
 */
export function buildProgressiveStages(pathList: string[]): [SVGPathStage, SVGPathStage, SVGPathStage, SVGPathStage, SVGPathStage] {
  const total = pathList.length;
  if (total < 5) {
    // If fewer than 5 paths, duplicate or stretch
    const s1 = pathList.slice(0, 1);
    const s2 = pathList.slice(0, Math.max(1, Math.floor(total * 0.4)));
    const s3 = pathList.slice(0, Math.max(1, Math.floor(total * 0.6)));
    const s4 = pathList.slice(0, Math.max(1, Math.floor(total * 0.8)));
    const s5 = pathList;
    return [makeStage(s1), makeStage(s2), makeStage(s3), makeStage(s4), makeStage(s5)];
  }

  const c1 = Math.max(1, Math.floor(total * 0.2));
  const c2 = Math.max(c1 + 1, Math.floor(total * 0.4));
  const c3 = Math.max(c2 + 1, Math.floor(total * 0.6));
  const c4 = Math.max(c3 + 1, Math.floor(total * 0.8));

  return [
    makeStage(pathList.slice(0, c1)),
    makeStage(pathList.slice(0, c2)),
    makeStage(pathList.slice(0, c3)),
    makeStage(pathList.slice(0, c4)),
    makeStage(pathList)
  ];
}
