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
| L4 Activities | 65 |
| KPIs Defined | 229 |
| Integration Flows | 77 (all 16 categories bidirectional) |
| Value Loops | 6 circular feedback systems |
| Institutional Templates | 5 pre-scored profiles |
| Implementation Playbooks | 3 (AI governance, flourishing, democracy) |

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
└── PLE-Specific Governance (14.0–16.0)
    ├── 14.0 Algorithmic Governance
    ├── 15.0 Human Flourishing Infrastructure
    └── 16.0 Participatory Democracy
```

## Interactive Explorer

The framework ships as a full interactive web application:

### 8 Views
- **Overview** — Framework stats, quick-start cards, assessment heatmap, all 16 category cards
- **Categories** — Domain-grouped taxonomy with inline maturity scores
- **Category Detail** — PCF origin, maturity radar chart, integration triggers, process groups, playbook access
- **Group Detail** — L3 processes, L4 activities, KPIs, parent maturity context
- **Integration Map** — SVG circular layout showing all 77 cross-process flows
- **Value Loops** — 6 circular feedback systems with clickable category references
- **Playbooks** — Implementation guides with institutional templates
- **Maturity Assessment** — Full institutional assessment tool (6 sub-tabs)

### Maturity Assessment (6 Sub-Tabs)
- **Assessment Grid** — 16×5 interactive heatmap with comparison mode
- **Visual Profile** — Per-domain radar charts and dimension strength bars
- **Gap Analysis** — Current vs. target, sorted by severity
- **Improvement Roadmap** — Prioritized actions per gap
- **Implementation Tracker** — Auto-generated trackable action items with 3-state cycle
- **Level Reference** — Full rubrics for all 5 levels × 5 dimensions

### 5 Institutional Templates
Pre-scored maturity profiles for one-click start:
- 🏛 Municipal Government (PLE Transition)
- 🤝 Worker/Community Cooperative
- 🌐 Digital Commons / Platform Cooperative
- 💰 UBI Administration Body
- 🌱 Greenfield PLE Institution

### 3 Implementation Playbooks
Phased guides for the novel PLE categories:
- **14.0 Algorithmic Governance** — AI inventory → governance structure → monitoring operations (12 months)
- **15.0 Human Flourishing** — Measurement baseline → program design → scaled infrastructure (18 months)
- **16.0 Participatory Democracy** — Constitutional convention → governance operations → health monitoring (12 months)

Each includes: "First 3 Actions" quickstart, prerequisites, phased timeline, and common failure modes.

### Additional Features
- **Welcome overlay** for first-time visitors with guided entry points
- **Comparison mode** — Benchmark assessment against any institutional template
- **Global search** (⌘K) across 272 processes, 229 KPIs, 78 groups
- **Keyboard navigation** (←→ between categories/groups, Esc back)
- **Assessment persistence** — Auto-save to localStorage with named assessments
- **Export/Import** — JSON assessment files
- **Report generator** — Downloads full Markdown assessment report
- **SVG radar charts** — Pentagon charts with target overlay

## Key Concepts

### Enterprise → Post-Labor Translation

| Enterprise Concept | PLE Equivalent |
|---|---|
| Revenue | Resource inflows (automated production, taxes, commons yield) |
| Customers | Community members, citizens, participants |
| Employees | Contributors, stewards, participants |
| Products | Public goods, shared services, commons |
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

## Use Cases

- **Designing a new PLE institution** — Walk all 16 categories as an operational checklist
- **Assessing an existing institution** — Load a template, score across 5 dimensions, generate gap analysis
- **Community workshops** — Project the assessment, score together, discuss priorities
- **Implementation planning** — Use playbooks and tracker to turn assessment into action
- **Inter-institutional coordination** — Use the integration map to design handoff protocols
- **Benchmarking** — Compare your institution against templates or peer exports

## Project Structure

```
ple-gps/
├── src/
│   ├── App.jsx                    # Main application (8 views, 6 maturity sub-tabs)
│   ├── data.js                    # Framework data, templates, playbooks
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
npm run dev      # Dev server at localhost:5173
npm run build    # Production build (~91KB gzipped)
```

## Contributing

This is a living standard. Contributions welcome:
- **Deepen L4/L5 activities** for categories 2.0–13.0
- **Add implementation playbooks** for categories beyond 14.0–16.0
- **Domain-specific adaptations** (healthcare, education, housing, energy)
- **Workshop facilitation guides**
- **Translations** into additional languages

## Framework Lineage

**Source:** APQC Process Classification Framework (PCF) v7.3, Cross-Industry

This work adapts APQC's structural logic for post-labor institutional design. The original 13 categories are translated with full fidelity; three new categories address governance functions that don't exist in enterprise contexts. This work is not affiliated with or endorsed by APQC.

## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

---

*The Foundation for Global Progress — Design. Anything. EVERYTHING. Better.*
