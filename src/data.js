/**
 * PLE-GPS Framework Data
 * Post-Labor Economics — Governance Process Standard v1.0
 * 
 * 16 categories (13 adapted from APQC PCF + 3 new PLE-specific)
 * 60+ L2 process groups
 * L3 processes with L4 activities where populated
 * 
 * This data model is designed to be incrementally deepened —
 * add L3/L4/L5 content to any group as the standard evolves.
 */

export const CATEGORIES = [
  {
    id: "1.0", domain: "civic", label: "Collective Vision & Governance Strategy",
    icon: "◈", color: "#f59e0b",
    origin: "1.0 — Develop Vision and Strategy",
    delta: "Strategy emerges from participatory processes and democratic governance, not executive mandate. The 'business model' becomes a value creation and distribution model.",
    groups: [
      { id: "1.1", label: "Define Collective Vision and Long-Term Direction",
        purpose: "Establish what the institution exists to do, who it serves, and what community it aspires to build over a multi-generational horizon.",
        processes: [
          { id: "1.1.1", label: "Assess the external environment (ecological, technological, social)", activities: ["Monitor ecological and climate indicators","Track technology disruption patterns (AI, automation, energy)","Assess demographic and social shifts","Monitor global post-labor transition indicators"] },
          { id: "1.1.2", label: "Survey the institutional landscape", activities: ["Map peer institutions and their coverage","Identify institutional gaps in community service"] },
          { id: "1.1.3", label: "Identify and synthesize community needs and aspirations", activities: ["Conduct community assemblies and listening sessions","Operate continuous feedback channels (digital + physical)","Synthesize community input into needs taxonomy"] },
          { id: "1.1.4", label: "Evaluate existing institutional capabilities", activities: ["Inventory institutional capabilities and assets","Assess human and AI capacity"] },
          { id: "1.1.5", label: "Establish collective vision through participatory process", activities: ["Facilitate vision workshops with representative participation","Draft and iterate vision through public comment","Ratify vision through democratic mechanism"] },
          { id: "1.1.6", label: "Communicate and embed the vision across the community", activities: ["Build multilingual, multi-format communication plan","Embed vision into all institutional touchpoints"] }
        ],
        kpis: ["Vision awareness rate","Participation rate in vision-setting","Vision-strategy alignment score","Community satisfaction with direction","Representation equity in vision-setting"]
      },
      { id: "1.2", label: "Develop Governance Strategy",
        purpose: "Translate the collective vision into concrete, time-bound strategy for institutional action.",
        processes: [
          { id: "1.2.1", label: "Develop institutional mission and mandate", activities: [] },
          { id: "1.2.2", label: "Evaluate strategic options through participatory analysis", activities: ["Generate strategic options with community input","Score options against equity, sustainability, feasibility","Conduct participatory prioritization"] },
          { id: "1.2.3", label: "Formulate domain-specific strategies", activities: ["Develop strategy per community need domain (health, education, housing, nutrition, culture, environment)"] },
          { id: "1.2.5", label: "Align functional strategies", activities: ["Align technology strategy","Align human development strategy","Align resource strategy","Align AI/agent allocation strategy"] },
          { id: "1.2.7", label: "Translate strategy into measures and accountability", activities: ["Build institutional impact scorecard","Set annual targets per strategic theme","Publish transparent strategy dashboard"] }
        ],
        kpis: ["Strategy plan completion rate","Resource-strategy alignment","Strategy cascade depth","Community confidence score","Equity impact score"]
      },
      { id: "1.3", label: "Manage Strategic Initiatives",
        purpose: "Execute strategy through managed portfolio of initiatives with transparent governance and community visibility.",
        processes: [
          { id: "1.3.1", label: "Develop strategic initiative roadmap", activities: ["Identify initiatives with community input","Sequence by dependency, equity impact, feasibility","Assign stewardship","Allocate resources transparently"] },
          { id: "1.3.2", label: "Govern initiative portfolio (publicly transparent)", activities: ["Establish governance cadence with public reporting","Review health quarterly with community observers","Make continue/pause/redirect decisions with rationale"] },
          { id: "1.3.3", label: "Track and report progress to community", activities: ["Publish real-time initiative dashboard","Produce plain-language progress reports"] },
          { id: "1.3.4", label: "Adapt strategy based on outcomes", activities: ["Assess strategy-reality gaps","Revise strategy with community input"] }
        ],
        kpis: []
      },
      { id: "1.4", label: "Design and Validate Value Creation Models",
        purpose: "Explicitly design how the institution creates, delivers, and distributes value equitably.",
        processes: [
          { id: "1.4.1", label: "Design the community value proposition", activities: ["Define community segments and needs","Articulate value proposition per need area"] },
          { id: "1.4.2", label: "Design the resource model", activities: ["Define resource inflow model","Define resource allocation model"] },
          { id: "1.4.3", label: "Design the operating model", activities: ["Map key activities, capabilities, partnerships","Define human-AI work allocation model","Define cost/resource structure"] },
          { id: "1.4.4", label: "Validate and iterate the institutional model", activities: ["Test assumptions against community outcomes","Iterate based on equity and effectiveness data"] }
        ],
        kpis: []
      }
    ]
  },
  {
    id: "2.0", domain: "civic", label: "Design & Steward Public Goods", icon: "◇", color: "#10b981",
    origin: "2.0 — Develop and Manage Products and Services",
    delta: "'Products' become public goods. Design criteria shift from market viability to community impact, universal access, and sustainability. No 'product-market fit' — there is 'service-community fit.'",
    groups: [
      { id: "2.1", label: "Govern Public Goods Development", purpose: "Establish governance with community representation for all public goods development.", processes: [
        { id: "2.1.1", label: "Establish public goods governance charter", activities: ["Draft charter defining public goods scope, decision rights, and community accountability","Conduct community ratification vote on charter","Establish amendment process requiring supermajority","Publish charter in accessible formats (plain language, multilingual)"] },
        { id: "2.1.2", label: "Form community design councils per service domain", activities: ["Define service domains (health, education, housing, food, energy, digital)","Recruit council members ensuring demographic representation","Train councils in participatory design methods","Set council authority: recommend, approve, or veto design decisions"] },
        { id: "2.1.3", label: "Define prioritization criteria (equity, impact, feasibility)", activities: ["Weight equity impact as highest criterion (minimum 40% of decision score)","Define impact measurement: number affected × depth of need × duration","Assess feasibility across resource, technical, and political dimensions","Publish prioritization rubric and apply transparently to all proposals"] }
      ], kpis: ["Community representation on councils","Decision transparency score"] },
      { id: "2.2", label: "Identify and Define New Public Goods", purpose: "Research community needs and translate them into service requirements using equity-centered design.", processes: [
        { id: "2.2.1", label: "Conduct ongoing community needs sensing", activities: ["Deploy continuous needs survey with quarterly deep-dives","Analyze service gap data from support (6.3) and engagement (3.1) channels","Conduct ethnographic observation in underserved community segments","Maintain living needs map with heat mapping by geography and demographic"] },
        { id: "2.2.2", label: "Translate needs into service concepts", activities: ["Hold structured ideation sessions with design councils","Generate multiple concept alternatives per identified need","Score concepts against prioritization criteria","Document concept briefs with target population, delivery model, and equity thesis"] },
        { id: "2.2.3", label: "Validate concepts through community co-design", activities: ["Recruit validation panels representative of target populations","Run participatory design workshops (not just feedback sessions)","Test assumptions with rapid prototypes before full development","Iterate based on co-design findings, documenting changes and rationale"] },
        { id: "2.2.4", label: "Develop service requirements with equity criteria", activities: ["Define functional requirements from co-design outputs","Add equity requirements: accessibility, language, cultural sensitivity, geographic reach","Define success metrics including equity-disaggregated outcomes","Conduct pre-mortem: what could make this service exclude the people who need it most?"] }
      ], kpis: ["Community needs coverage","Concept-to-deployment rate","Time from need to availability","Equity in service design","Community participation in design"] },
      { id: "2.3", label: "Develop Public Goods and Services", purpose: "Design, prototype, test, and prepare public goods for deployment.", processes: [
        { id: "2.3.1", label: "Design service architecture and delivery model", activities: ["Choose delivery model: direct, partnered, platform, or hybrid","Design for resilience: no single point of failure","Build feedback loops from day one","Document architecture decisions with community-accessible rationale"] },
        { id: "2.3.2", label: "Prototype and test with representative community members", activities: ["Build minimum viable service with core equity features first","Test with hardest-to-serve populations, not easiest","Measure usability, comprehension, and perceived fairness"] },
        { id: "2.3.3", label: "Conduct accessibility and equity review", activities: ["Audit against universal design principles","Test with assistive technologies and low-literacy users","Review for cultural bias in language, imagery, and assumptions","Certify equity review complete before deployment authorization"] },
        { id: "2.3.4", label: "Prepare deployment plan and facilitator training", activities: ["Sequence deployment to reach highest-need areas first","Train facilitators in trauma-informed and culturally responsive delivery","Create facilitator resource kit with FAQ and escalation paths"] }
      ], kpis: ["Prototype test pass rate","Accessibility compliance","Time to develop"] },
      { id: "2.4", label: "Deploy Public Goods to Community", purpose: "Launch services with community awareness, education, and facilitator training.", processes: [
        { id: "2.4.1", label: "Execute phased rollout with equity-priority sequencing", activities: ["Deploy to highest-need segments in first phase","Monitor uptake by demographic in real-time","Adjust resources based on adoption patterns","Document deployment learnings across service domains"] },
        { id: "2.4.2", label: "Train community facilitators and support staff", activities: ["Deliver competency-based training with assessment","Include equity scenarios and bias awareness in curriculum","Pair new facilitators with experienced mentors"] },
        { id: "2.4.3", label: "Monitor adoption and resolve deployment barriers", activities: ["Track adoption rates disaggregated by all equity dimensions","Investigate any segment with adoption below 60% of average","Deploy barrier-removal interventions (language, location, hours, digital access)"] }
      ], kpis: ["Adoption rate by segment","Facilitator readiness","Deployment barrier resolution time"] },
      { id: "2.5", label: "Manage Service Tiers and Access", purpose: "Design universal access baseline and ensure no community member is excluded.", processes: [
        { id: "2.5.1", label: "Define universal access baseline per service", activities: ["Establish minimum service level available to every community member","Define access dimensions: awareness, availability, usability, and outcomes","Ensure baseline requires no prerequisites (ID, technology, literacy)"] },
        { id: "2.5.2", label: "Monitor access equity across segments", activities: ["Track access by geography, demographic, disability, and language","Flag any segment below 80% of baseline","Conduct quarterly access audits with mystery-shopper methodology"] },
        { id: "2.5.3", label: "Remediate access gaps proactively", activities: ["Deploy mobile/outreach services to underserved areas","Add language and accessibility support based on gap data","Partner with trusted community organizations for hard-to-reach populations"] }
      ], kpis: ["Universal access rate","Access gap by demographic","Exclusion incidents"] },
      { id: "2.6", label: "Manage Public Goods Lifecycle", purpose: "Monitor performance, enhance, sunset, and rationalize the public goods portfolio.", processes: [
        { id: "2.6.1", label: "Monitor service performance and community outcomes", activities: ["Track outcome metrics (not just outputs) per service","Compare outcomes across demographic segments for equity","Feed performance data to flourishing measurement (15.4)"] },
        { id: "2.6.2", label: "Plan and execute service enhancements", activities: ["Prioritize enhancements using equity-weighted criteria","Involve current users in enhancement design","Test enhancements with affected populations before deployment"] },
        { id: "2.6.3", label: "Evaluate and sunset underperforming services", activities: ["Define sunset criteria: low impact, high cost, better alternatives","Conduct community impact assessment before sunset","Ensure transition paths to alternatives for affected members"] },
        { id: "2.6.4", label: "Rationalize portfolio against community needs map", activities: ["Annually map portfolio to current needs","Identify overlaps, gaps, and obsolete services","Present rationalization to governance with community input"] }
      ], kpis: ["Community outcome achievement","Access equity index","Service satisfaction by segment","Portfolio coverage vs. needs"] }
    ]
  },
  {
    id: "3.0", domain: "civic", label: "Facilitate Access & Engagement", icon: "◎", color: "#6366f1",
    origin: "3.0 — Market and Sell Products and Services",
    delta: "Nothing to sell. Function transforms from persuasion and revenue generation to awareness, access facilitation, and need-matching. 'Marketing' becomes community engagement. 'Sales' becomes enrollment and access.",
    groups: [
      { id: "3.1", label: "Understand Communities and Needs", purpose: "Deep community intelligence through assemblies, surveys, ethnography, and data analysis.", processes: [
        { id: "3.1.1", label: "Conduct community assemblies and listening sessions", activities: [] },
        { id: "3.1.2", label: "Operate continuous digital feedback channels", activities: [] },
        { id: "3.1.3", label: "Analyze community data for unmet needs", activities: [] },
        { id: "3.1.4", label: "Map community segments and barriers to access", activities: [] }
      ], kpis: ["Community reach","Feedback response rate","Needs identification accuracy"] },
      { id: "3.2", label: "Develop Engagement Strategy", purpose: "Design institutional identity, access channels, and community experience strategy.", processes: [
        { id: "3.2.1", label: "Define institutional identity and voice", activities: [] },
        { id: "3.2.2", label: "Design multi-channel engagement architecture", activities: [] },
        { id: "3.2.3", label: "Develop community experience journey maps", activities: [] }
      ], kpis: ["Channel coverage","Engagement strategy alignment"] },
      { id: "3.3", label: "Execute Engagement Programs", purpose: "Community awareness, education, digital engagement, events, and content.", processes: [
        { id: "3.3.1", label: "Produce community education content", activities: [] },
        { id: "3.3.2", label: "Manage community events and gatherings", activities: [] },
        { id: "3.3.3", label: "Operate digital engagement platforms", activities: [] }
      ], kpis: ["Content reach","Event participation","Digital engagement rate"] },
      { id: "3.4", label: "Facilitate Access and Enrollment", purpose: "Service discovery, matching, enrollment, barrier removal.", processes: [
        { id: "3.4.1", label: "Operate service discovery and matching tools", activities: [] },
        { id: "3.4.2", label: "Process enrollment and onboarding", activities: [] },
        { id: "3.4.3", label: "Identify and remove access barriers", activities: [] },
        { id: "3.4.4", label: "Manage referrals between services", activities: [] }
      ], kpis: ["Community awareness rate","Access equity index","Enrollment completion rate","Barrier removal cycle time","Digital access gap"] }
    ]
  },
  {
    id: "4.0", domain: "civic", label: "Deliver Physical Resources", icon: "▣", color: "#f59e0b",
    origin: "4.0 — Deliver Physical Products",
    delta: "Supply chains persist. Distribution becomes needs-based, not profit-driven. 'Demand forecasting' becomes 'needs forecasting.' 'Customer orders' become entitlements.",
    groups: [
      { id: "4.1", label: "Plan Resource Distribution", purpose: "Forecast needs, plan distribution networks, develop capacity.", processes: [
        { id: "4.1.1", label: "Forecast community resource needs by segment and region", activities: [] },
        { id: "4.1.2", label: "Develop distribution network plans", activities: [] },
        { id: "4.1.3", label: "Plan production and automation capacity", activities: [] }
      ], kpis: ["Forecast accuracy","Network coverage equity"] },
      { id: "4.2", label: "Procure Materials and Resources", purpose: "Ethical sourcing with sustainability and equity criteria.", processes: [
        { id: "4.2.1", label: "Identify and qualify ethical suppliers", activities: [] },
        { id: "4.2.2", label: "Negotiate and manage supply agreements", activities: [] },
        { id: "4.2.3", label: "Monitor supply chain sustainability", activities: [] }
      ], kpis: ["Sustainable sourcing %","Supplier ethics compliance"] },
      { id: "4.3", label: "Produce and Prepare Resources", purpose: "Schedule and operate production including automated systems.", processes: [
        { id: "4.3.1", label: "Schedule production based on needs forecasts", activities: [] },
        { id: "4.3.2", label: "Operate automated production systems", activities: [] },
        { id: "4.3.3", label: "Perform quality assurance on outputs", activities: [] }
      ], kpis: ["Automated production utilization","Quality pass rate"] },
      { id: "4.4", label: "Manage Logistics and Distribution", purpose: "Equitable physical distribution of resources to community.", processes: [
        { id: "4.4.1", label: "Manage warehousing and inventory", activities: [] },
        { id: "4.4.2", label: "Operate distribution logistics", activities: [] },
        { id: "4.4.3", label: "Monitor distribution equity across regions", activities: [] },
        { id: "4.4.4", label: "Manage returns and resource recovery", activities: [] }
      ], kpis: ["Needs fulfillment rate","Distribution equity","Resource waste rate","Sustainable sourcing %","Delivery timeliness"] }
    ]
  },
  {
    id: "5.0", domain: "civic", label: "Deliver Services & Programs", icon: "◐", color: "#10b981",
    origin: "5.0 — Deliver Services",
    delta: "Service delivery expands massively. The institution's primary output is services enabling human flourishing: education, healthcare, mental health, creative programs, civic development, environmental stewardship.",
    groups: [
      { id: "5.1", label: "Establish Service Delivery Governance", purpose: "Define delivery models, standards, and community oversight.", processes: [
        { id: "5.1.1", label: "Define service delivery standards and SLAs", activities: [] },
        { id: "5.1.2", label: "Establish community oversight for delivery quality", activities: [] },
        { id: "5.1.3", label: "Design delivery models (in-person, digital, hybrid)", activities: [] }
      ], kpis: ["Standards compliance","Community oversight active"] },
      { id: "5.2", label: "Plan and Align Service Resources", purpose: "Forecast demand, plan human + AI capacity, schedule delivery.", processes: [
        { id: "5.2.1", label: "Forecast service demand by type and region", activities: [] },
        { id: "5.2.2", label: "Plan human and AI capacity allocation", activities: [] },
        { id: "5.2.3", label: "Schedule service delivery", activities: [] }
      ], kpis: ["Capacity utilization","Demand forecast accuracy"] },
      { id: "5.3", label: "Manage Service Partners", purpose: "Select, manage, and measure delivery partnerships.", processes: [
        { id: "5.3.1", label: "Identify and evaluate delivery partners", activities: [] },
        { id: "5.3.2", label: "Manage partner performance and relationships", activities: [] },
        { id: "5.3.3", label: "Integrate partner delivery into quality framework", activities: [] }
      ], kpis: ["Partner performance score","Integration completeness"] },
      { id: "5.4", label: "Deliver Services to Community", purpose: "Onboard, deliver, manage exceptions, and assess outcomes.", processes: [
        { id: "5.4.1", label: "Onboard community members to services", activities: [] },
        { id: "5.4.2", label: "Execute service delivery (programs, sessions, resources)", activities: [] },
        { id: "5.4.3", label: "Manage service exceptions and escalations", activities: [] },
        { id: "5.4.4", label: "Assess service outcomes per community member", activities: [] }
      ], kpis: ["Service commitment attainment","Community satisfaction","Time to onboard","Outcome achievement rate","Service equity index","Human-AI delivery ratio"] },
      { id: "5.5", label: "Manage Service Infrastructure", purpose: "Technology, knowledge, and physical facilities for delivery.", processes: [
        { id: "5.5.1", label: "Manage service delivery technology platforms", activities: [] },
        { id: "5.5.2", label: "Maintain physical service facilities", activities: [] },
        { id: "5.5.3", label: "Manage service knowledge base", activities: [] }
      ], kpis: ["Infrastructure availability","Facility utilization"] }
    ]
  },
  {
    id: "6.0", domain: "civic", label: "Support Community Members", icon: "♡", color: "#6366f1",
    origin: "6.0 — Manage Customer Service",
    delta: "'Customer service' becomes community member support — a fundamental civic function. The feedback loop becomes the institution's primary listening channel. Support is not a cost center; it is how the institution learns.",
    groups: [
      { id: "6.1", label: "Develop Support Strategy", purpose: "Inclusive, accessible, multilingual support design.", processes: [
        { id: "6.1.1", label: "Define support principles (inclusive, restorative, accessible)", activities: [] },
        { id: "6.1.2", label: "Design multi-channel support architecture", activities: [] },
        { id: "6.1.3", label: "Establish multilingual and accessibility standards", activities: [] }
      ], kpis: ["Support channel coverage","Accessibility compliance"] },
      { id: "6.2", label: "Manage Support Operations", purpose: "Resource planning, capability development, workforce and technology.", processes: [
        { id: "6.2.1", label: "Plan support staffing and AI augmentation", activities: [] },
        { id: "6.2.2", label: "Train support contributors in empathy and resolution", activities: [] },
        { id: "6.2.3", label: "Manage support technology (ticketing, AI chat, knowledge)", activities: [] }
      ], kpis: ["Support capacity utilization","Training completion rate"] },
      { id: "6.3", label: "Manage Requests, Issues, and Feedback", purpose: "Inquiries, complaints, grievances, ombudsman function.", processes: [
        { id: "6.3.1", label: "Receive and triage community requests", activities: [] },
        { id: "6.3.2", label: "Resolve inquiries and issues", activities: [] },
        { id: "6.3.3", label: "Manage formal grievance process", activities: [] },
        { id: "6.3.4", label: "Operate ombudsman function for systemic issues", activities: [] },
        { id: "6.3.5", label: "Route actionable feedback to improvement pipeline", activities: [] }
      ], kpis: ["First Contact Resolution","Community satisfaction","Community effort score","Grievance resolution time","Feedback utilization rate","Support equity"] },
      { id: "6.4", label: "Measure and Evaluate Support", purpose: "Satisfaction, quality, equity, and retention measurement.", processes: [
        { id: "6.4.1", label: "Measure support satisfaction and quality", activities: [] },
        { id: "6.4.2", label: "Analyze support equity across demographics", activities: [] },
        { id: "6.4.3", label: "Generate insight reports for institutional learning", activities: [] }
      ], kpis: ["Satisfaction trend","Equity gap by segment","Insight adoption rate"] }
    ]
  },
  {
    id: "7.0", domain: "support", label: "Develop Human Potential", icon: "✦", color: "#f59e0b",
    origin: "7.0 — Develop and Manage Human Capital",
    delta: "THE MOST TRANSFORMED CATEGORY. 'Human Resources' is obsolete. People are not 'capital' to be managed. Replaced by Human Development — cultivation of potential, purpose, and civic participation. Contribution is voluntary and intrinsically motivated.",
    groups: [
      { id: "7.1", label: "Human Development Strategy", purpose: "Align human development to institutional vision and community flourishing.", processes: [
        { id: "7.1.1", label: "Define human development philosophy and principles", activities: [] },
        { id: "7.1.2", label: "Plan contributor development needs by capability area", activities: [] },
        { id: "7.1.3", label: "Design contributor experience journey", activities: [] }
      ], kpis: ["Strategy alignment score","Development plan coverage"] },
      { id: "7.2", label: "Invite and Activate Contributors", purpose: "The institution does not 'hire' — it invites. Match contributors to roles by interest and capability.", processes: [
        { id: "7.2.1", label: "Define contribution opportunities and role descriptions", activities: [] },
        { id: "7.2.2", label: "Attract contributors through mission-aligned channels", activities: [] },
        { id: "7.2.3", label: "Match contributors to roles by interest and capability", activities: [] },
        { id: "7.2.4", label: "Onboard and orient new contributors", activities: [] }
      ], kpis: ["Time to activate","Role match satisfaction","Onboarding completion"] },
      { id: "7.3", label: "Develop and Support Contributors", purpose: "Growth, learning, career evolution, mentorship, sustainable engagement.", processes: [
        { id: "7.3.1", label: "Deliver learning and skill development programs", activities: [] },
        { id: "7.3.2", label: "Operate mentorship and peer learning networks", activities: [] },
        { id: "7.3.3", label: "Support personal growth and career evolution", activities: [] },
        { id: "7.3.4", label: "Monitor contributor wellbeing and sustainability", activities: [] }
      ], kpis: ["Capability development rate","Mentorship participation","Wellbeing score"] },
      { id: "7.4", label: "Recognize and Sustain Engagement", purpose: "Universal resource access as a right. Recognition without coercive dependency.", processes: [
        { id: "7.4.1", label: "Operate recognition and appreciation programs", activities: [] },
        { id: "7.4.2", label: "Ensure universal resource access for all contributors", activities: [] },
        { id: "7.4.3", label: "Monitor engagement and address disengagement early", activities: [] }
      ], kpis: ["Community participation rate","Contributor satisfaction","Capability development rate","Pathway diversity","Role transition satisfaction"] },
      { id: "7.5", label: "Support Role Transitions", purpose: "Transitions, sabbaticals, knowledge handoff, life changes — not 'termination.'", processes: [
        { id: "7.5.1", label: "Manage role transitions and knowledge handoff", activities: [] },
        { id: "7.5.2", label: "Support sabbaticals and life changes", activities: [] },
        { id: "7.5.3", label: "Maintain contributor relationships post-transition", activities: [] }
      ], kpis: ["Transition satisfaction","Knowledge retention rate"] },
      { id: "7.6", label: "Manage Contributor Information", purpose: "Privacy-protected records, community information systems.", processes: [
        { id: "7.6.1", label: "Maintain privacy-protected contributor records", activities: [] },
        { id: "7.6.2", label: "Manage contributor self-service information access", activities: [] }
      ], kpis: ["Data accuracy","Privacy compliance rate"] },
      { id: "7.7", label: "Community Communication", purpose: "Radically transparent communication and dialogue mechanisms.", processes: [
        { id: "7.7.1", label: "Operate transparent internal communication channels", activities: [] },
        { id: "7.7.2", label: "Facilitate two-way dialogue between contributors and governance", activities: [] }
      ], kpis: ["Communication satisfaction","Dialogue participation rate"] }
    ]
  },
  {
    id: "8.0", domain: "support", label: "Technology & AI Infrastructure", icon: "⬡", color: "#10b981",
    origin: "8.0 — Manage Information Technology",
    delta: "IT management expands to include AI agent governance, autonomous system oversight, algorithmic transparency. Category 8 manages the technology platform; Category 14 manages the autonomous decision-making systems on it.",
    groups: [
      { id: "8.1", label: "Technology Strategy and Governance", purpose: "Mission-aligned technology strategy with community oversight.", processes: [
        { id: "8.1.1", label: "Develop technology strategy aligned to institutional mission", activities: [] },
        { id: "8.1.2", label: "Establish technology governance with community input", activities: [] },
        { id: "8.1.3", label: "Manage technology investment portfolio", activities: [] }
      ], kpis: ["Strategy-mission alignment","Investment ROI"] },
      { id: "8.2", label: "Technology Portfolio", purpose: "Application and technology portfolio management.", processes: [
        { id: "8.2.1", label: "Manage application portfolio (build, buy, retire)", activities: [] },
        { id: "8.2.2", label: "Evaluate and adopt emerging technologies", activities: [] },
        { id: "8.2.3", label: "Manage technology debt and modernization", activities: [] }
      ], kpis: ["Portfolio health score","Tech debt ratio"] },
      { id: "8.3", label: "Infrastructure", purpose: "Network, cloud, workplace, security infrastructure.", processes: [
        { id: "8.3.1", label: "Manage cloud and compute infrastructure", activities: [] },
        { id: "8.3.2", label: "Operate network and communications", activities: [] },
        { id: "8.3.3", label: "Manage cybersecurity and threat response", activities: [] }
      ], kpis: ["System availability","Security incident rate"] },
      { id: "8.4", label: "Institutional Architecture", purpose: "Business, information, application, technology architecture.", processes: [
        { id: "8.4.1", label: "Maintain enterprise architecture models", activities: [] },
        { id: "8.4.2", label: "Guide solution design to architecture standards", activities: [] },
        { id: "8.4.3", label: "Manage data architecture and integration patterns", activities: [] }
      ], kpis: ["Architecture compliance","Integration maturity"] },
      { id: "8.5", label: "Technology Services and Support", purpose: "Service desk, incident, problem, change, access management.", processes: [
        { id: "8.5.1", label: "Operate service desk and incident management", activities: [] },
        { id: "8.5.2", label: "Manage problem identification and resolution", activities: [] },
        { id: "8.5.3", label: "Govern change and release management", activities: [] },
        { id: "8.5.4", label: "Manage access provisioning and identity", activities: [] }
      ], kpis: ["Incident resolution time","Change success rate"] },
      { id: "8.8", label: "Institutional Data", purpose: "Open-by-default data strategy, community data rights, transparency obligations.", processes: [
        { id: "8.8.1", label: "Define data governance and community data rights", activities: [] },
        { id: "8.8.2", label: "Manage master data and data quality", activities: [] },
        { id: "8.8.3", label: "Operate analytics and business intelligence", activities: [] },
        { id: "8.8.4", label: "Publish open data per transparency obligations", activities: [] }
      ], kpis: ["System availability","Data quality score","Analytics adoption","Privacy compliance","Open data coverage"] }
    ]
  },
  {
    id: "9.0", domain: "support", label: "Steward Collective Resources", icon: "◈", color: "#6366f1",
    origin: "9.0 — Manage Financial Resources",
    delta: "'Revenue' transforms into resource inflows from automated production, taxation, commons yields. 'Expenses' become resource allocation to services. Accounting serves transparency and stewardship, not shareholder returns.",
    groups: [
      { id: "9.1", label: "Resource Planning and Stewardship", purpose: "Annual plans, long-range models, forecasting, cost allocation.", processes: [
        { id: "9.1.1", label: "Develop annual resource plan with community input", activities: [] },
        { id: "9.1.2", label: "Build long-range resource models", activities: [] },
        { id: "9.1.3", label: "Allocate resources to services with equity criteria", activities: [] },
        { id: "9.1.4", label: "Forecast resource needs and surplus", activities: [] }
      ], kpis: ["Resource plan accuracy","Allocation equity","Transparency score","Audit findings","Resource utilization efficiency"] },
      { id: "9.2", label: "Manage Resource Inflows", purpose: "Automated production yields, taxation, grants, transfers.", processes: [
        { id: "9.2.1", label: "Manage automated production revenue collection", activities: [] },
        { id: "9.2.2", label: "Process taxation and community contributions", activities: [] },
        { id: "9.2.3", label: "Manage grants, transfers, and external inflows", activities: [] }
      ], kpis: ["Inflow forecast accuracy","Collection efficiency"] },
      { id: "9.3", label: "General Accounting and Reporting", purpose: "Ledger, period close, reconciliation, financial statements.", processes: [
        { id: "9.3.1", label: "Maintain general ledger and chart of accounts", activities: [] },
        { id: "9.3.2", label: "Perform period close and reconciliation", activities: [] },
        { id: "9.3.3", label: "Produce transparent financial statements", activities: [] }
      ], kpis: ["Close cycle time","Reconciliation accuracy"] },
      { id: "9.5", label: "Contributor Stipends and Universal Access", purpose: "Replaces 'payroll' — process universal access and contributor stipends.", processes: [
        { id: "9.5.1", label: "Process universal resource access disbursements", activities: [] },
        { id: "9.5.2", label: "Manage contributor stipend calculations", activities: [] },
        { id: "9.5.3", label: "Operate self-service resource access portal", activities: [] }
      ], kpis: ["Disbursement accuracy","Processing timeliness"] },
      { id: "9.8", label: "Fiduciary Controls and Transparency", purpose: "Public accountability, not just compliance.", processes: [
        { id: "9.8.1", label: "Operate internal controls and segregation of duties", activities: [] },
        { id: "9.8.2", label: "Manage external audit and public reporting", activities: [] },
        { id: "9.8.3", label: "Publish real-time resource dashboards for community", activities: [] }
      ], kpis: ["Control effectiveness","Transparency dashboard uptime"] }
    ]
  },
  {
    id: "10.0", domain: "support", label: "Manage Commons & Shared Assets", icon: "▤", color: "#f59e0b",
    origin: "10.0 — Acquire, Construct and Manage Assets",
    delta: "Physical assets become 'the commons' — community-owned infrastructure, shared spaces, cooperative assets. Stewardship replaces ownership. Maintenance is a community obligation, not cost minimization.",
    groups: [
      { id: "10.1", label: "Develop Commons Strategy", purpose: "Plan community-owned spaces, infrastructure, environmental assets.", processes: [
        { id: "10.1.1", label: "Assess community infrastructure needs and gaps", activities: [] },
        { id: "10.1.2", label: "Develop commons investment priorities", activities: [] },
        { id: "10.1.3", label: "Design shared ownership and stewardship models", activities: [] }
      ], kpis: ["Commons coverage vs. need","Investment prioritization transparency"] },
      { id: "10.2", label: "Develop and Construct Shared Assets", purpose: "Plan, design, build, and commission community assets.", processes: [
        { id: "10.2.1", label: "Plan and design community assets with participatory input", activities: [] },
        { id: "10.2.2", label: "Manage construction and commissioning", activities: [] },
        { id: "10.2.3", label: "Transition assets to community stewardship", activities: [] }
      ], kpis: ["Project on-time rate","Community input integration","Budget adherence"] },
      { id: "10.3", label: "Maintain and Operate Commons", purpose: "Preventive, corrective, and community-managed maintenance.", processes: [
        { id: "10.3.1", label: "Operate preventive maintenance programs", activities: [] },
        { id: "10.3.2", label: "Manage corrective maintenance and repairs", activities: [] },
        { id: "10.3.3", label: "Coordinate community volunteer maintenance", activities: [] }
      ], kpis: ["Maintenance schedule adherence","Asset condition score","Community participation in stewardship"] },
      { id: "10.4", label: "Manage Asset Transitions", purpose: "Decommission, repurpose, or transfer assets.", processes: [
        { id: "10.4.1", label: "Evaluate assets for repurposing or decommission", activities: [] },
        { id: "10.4.2", label: "Execute environmentally responsible asset retirement", activities: [] }
      ], kpis: ["Repurpose rate","Environmental compliance"] }
    ]
  },
  {
    id: "11.0", domain: "support", label: "Institutional Integrity & Equity", icon: "⬢", color: "#10b981",
    origin: "11.0 — Manage Enterprise Risk, Compliance, and Resiliency",
    delta: "Risk expands to include AI bias, resource equity, institutional capture, democratic erosion, environmental justice. 'Compliance' transforms to adherence to community charter. NEW: Equity Monitoring (11.3) — ensuring the institution doesn't reproduce systemic inequities.",
    groups: [
      { id: "11.1", label: "Manage Institutional Risk", purpose: "Full risk framework including algorithmic bias, capture, democratic erosion, meaning crisis.", processes: [
        { id: "11.1.1", label: "Identify and categorize institutional risks", activities: ["Maintain risk register covering operational, reputational, ethical, and existential risks","Add PLE-specific risk categories: AI alignment, democratic capture, flourishing deficit, purpose crisis","Conduct annual risk identification workshop with community participation","Track emerging risks from technology, demographic, and political environment changes"] },
        { id: "11.1.2", label: "Assess risk impact and probability", activities: ["Score each risk on community impact (not just institutional impact)","Weight equity impact: risks that disproportionately affect vulnerable populations score higher","Model cascade effects using integration map dependencies","Review assessments quarterly and after any significant incident"] },
        { id: "11.1.3", label: "Develop and implement risk mitigation strategies", activities: ["Design mitigation for top-20 risks with assigned stewards","Require equity impact assessment for all mitigation strategies","Test mitigations through tabletop exercises annually","Publish risk posture summary to community (redacted for sensitive details)"] },
        { id: "11.1.4", label: "Monitor PLE-specific risks (capture, algorithmic bias, meaning crisis)", activities: ["Track institutional capture indicators monthly (influence concentration, revolving doors)","Monitor AI decision quality via Category 14.3 integration","Survey community meaning and purpose metrics via Category 15.4","Alert governance body when any PLE risk indicator crosses threshold"] }
      ], kpis: ["Risk identification rate","Mitigation plan coverage","PLE risk monitoring active"] },
      { id: "11.2", label: "Charter Compliance and Ethics", purpose: "Monitor adherence to founding principles and conduct ethics reviews.", processes: [
        { id: "11.2.1", label: "Monitor compliance with founding charter", activities: ["Map all institutional decisions to charter provisions they invoke","Conduct quarterly compliance review with community observers","Flag charter drift: when practices diverge from founding principles","Require charter compliance certification for major decisions"] },
        { id: "11.2.2", label: "Conduct periodic ethics reviews", activities: ["Commission annual ethics review by independent panel","Review AI decision ethics via Category 14 integration","Assess equity of resource distribution and service access","Publish ethics findings in plain language to community"] },
        { id: "11.2.3", label: "Operate whistleblower and ethics reporting channel", activities: ["Maintain anonymous reporting channel accessible to all community members","Guarantee protection from retaliation for good-faith reports","Investigate all reports within defined SLA (72 hours acknowledgment, 30 days resolution)","Report aggregate ethics channel statistics publicly (without identifying reporters)"] }
      ], kpis: ["Charter compliance score","Ethics review completion","Reporting channel usage"] },
      { id: "11.3", label: "Equity Monitoring and Remediation", purpose: "NEW — Define equity metrics, measure distribution, identify and remediate systemic inequities.", processes: [
        { id: "11.3.1", label: "Define equity metrics across all service areas", activities: ["Establish equity dimensions: access, distribution, outcomes, voice, dignity","Define measurement methodology per dimension (quantitative + qualitative)","Set equity floor: minimum threshold below which any disparity triggers intervention","Disaggregate all metrics by protected attributes, geography, and economic status"] },
        { id: "11.3.2", label: "Measure resource and outcome distribution equity", activities: ["Track resource allocation per capita by community segment","Measure service outcomes (not just outputs) disaggregated by demographics","Calculate Gini coefficient for key resource distributions","Publish equity dashboard accessible to all community members"] },
        { id: "11.3.3", label: "Identify systemic inequities through data analysis", activities: ["Apply statistical testing to identify significant disparities","Distinguish systemic patterns from individual variation","Conduct root cause analysis for persistent inequities","Map inequity drivers to institutional processes (which process creates this disparity?)"] },
        { id: "11.3.4", label: "Design and implement equity remediation programs", activities: ["Co-design remediation with affected communities (not for them, with them)","Target root causes identified in analysis, not just symptoms","Set measurable remediation targets with timeline","Monitor remediation effectiveness and adjust if disparity persists"] }
      ], kpis: ["Resource distribution equity","Service access equity","Outcome equity","Disparity identification rate","Remediation effectiveness"] },
      { id: "11.4", label: "Institutional Resilience", purpose: "Continuity, crisis response, resilience testing, mutual aid networks.", processes: [
        { id: "11.4.1", label: "Develop business continuity and crisis response plans", activities: ["Maintain continuity plans for all critical institutional functions","Include AI system failure scenarios in continuity planning","Define crisis governance: who decides what, with what authority, under what constraints","Ensure continuity plans preserve equity commitments (no triage that abandons vulnerable populations)"] },
        { id: "11.4.2", label: "Conduct resilience testing and tabletop exercises", activities: ["Run quarterly tabletop exercises rotating through scenario types","Include community representatives in exercises (not just institutional staff)","Test AI governance fail-safes in coordination with Category 14.5","Document findings and update plans within 30 days"] },
        { id: "11.4.3", label: "Build and maintain mutual aid networks", activities: ["Establish reciprocal support agreements with peer institutions","Define mutual aid protocols: what each institution provides and under what conditions","Test mutual aid activation annually","Maintain updated contact and capability lists for all network members"] }
      ], kpis: ["Continuity plan coverage","Exercise frequency","Recovery time objective adherence"] },
      { id: "11.5", label: "Legal and Constitutional Affairs", purpose: "Legal operations within constitutional governance framework.", processes: [
        { id: "11.5.1", label: "Manage legal operations and counsel", activities: ["Maintain access to legal counsel experienced in cooperative/commons law","Proactively identify legal risks from new programs and technologies","Provide legal education to governance body on relevant frameworks"] },
        { id: "11.5.2", label: "Interpret and apply constitutional governance provisions", activities: ["Maintain constitutional interpretation precedent log","Provide advisory opinions on constitutional questions to governance body","Refer contested interpretations to democratic dispute resolution (16.3)"] },
        { id: "11.5.3", label: "Manage contracts and agreements", activities: ["Ensure all contracts align with charter values and equity commitments","Include equity and community benefit clauses in partner agreements","Review contract portfolio annually for alignment with institutional direction"] }
      ], kpis: ["Legal matter resolution time","Constitutional compliance"] }
    ]
  },
  {
    id: "12.0", domain: "support", label: "Inter-Institutional Relations", icon: "◎", color: "#6366f1",
    origin: "12.0 — Manage External Relationships",
    delta: "'Investor relations' vanishes. 'Government relations' becomes inter-institutional coordination. Community responsibility IS the mission, not bolt-on CSR.",
    groups: [
      { id: "12.1", label: "Inter-Institutional Relationships", purpose: "Coordinate with peer PLE institutions and traditional government.", processes: [
        { id: "12.1.1", label: "Maintain registry of peer institutions and networks", activities: [] },
        { id: "12.1.2", label: "Manage coordination agreements and protocols", activities: [] },
        { id: "12.1.3", label: "Participate in inter-institutional governance forums", activities: [] }
      ], kpis: ["Active partnerships","Coordination agreement compliance"] },
      { id: "12.2", label: "Democratic Accountability", purpose: "Report to and be accountable to the community through democratic processes.", processes: [
        { id: "12.2.1", label: "Produce regular accountability reports for community", activities: [] },
        { id: "12.2.2", label: "Facilitate community review of institutional performance", activities: [] },
        { id: "12.2.3", label: "Respond to democratic oversight inquiries", activities: [] }
      ], kpis: ["Report publication cadence","Community review participation"] },
      { id: "12.3", label: "Public Communication and Transparency", purpose: "Media, public communication, crisis communication.", processes: [
        { id: "12.3.1", label: "Manage public communications and media relations", activities: [] },
        { id: "12.3.2", label: "Operate crisis communication protocols", activities: [] },
        { id: "12.3.3", label: "Maintain public transparency portal", activities: [] }
      ], kpis: ["Communication reach","Transparency portal usage","Crisis response time"] },
      { id: "12.4", label: "Governance Board Relationships", purpose: "Board governance, composition, reporting.", processes: [
        { id: "12.4.1", label: "Support governance board operations", activities: [] },
        { id: "12.4.2", label: "Manage board composition and representation equity", activities: [] },
        { id: "12.4.3", label: "Facilitate board-community interface", activities: [] }
      ], kpis: ["Board diversity index","Meeting cadence adherence"] },
      { id: "12.5", label: "Community and Environmental Stewardship", purpose: "ESG, community engagement, environmental programs.", processes: [
        { id: "12.5.1", label: "Manage environmental sustainability programs", activities: [] },
        { id: "12.5.2", label: "Operate community investment and engagement programs", activities: [] },
        { id: "12.5.3", label: "Report environmental and social impact transparently", activities: [] }
      ], kpis: ["Environmental footprint reduction","Community investment as % of resources"] }
    ]
  },
  {
    id: "13.0", domain: "support", label: "Evolve Institutional Capabilities", icon: "∞", color: "#f59e0b",
    origin: "13.0 — Develop and Manage Business Capabilities",
    delta: "The meta-category — governs how the institution improves everything else. Gains emphasis on institutional learning and collective intelligence. The institution must continuously evolve because the post-labor transition is itself ongoing and unpredictable.",
    groups: [
      { id: "13.1", label: "Manage Institutional Processes", purpose: "Process ownership, documentation, performance, improvement.", processes: [
        { id: "13.1.1", label: "Assign process ownership and stewardship", activities: [] },
        { id: "13.1.2", label: "Document and maintain process definitions", activities: [] },
        { id: "13.1.3", label: "Measure process performance against standards", activities: [] }
      ], kpis: ["Process documentation coverage","Performance measurement coverage"] },
      { id: "13.2", label: "Portfolio, Programs, and Projects", purpose: "Enterprise portfolio management and project execution.", processes: [
        { id: "13.2.1", label: "Manage institutional project portfolio", activities: [] },
        { id: "13.2.2", label: "Execute projects with governance and community visibility", activities: [] },
        { id: "13.2.3", label: "Manage program dependencies and integration", activities: [] }
      ], kpis: ["Portfolio health score","Project success rate","Budget adherence"] },
      { id: "13.3", label: "Quality and Standards", purpose: "Quality strategy, QMS, assurance, control, improvement.", processes: [
        { id: "13.3.1", label: "Define quality standards and management system", activities: [] },
        { id: "13.3.2", label: "Conduct quality assurance and audits", activities: [] },
        { id: "13.3.3", label: "Manage corrective and preventive actions", activities: [] }
      ], kpis: ["Quality audit pass rate","Corrective action closure time"] },
      { id: "13.4", label: "Institutional Transformation", purpose: "Transformation strategy, adaptive capacity, community participation in change.", processes: [
        { id: "13.4.1", label: "Develop transformation strategy and roadmap", activities: [] },
        { id: "13.4.2", label: "Manage change with community participation", activities: [] },
        { id: "13.4.3", label: "Build institutional adaptive capacity", activities: [] }
      ], kpis: ["Transformation milestone completion","Change adoption rate","Adaptive capacity score"] },
      { id: "13.5", label: "Collective Intelligence and Knowledge", purpose: "Expanded from 'knowledge management' — collective intelligence strategy, communities of practice, institutional memory.", processes: [
        { id: "13.5.1", label: "Operate institutional knowledge management system", activities: [] },
        { id: "13.5.2", label: "Facilitate communities of practice", activities: [] },
        { id: "13.5.3", label: "Curate and preserve institutional memory", activities: [] },
        { id: "13.5.4", label: "Design collective intelligence mechanisms", activities: [] }
      ], kpis: ["Knowledge base coverage","Community of practice participation","Institutional memory completeness"] },
      { id: "13.6", label: "Continuous Improvement", purpose: "CI culture, improvement pipeline, implementation, measurement.", processes: [
        { id: "13.6.1", label: "Build and sustain continuous improvement culture", activities: [] },
        { id: "13.6.2", label: "Manage improvement idea pipeline", activities: [] },
        { id: "13.6.3", label: "Implement and measure improvement initiatives", activities: [] }
      ], kpis: ["Improvement ideas submitted","Implementation rate","Measured impact of improvements"] },
      { id: "13.7", label: "Measure Institutional Performance", purpose: "Impact-focused performance philosophy with flourishing integration.", processes: [
        { id: "13.7.1", label: "Define impact-focused performance measurement framework", activities: [] },
        { id: "13.7.2", label: "Operate institutional performance dashboards", activities: [] },
        { id: "13.7.3", label: "Integrate flourishing metrics into all performance views", activities: [] },
        { id: "13.7.4", label: "Conduct strategy reviews with performance data", activities: [] }
      ], kpis: ["Impact dashboard coverage","Data freshness","Strategy review adherence","OKR completion","Flourishing integration score"] }
    ]
  },
  {
    id: "14.0", domain: "ple", label: "Algorithmic Governance", icon: "⚙", color: "#ef4444",
    origin: "NONE — New to PLE-GPS",
    delta: "AI systems make decisions affecting community members' lives. Governing these systems is a governance function, not an IT function. Requires its own process architecture, oversight mechanisms, and accountability structures.",
    groups: [
      { id: "14.1", label: "Establish AI Governance Framework", purpose: "Principles, oversight body, decision rights, ethics standards, transparency requirements.", processes: [
        { id: "14.1.1", label: "Define AI governance principles and constitutional constraints", activities: ["Define 'never autonomous' decisions","Define 'always autonomous' decisions","Define 'human-in-the-loop' decisions"] },
        { id: "14.1.2", label: "Establish AI oversight body with community representation", activities: ["Recruit diverse community representation"] },
        { id: "14.1.3", label: "Define AI decision rights", activities: ["Build decision rights matrix per AI system"] },
        { id: "14.1.4", label: "Develop AI ethics standards", activities: ["Develop AI impact assessment methodology"] },
        { id: "14.1.5", label: "Define transparency and explainability requirements", activities: ["Define explainability requirements by decision category"] }
      ], kpis: [] },
      { id: "14.2", label: "Manage AI Agent Portfolio", purpose: "Inventory, classify, lifecycle manage, and evaluate all autonomous systems.", processes: [
        { id: "14.2.1", label: "Maintain AI agent inventory and classification", activities: ["Catalog all AI systems with capability descriptions","Classify agents by decision authority level (advisory, semi-autonomous, fully autonomous)","Map each agent to the processes and community segments it affects","Maintain version history and change logs per agent"] },
        { id: "14.2.2", label: "Manage AI agent lifecycle (deploy, monitor, retire)", activities: ["Define deployment gates requiring governance approval","Operate staging and shadow-mode testing before production","Monitor agent health, drift, and degradation","Execute graceful retirement with community notification and alternative provision"] },
        { id: "14.2.3", label: "Evaluate AI agent performance and value", activities: ["Measure agent outcomes against community benefit criteria","Compare agent decisions to human baseline decisions","Calculate cost-to-serve vs community value created","Conduct quarterly agent portfolio review with community observers"] }
      ], kpis: ["Inventory completeness","Lifecycle compliance"] },
      { id: "14.3", label: "Monitor AI Decision Quality and Fairness", purpose: "Bias monitoring, algorithmic audits, incident response, transparent reporting.", processes: [
        { id: "14.3.1", label: "Operate continuous bias monitoring systems", activities: ["Deploy statistical bias detection across all protected attributes","Monitor outcome distribution equity in real-time","Alert on bias threshold breaches with automatic escalation","Maintain bias monitoring dashboards accessible to community"] },
        { id: "14.3.2", label: "Conduct periodic algorithmic audits", activities: ["Engage independent auditors with community oversight","Audit against fairness, accuracy, transparency, and accountability criteria","Publish audit findings in plain language for community review","Track remediation of audit findings to closure"] },
        { id: "14.3.3", label: "Manage AI incident response and remediation", activities: ["Define AI incident severity levels and response protocols","Operate 24/7 AI incident detection and triage","Execute immediate containment (pause, rollback, human takeover)","Conduct post-incident review with root cause analysis and community report"] },
        { id: "14.3.4", label: "Publish AI decision quality reports to community", activities: ["Produce monthly AI transparency reports","Include decision volume, accuracy, reversal rate, and equity metrics","Publish in accessible formats (summary, full data, interactive dashboard)","Host quarterly community forums to discuss AI governance"] }
      ], kpis: ["Bias detection rate","Decision reversal rate","Transparency score","Incident response time","Community trust in AI","Governance compliance"] },
      { id: "14.4", label: "Human-AI Work Allocation", purpose: "Define, monitor, and adjust how work is distributed between humans and AI.", processes: [
        { id: "14.4.1", label: "Define human-AI work allocation principles", activities: ["Establish 'always human' decision categories (constitutional rights, irreversible life impact)","Define 'AI-appropriate' categories (routine, high-volume, data-intensive)","Design human-in-the-loop protocols for contested decisions","Publish allocation principles as community-accessible policy"] },
        { id: "14.4.2", label: "Monitor work allocation balance and community impact", activities: ["Track percentage of decisions made by AI vs human by category","Measure community satisfaction with AI-made vs human-made decisions","Monitor for skill atrophy in human decision-makers","Assess impact on contributor engagement and purpose"] },
        { id: "14.4.3", label: "Adjust allocation based on outcomes and community input", activities: ["Conduct periodic community surveys on AI delegation comfort","Shift allocation boundaries based on outcome data","Ensure human capacity remains sufficient for AI override scenarios"] }
      ], kpis: ["Allocation balance score","Community satisfaction with AI delegation"] },
      { id: "14.5", label: "AI Safety and Alignment", purpose: "Alignment drift monitoring, safety protocols, capability boundaries.", processes: [
        { id: "14.5.1", label: "Monitor AI alignment drift and value consistency", activities: ["Compare AI decisions against institutional values baseline monthly","Detect subtle drift through statistical distribution analysis","Measure consistency between AI explanations and actual decision logic","Flag misalignment to governance body with severity rating"] },
        { id: "14.5.2", label: "Maintain AI safety protocols and kill switches", activities: ["Maintain tested kill switches for every autonomous system","Conduct quarterly kill switch drills","Define graduated response (throttle, pause, isolate, terminate)","Ensure human override capability is always available within 60 seconds"] },
        { id: "14.5.3", label: "Define and enforce AI capability boundaries", activities: ["Define maximum scope of authority per AI system","Implement technical guardrails preventing boundary violations","Monitor and log all boundary-adjacent decisions","Review boundaries annually with community input"] },
        { id: "14.5.4", label: "Conduct adversarial testing and red-teaming", activities: ["Operate internal red team for AI system testing","Contract external adversarial testing annually","Test for manipulation, exploitation, and edge-case failures","Publish red team findings (redacted for security) to community"] }
      ], kpis: ["Alignment drift score","Safety protocol test pass rate","Capability boundary violations"] }
    ]
  },
  {
    id: "15.0", domain: "ple", label: "Human Flourishing Infrastructure", icon: "✿", color: "#ec4899",
    origin: "NONE — New to PLE-GPS",
    delta: "When labor no longer provides identity, purpose, social connection, and status, these functions must be deliberately designed for. This is not HR. This is the systemic conditions for meaningful, purposeful, connected lives.",
    groups: [
      { id: "15.1", label: "Develop Flourishing Strategy", purpose: "Define framework, dimensions (purpose, connection, growth, contribution, health, creativity, autonomy, belonging), and targets.", processes: [
        { id: "15.1.1", label: "Define flourishing dimensions and measurement framework", activities: ["Research and adopt evidence-based flourishing model (e.g., PERMA+, eudaimonic wellbeing)","Define 8 institutional dimensions: purpose, connection, growth, contribution, health, creativity, autonomy, belonging","Design validated measurement instruments per dimension","Establish data collection cadence (quarterly community surveys, continuous passive indicators)"] },
        { id: "15.1.2", label: "Set flourishing targets by dimension and demographic", activities: ["Establish baseline measurements across all demographics","Set minimum floor targets (no community segment below threshold)","Set aspirational targets per dimension with 3-year horizon","Disaggregate targets by age, location, ability, and background"] },
        { id: "15.1.3", label: "Design flourishing intervention strategy", activities: ["Map existing programs to flourishing dimensions they serve","Identify dimension gaps with no institutional coverage","Design intervention portfolio covering all 8 dimensions","Prioritize interventions by equity impact and feasibility"] },
        { id: "15.1.4", label: "Integrate flourishing into all institutional strategy", activities: ["Require flourishing impact assessment for all new initiatives","Add flourishing metrics to every category's KPI framework","Train all process stewards on flourishing integration","Make flourishing the tiebreaker in all resource allocation decisions"] }
      ], kpis: ["Framework completeness","Target coverage by dimension"] },
      { id: "15.2", label: "Purpose and Meaning Infrastructure", purpose: "Purpose-discovery programs, contribution opportunities, creative expression, intellectual exploration, intergenerational connection.", processes: [
        { id: "15.2.1", label: "Operate purpose-discovery and exploration programs", activities: ["Offer structured purpose-exploration workshops (multi-week cohorts)","Provide individual purpose coaching and reflection tools","Create 'purpose sabbaticals' for deep exploration periods","Maintain purpose resource library (assessments, guides, mentors)"] },
        { id: "15.2.2", label: "Match community members to contribution opportunities", activities: ["Maintain real-time opportunity board across all institutional functions","Operate AI-assisted matching based on interests, skills, and purpose goals","Enable trial periods and role rotation without commitment","Track match satisfaction and iterate matching algorithms"] },
        { id: "15.2.3", label: "Facilitate creative expression programs and spaces", activities: ["Operate maker spaces, studios, performance venues, and digital labs","Fund community arts grants and creative residencies","Organize exhibitions, performances, and creative showcases","Support creative collaboration tools and platforms"] },
        { id: "15.2.4", label: "Organize intellectual exploration and learning communities", activities: ["Operate community university with open enrollment (no prerequisites)","Facilitate study circles, reading groups, and discussion salons","Support citizen science and community research projects","Host lecture series, debates, and intellectual exchange events"] },
        { id: "15.2.5", label: "Design intergenerational connection programs", activities: ["Create structured mentorship pairings across generations","Operate intergenerational living and working spaces","Design shared projects that require multi-generational collaboration","Preserve and transmit community stories and institutional memory through elders"] }
      ], kpis: ["Purpose alignment score","Creative participation rate","Contribution match satisfaction"] },
      { id: "15.3", label: "Social Connection Infrastructure", purpose: "Community spaces, interest-based groups, mentorship, isolation monitoring, shared experiences.", processes: [
        { id: "15.3.1", label: "Design and operate community gathering spaces", activities: ["Maintain network of community centers, parks, and 'third places'","Design spaces for different interaction modes (quiet, active, collaborative)","Ensure geographic equity in space access","Operate digital community platforms for remote connection"] },
        { id: "15.3.2", label: "Facilitate interest-based groups and communities", activities: ["Provide infrastructure (space, tools, funding) for self-organizing groups","Maintain group directory with easy discovery and joining","Offer group facilitation training for community leaders","Connect groups working on similar themes across communities"] },
        { id: "15.3.3", label: "Operate mentorship and peer connection programs", activities: ["Match mentors and mentees across experience domains","Train mentors in active listening and supportive guidance","Facilitate peer support circles for life transitions","Monitor relationship health and provide mediation if needed"] },
        { id: "15.3.4", label: "Monitor isolation risk and intervene proactively", activities: ["Develop ethical early warning indicators for social isolation","Train community connectors to notice and reach out","Provide low-barrier entry points for isolated individuals","Partner with health services for complex cases","Respect autonomy — offer connection, never mandate it"] },
        { id: "15.3.5", label: "Organize shared experiences (festivals, celebrations, projects)", activities: ["Calendar annual community celebrations and festivals","Organize community-wide collaborative projects (murals, gardens, builds)","Create rituals for community milestones (arrivals, transitions, losses)","Ensure cultural diversity in celebration design"] }
      ], kpis: ["Social connectedness index","Isolation rate","Group participation rate","Shared experience attendance"] },
      { id: "15.4", label: "Measure and Improve Flourishing", purpose: "PRIMARY institutional KPI. Collect, analyze, identify gaps, report transparently.", processes: [
        { id: "15.4.1", label: "Collect flourishing data across all dimensions", activities: ["Administer quarterly flourishing survey (validated instrument)","Collect passive wellbeing indicators (space usage, group participation, health data with consent)","Operate real-time flourishing pulse checks at community touchpoints","Ensure data collection itself does not burden community members"] },
        { id: "15.4.2", label: "Analyze flourishing gaps by demographic and region", activities: ["Disaggregate all data by protected attributes and geography","Identify statistical outliers and at-risk segments","Compare segments against floor targets","Conduct root cause analysis for persistent gaps"] },
        { id: "15.4.3", label: "Design and implement targeted improvement interventions", activities: ["Design interventions targeting identified gaps with community co-design","Implement with measurable success criteria and timeline","Monitor intervention effectiveness with control comparisons","Scale successful interventions and sunset ineffective ones"] },
        { id: "15.4.4", label: "Report flourishing metrics to community transparently", activities: ["Publish quarterly Flourishing Report as primary institutional output","Present data in accessible visual formats with plain-language narrative","Host community forums to discuss findings and priorities","Make raw (anonymized) data available for community researchers"] },
        { id: "15.4.5", label: "Feed flourishing data into institutional strategy", activities: ["Present flourishing findings at every strategy review","Use flourishing trends to inform resource reallocation","Require flourishing impact projection for all major decisions","Track correlation between institutional actions and flourishing outcomes"] }
      ], kpis: ["Flourishing index (composite)","Purpose alignment score","Social connectedness index","Creative participation rate","Isolation rate","Life satisfaction","Meaning and belonging","Intergenerational engagement"] }
    ]
  },
  {
    id: "16.0", domain: "ple", label: "Participatory Democracy", icon: "⚖", color: "#8b5cf6",
    origin: "NONE — New to PLE-GPS",
    delta: "PLE institutions derive legitimacy from participatory governance. The mechanisms of collective decision-making are not informal culture — they are processes that must be designed, operated, measured, and improved with the same rigor as any other function.",
    groups: [
      { id: "16.1", label: "Establish Democratic Governance Framework", purpose: "Constitutional structure, decision mechanisms, decision rights, representation standards.", processes: [
        { id: "16.1.1", label: "Draft and ratify institutional constitution", activities: ["Convene constitutional convention with representative participation","Draft founding document with community rights, decision processes, and amendment procedures","Conduct public comment period with multilingual access","Ratify through supermajority community vote"] },
        { id: "16.1.2", label: "Define decision-making mechanisms (consensus, vote, delegate)", activities: ["Map all institutional decisions by type and impact level","Assign appropriate mechanism per decision type (consensus for values, vote for allocation, delegate for operational)","Design fallback mechanisms when primary process fails","Document and publish decision process directory"] },
        { id: "16.1.3", label: "Establish representation standards and quotas", activities: ["Define protected attribute categories for representation tracking","Set minimum representation thresholds for all governance bodies","Design rotation and term limits to prevent entrenchment","Create pathways for underrepresented groups to build governance capacity"] },
        { id: "16.1.4", label: "Define constitutional amendment process", activities: ["Require supermajority for constitutional changes","Mandate public deliberation period before amendment votes","Establish judicial review mechanism for constitutional questions","Protect foundational rights from amendment (entrenchment clauses)"] }
      ], kpis: ["Constitutional ratification","Representation standard compliance"] },
      { id: "16.2", label: "Operate Democratic Processes", purpose: "Elections, assemblies, referenda, delegated authority, governance cadence.", processes: [
        { id: "16.2.1", label: "Manage elections and leadership selection", activities: ["Design election systems resistant to capture (ranked choice, sortition options)","Operate secure, transparent, verifiable voting infrastructure","Ensure universal ballot access (physical, digital, assisted)","Publish results with full transparency and audit trail"] },
        { id: "16.2.2", label: "Operate community assemblies and town halls", activities: ["Schedule regular assemblies with sufficient advance notice","Provide childcare, transportation, and accessibility accommodations","Use structured deliberation methods (citizens' assembly, fishbowl, World Café)","Record and publish proceedings with action item tracking"] },
        { id: "16.2.3", label: "Facilitate referenda on major decisions", activities: ["Define criteria that trigger mandatory referendum (budget threshold, constitutional change, new AI deployment)","Design ballot language in plain, accessible terms","Provide balanced information packets for and against each proposition","Set participation quorum requirements for binding results"] },
        { id: "16.2.4", label: "Manage delegated authority and recall mechanisms", activities: ["Define clear scope and duration for all delegated authority","Require regular reporting from delegates to community","Operate recall petition and vote process with reasonable thresholds","Ensure smooth transition when delegates are recalled or terms end"] },
        { id: "16.2.5", label: "Maintain governance calendar and decision cadence", activities: ["Publish annual governance calendar with all scheduled decisions","Maintain decision backlog with prioritization","Ensure sufficient time between proposal and decision for deliberation","Track decision-making velocity and identify bottlenecks"] }
      ], kpis: ["Election participation rate","Assembly attendance","Referenda frequency","Decision cadence adherence"] },
      { id: "16.3", label: "Ensure Democratic Health", purpose: "Participation monitoring, capture detection, civic education, dispute resolution.", processes: [
        { id: "16.3.1", label: "Monitor participation rates and representation equity", activities: ["Track participation by demographic, geography, and engagement level","Identify declining participation trends early","Analyze barriers to participation through community research","Publish participation equity reports quarterly"] },
        { id: "16.3.2", label: "Detect and respond to institutional capture risks", activities: ["Define capture indicators (concentration of influence, revolving doors, information asymmetry)","Monitor governance body composition and voting patterns for capture signals","Operate anonymous tip line for capture concerns","Investigate and remediate confirmed capture with transparency"] },
        { id: "16.3.3", label: "Operate civic education and democratic literacy programs", activities: ["Offer governance literacy curriculum for all community members","Train community members in deliberation, facilitation, and conflict resolution","Simulate governance processes for practice and learning","Integrate civic education into youth development programs"] },
        { id: "16.3.4", label: "Manage democratic dispute resolution and appeals", activities: ["Operate multi-tier dispute resolution (mediation → arbitration → adjudication)","Ensure neutral, trained mediators and arbitrators","Provide appeals process for all governance decisions","Publish anonymized case law for institutional learning"] },
        { id: "16.3.5", label: "Assess and report democratic health metrics", activities: ["Administer annual democratic health survey","Calculate composite democratic health index","Compare against peer institutions and historical baseline","Present findings to community with proposed improvements"] }
      ], kpis: ["Participation rate","Representation equity","Decision quality score","Governance satisfaction","Proposal-to-decision time","Democratic literacy","Capture detection rate"] }
    ]
  }
];

