# PCF Categories 9.0–13.0 — Financial, Asset, Risk, External, and Capability Management

---

# PCF Category 9.0 — Manage Financial Resources

**Domain:** Management & Support | **Value Type:** Financial Integrity & Control
**Feeds Into:** All categories via budget/reporting
**Receives From:** 3.6, 4.2, 4.3, 5.4, 7.4, 8.7

---

## L2: Process Groups

### 9.1 Perform Financial Planning and Management Accounting

#### L3 Processes
```
9.1.1  Develop annual operating plan (AOP)
9.1.2  Develop long-range financial plan
9.1.3  Perform financial consolidation and reporting
9.1.4  Manage financial forecasting
9.1.5  Manage cost accounting and control
9.1.6  Manage capital planning
```

#### L4 Activities
```
9.1.1.1  Issue budget guidance to business units
9.1.1.2  Collect and consolidate departmental budgets
9.1.1.3  Review and approve AOP with executive team
9.1.1.4  Publish approved budget to cost center owners
9.1.2.1  Build 3–5 year financial model
9.1.2.2  Stress-test long-range plan against scenarios
9.1.3.1  Produce monthly P&L, balance sheet, cash flow
9.1.3.2  Conduct variance analysis vs. plan
9.1.4.1  Produce rolling 12-month forecast
9.1.4.2  Update forecast monthly based on actuals
9.1.5.1  Allocate indirect costs to cost centers
9.1.5.2  Produce product/segment profitability reports
9.1.6.1  Evaluate capital investment proposals
9.1.6.2  Prioritize and approve CAPEX projects
```

#### KPIs
- Forecast accuracy (actual vs. forecast variance %)
- Budget cycle time
- Budget variance (actual vs. budget %)
- FP&A analyst productivity

---

### 9.2 Perform Revenue Accounting

#### L3 Processes
```
9.2.1  Process customer orders for accounting purposes
9.2.2  Maintain accounts receivable
9.2.3  Manage collections
9.2.4  Manage revenue recognition
9.2.5  Produce revenue reports
```

#### L4 Activities
```
9.2.1.1  Create sales order from contract (feeds 3.7)
9.2.1.2  Issue invoices to customers
9.2.2.1  Post customer payments
9.2.2.2  Apply cash and reconcile AR
9.2.3.1  Generate aging AR report
9.2.3.2  Execute collections outreach
9.2.3.3  Manage bad debt and write-offs
9.2.4.1  Apply ASC 606 / IFRS 15 recognition rules
9.2.4.2  Manage deferred revenue schedule
```

#### KPIs
- Days Sales Outstanding (DSO)
- AR turnover rate
- Collection rate
- Invoice accuracy rate
- Revenue recognition cycle time

#### Integration Triggers
- Receives ← 3.6, 3.7 (contracts drive order creation)
- Receives ← 5.4 (service delivery milestones trigger invoicing)
- Receives ← 6.3 (returns and credits reduce revenue)
- Feeds → 9.3 (revenue feeds GL)

---

### 9.3 Perform General Accounting and Reporting

#### L3 Processes
```
9.3.1  Manage general ledger
9.3.2  Manage period-end close
9.3.3  Reconcile accounts
9.3.4  Produce financial statements
9.3.5  Manage external audit
```

#### KPIs
- Close cycle time (business days)
- Journal entry error rate
- Account reconciliation completion rate
- Audit findings count

---

### 9.4 Manage Fixed Assets

#### L3 Processes
```
9.4.1  Manage fixed asset records
9.4.2  Process asset transactions (additions, disposals, transfers)
9.4.3  Calculate and record depreciation
9.4.4  Reconcile fixed asset ledger
```

#### Integration Triggers
- Receives ← 10.2 (constructed assets capitalized)
- Receives ← 4.3 (production equipment capitalized)
- Feeds → 9.3 (depreciation feeds P&L)

---

### 9.5 Process Payroll

