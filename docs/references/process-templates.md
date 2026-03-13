# APQC PCF — Process Design Templates

---

## Template 1: Process Documentation Standard (L3 Level)

Use for documenting any L3 PCF process.

```markdown
# [PCF Code] [Process Name]

## Process Overview
- **PCF Code:** [e.g., 3.6.3]
- **Process Name:** [Perform sales activities]
- **Process Owner:** [Role, not person]
- **Category:** [Operating / Management & Support]
- **Maturity Level:** [Current: X | Target: Y]

## Purpose
[One paragraph: Why does this process exist? What value does it create?]

## Scope
- **In Scope:** [What this process covers]
- **Out of Scope:** [Adjacent processes explicitly excluded]
- **Applies To:** [Which organizational units, products, geographies]

## Inputs
| Input | Source Process | Format | Frequency |
|-------|----------------|--------|-----------|
| [Input name] | [PCF code and name] | [Data type] | [When received] |

## Outputs
| Output | Destination Process | Format | Frequency |
|--------|---------------------|--------|-----------|
| [Output name] | [PCF code and name] | [Data type] | [When delivered] |

## Process Steps (L4 Activities)
| Step | Activity | Role | System | Time | Decision Point |
|------|----------|------|--------|------|----------------|
| 1 | [Activity description] | [Role] | [System] | [Duration] | [Y/N — if Y, describe] |

## Decision Rules
[Document all decision points with explicit if/then logic]

## Exception Handling
| Exception | Condition | Action | Escalation Path |
|-----------|-----------|--------|-----------------|

## RACI
| Activity | [Role 1] | [Role 2] | [Role 3] | [Role 4] |
|----------|----------|----------|----------|----------|
| [Activity 1] | R | A | C | I |

Legend: R=Responsible, A=Accountable, C=Consulted, I=Informed

## Systems and Tools
| System | Purpose | Data Flow |
|--------|---------|-----------|

## KPIs
| Metric | Formula | Frequency | Target | Current |
|--------|---------|-----------|--------|---------|

## SLAs / Service Standards
[Time-based commitments for process outputs]

## Compliance and Controls
[Regulatory requirements, audit checkpoints, approval gates]

## Process Improvement Log
| Date | Change Description | Rationale | Owner |
|------|-------------------|-----------|-------|
```

---

## Template 2: Process Gap Analysis Report

```markdown
# Process Gap Analysis: [Organization/Function Name]
**Date:** [Date]
**Scope:** [PCF categories assessed]
**Analyst:** [Name]

## Executive Summary
[2-3 sentences on overall process health and top priorities]

## Maturity Heat Map

| Category | L2 Process Group | Current Maturity | Target Maturity | Gap | Priority |
|----------|-----------------|-----------------|-----------------|-----|----------|
| 1.0 | 1.1 Vision | 2 | 3 | 1 | Medium |
| 1.0 | 1.2 Strategy | 3 | 4 | 1 | High |
| [continue for all applicable groups] |

## Critical Gaps (Current ≤2 where Target ≥3)

### Gap 1: [Process Name]
- **Current State:** [Describe what actually happens today]
- **Target State:** [Describe PCF best practice at target maturity]
- **Impact of Gap:** [Cost, risk, customer impact]
- **Root Causes:** [Why is it at this maturity level?]
- **Recommended Actions:**
  1. [Action 1 with timeline]
  2. [Action 2 with timeline]
- **Resources Required:** [People, systems, budget]
- **Expected Benefit:** [Quantified if possible]

## Broken Integration Handoffs

| From Process | To Process | Gap Description | Impact | Fix |
|---|---|---|---|---|

## Improvement Roadmap

### Quick Wins (0–3 months)
[List of improvements doable quickly, high impact, low cost]

### Core Improvements (3–12 months)
[List of significant improvements]

### Transformation Initiatives (12+ months)
[List of major transformation requirements]

## Investment Summary
| Initiative | Effort | Cost Estimate | Expected Benefit | ROI |
|-----------|--------|---------------|-----------------|-----|
```

---

## Template 3: Process Improvement Business Case

```markdown
# Process Improvement Business Case
**Process:** [PCF Code + Name]
**Requested By:** [Name/Role]
**Date:** [Date]

## Problem Statement
[What is broken? What is the impact today?]

## Current State Metrics
| KPI | Current Performance | Benchmark | Gap |
|-----|---------------------|-----------|-----|

## Proposed Improvement
[Description of the improvement: process change, technology, training, etc.]

## Future State Metrics
| KPI | Expected Performance | Improvement | Confidence |
|-----|---------------------|-------------|------------|

## Financial Analysis
| Item | Year 1 | Year 2 | Year 3 |
|------|--------|--------|--------|
| Implementation Cost | $_ | $_ | $_ |
| Recurring Cost | $_ | $_ | $_ |
| **Total Cost** | | | |
| Revenue Impact | $_ | $_ | $_ |
| Cost Savings | $_ | $_ | $_ |
| **Total Benefit** | | | |
| **Net Benefit** | | | |
| **ROI** | | | |
| **Payback Period** | [X months] | | |

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|

## Implementation Plan
| Phase | Activities | Timeline | Resources |
|-------|-----------|----------|-----------|

## Success Criteria
[How will we know the improvement worked? What are the measurable outcomes?]
```

