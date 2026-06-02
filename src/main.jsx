import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'William Schertzer',
  role: 'Computational materials scientist building AI-driven tools for polymer discovery.',
  location: 'Atlanta, GA',
  email: 'wschertzer3@gatech.edu',
  linkedin: 'https://www.linkedin.com/in/william-schertzer',
  resumeUrl: '/resume.pdf',
  bio:
    'I am a Georgia Tech PhD candidate in computational science and engineering focused on machine learning, atomistic simulation, and materials informatics for sustainable polymer systems.',
};

const navItems = ['About', 'Resume', 'Portfolio', 'Images', 'Contact'];

const highlights = [
  'AI-driven polymer design',
  'Materials data pipelines',
  'Machine learning and simulation',
  'Research, product, and technical strategy',
];

const experience = [
  {
    title: 'PhD Candidate and Graduate Research Assistant',
    organization: 'Ramprasad Group, Georgia Tech',
    years: 'August 2022 - Present',
    description:
      'Researching AI-assisted materials discovery for polymeric anion exchange membranes, with first-author publications in Journal of Materials Informatics and Journal of Physical Chemistry.',
  },
  {
    title: 'Advanced Digital Innovation Intern',
    organization: 'Dow Inc.',
    years: 'May 2025 - August 2025',
    description:
      'Built a division-wide materials data ingestion and extraction pipeline using retrieval augmented generation, computer vision, and natural language processing.',
  },
  {
    title: 'Head of Business Development',
    organization: 'Matmerize',
    years: 'January 2021 - January 2023',
    description:
      'Managed consulting projects helping clients use machine learning to accelerate the design of novel polymeric materials for specialty engineering applications.',
  },
  {
    title: 'Education',
    organization: 'Georgia Tech',
    years: 'BS 2021 | PhD 2022 - Present',
    description:
      'PhD in Computational Science and Engineering in the School of Materials Science and Engineering; BS in Materials Science and Engineering.',
  },
];

const skills = [
  'Python',
  'C++',
  'SQL',
  'Machine Learning',
  'Atomistic Simulations',
  'MATLAB',
  'SAP',
  'SolidWorks',
  'SEM',
  'UV-Vis Spectroscopy',
  '3D Printing',
];

const awards = [
  '2026 PMSE Emerging Professional Awardee',
  '2026 Southeastern Energy Conference poster competition, 3rd place',
  '2025 UNCAGE-ME EFRC All Hands Meeting Best Paper Award',
  'Georgia Tech MSE poster competition and showcase awards',
];

const portfolio = [
  {
    title: 'AI-Driven Fluorine-Free Polymer Design',
    category: 'First-Author Publication',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    description:
      'Designed and studied fluorine-free polymers for sustainable, high-performance anion exchange membranes using AI-assisted materials informatics.',
    tags: ['Materials Informatics', 'Polymers', 'Sustainability'],
  },
  {
    title: 'Materials Data Extraction Pipeline',
    category: 'Digital Innovation',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
    description:
      'Orchestrated a proprietary materials data workflow combining RAG, computer vision, and NLP, then designed a user interface for interacting with the extracted data.',
    tags: ['RAG', 'Computer Vision', 'NLP'],
  },
  {
    title: 'Copolymer Informatics with Deep Learning',
    category: 'Research Collaboration',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    description:
      'Contributed to polymer data curation and AI-based materials discovery work published in Macromolecules.',
    tags: ['Deep Learning', 'Data Curation', 'Macromolecules'],
  },
];

const imageGallery = [
  {
    src:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85',
    alt: 'Warm landscape at golden hour',
  },
  {
    src:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=85',
    alt: 'Modern architecture detail',
  },
  {
    src:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=85',
    alt: 'Open road through a mountain landscape',
  },
  {
    src:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=85',
    alt: 'Clean professional workspace',
  },
];

const writing = [
  'AI-assisted design of sustainable polymer membranes',
  'Physics-informed prediction of membrane degradation',
  'Materials data infrastructure for research teams',
];

