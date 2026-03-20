import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar.jsx'
import FrameworkView from './components/FrameworkView.jsx'
import CategoryView from './components/CategoryView.jsx'
import CommunityView from './components/CommunityView.jsx'
import RoadmapView from './components/RoadmapView.jsx'
import WorkingGroupsView from './components/WorkingGroupsView.jsx'
import ContributeView from './components/ContributeView.jsx'
import './App.css'

export default function App() {
  const [view, setView]         = useState('framework')
  const [activeCategory, setActiveCategory] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // close sidebar on route change (mobile)
  useEffect(() => { setSidebarOpen(false) }, [view, activeCategory])

  function navigate(v, cat = null) {
    setView(v)
    setActiveCategory(cat)
  }

  return (
    <div className="app-shell">
      {/* Mobile header */}
      <header className="mobile-header">
        <button className="burger" onClick={() => setSidebarOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <span className="mobile-logo">PLE-GPS</span>
        <div style={{ width: 40 }} />
      </header>

      {/* Overlay */}
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}

      <Sidebar
        open={sidebarOpen}
        currentView={view}
        activeCategory={activeCategory}
        onNavigate={navigate}
      />

      <main className="main-content">
        {view === 'framework' && !activeCategory &&
          <FrameworkView onSelectCategory={cat => navigate('category', cat)} />}
        {view === 'category' && activeCategory &&
          <CategoryView
            category={activeCategory}
            onBack={() => navigate('framework')}
          />}
        {view === 'community'      && <CommunityView onNavigate={navigate} />}
        {view === 'working-groups' && <WorkingGroupsView />}
        {view === 'roadmap'        && <RoadmapView />}
        {view === 'contribute'     && <ContributeView />}
      </main>
    </div>
  )
}
