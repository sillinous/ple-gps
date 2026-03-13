import { useState, useEffect, useRef } from "react";
import { CATEGORIES, VALUE_LOOPS, MATURITY_LEVELS, MATURITY_TARGETS, TRANSLATION } from "./data.js";

function App() {
  const [view, setView] = useState("overview");
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [expandedLoop, setExpandedLoop] = useState(null);
  const [hoveredCat, setHoveredCat] = useState(null);
  const [animateIn, setAnimateIn] = useState(true);
  const mainRef = useRef(null);

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
        <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
          {[["overview","Framework"],["categories","Categories"],["translation","Translation"],["loops","Value Loops"],["maturity","Maturity"]].map(([v,l]) => (
            <div key={v} className={`nav-pill ${view===v?"active":""}`} onClick={() => navigateTo(v)}>
              {l}
            </div>
          ))}
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

        {/* MATURITY MODEL */}
        {view === "maturity" && (
          <div className="fade-in">
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:28, fontWeight:700, marginBottom:6 }}>Institutional Maturity Model</h2>
            <p style={{ color:"#a8a29e", marginBottom:24, fontSize:14 }}>Five levels of institutional development, adapted from APQC PEMM and CMMI for post-labor governance context.</p>

            <div style={{ display:"grid", gap:10, marginBottom:32 }}>
              {MATURITY_LEVELS.map((m, i) => (
                <div key={i} className={`fade-in stagger-${(i%4)+1}`} style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:"16px 20px", display:"flex", alignItems:"flex-start", gap:16 }}>
                  <div style={{
                    width:44, height:44, borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center",
                    fontFamily:"'Cormorant Garamond', serif", fontSize:22, fontWeight:700, flexShrink:0,
                    background: `rgba(${i === 0 ? "239,68,68" : i === 1 ? "245,158,11" : i === 2 ? "16,185,129" : i === 3 ? "99,102,241" : "139,92,246"},0.12)`,
                    color: i === 0 ? "#ef4444" : i === 1 ? "#f59e0b" : i === 2 ? "#10b981" : i === 3 ? "#6366f1" : "#8b5cf6"
                  }}>{m.level}</div>
                  <div>
                    <div style={{ fontWeight:600, fontSize:15, marginBottom:2 }}>{m.name}</div>
                    <div style={{ fontSize:13, color:"#a8a29e", marginBottom:4 }}>{m.desc}</div>
                    <div style={{ fontSize:11, color:"#78716c", fontStyle:"italic" }}>Key characteristic: {m.char}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.08em", textTransform:"uppercase", fontWeight:600, marginBottom:12 }}>Recommended Targets by Category</div>
            <div style={{ background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, overflow:"hidden" }}>
              {CATEGORIES.map((c, i) => {
                const t = MATURITY_TARGETS[c.id] || 3;
                return (
                  <div key={c.id}
                    style={{ display:"flex", alignItems:"center", gap:12, padding:"10px 18px", borderBottom: i < CATEGORIES.length - 1 ? "1px solid rgba(245,158,11,0.03)" : "none", cursor:"pointer", transition:"background 0.15s" }}
                    onClick={() => navigateTo("detail", c.id)}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(245,158,11,0.03)"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                    <span style={{ fontSize:14, color: c.color, width:22, textAlign:"center" }}>{c.icon}</span>
                    <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:11, color:"#57534e", width:32 }}>{c.id}</span>
                    <span style={{ fontSize:13, fontWeight:500, flex:1, minWidth:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.label}</span>
                    <div className="maturity-bar" style={{ width:100, flexShrink:0 }}>
                      {[1,2,3,4,5].map(l => (
                        <div key={l} className="maturity-seg" style={{
                          background: l <= Math.floor(t)
                            ? (l <= 2 ? "#ef4444" : l <= 3 ? "#f59e0b" : l <= 4 ? "#10b981" : "#8b5cf6")
                            : l === Math.ceil(t) && t % 1 > 0
                            ? `${l <= 2 ? "#ef4444" : l <= 3 ? "#f59e0b" : l <= 4 ? "#10b981" : "#8b5cf6"}80`
                            : "rgba(245,158,11,0.06)"
                        }} />
                      ))}
                    </div>
                    <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:12, color: t >= 4 ? "#10b981" : t >= 3 ? "#f59e0b" : "#ef4444", width:28, textAlign:"right" }}>{t % 1 === 0 ? t : t.toFixed(0)+"-"+(t+0.5).toFixed(0)}</span>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop:24, background:"#141210", border:"1px solid rgba(245,158,11,0.06)", borderRadius:6, padding:18 }}>
              <div style={{ fontSize:11, color:"#57534e", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:10 }}>Reading the Maturity Bars</div>
              <div style={{ display:"flex", gap:16, flexWrap:"wrap", fontSize:12 }}>
                {[["#ef4444","1-2 Critical Gap"],["#f59e0b","3 Developing"],["#10b981","4 Capable"],["#8b5cf6","5 Excellence"]].map(([c,l]) => (
                  <div key={l} style={{ display:"flex", alignItems:"center", gap:6 }}>
                    <div style={{ width:12, height:6, borderRadius:2, background:c }} />
                    <span style={{ color:"#a8a29e" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
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
    </div>
  );
}

export default App;