#### L3 Processes
```
9.5.1  Administer employee payroll
9.5.2  Process payroll taxes
9.5.3  Process employee expense reimbursements
9.5.4  Manage payroll reporting
```

#### Integration Triggers
- Receives ← 7.4 (compensation data)
- Receives ← 7.6 (employee records)
- Feeds → 9.3 (labor costs feed GL)

---

### 9.6 Process Accounts Payable and Expense Reimbursements

#### L3 Processes
```
9.6.1  Process supplier invoices
9.6.2  Manage purchase orders and receipts
9.6.3  Process employee expense reports
9.6.4  Manage payments to suppliers
```

#### Integration Triggers
- Receives ← 4.2 (supplier invoices from procurement)
- Receives ← 8.7 (IT vendor invoices)
- Feeds → 9.3 (expenses feed GL)

---

### 9.7 Manage Treasury Operations

#### L3 Processes
```
9.7.1  Manage cash and liquidity
9.7.2  Manage capital structure
9.7.3  Manage financial risk
9.7.4  Manage banking relationships
```

#### Integration Triggers
- Feeds → 11.1 (financial risk informs enterprise risk)
- Receives ← 12.2 (investor relations informs capital decisions)

---

### 9.8 Manage Internal Controls

#### L3 Processes
```
9.8.1  Establish financial controls framework
9.8.2  Operate controls (SOX or equivalent)
9.8.3  Monitor controls and remediate deficiencies
```

#### Integration Triggers
- Feeds → 11.2 (compliance framework)

---

### 9.9 Manage Taxes

#### L3 Processes
```
9.9.1  Manage corporate tax compliance
9.9.2  Manage indirect/sales tax
9.9.3  Manage transfer pricing
9.9.4  Manage tax planning
```

---
---

# PCF Category 10.0 — Acquire, Construct and Manage Assets

**Domain:** Management & Support | **Value Type:** Physical Asset Management

---

## L2: Process Groups

### 10.1 Develop and Manage Property Strategy

#### L3 Processes
```
10.1.1  Evaluate and select real estate/facilities
10.1.2  Manage lease portfolio
10.1.3  Develop facilities strategy
```

#### Integration Triggers
- Receives ← 7.1 (headcount plan drives space needs)
- Receives ← 1.2 (location strategy)

---

### 10.2 Develop and Construct Assets

#### L3 Processes
```
10.2.1  Plan and design assets (facilities, equipment)
10.2.2  Manage construction projects
10.2.3  Commission and hand over assets
```

#### Integration Triggers
- Output → 9.4 (constructed assets capitalized)
- Receives ← 9.1 (capex budget approved)

---

### 10.3 Manage Asset Maintenance and Operations

#### L3 Processes
```
10.3.1  Develop asset maintenance strategy
10.3.2  Perform preventive maintenance
10.3.3  Perform corrective maintenance
10.3.4  Manage facilities operations
```

#### KPIs
- Asset availability rate
- Planned vs. emergency maintenance ratio
- Facilities cost per square foot
- Energy consumption per unit

#### Integration Triggers
- Receives ← 4.3 (production equipment maintenance)
- Feeds → 9.4 (maintenance costs capitalized or expensed)

---

### 10.4 Dispose of Assets

#### L3 Processes
```
10.4.1  Identify assets for disposal
10.4.2  Execute asset disposal
10.4.3  Record asset disposal in financial records
```

---
---

# PCF Category 11.0 — Manage Enterprise Risk, Compliance, Remediation and Resiliency

**Domain:** Management & Support | **Value Type:** Risk Protection
**Feeds Into:** 1.2, 4.2, 9.7, 13.4
**Receives From:** All categories (risk intelligence sourced everywhere)

---

## L2: Process Groups

### 11.1 Manage Enterprise Risk

#### L3 Processes
```
11.1.1  Establish risk management framework
11.1.2  Identify and assess enterprise risks
11.1.3  Develop risk mitigation strategies
11.1.4  Monitor and report risks
11.1.5  Manage risk appetite and tolerance
```

