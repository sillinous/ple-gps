// PLE-GPS Framework Data
// 16 Categories × L1–L4 Process Hierarchy
// L4 complete for all 16 categories

export const FRAMEWORK_META = {
  version: '2.1.0',
  totalCategories: 16,
  totalProcesses: 133,
  l4Processes: 133,
  l4Coverage: 100,
  l4Categories: 16,
  lastUpdated: '2026-03-20',
}

export const CATEGORIES = [
  {
    id: 1,
    slug: 'strategic-leadership',
    name: 'Strategic Leadership & Governance',
    icon: '◈',
    accent: '#34d399',
    l4: true,
    summary: 'Mission stewardship, strategic direction, and distributed governance structures.',
    groups: [
      {
        id: '1.1', name: 'Steward the Mission',
        processes: [
          { id: '1.1.1', name: 'Define and maintain mission statement', l4: ['Annual mission review with community input', 'Plain-language mission translation for all audiences', 'Mission drift detection via quarterly process audits', 'Board + community ratification of any mission change'] },
          { id: '1.1.2', name: 'Translate mission into strategic priorities', l4: ['Community-informed priority setting sessions', 'OKR mapping to mission pillars', 'Transparent priority conflicts resolution process', 'Quarterly priority alignment check-ins'] },
          { id: '1.1.3', name: 'Protect mission under resource pressure', l4: ['Mission-risk assessment before major decisions', 'Community veto process for mission-threatening choices', 'Documentation of mission trade-offs considered'] },
        ]
      },
      {
        id: '1.2', name: 'Govern the Organization',
        processes: [
          { id: '1.2.1', name: 'Maintain governance structure', l4: ['Governance charter published and version-controlled', 'Annual governance health review', 'Role clarity documentation for all governance positions', 'Succession planning for all governance roles'] },
          { id: '1.2.2', name: 'Make major decisions', l4: ['Decision types taxonomy (Type 1–4)', 'Community consultation for Type 3–4 decisions', 'Decisions log published in real-time', 'Rationale documentation standard'] },
          { id: '1.2.3', name: 'Manage board/council operations', l4: ['Meeting cadence and agenda standards', 'Conflict of interest disclosure process', 'Board composition diversity tracking', 'Board effectiveness self-assessment'] },
        ]
      },
      {
        id: '1.3', name: 'Lead Strategically',
        processes: [
          { id: '1.3.1', name: 'Conduct environmental scanning', l4: ['Quarterly horizon scan reports', 'Community intelligence gathering channels', 'Post-labor trend monitoring', 'Scenario planning integration'] },
          { id: '1.3.2', name: 'Develop and maintain strategic plan', l4: ['3-year rolling strategic plan', 'Annual plan review with community', 'Strategy-to-operations translation guides', 'Progress dashboard publicly accessible'] },
          { id: '1.3.3', name: 'Allocate strategic resources', l4: ['Participatory resource allocation process', 'Equity-weighted allocation formula', 'Resource request and justification standards', 'Reallocation trigger criteria'] },
        ]
      },
    ]
  },
  {
    id: 2,
    slug: 'community-stakeholder',
    name: 'Community & Stakeholder Relationships',
    icon: '◉',
    accent: '#34d399',
    l4: true,
    summary: 'Building authentic community, consent-based engagement, and stakeholder trust.',
    groups: [
      {
        id: '2.1', name: 'Build Community',
        processes: [
          { id: '2.1.1', name: 'Define community membership', l4: ['Open, opt-in membership with clear criteria', 'No dues or resume requirements', 'Multiple participation pathways', 'Community onboarding journey design'] },
          { id: '2.1.2', name: 'Foster belonging and connection', l4: ['Regular community gathering cadence', 'Cross-cohort connection programming', 'Shared language and ritual development', 'Belonging indicators in community health metrics'] },
          { id: '2.1.3', name: 'Manage community conflicts', l4: ['Community accountability process (not punitive)', 'Restorative practice protocols', 'Escalation pathway with community oversight', 'Conflict prevention via clear norms'] },
        ]
      },
      {
        id: '2.2', name: 'Engage Stakeholders',
        processes: [
          { id: '2.2.1', name: 'Map stakeholder ecosystem', l4: ['Living stakeholder map updated quarterly', 'Stakeholder interests and concerns documentation', 'Power-interest grid analysis', 'Underrepresented stakeholder identification'] },
          { id: '2.2.2', name: 'Design engagement strategy', l4: ['Consent-based engagement model', 'Multiple engagement modalities (sync/async/hybrid)', 'Engagement fatigue monitoring', 'Feedback loop design for every engagement'] },
          { id: '2.2.3', name: 'Report to stakeholders', l4: ['Annual impact report in plain language', 'Quarterly financial transparency reports', 'Real-time operational dashboards', 'Unsanitized feedback shared publicly'] },
        ]
      },
      {
        id: '2.3', name: 'Serve Those We Exist For',
        processes: [
          { id: '2.3.1', name: 'Understand community needs', l4: ['Participatory needs assessment (not extractive)', 'Direct needs expression channels', 'Needs data used immediately not archived', 'Community-led prioritization of needs'] },
          { id: '2.3.2', name: 'Respond to community needs', l4: ['Response SLA by need urgency tier', 'Community care team operations', 'Needs that exceed capacity: transparent triage', 'Outcome tracking for needs responses'] },
        ]
      },
    ]
  },
  {
    id: 3,
    slug: 'mission-delivery',
    name: 'Mission Delivery & Programs',
    icon: '◎',
    accent: '#34d399',
    l4: true,
    summary: 'Designing and delivering programs that create genuine impact.',
    groups: [
      {
        id: '3.1', name: 'Design Programs',
        processes: [
          { id: '3.1.1', name: 'Identify program opportunities', l4: ['Community-surfaced opportunity intake', 'Theory of change validation', 'Feasibility assessment framework', 'Pipeline visibility across all programs'] },
          { id: '3.1.2', name: 'Design program model', l4: ['Co-design with intended beneficiaries', 'Equity review before launch', 'Pilot design with clear success criteria', 'Program logic model documentation'] },
          { id: '3.1.3', name: 'Test and refine programs', l4: ['Rapid iteration cycles (4–8 week sprints)', 'Community feedback integrated in real-time', 'Failure documentation as organizational learning', 'Go/no-go decision criteria documented'] },
        ]
      },
      {
        id: '3.2', name: 'Deliver Programs',
        processes: [
          { id: '3.2.1', name: 'Operate programs consistently', l4: ['Program playbooks for each initiative', 'Quality standards co-developed with participants', 'Operational dashboards for program health', 'Exception handling process'] },
          { id: '3.2.2', name: 'Coordinate program delivery', l4: ['Cross-functional delivery teams', 'Dependency mapping for complex programs', 'Escalation pathways for delivery issues', 'Delivery retrospectives after each cycle'] },
        ]
      },
      {
        id: '3.3', name: 'Measure Impact',
        processes: [
          { id: '3.3.1', name: 'Define impact indicators', l4: ['Community-defined success metrics', 'Leading and lagging indicators balanced', 'Baseline measurement before launch', 'Impact attribution methodology'] },
          { id: '3.3.2', name: 'Collect and analyze impact data', l4: ['Lightweight data collection (not burdensome)', 'Mixed-methods approach (quant + qual)', 'Community data sovereignty protections', 'Data quality assurance process'] },
          { id: '3.3.3', name: 'Report and use impact findings', l4: ['Impact findings shared with community first', 'Learning integrated into next program cycle', 'Failures reported with same prominence as wins', 'External evaluation on major programs'] },
        ]
      },
    ]
  },
  {
    id: 4,
    slug: 'innovation-learning',
    name: 'Innovation & Learning',
    icon: '◌',
    accent: '#34d399',
    l4: true,
    summary: 'Building a culture where experimentation and learning are structural, not exceptional.',
    groups: [
      {
        id: '4.1', name: 'Foster Innovation',
        processes: [
          { id: '4.1.1', name: 'Create conditions for new ideas', l4: ['Protected time for exploration (not billable)', 'Idea pipeline visible to all contributors', 'No-penalty failure culture', 'Innovation fund accessible without hierarchy'] },
          { id: '4.1.2', name: 'Develop and test innovations', l4: ['Structured experimentation methodology', 'Resource-light pilot framework', 'Cross-community experimentation networks', 'Innovation readiness assessment'] },
          { id: '4.1.3', name: 'Scale what works', l4: ['Scaling criteria transparent and community-reviewed', 'Gradual scaling with continuous feedback', 'Knowledge transfer from pilot to scale', 'Community consent before major scaling decisions'] },
        ]
      },
      {
        id: '4.2', name: 'Build Learning Systems',
        processes: [
          { id: '4.2.1', name: 'Capture organizational learning', l4: ['After-action reviews on all significant events', 'Learning repository accessible to all', 'Institutional memory preservation practices', 'Cross-project learning synthesis quarterly'] },
          { id: '4.2.2', name: 'Develop organizational capabilities', l4: ['Capability gap identification process', 'Community-led skill development programs', 'Learning pathways for all participation levels', 'External learning investment (conferences, courses)'] },
          { id: '4.2.3', name: 'Adapt based on evidence', l4: ['Evidence review triggers for major decisions', 'Adaptive management cycles (quarterly)', 'Learning informing strategic planning', 'Counter-evidence actively sought'] },
        ]
      },
    ]
  },
  {
    id: 5,
    slug: 'communication-narrative',
    name: 'Communication & Narrative',
    icon: '◍',
    accent: '#34d399',
    l4: true,
    summary: 'Communicating with clarity, honesty, and narrative power.',
    groups: [
      {
        id: '5.1', name: 'Develop Narrative',
        processes: [
          { id: '5.1.1', name: 'Craft organizational narrative', l4: ['Story architecture: origin, struggle, vision', 'Community voice centered in narrative', 'Narrative consistency across all channels', 'Annual narrative refresh with community input'] },
          { id: '5.1.2', name: 'Develop messaging frameworks', l4: ['Audience-specific message maps', 'Plain language standard (Flesch-Kincaid ≤ 10)', 'Glossary of organizational terms', 'Messaging testing with community members'] },
        ]
      },
      {
        id: '5.2', name: 'Communicate Internally',
        processes: [
          { id: '5.2.1', name: 'Keep community informed', l4: ['Weekly community digest', 'Real-time decision notifications', 'No-filter internal updates (including struggles)', 'Internal comms calendar'] },
          { id: '5.2.2', name: 'Facilitate dialogue', l4: ['Structured dialogue formats for complex topics', 'Cross-working-group communication channels', 'Asynchronous-first communication norms', 'Difficult conversations facilitation support'] },
        ]
      },
      {
        id: '5.3', name: 'Communicate Externally',
        processes: [
          { id: '5.3.1', name: 'Manage public presence', l4: ['Channel strategy by audience', 'Content calendar with community contributors', 'Social listening and response protocols', 'External communication quality review'] },
          { id: '5.3.2', name: 'Handle media and public inquiries', l4: ['Media response process with 24hr SLA', 'Spokesperson preparation', 'Crisis communication playbook', 'Proactive media relationship building'] },
          { id: '5.3.3', name: 'Build thought leadership', l4: ['Contributor-driven publishing strategy', 'Speaking and conference presence', 'Research and insights publication', 'Community members as public voices'] },
        ]
      },
    ]
  },
  {
    id: 6,
    slug: 'operations-administration',
    name: 'Operations & Administration',
    icon: '◑',
    accent: '#34d399',
    l4: true,
    summary: 'Running operations with transparency, equity, and minimal bureaucracy.',
    groups: [
      {
        id: '6.1', name: 'Manage Operations',
        processes: [
          { id: '6.1.1', name: 'Design operational systems', l4: ['Lean operational model (minimum viable process)', 'Process documentation in plain language', 'Automation-first approach to routine tasks', 'Operations health dashboard'] },
          { id: '6.1.2', name: 'Ensure operational continuity', l4: ['Business continuity planning', 'Knowledge redundancy (no single points of failure)', 'Succession planning for operational roles', 'Crisis operations playbook'] },
        ]
      },
      {
        id: '6.2', name: 'Manage Facilities & Assets',
        processes: [
          { id: '6.2.1', name: 'Manage physical and virtual spaces', l4: ['Space as commons principle', 'Accessibility audit for all spaces', 'Remote-first design for all processes', 'Asset stewardship not ownership mindset'] },
          { id: '6.2.2', name: 'Manage technology and tools', l4: ['Tool inventory with cost-benefit tracking', 'Open-source preference policy', 'Tool access equity (no paywalls for contributors)', 'Technology refresh cycle'] },
        ]
      },
      {
        id: '6.3', name: 'Manage Administration',
        processes: [
          { id: '6.3.1', name: 'Manage records and documents', l4: ['Document management system (version controlled)', 'Retention schedules by document type', 'Public-by-default document policy', 'Records destruction protocols'] },
          { id: '6.3.2', name: 'Manage contracts and agreements', l4: ['Contract templates reviewed by community', 'No predatory terms in any agreement', 'Contract performance monitoring', 'Vendor relationship management'] },
        ]
      },
    ]
  },
  {
    id: 7,
    slug: 'human-potential',
    name: 'Develop Human Potential',
    icon: '◒',
    accent: '#34d399',
    l4: true,
    summary: 'Contribution is voluntary. Resource access is unconditional. Growth is a right.',
    groups: [
      {
        id: '7.1', name: 'Recruit & Onboard Contributors',
        processes: [
          { id: '7.1.1', name: 'Identify contributor needs', l4: ['Invitation-based activation model', 'Purpose-aligned recruitment (no resume required)', 'Skills gap mapping without hierarchy', 'Open roles visible to all community members'] },
          { id: '7.1.2', name: 'Welcome and orient new contributors', l4: ['Onboarding as hospitality not compliance', 'Buddy/mentor pairing for first 30 days', 'Clear first-contribution pathways', 'Psychological safety established before task assignment'] },
          { id: '7.1.3', name: 'Integrate contributors into community', l4: ['Introduction rituals for new contributors', 'Cross-team connection in first 60 days', 'Contribution visible to whole community', 'Early win design for new contributors'] },
        ]
      },
      {
        id: '7.2', name: 'Develop Contributor Capabilities',
        processes: [
          { id: '7.2.1', name: 'Support learning and growth', l4: ['Self-directed learning with resource access', 'Peer mentoring network (not hierarchical)', 'Growth conversations (not performance reviews)', 'Learning budget available to all contributors equally'] },
          { id: '7.2.2', name: 'Expand contributor responsibilities', l4: ['Interest-led expansion (not assignment)', 'Capability visibility system', 'Stretch opportunities with support', 'Role creation for emerging needs'] },
        ]
      },
      {
        id: '7.3', name: 'Recognize and Reward Contribution',
        processes: [
          { id: '7.3.1', name: 'Acknowledge contributions', l4: ['Recognition without competition', 'Peer-nominated acknowledgment system', 'Public celebration of all contribution types', 'Non-monetary recognition first'] },
          { id: '7.3.2', name: 'Allocate resources to contributors', l4: ['Universal resource access as a right (not performance-based)', 'Basic needs support without conditions', 'Equity-weighted support for higher-need contributors', 'Resource access friction minimized to zero'] },
        ]
      },
      {
        id: '7.4', name: 'Support Contributor Wellbeing',
        processes: [
          { id: '7.4.1', name: 'Protect contributor health and wellbeing', l4: ['Burnout prevention protocols', 'Contribution load monitoring and balancing', 'Rest and sabbatical as a right (not a reward)', 'Mental health support accessible to all'] },
          { id: '7.4.2', name: 'Navigate contributor transitions', l4: ['Transitions with dignity and support', 'Sabbatical design and re-entry protocols', 'Alumni network maintained and valued', 'Knowledge transfer before departure'] },
        ]
      },
      {
        id: '7.5', name: 'Manage Contributor Data and Privacy',
        processes: [
          { id: '7.5.1', name: 'Protect contributor information', l4: ['Privacy-first data practices', 'Contributors own their data', 'Minimal data collection (need-to-know only)', 'Data breach response protocol'] },
          { id: '7.5.2', name: 'Ensure communication transparency', l4: ['Radical communication transparency as default', 'No shadow decisions or hidden agendas', 'Communication accessible asynchronously', 'Translation support for multilingual community'] },
        ]
      },
      {
        id: '7.6', name: 'Address Contributor Relations',
        processes: [
          { id: '7.6.1', name: 'Resolve contributor concerns', l4: ['Concern resolution without retaliation risk', 'Multiple escalation pathways', 'Community ombudsperson role', 'Systemic issue tracking from individual concerns'] },
        ]
      },
      {
        id: '7.7', name: 'Manage Contributor Compliance',
        processes: [
          { id: '7.7.1', name: 'Maintain compliance with labor and volunteer frameworks', l4: ['Legal compliance calendar', 'Contributor classification clarity', 'Compliance education without legalism', 'External legal review annually'] },
        ]
      },
    ]
  },
  {
    id: 8,
    slug: 'technology-ai',
    name: 'Technology & AI Infrastructure',
    icon: '◓',
    accent: '#34d399',
    l4: true,
    summary: 'Technology serves the mission. Community oversight ensures it stays that way.',
    groups: [
      {
        id: '8.1', name: 'Develop Technology Strategy',
        processes: [
          { id: '8.1.1', name: 'Align technology with mission', l4: ['Mission-aligned technology strategy', 'Community oversight of technology decisions', 'Open-source preference with documented exceptions', 'Technology debt as equity risk'] },
          { id: '8.1.2', name: 'Plan technology investments', l4: ['Community-informed technology roadmap', 'Build vs. buy vs. borrow framework', 'Total cost of ownership analysis', 'Technology sunset planning'] },
        ]
      },
      {
        id: '8.2', name: 'Develop and Manage Systems',
        processes: [
          { id: '8.2.1', name: 'Build and maintain core systems', l4: ['Systems architecture mapped to PLE-GPS 16 categories', 'Modularity as design principle', 'Documentation as first-class artifact', 'Contributor access to all non-sensitive systems'] },
          { id: '8.2.2', name: 'Ensure system reliability', l4: ['Uptime SLAs published publicly', 'Incident response with community notification', 'Maintenance windows communicated in advance', 'Redundancy for mission-critical systems'] },
        ]
      },
      {
        id: '8.3', name: 'Govern AI Systems',
        processes: [
          { id: '8.3.1', name: 'Adopt AI responsibly', l4: ['Ethical assessment before any AI adoption', 'Community input on AI use cases', 'AI use transparency to those affected', 'AI decisions reviewable by humans'] },
          { id: '8.3.2', name: 'Monitor AI system performance', l4: ['Bias auditing on all AI systems', 'Performance degradation monitoring', 'Community feedback on AI interactions', 'AI system retirement criteria'] },
        ]
      },
      {
        id: '8.4', name: 'Manage Data',
        processes: [
          { id: '8.4.1', name: 'Govern organizational data', l4: ['Community data bill of rights', 'Open-by-default data strategy', 'Data classification and access control', 'Data quality standards'] },
          { id: '8.4.2', name: 'Protect data security', l4: ['Security posture reviews quarterly', 'Breach notification within 72 hours', 'Security training for all contributors', 'Third-party security audits'] },
        ]
      },
      {
        id: '8.5', name: 'Support Technology Users',
        processes: [
          { id: '8.5.1', name: 'Provide technology support', l4: ['Multi-channel support with equity-aware prioritization', 'Documentation-first support model', 'Accessibility requirements in all tools', 'Support response SLAs published'] },
        ]
      },
      {
        id: '8.6', name: 'Manage Technology Vendors',
        processes: [
          { id: '8.6.1', name: 'Select and manage technology partners', l4: ['Values-alignment in vendor selection', 'No vendor lock-in by default', 'Contract terms reviewed for community protection', 'Annual vendor relationship assessment'] },
        ]
      },
    ]
  },
  {
    id: 9,
    slug: 'collective-resources',
    name: 'Steward Collective Resources',
    icon: '◔',
    accent: '#34d399',
    l4: true,
    summary: 'Resources belong to the collective. Stewardship is accountable to everyone.',
    groups: [
      {
        id: '9.1', name: 'Plan and Allocate Resources',
        processes: [
          { id: '9.1.1', name: 'Develop resource plans', l4: ['Participatory budgeting process', 'Equity-weighted allocation formula', 'Community ratification of resource plans', 'Scenario planning for resource uncertainty'] },
          { id: '9.1.2', name: 'Allocate resources to activities', l4: ['Transparent allocation criteria published', 'Appeals process for resource decisions', 'Real-time resource availability visible to all', 'Reallocation triggers and process'] },
        ]
      },
      {
        id: '9.2', name: 'Manage Financial Operations',
        processes: [
          { id: '9.2.1', name: 'Process financial transactions', l4: ['Dual authorization for all significant transactions', 'Chart of accounts aligned to PLE-GPS categories', 'Transactions visible to community (with privacy protections)', 'Payment processing with zero friction for contributors'] },
          { id: '9.2.2', name: 'Manage accounts payable and receivable', l4: ['Universal disbursement with zero friction (no means testing)', 'AP aging visible to community oversight', 'AR collection without punitive measures', 'Vendor payment terms that are fair and timely'] },
          { id: '9.2.3', name: 'Manage payroll and contributor compensation', l4: ['Compensation philosophy transparent and public', 'Pay equity audits published annually', 'Contribution-based allocation models', 'No compensation secrecy'] },
        ]
      },
      {
        id: '9.3', name: 'Report and Account for Resources',
        processes: [
          { id: '9.3.1', name: 'Produce financial reports', l4: ['Transparent financial statements in plain language', 'Monthly financial summaries to community', 'Variance analysis with community-accessible explanations', 'Financial health indicators on public dashboard'] },
          { id: '9.3.2', name: 'Manage audits and oversight', l4: ['Community-selected auditors (not management-selected)', 'Audit findings shared unedited with community', 'Audit response plan with community accountability', 'Internal controls documented and tested'] },
        ]
      },
      {
        id: '9.4', name: 'Manage Resource Risk',
        processes: [
          { id: '9.4.1', name: 'Maintain financial sustainability', l4: ['Revenue diversification as mission protection', 'Reserve policy: minimum 6 months operating', 'Real-time resource dashboards for leadership and community', 'Financial crisis protocol with community notification'] },
        ]
      },
      {
        id: '9.5', name: 'Manage Fundraising and Revenue',
        processes: [
          { id: '9.5.1', name: 'Develop resource generation strategies', l4: ['Funding aligned to mission (no strings)', 'Community informed of all major funding sources', 'Diversification targets published', 'Grant reporting as public accountability not compliance'] },
          { id: '9.5.2', name: 'Manage donor and funder relationships', l4: ['Funder education on post-labor model', 'Transparency about organizational finances', 'Boundaries on funder influence in governance', 'Community voice in major funding decisions'] },
        ]
      },
    ]
  },
  {
    id: 10,
    slug: 'legal-compliance-ethics',
    name: 'Legal, Compliance & Ethics',
    icon: '◕',
    accent: '#34d399',
    l4: true,
    summary: 'Operating with integrity within legal frameworks while holding ourselves to higher ethical standards.',
    groups: [
      {
        id: '10.1', name: 'Ensure Legal Compliance',
        processes: [
          { id: '10.1.1', name: 'Manage regulatory compliance', l4: ['Compliance calendar covering all legal obligations', 'Regulatory change monitoring with community alerts', 'Annual compliance self-assessment published', 'Non-compliance reporting protocol with no-retaliation protection'] },
          { id: '10.1.2', name: 'Maintain nonprofit/legal status', l4: ['Annual filings completed on time with community notification', 'Tax-exempt status maintenance checklist', 'Registered agent and state compliance tracking', 'Legal status review with counsel annually'] },
          { id: '10.1.3', name: 'Manage legal risk', l4: ['Legal risk registry updated quarterly and publicly accessible', 'Legal review threshold criteria — when to escalate', 'Insurance coverage aligned to risk profile', 'Legal dispute prevention through clear, fair agreements'] },
        ]
      },
      {
        id: '10.2', name: 'Uphold Ethics',
        processes: [
          { id: '10.2.1', name: 'Develop and maintain ethical standards', l4: ['Ethics code developed with community input, not leadership alone', 'Ethics code published, accessible, and translated', 'Annual ethics education for all contributors', 'Community review of ethics standards every 2 years'] },
          { id: '10.2.2', name: 'Investigate and respond to ethics concerns', l4: ['Anonymous ethics concern intake with non-retaliation guarantee', 'Investigation timeline: acknowledge in 48hrs, resolve in 30 days', 'Outcome communicated to reporter and community (where appropriate)', 'Pattern analysis to detect systemic ethics issues'] },
          { id: '10.2.3', name: 'Prevent conflicts of interest', l4: ['Annual COI disclosure for all governance and leadership roles', 'Recusal process for conflicted decision-makers, publicly documented', 'Gift and hospitality policy (threshold: $25)', 'Related-party transactions reviewed by independent community members'] },
        ]
      },
      {
        id: '10.3', name: 'Manage Intellectual Property',
        processes: [
          { id: '10.3.1', name: 'Steward organizational IP', l4: ['IP inventory maintained and current', 'IP created by contributors treated as community commons by default', 'No predatory IP claims on community-generated work', 'IP strategy aligned with open knowledge principles'] },
          { id: '10.3.2', name: 'Manage open licensing', l4: ['Default license: Creative Commons BY or equivalent open license', 'License selection guide for different content and code types', 'Compliance monitoring for third-party materials used', 'License upgrade process when community collectively decides'] },
        ]
      },
      {
        id: '10.4', name: 'Protect Privacy',
        processes: [
          { id: '10.4.1', name: 'Implement privacy governance', l4: ['Privacy policy in plain language, not legal boilerplate', 'Privacy impact assessments required for new programs and tools', 'Community member rights: access, correction, deletion, portability', 'Privacy oversight role distributed across working groups'] },
          { id: '10.4.2', name: 'Manage consent', l4: ['Opt-in consent model for all data collection — no pre-ticked boxes', 'Granular consent choices — no bundled permissions', 'Consent withdrawal honored within 72 hours with confirmation', 'Consent records maintained, auditable, and community-reviewable'] },
        ]
      },
    ]
  },
  {
    id: 11,
    slug: 'risk-resilience',
    name: 'Risk & Resilience',
    icon: '◖',
    accent: '#34d399',
    l4: true,
    summary: 'Anticipating threats, building adaptive capacity, and recovering well.',
    groups: [
      {
        id: '11.1', name: 'Manage Organizational Risk',
        processes: [
          { id: '11.1.1', name: 'Identify and assess risks', l4: ['Annual risk identification workshop open to all community members', 'Risk register maintained and publicly accessible (redacted where sensitive)', 'Risk scoring: likelihood × impact × mission-alignment', 'Emerging risk monitoring with community early-warning channels'] },
          { id: '11.1.2', name: 'Develop risk mitigation strategies', l4: ['Mitigation actions assigned with named owners and deadlines', 'Risk appetite statement co-developed with community', 'Residual risk acceptance documented with community rationale', 'Mitigation progress reviewed quarterly on public dashboard'] },
          { id: '11.1.3', name: 'Monitor and review risks', l4: ['Monthly risk dashboard update for leadership and community', 'Trigger-based risk escalation criteria documented in advance', 'Annual comprehensive risk review with community input', 'Risk culture self-assessment included in governance review'] },
        ]
      },
      {
        id: '11.2', name: 'Build Resilience',
        processes: [
          { id: '11.2.1', name: 'Develop crisis response capabilities', l4: ['Crisis response team identified, trained, and publicly named', 'Crisis communication plan tested via annual simulation', 'Pre-planned scenarios: financial, reputational, operational, political', 'Community notification within 24 hours of any significant crisis'] },
          { id: '11.2.2', name: 'Maintain business continuity', l4: ['Top 10 critical processes identified and documented', 'Recovery time objectives defined for each critical process', 'Backup systems and redundancies tested bi-annually', 'Business continuity plan accessible to all contributors'] },
          { id: '11.2.3', name: 'Recover from disruptions', l4: ['Post-incident review within 2 weeks of any significant disruption', 'Recovery resources pre-identified and accessible without approval delays', 'Community-centered recovery: people and relationships before assets', 'Lessons learned integrated into risk register within 30 days'] },
        ]
      },
      {
        id: '11.3', name: 'Manage Safety and Security',
        processes: [
          { id: '11.3.1', name: 'Protect physical and digital safety', l4: ['Safety risk assessment for all community spaces (physical and virtual)', 'Digital security baseline: MFA, encrypted comms, access controls', 'Incident reporting: low barrier, anonymous option, no retaliation', 'Safety training proportionate to risk level for each contributor role'] },
          { id: '11.3.2', name: 'Manage insurance and protection', l4: ['Insurance coverage inventory aligned to organizational risk register', 'Coverage gaps reviewed annually with community notification', 'D&O, general liability, and other key coverage maintained', 'Claims process accessible, fair, and non-adversarial'] },
        ]
      },
    ]
  },
  {
    id: 12,
    slug: 'data-knowledge',
    name: 'Data & Knowledge Management',
    icon: '◗',
    accent: '#34d399',
    l4: true,
    summary: 'Knowledge belongs to the collective. Data serves people, not the reverse.',
    groups: [
      {
        id: '12.1', name: 'Manage Organizational Knowledge',
        processes: [
          { id: '12.1.1', name: 'Capture and organize knowledge', l4: ['Knowledge capture embedded in all significant work (not an afterthought)', 'Taxonomy and tagging system designed for findability', 'Multiple formats supported: text, audio, visual, structured data', 'Contribution to knowledge base recognized as valued work'] },
          { id: '12.1.2', name: 'Share and distribute knowledge', l4: ['Knowledge base accessible to all community members without friction or paywalls', 'Search functionality maintained and fit for purpose', 'Knowledge curated and de-duplicated quarterly', 'Cross-working-group knowledge sharing cadence established'] },
          { id: '12.1.3', name: 'Preserve institutional memory', l4: ['Narrative documentation of key decisions and their context', 'Transition documentation required before any contributor departure', 'Archive policy: permanent retention for founding documents and major decisions', 'Institutional memory health audit annually — what are we at risk of losing?'] },
        ]
      },
      {
        id: '12.2', name: 'Govern Data',
        processes: [
          { id: '12.2.1', name: 'Define data governance framework', l4: ['Data governance policy developed with community input', 'Data ownership principles: community members own data about themselves', 'Data governance roles distributed across working groups, not siloed', 'Framework reviewed annually and updated when regulations or practices change'] },
          { id: '12.2.2', name: 'Ensure data quality', l4: ['Data quality standards defined per data type and use case', 'Quality checks automated where possible, human where necessary', 'Data quality issues surfaced to community dashboard within 48 hours', 'Domain ownership of data quality assigned and published'] },
          { id: '12.2.3', name: 'Manage data lifecycle', l4: ['Retention schedules defined, documented, and community-accessible', 'Data disposal: secure, verified, and communicated to data subjects', 'Archival vs. deletion criteria transparent and consistently applied', 'Lifecycle reviewed when regulations, community needs, or technology change'] },
        ]
      },
      {
        id: '12.3', name: 'Generate and Use Insights',
        processes: [
          { id: '12.3.1', name: 'Analyze organizational data', l4: ['Analytical capacity distributed — no specialist gatekeeper for community insights', 'Self-service analytics tools provided to all contributors', 'Insights published promptly and without filtering or sanitizing', 'Analysis methods disclosed alongside findings for community scrutiny'] },
          { id: '12.3.2', name: 'Support evidence-based decisions', l4: ['Decision support briefs prepared for all major choices', 'Evidence requirements defined for Type 3–4 decisions', 'Counter-evidence actively surfaced — not suppressed', 'Analytical uncertainty communicated alongside findings'] },
        ]
      },
    ]
  },
  {
    id: 13,
    slug: 'partnerships-ecosystem',
    name: 'Partnerships & Ecosystem',
    icon: '◘',
    accent: '#34d399',
    l4: true,
    summary: 'Collaboration over competition. Building networks that multiply our reach.',
    groups: [
      {
        id: '13.1', name: 'Develop Partnerships',
        processes: [
          { id: '13.1.1', name: 'Identify and evaluate partnership opportunities', l4: ['Partnership evaluation criteria aligned to mission and values (published)', 'Community input required before major partnerships are pursued', 'Values-alignment assessment with scoring rubric', 'Equity assessment: who benefits, who bears risk, who is excluded?'] },
          { id: '13.1.2', name: 'Negotiate and establish partnerships', l4: ['Partnership agreement templates that protect community governance independence', 'No agreements that create funder or partner control over organizational decisions', 'Community notification before any major partnership activation', 'Partnership terms publicly disclosed where legally permissible'] },
          { id: '13.1.3', name: 'Manage active partnerships', l4: ['Partnership health reviews bi-annually with community reporting', 'Joint accountability for partnership outcomes — both parties held to commitments', 'Exit criteria defined at partnership inception, not when things go wrong', 'Lessons learned from ended partnerships documented and shared'] },
        ]
      },
      {
        id: '13.2', name: 'Build Ecosystem Presence',
        processes: [
          { id: '13.2.1', name: 'Participate in relevant networks', l4: ['Network membership assessed for mission alignment and strategic value', 'Active contribution expected — not passive attendance', 'Time and resource investment tracked and evaluated annually', 'Network relationships serve community interests, not just leadership visibility'] },
          { id: '13.2.2', name: 'Contribute to field-building', l4: ['Knowledge contributed openly to the broader post-labor field', 'Collaboration over competition with peer organizations', 'Field-building activities evaluated for community benefit, not just organizational profile', 'Representation in field spaces reflects community diversity'] },
        ]
      },
      {
        id: '13.3', name: 'Engage Policy and Advocacy Ecosystem',
        processes: [
          { id: '13.3.1', name: 'Monitor policy environment', l4: ['Policy monitoring scope aligned to mission and community impact', 'Regulatory and legislative changes flagged to community within 48 hours', 'Policy intelligence shared openly — not withheld by leadership', 'External policy experts cultivated as community allies, not just advisors'] },
          { id: '13.3.2', name: 'Engage in policy processes', l4: ['Community voice in defining organizational policy positions', 'Advocacy stays within community-ratified mandate', 'Coalition partnerships reviewed for alignment before joining', 'Policy engagement documented and reported to community quarterly'] },
        ]
      },
    ]
  },
  {
    id: 14,
    slug: 'metrics-accountability',
    name: 'Metrics & Accountability',
    icon: '◙',
    accent: '#34d399',
    l4: true,
    summary: 'Accountability to community, not just to funders. Metrics that tell the real story.',
    groups: [
      {
        id: '14.1', name: 'Design Measurement Systems',
        processes: [
          { id: '14.1.1', name: 'Develop organizational KPIs', l4: ['KPIs co-designed with community — not handed down from leadership', 'Balanced scorecard: mission impact, financial health, community vitality, operational quality', 'Leading indicators for early warning alongside lagging outcome measures', 'KPI relevance reviewed annually — retire metrics that no longer serve'] },
          { id: '14.1.2', name: 'Build measurement infrastructure', l4: ['Measurement systems designed for contributor use, not just leadership reporting', 'Automated data collection where possible to reduce contributor burden', 'Dashboards publicly accessible and updated in near-real-time', 'Measurement infrastructure cost-benefit reviewed annually'] },
        ]
      },
      {
        id: '14.2', name: 'Report Performance',
        processes: [
          { id: '14.2.1', name: 'Produce performance reports', l4: ['Monthly dashboard updates visible to all community members', 'Quarterly narrative performance reviews with community context', 'Annual comprehensive report covering all 16 PLE-GPS categories', 'All reports in plain language — no jargon, no euphemism'] },
          { id: '14.2.2', name: 'Respond to performance gaps', l4: ['Gap analysis process with community input before remediation decisions', 'Root cause analysis required — no reactive fixes without understanding cause', 'Remediation plans published and progress tracked publicly', 'Community accountability for persistent gaps — shared problem, not leadership problem'] },
          { id: '14.2.3', name: 'Communicate performance publicly', l4: ['Radical transparency: publish real numbers including failures and struggles', 'No performance theater — vanity metrics not reported without context', 'Comparative context always included: benchmarks, baselines, prior periods', 'Performance narrative co-authored with community, not just management'] },
        ]
      },
      {
        id: '14.3', name: 'Evaluate Programs and Impact',
        processes: [
          { id: '14.3.1', name: 'Conduct program evaluations', l4: ['Evaluation framework applied to all programs exceeding threshold scale', 'Independent external evaluation on major programs every 3 years', 'Community members included in evaluation design and interpretation', 'Evaluation findings inform program continuation, redesign, or discontinuation'] },
          { id: '14.3.2', name: 'Learn from evaluation findings', l4: ['Evaluation findings integrated into next strategy cycle without delay', 'Negative findings reported with same prominence as positive — no burying', 'Cross-program learning from evaluations synthesized annually', 'Evaluation-informed redesign decisions documented and community-accessible'] },
        ]
      },
    ]
  },
  {
    id: 15,
    slug: 'transition-transformation',
    name: 'Transition & Transformation',
    icon: '◚',
    accent: '#34d399',
    l4: true,
    summary: 'Managing change with dignity. Transformation is not disruption — it is stewardship.',
    groups: [
      {
        id: '15.1', name: 'Manage Organizational Change',
        processes: [
          { id: '15.1.1', name: 'Plan and design transformations', l4: ['Change management approach aligned to post-labor values: dignity, consent, transparency', 'Community co-design required for changes affecting contributor experience', 'Change impact assessment: who is affected, how, and when', 'Transformation roadmap published and community-accessible before implementation begins'] },
          { id: '15.1.2', name: 'Implement changes', l4: ['Continuous community feedback loops during implementation, not just at launch', 'Pacing respects contributor capacity — no change overload', 'Implementation support provided to all affected contributors', 'Change champions drawn from affected community members, not appointed by leadership'] },
          { id: '15.1.3', name: 'Sustain change outcomes', l4: ['Change sustainability metrics defined at outset alongside success metrics', 'Post-implementation reviews at 30, 90, and 180 days', 'Reversal protocol defined in advance — no change is irreversible without explicit community decision', 'Change outcomes reported to community with honest assessment'] },
        ]
      },
      {
        id: '15.2', name: 'Support Post-Labor Transitions',
        processes: [
          { id: '15.2.1', name: 'Support contributors through automation displacement', l4: ['Proactive monitoring of automation\'s impact on contributor roles', 'Transition support: learning, repositioning, income bridge, and dignity preservation', 'No contributor made redundant without community deliberation and solidarity response', 'Community solidarity fund for displacement support, governed by community'] },
          { id: '15.2.2', name: 'Develop post-wage contribution models', l4: ['Contribution models that fully decouple participation from income need', 'Recognition and reward systems for all contribution types (not just paid-equivalent work)', 'Time-banking, mutual credit, and non-monetary exchange systems piloted and evaluated', 'Community income floors explored as organizational practice and advocacy position'] },
          { id: '15.2.3', name: 'Model the post-labor organization', l4: ['Organizational design that actively demonstrates PLE-GPS principles in practice', 'Internal operations as proof of concept: what we advocate, we practice', 'Organizational experiments documented and published for field learning', 'External observers and researchers welcomed to study the organization'] },
        ]
      },
      {
        id: '15.3', name: 'Develop Organizational Capacity for Change',
        processes: [
          { id: '15.3.1', name: 'Build change capability', l4: ['Change literacy program accessible to all contributors', 'Resistance to change treated as signal and data, not obstacle to overcome', 'Organizational agility as explicit strategic competency', 'Regular retrospectives to build adaptive muscle across working groups'] },
          { id: '15.3.2', name: 'Manage change fatigue', l4: ['Change load monitored across working groups with community dashboard', 'Change moratoriums declared when fatigue indicators are high', 'Recovery time built explicitly into all transformation timelines', 'Wellbeing support mobilized during periods of major organizational change'] },
        ]
      },
    ]
  },
  {
    id: 16,
    slug: 'community-ownership',
    name: 'Community Ownership & Governance',
    icon: '◛',
    accent: '#34d399',
    l4: true,
    summary: 'The organization belongs to those it serves. Ownership is collective, governance is participatory.',
    groups: [
      {
        id: '16.1', name: 'Implement Democratic Governance',
        processes: [
          { id: '16.1.1', name: 'Design participatory decision structures', l4: ['Decision rights distributed to the lowest competent level (subsidiarity)', 'Multiple participation pathways: synchronous, asynchronous, delegated, representative', 'Consent-based decision making for major choices — not just majority rule', 'Full transparency: who decided, how, why, and what alternatives were considered'] },
          { id: '16.1.2', name: 'Facilitate community governance', l4: ['Regular all-community governance sessions with open attendance', 'Facilitation skills distributed across community — not dependent on any single facilitator', 'Governance processes documented in plain language, not legal/procedural jargon', 'Governance participation rates tracked and low participation treated as a system problem'] },
          { id: '16.1.3', name: 'Evolve governance as community grows', l4: ['Governance review triggered by defined scale milestones (members, budget, geography)', 'Community vote required for any governance structure changes', 'Core values and protections written to survive scale — not eroded by growth', 'External governance review by peer organizations every 3 years'] },
        ]
      },
      {
        id: '16.2', name: 'Build Collective Ownership',
        processes: [
          { id: '16.2.1', name: 'Develop shared ownership models', l4: ['Ownership structure options explored: cooperative, DAO, community trust, steward-ownership', 'Community education on ownership models before any structure decisions', 'Chosen model tested against mission protection: what happens if we fail or succeed dramatically?', 'Legal structure reviewed as community evolves — not locked in at founding'] },
          { id: '16.2.2', name: 'Transition to community stewardship', l4: ['Explicit stewardship transfer plan developed with full community participation', 'Founder-to-community power transfer: planned, documented, and celebrated', 'Leadership succession that strengthens community ownership rather than replicating founder dependency', 'No individual holds unilateral power to alter collective ownership or governance'] },
          { id: '16.2.3', name: 'Protect collective assets', l4: ['Asset protection mechanisms in place: endowment clauses, legal locks, community trusts', 'Dissolution clause: assets and IP revert to mission-aligned causes if organization ends', 'Collective assets inventory published and updated annually', 'Community vote required for any significant asset alienation or encumbrance'] },
        ]
      },
      {
        id: '16.3', name: 'Build Community Power and Agency',
        processes: [
          { id: '16.3.1', name: 'Develop community leadership capacity', l4: ['Leadership development accessible to all community members without selection gatekeeping', 'Leadership distributed by design — no single point of leadership failure', 'Community members actively prepared and supported to lead the organization', 'External leadership opportunities supported as community investment, not individual career benefit'] },
          { id: '16.3.2', name: 'Advocate for community interests', l4: ['Community interest advocacy positions developed through community deliberation', 'Political and policy engagement aligned to community-defined positions, not leadership preferences', 'Power-building as an explicit organizational strategy, not just a program activity', 'Coalition-building prioritizes communities in shared economic struggle'] },
        ]
      },
    ]
  },
]

