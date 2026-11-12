import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Menu, X, Github, Linkedin, Mail,
  MapPin, Code2, Palette, Smartphone, Globe, ExternalLink,
  Layers, Send, CheckCircle2
} from 'lucide-react'

const skills = [
  { name: 'HTML5', level: 'Advanced', type: 'Markup' },
  { name: 'CSS3', level: 'Advanced', type: 'Styling' },
  { name: 'JavaScript', level: 'Intermediate', type: 'Programming' },
  { name: 'React.js', level: 'Learning', type: 'Frontend' },
  { name: 'Bootstrap', level: 'Intermediate', type: 'UI' },
  { name: 'Firebase', level: 'Learning', type: 'Backend' },
  { name: 'Git & GitHub', level: 'Intermediate', type: 'Tools' },
  { name: 'Responsive Design', level: 'Intermediate', type: 'UI' },
]

const projects = [
  {
    number: '01',
    name: 'EduPanel LMS',
    category: 'Learning Management System',
    description: 'A learning platform concept with student and admin experiences, quiz flows, and Firebase-powered data.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    link: 'https://asif1101javed-rgb.github.io/EduPanel-LMS/',
    color: 'blue',
  },
  {
    number: '02',
    name: 'Daraz EWB Clone',
    category: 'HTML CSS',
    description: 'A product browsing experience with API data, search, pagination, and clean product cards.',
    tags: ['React', 'JavaScript', 'REST API'],
    link: 'https://asif1101javed-rgb.github.io/Daraz-EWB-Clone/',
    color: 'violet',
  },
  {
    number: '03',
    name: 'User Directory',
    category: 'React Web Application',
    description: 'A user directory with a home view, searchable user list, and individual user detail pages.',
    tags: ['React', 'CSS', 'API'],
    link: 'https://asif1101javed-rgb.github.io/API-Integration-User-Management/',
    color: 'green',
  },
]

