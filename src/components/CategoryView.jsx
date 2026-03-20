import { useState } from 'react'
import './CategoryView.css'

export default function CategoryView({ category, onBack }) {
  const [openGroup, setOpenGroup]       = useState(null)
  const [openProcess, setOpenProcess]   = useState(null)

  const totalProcesses = category.groups.reduce((s,g) => s + g.processes.length, 0)
  const l4Count        = category.groups.reduce((s,g) =>
    s + g.processes.filter(p => p.l4).length, 0)

  return (
    <div className="cv-view fade-up">
      {/* Back */}
      <button className="cv-back" onClick={onBack}>← All Categories</button>

      {/* Header */}
      <div className="cv-header">
        <div className="cv-eyebrow">
          <span className="mono muted">CAT {category.id.toString().padStart(2,'0')}</span>
          {category.l4
            ? <span className="pill pill-green">L4 Complete</span>
            : <span className="pill pill-blue">L1–L3 · L4 In Progress</span>
          }
        </div>
        <h1 className="cv-title">{category.name}</h1>
        <p className="cv-summary">{category.summary}</p>

        <div className="cv-meta">
          <div className="cv-meta-item">
            <span className="cv-meta-val">{category.groups.length}</span>
            <span className="cv-meta-label">Process Groups</span>
          </div>
          <div className="cv-meta-item">
            <span className="cv-meta-val">{totalProcesses}</span>
            <span className="cv-meta-label">Processes</span>
          </div>
          {category.l4 && (
            <div className="cv-meta-item">
              <span className="cv-meta-val accent">{l4Count}</span>
              <span className="cv-meta-label">With L4</span>
            </div>
          )}
        </div>
      </div>

      {/* Process groups */}
      <div className="cv-groups">
        {category.groups.map((group, gi) => {
          const isGroupOpen = openGroup === group.id
          return (
            <div key={group.id} className="cv-group" style={{ animationDelay: `${gi * 0.06}s` }}>
              <button
                className={`cv-group-header ${isGroupOpen ? 'open' : ''}`}
                onClick={() => {
                  setOpenGroup(isGroupOpen ? null : group.id)
                  setOpenProcess(null)
                }}
              >
                <div className="cv-group-left">
                  <span className="cv-group-id mono">{group.id}</span>
                  <span className="cv-group-name">{group.name}</span>
                </div>
                <div className="cv-group-right">
                  <span className="muted" style={{ fontSize: '0.7rem' }}>
                    {group.processes.length} processes
                  </span>
                  <span className="cv-chevron">{isGroupOpen ? '−' : '+'}</span>
                </div>
              </button>

              {isGroupOpen && (
                <div className="cv-processes">
                  {group.processes.map((proc, pi) => {
                    const isProcOpen = openProcess === proc.id
                    return (
                      <div key={proc.id} className="cv-process">
                        <button
                          className={`cv-process-header ${isProcOpen ? 'open' : ''}`}
                          onClick={() => setOpenProcess(isProcOpen ? null : proc.id)}
                        >
                          <div className="cv-process-left">
                            <span className="cv-process-id mono">{proc.id}</span>
                            <span className="cv-process-name">{proc.name}</span>
                          </div>
                          {proc.l4 && (
                            <span className="pill pill-green" style={{ fontSize: '0.62rem' }}>L4</span>
                          )}
                        </button>

                        {isProcOpen && proc.l4 && (
                          <div className="cv-l4">
                            <div className="cv-l4-label">L4 — Activities</div>
                            <ul className="cv-l4-list">
                              {proc.l4.map((act, ai) => (
                                <li key={ai} className="cv-l4-item">
                                  <span className="cv-l4-dot" />
                                  {act}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {isProcOpen && !proc.l4 && (
                          <div className="cv-l4 cv-l4--empty">
                            <div className="cv-l4-label">L4 Activities</div>
                            <p className="muted" style={{ fontSize: '0.78rem', marginTop: 6 }}>
                              L4 activities for this process are not yet defined.{' '}
                              <a
                                href="https://github.com/sillinous/ple-gps/issues/new/choose"
                                target="_blank" rel="noreferrer"
                              >
                                Contribute L4 detail →
                              </a>
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Contribute CTA (for incomplete categories) */}
      {!category.l4 && (
        <div className="cv-contribute-cta">
          <div className="cv-cta-icon">◌</div>
          <div>
            <div className="cv-cta-title">Help Complete This Category</div>
            <p className="cv-cta-body">
              L4 activity definitions for this category are still being developed.
              If you have expertise in this domain, your contribution would be valuable.
            </p>
            <a
              className="cv-cta-btn"
              href="https://github.com/sillinous/ple-gps/issues/new?labels=proposal"
              target="_blank" rel="noreferrer"
            >
              Propose L4 Activities
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
