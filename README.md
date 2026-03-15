# PLE-GPS — Post-Labor Economics Governance Process Standard

> A universal process taxonomy for designing, operating, and improving governance institutions in a post-labor economic context.

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-brightgreen)](https://sillinous.github.io/ple-gps/)

**[→ Open Interactive Explorer](https://sillinous.github.io/ple-gps/)**

---

## What Is This?

The PLE Governance Process Standard is a **complete operational architecture** for post-labor institutions — organizations that serve communities in a world where human labor is no longer the primary production input.

It adapts the [APQC Process Classification Framework](https://www.apqc.org/pcf) (PCF v7.3) — the world's most widely adopted organizational process taxonomy — and extends it with three new categories specific to post-labor governance.

### By the Numbers

| Metric | Count |
|---|---|
| Process Categories | 16 (13 adapted + 3 new) |
| Process Groups (L2) | 78 |
| L3 Processes | 272 |
| KPIs Defined | 229 |
| Integration Flows | 31 cross-process dependencies |
| Maturity Dimensions | 5 × 5 levels |
| Value Loops | 6 circular feedback systems |

## Framework Structure

```
16 Process Categories
├── Civic Operating Processes (1.0–6.0)
│   ├── 1.0  Collective Vision & Governance Strategy
│   ├── 2.0  Design & Steward Public Goods
│   ├── 3.0  Facilitate Access & Engagement
│   ├── 4.0  Deliver Physical Resources
│   ├── 5.0  Deliver Services & Programs
│   └── 6.0  Support Community Members
├── Institutional Support Processes (7.0–13.0)
│   ├── 7.0  Develop Human Potential
│   ├── 8.0  Technology & AI Infrastructure
│   ├── 9.0  Steward Collective Resources
│   ├── 10.0 Manage Commons & Shared Assets
│   ├── 11.0 Institutional Integrity & Equity
│   ├── 12.0 Inter-Institutional Relations
│   └── 13.0 Evolve Institutional Capabilities
└── PLE-Specific Governance (14.0–16.0) ← NEW
    ├── 14.0 Algorithmic Governance
    ├── 15.0 Human Flourishing Infrastructure
    └── 16.0 Participatory Democracy
```

### New PLE-Specific Categories

| Category | What It Covers |
|---|---|
| **14.0 Algorithmic Governance** | AI decision rights, bias monitoring, agent portfolios, human-AI work allocation, safety protocols |
| **15.0 Human Flourishing Infrastructure** | Purpose and meaning programs, social connection, creative expression, flourishing as PRIMARY institutional KPI |
| **16.0 Participatory Democracy** | Democratic governance frameworks, elections, assemblies, capture detection, civic education |

## Interactive Explorer

The framework ships as a full interactive web application with 7 views:

### Views
- **Overview** — Framework stats, assessment summary, all 16 category cards with maturity badges
- **Categories** — Domain-grouped taxonomy with inline maturity scores
- **Category Detail** — PCF origin, post-labor delta, maturity radar chart, integration triggers, process groups
- **Group Detail** — L3 processes, L4 activities, KPIs, parent category maturity context
- **Integration Map** — SVG circular layout showing all 31 cross-process flows with type filtering
- **Value Loops** — 6 circular feedback systems with expandable step sequences
- **Maturity Assessment** — Full institutional assessment tool (see below)

### Maturity Assessment Tool

- **Assessment Grid** — 16×5 interactive heatmap (categories × dimensions). Click to score 1–5.
- **Visual Profile** — Per-domain radar chart grids with dimension strength bars
- **Gap Analysis** — Current vs. target scores, sorted by severity
- **Improvement Roadmap** — Prioritized actions per gap with transition playbooks
- **Level Reference** — Full rubrics for all 5 levels × 5 dimensions

### Additional Features
- **Global Search** (⌘K) — Full-text search across 272 processes, 229 KPIs, 78 groups
- **Assessment Persistence** — Auto-save to localStorage with named assessments
- **Export/Import** — JSON assessment files
- **Report Generator** — Downloads full Markdown assessment report
- **Example Assessment** — Pre-scored data for immediate exploration
- **SVG Radar Charts** — Pentagon charts for maturity visualization with target overlay

## Key Concepts

### Enterprise → Post-Labor Translation

| Enterprise Concept | PLE Equivalent |
|---|---|
| Revenue | Resource inflows (automated production, taxes, commons yield) |
| Customers | Community members, citizens, participants |
| Employees | Contributors, stewards, participants |
| Products | Public goods, shared services, commons |
| Sales | Access facilitation, enrollment, matching |
| ROI | Impact-to-resource ratio |
| HR | Human Development |

### Maturity Model

| Level | Name | Key Characteristic |
|---|---|---|
| 1 | Founding | Vision-driven heroics |
| 2 | Structured | Repeatability and fairness |
| 3 | Equitable | Systematic equity |
| 4 | Adaptive | Predictable outcomes |
| 5 | Flourishing | Institutional intelligence |

### Five Assessment Dimensions
1. **Design** — How well is the process designed?
2. **Performers** — Who executes, and how capable are they?
3. **Owner** — Is there clear accountability?
4. **Infrastructure** — What systems and tools support it?
5. **Metrics** — How is performance measured?

### Six Value Loops
1. Community Intelligence → 2. Governance Performance → 3. Human Development → 4. AI Governance → 5. Equity Improvement → 6. Democratic Legitimacy

## Use Cases

- **Designing a new PLE institution** — Walk all 16 categories as an operational checklist
- **Assessing an existing institution** — Score across 5 dimensions, generate gap analysis and improvement roadmap
- **Inter-institutional coordination** — Use the integration map to design handoff protocols
- **Human-AI work allocation** — Category 14.0 process architecture
- **Democratic accountability** — Category 16.0 governance layer
- **Community workshops** — Load example assessment, walk the visual profile, discuss priorities

## Project Structure

```
ple-gps/
├── src/
│   ├── App.jsx                    # Main application (7 views)
│   ├── data.js                    # Framework data (272 processes, 229 KPIs)
│   ├── main.jsx                   # React entry point
│   └── components/
│       ├── RadarChart.jsx         # SVG pentagon maturity visualization
│       ├── IntegrationMap.jsx     # SVG cross-process flow diagram
│       └── Search.jsx             # Global search overlay
├── docs/
│   ├── PLE-GPS-v1.md             # Full specification (1,586 lines)
│   └── references/               # APQC PCF source taxonomy (10 files)
├── index.html, package.json, vite.config.js, netlify.toml
└── LICENSE                        # CC BY-SA 4.0
```

## Development

```bash
npm install
npm run dev      # Dev server
npm run build    # Production build (~77KB gzipped)
```

## Contributing

This is a living standard. Contributions welcome:
- **Deepen L4/L5 activities** — Most L3 processes have empty activity lists ready to populate
- **Expand integration flows** — Add cross-category dependencies beyond the initial 31
- **Domain-specific adaptations** (healthcare, education, housing, energy)
- **Translate** into additional languages
- **Build companion tools** — workshop guides, governance checklists

## Framework Lineage

**Source:** APQC Process Classification Framework (PCF) v7.3, Cross-Industry

This work adapts APQC's structural logic for post-labor institutional design. The original 13 categories are translated with full fidelity; three new categories address governance functions that don't exist in enterprise contexts. This work is not affiliated with or endorsed by APQC.

## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

---

*The Foundation for Global Progress — Design. Anything. EVERYTHING. Better.*
