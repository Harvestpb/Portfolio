import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  FileText,
  Layers,
  Layout,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MousePointer2,
  PenTool,
  Search,
  Smartphone,
  Sparkles,

  X,
  Zap,
} from 'lucide-react';

function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return isTouch;
}

const rolesList = ['Product Designer', 'UI/UX Designer', 'Website Designer', 'AI Designer'];

type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  accent: string;
  number: string;
};

const projects: Project[] = [
  {
    id: 'cosave',
    title: 'CoSave',
    category: 'Fintech · Product design',
    year: '2025',
    description: 'Making group saving feel clear, social, and genuinely rewarding.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/294eea246135537.69bd1f722663c.png',
    accent: '#F2D477',
    number: '01',
  },
  {
    id: 'foodpalette',
    title: 'FoodPalette',
    category: 'Mobile app · UX case study',
    year: '2024',
    description: 'A more joyful way to discover and order the food you love.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/730c62237758127.Y3JvcCw0MzY3LDM0MTYsNjkxLDA.jpg',
    accent: '#DDA6A0',
    number: '02',
  },
  {
    id: 'perfectride',
    title: 'PerfectRide',
    category: 'Mobility · Visual design',
    year: '2024',
    description: 'Designing confidence into every trip, from search to arrival.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/fcef9c232924011.Y3JvcCwyNjE4LDIwNDgsMTI5LDA.png',
    accent: '#9CAF88',
    number: '03',
  },
  {
    id: 'brandvoxx',
    title: 'Brandvoxx',
    category: 'Brand identity · Case study',
    year: '2023',
    description: 'A confident identity for brands ready to find their voice.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/92917d232284415.Y3JvcCwzNzMzLDI5MjAsMTAxNiww.jpg',
    accent: '#D96C4F',
    number: '04',
  },
];

const heroImage = '/images/6cdc158b-81fd-4166-8284-77086ba51076.png';
const profileImage = '/images/1733035251754.jpg';
const caseStudyImages: Record<string, string> = {
  cosave: '/images/Cosave_(1).png',
  foodpalette: '/images/Food_app_(1).jpg',
  perfectride: '/images/Perfectride_(1).png',
  brandvoxx: '/images/brandvoxx_(1).jpg',
};
const imageCaseStudyIds = new Set(['cosave', 'foodpalette', 'perfectride', 'brandvoxx']);

const whatsappLink = 'https://wa.me/2349065089587';
const emailLink = 'mailto:harvestina6@gmail.com';
const linkedinLink = 'http://www.linkedin.com/in/victoryharvest';
const behanceLink = 'https://www.behance.net/victoryharvest';

const aboutHighlights = [
  'Strong UX/UI design skills with a focus on usability, accessibility, and responsive design',
  'Expertise in Figma, prototyping, wireframing, and collaborative design workflows',
  'A user-first mindset grounded in UX research, testing, and iterative design',
  'Problem-solving approach to fixing design pain points and improving product functionality',
  'Strong communication and collaboration skills with cross-functional teams',
];

const proudOf = [
  'Designed a responsive mobile app for a case study that solves the problem of financial literacy while interacting with finance apps.',
  'Conducted usability testing and redesigned a landing page that improved sign-up conversion rates by 20%.',
  'Collaborated with developers to streamline the handoff process, reducing design-to-dev time by 15%.',
];

const whyTeams = [
  'I bring a solution-driven mindset and always stay curious',
  'I value feedback, clarity, and collaboration in every stage of the process',
  'I\u2019m deeply committed to designing with empathy and putting users first',
];

const marqueeItems = ['Product design', 'UI/UX', 'Research', 'Prototyping', 'Mobile apps', 'Web apps', 'Systems thinking'];

const services = [
  { title: 'UI/UX Design', desc: 'Crafting intuitive interfaces and seamless user experiences for digital products.', icon: PenTool, color: '#F2D36B', rotation: -2.5, dark: false },
  { title: 'End-to-End Product Design', desc: 'From problem definition to final pixel — the full product design journey.', icon: Layers, color: '#DDA5A0', rotation: 1.8, dark: false },
  { title: 'Mobile App Design', desc: 'Designing mobile experiences that feel natural and delightful to use.', icon: Smartphone, color: '#315F4F', rotation: -1.2, dark: true },
  { title: 'Website & Landing Pages', desc: 'Conversion-focused websites and landing pages that tell your story.', icon: Layout, color: '#F4F0E4', rotation: 2.5, dark: false },
  { title: 'UX Research & Audits', desc: 'Uncovering user insights and evaluating existing experiences for improvement.', icon: Search, color: '#E76F51', rotation: -2, dark: false },
  { title: 'Wireframing & Prototyping', desc: 'Rapid wireframes and interactive prototypes to validate ideas early.', icon: FileText, color: '#FFFFFF', rotation: 1.5, dark: false },
];

