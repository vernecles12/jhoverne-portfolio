const skillGroups = [
  {
    number: "01",
    title: "Web development",
    description: "Core front-end technologies for building and styling web experiences.",
    tags: ["HTML", "CSS", "JavaScript"],
    symbol: "{ }",
  },
  {
    number: "02",
    title: "Programming & databases",
    description: "Foundational programming, data handling, and database skills.",
    tags: ["PHP", "MySQL", "Python", "Database Management"],
    symbol: "01",
  },
  {
    number: "03",
    title: "UI / UX design",
    description: "Designing interface ideas and creating interactive prototypes.",
    tags: ["Figma", "UI Design", "Prototyping"],
    symbol: "✳",
  },
  {
    number: "04",
    title: "Computer & productivity tools",
    description: "Everyday technical support and productivity applications.",
    tags: ["Basic Troubleshooting", "Word", "Excel", "PowerPoint"],
    symbol: "⌘",
  },
];

const strengths = [
  "Willingness to learn",
  "Time management",
  "Communication skills",
  "Teamwork and collaboration",
  "Problem-solving",
  "Adaptability",
  "Responsible and hardworking",
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d="M5 15 15 5M6 5h9v9" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="button-icon">
      <path d="M10 2.75v9.5m-3.5-3.5 3.5 3.5 3.5-3.5M4 14.25v2.5h12v-2.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Jhoverne Morcilla home">
          <span className="brand-mark">JM</span>
          <span className="brand-name">Jhoverne Morcilla</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="mailto:vhaniemorcilla4785@gmail.com">
          Let&apos;s talk <ArrowUpRight />
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="mailto:vhaniemorcilla4785@gmail.com">Let&apos;s talk</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="availability"><span className="status-dot" /> OPEN TO OJT OPPORTUNITIES</div>
          <p className="hero-kicker">BS INFORMATION TECHNOLOGY STUDENT</p>
          <h1>
            Hello, I&apos;m
            <span>Jhoverne</span>
            <span className="name-line">Morcilla<span className="period">.</span></span>
          </h1>
          <p className="hero-description">
            An aspiring IT professional ready to turn classroom knowledge into
            practical experience through an On-the-Job Training opportunity.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Get in touch <ArrowUpRight />
            </a>
            <a className="button button-secondary" href="/resume.pdf" download="Jhoverne-Morcilla-Resume.pdf">
              <DownloadIcon /> Download résumé
            </a>
          </div>
          <div className="hero-meta">
            <span><span className="meta-label">BASED IN</span> Cavite, Philippines</span>
            <span className="meta-divider" />
            <span><span className="meta-label">FOCUS</span> Web &amp; IT</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Decorative initials JM and technology-themed graphic">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="art-cross cross-one">✳</div>
          <div className="art-cross cross-two">+</div>
          <div className="art-card">
            <div className="art-card-top"><span>PERSONAL PORTFOLIO</span><span>2026</span></div>
            <img className="portrait" src="/profile.jpg" alt="Jhoverne Morcilla" />
            <div className="art-card-bottom"><span>IT STUDENT</span><span>LEARN • BUILD • GROW ↗</span></div>
          </div>
          <div className="floating-chip chip-one">&lt;code /&gt;</div>
          <div className="floating-chip chip-two">UI · UX</div>
          <div className="art-caption">LEARN&nbsp; / &nbsp;BUILD&nbsp; / &nbsp;GROW</div>
        </div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="section-heading">
          <span className="section-index">01 / ABOUT ME</span>
          <span className="section-rule" />
        </div>
        <div className="intro-layout">
          <h2>Motivated to learn.<br /><em>Ready to contribute.</em></h2>
          <div className="intro-copy">
            <p>
              I&apos;m a Bachelor of Science in Information Technology student at
              the National College of Science and Technology. I&apos;m eager to
              apply what I&apos;ve learned in programming, computer systems, and
              web development while gaining real-world industry experience.
            </p>
            <p>
              I welcome new challenges, value collaboration, and approach each
              opportunity with responsibility and a willingness to keep learning.
            </p>
            <a className="text-link" href="/resume.pdf" download="Jhoverne-Morcilla-Resume.pdf">
              View my résumé <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-wrap">
          <div className="section-heading section-heading-light">
            <span className="section-index">02 / TECHNICAL SKILLS</span>
            <span className="section-rule" />
          </div>
          <div className="skills-title-row">
            <h2>My technical<br /><em>toolkit.</em></h2>
            <p>A growing set of skills and tools I&apos;m ready to bring into a professional environment.</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.number}>
                <div className="skill-card-top"><span>{group.number}</span><span className="skill-symbol">{group.symbol}</span></div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="tag-list">
                  {group.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="strengths-row">
            <span className="strengths-label">PERSONAL STRENGTHS</span>
            <div className="strengths-list">
              {strengths.map((strength) => <span key={strength}>{strength}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="education-section section-wrap" id="education">
        <div className="section-heading">
          <span className="section-index">03 / EDUCATION</span>
          <span className="section-rule" />
        </div>
        <div className="education-layout">
          <div>
            <p className="eyebrow">ACADEMIC BACKGROUND</p>
            <h2>Building a strong<br /><em>foundation.</em></h2>
          </div>
          <article className="education-card">
            <div className="education-card-top"><span>COLLEGE</span><span>PHILIPPINES</span></div>
            <div className="education-monogram">NCST</div>
            <h3>National College of Science and Technology</h3>
            <p>Bachelor of Science in Information Technology</p>
            <div className="education-location"><span className="location-dot" /> Cavite, Philippines</div>
          </article>
        </div>
      </section>

      <section className="objective-section">
        <div className="objective-inner">
          <span className="section-index">04 / MY OBJECTIVE</span>
          <p className="objective-quote">“I aim to contribute my knowledge, dedication, and willingness to learn while preparing myself for future career opportunities.”</p>
          <span className="objective-note">READY FOR THE NEXT LEARNING OPPORTUNITY</span>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="section-heading">
          <span className="section-index">05 / CONTACT</span>
          <span className="section-rule" />
        </div>
        <div className="contact-layout">
          <div>
            <p className="eyebrow">HAVE AN OJT OPPORTUNITY?</p>
            <h2>Let&apos;s make<br /><em>something matter.</em></h2>
            <p className="contact-intro">I&apos;d be glad to connect and discuss how I can learn, contribute, and grow with your team.</p>
            <a className="button button-dark" href="mailto:vhaniemorcilla4785@gmail.com">
              Send me an email <ArrowUpRight />
            </a>
          </div>
          <div className="contact-details">
            <a href="mailto:vhaniemorcilla4785@gmail.com" className="contact-item">
              <span className="contact-label">EMAIL</span>
              <span>vhaniemorcilla4785@gmail.com</span>
              <ArrowUpRight />
            </a>
            <a href="tel:+639197750461" className="contact-item">
              <span className="contact-label">PHONE</span>
              <span>+63 919 775 0461</span>
              <ArrowUpRight />
            </a>
            <div className="contact-item contact-static">
              <span className="contact-label">LOCATION</span>
              <span>Cavite, Philippines</span>
              <span className="location-pin">⌖</span>
            </div>
            <div className="reference-note">PROFESSIONAL REFERENCES<br /><strong>Available upon request.</strong></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">JM<span>.</span></a>
        <span>© {new Date().getFullYear()} Jhoverne Morcilla</span>
        <a href="#home" className="back-to-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
