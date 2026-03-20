# PLE-GPS — Post-Labor Economics Governance Process Standard

**Live site:** [ple-gps.netlify.app](https://ple-gps.netlify.app)  
**Framework status:** 165 / 272 processes with L4 activities (61% coverage, 9 / 16 categories)

---

## What is PLE-GPS?

PLE-GPS is an open governance framework for organizations operating in — or preparing for — a post-labor economy. It defines **16 categories** of organizational process, each broken into process groups, processes, and activity levels (L1–L4), providing a blueprint for governance structures that do not depend on traditional wage-labor relationships.

The framework is rendered as an interactive single-page application built with Vite.

---

## Framework Structure

The 16 categories span the full scope of organizational operation:

| # | Category |
|---|----------|
| 1 | Strategic Leadership & Governance |
| 2 | Community & Stakeholder Relationships |
| 3 | Mission Delivery & Programs |
| 4 | Innovation & Learning |
| 5 | Communication & Narrative |
| 6 | Operations & Administration |
| 7 | Develop Human Potential |
| 8 | Technology & AI Infrastructure |
| 9 | Steward Collective Resources |
| 10 | Legal, Compliance & Ethics |
| 11 | Risk & Resilience |
| 12 | Data & Knowledge Management |
| 13 | Partnerships & Ecosystem |
| 14 | Metrics & Accountability |
| 15 | Transition & Transformation |
| 16 | Community Ownership & Governance |

Each process is documented at up to 4 levels:
- **L1** — Category (e.g., "Develop Human Potential")
- **L2** — Process Group (e.g., "Recruit & Onboard Contributors")
- **L3** — Process (e.g., "Invitation-based activation")
- **L4** — Activities (detailed implementation steps)

---

## Tech Stack

- **Framework:** [Vite](https://vitejs.dev/)
- **Deployment:** [Netlify](https://netlify.app) — auto-deploys from `main`
- **Source:** [`sillinous/ple-gps`](https://github.com/sillinous/ple-gps) (public)

---

## Running Locally

```bash
# Clone
git clone https://github.com/sillinous/ple-gps.git
cd ple-gps

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deploying

This repo is connected to Netlify. Every push to `main` triggers a production deploy automatically.

Build configuration is in [`netlify.toml`](netlify.toml):
- **Build command:** `npm run build`
- **Publish directory:** `dist`

To deploy manually via Netlify CLI:
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to contribute to the framework content, tooling, or community infrastructure.

Framework contributions currently focus on:
- Completing L4 activity detail for remaining 7 categories (107 processes outstanding)
- Improving L3 process definitions
- Community review and validation of published categories

---

## Community

| Resource | Purpose |
|----------|---------|
| [GitHub Discussions](../../discussions) | Questions, proposals, working group coordination |
| [CONTRIBUTING.md](CONTRIBUTING.md) | How to contribute |
| [docs/ONBOARDING.md](docs/ONBOARDING.md) | Start here if you're new |
| [docs/WORKING_GROUPS.md](docs/WORKING_GROUPS.md) | Working group structure |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Where the project is headed |
| [docs/GOVERNANCE.md](docs/GOVERNANCE.md) | Decision-making processes |

---

## Foundation

PLE-GPS is a project of the [Foundation for Global Progress](https://foundationforglobalprogress.org), a 501(c)(3) connecting global technology, resources, and people.

The ideas here belong to the community. Use them, build on them, and contribute back.