export const VALUE_LOOPS = [
  { name: "Community Intelligence", color: "#6366f1", steps: ["Community interaction (6.3)","Community insights (3.1)","Public goods design (2.2)","Better services (5.4)","Better outcomes (15.4)","Higher satisfaction (6.4)"] },
  { name: "Governance Performance", color: "#f59e0b", steps: ["Strategy set (1.2) via democracy (16.0)","Initiatives launched (1.3)","Performance measured (13.7)","Flourishing measured (15.4)","Strategy refresh (1.2)","Democratic validation (16.0)"] },
  { name: "Human Development", color: "#10b981", steps: ["Contributors invited (7.2)","Development supported (7.3)","Outcomes produced (13.7)","Recognition given (7.4)","Flourishing increases (15.0)","Deeper engagement"] },
  { name: "AI Governance", color: "#ef4444", steps: ["AI systems deployed (14.2)","Decisions monitored (14.3)","Bias/harm detected","Remediation executed (14.3.3)","Framework updated (14.1)","Improved systems deployed"] },
  { name: "Equity Improvement", color: "#ec4899", steps: ["Equity metrics collected (11.3)","Disparities identified","Service design adjusted (2.2)","Barriers removed (3.4)","Distribution adjusted (4/5)","Equity re-measured (11.3)"] },
  { name: "Democratic Legitimacy", color: "#8b5cf6", steps: ["Community deliberates (16.2)","Strategy reflects mandate (1.2)","Institution executes (all ops)","Outcomes reported (13.7)","Community evaluates (16.3)","Next cycle informed"] }
];

