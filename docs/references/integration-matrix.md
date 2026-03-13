# APQC PCF — Cross-Process Integration Matrix

This is the intelligence layer of the framework. Every significant process handoff,
data flow, trigger, and dependency between the 13 PCF categories is mapped here.
Use this to design process architectures, identify broken handoffs, and build
automation between systems.

---

## Integration Map: Operating Process Chains

### Primary Value Chain: Strategy → Product → Market → Deliver → Serve

```
1.2 Develop Business Strategy
  ↓ Strategic direction, targets, investments
2.1 Govern Product/Service Development
  ↓ Product strategy, roadmap
2.2 Generate New Concepts
  ↓ Approved concepts
2.3 Develop Products/Services
  ↓ Launch-ready products
2.4 Deliver to Market
  ↓ Market-ready launch package
3.3/3.4 Marketing and Sales Plans
  ↓ Demand generation
3.6 Manage Selling
  ↓ Signed orders/contracts
4.1 Supply Chain Planning (or 5.2 Service Capacity)
  ↓ Production/service scheduling
4.3 Produce Product (or 5.4 Deliver Services)
  ↓ Delivery confirmation
6.3 Customer Service
  ↓ Satisfaction data
1.1/2.6 Vision Refresh / Product Lifecycle Update
```

---

## Master Integration Table