#### L4 Activities
```
11.1.1.1  Define risk categories (strategic, operational, financial, compliance, reputational)
11.1.1.2  Establish enterprise risk committee
11.1.2.1  Conduct enterprise risk assessment (annual)
11.1.2.2  Score risks by probability × impact
11.1.2.3  Build enterprise risk register
11.1.3.1  Assign risk owners
11.1.3.2  Develop risk treatment plans (accept/transfer/mitigate/avoid)
11.1.4.1  Report top risks to board/executive team quarterly
11.1.4.2  Track risk treatment plan progress
```

#### KPIs
- Risk register completeness
- % risks with active mitigation plans
- Risk event frequency (actual vs. forecast)
- Board risk reporting cadence

#### Integration Triggers
- Feeds → 1.2 (risk shapes strategy)
- Feeds → 9.7 (financial risks inform treasury)
- Receives ← ALL categories (each function is a risk source)

---

### 11.2 Manage Compliance

#### L3 Processes
```
11.2.1  Identify regulatory requirements
11.2.2  Develop compliance programs
11.2.3  Monitor compliance activities
11.2.4  Manage regulatory change
11.2.5  Manage licenses and permits
```

#### L4 Activities
```
11.2.1.1  Identify applicable regulations by jurisdiction
11.2.1.2  Map regulations to affected business processes
11.2.2.1  Design controls to address compliance requirements
11.2.3.1  Conduct compliance monitoring and testing
11.2.3.2  Report compliance status to leadership
11.2.4.1  Track regulatory changes
11.2.4.2  Assess impact of new regulations
```

#### KPIs
- Compliance violation rate
- Regulatory audit findings
- Compliance training completion rate
- Regulatory change response time

---

### 11.3 Manage Remediation Efforts

#### L3 Processes
```
11.3.1  Identify and investigate compliance and risk incidents
11.3.2  Develop remediation plans
11.3.3  Execute and monitor remediation
11.3.4  Report remediation status
```

---

### 11.4 Manage Business Resiliency

#### L3 Processes
```
11.4.1  Develop business continuity strategy
11.4.2  Develop and test BCP/DR plans
11.4.3  Manage crisis response
11.4.4  Conduct resiliency exercises
```

#### Integration Triggers
- Feeds → 8.3 (IT disaster recovery)
- Feeds → 4.0 (supply chain contingency)

---

### 11.5 Manage Legal Affairs

#### L3 Processes
```
11.5.1  Manage legal entity structures
11.5.2  Manage contracts and agreements (legal review)
11.5.3  Manage litigation and disputes
11.5.4  Manage IP and patents
11.5.5  Provide legal advisory services
```

---
---

# PCF Category 12.0 — Manage External Relationships

**Domain:** Management & Support | **Value Type:** Stakeholder Trust

---

## L2: Process Groups

### 12.1 Manage Government and Industry Relationships

#### L3 Processes
```
12.1.1  Manage regulatory relationships
12.1.2  Manage government affairs and lobbying
12.1.3  Manage trade association participation
```

#### Integration Triggers
- Feeds → 11.2 (regulatory insight informs compliance)
- Feeds → 1.1 (external landscape intelligence)

---

### 12.2 Manage Investor Relationships

#### L3 Processes
```
12.2.1  Plan and manage investor communications
12.2.2  Manage earnings calls and reporting
12.2.3  Manage investor days and roadshows
12.2.4  Manage shareholder concerns
```

#### KPIs
- Investor satisfaction score
- Guidance accuracy (actual vs. guidance)
- Analyst coverage breadth

#### Integration Triggers
- Feeds → 1.2 (investor expectations shape strategy)
- Receives ← 9.3 (financial results for disclosure)

---

### 12.3 Manage Analyst and Media Relationships

#### L3 Processes
```
12.3.1  Manage press and media relations
12.3.2  Manage analyst relations (industry analysts)
12.3.3  Manage social media and digital reputation
12.3.4  Manage crisis communications
```