export const MATURITY_LEVELS = [
  { level: 1, name: "Founding", desc: "Processes informal, founder-dependent, ad hoc", char: "Vision-driven heroics" },
  { level: 2, name: "Structured", desc: "Processes documented, governance established", char: "Repeatability and fairness" },
  { level: 3, name: "Equitable", desc: "Designed for equity, measured, community-aligned", char: "Systematic equity" },
  { level: 4, name: "Adaptive", desc: "Data-driven, AI-augmented, continuously improving", char: "Predictable outcomes" },
  { level: 5, name: "Flourishing", desc: "Self-improving, community-optimizing, AI-native", char: "Institutional intelligence" }
];

export const MATURITY_TARGETS = {
  "1.0": 3, "2.0": 3.5, "3.0": 3.5, "4.0": 4.5, "5.0": 3.5, "6.0": 4.5,
  "7.0": 3, "8.0": 4, "9.0": 4.5, "10.0": 3.5, "11.0": 4, "12.0": 3,
  "13.0": 3.5, "14.0": 4.5, "15.0": 3, "16.0": 3.5
};

export const MATURITY_DIMENSIONS = [
  { key: "design", label: "Design", desc: "How well is the process designed?",
    rubric: [
      "Undocumented; steps vary by person",
      "Documented in basic SOP/workflow",
      "Designed to best practice; equity-reviewed",
      "Designed using data and simulation",
      "Continuously redesigned from performance feedback"
    ]},
  { key: "performers", label: "Performers", desc: "Who executes, and how capable are they?",
    rubric: [
      "Staff improvise; no standard knowledge required",
      "Staff have basic training; can follow SOP",
      "Specialized and certified; performance measured",
      "Use decision support tools; output predictable",
      "AI augments staff; automation handles routine"
    ]},
  { key: "owner", label: "Owner", desc: "Is there clear accountability?",
    rubric: [
      "No process steward exists",
      "Steward identified but role is informal",
      "Steward has formal authority and accountability",
      "Steward manages with KPIs and governance cadence",
      "Steward drives continuous improvement using AI insights"
    ]},
  { key: "infrastructure", label: "Infrastructure", desc: "What systems and tools support it?",
    rubric: [
      "No system support; fully manual",
      "Basic tools (spreadsheets, email, docs)",
      "Dedicated systems deployed (purpose-built)",
      "Systems integrated; data flows automatically",
      "AI/ML embedded; predictive and prescriptive"
    ]},
  { key: "metrics", label: "Metrics", desc: "How is performance measured?",
    rubric: [
      "No metrics tracked",
      "Basic output metrics tracked periodically",
      "Balanced KPIs with targets; reviewed regularly",
      "Predictive metrics and leading indicators used",
      "Real-time metrics feed AI that auto-optimizes"
    ]}
];

