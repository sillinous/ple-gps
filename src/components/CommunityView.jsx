import './CommunityView.css'

export default function CommunityView({ onNavigate }) {
  return (
    <div className="comm-view fade-up">
      <div className="comm-hero">
        <div className="comm-eyebrow">Open Community</div>
        <h1 className="comm-title">Built in the Open,<br/>For Everyone</h1>
        <p className="comm-sub">
          PLE-GPS is a community project. The framework belongs to everyone
          navigating the post-labor transition — economists, technologists,
          policymakers, community organizers, and lived-experience voices.
        </p>
      </div>

      <div className="comm-cards">
        {COMMUNITY_LINKS.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className={`comm-card ${item.internal ? 'comm-card--internal' : ''}`}
            target={item.internal ? undefined : '_blank'}
            rel={item.internal ? undefined : 'noreferrer'}
            onClick={item.view ? (e) => { e.preventDefault(); onNavigate(item.view) } : undefined}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="comm-card-icon">{item.icon}</div>
            <div className="comm-card-title">{item.title}</div>
            <div className="comm-card-desc">{item.description}</div>
            <div className="comm-card-cta">{item.cta} →</div>
          </a>
        ))}
      </div>

      {/* How to contribute */}
      <section className="comm-section">
        <h2 className="comm-section-title">How to Get Involved</h2>
        <div className="comm-steps">
          {STEPS.map((step, i) => (
            <div key={i} className="comm-step">
              <div className="comm-step-num">{i + 1}</div>
              <div>
                <div className="comm-step-title">{step.title}</div>
                <div className="comm-step-body">{step.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="comm-section">
        <h2 className="comm-section-title">Community Values</h2>
        <div className="comm-values">
          {VALUES.map((v, i) => (
            <div key={i} className="comm-value">
              <div className="comm-value-title">{v.title}</div>
              <div className="comm-value-body">{v.body}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const COMMUNITY_LINKS = [
  {
    icon: '◉',
    title: 'GitHub Discussions',
    description: 'Questions, ideas, working group coordination, and open debate. This is the community\'s primary gathering place.',
    cta: 'Join the conversation',
    href: 'https://github.com/sillinous/ple-gps/discussions',
  },
  {
    icon: '◈',
    title: 'Working Groups',
    description: 'Sustained contribution happens in working groups. Find your domain and join a group.',
    cta: 'See working groups',
    view: 'working-groups',
    internal: true,
    href: '#',
  },
  {
    icon: '◎',
    title: 'Roadmap',
    description: 'See where the project is headed and find work that matches your interests and expertise.',
    cta: 'View roadmap',
    view: 'roadmap',
    internal: true,
    href: '#',
  },
  {
    icon: '◌',
    title: 'Contribute',
    description: 'Framework content, code, translations, research. Multiple ways to make a meaningful contribution.',
    cta: 'How to contribute',
    view: 'contribute',
    internal: true,
    href: '#',
  },
  {
    icon: '◍',
    title: 'Open Issues',
    description: 'Browse good first issues, content gaps, and active proposals. Find something concrete to work on.',
    cta: 'Browse issues',
    href: 'https://github.com/sillinous/ple-gps/issues',
  },
  {
    icon: '◎',
    title: 'Foundation for Global Progress',
    description: 'PLE-GPS is a project of the Foundation for Global Progress, a 501(c)(3) connecting technology, resources, and people.',
    cta: 'Learn more',
    href: 'https://foundationforglobalprogress.org',
  },
]

const STEPS = [
  {
    title: 'Orient yourself',
    body: 'Read the framework overview and pick a category that resonates with your background. No credentials required.',
  },
  {
    title: 'Introduce yourself',
    body: 'Go to GitHub Discussions → Introductions and say hello. Tell us what brought you here and what you hope to contribute.',
  },
  {
    title: 'Find your entry point',
    body: 'Look for issues labeled "good first issue" or "help wanted". Or open a discussion if you want to explore an idea first.',
  },
  {
    title: 'Join a working group',
    body: 'Working groups are how sustained contribution gets organized. Find the domain that fits your expertise and engage.',
  },
]

const VALUES = [
  {
    title: 'Ideas belong to everyone',
    body: 'Nothing here is proprietary. All contributions become part of the commons. Build on anything.',
  },
  {
    title: 'Credentials don\'t gate participation',
    body: 'Your lived experience is as valid as your résumé. We care about the quality of ideas, not who holds them.',
  },
  {
    title: 'Honest over comfortable',
    body: 'We document what doesn\'t work with the same rigor as what does. Failures are as useful as successes.',
  },
  {
    title: 'Contribution is voluntary, resources are unconditional',
    body: 'We model the world we\'re building. Community members are never coerced and never excluded from resources.',
  },
]
