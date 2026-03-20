import { FRAMEWORK_META, CATEGORIES } from '../data/framework.js'
import './Sidebar.css'

const NAV_ITEMS = [
  { id: 'framework',     label: 'Framework',      icon: '⊞' },
  { id: 'community',     label: 'Community',       icon: '◉' },
  { id: 'working-groups',label: 'Working Groups',  icon: '◈' },
  { id: 'roadmap',       label: 'Roadmap',         icon: '◎' },
  { id: 'contribute',    label: 'Contribute',      icon: '◌' },
]

export default function Sidebar({ open, currentView, activeCategory, onNavigate }) {
  const l4Done = CATEGORIES.filter(c => c.l4).length
  const pct = FRAMEWORK_META.l4Coverage

  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      {/* Logo */}
      <div className="sidebar-logo" onClick={() => onNavigate('framework')}>
        <div className="logo-mark">G</div>
        <div>
          <div className="logo-name">PLE-GPS</div>
          <div className="logo-sub">Governance Process Standard</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="sidebar-progress">
        <div className="progress-label">
          <span>Framework Coverage</span>
          <span className="accent">{pct}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="progress-meta muted">
          {FRAMEWORK_META.l4Processes} / {FRAMEWORK_META.totalProcesses} processes with L4
        </div>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        <div className="nav-section-label">Navigation</div>
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={`nav-item ${currentView === item.id && !activeCategory ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Category quick-jump */}
      <nav className="sidebar-nav categories-nav">
        <div className="nav-section-label">16 Categories</div>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`nav-item cat-item ${activeCategory?.id === cat.id ? 'active' : ''}`}
            onClick={() => onNavigate('category', cat)}
          >
            <span className="cat-num">{cat.id}</span>
            <span className="cat-label">{cat.name}</span>
            {cat.l4 && <span className="cat-badge">L4</span>}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <a
          href="https://github.com/sillinous/ple-gps"
          target="_blank" rel="noreferrer"
          className="sidebar-link"
        >
          ↗ GitHub
        </a>
        <a
          href="https://github.com/sillinous/ple-gps/discussions"
          target="_blank" rel="noreferrer"
          className="sidebar-link"
        >
          ↗ Discussions
        </a>
        <div className="sidebar-version muted">v{FRAMEWORK_META.version}</div>
      </div>
    </aside>
  )
}