const skillGroups = [
  {
    heading: 'Design',
    sub: 'Visual & interface',
    accent: '#F2D477',
    skills: ['UI Design', 'UX Design', 'Visual Design & Typography', 'Wireframing', 'Information Architecture'],
  },
  {
    heading: 'Research & Product Thinking',
    sub: 'Strategy & discovery',
    accent: '#D96C4F',
    skills: ['User Research', 'Requirements Gathering', 'Problem Definition', 'Product Thinking', 'Competitor Analysis'],
  },
  {
    heading: 'Prototyping & Tools',
    sub: 'Building & testing',
    accent: '#9CAF88',
    skills: ['Interactive Prototyping', 'Figma', 'AI-assisted Design & Prototyping'],
  },
  {
    heading: 'Additional Technical',
    sub: 'Complementary skills',
    accent: '#DDA6A0',
    skills: ['WordPress'],
  },
];

const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

function useScrollReveal(dep: unknown) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

function Badge() {
  const text = 'PRODUCT DESIGN ✦ OPEN TO OPPORTUNITIES ✦ ';
  return (
    <div className="hero-badge" aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <defs>
          <path id="circle-path" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <circle cx="50" cy="50" r="42" fill="#FFFEFA" stroke="#20211F" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="#D96C4F" stroke="#20211F" strokeWidth="1.5" />
        <text fill="#20211F" fontSize="7.5" fontFamily="'Space Mono', monospace" fontWeight="700" letterSpacing="0.5">
          <textPath href="#circle-path" startOffset="0%">{text}</textPath>
        </text>
      </svg>
    </div>
  );
}