---

### 12.4 Manage Board Relationships

#### L3 Processes
```
12.4.1  Manage board governance and composition
12.4.2  Manage board communications and reporting
12.4.3  Manage executive compensation (compensation committee)
```

---

### 12.5 Manage Community and Social Responsibility

#### L3 Processes
```
12.5.1  Develop CSR/ESG strategy
12.5.2  Manage community engagement programs
12.5.3  Manage ESG reporting and disclosure
12.5.4  Manage philanthropy and giving programs
```

#### Integration Triggers
- Feeds → 1.1 (ESG shapes vision)
- Feeds → 7.7 (employee CSR communications)

---

### 12.6 Manage Environmental Health and Safety

#### L3 Processes
```
12.6.1  Develop EHS strategy and standards
12.6.2  Manage environmental compliance
12.6.3  Manage health and safety programs
12.6.4  Manage EHS incidents and reporting
```

---
---

# PCF Category 13.0 — Develop and Manage Business Capabilities

**Domain:** Management & Support | **Value Type:** Organizational Improvement
**This is the meta-category — it governs how the organization improves ALL other processes**

---

## L2: Process Groups

### 13.1 Manage Business Processes

#### L3 Processes
```
13.1.1  Establish process management approach
13.1.2  Define and document processes
13.1.3  Manage process performance
13.1.4  Improve processes
13.1.5  Deploy process improvements
```

#### L4 Activities
```
13.1.1.1  Establish process ownership model
13.1.1.2  Define process documentation standards
13.1.1.3  Build process repository/registry
13.1.2.1  Map processes at appropriate level of detail
13.1.2.2  Document process roles, systems, and measures
13.1.3.1  Define process KPIs and targets
13.1.3.2  Monitor process performance vs. targets
13.1.4.1  Identify improvement opportunities
13.1.4.2  Prioritize improvements by impact/effort
13.1.4.3  Design and test process improvements
13.1.5.1  Communicate and train on new process
13.1.5.2  Monitor adoption of improved process
```

#### Integration Triggers
- **This is the hub — 13.1 governs improvement of all 12 other categories**
- Receives ← 13.7 (performance data identifies improvement targets)
- Receives ← 6.4 (customer satisfaction data)

---

### 13.2 Manage Portfolio, Programs, and Projects

#### L3 Processes
```
13.2.1  Manage enterprise project portfolio
13.2.2  Define and launch programs
13.2.3  Define and launch projects
13.2.4  Execute and control projects
13.2.5  Close projects
```

#### L4 Activities
```
13.2.1.1  Maintain project portfolio registry
13.2.1.2  Prioritize projects by strategic value
13.2.1.3  Allocate resources across portfolio
13.2.2.1  Define program scope, governance, and success criteria
13.2.3.1  Develop project charter
13.2.3.2  Build project plan (scope, schedule, budget, risks)
13.2.4.1  Track project milestones
13.2.4.2  Manage project issues and risks
13.2.4.3  Manage scope change
13.2.5.1  Conduct lessons learned
13.2.5.2  Archive project documentation
```

#### KPIs
- Portfolio ROI
- Project on-time delivery rate
- Project budget adherence
- Benefits realization rate

---

### 13.3 Manage Quality

#### L3 Processes
```
13.3.1  Establish quality strategy
13.3.2  Develop quality standards and procedures
13.3.3  Manage quality assurance activities
13.3.4  Manage quality control activities
13.3.5  Measure and improve quality
```

#### L4 Activities
```
13.3.1.1  Define quality policy and objectives
13.3.2.1  Develop quality management system (QMS)
13.3.3.1  Conduct process audits
13.3.4.1  Manage non-conformance and corrective actions
13.3.5.1  Apply Six Sigma, Lean, or DMAIC methodologies
```

#### KPIs
- Defect rate (DPMO)
- First-pass yield
- Customer complaint rate
- Cost of poor quality (COPQ)

