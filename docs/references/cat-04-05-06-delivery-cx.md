# PCF Categories 4.0, 5.0, 6.0 — Deliver and Serve

---

# PCF Category 4.0 — Deliver Physical Products

**Domain:** Operating Process | **Value Type:** Physical Value Delivery
**Feeds Into:** 6.0, 9.3, 10.3
**Receives From:** 3.6, 3.7, 1.2, 7.0, 9.1, 10.0, 11.0

---

## L2: Process Groups

### 4.1 Plan for and Align Supply Chain Resources

#### L3 Processes
```
4.1.1  Develop demand forecasts
4.1.2  Develop distribution plan
4.1.3  Develop production and materials plan
4.1.4  Develop capacity plan
4.1.5  Develop supply chain strategy
4.1.6  Manage demand plan
```

#### L4 Activities
```
4.1.1.1  Collect historical sales data
4.1.1.2  Apply statistical forecasting models
4.1.1.3  Incorporate sales pipeline inputs
4.1.1.4  Publish consensus demand forecast
4.1.2.1  Map distribution network
4.1.2.2  Set safety stock and reorder points
4.1.3.1  Generate materials requirements (MRP run)
4.1.3.2  Schedule production orders
4.1.4.1  Assess production capacity vs. plan
4.1.4.2  Resolve capacity gaps (overtime, subcontract, investment)
4.1.5.1  Evaluate make vs. buy decisions
4.1.5.2  Define sourcing strategy
4.1.6.1  Run integrated S&OP process
4.1.6.2  Reconcile supply and demand
```

#### KPIs
- Forecast accuracy (MAPE)
- Inventory turnover
- Capacity utilization
- S&OP cycle adherence
- Perfect order rate

#### Integration Triggers
- Receives ← 3.6 (order pipeline drives demand plan)
- Receives ← 2.4 (new product launches signal demand changes)
- Output → 4.2 (procurement plan)
- Output → 4.3 (production schedule)

---

### 4.2 Procure Materials and Services

#### L3 Processes
```
4.2.1  Develop sourcing strategies
4.2.2  Select suppliers and develop agreements
4.2.3  Order materials and services
4.2.4  Manage suppliers and assess performance
4.2.5  Manage supplier contracts
```

#### L4 Activities
```
4.2.1.1  Categorize spend (strategic, leverage, routine, bottleneck)
4.2.1.2  Define sourcing strategy by category
4.2.2.1  Issue RFQ/RFP
4.2.2.2  Evaluate supplier bids
4.2.2.3  Negotiate and execute supplier agreements
4.2.3.1  Generate and approve purchase orders
4.2.3.2  Track PO status to delivery
4.2.4.1  Measure supplier KPIs (quality, delivery, cost)
4.2.4.2  Conduct quarterly business reviews with key suppliers
4.2.5.1  Maintain supplier contract repository
4.2.5.2  Manage contract renewals and amendments
```

#### KPIs
- PO fulfillment rate
- Supplier delivery on-time rate
- Supplier quality rate (defects per million)
- Purchase price variance
- Procurement cycle time

#### Integration Triggers
- Feeds → 9.6 (AP processes invoices from suppliers)
- Feeds → 11.2 (compliance screens suppliers)
- Receives ← 10.1 (asset procurement via facilities)

---

### 4.3 Produce/Manufacture/Deliver Product

#### L3 Processes
```
4.3.1  Schedule production
4.3.2  Produce product
4.3.3  Perform quality assurance
4.3.4  Manage production workflow
4.3.5  Operate manufacturing/production equipment
4.3.6  Manage product recalls
```

#### L4 Activities
```
4.3.1.1  Release work orders
4.3.1.2  Sequence jobs on shop floor
4.3.2.1  Execute production steps per BOM/router
4.3.2.2  Record production actuals
4.3.3.1  Inspect in-process production
4.3.3.2  Inspect finished goods
4.3.3.3  Manage non-conformances
4.3.4.1  Monitor real-time production KPIs
4.3.4.2  Manage production bottlenecks
4.3.5.1  Maintain equipment per PM schedule
4.3.5.2  Respond to equipment breakdowns
4.3.6.1  Detect and investigate product defects
4.3.6.2  Execute customer recall/notification
```