export const IMPROVEMENT_ROADMAP = {
  "1→2": { label: "Founding → Structured", priority: "Document and standardize",
    actions: ["Map the current as-is process","Write the basic SOP","Assign a process steward (even informal)","Train performers on documented process","Start tracking one basic output metric"] },
  "2→3": { label: "Structured → Equitable", priority: "Optimize and align for equity",
    actions: ["Benchmark against best practice","Redesign to eliminate waste and bias","Formalize steward role with authority","Deploy dedicated tools/systems","Implement balanced KPI scorecard with equity metrics","Establish regular review cadence with community input"] },
  "3→4": { label: "Equitable → Adaptive", priority: "Instrument and predict",
    actions: ["Instrument with real-time data collection","Build predictive models for key outputs","Integrate with adjacent processes (fix handoff gaps)","Automate routine decisions with rules engines","Implement continuous monitoring with alerting","Apply statistical process control where applicable"] },
  "4→5": { label: "Adaptive → Flourishing", priority: "Automate and learn",
    actions: ["Embed AI/ML into process execution","Automate all routine steps end-to-end","Build feedback loops for continuous self-improvement","Use AI to identify improvement opportunities proactively","Shift human role to exception handling and strategy","Create self-healing process design"] }
};

export const MATURITY_BAND_COLORS = {
  0: { bg: "rgba(120,113,108,0.08)", text: "#57534e", label: "Not scored" },
  1: { bg: "rgba(239,68,68,0.12)", text: "#ef4444", label: "Ad Hoc" },
  2: { bg: "rgba(245,158,11,0.12)", text: "#f59e0b", label: "Structured" },
  3: { bg: "rgba(16,185,129,0.12)", text: "#10b981", label: "Equitable" },
  4: { bg: "rgba(99,102,241,0.12)", text: "#6366f1", label: "Adaptive" },
  5: { bg: "rgba(139,92,246,0.12)", text: "#8b5cf6", label: "Flourishing" }
};