const services = [
  { icon: Code2, title: 'Frontend Development', text: 'Building responsive, accessible, and user-friendly web interfaces.' },
  { icon: Palette, title: 'UI Implementation', text: 'Turning design ideas into clean layouts with thoughtful details.' },
  { icon: Smartphone, title: 'Responsive Websites', text: 'Creating experiences that work smoothly across mobile, tablet, and desktop.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(data.get('subject') || 'Portfolio inquiry')
    const body = encodeURIComponent(`Hi Asif,\n\n${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`)
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <>
      <div className="site-shell">
        <header className="topbar">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">A<span>.</span></span>
            <span>ASIF ALI<span className="brand-sub">DEVELOPER PORTFOLIO</span></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          </nav>
        </header>

        <main>
          <section className="hero section-wrap" id="home">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
              <p className="hero-intro">Hello, I'm</p>
              <h1>Asif Ali<span className="accent">.</span></h1>
              <h2>Frontend Developer <span className="muted">&</span><br />Creative Problem Solver<span className="accent">.</span></h2>
              <p className="hero-description">I build modern, responsive web experiences with a focus on clean code, useful interactions, and thoughtful design.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
                <a className="button button-quiet" href="#contact">Get in touch <ArrowDown size={16} /></a>
              </div>
              <div className="hero-meta">
                <span><MapPin size={15} /> Pakistan</span>
                <span className="meta-divider" />
                <span><Code2 size={15} /> React · JavaScript · CSS</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-grid" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="profile-card">
                <div className="profile-card-top"><span>PROFILE / 001</span><span className="live-dot" /></div>
                <div className="avatar-placeholder"><span>A</span><i>+</i></div>
                <div className="profile-name">Asif Ali</div>
                <div className="profile-role">FRONTEND DEVELOPER</div>
                <div className="profile-divider" />
                <div className="profile-stat"><span>FOCUS</span><b>Web experiences</b></div>
                <div className="profile-stat"><span>STACK</span><b>React · JS · CSS</b></div>
                <div className="profile-stat"><span>MINDSET</span><b>Always learning</b></div>
              </div>
              <div className="floating-chip chip-code"><Code2 size={16} /> Clean code</div>
              <div className="floating-chip chip-web"><Globe size={16} /> Web focused</div>
              <div className="visual-caption">DESIGN. BUILD. IMPROVE.</div>
            </div>
            <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
          </section>

          <section className="section-wrap about-section" id="about">
            <div className="section-heading">
              <span className="section-index">01 / ABOUT</span>
              <h2>A little about <span className="accent">me.</span></h2>
            </div>
            <div className="about-grid">
              <div className="about-lead">I enjoy turning ideas into <span className="accent">useful digital experiences.</span></div>
              <div className="about-copy">
                <p>I'm Asif Ali, a frontend developer focused on building websites that look great and feel simple to use. I work with HTML, CSS, JavaScript, and React, and I enjoy learning new tools by building real projects.</p>
                <p>My goal is to keep improving my craft, write maintainable code, and create interfaces that solve real problems.</p>
                <a className="text-link" href="#contact">Let's build something <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="service-card" key={title}>
                  <div className="service-icon"><Icon size={21} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ArrowUpRight className="service-arrow" size={18} />
                </article>
              ))}
            </div>
          </section>

          <section className="skills-section" id="skills">
            <div className="section-wrap">
              <div className="section-heading">
                <span className="section-index">02 / TOOLKIT</span>
                <h2>Skills & <span className="accent">technologies.</span></h2>
              </div>
              <div className="skills-intro">
                <p>The tools I use to bring ideas to life — and the technologies I'm actively exploring.</p>
                <span className="mono-note"><Layers size={15} /> MY CURRENT TOOLKIT</span>
              </div>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-number">0{index + 1}</span>
                    <div className="skill-info"><h3>{skill.name}</h3><span>{skill.type}</span></div>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-wrap projects-section" id="projects">
            <div className="section-heading">
              <span className="section-index">03 / SELECTED WORK</span>
              <h2>Things I've <span className="accent">built.</span></h2>
            </div>
            <div className="projects-intro"><p>A selection of practice projects and web experiences. Replace the links with your live demos and GitHub repositories.</p><span className="mono-note">03 PROJECTS</span></div>
            <div className="project-list">
              {projects.map(project => (
                <article className={`project-card ${project.color}`} key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight size={22} /></a>
                  <div className="project-art"><div className="art-window"><div className="art-bar"><i /><i /><i /></div><div className="art-lines"><b /><b /><b /><b /></div><div className="art-blocks"><i /><i /><i /></div></div></div>
                </article>
              ))}
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="section-wrap contact-wrap">
              <div className="section-heading">
                <span className="section-index">04 / CONTACT</span>
                <h2>Have a project in <span className="accent">mind?</span></h2>
              </div>
              <div className="contact-grid">
                <div className="contact-copy">
                  <p>I'm always interested in learning, collaborating, and hearing about interesting ideas. Send me a message and let's connect.</p>
                  <a className="email-link" href="mailto:asif.1101.javed@gmail.com"><Mail size={18} /> asif.1101.javed@gmail.com <ArrowUpRight size={16} /></a>
                  <div className="social-links">
                    <a href="https://github.com/asif1101javed-rgb/" target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={14} /></a>
                    {/* <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} /></a> */}
                  </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <label>Your name<input name="name" placeholder="Enter your name" required /></label>
                  <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
                  <label>Subject<input name="subject" placeholder="What would you like to discuss?" /></label>
                  <label>Message<textarea name="message" rows="4" placeholder="Tell me a little about your idea..." required /></label>
                  <button className="button button-primary submit-button" type="submit">Send message <Send size={16} /></button>
                  {sent && <span className="form-note"><CheckCircle2 size={15} /> Your email app should open with the message ready.</span>}
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer section-wrap">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>ASIF ALI<span className="brand-sub">KEEP BUILDING.</span></span></a>
          <span>© {new Date().getFullYear()} Asif Ali. Built with React.</span>
          <a className="back-top" href="#home">BACK TO TOP ↑</a>
        </footer>
      </div>
    </>
  )
}

export default App
