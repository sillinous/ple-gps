import { useState, useMemo, useRef, useEffect } from "react";
import { CATEGORIES } from "../data.js";

function buildSearchIndex() {
  const index = [];
  CATEGORIES.forEach(cat => {
    index.push({ type: "category", id: cat.id, catId: cat.id, label: cat.label, text: `${cat.id} ${cat.label} ${cat.delta} ${cat.origin}`.toLowerCase(), icon: cat.icon, color: cat.color });
    cat.groups.forEach(grp => {
      index.push({ type: "group", id: grp.id, catId: cat.id, grpId: grp.id, label: grp.label, text: `${grp.id} ${grp.label} ${grp.purpose || ""}`.toLowerCase(), icon: cat.icon, color: cat.color });
      (grp.processes || []).forEach(proc => {
        const actText = (proc.activities || []).join(" ");
        index.push({ type: "process", id: proc.id, catId: cat.id, grpId: grp.id, label: proc.label, text: `${proc.id} ${proc.label} ${actText}`.toLowerCase(), icon: cat.icon, color: cat.color });
      });
      (grp.kpis || []).forEach(kpi => {
        index.push({ type: "kpi", id: `${grp.id}-kpi`, catId: cat.id, grpId: grp.id, label: kpi, text: `${kpi} ${grp.label} kpi metric`.toLowerCase(), icon: "◊", color: "#6366f1" });
      });
    });
  });
  return index;
}

export default function SearchBar({ onNavigate, isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const searchIndex = useMemo(buildSearchIndex, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard shortcut
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase().trim();
    const terms = q.split(/\s+/);
    return searchIndex
      .filter(item => terms.every(t => item.text.includes(t)))
      .slice(0, 20);
  }, [query, searchIndex]);

  if (!isOpen) return null;

  const typeLabel = (t) => t === "category" ? "Category" : t === "group" ? "Process Group" : t === "process" ? "L3 Process" : "KPI";
  const typeColor = (t) => t === "category" ? "#f59e0b" : t === "group" ? "#10b981" : t === "process" ? "#a8a29e" : "#6366f1";

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 80 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ background: "rgba(12,10,9,0.95)", backdropFilter: "blur(20px) saturate(1.3)", border: "1px solid rgba(245,158,11,0.12)", borderRadius: 8, width: "100%", maxWidth: 580, maxHeight: "70vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {/* Input */}
        <div style={{ padding: "14px 18px", borderBottom: "1px solid rgba(245,158,11,0.06)", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: "#57534e", fontSize: 16 }}>⌕</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search categories, processes, KPIs..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              flex: 1, background: "transparent", border: "none", outline: "none",
              color: "#f5f0eb", fontSize: 15, fontFamily: "'Outfit', sans-serif"
            }}
          />
          <span onClick={onClose} style={{ color: "#57534e", cursor: "pointer", fontSize: 10, padding: "2px 8px", border: "1px solid rgba(120,113,108,0.2)", borderRadius: 3, fontFamily: "'JetBrains Mono', monospace" }}>ESC</span>
        </div>

        {/* Results */}
        <div style={{ overflowY: "auto", maxHeight: "calc(70vh - 60px)" }}>
          {query.length < 2 ? (
            <div style={{ padding: "24px 18px", textAlign: "center", color: "#57534e", fontSize: 13 }}>
              Type at least 2 characters to search across the entire framework.
            </div>
          ) : results.length === 0 ? (
            <div style={{ padding: "24px 18px", textAlign: "center", color: "#57534e", fontSize: 13 }}>
              No results for "{query}"
            </div>
          ) : (
            results.map((r, i) => (
              <div
                key={`${r.type}-${r.id}-${i}`}
                onClick={() => {
                  onNavigate(r.catId, r.grpId || null);
                  onClose();
                }}
                style={{
                  padding: "10px 18px", cursor: "pointer", transition: "background 0.15s",
                  borderBottom: "1px solid rgba(245,158,11,0.03)",
                  display: "flex", alignItems: "center", gap: 10
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(245,158,11,0.04)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <span style={{ color: r.color, fontSize: 14, width: 20, textAlign: "center", flexShrink: 0 }}>{r.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.label}</div>
                  <div style={{ fontSize: 10, color: typeColor(r.type) }}>{typeLabel(r.type)} · {r.catId}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
