import { WORKING_GROUPS } from '../data/framework.js'
import './WorkingGroupsView.css'

const STATUS_META = {
  active:   { label: 'Active',   pillClass: 'pill-green',  desc: 'Meets regularly, actively producing work' },
  forming:  { label: 'Forming',  pillClass: 'pill-amber',  desc: 'Needs a lead and initial participants' },
  open:     { label: 'Open',     pillClass: 'pill-purple', desc: 'Open for participants — leadership needed' },
}

const WG_DETAIL = {
  theory: {
    lead: 'TBD',
    cadence: 'Bi-weekly',
    priorities: [
      'Complete PLE Foundation Document v1.0',
      'Develop Labor Displacement Projections chapter',
      'Map the Contributory Economy model',
      'Literature synthesis across UBI research',
    ],
    joinLink: 'https://github.com/sillinous/ple-gps/discussions',
  },
  technology: {
    lead: 'TBD',
    cadence: 'Bi-weekly',
    priorities: [
      'AI governance framework for post-labor transition',
      'Economic scenario modeling calculator',
      'Survey of automation impact research',
      'Systems architecture mapped to PLE-GPS 16 categories',
    ],
    joinLink: 'https://github.com/sillinous/ple-gps/discussions',
  },
  policy: {
    lead: 'Seeking',
    cadence: 'TBD — forming',
    priorities: [
      'Legislative landscape mapping (global)',
      'UBI policy case study library',
      'Institutional design frameworks',
    ],
    joinLink: 'https://github.com/sillinous/ple-gps/issues/new?labels=working-group',
  },
  community: {
    lead: 'Seeking',
    cadence: 'TBD — forming',
    priorities: [
      'Local resilience network documentation',
      'Cooperative economics case studies',
      'Mutual aid model taxonomy',
    ],
    joinLink: 'https://github.com/sillinous/ple-gps/issues/new?labels=working-group',
  },
  comms: {
    lead: 'Seeking',
    cadence: 'TBD — open',
    priorities: [
      'Public narrative strategy for PLE concepts',
      'Educational curriculum outline',
      'Translation program coordination',
    ],
    joinLink: 'https://github.com/sillinous/ple-gps/issues/new?labels=working-group',
  },
  research: {
    lead: 'Seeking',
    cadence: 'TBD — open',
    priorities: [
      'Annotated bibliography of PLE-relevant research',
      'Citation standards and source quality guidelines',
      'Empirical evidence base for framework claims',
    ],
    joinLink: 'https://github.com/sillinous/ple-gps/issues/new?labels=working-group',
  },
}

export default function WorkingGroupsView() {
  const active  = WORKING_GROUPS.filter(g => g.status === 'active')
  const forming = WORKING_GROUPS.filter(g => g.status === 'forming')
  const open    = WORKING_GROUPS.filter(g => g.status === 'open')

  return (
    <div className="wg-view fade-up">
      <div className="wg-hero">
        <div className="wg-eyebrow">Community Structure</div>
        <h1 className="wg-title">Working Groups</h1>
        <p className="wg-sub">
          Working groups are the core unit of sustained contribution. Each owns a domain of the
          PLE framework and operates with significant autonomy. Find your domain and get involved.
        </p>
      </div>

      {/* How WGs work */}
      <div className="wg-norms">
        {WG_NORMS.map((n, i) => (
          <div key={i} className="wg-norm">
            <span className="wg-norm-icon">{n.icon}</span>
            <span className="wg-norm-text">{n.text}</span>
          </div>
        ))}
      </div>

      {/* Active */}
      <WGSection title="Active" groups={active} />
      {/* Forming */}
      <WGSection title="Forming — Needs Leadership" groups={forming} />
      {/* Open */}
      <WGSection title="Open — Seeking Participants" groups={open} />

      {/* Propose a new WG */}
      <div className="wg-propose">
        <div className="wg-propose-icon">+</div>
        <div>
          <div className="wg-propose-title">Propose a New Working Group</div>
          <p className="wg-propose-body">
            Have expertise in a domain not covered here? Working groups can be formed by
            anyone with a clear scope, 3+ interested participants, and a proposed lead.
          </p>
          <a
            className="wg-propose-btn"
            href="https://github.com/sillinous/ple-gps/issues/new?labels=working-group%2Cgovernance&template=working_group.yml"
            target="_blank" rel="noreferrer"
          >
            Open a Working Group Proposal
          </a>
        </div>
      </div>
    </div>
  )
}

function WGSection({ title, groups }) {
  if (!groups.length) return null
  return (
    <section className="wg-section">
      <h2 className="wg-section-title">{title}</h2>
      <div className="wg-cards">
        {groups.map((g, i) => {
          const meta   = STATUS_META[g.status]
          const detail = WG_DETAIL[g.id]
          return (
            <div key={g.id} className="wg-card" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="wg-card-header">
                <div className="wg-card-name">{g.name}</div>
                <span className={`pill ${meta.pillClass}`}>{meta.label}</span>
              </div>
              <p className="wg-card-desc">{g.description}</p>

              {detail.priorities.length > 0 && (
                <div className="wg-card-priorities">
                  <div className="wg-priorities-label">Current Priorities</div>
                  <ul className="wg-priority-list">
                    {detail.priorities.map((p, pi) => (
                      <li key={pi} className="wg-priority-item">
                        <span className="wg-priority-dot" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="wg-card-meta">
                <div className="wg-meta-item">
                  <span className="wg-meta-label">Lead</span>
                  <span className="wg-meta-val">{detail.lead}</span>
                </div>
                <div className="wg-meta-item">
                  <span className="wg-meta-label">Cadence</span>
                  <span className="wg-meta-val">{detail.cadence}</span>
                </div>
              </div>

              <a
                className="wg-join-btn"
                href={detail.joinLink}
                target="_blank" rel="noreferrer"
              >
                {g.status === 'active' ? 'Join this group →' : 'Express interest →'}
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const WG_NORMS = [
  { icon: '◎', text: 'Open attendance — anyone can observe meetings' },
  { icon: '◉', text: 'Public meeting notes committed to the repo' },
  { icon: '◈', text: 'Consensus decisions within each group\'s domain' },
  { icon: '◌', text: 'Cross-group coordination for overlapping work' },
]