#### KPIs
- OEE (Overall Equipment Effectiveness)
- First-pass yield
- Scrap and rework rate
- On-time production rate
- DPMO (defects per million opportunities)

#### Integration Triggers
- Receives ← 4.1 (schedule)
- Receives ← 4.2 (materials)
- Output → 4.4 (finished goods to logistics)
- Output → 9.3 (COGS to accounting)
- Output → 10.3 (equipment maintenance feeds asset management)

---

### 4.4 Manage Logistics and Warehousing

#### L3 Processes
```
4.4.1  Manage inbound logistics
4.4.2  Operate warehousing
4.4.3  Operate outbound logistics
4.4.4  Manage transportation
```

#### L4 Activities
```
4.4.1.1  Receive and inspect inbound materials
4.4.1.2  Put away to warehouse locations
4.4.2.1  Pick, pack, and stage orders
4.4.2.2  Conduct cycle counts and inventory reconciliation
4.4.3.1  Ship orders and generate documentation
4.4.3.2  Track shipments to customer delivery
4.4.4.1  Select and manage carriers
4.4.4.2  Optimize routing and load planning
```

#### KPIs
- Order fill rate
- On-time delivery rate
- Inventory accuracy rate
- Freight cost per unit shipped
- Pick accuracy rate

---

### 4.5 Manage Return/Reverse Logistics

#### L3 Processes
```
4.5.1  Process customer returns (RMA)
4.5.2  Manage disposition of returned goods
4.5.3  Manage warranty claims
```

#### Integration Triggers
- Feeds → 6.3 (customer service manages return experience)
- Feeds → 9.2 (credits and refunds impact revenue)
- Feeds → 11.1 (product safety issues trigger risk management)

---

## Category 4 Integration Summary

```
INPUTS:
  ← 3.6  Orders from customers
  ← 1.2  Supply chain strategy
  ← 7.0  Workforce for production roles
  ← 9.1  Capital budget for production investment

OUTPUTS:
  → 6.0  Delivery confirmations enable customer service
  → 9.3  Cost of goods feeds financial reporting
  → 10.3 Production equipment feeds asset management
```

---
---

# PCF Category 5.0 — Deliver Services

**Domain:** Operating Process | **Value Type:** Service Value Delivery
**Feeds Into:** 6.0, 9.3
**Receives From:** 3.6, 3.7, 1.2, 7.0, 8.0, 9.1

---

## L2: Process Groups

### 5.1 Establish Service Delivery Governance and Strategy

#### L3 Processes
```
5.1.1  Define service delivery model
5.1.2  Develop service delivery standards
5.1.3  Establish service management governance
5.1.4  Define service levels and SLAs
```

#### L4 Activities
```
5.1.1.1  Choose delivery model (in-house, outsourced, hybrid)
5.1.1.2  Define delivery channels (digital, field, center)
5.1.2.1  Develop service delivery playbooks
5.1.2.2  Define quality standards and acceptance criteria
5.1.3.1  Establish service management office or governance body
5.1.4.1  Define SLA metrics and targets
5.1.4.2  Embed SLAs in customer contracts
```

#### Integration Triggers
- Receives ← 1.2 (strategic direction)
- Receives ← 3.7 (contract SLAs inform service standards)
- Output → 5.4 (standards guide execution)

---

### 5.2 Plan and Align Service Delivery Resources

#### L3 Processes
```
5.2.1  Forecast service demand
5.2.2  Plan service delivery capacity
5.2.3  Schedule service delivery resources
5.2.4  Manage service delivery workforce plan
```

