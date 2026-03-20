import { ROADMAP_PHASES, FRAMEWORK_META, CATEGORIES } from '../data/framework.js'
import './RoadmapView.css'

const PHASE_META = {
  active:  { label: 'In Progress', pillClass: 'pill-green' },
  planned: { label: 'Planned',     pillClass: 'pill-blue'  },
  future:  { label: 'Future',      pillClass: 'pill-purple'},
}

export default function RoadmapView() {
  const l4Remaining = FRAMEWORK_META.totalProcesses - FRAMEWORK_META.l4Processes
  const catsRemaining = 16 - FRAMEWORK_META.l4Categories

  return (
    <div className="rm-view fade-up">
      <div className="rm-hero">
        <div className="rm-eyebrow">Where We're Headed</div>
        <h1 className="rm-title">Roadmap</h1>
        <p className="rm-sub">
          The roadmap is a living document — updated as priorities shift and working groups
          advance their work. Want to influence what comes next?{' '}
          <a href="https://github.com/sillinous/ple-gps/discussions" target="_blank" rel="noreferrer">
            Open a discussion
          </a>.
        </p>
      </div>

      {/* Current framework status */}
      <div className="rm-status-card">
        <div className="rm-status-title">Framework Status — {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
        <div className="rm-status-grid">
          <div className="rm-status-item">
            <div className="rm-status-val accent">{FRAMEWORK_META.l4Coverage}%</div>
            <div className="rm-status-label">L4 Coverage</div>
          </div>
          <div className="rm-status-item">
            <div className="rm-status-val">{FRAMEWORK_META.l4Categories}<span className="ghost">/16</span></div>
            <div className="rm-status-label">Categories Complete</div>
          </div>
          <div className="rm-status-item">
            <div className="rm-status-val">{FRAMEWORK_META.l4Processes}</div>
            <div className="rm-status-label">Processes with L4</div>
          </div>
          <div className="rm-status-item">
            <div className="rm-status-val">{l4Remaining}</div>
            <div className="rm-status-label">Processes Remaining</div>
          </div>
        </div>

        {/* Category completion */}
        <div className="rm-cat-progress">
          <div className="rm-cat-label">Category Coverage</div>
          <div className="rm-cat-bars">
            {CATEGORIES.map(cat => (
              <div
                key={cat.id}
                className={`rm-cat-bar ${cat.l4 ? 'rm-cat-bar--done' : ''}`}
                title={`${cat.id}. ${cat.name} — ${cat.l4 ? 'L4 complete' : 'L4 in progress'}`}
              />
            ))}
          </div>
          <div className="rm-cat-legend">
            <span className="rm-legend-item rm-legend-done">■ L4 Complete ({FRAMEWORK_META.l4Categories})</span>
            <span className="rm-legend-item rm-legend-pending">■ In Progress ({catsRemaining})</span>
          </div>
        </div>
      </div>

      {/* Phases */}
      <div className="rm-phases">
        {ROADMAP_PHASES.map((phase, pi) => {
          const meta    = PHASE_META[phase.status]
          const done    = phase.items.filter(i => i.done).length
          const total   = phase.items.length
          const pct     = Math.round((done / total) * 100)
          return (
            <div key={phase.id} className={`rm-phase rm-phase--${phase.status}`}
              style={{ animationDelay: `${pi * 0.08}s` }}>
              <div className="rm-phase-header">
                <div className="rm-phase-left">
                  <div className="rm-phase-num mono">Phase {phase.id}</div>
                  <div className="rm-phase-name">{phase.name}</div>
                </div>
                <div className="rm-phase-right">
                  <span className={`pill ${meta.pillClass}`}>{meta.label}</span>
                  <span className="rm-phase-pct muted">{done}/{total}</span>
                </div>
              </div>

              {phase.status === 'active' && (
                <div className="rm-phase-progress">
                  <div className="rm-phase-track">
                    <div className="rm-phase-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="muted" style={{ fontSize: '0.68rem' }}>{pct}%</span>
                </div>
              )}

              <ul className="rm-items">
                {phase.items.map((item, ii) => (
                  <li key={ii} className={`rm-item ${item.done ? 'rm-item--done' : ''}`}>
                    <span className="rm-item-check">
                      {item.done ? '✓' : '○'}
                    </span>
                    <span className="rm-item-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {/* North star */}
      <div className="rm-north-star">
        <div className="rm-ns-label">North Star</div>
        <p className="rm-ns-text">
          Build the most rigorous, accessible, and actionable body of knowledge and tooling
          for navigating the transition to a post-labor economy — and a community capable
          of putting it to use.
        </p>
      </div>

      {/* What's deferred */}
      <div className="rm-deferred">
        <div className="rm-deferred-title">Explicitly Not on the Roadmap (Yet)</div>
        <ul className="rm-deferred-list">
          {DEFERRED.map((d, i) => (
            <li key={i} className="rm-deferred-item">
              <span className="rm-deferred-dash">—</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const DEFERRED = [
  'Taking official policy positions — we inform, we don\'t lobby (for now)',
  'Building a membership/dues structure — keep the barrier to entry zero',
  'Absorbing adjacent movements — we link to UBI advocacy and labor organizing, we don\'t merge with them',
]