export const TRANSLATION = [
  ["Revenue", "Resource inflows (automated production, taxes, commons yield)"],
  ["Customers", "Community members, citizens, participants"],
  ["Employees", "Contributors, stewards, participants"],
  ["Products", "Public goods, shared services, commons"],
  ["Market share", "Community coverage, access equity"],
  ["Shareholders", "All community members (stakeholders)"],
  ["Competitive advantage", "Institutional effectiveness"],
  ["HR / Human Resources", "Human Development"],
  ["Sales", "Access facilitation, enrollment, matching"],
  ["ROI", "Impact-to-resource ratio"],
];

export const INTEGRATION_FLOWS = [
  // ═══ 1.0 STRATEGY outbound ═══
  { from: "1.2", to: "2.1", label: "Strategy cascade to public goods", type: "governance" },
  { from: "1.2", to: "3.2", label: "Engagement targets and priorities", type: "governance" },
  { from: "1.2", to: "7.1", label: "Workforce and contributor requirements", type: "governance" },
  { from: "1.2", to: "8.1", label: "Technology investment priorities", type: "governance" },
  { from: "1.2", to: "9.1", label: "Resource allocation targets", type: "governance" },
  { from: "1.2", to: "10.1", label: "Commons investment priorities", type: "governance" },
  { from: "1.2", to: "13.4", label: "Transformation roadmap", type: "governance" },
  { from: "1.2", to: "14.1", label: "AI governance alignment", type: "governance" },
  { from: "1.2", to: "15.1", label: "Flourishing targets", type: "governance" },
  { from: "1.4", to: "12.1", label: "Partnership requirements from value model", type: "information" },

  // ═══ 2.0 PUBLIC GOODS outbound ═══
  { from: "2.3", to: "4.1", label: "Resource requirements for physical goods", type: "trigger" },
  { from: "2.3", to: "5.1", label: "Service specs to delivery governance", type: "trigger" },
  { from: "2.3", to: "8.2", label: "Technology requirements for new goods", type: "information" },
  { from: "2.4", to: "3.3", label: "Deployment needs awareness campaigns", type: "trigger" },
  { from: "2.2", to: "15.1", label: "Goods designed for flourishing impact", type: "information" },
  { from: "2.6", to: "13.7", label: "Service performance feeds measurement", type: "information" },

  // ═══ 3.0 ACCESS & ENGAGEMENT outbound ═══
  { from: "3.1", to: "1.1", label: "Community intelligence to vision", type: "feedback" },
  { from: "3.1", to: "2.2", label: "Needs drive public goods design", type: "information" },
  { from: "3.4", to: "5.2", label: "Enrollment triggers service demand", type: "trigger" },
  { from: "3.4", to: "7.2", label: "Contributor referrals", type: "trigger" },
  { from: "3.4", to: "9.2", label: "Access triggers resource inflow", type: "trigger" },

  // ═══ 4.0 PHYSICAL RESOURCES outbound ═══
  { from: "4.4", to: "6.3", label: "Delivery issues to community support", type: "trigger" },
  { from: "4.4", to: "9.3", label: "Cost and inventory to accounting", type: "information" },
  { from: "4.4", to: "11.3", label: "Distribution equity data", type: "information" },
  { from: "4.2", to: "12.1", label: "Supply chain partnerships", type: "trigger" },
  { from: "4.1", to: "10.3", label: "Logistics uses commons infrastructure", type: "information" },

  // ═══ 5.0 SERVICES outbound ═══
  { from: "5.4", to: "6.3", label: "Service issues to support", type: "trigger" },
  { from: "5.4", to: "9.2", label: "Service milestones trigger accounting", type: "trigger" },
  { from: "5.4", to: "15.4", label: "Service outcomes feed flourishing", type: "information" },
  { from: "5.3", to: "12.1", label: "Partner coordination", type: "trigger" },

  // ═══ 6.0 SUPPORT outbound ═══
  { from: "6.3", to: "2.2", label: "Feedback loop to goods design", type: "feedback" },
  { from: "6.3", to: "2.6", label: "Retention signals to lifecycle mgmt", type: "feedback" },
  { from: "6.3", to: "11.3", label: "Complaint patterns reveal inequity", type: "information" },
  { from: "6.4", to: "1.1", label: "Support insights inform vision", type: "feedback" },
  { from: "6.4", to: "3.1", label: "Community intelligence from support", type: "feedback" },

  // ═══ 7.0 HUMAN DEVELOPMENT outbound ═══
  { from: "7.2", to: "8.5", label: "New contributors need access provisioning", type: "trigger" },
  { from: "7.2", to: "9.5", label: "New contributors trigger stipend enrollment", type: "trigger" },
  { from: "7.3", to: "13.5", label: "Contributor learning feeds knowledge base", type: "information" },
  { from: "7.1", to: "15.2", label: "Development strategy aligns with purpose programs", type: "information" },
  { from: "7.4", to: "15.4", label: "Engagement data feeds flourishing measurement", type: "information" },

  // ═══ 8.0 TECHNOLOGY outbound ═══
  { from: "8.8", to: "11.3", label: "Data platform enables equity monitoring", type: "resource" },
  { from: "8.1", to: "14.1", label: "Technology platform enables AI governance", type: "resource" },
  { from: "8.8", to: "13.7", label: "Analytics enables performance measurement", type: "resource" },
  { from: "8.4", to: "13.1", label: "Architecture guides process design", type: "information" },
  { from: "8.5", to: "ALL", label: "Technology support to all categories", type: "resource" },

  // ═══ 9.0 RESOURCES outbound ═══
  { from: "9.1", to: "ALL", label: "Budget governance to all categories", type: "governance" },
  { from: "9.5", to: "7.4", label: "Stipend processing sustains engagement", type: "trigger" },
  { from: "9.8", to: "12.2", label: "Financial transparency to accountability", type: "information" },

  // ═══ 10.0 COMMONS outbound ═══
  { from: "10.3", to: "15.3", label: "Community spaces enable social connection", type: "resource" },
  { from: "10.1", to: "9.1", label: "Asset costs to resource planning", type: "information" },
  { from: "10.3", to: "11.4", label: "Infrastructure health to resilience", type: "information" },
  { from: "10.2", to: "4.1", label: "Facility capacity to logistics planning", type: "information" },

  // ═══ 11.0 INTEGRITY & EQUITY outbound ═══
  { from: "11.1", to: "1.2", label: "Risk intelligence informs strategy", type: "feedback" },
  { from: "11.3", to: "2.2", label: "Equity gaps drive goods redesign", type: "feedback" },
  { from: "11.3", to: "3.4", label: "Barrier identification triggers removal", type: "trigger" },
  { from: "11.2", to: "16.1", label: "Ethics review informs constitutional scope", type: "governance" },
  { from: "11.4", to: "8.3", label: "Resilience requirements drive infrastructure", type: "trigger" },

  // ═══ 12.0 EXTERNAL RELATIONS outbound ═══
  { from: "12.1", to: "1.1", label: "External landscape intelligence to vision", type: "information" },
  { from: "12.2", to: "16.2", label: "Accountability reports to democratic process", type: "trigger" },
  { from: "12.3", to: "3.2", label: "Public communication informs engagement", type: "information" },
  { from: "12.5", to: "10.3", label: "Environmental stewardship of commons", type: "trigger" },

  // ═══ 13.0 CAPABILITIES outbound ═══
  { from: "13.7", to: "1.3", label: "Performance signals to strategy initiatives", type: "feedback" },
  { from: "13.7", to: "13.6", label: "Performance gaps target CI efforts", type: "feedback" },
  { from: "13.5", to: "7.3", label: "Knowledge base feeds contributor development", type: "resource" },
  { from: "13.6", to: "ALL", label: "Continuous improvement to all categories", type: "feedback" },

  // ═══ 14.0 AI GOVERNANCE outbound ═══
  { from: "14.3", to: "14.1", label: "Monitoring findings update governance", type: "feedback" },
  { from: "14.4", to: "7.1", label: "AI allocation shapes human development needs", type: "information" },
  { from: "14.2", to: "8.2", label: "Agent requirements to technology portfolio", type: "trigger" },
  { from: "14.5", to: "11.1", label: "Safety incidents to risk management", type: "trigger" },

  // ═══ 15.0 FLOURISHING outbound ═══
  { from: "15.4", to: "1.1", label: "Flourishing data informs vision", type: "feedback" },
  { from: "15.4", to: "13.7", label: "Primary institutional metric", type: "information" },
  { from: "15.2", to: "7.3", label: "Purpose programs feed contributor growth", type: "resource" },
  { from: "15.3", to: "10.1", label: "Space needs inform commons strategy", type: "information" },

  // ═══ 16.0 DEMOCRACY outbound ═══
  { from: "16.0", to: "1.2", label: "Democratic mandate to strategy", type: "governance" },
  { from: "16.1", to: "11.2", label: "Constitutional framework defines compliance scope", type: "governance" },
  { from: "16.2", to: "12.2", label: "Democratic process generates accountability", type: "trigger" },
  { from: "16.3", to: "16.2", label: "Health assessment improves processes", type: "feedback" },
];