#### L4 Activities
```
5.2.1.1  Analyze historical service volumes
5.2.1.2  Incorporate sales pipeline for new demand
5.2.2.1  Map capacity vs. demand by channel/resource type
5.2.2.2  Identify and resolve capacity gaps
5.2.3.1  Build resource schedule for upcoming period
5.2.3.2  Manage schedule adherence in-period
5.2.4.1  Identify workforce requirements with HR (feeds 7.2)
```

#### Integration Triggers
- Receives ← 3.6 (orders/bookings drive demand forecast)
- Feeds → 7.2 (talent demand for delivery roles)
- Feeds → 9.1 (resource cost feeds financial plan)

---

### 5.3 Manage Service Delivery Partners and Suppliers

#### L3 Processes
```
5.3.1  Identify and select service delivery partners
5.3.2  Manage partner contracts and SLAs
5.3.3  Measure and optimize partner performance
```

---

### 5.4 Deliver Services to Customers

#### L3 Processes
```
5.4.1  Onboard new customers
5.4.2  Deliver service according to service agreement
5.4.3  Manage service delivery exceptions
5.4.4  Complete and close service engagement
```

#### L4 Activities
```
5.4.1.1  Conduct kickoff meeting
5.4.1.2  Configure and provision service environment
5.4.1.3  Complete onboarding checklist with customer
5.4.2.1  Execute scheduled service activities
5.4.2.2  Document service delivery activities
5.4.2.3  Communicate progress to customer
5.4.3.1  Escalate and resolve delivery issues
5.4.3.2  Manage scope change requests
5.4.4.1  Conduct closure review with customer
5.4.4.2  Obtain formal sign-off
5.4.4.3  Archive service records
```

#### KPIs
- SLA attainment rate
- Time to onboard new customers
- Customer satisfaction during delivery (CSAT)
- Service rework rate
- Engagement margin

#### Integration Triggers
- Output → 6.3 (customer support during service delivery)
- Output → 9.2 (service milestones trigger invoicing)
- Output → 9.3 (service cost feeds accounting)

---

### 5.5 Manage Service Delivery Infrastructure

#### L3 Processes
```
5.5.1  Maintain service delivery tools and technology
5.5.2  Manage knowledge and intellectual property for delivery
5.5.3  Manage service delivery facilities
```

#### Integration Triggers
- Feeds → 8.3 (IT infrastructure needs for service delivery)
- Feeds → 10.1 (facilities for service delivery)
- Feeds → 13.5 (delivery knowledge feeds KM)

---

## Category 5 Integration Summary

```
INPUTS:
  ← 3.6, 3.7  Customer orders/contracts define scope
  ← 7.0       Workforce provides delivery capacity
  ← 8.0       IT provides tools and infrastructure
  ← 9.1       Budget constraints govern staffing

OUTPUTS:
  → 6.0  Customer service activated during/after delivery
  → 9.2  Delivery milestones trigger invoicing
  → 9.3  Service delivery costs feed financials
  → 13.5 Delivery learnings feed knowledge management
```

---
---

# PCF Category 6.0 — Manage Customer Service

**Domain:** Operating Process | **Value Type:** Customer Retention / Loyalty
**Feeds Into:** 2.2, 2.6, 3.1, 9.2
**Receives From:** 3.6, 4.4, 5.4

---

## L2: Process Groups

### 6.1 Develop Customer Service Strategy

#### L3 Processes
```
6.1.1  Define customer service delivery approach
6.1.2  Set customer service standards and targets
6.1.3  Design customer service channel strategy
6.1.4  Develop customer service technology strategy
```

#### L4 Activities
```
6.1.1.1  Define service model (self-serve, assisted, premium)
6.1.1.2  Map customer service journey
6.1.2.1  Set CSAT, NPS, resolution time targets
6.1.3.1  Define service channels (chat, phone, email, portal, field)
6.1.4.1  Select and deploy customer service platforms (CRM, ticketing)
```

---

### 6.2 Plan and Manage Customer Service Operations