---

### 13.4 Manage Change and Organizational Transformation

#### L3 Processes
```
13.4.1  Develop transformation strategy and roadmap
13.4.2  Build change management capability
13.4.3  Design change management approach for initiatives
13.4.4  Execute change management activities
13.4.5  Sustain change and measure adoption
```

#### L4 Activities
```
13.4.1.1  Define transformation vision and objectives
13.4.1.2  Sequence transformation initiatives
13.4.2.1  Develop change management methodology
13.4.3.1  Assess stakeholder impacts per initiative
13.4.3.2  Develop stakeholder engagement plan
13.4.3.3  Develop communications plan
13.4.3.4  Develop training plan
13.4.4.1  Execute stakeholder communications
13.4.4.2  Execute training programs (feeds 7.3)
13.4.5.1  Measure adoption and benefits realization
13.4.5.2  Identify and address resistance
```

#### KPIs
- Change adoption rate
- Employee change readiness score
- Benefits realization rate (vs. business case)
- Transformation initiative completion rate

#### Integration Triggers
- Receives ← 1.2 (strategy drives transformation roadmap)
- Feeds → 7.3, 7.7 (training and communications)
- Feeds → ALL categories (every major transformation affects them)

---

### 13.5 Develop and Manage Knowledge Management Capability

#### L3 Processes
```
13.5.1  Develop KM strategy
13.5.2  Build knowledge capture and codification capabilities
13.5.3  Manage knowledge access and sharing
13.5.4  Manage communities of practice
13.5.5  Measure KM effectiveness
```

#### Integration Triggers
- Receives ← 5.5 (delivery knowledge)
- Receives ← 7.3 (learning and development content)
- Feeds → 6.3 (knowledge base enables customer service)
- Feeds → ALL categories (knowledge amplifies every process)

---

### 13.6 Manage Continuous Improvement

#### L3 Processes
```
13.6.1  Establish CI culture and framework
13.6.2  Manage improvement pipeline
13.6.3  Implement improvement initiatives
13.6.4  Measure and report CI outcomes
```

#### L4 Activities
```
13.6.1.1  Define CI methodology (Lean, Kaizen, Agile, PDCA)
13.6.1.2  Train improvement champions
13.6.2.1  Collect and prioritize improvement ideas
13.6.2.2  Conduct rapid improvement events (Kaizen)
13.6.3.1  Implement improvements with minimal disruption
13.6.4.1  Track value delivered from CI activities (cost, time, quality)
```

#### Integration Triggers
- **Feeds improvement intelligence into ALL 13 categories**
- Receives ← 13.7 (performance data identifies CI opportunities)

---

### 13.7 Measure Organizational Performance

#### L3 Processes
```
13.7.1  Develop organizational performance management approach
13.7.2  Define organizational metrics and targets
13.7.3  Collect and analyze performance data
13.7.4  Report organizational performance
13.7.5  Align individual performance to org performance
```

#### L4 Activities
```
13.7.1.1  Select performance management framework (BSC, OKR, etc.)
13.7.2.1  Define L1-L3 metrics for each strategic objective
13.7.2.2  Set annual targets by metric
13.7.3.1  Collect data from source systems
13.7.3.2  Build and maintain executive dashboard
13.7.4.1  Produce monthly performance report
13.7.4.2  Conduct quarterly strategy review
13.7.5.1  Cascade org metrics to individual goals (feeds 7.3)
```

#### KPIs
- Performance dashboard coverage (% strategic objectives tracked)
- Data freshness (lag from event to report)
- Strategy review adherence
- OKR completion rate

#### Integration Triggers
- **This is the feedback engine that drives all improvement**
- Output → 1.3 (performance data triggers strategy adjustment)
- Output → 13.1, 13.6 (performance data identifies improvement targets)
- Output → 7.3 (performance cascades to individual goals)
- Receives ← ALL categories (every process generates performance data)