export const FLOW_TYPES = {
  governance: { color: "#f59e0b", label: "Governance" },
  trigger: { color: "#10b981", label: "Trigger" },
  information: { color: "#6366f1", label: "Information" },
  feedback: { color: "#ec4899", label: "Feedback" },
  resource: { color: "#8b5cf6", label: "Resource" }
};

// ═══════════════════════════════════════
// INSTITUTIONAL TEMPLATES
// ═══════════════════════════════════════
// Pre-scored maturity profiles for common institution types.
// Each template represents a realistic starting point.

function makeScores(catScores) {
  const out = {};
  Object.entries(catScores).forEach(([catId, dims]) => {
    ["design","performers","owner","infrastructure","metrics"].forEach((d, i) => {
      out[`${catId}|${d}`] = Array.isArray(dims) ? dims[i] : dims;
    });
  });
  return out;
}

export const INSTITUTIONAL_TEMPLATES = [
  {
    id: "municipal-transition",
    name: "Municipal Government (PLE Transition)",
    icon: "🏛",
    desc: "A city or county government beginning to restructure around post-labor principles. Strong existing processes for resource delivery and compliance, but nascent flourishing infrastructure and minimal AI governance.",
    color: "#6366f1",
    focus: ["1.0","4.0","9.0","11.0"],
    strengths: "Established bureaucratic processes, legal infrastructure, resource management",
    gaps: "AI governance, flourishing measurement, participatory democracy beyond elections",
    scores: makeScores({
      "1.0":[3,2,3,2,2], "2.0":[2,2,2,2,1], "3.0":[3,2,3,3,2],
      "4.0":[4,3,4,4,3], "5.0":[3,3,3,3,2], "6.0":[3,2,3,2,2],
      "7.0":[2,2,2,2,1], "8.0":[3,2,3,3,2], "9.0":[4,3,4,4,4],
      "10.0":[3,3,3,3,2], "11.0":[3,3,3,2,2], "12.0":[3,2,3,2,2],
      "13.0":[2,2,2,2,2], "14.0":[1,1,1,1,1], "15.0":[1,1,1,1,1],
      "16.0":[2,2,2,2,2]
    })
  },
  {
    id: "cooperative",
    name: "Worker/Community Cooperative",
    icon: "🤝",
    desc: "A democratically-governed cooperative transitioning to post-labor operations. Strong democratic culture and community engagement, but limited technology infrastructure and formal process documentation.",
    color: "#10b981",
    focus: ["3.0","7.0","15.0","16.0"],
    strengths: "Democratic governance culture, community trust, contributor engagement",
    gaps: "Technology infrastructure, formal process documentation, scalable AI governance",
    scores: makeScores({
      "1.0":[2,2,3,1,1], "2.0":[2,2,2,1,1], "3.0":[3,3,3,2,2],
      "4.0":[2,2,2,1,1], "5.0":[3,3,2,2,1], "6.0":[3,3,3,2,2],
      "7.0":[3,3,3,2,2], "8.0":[1,1,1,1,1], "9.0":[2,2,2,2,2],
      "10.0":[2,2,2,1,1], "11.0":[2,2,2,1,1], "12.0":[2,3,2,1,1],
      "13.0":[1,1,1,1,1], "14.0":[1,1,1,1,1], "15.0":[2,2,2,1,1],
      "16.0":[3,3,3,2,2]
    })
  },
  {
    id: "digital-commons",
    name: "Digital Commons / Platform Cooperative",
    icon: "🌐",
    desc: "A digitally-native organization managing shared digital resources. Strong technology and data practices, but weak physical infrastructure and early-stage democratic governance.",
    color: "#ec4899",
    focus: ["2.0","8.0","14.0","13.0"],
    strengths: "Technology infrastructure, data practices, distributed contributor model",
    gaps: "Physical resource delivery, commons management, formal democratic processes",
    scores: makeScores({
      "1.0":[3,2,2,2,2], "2.0":[3,3,3,3,2], "3.0":[3,3,2,3,2],
      "4.0":[1,1,1,1,1], "5.0":[3,3,2,3,2], "6.0":[2,2,2,2,1],
      "7.0":[2,2,2,2,1], "8.0":[4,3,3,4,3], "9.0":[2,2,2,2,2],
      "10.0":[1,1,1,1,1], "11.0":[2,2,2,2,2], "12.0":[2,2,1,2,1],
      "13.0":[3,2,2,3,2], "14.0":[2,2,2,2,1], "15.0":[1,1,1,1,1],
      "16.0":[2,2,2,2,1]
    })
  },
  {
    id: "ubi-administration",
    name: "UBI Administration Body",
    icon: "💰",
    desc: "An institution specifically created to administer universal basic income. Strong resource management and access facilitation, but building other governance functions from scratch.",
    color: "#f59e0b",
    focus: ["3.0","4.0","9.0","11.0"],
    strengths: "Resource distribution, enrollment systems, equity monitoring",
    gaps: "Broad governance strategy, commons management, democratic depth beyond UBI decisions",
    scores: makeScores({
      "1.0":[2,2,2,2,1], "2.0":[2,1,1,1,1], "3.0":[4,3,3,4,3],
      "4.0":[3,3,3,3,2], "5.0":[2,2,2,2,1], "6.0":[3,3,3,3,2],
      "7.0":[1,1,1,1,1], "8.0":[3,2,2,3,2], "9.0":[4,4,4,4,3],
      "10.0":[1,1,1,1,1], "11.0":[3,3,3,3,3], "12.0":[2,2,2,1,1],
      "13.0":[2,2,2,2,1], "14.0":[2,1,1,2,1], "15.0":[1,1,1,1,1],
      "16.0":[2,2,2,1,1]
    })
  },
  {
    id: "greenfield",
    name: "Greenfield PLE Institution",
    icon: "🌱",
    desc: "A brand-new institution designed from scratch with post-labor principles. Everything at Level 1 — pure potential with no legacy constraints. The ideal starting point for PLE-native design.",
    color: "#8b5cf6",
    focus: ["1.0","14.0","15.0","16.0"],
    strengths: "No legacy constraints, can design PLE-native from day one",
    gaps: "Everything — but that's the point. Start with vision, democracy, and flourishing.",
    scores: makeScores({
      "1.0":[1,1,1,1,1], "2.0":[1,1,1,1,1], "3.0":[1,1,1,1,1],
      "4.0":[1,1,1,1,1], "5.0":[1,1,1,1,1], "6.0":[1,1,1,1,1],
      "7.0":[1,1,1,1,1], "8.0":[1,1,1,1,1], "9.0":[1,1,1,1,1],
      "10.0":[1,1,1,1,1], "11.0":[1,1,1,1,1], "12.0":[1,1,1,1,1],
      "13.0":[1,1,1,1,1], "14.0":[1,1,1,1,1], "15.0":[1,1,1,1,1],
      "16.0":[1,1,1,1,1]
    })
  }
];