---

## Template 4: Value Stream Map (Process Flow Template)

```markdown
# Value Stream Map: [Process Name]
**Scope:** [Start to end of value stream]
**Customer:** [Internal or external customer of this stream]
**Date:** [Date]

## Current State Flow

| Step # | Activity | Process Time | Lead Time | Wait Time | Quality Rate | Automation? |
|--------|----------|-------------|-----------|-----------|-------------|-------------|
| 1 | [Activity] | [mins] | [days] | [days] | [%] | Y/N |
| 2 | | | | | | |

**Total Process Time:** [Sum]
**Total Lead Time (End-to-End):** [Sum]
**Value-Added Ratio:** Process Time / Lead Time × 100 = [%]
**First-Pass Yield (Overall):** [Product of step quality rates]

## Waste Identification (8 Wastes of Lean)

| Waste Type | Location in Flow | Description | Impact |
|-----------|-----------------|-------------|--------|
| Defects | Step X | [Description] | [Impact] |
| Overproduction | | | |
| Waiting | | | |
| Non-utilized talent | | | |
| Transportation | | | |
| Inventory | | | |
| Motion | | | |
| Extra processing | | | |

## Future State Target Metrics

| Metric | Current | Target | Improvement |
|--------|---------|--------|-------------|
| Total Lead Time | | | |
| Process Time | | | |
| Value-Added Ratio | | | |
| First-Pass Yield | | | |
| Cost per Unit | | | |

## Improvement Actions
[Actions to move from current to future state]
```

---

## Template 5: RACI Matrix for Process Group

```markdown
# RACI Matrix: [Process Group Name]
**PCF Code:** [e.g., 4.1 Supply Chain Planning]

| Process | [Role/Function 1] | [Role/Function 2] | [Role/Function 3] | [Role/Function 4] |
|---------|-----------------|-----------------|-----------------|-----------------|
| 4.1.1 Demand forecasting | R | A | C | I |
| 4.1.2 Distribution plan | C | R | A | I |
| [All L3 processes in group] | | | | |

R=Responsible (does the work)
A=Accountable (ultimate ownership; approves)
C=Consulted (input before decision)
I=Informed (notified after)

## RACI Rules
- Every process must have exactly ONE A
- R and A can be same role
- At least one R per process
- Minimize C (consultation bloat slows processes)
```

---

## Template 6: Technology Alignment Map

```markdown
# Technology Alignment Map: [Scope]

| PCF Category | L2 Process Group | Primary System | Supporting Systems | Integration Status |
|---|---|---|---|---|
| 3.0 | 3.6 Manage Selling | Salesforce CRM | HubSpot, LinkedIn Sales Navigator | Integrated |
| 4.0 | 4.1 Supply Planning | SAP ERP | Kinaxis (demand planning) | Partially integrated |
| [all applicable processes] | | | | |

## System Coverage Assessment

| System | PCF Processes Supported | Processes with Gaps |
|--------|------------------------|---------------------|

## Integration Gap Map

| Source System | Target System | Process Boundary | Current State | Target State |
|---|---|---|---|---|
| Salesforce | SAP ERP | Order creation (3.6 → 9.2) | Manual re-entry | API integration |
```

---

## Template 7: AI Readiness Assessment (per Process)

```markdown
# AI Readiness Assessment: [Process Name]

## Data Readiness
| Dimension | Status | Notes |
|-----------|--------|-------|
| Data exists | Y/N | |
| Data is digital | Y/N | |
| Data is structured | Y/N | |
| Data quality is sufficient | Y/N | |
| Data volume is sufficient | Y/N | |
| Historical data available | Y/N | |
**Data Readiness Score:** [0–6]

## Process Readiness
| Dimension | Status | Notes |
|-----------|--------|-------|
| Process is documented | Y/N | |
| Process is consistent | Y/N | |
| Decision rules are explicit | Y/N | |
| Process is measurable | Y/N | |
| Volume justifies automation | Y/N | |
**Process Readiness Score:** [0–5]

## Organizational Readiness
| Dimension | Status | Notes |
|-----------|--------|-------|
| Executive sponsor identified | Y/N | |
| Change management plan exists | Y/N | |
| Technical skills available | Y/N | |
| Budget approved | Y/N | |
**Org Readiness Score:** [0–4]

## Overall AI Readiness: [Low/Medium/High]
**Recommended Next Step:** [Quick win / Foundation building / Ready to implement]
```