| From Process | To Process | Integration Type | Data/Object Transferred | Trigger |
|---|---|---|---|---|
| 1.2 Strategy | 2.1 Product Governance | Strategy cascade | Product strategy, investment priorities | Annual planning cycle |
| 1.2 Strategy | 3.2 Marketing Strategy | Strategy cascade | Revenue targets, segment priorities | Annual planning cycle |
| 1.2 Strategy | 7.1 HR Strategy | Strategy cascade | Workforce requirements, org design | Annual planning cycle |
| 1.2 Strategy | 8.1 IT Strategy | Strategy cascade | Technology investment priorities | Annual planning cycle |
| 1.2 Strategy | 9.1 Financial Planning | Strategy cascade | Financial targets, capex priorities | Annual planning cycle |
| 1.2 Strategy | 13.4 Transformation | Initiative launch | Transformation roadmap | Major strategy change |
| 3.1 Market Research | 1.1 Vision | Intelligence feed | Market trends, competitor moves | Quarterly update |
| 3.1 Market Research | 2.2 Concept Generation | Innovation feed | Customer needs, opportunity spaces | Ongoing |
| 3.6 Selling | 4.1 Supply Planning | Order demand | Confirmed orders, pipeline forecast | Per order close |
| 3.6 Selling | 5.2 Service Capacity | Service demand | Service orders, engagement scope | Per contract |
| 3.6 Selling | 9.2 Revenue Accounting | Revenue trigger | Contract value, billing schedule | Contract execution |
| 3.7 Contracts | 9.2 Revenue Accounting | Revenue rules | Payment terms, recognition schedule | Contract execution |
| 3.7 Contracts | 11.2 Compliance | Legal review | Contract terms, SLAs | Pre-execution |
| 4.2 Procurement | 9.6 AP | Invoice flow | Supplier invoices, PO references | Invoice receipt |
| 4.2 Procurement | 11.2 Compliance | Supplier screening | Supplier compliance status | Supplier onboard |
| 4.3 Production | 4.4 Logistics | Product handoff | Finished goods, pick lists | Production completion |
| 4.3 Production | 9.3 GL Accounting | Cost recording | COGS, labor, overhead | Period close |
| 4.3 Production | 10.3 Asset Maintenance | Equipment needs | Maintenance requests, downtime | Equipment event |
| 4.4 Logistics | 6.3 Customer Service | Delivery status | Shipment tracking, delivery confirmation | Order shipped |
| 4.5 Returns | 6.3 Customer Service | Return experience | RMA status, refund confirmation | Customer initiates return |
| 4.5 Returns | 9.2 Revenue Accounting | Credit issuance | Credit memo, return refund | Return approved |
| 5.4 Service Delivery | 6.3 Customer Service | Support handoff | Engagement status, known issues | Service complete/in-progress |
| 5.4 Service Delivery | 9.2 Revenue Accounting | Milestone billing | Completion % or milestone achieved | Milestone hit |
| 5.5 Service Infrastructure | 13.5 Knowledge Mgmt | Knowledge capture | Delivery artifacts, lessons learned | Project close |
| 6.3 Customer Service | 2.2 Concept Generation | Feedback loop | Product issues, feature requests | Ongoing |
| 6.3 Customer Service | 2.6 Lifecycle Mgmt | Retention signal | CSAT, NPS, complaint patterns | Monthly |
| 6.3 Customer Service | 4.3 Production | Defect signal | Product quality issues, recall triggers | Critical complaint |
| 6.4 CX Measurement | 1.1 Vision | Strategic insight | NPS trend, retention data | Quarterly |
| 6.4 CX Measurement | 3.1 Market Research | Customer intelligence | Satisfaction data by segment | Monthly |
| 7.1 HR Planning | 7.2 Recruiting | Headcount demand | Approved reqs by role | Rolling |
| 7.2 Recruiting | 8.5 IT Services | Access provisioning | New hire, start date, role | 1 week pre-start |
| 7.2 Recruiting | 9.5 Payroll | Enrollment | Employee ID, compensation details | Start date |
| 7.3 Development | 13.7 Performance | Goal cascade | Individual KPIs aligned to org KPIs | Annual |
| 7.4 Compensation | 9.5 Payroll | Pay data | Salary, bonus, equity | Comp change event |
| 7.5 Separations | 8.5 IT Services | Access removal | Offboarding checklist, last day | Termination date |
| 7.5 Separations | 9.5 Payroll | Final pay | Separation package, last paycheck | Termination date |
| 8.8 Data Management | 13.7 Performance | Analytics enablement | Enterprise data, dashboards | Ongoing |
| 9.1 Financial Planning | ALL Categories | Budget governance | Approved budgets by cost center | Annual + quarterly |
| 9.2 Revenue Accounting | 9.3 GL | Revenue recording | Revenue journal entries | Period close |
| 9.4 Fixed Assets | 9.3 GL | Asset accounting | Depreciation, disposals | Period close |
| 9.5 Payroll | 9.3 GL | Labor cost | Payroll journal entries | Payroll run |
| 9.6 AP | 9.3 GL | Expense recording | AP journal entries | Invoice payment |
| 9.7 Treasury | 11.1 Enterprise Risk | Financial risk | Liquidity risk, FX risk | Ongoing |
| 10.2 Asset Construction | 9.4 Fixed Assets | Capitalization | Completed asset, cost basis | Asset commissioned |
| 11.1 Enterprise Risk | 1.2 Strategy | Risk-informed strategy | Top enterprise risks | Strategy cycle |
| 11.2 Compliance | 4.2 Procurement | Supplier compliance | Approved supplier list | Vendor onboarding |
| 11.4 Resiliency | 8.3 IT Infrastructure | DR readiness | IT BCP/DR plan | Annual test |
| 12.1 Gov Relations | 11.2 Compliance | Regulatory intelligence | New/changed regulations | Regulatory change |
| 12.2 Investor Relations | 1.2 Strategy | Investor input | Investor expectations, guidance | Earnings cycle |
| 12.2 Investor Relations | 9.3 GL | Financial disclosure | Financial statements | Earnings release |
| 13.1 Process Mgmt | ALL Categories | Process governance | Process standards, improvements | Ongoing |
| 13.3 Quality Mgmt | 4.3 Production | Quality standards | Quality requirements, inspection criteria | New product launch |
| 13.3 Quality Mgmt | 2.3 Product Dev | Quality requirements | Design standards, test criteria | Development phase |
| 13.4 Transformation | 7.3 Development | Reskilling | Training needs, curriculum | Transformation initiative |
| 13.4 Transformation | 7.7 Communications | Change comms | Communication plan, messages | Transformation initiative |
| 13.6 CI | ALL Categories | Improvement flow | Improvement ideas, CI projects | Ongoing |
| 13.7 Performance | 1.3 Strategic Initiatives | Performance signal | Actual vs. target, variance | Monthly/quarterly |
| 13.7 Performance | 13.1 Process Mgmt | Process feedback | Process performance gaps | Ongoing |
| 13.7 Performance | 13.6 CI | CI targeting | Underperforming process areas | Monthly |

---

## High-Priority Broken Handoffs (Most Common in Organizations)

These are the handoffs organizations most frequently botch. When doing gap analysis,
check these first:

