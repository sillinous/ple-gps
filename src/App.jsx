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
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

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
                { n:"16", l:"Process Categories", sub:"13 adapted + 3 new" },
                { n:"60+", l:"Process Groups", sub:"L2 organizational functions" },
                { n:"5", l:"Maturity Levels", sub:"Founding → Flourishing" },
                { n:"6", l:"Value Loops", sub:"Circular improvement cycles" }
              ].map((s,i) => (
                <div key={i} className={`fade-in stagger-${i+1}`} style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:"20px 16px" }}>
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
                    {c.domain === "ple" && <span style={{ fontSize:9, padding:"2px 7px", borderRadius:3, background:"rgba(239,68,68,0.12)", color:"#ef4444", fontWeight:600, letterSpacing:"0.05em" }}>NEW</span>}
                  </div>
                  <div style={{ fontSize:14, fontWeight:600, marginBottom:4, lineHeight:1.3 }}>{c.label}</div>
                  <div style={{ fontSize:11, color:"#78716c" }}>{c.groups.length} process groups</div>
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
                {CATEGORIES.filter(c => c.domain === domain).map(c => (
                  <div key={c.id} className="group-row" onClick={() => navigateTo("detail", c.id)}
                    style={{ display:"flex", alignItems:"center", gap:14, borderRadius:4 }}>
                    <span style={{ fontSize:18, color: c.color, width:28, textAlign:"center" }}>{c.icon}</span>
                    <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:12, color:"#57534e", width:40 }}>{c.id}</span>
                    <span style={{ fontWeight:500, flex:1 }}>{c.label}</span>
                    <span style={{ fontSize:11, color:"#57534e" }}>{c.groups.length} groups →</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* CATEGORY DETAIL */}
        {view === "detail" && cat && !grp && (
          <div className="fade-in">
            <div className="breadcrumb">
              <span onClick={() => navigateTo("overview")}>PLE-GPS</span>
              <span style={{ color:"#57534e" }}>/</span>
              <span style={{ color:"#f5f0eb" }}>{cat.id} {cat.label}</span>
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
            </div>

            {/* Origin and Delta */}
            <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:18, marginBottom:16 }}>
              <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:6 }}>PCF Origin</div>
              <div style={{ fontSize:13, color:"#a8a29e", marginBottom:12 }}>{cat.origin}</div>
              <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:6 }}>What Changes in Post-Labor Context</div>
              <div style={{ fontSize:13, color:"#f5f0eb", lineHeight:1.7 }}>{cat.delta}</div>
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
                  <span style={{ color:"#57534e", fontSize:12 }}>→</span>
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
          </div>
        )}

        {/* GROUP DETAIL */}
        {view === "group" && cat && grp && (
          <div className="fade-in">
            <div className="breadcrumb">
              <span onClick={() => navigateTo("overview")}>PLE-GPS</span>
              <span style={{ color:"#57534e" }}>/</span>
              <span onClick={() => navigateTo("detail", cat.id)}>{cat.id} {cat.label}</span>
              <span style={{ color:"#57534e" }}>/</span>
              <span style={{ color:"#f5f0eb" }}>{grp.id} {grp.label}</span>
            </div>

            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
              <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:14, color: cat.color, fontWeight:600 }}>{grp.id}</span>
              <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:26, fontWeight:700 }}>{grp.label}</h2>
            </div>

            {grp.purpose && <p style={{ color:"#a8a29e", fontSize:14, lineHeight:1.7, marginBottom:20, maxWidth:700 }}>{grp.purpose}</p>}

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
          </div>
        )}

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
            <p style={{ color:"#a8a29e", marginBottom:20, fontSize:14, maxWidth:620 }}>Every significant process handoff, data flow, trigger, and dependency between the 16 categories. This is the intelligence layer — no process exists in isolation.</p>
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
              {getTotalScored() > 0 && (
                <div style={{ display:"flex", gap:6, flexWrap:"wrap", alignItems:"center" }}>
                  <input
                    value={assessmentName}
                    onChange={e => setAssessmentName(e.target.value)}
                    style={{ background:"rgba(120,113,108,0.08)", border:"1px solid rgba(245,158,11,0.1)", borderRadius:4, padding:"5px 10px", color:"#f5f0eb", fontSize:11, fontFamily:"'Outfit', sans-serif", width:140, outline:"none" }}
                    placeholder="Assessment name"
                  />
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
