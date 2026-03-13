# PLE-GPS — Post-Labor Economics Governance Process Standard

> A universal process taxonomy for designing, operating, and improving governance institutions in a post-labor economic context.

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/placeholder/deploy-status)](https://ple-gps.netlify.app)

---

## What Is This?

The PLE Governance Process Standard is a **complete operational architecture** for post-labor institutions — organizations that serve communities in a world where human labor is no longer the primary production input.

It adapts the [APQC Process Classification Framework](https://www.apqc.org/pcf) (PCF) — the world's most widely adopted organizational process taxonomy, used by thousands of organizations for benchmarking and transformation — and extends it with three new categories specific to post-labor governance:

| Category | What It Covers |
|---|---|
| **14.0 Algorithmic Governance** | AI decision rights, bias monitoring, agent portfolios, human-AI work allocation, safety protocols |
| **15.0 Human Flourishing Infrastructure** | Purpose and meaning programs, social connection, creative expression, flourishing measurement |
| **16.0 Participatory Democracy** | Democratic governance frameworks, elections, assemblies, capture detection, civic education |

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

## Key Concepts

**Enterprise → Post-Labor Translation**

| Enterprise Concept | PLE Equivalent |
|---|---|
| Revenue | Resource inflows (automated production, taxes, commons yield) |
| Customers | Community members, citizens, participants |
| Employees | Contributors, stewards, participants |
| Products | Public goods, shared services, commons |
| Sales | Access facilitation, enrollment, matching |
| ROI | Impact-to-resource ratio |
| HR | Human Development |

**Maturity Model**

| Level | Name | Key Characteristic |
|---|---|---|
| 1 | Founding | Vision-driven heroics |
| 2 | Structured | Repeatability and fairness |
| 3 | Equitable | Systematic equity |
| 4 | Adaptive | Predictable outcomes |
| 5 | Flourishing | Institutional intelligence |

**Six Value Loops** — circular feedback systems that drive institutional learning:
1. Community Intelligence
2. Governance Performance
3. Human Development
4. AI Governance
5. Equity Improvement
6. Democratic Legitimacy

## Interactive Explorer

The framework is available as an interactive web application:

**[→ ple-gps.netlify.app](https://ple-gps.netlify.app)**

Browse all 16 categories, drill into process groups and L3/L4 activities, explore the translation table, value loops, and maturity model.

## Use Cases

- **Designing a new PLE institution** — Walk all 16 categories as an operational checklist
- **Assessing an existing institution** — Rate each L2 process group on the maturity model
- **Inter-institutional coordination** — Use the integration matrix to design handoff protocols
- **Human-AI work allocation** — Score each L4 activity on automation and AI enhancement potential
- **Democratic accountability** — Category 16.0 provides the governance layer for all other categories

## Project Structure

```
ple-gps/
├── src/
│   ├── App.jsx          # Interactive explorer application
│   ├── data.js          # Framework data (categories, loops, maturity, translation)
│   └── main.jsx         # React entry point
├── docs/
│   ├── PLE-GPS-v1.md    # Full framework specification document
│   └── references/      # APQC PCF reference files (source taxonomy)
│       ├── cat-01-strategy.md
│       ├── cat-02-03-products-market.md
│       ├── cat-04-05-06-delivery-cx.md
│       ├── cat-07-08-hcm-it.md
│       ├── cat-09-13-finance-risk-capabilities.md
│       ├── integration-matrix.md
│       ├── kpis-master.md
│       ├── maturity-model.md
│       ├── ai-automation-map.md
│       └── process-templates.md
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
└── LICENSE              # CC BY-SA 4.0
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Contributing

This is a living standard. The taxonomy is universal — the specific processes within each category will be adapted by each institution to its community context. Contributions welcome:

- **Deepen L3/L4/L5 content** for categories 2.0–16.0
- **Add integration triggers** connecting processes across categories
- **Develop domain-specific adaptations** (healthcare, education, housing, etc.)
- **Translate the framework** into additional languages
- **Build tooling** — maturity assessment tools, gap analysis templates, process mapping utilities

## Framework Lineage

**Source:** APQC Process Classification Framework (PCF) v7.3, Cross-Industry

The APQC PCF is the world's most widely adopted process taxonomy. This project adapts its structural logic — L1 categories through L5 tasks, cross-process integration, maturity models, and KPI frameworks — for a fundamentally different institutional context. The original 13 categories are translated with full fidelity; three new categories are added for governance functions that don't exist in enterprise contexts.

This work is not affiliated with or endorsed by APQC.

## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — share and adapt freely with attribution and share-alike.

---

*The Foundation for Global Progress*

*Design. Anything. EVERYTHING. Better.*
