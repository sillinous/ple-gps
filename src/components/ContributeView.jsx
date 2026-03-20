import './ContributeView.css'

export default function ContributeView() {
  return (
    <div className="cv2-view fade-up">
      <div className="cv2-hero">
        <div className="cv2-eyebrow">Get Involved</div>
        <h1 className="cv2-title">How to Contribute</h1>
        <p className="cv2-sub">
          Every contribution matters — whether you're fixing a typo, writing a full framework
          chapter, building a tool, or just asking a good question in a Discussion thread.
          Here's how to get started.
        </p>
      </div>

      {/* Ways to contribute */}
      <section className="cv2-section">
        <h2 className="cv2-section-title">Ways to Contribute</h2>
        <div className="cv2-ways">
          {WAYS.map((w, i) => (
            <div key={i} className="cv2-way" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="cv2-way-icon">{w.icon}</div>
              <div className="cv2-way-title">{w.title}</div>
              <div className="cv2-way-body">{w.body}</div>
              {w.link && (
                <a className="cv2-way-link" href={w.link} target="_blank" rel="noreferrer">
                  {w.linkLabel} →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="cv2-section">
        <h2 className="cv2-section-title">The Contribution Process</h2>
        <div className="cv2-process">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="cv2-step">
              <div className="cv2-step-connector">
                <div className="cv2-step-num">{i + 1}</div>
                {i < PROCESS_STEPS.length - 1 && <div className="cv2-step-line" />}
              </div>
              <div className="cv2-step-content">
                <div className="cv2-step-title">{step.title}</div>
                <div className="cv2-step-body">{step.body}</div>
                {step.code && <code className="cv2-code">{step.code}</code>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standards */}
      <section className="cv2-section">
        <h2 className="cv2-section-title">Content Standards</h2>
        <div className="cv2-standards">
          {STANDARDS.map((s, i) => (
            <div key={i} className="cv2-standard">
              <div className="cv2-standard-title">{s.title}</div>
              <div className="cv2-standard-body">{s.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Issue types quick reference */}
      <section className="cv2-section">
        <h2 className="cv2-section-title">Issue Templates</h2>
        <div className="cv2-issue-types">
          {ISSUE_TYPES.map((t, i) => (
            <a
              key={i}
              className="cv2-issue-type"
              href={t.href}
              target="_blank" rel="noreferrer"
            >
              <span className="cv2-issue-icon">{t.icon}</span>
              <div>
                <div className="cv2-issue-title">{t.title}</div>
                <div className="cv2-issue-desc">{t.desc}</div>
              </div>
              <span className="cv2-issue-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <div className="cv2-cta-strip">
        <div className="cv2-cta-text">
          <div className="cv2-cta-title">Ready to contribute?</div>
          <div className="cv2-cta-sub">Start with a Discussion if you're unsure. Start with an issue if you have something concrete.</div>
        </div>
        <div className="cv2-cta-btns">
          <a className="cv2-btn cv2-btn--primary"
            href="https://github.com/sillinous/ple-gps/discussions"
            target="_blank" rel="noreferrer">
            Open a Discussion
          </a>
          <a className="cv2-btn cv2-btn--secondary"
            href="https://github.com/sillinous/ple-gps/issues/new/choose"
            target="_blank" rel="noreferrer">
            Open an Issue
          </a>
        </div>
      </div>
    </div>
  )
}

const WAYS = [
  {
    icon: '💬',
    title: 'Start a Discussion',
    body: 'The lowest-friction entry point. Questions, ideas, perspectives, debates — all welcome in GitHub Discussions.',
    link: 'https://github.com/sillinous/ple-gps/discussions',
    linkLabel: 'Go to Discussions',
  },
  {
    icon: '✍️',
    title: 'Write or Edit Framework Content',
    body: 'Improve L3 processes, write L4 activities for incomplete categories, fix errors, add citations, improve clarity.',
    link: 'https://github.com/sillinous/ple-gps/issues?labels=good-first-issue',
    linkLabel: 'Find good first issues',
  },
  {
    icon: '🛠',
    title: 'Build Tools & Resources',
    body: 'Scripts, calculators, visualizations, datasets, interactive demos — anything that makes the framework more useful.',
    link: 'https://github.com/sillinous/ple-gps/issues?labels=help-wanted',
    linkLabel: 'See open requests',
  },
  {
    icon: '🌐',
    title: 'Translate',
    body: 'Help make the framework accessible in languages beyond English. Priority: Spanish, Portuguese, Mandarin, French.',
    link: 'https://github.com/sillinous/ple-gps/discussions',
    linkLabel: 'Express interest',
  },
  {
    icon: '🔬',
    title: 'Research & Evidence',
    body: 'Find relevant papers, verify empirical claims, build the annotated bibliography, identify counter-evidence.',
  },
  {
    icon: '🏗',
    title: 'Lead a Working Group',
    body: 'Four working groups need leads. If you have deep expertise in Policy, Community Infrastructure, Communications, or Research — step up.',
    link: 'https://github.com/sillinous/ple-gps/issues/new?labels=working-group',
    linkLabel: 'Propose leadership',
  },
]

const PROCESS_STEPS = [
  {
    title: 'Check what exists',
    body: 'Search issues and discussions before opening something new. Your idea may already be in progress.',
  },
  {
    title: 'Discuss first (for big changes)',
    body: 'If you\'re proposing something significant, open a Discussion before committing to a PR. Coordinate first.',
  },
  {
    title: 'Fork and branch',
    body: 'Fork the repo and create a branch with a descriptive name.',
    code: 'git checkout -b docs/your-topic-here',
  },
  {
    title: 'Make your changes',
    body: 'Follow the content standards. Cite sources. Acknowledge tradeoffs. Write for a smart non-specialist.',
  },
  {
    title: 'Open a pull request',
    body: 'Use the PR template. Tag the relevant working group. Expect review and be willing to iterate.',
  },
  {
    title: 'Engage with feedback',
    body: 'Review is collaborative, not evaluative. Engage with comments in good faith — they make the work better.',
  },
]

const STANDARDS = [
  {
    title: 'Plain language first',
    body: 'Write for a smart reader who isn\'t a specialist in your domain. Define jargon. Aim for Flesch-Kincaid grade 10 or below for public-facing docs.',
  },
  {
    title: 'Cite your claims',
    body: 'Distinguish claims from evidence. Link to primary sources. Prefer open-access. Flag areas of genuine uncertainty.',
  },
  {
    title: 'Acknowledge tradeoffs',
    body: 'Every framework choice has costs. Name them. Readers trust work that acknowledges its own limitations more than work that doesn\'t.',
  },
  {
    title: 'First-person plural in docs',
    body: 'Use "we" and "our" for framework documentation. Reserve "I" for personal posts and discussions.',
  },
]

const ISSUE_TYPES = [
  {
    icon: '📋',
    title: 'Content Issue',
    desc: 'Error, gap, factual inaccuracy, or broken link in existing content',
    href: 'https://github.com/sillinous/ple-gps/issues/new?labels=content-issue&template=content_issue.yml',
  },
  {
    icon: '💡',
    title: 'Framework Proposal',
    desc: 'New idea, concept, or addition to the PLE framework',
    href: 'https://github.com/sillinous/ple-gps/issues/new?labels=proposal',
  },
  {
    icon: '🏗',
    title: 'Working Group Proposal',
    desc: 'Propose a new working group with scope and initial participants',
    href: 'https://github.com/sillinous/ple-gps/issues/new?labels=working-group&template=working_group.yml',
  },
  {
    icon: '🌐',
    title: 'Tool or Resource Request',
    desc: 'Request a new tool, dataset, visualization, or resource',
    href: 'https://github.com/sillinous/ple-gps/issues/new?labels=resource-request&template=resource_request.yml',
  },
]