#### L3 Processes
```
6.2.1  Develop customer service resource plan
6.2.2  Develop customer service agent training programs
6.2.3  Manage customer service workforce
6.2.4  Manage customer service technology and infrastructure
```

#### L4 Activities
```
6.2.1.1  Forecast service volumes by channel
6.2.1.2  Plan staffing levels
6.2.2.1  Design agent onboarding program
6.2.2.2  Build product knowledge base for agents
6.2.3.1  Hire and onboard service agents (feeds 7.2)
6.2.3.2  Schedule agents based on forecasted volume
6.2.4.1  Maintain ticketing and CRM systems
```

---

### 6.3 Manage Customer Service Requests and Inquiries

#### L3 Processes
```
6.3.1  Receive and route customer inquiries
6.3.2  Respond to customer information requests
6.3.3  Manage customer complaints and escalations
6.3.4  Manage product/service warranties and guarantees
6.3.5  Manage customer feedback
6.3.6  Manage customer service contracts
```

#### L4 Activities
```
6.3.1.1  Triage and categorize incoming contacts
6.3.1.2  Route to appropriate tier/specialist
6.3.2.1  Provide accurate information via knowledge base
6.3.2.2  Resolve inquiries at first contact
6.3.3.1  Acknowledge and log customer complaints
6.3.3.2  Investigate root cause
6.3.3.3  Resolve and communicate resolution to customer
6.3.3.4  Escalate to appropriate internal team (feeds 4.3 for defects)
6.3.4.1  Process warranty claims
6.3.4.2  Authorize and manage replacements/repairs
6.3.5.1  Collect and categorize customer feedback
6.3.5.2  Route product feedback to product team (feeds 2.2)
6.3.5.3  Route process feedback to operations
```

#### KPIs
- First Contact Resolution (FCR) rate
- Average Handle Time (AHT)
- CSAT score
- Customer Effort Score (CES)
- NPS (Net Promoter Score)
- Complaint resolution cycle time
- Escalation rate

#### Integration Triggers
- Output → 2.2 (product feedback drives product innovation)
- Output → 2.6 (defect patterns drive product lifecycle decisions)
- Output → 3.1 (customer insights feed market intelligence)
- Output → 4.3 (product defects trigger recall investigation)
- Receives ← 4.4 (delivery status)
- Receives ← 5.4 (service completion status)

---

### 6.4 Measure and Evaluate Customer Service Operations

#### L3 Processes
```
6.4.1  Measure customer satisfaction
6.4.2  Measure service quality and compliance
6.4.3  Evaluate customer service agent performance
6.4.4  Assess and analyze customer retention
6.4.5  Report customer service performance
```

#### L4 Activities
```
6.4.1.1  Conduct post-interaction surveys
6.4.1.2  Conduct periodic relationship surveys (NPS)
6.4.2.1  Monitor SLA performance
6.4.2.2  Conduct QA call monitoring
6.4.3.1  Scorecard individual agent performance
6.4.4.1  Track customer churn rate by segment
6.4.4.2  Analyze drivers of customer attrition
6.4.5.1  Publish service performance dashboard
6.4.5.2  Present voice of customer to product and strategy teams
```

#### Integration Triggers
- Output → 1.1 (customer satisfaction informs vision)
- Output → 2.6 (retention data informs product lifecycle)
- Output → 3.1 (churn analysis informs marketing/sales)
- Output → 7.3 (performance data drives coaching)

---

## Category 6 Integration Summary

```
INPUTS:
  ← 3.6  Customer sold; service now needed
  ← 4.4  Shipment delivered; customer needs support
  ← 5.4  Service delivered; follow-up support needed

OUTPUTS:
  → 2.2  Product feedback drives new concepts
  → 2.6  Satisfaction data drives lifecycle decisions
  → 3.1  Churn and NPS data informs market strategy
  → 7.3  Agent performance drives training/development
  → 9.2  Returns and credits impact revenue
```
