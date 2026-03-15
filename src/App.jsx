import { useState, useEffect, useRef, useCallback } from "react";
import { CATEGORIES, VALUE_LOOPS, MATURITY_LEVELS, MATURITY_TARGETS, MATURITY_DIMENSIONS, IMPROVEMENT_ROADMAP, MATURITY_BAND_COLORS, TRANSLATION, INTEGRATION_FLOWS, FLOW_TYPES } from "./data.js";
import RadarChart from "./components/RadarChart.jsx";
import IntegrationMap from "./components/IntegrationMap.jsx";
import SearchBar from "./components/Search.jsx";

// Persistence helpers
const STORAGE_KEY = "ple-gps-assessment";
function saveAssessment(name, scores) {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    data[name] = { scores, updatedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) { console.warn("Save failed:", e); }
}
function loadAssessments() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { return {}; }
}
function exportAssessment(name, scores) {
  const blob = new Blob([JSON.stringify({ name, scores, exportedAt: new Date().toISOString(), framework: "PLE-GPS v1.0" }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `ple-gps-assessment-${name.replace(/\s+/g, "-").toLowerCase()}.json`;
  a.click(); URL.revokeObjectURL(url);
}

// Example assessment for new users
const EXAMPLE_SCORES = {
  "1.0|design":3,"1.0|performers":2,"1.0|owner":3,"1.0|infrastructure":2,"1.0|metrics":2,
  "2.0|design":2,"2.0|performers":2,"2.0|owner":2,"2.0|infrastructure":1,"2.0|metrics":1,
  "3.0|design":3,"3.0|performers":3,"3.0|owner":2,"3.0|infrastructure":3,"3.0|metrics":2,
  "4.0|design":4,"4.0|performers":3,"4.0|owner":4,"4.0|infrastructure":3,"4.0|metrics":3,
  "5.0|design":3,"5.0|performers":3,"5.0|owner":3,"5.0|infrastructure":2,"5.0|metrics":2,
  "6.0|design":2,"6.0|performers":2,"6.0|owner":1,"6.0|infrastructure":2,"6.0|metrics":1,
  "7.0|design":2,"7.0|performers":2,"7.0|owner":1,"7.0|infrastructure":1,"7.0|metrics":1,
  "8.0|design":4,"8.0|performers":3,"8.0|owner":4,"8.0|infrastructure":4,"8.0|metrics":3,
  "9.0|design":4,"9.0|performers":4,"9.0|owner":4,"9.0|infrastructure":3,"9.0|metrics":4,
  "10.0|design":2,"10.0|performers":2,"10.0|owner":2,"10.0|infrastructure":2,"10.0|metrics":1,
  "11.0|design":3,"11.0|performers":2,"11.0|owner":3,"11.0|infrastructure":2,"11.0|metrics":2,
  "12.0|design":2,"12.0|performers":2,"12.0|owner":1,"12.0|infrastructure":1,"12.0|metrics":1,
  "13.0|design":3,"13.0|performers":2,"13.0|owner":3,"13.0|infrastructure":2,"13.0|metrics":2,
  "14.0|design":1,"14.0|performers":1,"14.0|owner":1,"14.0|infrastructure":1,"14.0|metrics":1,
  "15.0|design":1,"15.0|performers":1,"15.0|owner":1,"15.0|infrastructure":1,"15.0|metrics":1,
  "16.0|design":2,"16.0|performers":1,"16.0|owner":2,"16.0|infrastructure":1,"16.0|metrics":1
};

function generateReport(name, scores, getCatAvgFn, getScoreFn, getGapFn, getGapLabelFn, getDimAvgFn, getOverallAvgFn) {
  const now = new Date().toISOString().split("T")[0];
  let md = `# PLE-GPS Maturity Assessment Report\n\n`;
  md += `**Assessment:** ${name}\n**Date:** ${now}\n**Framework:** PLE Governance Process Standard v1.0\n\n`;
  md += `---\n\n## Executive Summary\n\n`;
  const overall = getOverallAvgFn();
  const bc = MATURITY_BAND_COLORS[Math.round(overall)] || MATURITY_BAND_COLORS[0];
  md += `**Overall Institutional Maturity: ${overall.toFixed(1)} / 5.0 — ${bc.label}**\n\n`;

  // Domain summaries
  ["civic","support","ple"].forEach(d => {
    const dLabel = d === "civic" ? "Civic Operating" : d === "support" ? "Institutional Support" : "PLE-Specific";
    const cats = CATEGORIES.filter(c => c.domain === d);
    const avgs = cats.map(c => getCatAvgFn(c.id)).filter(v => v > 0);
    if (avgs.length > 0) {
      const domAvg = avgs.reduce((a,b) => a+b, 0) / avgs.length;
      md += `- **${dLabel}:** ${domAvg.toFixed(1)} (${avgs.length} categories scored)\n`;
    }
  });

  md += `\n### Dimension Averages\n\n`;
  MATURITY_DIMENSIONS.forEach(dim => {
    const avg = getDimAvgFn(dim.key);
    if (avg > 0) md += `- **${dim.label}:** ${avg.toFixed(1)}\n`;
  });

  md += `\n---\n\n## Category Detail\n\n`;
  CATEGORIES.forEach(c => {
    const avg = getCatAvgFn(c.id);
    if (avg === 0) { md += `### ${c.id} ${c.label}\n\n*Not yet scored.*\n\n`; return; }
    const target = MATURITY_TARGETS[c.id] || 3;
    const gap = getGapFn(c.id);
    const gi = getGapLabelFn(gap);
    md += `### ${c.id} ${c.label}\n\n`;
    md += `| Dimension | Score | Rubric |\n|-----------|-------|--------|\n`;
    MATURITY_DIMENSIONS.forEach(dim => {
      const s = getScoreFn(c.id, dim.key);
      md += `| ${dim.label} | ${s > 0 ? s : "—"} | ${s > 0 ? dim.rubric[s-1] : "Not scored"} |\n`;
    });
    md += `\n**Average:** ${avg.toFixed(1)} · **Target:** ${target} · **Gap:** ${gap !== null ? (gap > 0 ? `−${gap.toFixed(1)}` : `+${Math.abs(gap).toFixed(1)}`) : "—"} (${gi.label})\n\n`;
  });

  md += `---\n\n## Priority Improvements\n\n`;
  CATEGORIES
    .map(c => ({ ...c, avg: getCatAvgFn(c.id), gap: getGapFn(c.id) }))
    .filter(c => c.avg > 0 && c.gap !== null && c.gap > 0.25)
    .sort((a,b) => b.gap - a.gap)
    .forEach(c => {
      const impKey = `${Math.floor(c.avg)}→${Math.floor(c.avg)+1}`;
      const imp = IMPROVEMENT_ROADMAP[impKey];
      if (!imp) return;
      md += `#### ${c.id} ${c.label} (gap: −${c.gap.toFixed(1)})\n\n`;
      md += `**${imp.label}: ${imp.priority}**\n\n`;
      imp.actions.forEach((a,i) => { md += `${i+1}. ${a}\n`; });
      md += `\n`;
    });

  md += `---\n\n*Generated by PLE-GPS v1.0 — The Foundation for Global Progress*\n`;

  const blob = new Blob([md], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `ple-gps-report-${name.replace(/\s+/g, "-").toLowerCase()}-${now}.md`;
  a.click(); URL.revokeObjectURL(url);
}

function App() {
  const [view, setView] = useState("overview");
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [expandedLoop, setExpandedLoop] = useState(null);
  const [hoveredCat, setHoveredCat] = useState(null);
  const [animateIn, setAnimateIn] = useState(true);
  const [maturityScores, setMaturityScores] = useState({});
  const [maturityFocus, setMaturityFocus] = useState(null);
  const [maturityTab, setMaturityTab] = useState("assess");
  const [searchOpen, setSearchOpen] = useState(false);
  const [assessmentName, setAssessmentName] = useState("Default");
  const [showSaveMenu, setShowSaveMenu] = useState(false);
  const fileInputRef = useRef(null);
  const mainRef = useRef(null);

  // Load saved scores on mount
  useEffect(() => {
    const saved = loadAssessments();
    const names = Object.keys(saved);
    if (names.length > 0) {
      const last = names[names.length - 1];
      setAssessmentName(last);
      setMaturityScores(saved[last].scores || {});
    }
  }, []);

  // Auto-save on score change
  useEffect(() => {
    if (Object.keys(maturityScores).length > 0) {
      saveAssessment(assessmentName, maturityScores);
    }
  }, [maturityScores, assessmentName]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
      // Arrow key navigation on detail views
      if (view === "detail" && selectedCat && !searchOpen) {
        const idx = CATEGORIES.findIndex(c => c.id === selectedCat);
        if (e.key === "ArrowLeft" && idx > 0) {
          e.preventDefault();
          navigateTo("detail", CATEGORIES[idx - 1].id);
        }
        if (e.key === "ArrowRight" && idx < CATEGORIES.length - 1) {
          e.preventDefault();
          navigateTo("detail", CATEGORIES[idx + 1].id);
        }
        if (e.key === "Escape") {
          navigateTo("categories");
        }
      }
      if (view === "group" && selectedCat && selectedGroup && !searchOpen) {
        const c = CATEGORIES.find(x => x.id === selectedCat);
        if (c) {
          const gIdx = c.groups.findIndex(g => g.id === selectedGroup);
          if (e.key === "ArrowLeft" && gIdx > 0) {
            e.preventDefault();
            navigateTo("group", selectedCat, c.groups[gIdx - 1].id);
          }
          if (e.key === "ArrowRight" && gIdx < c.groups.length - 1) {
            e.preventDefault();
            navigateTo("group", selectedCat, c.groups[gIdx + 1].id);
          }
          if (e.key === "Escape") {
            navigateTo("detail", selectedCat);
          }
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [view, selectedCat, selectedGroup, searchOpen]);

  useEffect(() => {
    setAnimateIn(true);
    const t = setTimeout(() => setAnimateIn(false), 600);
    return () => clearTimeout(t);
  }, [view, selectedCat]);

  const navigateTo = (v, cat = null, grp = null) => {
    setAnimateIn(true);
    setTimeout(() => { setView(v); setSelectedCat(cat); setSelectedGroup(grp); if(mainRef.current) mainRef.current.scrollTop = 0; }, 50);
  };

  const cat = selectedCat ? CATEGORIES.find(c => c.id === selectedCat) : null;
  const grp = selectedGroup && cat ? cat.groups.find(g => g.id === selectedGroup) : null;

  const domainLabel = d => d === "civic" ? "Civic Operating" : d === "support" ? "Institutional Support" : "PLE-Specific";
  const domainColor = d => d === "civic" ? "#f59e0b" : d === "support" ? "#10b981" : "#ef4444";

  const setScore = useCallback((catId, dimKey, val) => {
    setMaturityScores(prev => {
      const key = `${catId}|${dimKey}`;
      const cur = prev[key];
      return { ...prev, [key]: cur === val ? 0 : val };
    });
  }, []);

  const getScore = (catId, dimKey) => maturityScores[`${catId}|${dimKey}`] || 0;

  const getCatAvg = (catId) => {
    const scores = MATURITY_DIMENSIONS.map(d => getScore(catId, d.key)).filter(s => s > 0);
    return scores.length === 0 ? 0 : scores.reduce((a, b) => a + b, 0) / scores.length;
  };

  const getDimAvg = (dimKey) => {
    const scores = CATEGORIES.map(c => getScore(c.id, dimKey)).filter(s => s > 0);
    return scores.length === 0 ? 0 : scores.reduce((a, b) => a + b, 0) / scores.length;
  };

  const getOverallAvg = () => {
    const allScores = Object.values(maturityScores).filter(s => s > 0);
    return allScores.length === 0 ? 0 : allScores.reduce((a, b) => a + b, 0) / allScores.length;
  };

  const getTotalScored = () => Object.values(maturityScores).filter(s => s > 0).length;
  const getTotalCells = () => CATEGORIES.length * MATURITY_DIMENSIONS.length;

  const getGap = (catId) => {
    const avg = getCatAvg(catId);
    const target = MATURITY_TARGETS[catId] || 3;
    return avg === 0 ? null : target - avg;
  };

  const getGapLabel = (gap) => {
    if (gap === null) return { label: "—", color: "#57534e" };
    if (gap <= -0.5) return { label: "Exceeds", color: "#8b5cf6" };
    if (gap <= 0.25) return { label: "On target", color: "#10b981" };
    if (gap <= 1) return { label: "Near gap", color: "#f59e0b" };
    return { label: "Critical gap", color: "#ef4444" };
  };

  const getImprovementKey = (current) => {
    const floor = Math.floor(current);
    if (floor < 1) return null;
    if (floor >= 5) return null;
    return `${floor}→${floor + 1}`;
  };

  const bandColor = (v) => MATURITY_BAND_COLORS[Math.round(v)] || MATURITY_BAND_COLORS[0];

  const getDomainAvg = (domain) => {
    const cats = CATEGORIES.filter(c => c.domain === domain);
    const avgs = cats.map(c => getCatAvg(c.id)).filter(v => v > 0);
    return avgs.length === 0 ? 0 : avgs.reduce((a, b) => a + b, 0) / avgs.length;
  };

  const handleGenerateReport = () => {
    generateReport(assessmentName, maturityScores, getCatAvg, getScore, getGap, getGapLabel, getDimAvg, getOverallAvg);
  };

  const handleLoadExample = () => {
    if (getTotalScored() > 0 && !confirm("This will replace your current scores with example data. Continue?")) return;
    setMaturityScores({ ...EXAMPLE_SCORES });
    setAssessmentName("Example Institution");
  };

  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.scores) {
          setMaturityScores(data.scores);
          if (data.name) setAssessmentName(data.name);
        }
      } catch (err) { alert("Invalid assessment file."); }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const handleSearchNavigate = (catId, grpId) => {
    if (grpId) navigateTo("group", catId, grpId);
    else navigateTo("detail", catId);
  };

  const getCatDimScores = (catId) => {
    const result = {};
    MATURITY_DIMENSIONS.forEach(d => { result[d.key] = getScore(catId, d.key); });
    return result;
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#0c0a09", color: "#f5f0eb",
      fontFamily: "'Outfit', 'DM Sans', sans-serif", fontSize: "14px", lineHeight: 1.6,
      position: "relative", overflow: "hidden"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(245,158,11,0.15); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(245,158,11,0.3); }
        .fade-in { animation: fadeIn 0.5s ease both; }
        .stagger-1 { animation-delay: 0.05s; }
        .stagger-2 { animation-delay: 0.1s; }
        .stagger-3 { animation-delay: 0.15s; }
        .stagger-4 { animation-delay: 0.2s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glowPulse { 0%,100% { box-shadow: 0 0 8px rgba(245,158,11,0.05); } 50% { box-shadow: 0 0 20px rgba(245,158,11,0.12); } }
        .cat-card { transition: all 0.25s ease; cursor: pointer; border: 1px solid rgba(245,158,11,0.06); }
        .cat-card:hover { border-color: rgba(245,158,11,0.2); transform: translateY(-2px); }
        .nav-pill { padding: 6px 14px; border-radius: 4px; cursor: pointer; transition: all 0.2s; font-size: 12px; font-weight: 500; letter-spacing: 0.02em; border: 1px solid transparent; }
        .nav-pill:hover { background: rgba(245,158,11,0.08); }
        .nav-pill.active { background: rgba(245,158,11,0.12); border-color: rgba(245,158,11,0.2); color: #f59e0b; }
        .group-row { padding: 14px 18px; border-bottom: 1px solid rgba(245,158,11,0.04); cursor: pointer; transition: all 0.2s; }
        .group-row:hover { background: rgba(245,158,11,0.04); }
        .kpi-tag { display: inline-block; padding: 3px 10px; margin: 3px; border-radius: 3px; font-size: 11px; font-family: 'JetBrains Mono', monospace; }
        .loop-card { border: 1px solid rgba(245,158,11,0.06); padding: 18px; border-radius: 6px; cursor: pointer; transition: all 0.2s; background: #141210; }
        .loop-card:hover { border-color: rgba(245,158,11,0.15); }
        .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #78716c; margin-bottom: 20px; flex-wrap: wrap; }
        .breadcrumb span { cursor: pointer; transition: color 0.2s; }
        .breadcrumb span:hover { color: #f59e0b; }
        .maturity-bar { display: flex; gap: 2px; margin: 4px 0; }
        .maturity-seg { height: 6px; flex: 1; border-radius: 2px; transition: all 0.3s; }
      `}</style>

      {/* Atmosphere */}
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0,
        background: "radial-gradient(ellipse at 15% 0%, rgba(245,158,11,0.03) 0%, transparent 55%), radial-gradient(ellipse at 85% 100%, rgba(99,102,241,0.02) 0%, transparent 55%), radial-gradient(ellipse at 50% 50%, rgba(236,72,153,0.01) 0%, transparent 60%)"
      }} />

      {/* Header */}
      <div style={{ position:"sticky", top:0, zIndex:100, background:"rgba(12,10,9,0.92)", backdropFilter:"blur(16px) saturate(1.3)", borderBottom:"1px solid rgba(245,158,11,0.06)", padding:"14px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:14 }}>
          <span style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:"22px", fontWeight:700, color:"#f59e0b", letterSpacing:"-0.01em" }}>PLE-GPS</span>
          <span style={{ fontSize:"11px", color:"#57534e", fontFamily:"'JetBrains Mono', monospace", letterSpacing:"0.04em" }}>GOVERNANCE PROCESS STANDARD v1.0</span>
        </div>
        <div style={{ display:"flex", gap:6, flexWrap:"wrap", alignItems:"center" }}>
          {[["overview","Framework"],["categories","Categories"],["integration","Integration Map"],["translation","Translation"],["loops","Value Loops"],["maturity","Maturity"]].map(([v,l]) => (
            <div key={v} className={`nav-pill ${view===v?"active":""}`} onClick={() => navigateTo(v)}>
              {l}
            </div>
          ))}
          <div className="nav-pill" onClick={() => setSearchOpen(true)} style={{ display:"flex", alignItems:"center", gap:5 }}>
            <span style={{ fontSize:13 }}>⌕</span>
            <span style={{ color:"#57534e", fontSize:10, fontFamily:"'JetBrains Mono', monospace" }}>⌘K</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={mainRef} style={{ maxWidth:1100, margin:"0 auto", padding:"28px 24px 60px", position:"relative", zIndex:1 }}>

        {/* OVERVIEW */}
        {view === "overview" && (
          <div className="fade-in">
            <div style={{ marginBottom:36 }}>
              <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:700, lineHeight:1.15, marginBottom:10, color:"#f5f0eb" }}>
                Post-Labor Economics<br/><span style={{ color:"#f59e0b" }}>Governance Process Standard</span>
              </h1>
              <p style={{ color:"#a8a29e", maxWidth:680, fontSize:15, lineHeight:1.7 }}>
                A universal process taxonomy for designing, operating, and improving governance institutions in a post-labor economic context. Adapted from the APQC Process Classification Framework — the world's most comprehensive organizational process standard — and extended with three new categories for algorithmic governance, human flourishing, and participatory democracy.
              </p>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))", gap:10, marginBottom:32 }}>
              {[
                { n:"16", l:"Process Categories", sub:"13 adapted + 3 new", view:"categories" },
                { n:"272", l:"L3 Processes", sub:"Across 78 process groups", view:"categories" },
                { n:"229", l:"KPIs Defined", sub:"Measurable performance indicators", view:"categories" },
                { n:"77", l:"Integration Flows", sub:"Cross-process dependencies", view:"integration" },
                { n:"5", l:"Maturity Levels", sub:"Founding → Flourishing", view:"maturity" }
              ].map((s,i) => (
                <div key={i} className={`fade-in stagger-${i+1}`}
                  onClick={() => navigateTo(s.view)}
                  style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:"20px 16px", cursor:"pointer", transition:"all 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,158,11,0.15)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,158,11,0.06)"}>
                  <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:32, fontWeight:700, color:"#f59e0b", lineHeight:1 }}>{s.n}</div>
                  <div style={{ fontSize:13, fontWeight:600, marginTop:4, color:"#f5f0eb" }}>{s.l}</div>
                  <div style={{ fontSize:11, color:"#78716c", marginTop:2 }}>{s.sub}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom:24 }}>
              <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:12, fontWeight:600 }}>Three Domains</div>
              {["civic","support","ple"].map(d => (
                <div key={d} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                  <div style={{ width:10, height:10, borderRadius:2, background: domainColor(d), opacity:0.8 }} />
                  <span style={{ fontSize:13, fontWeight:500 }}>{domainLabel(d)}</span>
                  <span style={{ fontSize:11, color:"#78716c" }}>
                    — {CATEGORIES.filter(c => c.domain === d).length} categories
                    {d === "ple" && <span style={{ color:"#ef4444", fontWeight:600 }}> (NEW)</span>}
                  </span>
                </div>
              ))}
            </div>

            {/* Assessment summary if scores exist */}
            {getTotalScored() > 0 && (
              <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.08)", borderRadius:6, padding:"16px 20px", marginBottom:20 }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12, marginBottom:14, cursor:"pointer" }}
                  onClick={() => navigateTo("maturity")}>
                  <div style={{ display:"flex", alignItems:"center", gap:16 }}>
                    <div>
                      <div style={{ fontSize:10, color:"#57534e", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:2 }}>Your Assessment</div>
                      <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:28, fontWeight:700, color: bandColor(getOverallAvg()).text, lineHeight:1 }}>{getOverallAvg().toFixed(1)}</div>
                      <div style={{ fontSize:11, color: bandColor(getOverallAvg()).text }}>{bandColor(getOverallAvg()).label}</div>
                    </div>
                    <div style={{ height:40, width:1, background:"rgba(245,158,11,0.06)" }} />
                    <div style={{ fontSize:12, color:"#78716c" }}>
                      <div>{getTotalScored()} of {getTotalCells()} cells scored ({Math.round(getTotalScored()/getTotalCells()*100)}%)</div>
                      <div>{CATEGORIES.filter(c => getGap(c.id) !== null && getGap(c.id) > 1).length} critical gaps</div>
                    </div>
                  </div>
                  <span style={{ fontSize:12, color:"#f59e0b", fontWeight:500 }}>Open Assessment →</span>
                </div>
                {/* Mini heatmap */}
                <div style={{ display:"grid", gridTemplateColumns:"repeat(16, 1fr)", gap:3 }}>
                  {CATEGORIES.map(c => {
                    const avg = getCatAvg(c.id);
                    const bc = avg > 0 ? bandColor(avg) : null;
                    return (
                      <div key={c.id}
                        onClick={() => navigateTo("detail", c.id)}
                        title={`${c.id} ${c.label}: ${avg > 0 ? avg.toFixed(1) : "Not scored"}`}
                        style={{
                          height:28, borderRadius:3, cursor:"pointer", transition:"all 0.15s",
                          display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
                          background: bc ? bc.bg : "rgba(120,113,108,0.04)",
                          border: `1px solid ${bc ? `${bc.text}20` : "rgba(120,113,108,0.06)"}`,
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.15)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                        <span style={{ fontSize:7, color: bc ? bc.text : "#57534e", fontFamily:"'JetBrains Mono', monospace", fontWeight:600 }}>
                          {avg > 0 ? avg.toFixed(1) : "—"}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div style={{ display:"flex", justifyContent:"space-between", marginTop:4 }}>
                  <span style={{ fontSize:8, color:"#57534e", fontFamily:"'JetBrains Mono', monospace" }}>1.0</span>
                  <span style={{ fontSize:8, color:"#57534e" }}>← Civic · Support · PLE →</span>
                  <span style={{ fontSize:8, color:"#57534e", fontFamily:"'JetBrains Mono', monospace" }}>16.0</span>
                </div>
              </div>
            )}

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(310px, 1fr))", gap:10 }}>
              {CATEGORIES.map((c,i) => (
                <div key={c.id}
                  className={`cat-card fade-in stagger-${(i%4)+1}`}
                  onClick={() => navigateTo("detail", c.id)}
                  onMouseEnter={() => setHoveredCat(c.id)}
                  onMouseLeave={() => setHoveredCat(null)}
                  style={{
                    background: hoveredCat === c.id ? "rgba(20,18,16,0.95)" : "#141210",
                    borderRadius: 6, padding: "16px 18px",
                    borderLeftWidth: 3, borderLeftStyle: "solid", borderLeftColor: c.color
                  }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <span style={{ fontSize:18, color: c.color, opacity:0.9 }}>{c.icon}</span>
                      <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:12, color:"#78716c" }}>{c.id}</span>
                    </div>
                    <div style={{ display:"flex", gap:4, alignItems:"center" }}>
                      {getCatAvg(c.id) > 0 && (() => {
                        const avg = getCatAvg(c.id);
                        const bc = bandColor(avg);
                        return <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:10, padding:"2px 6px", borderRadius:3, background: bc.bg, color: bc.text, fontWeight:600 }}>{avg.toFixed(1)}</span>;
                      })()}
                      {c.domain === "ple" && <span style={{ fontSize:9, padding:"2px 7px", borderRadius:3, background:"rgba(239,68,68,0.12)", color:"#ef4444", fontWeight:600, letterSpacing:"0.05em" }}>NEW</span>}
                    </div>
                  </div>
                  <div style={{ fontSize:14, fontWeight:600, marginBottom:4, lineHeight:1.3 }}>{c.label}</div>
                  <div style={{ fontSize:11, color:"#78716c", display:"flex", gap:8 }}>
                    <span>{c.groups.length} groups</span>
                    <span style={{ color:"#363230" }}>·</span>
                    <span>{c.groups.reduce((s,g) => s+(g.processes?.length||0), 0)} processes</span>
                    {c.groups.reduce((s,g) => s+(g.kpis?.length||0), 0) > 0 && <>
                      <span style={{ color:"#363230" }}>·</span>
                      <span>{c.groups.reduce((s,g) => s+(g.kpis?.length||0), 0)} KPIs</span>
                    </>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CATEGORIES LIST */}
        {view === "categories" && (
          <div className="fade-in">
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:28, fontWeight:700, marginBottom:20 }}>All 16 Categories</h2>
            {["civic","support","ple"].map(domain => (
              <div key={domain} style={{ marginBottom:28 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
                  <div style={{ width:8, height:8, borderRadius:2, background: domainColor(domain) }} />
                  <span style={{ fontSize:11, color: domainColor(domain), letterSpacing:"0.08em", textTransform:"uppercase", fontWeight:600 }}>
                    {domainLabel(domain)} {domain === "ple" ? "— New to PLE-GPS" : "Processes"}
                  </span>
                </div>
                {CATEGORIES.filter(c => c.domain === domain).map(c => {
                  const avg = getCatAvg(c.id);
                  const bc = avg > 0 ? bandColor(avg) : null;
                  return (
                    <div key={c.id} className="group-row" onClick={() => navigateTo("detail", c.id)}
                      style={{ display:"flex", alignItems:"center", gap:14, borderRadius:4 }}>
                      <span style={{ fontSize:18, color: c.color, width:28, textAlign:"center" }}>{c.icon}</span>
                      <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:12, color:"#57534e", width:40 }}>{c.id}</span>
                      <span style={{ fontWeight:500, flex:1 }}>{c.label}</span>
                      {bc && <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:11, padding:"2px 8px", borderRadius:3, background: bc.bg, color: bc.text, fontWeight:600 }}>{avg.toFixed(1)}</span>}
                      <span style={{ fontSize:11, color:"#57534e", minWidth:100, textAlign:"right" }}>
                        {c.groups.length}g · {c.groups.reduce((s,g) => s+(g.processes?.length||0), 0)}p →
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {/* CATEGORY DETAIL */}
        {view === "detail" && cat && !grp && (() => {
          const catIdx = CATEGORIES.findIndex(c => c.id === cat.id);
          const prevCat = catIdx > 0 ? CATEGORIES[catIdx - 1] : null;
          const nextCat = catIdx < CATEGORIES.length - 1 ? CATEGORIES[catIdx + 1] : null;
          return (
          <div className="fade-in">
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
              <div className="breadcrumb" style={{ marginBottom:0 }}>
                <span onClick={() => navigateTo("overview")}>PLE-GPS</span>
                <span style={{ color:"#57534e" }}>/</span>
                <span style={{ color:"#f5f0eb" }}>{cat.id} {cat.label}</span>
              </div>
              <div style={{ display:"flex", gap:4, alignItems:"center" }}>
                {prevCat && (
                  <span onClick={() => navigateTo("detail", prevCat.id)} style={{ cursor:"pointer", padding:"4px 10px", borderRadius:4, background:"rgba(120,113,108,0.06)", color:"#78716c", fontSize:11, display:"flex", alignItems:"center", gap:4, transition:"all 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(245,158,11,0.08)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(120,113,108,0.06)"}>
                    ← {prevCat.id}
                  </span>
                )}
                {nextCat && (
                  <span onClick={() => navigateTo("detail", nextCat.id)} style={{ cursor:"pointer", padding:"4px 10px", borderRadius:4, background:"rgba(120,113,108,0.06)", color:"#78716c", fontSize:11, display:"flex", alignItems:"center", gap:4, transition:"all 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(245,158,11,0.08)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(120,113,108,0.06)"}>
                    {nextCat.id} →
                  </span>
                )}
              </div>
            </div>

            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:16 }}>
              <span style={{ fontSize:36, color: cat.color }}>{cat.icon}</span>
              <div>
                <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:12, color: cat.color }}>{cat.id}</div>
                <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:28, fontWeight:700, lineHeight:1.2 }}>{cat.label}</h2>
              </div>
            </div>

            <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap" }}>
              <span style={{ fontSize:10, padding:"3px 10px", borderRadius:3, background:`${domainColor(cat.domain)}15`, color: domainColor(cat.domain), fontWeight:600, letterSpacing:"0.04em", textTransform:"uppercase" }}>{domainLabel(cat.domain)}</span>
              {cat.domain === "ple" && <span style={{ fontSize:10, padding:"3px 10px", borderRadius:3, background:"rgba(239,68,68,0.1)", color:"#ef4444", fontWeight:600 }}>NEW CATEGORY</span>}
              <span style={{ fontSize:10, padding:"3px 10px", borderRadius:3, background:"rgba(120,113,108,0.08)", color:"#78716c", fontWeight:500 }}>
                {cat.groups.reduce((s,g) => s+(g.processes?.length||0), 0)} processes
              </span>
              <span style={{ fontSize:10, padding:"3px 10px", borderRadius:3, background:"rgba(99,102,241,0.08)", color:"#818cf8", fontWeight:500 }}>
                {cat.groups.reduce((s,g) => s+(g.kpis?.length||0), 0)} KPIs
              </span>
            </div>

            {/* Origin and Delta */}
            <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:18, marginBottom:16 }}>
              <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:6 }}>PCF Origin</div>
              <div style={{ fontSize:13, color:"#a8a29e", marginBottom:12 }}>{cat.origin}</div>
              <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:6 }}>What Changes in Post-Labor Context</div>
              <div style={{ fontSize:13, color:"#f5f0eb", lineHeight:1.7 }}>{cat.delta}</div>
            </div>

            {/* Maturity + Integration side-by-side */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
              {/* Maturity snapshot */}
              <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:16 }}>
                <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:10 }}>Maturity Snapshot</div>
                {getCatAvg(cat.id) > 0 ? (
                  <div style={{ display:"flex", alignItems:"center", gap:16 }}>
                    <div style={{ flexShrink:0, width:120 }}>
                      <RadarChart scores={getCatDimScores(cat.id)} targetScores={(() => { const t = {}; MATURITY_DIMENSIONS.forEach(d => { t[d.key] = MATURITY_TARGETS[cat.id] || 3; }); return t; })()} />
                    </div>
                    <div>
                      <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:24, fontWeight:700, color: bandColor(getCatAvg(cat.id)).text }}>{getCatAvg(cat.id).toFixed(1)}</div>
                      <div style={{ fontSize:11, color: bandColor(getCatAvg(cat.id)).text, marginBottom:6 }}>{bandColor(getCatAvg(cat.id)).label}</div>
                      <div style={{ fontSize:11, color:"#78716c" }}>Target: {MATURITY_TARGETS[cat.id] || 3}</div>
                      {(() => { const g = getGap(cat.id); const gi = getGapLabel(g); return g !== null ? <div style={{ fontSize:11, color: gi.color, marginTop:2, fontWeight:600 }}>{gi.label} ({g > 0 ? `−${g.toFixed(1)}` : `+${Math.abs(g).toFixed(1)}`})</div> : null; })()}
                    </div>
                  </div>
                ) : (
                  <div style={{ fontSize:12, color:"#57534e", padding:"12px 0" }}>
                    Not yet scored. <span style={{ color:"#f59e0b", cursor:"pointer", textDecoration:"underline" }} onClick={() => navigateTo("maturity")}>Score in Maturity tab →</span>
                  </div>
                )}
              </div>

              {/* Integration triggers */}
              <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:16 }}>
                <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:10 }}>Integration Triggers</div>
                {(() => {
                  const catPrefix = cat.id.split(".")[0];
                  const inbound = INTEGRATION_FLOWS.filter(f => { const to = f.to === "ALL" ? null : f.to.split(".")[0]; return to === catPrefix || f.to === "ALL"; });
                  const outbound = INTEGRATION_FLOWS.filter(f => f.from.split(".")[0] === catPrefix);
                  return (
                    <div style={{ fontSize:12 }}>
                      {outbound.length > 0 && (
                        <div style={{ marginBottom:8 }}>
                          <div style={{ fontSize:10, color:"#78716c", marginBottom:4 }}>Outbound ({outbound.length})</div>
                          {outbound.map((f, i) => (
                            <div key={i} style={{ display:"flex", alignItems:"center", gap:6, padding:"2px 0", color:"#a8a29e" }}>
                              <div style={{ width:5, height:5, borderRadius:"50%", background: FLOW_TYPES[f.type]?.color || "#78716c", flexShrink:0 }} />
                              <span>→ {f.to === "ALL" ? "All" : f.to}</span>
                              <span style={{ color:"#57534e" }}>{f.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {inbound.length > 0 && (
                        <div>
                          <div style={{ fontSize:10, color:"#78716c", marginBottom:4 }}>Inbound ({inbound.length})</div>
                          {inbound.slice(0, 5).map((f, i) => (
                            <div key={i} style={{ display:"flex", alignItems:"center", gap:6, padding:"2px 0", color:"#a8a29e" }}>
                              <div style={{ width:5, height:5, borderRadius:"50%", background: FLOW_TYPES[f.type]?.color || "#78716c", flexShrink:0 }} />
                              <span>{f.from} →</span>
                              <span style={{ color:"#57534e" }}>{f.label}</span>
                            </div>
                          ))}
                          {inbound.length > 5 && <div style={{ color:"#57534e", fontSize:11, cursor:"pointer" }} onClick={() => navigateTo("integration")}>+{inbound.length - 5} more → view map</div>}
                        </div>
                      )}
                      {inbound.length === 0 && outbound.length === 0 && <div style={{ color:"#57534e" }}>No direct integration flows mapped yet.</div>}
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Process Groups */}
            <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.08em", textTransform:"uppercase", fontWeight:600, marginBottom:10, marginTop:24 }}>Process Groups ({cat.groups.length})</div>
            {cat.groups.map((g, i) => (
              <div key={g.id} className={`fade-in stagger-${(i%4)+1}`}
                style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, marginBottom:8, overflow:"hidden", cursor:"pointer", transition:"all 0.2s" }}
                onClick={() => navigateTo("group", cat.id, g.id)}>
                <div style={{ padding:"14px 18px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:12, color: cat.color, fontWeight:500 }}>{g.id}</span>
                    <span style={{ fontWeight:500, fontSize:14 }}>{g.label}</span>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ color:"#57534e", fontSize:10, fontFamily:"'JetBrains Mono', monospace" }}>{(g.processes?.length || 0)}p</span>
                    <span style={{ color:"#57534e", fontSize:12 }}>→</span>
                  </div>
                </div>
                {g.purpose && <div style={{ padding:"0 18px 14px", fontSize:12, color:"#78716c", lineHeight:1.6 }}>{g.purpose}</div>}
                {g.kpis && g.kpis.length > 0 && (
                  <div style={{ padding:"0 18px 14px", display:"flex", flexWrap:"wrap" }}>
                    {g.kpis.slice(0,3).map((k,j) => (
                      <span key={j} className="kpi-tag" style={{ background:"rgba(99,102,241,0.08)", color:"#818cf8" }}>{k}</span>
                    ))}
                    {g.kpis.length > 3 && <span className="kpi-tag" style={{ background:"rgba(120,113,108,0.1)", color:"#78716c" }}>+{g.kpis.length - 3} more</span>}
                  </div>
                )}
              </div>
            ))}

            {/* Position indicator and keyboard hint */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:20, paddingTop:14, borderTop:"1px solid rgba(245,158,11,0.04)" }}>
              <div style={{ display:"flex", gap:3 }}>
                {CATEGORIES.map((c, i) => (
                  <div key={c.id}
                    onClick={() => navigateTo("detail", c.id)}
                    style={{
                      width: c.id === cat.id ? 20 : 8, height:8, borderRadius:4, cursor:"pointer",
                      background: c.id === cat.id ? cat.color : "rgba(120,113,108,0.15)",
                      transition:"all 0.2s"
                    }}
                    title={c.id + " " + c.label} />
                ))}
              </div>
              <div style={{ fontSize:10, color:"#57534e", display:"flex", gap:12 }}>
                <span>← → Navigate categories</span>
                <span>Esc → Back</span>
              </div>
            </div>
          </div>
        );})()}

        {/* GROUP DETAIL */}
        {view === "group" && cat && grp && (() => {
          const grpIdx = cat.groups.findIndex(g => g.id === grp.id);
          const prevGrp = grpIdx > 0 ? cat.groups[grpIdx - 1] : null;
          const nextGrp = grpIdx < cat.groups.length - 1 ? cat.groups[grpIdx + 1] : null;
          return (
          <div className="fade-in">
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
              <div className="breadcrumb" style={{ marginBottom:0 }}>
                <span onClick={() => navigateTo("overview")}>PLE-GPS</span>
                <span style={{ color:"#57534e" }}>/</span>
                <span onClick={() => navigateTo("detail", cat.id)}>{cat.id} {cat.label}</span>
                <span style={{ color:"#57534e" }}>/</span>
                <span style={{ color:"#f5f0eb" }}>{grp.id} {grp.label}</span>
              </div>
              <div style={{ display:"flex", gap:4, alignItems:"center" }}>
                {prevGrp && (
                  <span onClick={() => navigateTo("group", cat.id, prevGrp.id)} style={{ cursor:"pointer", padding:"4px 10px", borderRadius:4, background:"rgba(120,113,108,0.06)", color:"#78716c", fontSize:11, transition:"all 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(245,158,11,0.08)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(120,113,108,0.06)"}>
                    ← {prevGrp.id}
                  </span>
                )}
                {nextGrp && (
                  <span onClick={() => navigateTo("group", cat.id, nextGrp.id)} style={{ cursor:"pointer", padding:"4px 10px", borderRadius:4, background:"rgba(120,113,108,0.06)", color:"#78716c", fontSize:11, transition:"all 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(245,158,11,0.08)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(120,113,108,0.06)"}>
                    {nextGrp.id} →
                  </span>
                )}
              </div>
            </div>

            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
              <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:14, color: cat.color, fontWeight:600 }}>{grp.id}</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:26, fontWeight:700 }}>{grp.label}</h2>
            </div>

            {grp.purpose && <p style={{ color:"#a8a29e", fontSize:14, lineHeight:1.7, marginBottom:12, maxWidth:700 }}>{grp.purpose}</p>}

            {/* Category maturity context */}
            {getCatAvg(cat.id) > 0 && (() => {
              const avg = getCatAvg(cat.id);
              const bc = bandColor(avg);
              return (
                <div style={{ display:"inline-flex", alignItems:"center", gap:8, background: bc.bg, borderRadius:4, padding:"6px 12px", marginBottom:20, fontSize:12 }}>
                  <span style={{ color: bc.text, fontWeight:600 }}>Category maturity: {avg.toFixed(1)}</span>
                  <span style={{ color:"#57534e" }}>·</span>
                  <span style={{ color: bc.text }}>{bc.label}</span>
                  <span style={{ color:"#57534e" }}>·</span>
                  <span style={{ color:"#78716c" }}>Target: {MATURITY_TARGETS[cat.id] || 3}</span>
                </div>
              );
            })()}

            {grp.processes && grp.processes.length > 0 && (
              <div style={{ marginBottom:24 }}>
                <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.08em", textTransform:"uppercase", fontWeight:600, marginBottom:10 }}>L3 Processes</div>
                {grp.processes.map((p, i) => (
                  <div key={p.id} className={`fade-in stagger-${(i%4)+1}`} style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.04)", borderRadius:6, marginBottom:6, padding:"14px 18px" }}>
                    <div style={{ display:"flex", alignItems:"flex-start", gap:10, marginBottom: p.activities.length > 0 ? 10 : 0 }}>
                      <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:11, color: cat.color, fontWeight:500, flexShrink:0, paddingTop:1 }}>{p.id}</span>
                      <span style={{ fontSize:13, fontWeight:500 }}>{p.label}</span>
                    </div>
                    {p.activities.length > 0 && (
                      <div style={{ marginLeft:42 }}>
                        <div style={{ fontSize:10, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:6 }}>L4 Activities</div>
                        {p.activities.map((a, j) => (
                          <div key={j} style={{ fontSize:12, color:"#a8a29e", padding:"3px 0", display:"flex", gap:8, lineHeight:1.5 }}>
                            <span style={{ color:"#57534e", flexShrink:0 }}>·</span>
                            <span>{a}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {grp.kpis && grp.kpis.length > 0 && (
              <div>
                <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.08em", textTransform:"uppercase", fontWeight:600, marginBottom:10 }}>Key Performance Indicators</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                  {grp.kpis.map((k, i) => (
                    <span key={i} className="kpi-tag" style={{ background:"rgba(99,102,241,0.08)", color:"#818cf8", fontSize:12, padding:"5px 12px" }}>{k}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Keyboard hint */}
            <div style={{ marginTop:20, fontSize:10, color:"#57534e", display:"flex", gap:12 }}>
              <span>← → Navigate groups</span>
              <span>Esc → Back to category</span>
            </div>
          </div>
        );})()}

        {/* TRANSLATION TABLE */}
        {view === "translation" && (
          <div className="fade-in">
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:28, fontWeight:700, marginBottom:6 }}>Translation Key</h2>
            <p style={{ color:"#a8a29e", marginBottom:24, fontSize:14 }}>How enterprise concepts transform in a post-labor governance context.</p>
            <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, overflow:"hidden" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", background:"#1c1917", padding:"10px 18px", fontSize:11, color:"#78716c", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, borderBottom:"1px solid rgba(245,158,11,0.06)" }}>
                <span>Enterprise Concept</span>
                <span>PLE Equivalent</span>
              </div>
              {TRANSLATION.map(([from, to], i) => (
                <div key={i} className={`fade-in stagger-${(i%4)+1}`} style={{ display:"grid", gridTemplateColumns:"1fr 1fr", padding:"12px 18px", borderBottom: i < TRANSLATION.length - 1 ? "1px solid rgba(245,158,11,0.04)" : "none", transition:"background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(245,158,11,0.03)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <span style={{ color:"#78716c", fontSize:13, textDecoration:"line-through", textDecorationColor:"rgba(120,113,108,0.4)" }}>{from}</span>
                  <span style={{ color:"#f5f0eb", fontSize:13, fontWeight:500 }}>{to}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTEGRATION MAP */}
        {view === "integration" && (
          <div className="fade-in">
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:28, fontWeight:700, marginBottom:6 }}>Cross-Process Integration Map</h2>
            <p style={{ color:"#a8a29e", marginBottom:20, fontSize:14, maxWidth:620 }}>77 cross-process flows connecting all 16 categories — governance cascades, operational triggers, data feeds, feedback loops, and shared resources. Every significant handoff, dependency, and data flow between process domains. No process exists in isolation.</p>
            <IntegrationMap onCategoryClick={(id) => navigateTo("detail", id)} />
          </div>
        )}

        {/* VALUE LOOPS */}
        {view === "loops" && (
          <div className="fade-in">
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:28, fontWeight:700, marginBottom:6 }}>Value Loops</h2>
            <p style={{ color:"#a8a29e", marginBottom:24, fontSize:14 }}>The circular feedback systems that make PLE institutions self-improving. Each loop shows how outputs from one process feed back as inputs to improve the system.</p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))", gap:12 }}>
              {VALUE_LOOPS.map((loop, i) => (
                <div key={i} className={`loop-card fade-in stagger-${(i%4)+1}`}
                  style={{ borderLeftWidth:3, borderLeftStyle:"solid", borderLeftColor: loop.color }}
                  onClick={() => setExpandedLoop(expandedLoop === i ? null : i)}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom: expandedLoop === i ? 14 : 0 }}>
                    <div>
                      <div style={{ fontSize:10, color: loop.color, letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:2 }}>Loop {i+1}</div>
                      <div style={{ fontSize:15, fontWeight:600 }}>{loop.name}</div>
                    </div>
                    <span style={{ color:"#57534e", fontSize:16, transition:"transform 0.2s", transform: expandedLoop === i ? "rotate(90deg)" : "none" }}>›</span>
                  </div>
                  {expandedLoop === i && (
                    <div style={{ position:"relative", paddingLeft:16 }}>
                      <div style={{ position:"absolute", left:4, top:4, bottom:4, width:2, background:`${loop.color}25`, borderRadius:1 }} />
                      {loop.steps.map((step, j) => (
                        <div key={j} style={{ position:"relative", padding:"6px 0 6px 12px", fontSize:13, color: j === 0 || j === loop.steps.length - 1 ? "#f5f0eb" : "#a8a29e" }}>
                          <div style={{ position:"absolute", left:-2, top:"50%", transform:"translateY(-50%)", width:8, height:8, borderRadius:"50%", background: loop.color, opacity: j === 0 ? 1 : 0.4 }} />
                          {step}
                          {j < loop.steps.length - 1 && <span style={{ color:"#57534e", marginLeft:6, fontSize:11 }}>↓</span>}
                        </div>
                      ))}
                      <div style={{ fontSize:11, color: loop.color, marginTop:6, fontStyle:"italic", paddingLeft:12 }}>↻ Cycle repeats</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MATURITY ASSESSMENT TOOL */}
        {view === "maturity" && (
          <div className="fade-in">
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16, flexWrap:"wrap", gap:12 }}>
              <div>
                <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:28, fontWeight:700, marginBottom:4 }}>Maturity Assessment</h2>
                <p style={{ color:"#a8a29e", fontSize:13, maxWidth:520 }}>Score your institution across 5 dimensions for each of the 16 process categories. Click cells to rate 1–5. The tool computes gaps against recommended targets and generates improvement priorities.</p>
              </div>
              {getTotalScored() > 0 ? (
                <div style={{ display:"flex", gap:6, flexWrap:"wrap", alignItems:"center" }}>
                  <input
                    value={assessmentName}
                    onChange={e => setAssessmentName(e.target.value)}
                    style={{ background:"rgba(120,113,108,0.08)", border:"1px solid rgba(245,158,11,0.1)", borderRadius:4, padding:"5px 10px", color:"#f5f0eb", fontSize:11, fontFamily:"'Outfit', sans-serif", width:140, outline:"none" }}
                    placeholder="Assessment name"
                  />
                  <button onClick={handleGenerateReport}
                    style={{ background:"rgba(245,158,11,0.08)", border:"1px solid rgba(245,158,11,0.2)", borderRadius:4, padding:"5px 12px", color:"#f59e0b", fontSize:11, fontWeight:600, cursor:"pointer" }}>
                    Report ↓
                  </button>
                  <button onClick={() => exportAssessment(assessmentName, maturityScores)}
                    style={{ background:"rgba(16,185,129,0.08)", border:"1px solid rgba(16,185,129,0.2)", borderRadius:4, padding:"5px 12px", color:"#10b981", fontSize:11, fontWeight:600, cursor:"pointer" }}>
                    Export
                  </button>
                  <button onClick={() => fileInputRef.current?.click()}
                    style={{ background:"rgba(99,102,241,0.08)", border:"1px solid rgba(99,102,241,0.2)", borderRadius:4, padding:"5px 12px", color:"#6366f1", fontSize:11, fontWeight:600, cursor:"pointer" }}>
                    Import
                  </button>
                  <button onClick={() => { setMaturityScores({}); setMaturityFocus(null); }}
                    style={{ background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.2)", borderRadius:4, padding:"5px 12px", color:"#ef4444", fontSize:11, fontWeight:600, cursor:"pointer" }}>
                    Reset
                  </button>
                </div>
              ) : (
                <button onClick={handleLoadExample}
                  style={{ background:"rgba(245,158,11,0.08)", border:"1px solid rgba(245,158,11,0.2)", borderRadius:4, padding:"6px 14px", color:"#f59e0b", fontSize:11, fontWeight:600, cursor:"pointer", letterSpacing:"0.03em" }}>
                  Load Example Assessment
                </button>
              )}
            </div>

            {/* Sub-navigation */}
            <div style={{ display:"flex", gap:4, marginBottom:20, borderBottom:"1px solid rgba(245,158,11,0.06)", paddingBottom:10, flexWrap:"wrap" }}>
              {[["assess","Assessment Grid"],["visual","Visual Profile"],["gaps","Gap Analysis"],["roadmap","Improvement Roadmap"],["reference","Level Reference"]].map(([k,l]) => (
                <div key={k} onClick={() => setMaturityTab(k)} className={`nav-pill ${maturityTab === k ? "active" : ""}`}>{l}</div>
              ))}
            </div>

            {/* Summary bar */}
            {getTotalScored() > 0 && (
              <div className="fade-in" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))", gap:8, marginBottom:20 }}>
                <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:"12px 14px" }}>
                  <div style={{ fontSize:10, color:"#57534e", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:4 }}>Overall Score</div>
                  <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:28, fontWeight:700, color: bandColor(getOverallAvg()).text }}>{getOverallAvg().toFixed(1)}</div>
                  <div style={{ fontSize:11, color: bandColor(getOverallAvg()).text }}>{bandColor(getOverallAvg()).label}</div>
                </div>
                <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:"12px 14px" }}>
                  <div style={{ fontSize:10, color:"#57534e", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:4 }}>Cells Scored</div>
                  <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:28, fontWeight:700, color:"#f5f0eb" }}>{getTotalScored()}<span style={{ fontSize:14, color:"#57534e" }}>/{getTotalCells()}</span></div>
                  <div style={{ fontSize:11, color:"#78716c" }}>{Math.round(getTotalScored()/getTotalCells()*100)}% complete</div>
                </div>
                <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:"12px 14px" }}>
                  <div style={{ fontSize:10, color:"#57534e", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:4 }}>Critical Gaps</div>
                  <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:28, fontWeight:700, color:"#ef4444" }}>
                    {CATEGORIES.filter(c => { const g = getGap(c.id); return g !== null && g > 1; }).length}
                  </div>
                  <div style={{ fontSize:11, color:"#78716c" }}>categories &gt;1 below target</div>
                </div>
                <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:"12px 14px" }}>
                  <div style={{ fontSize:10, color:"#57534e", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:4 }}>Weakest Dimension</div>
                  {(() => {
                    const dims = MATURITY_DIMENSIONS.map(d => ({ ...d, avg: getDimAvg(d.key) })).filter(d => d.avg > 0);
                    const weakest = dims.length > 0 ? dims.reduce((a, b) => a.avg < b.avg ? a : b) : null;
                    return weakest ? (
                      <>
                        <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:20, fontWeight:700, color: bandColor(weakest.avg).text }}>{weakest.label}</div>
                        <div style={{ fontSize:11, color:"#78716c" }}>avg {weakest.avg.toFixed(1)}</div>
                      </>
                    ) : <div style={{ fontSize:13, color:"#57534e" }}>—</div>;
                  })()}
                </div>
              </div>
            )}

            {/* Domain summaries */}
            {getTotalScored() > 0 && (
              <div className="fade-in" style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:8, marginBottom:20 }}>
                {[["civic","Civic Operating"],["support","Institutional Support"],["ple","PLE-Specific"]].map(([d, label]) => {
                  const avg = getDomainAvg(d);
                  const bc = bandColor(avg);
                  const scoredCount = CATEGORIES.filter(c => c.domain === d && getCatAvg(c.id) > 0).length;
                  const totalCount = CATEGORIES.filter(c => c.domain === d).length;
                  return (
                    <div key={d} style={{ background:"#141210", border:`1px solid ${domainColor(d)}15`, borderRadius:6, padding:"12px 14px", borderLeftWidth:3, borderLeftStyle:"solid", borderLeftColor: domainColor(d) }}>
                      <div style={{ fontSize:10, color: domainColor(d), textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:600, marginBottom:4 }}>{label}</div>
                      {avg > 0 ? (
                        <>
                          <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:24, fontWeight:700, color: bc.text, lineHeight:1.1 }}>{avg.toFixed(1)}</div>
                          <div style={{ fontSize:10, color:"#78716c", marginTop:2 }}>{scoredCount}/{totalCount} categories scored</div>
                        </>
                      ) : <div style={{ fontSize:12, color:"#57534e" }}>Not scored</div>}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Radar charts when scores exist */}
            {getTotalScored() >= MATURITY_DIMENSIONS.length && (
              <div className="fade-in" style={{ display:"flex", gap:16, marginBottom:20, flexWrap:"wrap", justifyContent:"center" }}>
                <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:"16px 20px" }}>
                  <div style={{ fontSize:10, color:"#57534e", textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:600, marginBottom:8, textAlign:"center" }}>Institutional Profile</div>
                  <RadarChart
                    scores={(() => {
                      const avg = {};
                      MATURITY_DIMENSIONS.forEach(d => { avg[d.key] = getDimAvg(d.key); });
                      return avg;
                    })()}
                    label="Average across all categories"
                  />
                </div>
                {maturityFocus && (() => {
                  const fc = CATEGORIES.find(c => c.id === maturityFocus);
                  if (!fc) return null;
                  const scores = getCatDimScores(fc.id);
                  if (!Object.values(scores).some(v => v > 0)) return null;
                  const target = MATURITY_TARGETS[fc.id] || 3;
                  const targetScores = {};
                  MATURITY_DIMENSIONS.forEach(d => { targetScores[d.key] = target; });
                  return (
                    <div style={{ background:"#141210", border:`1px solid ${fc.color}20`, borderRadius:6, padding:"16px 20px" }}>
                      <div style={{ fontSize:10, color: fc.color, textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:600, marginBottom:8, textAlign:"center" }}>
                        {fc.icon} {fc.id} {fc.label}
                      </div>
                      <RadarChart scores={scores} targetScores={targetScores} label={`Target: ${target} (dashed)`} />
                    </div>
                  );
                })()}
              </div>
            )}

            {/* TAB: Assessment Grid */}
            {maturityTab === "assess" && (
              <div className="fade-in">
                {/* Heatmap header */}
                <div style={{ overflowX:"auto", paddingBottom:8 }}>
                <div style={{ minWidth:680 }}>
                  <div style={{ display:"grid", gridTemplateColumns:"200px repeat(5, 1fr) 60px", gap:2, marginBottom:2 }}>
                    <div style={{ fontSize:10, color:"#57534e", padding:"4px 8px" }} />
                    {MATURITY_DIMENSIONS.map(d => (
                      <div key={d.key} style={{ fontSize:10, color:"#78716c", textAlign:"center", padding:"4px 2px", letterSpacing:"0.04em", fontWeight:600 }} title={d.desc}>
                        {d.label}
                      </div>
                    ))}
                    <div style={{ fontSize:10, color:"#78716c", textAlign:"center", padding:"4px 2px", fontWeight:600 }}>Avg</div>
                  </div>

                  {/* Category rows */}
                  {CATEGORIES.map((c) => {
                    const avg = getCatAvg(c.id);
                    const gap = getGap(c.id);
                    const gapInfo = getGapLabel(gap);
                    return (
                      <div key={c.id} style={{ display:"grid", gridTemplateColumns:"200px repeat(5, 1fr) 60px", gap:2, marginBottom:2 }}>
                        {/* Category label */}
                        <div style={{
                          display:"flex", alignItems:"center", gap:6, padding:"6px 8px", fontSize:12,
                          background: maturityFocus === c.id ? "rgba(245,158,11,0.06)" : "transparent",
                          borderRadius:3, cursor:"pointer", transition:"background 0.15s"
                        }}
                          onClick={() => setMaturityFocus(maturityFocus === c.id ? null : c.id)}
                          title={`Target: ${MATURITY_TARGETS[c.id]}`}>
                          <span style={{ color: c.color, fontSize:12, flexShrink:0 }}>{c.icon}</span>
                          <span style={{ fontWeight:500, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", fontSize:11 }}>{c.id} {c.label}</span>
                        </div>

                        {/* Dimension cells */}
                        {MATURITY_DIMENSIONS.map(d => {
                          const score = getScore(c.id, d.key);
                          const bc = bandColor(score);
                          return (
                            <div key={d.key} style={{
                              display:"flex", alignItems:"center", justifyContent:"center",
                              background: score > 0 ? bc.bg : "rgba(120,113,108,0.04)",
                              borderRadius:3, cursor:"pointer", transition:"all 0.15s", minHeight:32,
                              border: "1px solid transparent", position:"relative"
                            }}
                              onClick={() => setScore(c.id, d.key, score < 5 ? score + 1 : 0)}
                              onContextMenu={e => { e.preventDefault(); setScore(c.id, d.key, score > 1 ? score - 1 : 5); }}
                              title={score > 0 ? `${d.label}: Level ${score} — ${d.rubric[score - 1]}\n\nClick: +1 | Right-click: -1` : `Click to score ${d.label}`}>
                              {score > 0 ? (
                                <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:14, fontWeight:600, color: bc.text }}>{score}</span>
                              ) : (
                                <span style={{ fontSize:16, color:"#363230", opacity:0.5 }}>·</span>
                              )}
                            </div>
                          );
                        })}

                        {/* Average cell */}
                        <div style={{
                          display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
                          background: avg > 0 ? bandColor(avg).bg : "transparent",
                          borderRadius:3, minHeight:32
                        }}>
                          {avg > 0 ? (
                            <>
                              <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:13, fontWeight:600, color: bandColor(avg).text }}>{avg.toFixed(1)}</span>
                            </>
                          ) : <span style={{ color:"#363230", fontSize:10 }}>—</span>}
                        </div>
                      </div>
                    );
                  })}

                  {/* Dimension averages row */}
                  <div style={{ display:"grid", gridTemplateColumns:"200px repeat(5, 1fr) 60px", gap:2, marginTop:6, paddingTop:6, borderTop:"1px solid rgba(245,158,11,0.06)" }}>
                    <div style={{ fontSize:10, color:"#57534e", padding:"4px 8px", fontWeight:600 }}>DIM. AVERAGE</div>
                    {MATURITY_DIMENSIONS.map(d => {
                      const avg = getDimAvg(d.key);
                      return (
                        <div key={d.key} style={{ display:"flex", alignItems:"center", justifyContent:"center", borderRadius:3, minHeight:28, background: avg > 0 ? bandColor(avg).bg : "transparent" }}>
                          {avg > 0 ? <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:12, fontWeight:600, color: bandColor(avg).text }}>{avg.toFixed(1)}</span> : <span style={{ color:"#363230", fontSize:10 }}>—</span>}
                        </div>
                      );
                    })}
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
                      {getOverallAvg() > 0 ? <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:13, fontWeight:700, color: bandColor(getOverallAvg()).text }}>{getOverallAvg().toFixed(1)}</span> : <span style={{ color:"#363230", fontSize:10 }}>—</span>}
                    </div>
                  </div>
                </div>
                </div>

                {/* Interaction hint */}
                <div style={{ marginTop:12, fontSize:11, color:"#57534e", display:"flex", gap:16, flexWrap:"wrap" }}>
                  <span>Click cell: cycle score up (1→2→3→4→5→clear)</span>
                  <span>Right-click: cycle down</span>
                  <span>Click category name: focus detail</span>
                </div>

                {/* Focus detail panel */}
                {maturityFocus && (() => {
                  const fc = CATEGORIES.find(c => c.id === maturityFocus);
                  if (!fc) return null;
                  const avg = getCatAvg(fc.id);
                  const target = MATURITY_TARGETS[fc.id] || 3;
                  const gap = getGap(fc.id);
                  const gapInfo = getGapLabel(gap);
                  return (
                    <div className="fade-in" style={{ marginTop:16, background:"#141210", border:"1px solid rgba(245,158,11,0.08)", borderRadius:6, padding:18 }}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14, flexWrap:"wrap", gap:8 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                          <span style={{ fontSize:18, color: fc.color }}>{fc.icon}</span>
                          <span style={{ fontWeight:600, fontSize:15 }}>{fc.id} {fc.label}</span>
                        </div>
                        <span onClick={() => setMaturityFocus(null)} style={{ cursor:"pointer", color:"#57534e", fontSize:18 }}>×</span>
                      </div>

                      {/* Dimension breakdown with rubric */}
                      <div style={{ display:"grid", gap:8 }}>
                        {MATURITY_DIMENSIONS.map(d => {
                          const score = getScore(fc.id, d.key);
                          return (
                            <div key={d.key} style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                              <div style={{ width:90, flexShrink:0 }}>
                                <div style={{ fontSize:11, color:"#78716c", marginBottom:2 }}>{d.label}</div>
                                <div style={{ display:"flex", gap:3 }}>
                                  {[1,2,3,4,5].map(v => (
                                    <div key={v} onClick={() => setScore(fc.id, d.key, v)}
                                      style={{
                                        width:14, height:14, borderRadius:3, cursor:"pointer",
                                        display:"flex", alignItems:"center", justifyContent:"center",
                                        fontSize:9, fontWeight:600, transition:"all 0.15s",
                                        background: v === score ? bandColor(v).bg : "rgba(120,113,108,0.06)",
                                        color: v === score ? bandColor(v).text : "#57534e",
                                        border: v === score ? `1px solid ${bandColor(v).text}30` : "1px solid transparent"
                                      }}>{v}</div>
                                  ))}
                                </div>
                              </div>
                              <div style={{ flex:1, fontSize:12, color: score > 0 ? "#a8a29e" : "#57534e", lineHeight:1.5 }}>
                                {score > 0 ? d.rubric[score - 1] : d.rubric.map((r, i) => (
                                  <span key={i} style={{ color:"#57534e" }}>{i > 0 ? " → " : ""}<span style={{ color:"#78716c" }}>{i+1}:</span> {r}</span>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Gap summary for this category */}
                      {avg > 0 && (
                        <div style={{ marginTop:14, paddingTop:14, borderTop:"1px solid rgba(245,158,11,0.06)", display:"flex", gap:20, flexWrap:"wrap", fontSize:12 }}>
                          <div><span style={{ color:"#57534e" }}>Current: </span><span style={{ color: bandColor(avg).text, fontWeight:600 }}>{avg.toFixed(1)}</span></div>
                          <div><span style={{ color:"#57534e" }}>Target: </span><span style={{ color:"#f5f0eb", fontWeight:600 }}>{target}</span></div>
                          <div><span style={{ color:"#57534e" }}>Gap: </span><span style={{ color: gapInfo.color, fontWeight:600 }}>{gap !== null ? (gap > 0 ? `−${gap.toFixed(1)}` : `+${Math.abs(gap).toFixed(1)}`) : "—"} ({gapInfo.label})</span></div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}

            {/* TAB: Visual Profile */}
            {maturityTab === "visual" && (
              <div className="fade-in">
                {getTotalScored() === 0 ? (
                  <div style={{ textAlign:"center", padding:"48px 24px", color:"#57534e" }}>
                    <div style={{ fontSize:24, marginBottom:8 }}>◈</div>
                    <div style={{ fontSize:14, marginBottom:4 }}>No scores yet</div>
                    <div style={{ fontSize:12 }}>Use the Assessment Grid tab to score your institution first. Radar charts will appear here.</div>
                  </div>
                ) : (
                  <>
                    {/* Overall institutional radar */}
                    <div style={{ display:"flex", gap:16, flexWrap:"wrap", justifyContent:"center", marginBottom:24 }}>
                      <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.08)", borderRadius:6, padding:"20px 24px" }}>
                        <div style={{ fontSize:11, color:"#f59e0b", textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:600, marginBottom:8, textAlign:"center" }}>Overall Institutional Profile</div>
                        <RadarChart
                          scores={(() => { const avg = {}; MATURITY_DIMENSIONS.forEach(d => { avg[d.key] = getDimAvg(d.key); }); return avg; })()}
                          label={`Overall: ${getOverallAvg().toFixed(1)} — ${bandColor(getOverallAvg()).label}`}
                        />
                      </div>
                    </div>

                    {/* Per-domain breakdown */}
                    {["civic", "support", "ple"].map(domain => {
                      const domCats = CATEGORIES.filter(c => c.domain === domain && getCatAvg(c.id) > 0);
                      if (domCats.length === 0) return null;
                      return (
                        <div key={domain} style={{ marginBottom:28 }}>
                          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
                            <div style={{ width:8, height:8, borderRadius:2, background: domainColor(domain) }} />
                            <span style={{ fontSize:11, color: domainColor(domain), letterSpacing:"0.08em", textTransform:"uppercase", fontWeight:600 }}>
                              {domainLabel(domain)}
                            </span>
                          </div>
                          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))", gap:10 }}>
                            {domCats.map(c => {
                              const scores = getCatDimScores(c.id);
                              const target = MATURITY_TARGETS[c.id] || 3;
                              const targetScores = {};
                              MATURITY_DIMENSIONS.forEach(d => { targetScores[d.key] = target; });
                              const avg = getCatAvg(c.id);
                              const gap = getGap(c.id);
                              const gapInfo = getGapLabel(gap);
                              return (
                                <div key={c.id} style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:"14px 16px", cursor:"pointer", transition:"border-color 0.2s" }}
                                  onClick={() => { setMaturityFocus(c.id); setMaturityTab("assess"); }}
                                  onMouseEnter={e => e.currentTarget.style.borderColor = `${c.color}30`}
                                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,158,11,0.06)"}>
                                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:6 }}>
                                    <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                                      <span style={{ color: c.color, fontSize:13 }}>{c.icon}</span>
                                      <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:10, color:"#78716c" }}>{c.id}</span>
                                    </div>
                                    <span style={{ fontSize:9, padding:"2px 6px", borderRadius:3, background: `${gapInfo.color}15`, color: gapInfo.color, fontWeight:600 }}>{gapInfo.label}</span>
                                  </div>
                                  <RadarChart scores={scores} targetScores={targetScores} />
                                  <div style={{ textAlign:"center", marginTop:4 }}>
                                    <div style={{ fontSize:12, fontWeight:600, color: bandColor(avg).text }}>{avg.toFixed(1)}</div>
                                    <div style={{ fontSize:10, color:"#57534e", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.label}</div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}

                    {/* Dimension comparison bars */}
                    <div style={{ marginTop:8 }}>
                      <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:12 }}>Dimension Strength Comparison</div>
                      {MATURITY_DIMENSIONS.map(d => {
                        const avg = getDimAvg(d.key);
                        if (avg === 0) return null;
                        const bc = bandColor(avg);
                        return (
                          <div key={d.key} style={{ display:"flex", alignItems:"center", gap:12, marginBottom:8 }}>
                            <span style={{ fontSize:12, color:"#78716c", width:90, flexShrink:0, textAlign:"right" }}>{d.label}</span>
                            <div style={{ flex:1, height:20, background:"rgba(120,113,108,0.06)", borderRadius:4, overflow:"hidden", position:"relative" }}>
                              <div style={{ height:"100%", width:`${(avg / 5) * 100}%`, background: `${bc.text}30`, borderRadius:4, transition:"width 0.4s ease", display:"flex", alignItems:"center", justifyContent:"flex-end", paddingRight:8, minWidth:40 }}>
                                <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:11, fontWeight:600, color: bc.text }}>{avg.toFixed(1)}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* TAB: Gap Analysis */}
            {maturityTab === "gaps" && (
              <div className="fade-in">
                {getTotalScored() === 0 ? (
                  <div style={{ textAlign:"center", padding:"48px 24px", color:"#57534e" }}>
                    <div style={{ fontSize:24, marginBottom:8 }}>◈</div>
                    <div style={{ fontSize:14, marginBottom:4 }}>No scores yet</div>
                    <div style={{ fontSize:12 }}>Use the Assessment Grid tab to score your institution first.</div>
                  </div>
                ) : (
                  <>
                    <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:10 }}>Gap Analysis: Current vs. Target</div>
                    <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, overflow:"hidden" }}>
                      <div style={{ display:"grid", gridTemplateColumns:"30px 32px 1fr 60px 60px 80px 100px", gap:0, padding:"8px 14px", fontSize:10, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, borderBottom:"1px solid rgba(245,158,11,0.06)", background:"#1c1917" }}>
                        <div></div><div></div><div>Category</div><div style={{textAlign:"center"}}>Current</div><div style={{textAlign:"center"}}>Target</div><div style={{textAlign:"center"}}>Gap</div><div style={{textAlign:"center"}}>Status</div>
                      </div>
                      {CATEGORIES
                        .map(c => ({ ...c, avg: getCatAvg(c.id), gap: getGap(c.id), target: MATURITY_TARGETS[c.id] || 3 }))
                        .sort((a, b) => {
                          if (a.gap === null && b.gap === null) return 0;
                          if (a.gap === null) return 1;
                          if (b.gap === null) return -1;
                          return b.gap - a.gap;
                        })
                        .map((c, i) => {
                          const gapInfo = getGapLabel(c.gap);
                          return (
                            <div key={c.id} style={{ display:"grid", gridTemplateColumns:"30px 32px 1fr 60px 60px 80px 100px", gap:0, padding:"8px 14px", borderBottom: i < CATEGORIES.length - 1 ? "1px solid rgba(245,158,11,0.03)" : "none", alignItems:"center", transition:"background 0.15s" }}
                              onMouseEnter={e => e.currentTarget.style.background = "rgba(245,158,11,0.03)"}
                              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                              <span style={{ fontSize:13, color: c.color }}>{c.icon}</span>
                              <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:10, color:"#57534e" }}>{c.id}</span>
                              <span style={{ fontSize:12, fontWeight:500, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.label}</span>
                              <div style={{ textAlign:"center" }}>
                                {c.avg > 0 ? <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:13, fontWeight:600, color: bandColor(c.avg).text }}>{c.avg.toFixed(1)}</span> : <span style={{ color:"#57534e", fontSize:11 }}>—</span>}
                              </div>
                              <div style={{ textAlign:"center" }}>
                                <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:12, color:"#78716c" }}>{c.target}</span>
                              </div>
                              <div style={{ textAlign:"center" }}>
                                {c.gap !== null ? (
                                  <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:12, fontWeight:600, color: gapInfo.color }}>
                                    {c.gap > 0 ? `−${c.gap.toFixed(1)}` : `+${Math.abs(c.gap).toFixed(1)}`}
                                  </span>
                                ) : <span style={{ color:"#57534e", fontSize:11 }}>—</span>}
                              </div>
                              <div style={{ textAlign:"center" }}>
                                {c.gap !== null ? (
                                  <span style={{ fontSize:10, padding:"2px 8px", borderRadius:3, background: `${gapInfo.color}15`, color: gapInfo.color, fontWeight:600 }}>{gapInfo.label}</span>
                                ) : <span style={{ color:"#57534e", fontSize:10 }}>Unscored</span>}
                              </div>
                            </div>
                          );
                        })}
                    </div>

                    {/* Dimension gap summary */}
                    <div style={{ marginTop:20, fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:10 }}>Dimension Averages Across All Categories</div>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))", gap:8 }}>
                      {MATURITY_DIMENSIONS.map(d => {
                        const avg = getDimAvg(d.key);
                        return (
                          <div key={d.key} style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:"14px 16px" }}>
                            <div style={{ fontSize:11, color:"#78716c", marginBottom:4 }}>{d.label}</div>
                            <div style={{ fontSize:12, color:"#57534e", marginBottom:8, lineHeight:1.4 }}>{d.desc}</div>
                            {avg > 0 ? (
                              <>
                                <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:26, fontWeight:700, color: bandColor(avg).text }}>{avg.toFixed(1)}</div>
                                <div style={{ fontSize:10, color: bandColor(avg).text }}>{bandColor(avg).label}</div>
                              </>
                            ) : <div style={{ fontSize:13, color:"#57534e" }}>—</div>}
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* TAB: Improvement Roadmap */}
            {maturityTab === "roadmap" && (
              <div className="fade-in">
                {getTotalScored() === 0 ? (
                  <div style={{ textAlign:"center", padding:"48px 24px", color:"#57534e" }}>
                    <div style={{ fontSize:24, marginBottom:8 }}>◈</div>
                    <div style={{ fontSize:14, marginBottom:4 }}>No scores yet</div>
                    <div style={{ fontSize:12 }}>Score your institution in the Assessment Grid first to generate improvement recommendations.</div>
                  </div>
                ) : (
                  <>
                    <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:10 }}>Priority Improvements by Category</div>
                    {CATEGORIES
                      .map(c => ({ ...c, avg: getCatAvg(c.id), gap: getGap(c.id), target: MATURITY_TARGETS[c.id] || 3 }))
                      .filter(c => c.avg > 0 && c.gap !== null && c.gap > 0.25)
                      .sort((a, b) => b.gap - a.gap)
                      .map(c => {
                        const impKey = getImprovementKey(c.avg);
                        const imp = impKey ? IMPROVEMENT_ROADMAP[impKey] : null;
                        const gapInfo = getGapLabel(c.gap);
                        return (
                          <div key={c.id} className="fade-in" style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:18, marginBottom:10, borderLeftWidth:3, borderLeftStyle:"solid", borderLeftColor: gapInfo.color }}>
                            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10, flexWrap:"wrap", gap:8 }}>
                              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                                <span style={{ fontSize:16, color: c.color }}>{c.icon}</span>
                                <span style={{ fontWeight:600, fontSize:14 }}>{c.id} {c.label}</span>
                              </div>
                              <div style={{ display:"flex", gap:10, fontSize:11 }}>
                                <span>Current: <span style={{ color: bandColor(c.avg).text, fontWeight:600 }}>{c.avg.toFixed(1)}</span></span>
                                <span>Target: <span style={{ fontWeight:600 }}>{c.target}</span></span>
                                <span style={{ padding:"1px 8px", borderRadius:3, background:`${gapInfo.color}15`, color: gapInfo.color, fontWeight:600 }}>{gapInfo.label}</span>
                              </div>
                            </div>
                            {imp && (
                              <div>
                                <div style={{ fontSize:12, color:"#f59e0b", fontWeight:600, marginBottom:4 }}>{imp.label}: {imp.priority}</div>
                                <div style={{ display:"grid", gap:4, marginTop:8 }}>
                                  {imp.actions.map((a, i) => (
                                    <div key={i} style={{ display:"flex", gap:8, fontSize:12, color:"#a8a29e", lineHeight:1.5 }}>
                                      <span style={{ color:"#57534e", flexShrink:0 }}>{i+1}.</span>
                                      <span>{a}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Dimension-level detail */}
                            <div style={{ marginTop:12, paddingTop:10, borderTop:"1px solid rgba(245,158,11,0.04)", display:"flex", gap:12, flexWrap:"wrap" }}>
                              {MATURITY_DIMENSIONS.map(d => {
                                const score = getScore(c.id, d.key);
                                return score > 0 ? (
                                  <div key={d.key} style={{ fontSize:10, color:"#78716c" }}>
                                    {d.label}: <span style={{ color: bandColor(score).text, fontWeight:600 }}>{score}</span>
                                    {score < Math.ceil(c.target) && <span style={{ color:"#ef4444" }}> ↑</span>}
                                  </div>
                                ) : null;
                              })}
                            </div>
                          </div>
                        );
                      })}

                    {/* Categories meeting or exceeding targets */}
                    {(() => {
                      const onTarget = CATEGORIES
                        .map(c => ({ ...c, avg: getCatAvg(c.id), gap: getGap(c.id) }))
                        .filter(c => c.avg > 0 && c.gap !== null && c.gap <= 0.25);
                      return onTarget.length > 0 ? (
                        <div style={{ marginTop:16 }}>
                          <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:10 }}>On Target or Exceeding ({onTarget.length})</div>
                          <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                            {onTarget.map(c => (
                              <span key={c.id} style={{ fontSize:11, padding:"4px 10px", borderRadius:4, background: bandColor(c.avg).bg, color: bandColor(c.avg).text, fontWeight:500 }}>
                                {c.icon} {c.id} {c.avg.toFixed(1)}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null;
                    })()}
                  </>
                )}
              </div>
            )}

            {/* TAB: Level Reference */}
            {maturityTab === "reference" && (
              <div className="fade-in">
                <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:12 }}>Five Maturity Levels</div>
                <div style={{ display:"grid", gap:8, marginBottom:28 }}>
                  {MATURITY_LEVELS.map((m, i) => (
                    <div key={i} style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:"14px 18px", display:"flex", alignItems:"flex-start", gap:14 }}>
                      <div style={{ width:38, height:38, borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Cormorant Garamond', serif", fontSize:20, fontWeight:700, flexShrink:0, background: bandColor(m.level).bg, color: bandColor(m.level).text }}>{m.level}</div>
                      <div style={{ flex:1 }}>
                        <div style={{ fontWeight:600, fontSize:14, marginBottom:2 }}>{m.name}</div>
                        <div style={{ fontSize:12, color:"#a8a29e", marginBottom:6 }}>{m.desc}</div>
                        <div style={{ fontSize:11, color:"#78716c", fontStyle:"italic", marginBottom:8 }}>Key: {m.char}</div>
                        <div style={{ display:"grid", gap:3 }}>
                          {MATURITY_DIMENSIONS.map(d => (
                            <div key={d.key} style={{ fontSize:11, color:"#78716c", display:"flex", gap:6 }}>
                              <span style={{ color:"#57534e", width:80, flexShrink:0, fontWeight:500 }}>{d.label}:</span>
                              <span>{d.rubric[m.level - 1]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:12 }}>Improvement Transitions</div>
                <div style={{ display:"grid", gap:8 }}>
                  {Object.entries(IMPROVEMENT_ROADMAP).map(([key, imp]) => (
                    <div key={key} style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:"14px 18px" }}>
                      <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:12, color:"#f59e0b", marginBottom:2 }}>{key}</div>
                      <div style={{ fontSize:13, fontWeight:600, marginBottom:4 }}>{imp.label}</div>
                      <div style={{ fontSize:12, color:"#f59e0b", marginBottom:8 }}>Priority: {imp.priority}</div>
                      <div style={{ display:"grid", gap:3 }}>
                        {imp.actions.map((a, i) => (
                          <div key={i} style={{ fontSize:12, color:"#a8a29e", display:"flex", gap:6, lineHeight:1.5 }}>
                            <span style={{ color:"#57534e" }}>{i+1}.</span>
                            <span>{a}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ borderTop:"1px solid rgba(245,158,11,0.04)", padding:"16px 24px", textAlign:"center", fontSize:11, color:"#57534e" }}>
        <span style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:13, color:"#78716c" }}>PLE Governance Process Standard v1.0</span>
        <span style={{ margin:"0 10px", color:"#363230" }}>·</span>
        <span>The Foundation for Global Progress</span>
        <span style={{ margin:"0 10px", color:"#363230" }}>·</span>
        <span style={{ fontStyle:"italic" }}>Design. Anything. EVERYTHING. Better.</span>
      </div>

      {/* Search Overlay */}
      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} onNavigate={handleSearchNavigate} />

      {/* Hidden file input for import */}
      <input ref={fileInputRef} type="file" accept=".json" style={{ display:"none" }} onChange={handleImport} />
    </div>
  );
}

export default App;