export const WORKING_GROUPS = [
  { id: 'theory', name: 'Theory & Frameworks', status: 'active', color: '#34d399', description: 'Core economic modeling, UBI design, labor transition theory' },
  { id: 'technology', name: 'Technology & AI', status: 'active', color: '#60a5fa', description: 'Autonomous systems, AI governance, digital infrastructure' },
  { id: 'policy', name: 'Policy & Governance', status: 'forming', color: '#f59e0b', description: 'Legislative pathways, institutional design, regulatory frameworks' },
  { id: 'community', name: 'Community Infrastructure', status: 'forming', color: '#f59e0b', description: 'Local resilience networks, mutual aid, cooperative models' },
  { id: 'comms', name: 'Communications & Education', status: 'open', color: '#a78bfa', description: 'Narrative strategy, pedagogy, public engagement, media' },
  { id: 'research', name: 'Research & Evidence', status: 'open', color: '#a78bfa', description: 'Data collection, case studies, literature synthesis' },
]

export const ROADMAP_PHASES = [
  {
    id: 1, name: 'Foundation Building', status: 'active',
    items: [
      { text: 'Framework v2.0 — categories 1–9 with full L4', done: true },
      { text: 'Working group structure established', done: true },
      { text: 'GitHub Discussions as community space', done: false },
      { text: 'Contributor onboarding flow', done: true },
      { text: 'Glossary development', done: false },
    ]
  },
  {
    id: 2, name: 'Content Depth', status: 'active',
    items: [
      { text: 'L4 completion for categories 10–16', done: true },
      { text: 'Case studies from early adopter organizations', done: false },
      { text: 'Translation program (ES, PT, ZH, FR)', done: false },
      { text: 'Educational curriculum outline', done: false },
      { text: 'First State of Post-Labor annual report', done: false },
    ]
  },
  {
    id: 3, name: 'Tools & Infrastructure', status: 'future',
    items: [
      { text: 'Interactive economic scenario modeling tool', done: false },
      { text: 'Policy tracker (global legislative activity)', done: false },
      { text: 'Community resilience mapping', done: false },
      { text: 'Resource library (curated reading, courses)', done: false },
    ]
  },
]