| #  | Handoff | Common Failure Mode | Impact |
|----|---------|---------------------|--------|
| 1  | 3.6 Close → 5.2 Service Capacity | Sales closes deals without checking delivery capacity | Overcommitment, delivery failure |
| 2  | 3.6 Close → 5.4 Delivery | Poor handoff: delivery doesn't know what was sold | Misaligned expectations |
| 3  | 6.3 CX Feedback → 2.2 Concepts | Customer complaints never reach product team | Repeated defects |
| 4  | 1.2 Strategy → 9.1 Budget | Budget not aligned to strategic priorities | Wrong things funded |
| 5  | 7.2 Recruiting → 8.5 IT | IT not notified of new hires; access not ready day 1 | Poor employee experience |
| 6  | 4.2 Procurement → 11.2 Compliance | Vendors onboarded without compliance screening | Regulatory exposure |
| 7  | 13.7 Performance → 13.6 CI | Performance data exists but never drives improvement | Data that doesn't matter |
| 8  | 2.3 Development → 4.0 Operations | Products launched without operations readiness | Delivery failure |
| 9  | 9.1 Budget → ALL Dept Owners | Budget allocated but not communicated; spending without clarity | Variance, waste |
| 10 | 11.1 Risk → 1.2 Strategy | Risk ignored in strategy sessions | Strategy disconnected from reality |

---

## Circular Value Loops (Where Outputs Feed Back as Inputs)

These are the learning and improvement cycles within the PCF:

```
Loop 1: Customer Intelligence Loop
  Customer interaction (6.3)
    → Customer insights (3.1)
    → Product concepts (2.2)
    → Better products (2.3, 2.4)
    → Better customer experience (6.4)
    → Improved retention metrics (6.4)
    → Back to 3.1

Loop 2: Strategy Performance Loop
  Strategy set (1.2)
    → Initiatives launched (1.3)
    → Performance measured (13.7)
    → Results inform strategy refresh (1.3 → 1.2)

Loop 3: Talent Development Loop
  Hire talent (7.2)
    → Develop talent (7.3)
    → Performance achieved (13.7)
    → Performance drives reward (7.4)
    → Retention improves (7.4 → 7.5)

Loop 4: Quality Improvement Loop
  Quality measured (13.3)
    → Issues identified (13.6)
    → Process improved (13.1)
    → Better quality output (4.3 or 5.4)
    → Better customer satisfaction (6.4)

Loop 5: Financial Planning Loop
  Strategy sets targets (1.2 → 9.1)
    → Budget allocated to operations
    → Actuals recorded (9.3)
    → Variance analyzed (9.1)
    → Plan updated (9.1 forecast)
    → Informs next strategy cycle
```

---

## Integration Design Patterns

### Pattern 1: Information Flow
One process produces data that another process consumes as input.
Design: API integration, shared data layer, regular data feed
Example: 3.6 (CRM) → 9.2 (ERP) order-to-cash automation

### Pattern 2: Trigger Flow
An event in one process launches an activity in another.
Design: Event-driven architecture, workflow orchestration
Example: New hire approved (7.2) → IT provisioning request (8.5)

### Pattern 3: Governance Flow
One process sets rules and standards that another must follow.
Design: Policy management, approval workflows, SLA embedding
Example: 13.3 Quality → 4.3 Production quality standards

### Pattern 4: Feedback Loop
Outputs of downstream processes improve upstream process design.
Design: Structured review cadences, reporting dashboards, feedback forms
Example: 6.4 CSAT → 2.6 Product Lifecycle decisions

### Pattern 5: Resource Flow
One process provides capacity/resources that another needs to execute.
Design: Demand planning integration, resource management systems
Example: 7.2 Recruiting → capacity supplied to 5.4 Delivery

---

## Integration Maturity Levels

| Level | Description | Characteristics |
|-------|-------------|-----------------|
| 0 | Disconnected | Handoffs are manual, ad hoc, or nonexistent |
| 1 | Documented | Handoffs are documented as policies/SOPs |
| 2 | Systematic | Handoffs happen consistently with clear owners |
| 3 | Digitized | Systems pass data automatically (no manual re-entry) |
| 4 | Automated | Triggers fire automatically (no human initiation) |
| 5 | Intelligent | AI/ML optimizes the handoff, anticipates needs, self-improves |

Most organizations are at Level 1–2 for most integrations.
Target Level 3–4 for high-volume, high-value integrations.
Level 5 is the frontier for strategic integrations.