function App() {
  const [activeProject, setActiveProject] = useState<string | null>(getProjectFromUrl);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setActiveProject(getProjectFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useScrollReveal(activeProject);

  const navigateTo = (projectId: string | null) => {
    const path = projectId ? `/project/${projectId}` : '/';
    window.history.pushState({}, '', path);
    setActiveProject(projectId);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const selectedProject = projects.find((project) => project.id === activeProject);

  return (
    <>
      {selectedProject ? (
        <ProjectPage
          key={selectedProject.id}
          project={selectedProject}
          onBack={() => navigateTo(null)}
          onSelectProject={navigateTo}
        />
      ) : (
        <main className="site-shell notebook-bg">
          <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} onHome={() => navigateTo(null)} />
          <Hero />
          <Marquee />
          <Work navigateTo={navigateTo} />
          <Services />
          <Skills />
          <About />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}

/* ---------- Navigation ---------- */
function Nav({ menuOpen, setMenuOpen, onHome }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void; onHome: () => void }) {
  const active = useActiveSection();
  return (
    <header className="site-header">
      <button className="nav-logo" onClick={onHome} aria-label="Go to home">P</button>
      <div className="nav-dots" aria-hidden="true">
        <span className="nav-dot" style={{ background: 'var(--terracotta)' }} />
        <span className="nav-dot" style={{ background: 'var(--butter)' }} />
        <span className="nav-dot" style={{ background: 'var(--sage)' }} />
      </div>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        {navSections.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">Contact <ArrowRight size={13} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const isTouch = useIsTouch();
  const [panelOpen, setPanelOpen] = useState(false);
  const reduce = useReducedMotion();

  const handlePhotoInteraction = () => {
    if (isTouch) setPanelOpen((v) => !v);
  };

  const photoProps = isTouch
    ? { onClick: handlePhotoInteraction }
    : {
        onMouseEnter: () => setPanelOpen(true),
        onMouseLeave: () => setPanelOpen(false),
        onFocus: () => setPanelOpen(true),
        onBlur: () => setPanelOpen(false),
      };

  return (
    <section className="hero section-pad reveal" id="home">
      <div className="hero-grid-2col">
        <div className="hero-tile hero-tile-main">
          <p className="hero-annotation">Hello, I&apos;m</p>
          <div className="hero-name-box">
            <span className="hero-name" aria-label="Pabia">
              PABIA
              <span className="hero-name-corner tl" />
              <span className="hero-name-corner tr" />
              <span className="hero-name-corner bl" />
              <span className="hero-name-corner br" />
            </span>
          </div>
          <p className="hero-headline">
            I turn <span className="hl-terra">complex ideas</span> into <span className="hl-sage">useful digital experiences</span>. <span className="hero-star">✦</span>
          </p>
        </div>

        <div
          className="hero-tile hero-tile-portrait hero-photo-wrap"
          {...photoProps}
          tabIndex={0}
          role="button"
          aria-expanded={panelOpen}
          aria-label={isTouch ? 'Tap to meet me' : 'Hover to meet me'}
        >
          <img className="hero-portrait-img" src={heroImage} alt="Pabia working on a product design" />
          <AnimatePresence>
            {!panelOpen && (
              <motion.span
                className="hero-photo-tag"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {isTouch ? 'Tap to meet me' : 'Hover to meet me'}
              </motion.span>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {panelOpen && (
              <motion.div
                className="hero-photo-panel"
                initial={reduce ? false : { y: '100%' }}
                animate={{ y: 0 }}
                exit={reduce ? { y: '100%' } : { y: '100%' }}
                transition={{ type: 'tween', duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <p className="hero-photo-panel-label">I&apos;m a...</p>
                {rolesList.map((role, i) => (
                  <motion.div
                    key={role}
                    className="hero-photo-panel-role"
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.12 + i * 0.1, duration: 0.4 }}
                  >
                    {role}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  return (
    <section className="marquee" aria-label="Capabilities">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="marquee-item">{item} <span style={{ color: 'var(--terracotta)' }}>✦</span></span>
        ))}
      </div>
    </section>
  );
}

/* ---------- Work ---------- */
function Work({ navigateTo }: { navigateTo: (id: string) => void }) {
  const isTouch = useIsTouch();
  const reduce = useReducedMotion();
  const [revealedCard, setRevealedCard] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    if (isTouch) {
      if (revealedCard === id) {
        navigateTo(id);
      } else {
        setRevealedCard(id);
      }
    } else {
      navigateTo(id);
    }
  };

  const cardProps = (id: string) =>
    isTouch
      ? {
          onClick: () => handleCardClick(id),
          onMouseEnter: () => setRevealedCard(id),
          onMouseLeave: () => setRevealedCard(null),
        }
      : {
          onClick: () => handleCardClick(id),
          onMouseEnter: () => setRevealedCard(id),
          onMouseLeave: () => setRevealedCard(null),
          onFocus: () => setRevealedCard(id),
          onBlur: () => setRevealedCard(null),
        };

  return (
    <section className="work section-pad" id="work">
      <div className="section-heading reveal">
        <div className="section-heading-left">
          <p className="label-mono">Selected work</p>
          <h2>A few things I&apos;ve <span className="hl-terra">made useful.</span></h2>
        </div>
        <p className="section-note">Four projects across fintech, mobility, food, and brand — each one grounded in a real human need.</p>
      </div>
      <div className="project-grid reveal reveal-stagger">
        {projects.map((project) => {
          const isRevealed = revealedCard === project.id;
          return (
            <div
              className="project-card-reveal"
              key={project.id}
              {...cardProps(project.id)}
              tabIndex={0}
              role="button"
              aria-label={`${project.title} — ${project.category}. ${isTouch ? 'Tap to reveal, tap again to view case study.' : 'View case study'}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(project.id);
                }
              }}
              style={{ '--card-accent': project.accent } as React.CSSProperties}
            >
              <div className="project-image-wrap">
                <motion.img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  animate={reduce ? {} : isRevealed ? { scale: 1.06 } : { scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                />

                <AnimatePresence>
                  {isRevealed && (
                    <motion.div
                      className="project-overlay"
                      initial={reduce ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="project-overlay-content">
                        <motion.span
                          className="project-overlay-category"
                          initial={reduce ? false : { opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reduce ? 0 : 0.1, duration: 0.35 }}
                        >
                          {project.category}
                        </motion.span>
                        <motion.h3
                          className="project-overlay-title"
                          initial={reduce ? false : { opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reduce ? 0 : 0.2, duration: 0.35 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p
                          className="project-overlay-desc"
                          initial={reduce ? false : { opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reduce ? 0 : 0.3, duration: 0.35 }}
                        >
                          {project.description}
                        </motion.p>
                        <motion.span
                          className="project-overlay-btn"
                          initial={reduce ? false : { opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reduce ? 0 : 0.4, duration: 0.35 }}
                        >
                          View Case Study <ArrowUpRight size={15} />
                        </motion.span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {isTouch && (
                <div className="project-touch-bar">
                  <span className="project-touch-title">{project.title}</span>
                  <a
                    className="project-touch-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigateTo(project.id);
                    }}
                  >
                    Case Study <ArrowUpRight size={12} />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function ServiceCard({ svc, index }: { svc: typeof services[number]; index: number }) {
  const isTouch = useIsTouch();
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const Icon = svc.icon;
  const num = String(index + 1).padStart(2, '0');
  const textColor = svc.dark ? 'var(--paper)' : 'var(--ink)';

  const interactionProps = isTouch
    ? { onClick: () => setFlipped((v) => !v) }
    : {
        onMouseEnter: () => setFlipped(true),
        onMouseLeave: () => setFlipped(false),
        onFocus: () => setFlipped(true),
        onBlur: () => setFlipped(false),
      };

  const swingVariants = {
    idle: { rotate: svc.rotation },
    hover: { rotate: svc.rotation + (svc.rotation >= 0 ? 2.5 : -2.5) },
  };

  return (
    <motion.div
      className="svc-id-card-wrap"
      initial={reduce ? false : { y: -120, opacity: 0, rotate: svc.rotation }}
      whileInView={reduce ? {} : { y: 0, opacity: 1, rotate: svc.rotation }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
      onAnimationComplete={() => {
        // trigger gentle pendulum settle via CSS class
      }}
    >
      <div className="svc-string" />
      <motion.div
        className="svc-id-card"
        {...interactionProps}
        tabIndex={0}
        role="button"
        aria-label={`${svc.title}. ${isTouch ? 'Tap to flip' : 'Hover to explore'}`}
        whileHover={reduce ? {} : { y: -6, rotate: svc.rotation + (svc.rotation >= 0 ? 2 : -2) }}
        animate={flipped ? swingVariants.hover : swingVariants.idle}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ '--svc-bg': svc.color, '--svc-text': textColor } as React.CSSProperties}
      >
        <div className="svc-id-hole" />
        <div className="svc-id-flipper" data-flipped={flipped}>
          {/* FRONT */}
          <div className="svc-id-face svc-id-front" style={{ background: svc.color, color: textColor }}>
            <p className="svc-id-meta">Service ID / No. {num}</p>
            <div className="svc-id-icon-box"><Icon size={30} strokeWidth={1.8} /></div>
            <h3 className="svc-id-title">{svc.title}</h3>
            <div className="svc-barcode">
              {[...Array(24)].map((_, i) => (
                <span key={i} style={{ height: i % 3 === 0 ? '100%' : i % 2 === 0 ? '70%' : '40%', width: i % 4 === 0 ? '3px' : '2px' }} />
              ))}
            </div>
            <p className="svc-id-hint">{isTouch ? 'Tap to flip' : 'Hover to explore'}</p>
          </div>
          {/* BACK */}
          <div className="svc-id-face svc-id-back" style={{ background: svc.color, color: textColor }}>
            <div className="svc-id-hole svc-id-hole-back" />
            <p className="svc-id-back-label">What it means</p>
            <p className="svc-id-back-desc">{svc.desc}</p>
            <div className="svc-barcode svc-barcode-back">
              {[...Array(20)].map((_, i) => (
                <span key={i} style={{ height: i % 3 === 0 ? '100%' : i % 2 === 0 ? '60%' : '35%', width: '2px' }} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-pad">
        <div className="section-heading reveal">
          <div className="section-heading-left">
            <p className="label-mono">What I do</p>
            <h2>Services I <span className="hl-sage">offer.</span></h2>
          </div>
          <p className="section-note">From research to final pixel — here&apos;s what you can hire me to help with.</p>
        </div>
        <div className="svc-rail-grid">
          {[0, 1].map((row) => (
            <div className="svc-rail-row" key={row}>
              <div className="svc-rail" />
              <div className="svc-cards-in-row">
                {services.slice(row * 3, row * 3 + 3).map((svc, i) => (
                  <ServiceCard key={svc.title} svc={svc} index={row * 3 + i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  return (
    <section className="skills section-pad" id="skills">
      <div className="section-heading reveal">
        <div className="section-heading-left">
          <p className="label-mono">Capabilities</p>
          <h2>Skills & <span className="hl-terra">tools.</span></h2>
        </div>
        <p className="section-note">A snapshot of the skills I bring to every product design project.</p>
      </div>
      <div className="skills-grid reveal reveal-stagger">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.heading}>
            <h3>{group.heading}</h3>
            <span className="label-mono-sm">{group.sub}</span>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  <span className="skill-dot" style={{ background: group.accent }} /> {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section className="about" id="about">
      <div className="section-pad">
        <div className="about-grid">
          <div className="about-image-wrap reveal">
            <img src={profileImage} alt="Portrait of Pabia" />
            <span className="about-sticker">the person behind the pixels ✦</span>
          </div>
          <div className="about-copy reveal">
            <p className="label-mono">A little about me</p>
            <h2>Let&apos;s build something <span className="hl-terra">brilliant together.</span></h2>
            <p className="about-lede">I&apos;m a passionate Product Designer working in the tech industry, helping startups, businesses, and development teams create intuitive, user-friendly digital products.</p>
            <p>My journey into product design began with a deep curiosity about how people interact with mobile apps — and how better design can make those interactions smoother and more meaningful. What motivates me every day is the opportunity to turn complex problems into simple, elegant solutions that make life easier for users.</p>

            <div className="about-block">
              <h3 className="about-block-title">What I bring to the table</h3>
              <ul className="check-list">
                {aboutHighlights.map((item, i) => <li key={i}><Check size={16} strokeWidth={2.5} /><span>{item}</span></li>)}
              </ul>
            </div>

            <div className="about-block">
              <h3 className="about-block-title">A few things I&apos;m proud of</h3>
              <ul className="check-list">
                {proudOf.map((item, i) => <li key={i}><Check size={16} strokeWidth={2.5} /><span>{item}</span></li>)}
              </ul>
            </div>

            <div className="about-block">
              <h3 className="about-block-title">Why teams enjoy working with me</h3>
              <ul className="check-list">
                {whyTeams.map((item, i) => <li key={i}><Check size={16} strokeWidth={2.5} /><span>{item}</span></li>)}
              </ul>
            </div>

            <p className="about-closing">I&apos;m always looking to connect with forward-thinking teams, product managers, or founders who believe in the power of good design to drive growth. Let&apos;s create something meaningful together — feel free to reach out!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-card reveal">
        <p className="label-mono">Have a good idea?</p>
        <h2>Let&apos;s build something <span className="hl-butter">brilliant together.</span></h2>
        <p>I&apos;m open to product design opportunities, collaborations, and interesting projects. Reach out and let&apos;s talk.</p>
        <div className="contact-actions">
          <a className="contact-btn contact-btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowUpRight size={15} /></a>
          <a className="contact-btn contact-btn-secondary" href={emailLink}>Send an email <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-name">PABIA</div>
          <p>Product Designer · Port Harcourt, Nigeria</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigate</h4>
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href={behanceLink} target="_blank" rel="noreferrer">Behance</a>
            <a href={linkedinLink} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={emailLink}>Email</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2025 Victory Harvest</span>
        <span>Designed with intention</span>
      </div>
    </footer>
  );
}

/* ---------- Project Page (preserved, unchanged logic) ---------- */
function ProjectPage({ project, onBack, onSelectProject }: { project: Project; onBack: () => void; onSelectProject: (id: string | null) => void }) {
  const nextProject = projects[(projects.findIndex((item) => item.id === project.id) + 1) % projects.length];
  const isImageCaseStudy = imageCaseStudyIds.has(project.id);
  return (
    <main className={isImageCaseStudy ? 'project-page image-case-study-page' : 'project-page'} style={{ '--project-accent': project.accent } as React.CSSProperties}>
      <header className="site-header project-header">
        <button className="nav-logo" onClick={onBack} aria-label="Go to home">P</button>
        <button className="back-link" onClick={onBack}><ArrowLeft size={17} /> Back to work</button>
        <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">Let&apos;s talk <ArrowRight size={13} /></a>
      </header>
      <section className="project-intro section-pad">
        <div><p className="label-mono">{project.number} / Case study</p><h1>{project.title}<em>.</em></h1><p className="project-intro-text">{project.description}</p></div>
        <div className="project-meta"><span>Role<br /><strong>Product designer</strong></span><span>Year<br /><strong>{project.year}</strong></span><span>Disciplines<br /><strong>UX · UI · Strategy</strong></span></div>
      </section>
      <section className="full-project-image"><img src={caseStudyImages[project.id] ?? project.image} alt={`${project.title} case study`} /></section>
      <section className="project-story section-pad">
        <div className="story-label">The brief</div>
        <div>
          <h2>Designing a better<br /><em>way forward.</em></h2>
          <p>{project.description} This case study explores the decisions, details, and design thinking behind the final experience.</p>
          <a className="text-link" href={behanceLink} target="_blank" rel="noreferrer">View original on Behance <ArrowUpRight size={17} /></a>
        </div>
      </section>
      <section className="next-project section-pad">
        <p className="label-mono">Next project</p>
        <button onClick={() => onSelectProject(nextProject.id)}><span>{nextProject.title}</span><ArrowUpRight size={38} strokeWidth={1.4} /></button>
      </section>
    </main>
  );
}

function getProjectFromUrl(): string | null {
  const match = window.location.pathname.match(/^\/project\/([^/]+)/);
  return match?.[1] && projects.some((project) => project.id === match[1]) ? match[1] : null;
}

export default App;
