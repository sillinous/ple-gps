import { useState, useMemo } from "react";
import { CATEGORIES, INTEGRATION_FLOWS, FLOW_TYPES } from "../data.js";

const W = 800;
const H = 560;

// Arrange categories in a circular layout
function getCatPositions() {
  const positions = {};
  const cats = CATEGORIES;
  const cx = W / 2;
  const cy = H / 2;
  const rx = W / 2 - 80;
  const ry = H / 2 - 60;
  cats.forEach((c, i) => {
    const angle = (i / cats.length) * Math.PI * 2 - Math.PI / 2;
    positions[c.id] = {
      x: cx + rx * Math.cos(angle),
      y: cy + ry * Math.sin(angle),
      cat: c
    };
  });
  return positions;
}

function resolveFrom(id, positions) {
  // Check exact match
  if (positions[id]) return positions[id];
  // Check parent category (e.g., "1.2" → "1.0")
  const parent = id.split(".")[0] + ".0";
  if (positions[parent]) return positions[parent];
  return null;
}

export default function IntegrationMap({ onCategoryClick }) {
  const [hovered, setHovered] = useState(null);
  const [activeType, setActiveType] = useState(null);
  const positions = useMemo(getCatPositions, []);

  const flows = useMemo(() =>
    INTEGRATION_FLOWS.filter(f => f.to !== "ALL").map(f => {
      const from = resolveFrom(f.from, positions);
      const to = resolveFrom(f.to, positions);
      return from && to ? { ...f, fromPos: from, toPos: to } : null;
    }).filter(Boolean),
    [positions]
  );

  const broadcastFlows = useMemo(() =>
    INTEGRATION_FLOWS.filter(f => f.to === "ALL"),
    []
  );

  const visibleFlows = useMemo(() => {
    let filtered = flows;
    if (activeType) filtered = filtered.filter(f => f.type === activeType);
    if (hovered) filtered = filtered.filter(f => {
      const fromCat = f.from.split(".")[0] + ".0";
      const toCat = f.to.split(".")[0] + ".0";
      return fromCat === hovered || toCat === hovered;
    });
    return filtered;
  }, [flows, hovered, activeType]);

  return (
    <div>
      {/* Type filter */}
      <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ fontSize: 10, color: "#57534e", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, marginRight: 4 }}>Flow type:</span>
        <div
          onClick={() => setActiveType(null)}
          style={{
            fontSize: 11, padding: "3px 10px", borderRadius: 3, cursor: "pointer",
            background: activeType === null ? "rgba(245,158,11,0.12)" : "rgba(120,113,108,0.06)",
            color: activeType === null ? "#f59e0b" : "#78716c", fontWeight: 500, transition: "all 0.15s"
          }}>All</div>
        {Object.entries(FLOW_TYPES).map(([key, ft]) => (
          <div
            key={key}
            onClick={() => setActiveType(activeType === key ? null : key)}
            style={{
              fontSize: 11, padding: "3px 10px", borderRadius: 3, cursor: "pointer", transition: "all 0.15s",
              background: activeType === key ? `${ft.color}20` : "rgba(120,113,108,0.06)",
              color: activeType === key ? ft.color : "#78716c", fontWeight: 500,
              display: "flex", alignItems: "center", gap: 5
            }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: ft.color, opacity: 0.8 }} />
            {ft.label}
          </div>
        ))}
      </div>

      {/* SVG Map */}
      <div style={{ overflowX: "auto", background: "#0c0a09", borderRadius: 6, border: "1px solid rgba(245,158,11,0.06)" }}>
        <svg viewBox={`0 0 ${W} ${H}`} width={W} style={{ maxWidth: "100%", display: "block" }}>
          <defs>
            {Object.entries(FLOW_TYPES).map(([key, ft]) => (
              <marker key={key} id={`arrow-${key}`} viewBox="0 0 10 6" refX="10" refY="3" markerWidth="8" markerHeight="6" orient="auto">
                <path d="M0,0 L10,3 L0,6 Z" fill={ft.color} opacity={0.6} />
              </marker>
            ))}
          </defs>

          {/* Flow lines */}
          {visibleFlows.map((f, i) => {
            const ft = FLOW_TYPES[f.type] || FLOW_TYPES.information;
            const dx = f.toPos.x - f.fromPos.x;
            const dy = f.toPos.y - f.fromPos.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const nx = dx / dist;
            const ny = dy / dist;
            const x1 = f.fromPos.x + nx * 26;
            const y1 = f.fromPos.y + ny * 26;
            const x2 = f.toPos.x - nx * 26;
            const y2 = f.toPos.y - ny * 26;
            // Curve control point perpendicular to line
            const mx = (x1 + x2) / 2 + ny * 20 * ((i % 2) * 2 - 1);
            const my = (y1 + y2) / 2 - nx * 20 * ((i % 2) * 2 - 1);

            return (
              <g key={i}>
                <path
                  d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
                  fill="none"
                  stroke={ft.color}
                  strokeWidth={hovered ? 1.5 : 1}
                  opacity={hovered ? 0.7 : 0.35}
                  markerEnd={`url(#arrow-${f.type})`}
                />
              </g>
            );
          })}

          {/* Broadcast indicators */}
          {broadcastFlows.map((f, i) => {
            const from = resolveFrom(f.from, positions);
            if (!from) return null;
            const isActive = !hovered || hovered === f.from.split(".")[0] + ".0";
            const ft = FLOW_TYPES[f.type] || FLOW_TYPES.governance;
            if (activeType && f.type !== activeType) return null;
            return (
              <circle
                key={`bc-${i}`}
                cx={from.x} cy={from.y} r={32}
                fill="none"
                stroke={ft.color}
                strokeWidth={1}
                strokeDasharray="3 3"
                opacity={isActive ? 0.3 : 0.06}
              />
            );
          })}

          {/* Category nodes */}
          {Object.entries(positions).map(([id, pos]) => {
            const c = pos.cat;
            const isHovered = hovered === id;
            const isConnected = hovered && visibleFlows.some(f => {
              const fromCat = f.from.split(".")[0] + ".0";
              const toCat = f.to.split(".")[0] + ".0";
              return (fromCat === id || toCat === id) && (fromCat === hovered || toCat === hovered);
            });
            const dimmed = hovered && !isHovered && !isConnected;

            return (
              <g
                key={id}
                style={{ cursor: "pointer", transition: "opacity 0.2s" }}
                opacity={dimmed ? 0.2 : 1}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onCategoryClick?.(id)}
              >
                <circle
                  cx={pos.x} cy={pos.y} r={isHovered ? 24 : 20}
                  fill={isHovered ? `${c.color}30` : "#141210"}
                  stroke={c.color}
                  strokeWidth={isHovered ? 2 : 1}
                />
                <text
                  x={pos.x} y={pos.y - 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={c.color}
                  fontSize={13}
                >{c.icon}</text>
                <text
                  x={pos.x} y={pos.y + 11}
                  textAnchor="middle"
                  fill="#57534e"
                  fontSize={7}
                  fontFamily="'JetBrains Mono', monospace"
                >{c.id}</text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Flow detail for hovered category */}
      {hovered && (() => {
        const hCat = CATEGORIES.find(c => c.id === hovered);
        const inbound = INTEGRATION_FLOWS.filter(f => {
          const toCat = f.to === "ALL" ? null : f.to.split(".")[0] + ".0";
          return toCat === hovered || f.to === "ALL";
        });
        const outbound = INTEGRATION_FLOWS.filter(f => {
          const fromCat = f.from.split(".")[0] + ".0";
          return fromCat === hovered;
        });
        return (
          <div style={{ marginTop: 12, background: "#141210", border: "1px solid rgba(245,158,11,0.06)", borderRadius: 6, padding: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, fontSize: 12 }}>
            <div>
              <div style={{ fontSize: 10, color: "#57534e", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600, marginBottom: 6 }}>
                Inbound to {hCat?.id} ({inbound.length})
              </div>
              {inbound.length === 0 ? <div style={{ color: "#57534e" }}>None</div> :
                inbound.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "2px 0", color: "#a8a29e" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: FLOW_TYPES[f.type]?.color || "#78716c", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#78716c" }}>{f.from}</span>
                    <span>{f.label}</span>
                  </div>
                ))}
            </div>
            <div>
              <div style={{ fontSize: 10, color: "#57534e", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600, marginBottom: 6 }}>
                Outbound from {hCat?.id} ({outbound.length})
              </div>
              {outbound.length === 0 ? <div style={{ color: "#57534e" }}>None</div> :
                outbound.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "2px 0", color: "#a8a29e" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: FLOW_TYPES[f.type]?.color || "#78716c", flexShrink: 0 }} />
                    <span>→ {f.to === "ALL" ? "All categories" : f.to}</span>
                    <span style={{ color: "#78716c" }}>{f.label}</span>
                  </div>
                ))}
            </div>
          </div>
        );
      })()}

      <div style={{ marginTop: 10, fontSize: 11, color: "#57534e" }}>
        Hover a category to see its connections. Click to navigate. Dashed rings indicate broadcast flows (→ all categories).
      </div>
    </div>
  );
}
