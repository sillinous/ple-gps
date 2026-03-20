import { CATEGORIES, FRAMEWORK_META } from '../data/framework.js'
import './FrameworkView.css'

export default function FrameworkView({ onSelectCategory }) {
  const l4Cats  = CATEGORIES.filter(c => c.l4)
  const pendCats = CATEGORIES.filter(c => !c.l4)

  return (
    <div className="fw-view fade-up">
      {/* Hero */}
      <div className="fw-hero">
        <div className="fw-hero-eyebrow">Post-Labor Economics</div>
        <h1 className="fw-hero-title">Governance Process Standard</h1>
        <p className="fw-hero-sub">
          An open framework for organizations navigating the transition beyond wage labor.
          16 categories. 272 processes. L1–L4 activity detail.
        </p>
        <div className="fw-stats">
          <div className="fw-stat">
            <div className="fw-stat-val">{FRAMEWORK_META.totalCategories}</div>
            <div className="fw-stat-label">Categories</div>
          </div>
          <div className="fw-stat-divider" />
          <div className="fw-stat">
            <div className="fw-stat-val">{FRAMEWORK_META.totalProcesses}</div>
            <div className="fw-stat-label">Processes</div>
          </div>
          <div className="fw-stat-divider" />
          <div className="fw-stat">
            <div className="fw-stat-val accent">{FRAMEWORK_META.l4Coverage}%</div>
            <div className="fw-stat-label">L4 Coverage</div>
          </div>
          <div className="fw-stat-divider" />
          <div className="fw-stat">
            <div className="fw-stat-val">{FRAMEWORK_META.l4Categories}/16</div>
            <div className="fw-stat-label">L4 Categories</div>
          </div>
        </div>
      </div>

      {/* Complete categories */}
      <section className="fw-section">
        <div className="fw-section-header">
          <h2 className="fw-section-title">L4 Complete</h2>
          <span className="pill pill-green">{l4Cats.length} categories</span>
        </div>
        <div className="fw-grid">
          {l4Cats.map((cat, i) => (
            <button
              key={cat.id}
              className="cat-card cat-card--complete"
              onClick={() => onSelectCategory(cat)}
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="cat-card-header">
                <span className="cat-card-num mono">{cat.id.toString().padStart(2,'0')}</span>
                <span className="cat-card-icon">{cat.icon}</span>
                <span className="pill pill-green">L4</span>
              </div>
              <div className="cat-card-name">{cat.name}</div>
              <div className="cat-card-summary">{cat.summary}</div>
              <div className="cat-card-footer">
                <span>{cat.groups.length} process groups</span>
                <span className="cat-card-arrow">→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Pending categories */}
      <section className="fw-section">
        <div className="fw-section-header">
          <h2 className="fw-section-title">L4 In Progress</h2>
          <span className="pill pill-blue">{pendCats.length} categories</span>
        </div>
        <div className="fw-grid">
          {pendCats.map((cat, i) => (
            <button
              key={cat.id}
              className="cat-card cat-card--pending"
              onClick={() => onSelectCategory(cat)}
              style={{ animationDelay: `${(l4Cats.length + i) * 0.04}s` }}
            >
              <div className="cat-card-header">
                <span className="cat-card-num mono">{cat.id.toString().padStart(2,'0')}</span>
                <span className="cat-card-icon">{cat.icon}</span>
                <span className="pill pill-blue">L1–L3</span>
              </div>
              <div className="cat-card-name">{cat.name}</div>
              <div className="cat-card-summary">{cat.summary}</div>
              <div className="cat-card-footer">
                <span>{cat.groups.length} process groups</span>
                <span className="cat-card-contribute">Contribute L4 →</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
