# GitHub Projects Setup Guide

GitHub Projects (v2) must be configured through the GitHub web UI. This document specifies the intended project structure for the ple-gps community.

---

## Project 1: Community Roadmap

**Purpose:** High-level view of where the project is going — visible to everyone.

### Views

#### Table View: "All Items"
Fields:
- Title
- Status (Backlog / In Progress / Done)
- Working Group (WG-THEORY / WG-POLICY / WG-TECH / WG-COMMUNITY / WG-COMMS / WG-GOVERNANCE)
- Phase (Phase 1: Foundation / Phase 2: Depth / Phase 3: Scale)
- Priority (High / Medium / Low)
- Assignees

#### Board View: "By Phase"
Columns: Phase 1 | Phase 2 | Phase 3 | Icebox

#### Board View: "By Working Group"
Columns: WG-THEORY | WG-POLICY | WG-TECH | WG-COMMUNITY | WG-COMMS | WG-GOVERNANCE

---

## Project 2: Active Sprint (per WG or cross-cutting)

**Purpose:** Current cycle's active work — what's being worked on right now.

### Views

#### Board View: "Kanban"
Columns: Backlog | Claimed | In Progress | In Review | Done

**Automation rules:**
- When issue is assigned → move to "Claimed"
- When PR is opened linking to issue → move to "In Progress"
- When PR is approved → move to "In Review"
- When PR is merged → move to "Done"

#### Table View: "By Owner"
Grouped by: Assignees
Fields: Title, WG, Status, Due Date

---

## Project 3: Good First Issues

**Purpose:** Public-facing board for newcomers to find work.

**Auto-populate:** All issues labeled `good-first-issue` + `help-wanted`

### Views

#### Board View: "By WG"
Columns: WG-THEORY | WG-POLICY | WG-TECH | WG-COMMUNITY | WG-COMMS | WG-GOVERNANCE | General

**Filter:** Only unclaimed (unassigned) issues visible

---

## Setup Steps (Web UI)

1. Go to `github.com/sillinous/ple-gps/projects` → New Project
2. Start from scratch (not a template)
3. Name: "Community Roadmap"
4. Add custom fields as specified above
5. Create the views as specified
6. Repeat for Project 2 and 3
7. Link to Projects from README.md

---

## Automation to Enable

In each project settings → Workflows:
- **Auto-add to project:** Issues with label `proposal` or `research` → add to Community Roadmap
- **Auto-archive done items:** Items in "Done" for 14+ days → archive

---

## Project Links in README

Add this section to README.md once projects are set up:

```markdown
## Community Projects

| Project | Purpose |
|---|---|
| [Community Roadmap](link) | Where we're going — high level |
| [Active Work](link) | What's being worked on right now |
| [Good First Issues](link) | Start here if you're new |
```
