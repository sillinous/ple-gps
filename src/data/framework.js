// PLE-GPS Framework Data
// 16 Categories × L1–L4 Process Hierarchy
// L4 complete for categories 1–9 (165/272 processes)

export const FRAMEWORK_META = {
  version: '2.0.0',
  totalCategories: 16,
  totalProcesses: 272,
  l4Processes: 165,
  l4Coverage: 61,
  l4Categories: 9,
  lastUpdated: '2026-03-16',
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
    accent: '#60a5fa',
    l4: false,
    summary: 'Operating with integrity within legal frameworks while holding ourselves to higher ethical standards.',
    groups: [
      {
        id: '10.1', name: 'Ensure Legal Compliance',
        processes: [
          { id: '10.1.1', name: 'Manage regulatory compliance', l4: null },
          { id: '10.1.2', name: 'Maintain nonprofit/legal status', l4: null },
          { id: '10.1.3', name: 'Manage legal risk', l4: null },
        ]
      },
      {
        id: '10.2', name: 'Uphold Ethics',
        processes: [
          { id: '10.2.1', name: 'Develop and maintain ethical standards', l4: null },
          { id: '10.2.2', name: 'Investigate and respond to ethics concerns', l4: null },
          { id: '10.2.3', name: 'Prevent conflicts of interest', l4: null },
        ]
      },
      {
        id: '10.3', name: 'Manage Intellectual Property',
        processes: [
          { id: '10.3.1', name: 'Steward organizational IP', l4: null },
          { id: '10.3.2', name: 'Manage open licensing', l4: null },
        ]
      },
    ]
  },
  {
    id: 11,
    slug: 'risk-resilience',
    name: 'Risk & Resilience',
    icon: '◖',
    accent: '#60a5fa',
    l4: false,
    summary: 'Anticipating threats, building adaptive capacity, and recovering well.',
    groups: [
      {
        id: '11.1', name: 'Manage Organizational Risk',
        processes: [
          { id: '11.1.1', name: 'Identify and assess risks', l4: null },
          { id: '11.1.2', name: 'Develop risk mitigation strategies', l4: null },
          { id: '11.1.3', name: 'Monitor and review risks', l4: null },
        ]
      },
      {
        id: '11.2', name: 'Build Resilience',
        processes: [
          { id: '11.2.1', name: 'Develop crisis response capabilities', l4: null },
          { id: '11.2.2', name: 'Maintain business continuity', l4: null },
          { id: '11.2.3', name: 'Recover from disruptions', l4: null },
        ]
      },
    ]
  },
  {
    id: 12,
    slug: 'data-knowledge',
    name: 'Data & Knowledge Management',
    icon: '◗',
    accent: '#60a5fa',
    l4: false,
    summary: 'Knowledge belongs to the collective. Data serves people, not the reverse.',
    groups: [
      {
        id: '12.1', name: 'Manage Organizational Knowledge',
        processes: [
          { id: '12.1.1', name: 'Capture and organize knowledge', l4: null },
          { id: '12.1.2', name: 'Share and distribute knowledge', l4: null },
          { id: '12.1.3', name: 'Preserve institutional memory', l4: null },
        ]
      },
      {
        id: '12.2', name: 'Govern Data',
        processes: [
          { id: '12.2.1', name: 'Define data governance framework', l4: null },
          { id: '12.2.2', name: 'Ensure data quality', l4: null },
          { id: '12.2.3', name: 'Manage data lifecycle', l4: null },
        ]
      },
    ]
  },
  {
    id: 13,
    slug: 'partnerships-ecosystem',
    name: 'Partnerships & Ecosystem',
    icon: '◘',
    accent: '#60a5fa',
    l4: false,
    summary: 'Collaboration over competition. Building networks that multiply our reach.',
    groups: [
      {
        id: '13.1', name: 'Develop Partnerships',
        processes: [
          { id: '13.1.1', name: 'Identify and evaluate partnership opportunities', l4: null },
          { id: '13.1.2', name: 'Negotiate and establish partnerships', l4: null },
          { id: '13.1.3', name: 'Manage active partnerships', l4: null },
        ]
      },
      {
        id: '13.2', name: 'Build Ecosystem Presence',
        processes: [
          { id: '13.2.1', name: 'Participate in relevant networks', l4: null },
          { id: '13.2.2', name: 'Contribute to field-building', l4: null },
        ]
      },
    ]
  },
  {
    id: 14,
    slug: 'metrics-accountability',
    name: 'Metrics & Accountability',
    icon: '◙',
    accent: '#60a5fa',
    l4: false,
    summary: 'Accountability to community, not just to funders. Metrics that tell the real story.',
    groups: [
      {
        id: '14.1', name: 'Design Measurement Systems',
        processes: [
          { id: '14.1.1', name: 'Develop organizational KPIs', l4: null },
          { id: '14.1.2', name: 'Build measurement infrastructure', l4: null },
        ]
      },
      {
        id: '14.2', name: 'Report Performance',
        processes: [
          { id: '14.2.1', name: 'Produce performance reports', l4: null },
          { id: '14.2.2', name: 'Respond to performance gaps', l4: null },
          { id: '14.2.3', name: 'Communicate performance publicly', l4: null },
        ]
      },
    ]
  },
  {
    id: 15,
    slug: 'transition-transformation',
    name: 'Transition & Transformation',
    icon: '◚',
    accent: '#60a5fa',
    l4: false,
    summary: 'Managing change with dignity. Transformation is not disruption — it is stewardship.',
    groups: [
      {
        id: '15.1', name: 'Manage Organizational Change',
        processes: [
          { id: '15.1.1', name: 'Plan and design transformations', l4: null },
          { id: '15.1.2', name: 'Implement changes', l4: null },
          { id: '15.1.3', name: 'Sustain change outcomes', l4: null },
        ]
      },
      {
        id: '15.2', name: 'Support Post-Labor Transitions',
        processes: [
          { id: '15.2.1', name: 'Support contributors through automation displacement', l4: null },
          { id: '15.2.2', name: 'Develop post-wage contribution models', l4: null },
          { id: '15.2.3', name: 'Model the post-labor organization', l4: null },
        ]
      },
    ]
  },
  {
    id: 16,
    slug: 'community-ownership',
    name: 'Community Ownership & Governance',
    icon: '◛',
    accent: '#60a5fa',
    l4: false,
    summary: 'The organization belongs to those it serves. Ownership is collective, governance is participatory.',
    groups: [
      {
        id: '16.1', name: 'Implement Democratic Governance',
        processes: [
          { id: '16.1.1', name: 'Design participatory decision structures', l4: null },
          { id: '16.1.2', name: 'Facilitate community governance', l4: null },
          { id: '16.1.3', name: 'Evolve governance as community grows', l4: null },
        ]
      },
      {
        id: '16.2', name: 'Build Collective Ownership',
        processes: [
          { id: '16.2.1', name: 'Develop shared ownership models', l4: null },
          { id: '16.2.2', name: 'Transition to community stewardship', l4: null },
          { id: '16.2.3', name: 'Protect collective assets', l4: null },
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
    id: 2, name: 'Content Depth', status: 'planned',
    items: [
      { text: 'L4 completion for categories 10–16 (107 processes)', done: false },
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