function App() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Hero />
      <Nav />
      <About />
      <Resume />
      <Portfolio />
      <Images />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-ink text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=90"
        alt="Architectural lines on a modern building"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,24,36,0.92),rgba(16,24,36,0.58),rgba(16,24,36,0.2))]" />
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-between px-5 py-7 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/78">
          <span>{profile.name}</span>
          <span>williamschertzer.com</span>
        </div>

        <div className="grid gap-10 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Sparkles size={16} />
              Georgia Tech PhD candidate in computational materials science
            </p>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              {profile.role}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">{profile.bio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button button-light" href="#portfolio">
                <Layers3 size={18} />
                View Portfolio
              </a>
              <a className="button button-ghost" href={profile.resumeUrl}>
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>

          <aside className="hero-panel max-w-xl lg:ml-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/62">Focus</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div className="rounded-md border border-white/14 bg-white/10 p-4 backdrop-blur" key={item}>
                  <p className="text-base font-semibold leading-6">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-30 border-b border-ink/10 bg-paper/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <a className="text-lg font-extrabold tracking-tight text-ink" href="#">
          WS
        </a>
        <div className="flex max-w-[78vw] gap-1 overflow-x-auto text-sm font-semibold text-slate">
          {navItems.map((item) => (
            <a className="nav-link" href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function SectionHeader({ eyebrow, title, children, inverted = false }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-copper">{eyebrow}</p>
      <h2 className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${inverted ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {children && (
        <p className={`mt-5 text-lg leading-8 ${inverted ? 'text-white/72' : 'text-slate'}`}>
          {children}
        </p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-lg bg-ink shadow-soft">
          <img
            className="aspect-[4/5] w-full object-cover"
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1300&q=85"
            alt="Clean desk with laptop and notebook"
          />
        </div>
        <div>
          <SectionHeader eyebrow="About" title="A professional site built around credibility.">
            I work across polymer science, machine learning, simulation, and technical strategy,
            with experience translating research into data products, publications, and business
            outcomes.
          </SectionHeader>
          <div className="grid gap-4 sm:grid-cols-2">
            <Metric value="PhD" label="Computational Science and Engineering at Georgia Tech" />
            <Metric value="2+" label="First-author publications in AI-assisted polymer research" />
            <Metric value="RAG" label="Materials data extraction pipelines with computer vision and NLP" />
            <Metric value="ML" label="Machine learning for polymer design and materials informatics" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <p className="text-3xl font-extrabold text-teal">{value}</p>
      <p className="mt-3 leading-7 text-slate">{label}</p>
    </div>
  );
}

function Resume() {
  return (
    <section id="resume" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow="Resume" title="Experience, education, and capabilities.">
            My background combines graduate research, industrial digital innovation, startup
            business development, manufacturing engineering, and materials R&D.
          </SectionHeader>
          <a className="button button-dark w-fit" href={profile.resumeUrl}>
            <Download size={18} />
            Download PDF
          </a>
        </div>
        <div className="grid gap-5 lg:grid-cols-4">
          {experience.map((item, index) => (
            <article className="resume-card" key={item.title}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-teal text-white">
                {index === 0 ? <GraduationCap size={23} /> : null}
                {index === 1 ? <Layers3 size={23} /> : null}
                {index === 2 ? <BriefcaseBusiness size={23} /> : null}
                {index === 3 ? <GraduationCap size={23} /> : null}
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-copper">{item.years}</p>
              <h3 className="mt-3 text-2xl font-extrabold text-ink">{item.title}</h3>
              <p className="mt-1 font-semibold text-teal">{item.organization}</p>
              <p className="mt-4 leading-7 text-slate">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <article className="resume-card">
            <h3 className="text-2xl font-extrabold text-ink">Technical Skills</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
          <article className="resume-card">
            <h3 className="text-2xl font-extrabold text-ink">Awards</h3>
            <ul className="mt-5 space-y-3 leading-7 text-slate">
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Portfolio" title="Selected work and case studies.">
          A sample of research, product, and data work spanning computational materials science,
          polymer informatics, and applied AI systems.
        </SectionHeader>
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolio.map((project) => (
            <article className="project-card" key={project.title}>
              <img className="aspect-[16/10] w-full object-cover" src={project.image} alt="" />
              <div className="p-5">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-copper">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold text-ink">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Images() {
  return (
    <section id="images" className="bg-ink px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Images" title="A visual layer that makes the site feel personal." inverted>
          Replace these placeholders with a headshot, lab photos, conference photos, climbing
          photos, project screenshots, or other images that feel representative of your work and
          personality.
        </SectionHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {imageGallery.map((image) => (
            <figure className="overflow-hidden rounded-lg bg-white/8" key={image.src}>
              <img className="aspect-[4/5] w-full object-cover" src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Writing() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Writing" title="Research themes and future posts.">
          These topics can become short essays, project notes, or publication summaries that show
          how you think about materials discovery and technical systems.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-3">
          {writing.map((title) => (
            <a className="writing-link" href="#contact" key={title}>
              <span>{title}</span>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader eyebrow="Contact" title="Make it easy for people to reach you.">
            Reach out for research collaborations, technical conversations, speaking opportunities,
            consulting inquiries, or project introductions.
          </SectionHeader>
          <div className="space-y-4 text-lg text-slate">
            <p className="flex items-center gap-3">
              <Mail className="text-copper" size={20} />
              <a className="font-semibold text-ink hover:text-teal" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-copper" size={20} />
              {profile.location}
            </p>
            <div className="flex gap-3 pt-2">
              <a className="icon-link" href={profile.linkedin} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label className="hidden">
            Do not fill this out
            <input name="bot-field" />
          </label>
          <label className="field">
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label className="field">
            Email
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label className="field">
            Message
            <textarea name="message" placeholder="What would you like to discuss?" rows="6" required />
          </label>
          <button className="button button-dark" type="submit">
            <Mail size={18} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white px-5 py-8 text-sm text-slate sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p className="font-semibold text-ink">William Schertzer</p>
        <p>williamschertzer.com</p>
      </div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