// ═══════════════════════════════════════
// PROCESS PLAYBOOKS (PLE-Specific)
// ═══════════════════════════════════════
// Implementation guides for the novel PLE categories.

export const PLAYBOOKS = {
  "14.0": {
    title: "Implementing Algorithmic Governance",
    timeframe: "6–12 months to Level 2, 18–24 months to Level 3",
    prerequisites: ["Category 8.0 at Level 2+", "Category 11.0 at Level 2+", "Category 16.0 at Level 2+"],
    phases: [
      { name: "Foundation (Months 1–3)", actions: [
        "Inventory all AI/algorithmic systems currently in use or planned",
        "Classify each by decision authority: advisory, semi-autonomous, fully autonomous",
        "Draft AI governance charter with community input sessions",
        "Establish interim AI oversight committee (5–7 members, majority community)",
        "Define 'always human' decision categories (rights, irreversible, contested)"
      ]},
      { name: "Structure (Months 4–6)", actions: [
        "Deploy bias monitoring on highest-impact AI system first",
        "Establish AI incident response protocol and train first responders",
        "Publish first AI Transparency Report to community",
        "Create AI agent lifecycle gates: staging → shadow → monitored → production",
        "Define kill switch protocols and conduct first drill"
      ]},
      { name: "Operationalize (Months 7–12)", actions: [
        "Expand bias monitoring to all AI systems",
        "Contract first external algorithmic audit",
        "Launch community AI literacy program (understand, not operate)",
        "Establish quarterly AI governance review with community observers",
        "Begin measuring human-AI work allocation balance"
      ]}
    ],
    failureModes: [
      "Governance theater: oversight body exists but has no real authority",
      "Speed trap: deploying AI faster than governance can evaluate",
      "Expert capture: technical staff dominate governance body",
      "Transparency gap: reports published but not in accessible language"
    ],
    firstThreeActions: [
      "Inventory all AI systems (even spreadsheet macros and recommendation engines)",
      "Appoint an interim AI governance lead with community accountability",
      "Draft a one-page AI principles statement and get community feedback"
    ]
  },
  "15.0": {
    title: "Building Human Flourishing Infrastructure",
    timeframe: "3–6 months for measurement foundation, 12–18 months for program portfolio",
    prerequisites: ["Category 1.0 at Level 2+", "Category 7.0 at Level 2+", "Community trust baseline established"],
    phases: [
      { name: "Measure (Months 1–3)", actions: [
        "Select or design flourishing measurement instrument (adapt PERMA+, WHO-5, or similar)",
        "Define the 8 institutional dimensions and validate with community focus groups",
        "Conduct baseline flourishing survey across all community segments",
        "Disaggregate data by demographics to identify floor violations",
        "Publish baseline Flourishing Report — the institution's first primary output metric"
      ]},
      { name: "Design (Months 4–8)", actions: [
        "Map existing programs to flourishing dimensions they serve",
        "Identify dimension gaps (typically: purpose, creative expression, intergenerational connection)",
        "Co-design first purpose-exploration program with community members",
        "Launch one social connection initiative per identified isolation risk group",
        "Open or designate first community gathering space optimized for connection"
      ]},
      { name: "Scale (Months 9–18)", actions: [
        "Establish purpose-discovery cohort program (8-week cycles)",
        "Deploy AI-assisted contribution matching platform",
        "Open maker spaces / creative labs in underserved areas",
        "Launch community university with first 10 learning circles",
        "Integrate flourishing metrics into ALL institutional decision-making"
      ]}
    ],
    failureModes: [
      "Measurement without action: collecting data but not changing programs",
      "One-size-fits-all: same flourishing programs for every demographic",
      "Forced participation: mandating 'flourishing activities' (violates autonomy dimension)",
      "Purpose prescription: telling people what their purpose should be"
    ],
    firstThreeActions: [
      "Run a 20-question flourishing survey with at least 30% community response",
      "Publish the results publicly with honest analysis of gaps",
      "Ask the community: 'What would help you thrive?' — then listen"
    ]
  },
  "16.0": {
    title: "Establishing Participatory Democracy",
    timeframe: "3–6 months for constitutional foundation, ongoing deepening",
    prerequisites: ["Community with defined membership/boundaries", "Willingness to share power genuinely", "Basic communication infrastructure"],
    phases: [
      { name: "Convene (Months 1–2)", actions: [
        "Identify and invite constitutional convention delegates (representative of full community)",
        "Establish convention ground rules: equal voice, structured deliberation, no predetermined outcomes",
        "Conduct community listening sessions to gather governance priorities",
        "Draft constitutional principles (not full constitution) with community input",
        "Define minimum viable decision-making process for immediate use"
      ]},
      { name: "Constitute (Months 3–4)", actions: [
        "Draft full institutional constitution based on principles and feedback",
        "Define decision types and matching mechanisms (consensus/vote/delegate)",
        "Establish representation standards and initial governance body composition",
        "Define amendment process (supermajority + deliberation period)",
        "Conduct ratification vote with >60% community participation target"
      ]},
      { name: "Operate (Months 5–12)", actions: [
        "Hold first community assembly under new constitution",
        "Elect/select first governance body per constitutional process",
        "Establish governance calendar with regular decision cadence",
        "Launch civic education program (governance literacy for all members)",
        "Deploy capture detection indicators and first democratic health assessment"
      ]}
    ],
    failureModes: [
      "Founder lock-in: constitution reflects founders' views, not community's",
      "Participation fatigue: too many decisions requiring full community vote",
      "Capture by articulate minority: those who speak loudest set agenda",
      "Democracy deficit: governance exists on paper but decisions made informally"
    ],
    firstThreeActions: [
      "Define who is a member of this community (the demos in democracy)",
      "Hold one open community assembly with structured facilitation",
      "Ask: 'What decisions should require everyone's input?' — build from there"
    ]
  }
};
