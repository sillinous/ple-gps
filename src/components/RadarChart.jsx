import { useMemo } from "react";
import { MATURITY_DIMENSIONS, MATURITY_BAND_COLORS } from "../data.js";

const SIZE = 300;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = SIZE / 2 - 40;
const DIMS = MATURITY_DIMENSIONS.length;
const ANGLE_STEP = (Math.PI * 2) / DIMS;

function polar(angle, radius) {
  return [CX + radius * Math.sin(angle), CY - radius * Math.cos(angle)];
}

function polygonPoints(values, maxVal = 5) {
  return values
    .map((v, i) => polar(i * ANGLE_STEP, (v / maxVal) * R))
    .map(([x, y]) => `${x},${y}`)
    .join(" ");
}

export default function RadarChart({ scores, targetScores, label }) {
  const dims = MATURITY_DIMENSIONS;
  const currentValues = useMemo(() => dims.map(d => scores[d.key] || 0), [scores, dims]);
  const targetValues = useMemo(() => dims.map(d => targetScores?.[d.key] || 0), [targetScores, dims]);
  const avg = useMemo(() => {
    const valid = currentValues.filter(v => v > 0);
    return valid.length > 0 ? valid.reduce((a, b) => a + b, 0) / valid.length : 0;
  }, [currentValues]);
  const bc = MATURITY_BAND_COLORS[Math.round(avg)] || MATURITY_BAND_COLORS[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width={SIZE} height={SIZE} style={{ maxWidth: "100%" }}>
        {/* Grid rings */}
        {[1, 2, 3, 4, 5].map(level => (
          <polygon
            key={level}
            points={polygonPoints(dims.map(() => level))}
            fill="none"
            stroke={`rgba(245,158,11,${level === 5 ? 0.08 : 0.04})`}
            strokeWidth={level === 5 ? 1.5 : 0.75}
          />
        ))}

        {/* Axis lines */}
        {dims.map((d, i) => {
          const [x, y] = polar(i * ANGLE_STEP, R);
          return <line key={d.key} x1={CX} y1={CY} x2={x} y2={y} stroke="rgba(245,158,11,0.06)" strokeWidth={0.75} />;
        })}

        {/* Target polygon */}
        {targetValues.some(v => v > 0) && (
          <polygon
            points={polygonPoints(targetValues)}
            fill="rgba(120,113,108,0.06)"
            stroke="rgba(120,113,108,0.3)"
            strokeWidth={1}
            strokeDasharray="4 3"
          />
        )}

        {/* Current score polygon */}
        {currentValues.some(v => v > 0) && (
          <polygon
            points={polygonPoints(currentValues)}
            fill={`${bc.text}12`}
            stroke={bc.text}
            strokeWidth={2}
            strokeLinejoin="round"
          />
        )}

        {/* Score dots */}
        {currentValues.map((v, i) => {
          if (v === 0) return null;
          const [x, y] = polar(i * ANGLE_STEP, (v / 5) * R);
          return (
            <circle
              key={dims[i].key}
              cx={x} cy={y} r={4}
              fill={bc.text}
              stroke="#0c0a09"
              strokeWidth={2}
            />
          );
        })}

        {/* Axis labels */}
        {dims.map((d, i) => {
          const [x, y] = polar(i * ANGLE_STEP, R + 22);
          return (
            <text
              key={d.key}
              x={x} y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#78716c"
              fontSize={10}
              fontFamily="'Outfit', sans-serif"
              fontWeight={500}
            >
              {d.label}
            </text>
          );
        })}

        {/* Level numbers on one axis */}
        {[1, 2, 3, 4, 5].map(level => {
          const [x, y] = polar(0, (level / 5) * R);
          return (
            <text
              key={level}
              x={x + 10} y={y}
              fill="#57534e"
              fontSize={8}
              fontFamily="'JetBrains Mono', monospace"
              dominantBaseline="middle"
            >
              {level}
            </text>
          );
        })}

        {/* Center score */}
        {avg > 0 && (
          <>
            <text x={CX} y={CY - 6} textAnchor="middle" fill={bc.text} fontSize={22} fontWeight={700} fontFamily="'Cormorant Garamond', serif">
              {avg.toFixed(1)}
            </text>
            <text x={CX} y={CY + 12} textAnchor="middle" fill="#78716c" fontSize={9} fontFamily="'Outfit', sans-serif">
              {bc.label || ""}
            </text>
          </>
        )}
      </svg>
      {label && <div style={{ fontSize: 11, color: "#57534e", marginTop: 4, textAlign: "center" }}>{label}</div>}
    </div>
  );
}
