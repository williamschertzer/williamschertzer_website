import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  Mountain,
  Presentation,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'William Schertzer',
  role: 'Computational materials scientist building AI-driven tools for polymer discovery.',
  location: 'Atlanta, GA',
  email: 'wschertzer3@gatech.edu',
  personalEmail: 'schertzer.william@gmail.com',
  linkedin: 'https://www.linkedin.com/in/william-schertzer',
  github: 'https://github.com/williamschertzer',
  resumeUrl: '/resume.pdf',
  headshot: '/images/headshot.jpg',
  bio:
    'I build machine-learning and simulation workflows for polymer discovery, with a background spanning experimental characterization, software, and materials informatics.',
};

const navItems = ['Resume', 'Story', 'Papers', 'Projects', 'Gallery', 'Contact'];

const galleryImages = [
  {
    src: '/images/gallery/thumbs/ramprasad-group.png.png',
    alt: 'Ramprasad Group at Georgia Tech',
    label: 'Ramprasad Research group',
  },
  {
    src: '/images/gallery/thumbs/IMG_8690.jpeg.png',
    alt: 'William presenting at a scientific conference',
    label: 'ACS Spring 2026 Conference talk',
  },
  {
    src: '/images/gallery/thumbs/IMG_1687.jpeg.png',
    alt: 'William standing between research posters at a poster session',
    label: 'Emory Physics Soft Matter Day poster session',
  },
  {
    src: '/images/gallery/thumbs/PXL_20240820_152755793.MP.jpeg.png',
    alt: 'William at ACS Fall 2024 with a colleague and the ACS mascot',
    label: 'ACS Fall 2024',
  },
  {
    src: '/images/gallery/thumbs/IMG_1269.jpeg.png',
    alt: 'William standing in front of an anion exchange membrane degradation poster',
    label: 'GT MSE Poster session',
  },
  {
    src: '/images/gallery/thumbs/DSC04580.jpeg.png',
    alt: 'William accepting a research award',
    label: 'Accepting Southeastern Energy Conference poster award',
  },
  {
    src: '/images/gallery/thumbs/IMG_1326.jpeg.png',
    alt: 'Second place Materials for Energy Application poster competition certificate',
    label: 'GT MSE poster award',
  },
  {
    src: '/images/gallery/thumbs/DSC04699.jpeg.png',
    alt: 'William with other award recipients at a conference',
    label: 'Southeastern Energy Conference poster award winners',
  },
  {
    src: '/images/gallery/thumbs/IMG_1830.jpeg.png',
    alt: 'William presenting research at a conference podium',
    label: 'Great Falls National Park',
  },
  {
    src: '/images/gallery/thumbs/IMG-20240903-WA0005.jpeg.png',
    alt: 'William outdoors with family while hiking',
    label: 'Family hike, Rocky Mountains',
  },
  {
    src: '/images/gallery/thumbs/IMG_2097.jpeg.png',
    alt: 'William hiking sand dunes near a lake',
    label: 'The Dune Trail, Sleeping Bear Dunes',
  },
  {
    src: '/images/gallery/thumbs/IMG_0960.jpeg.png',
    alt: 'William proposing outdoors',
    label: 'Proposing to my fiancee, Marlaina',
  },
];

const storyParagraphs = [
  'I started at Georgia Tech as an undergraduate in Materials Science and Engineering, where I was drawn to the mix of physical intuition, experimental craft, and practical engineering. Early on, I spent time in experimental research and in the Materials Innovation and Learning Lab, volunteering, learning instrumentation, training other users, and eventually becoming responsible for helping run the SEM.',
  'During COVID, my work pivoted toward computational materials research in the Ramprasad Group. That transition connected my experimental background with data, simulation, and machine learning. As an undergraduate researcher, I helped curate polymer datasets and contributed to a coauthored Macromolecules paper on copolymer informatics with multitask deep neural networks.',
  'That experience made the PhD path feel like the right next step. I continued at Georgia Tech in computational science and engineering, focusing on AI-assisted polymer design, membrane degradation, and materials informatics. So far, that work has led to two first-author papers and a broader interest in turning scientific data into useful technical systems.',
  'Alongside research, I have worked at Matmerize on business development and client-facing machine-learning projects, and at Dow on digital innovation work involving RAG, computer vision, NLP, and materials data extraction. I like problems that sit between research, software, and real-world use.',
];

const resumeSections = [
  {
    title: 'Education',
    icon: <GraduationCap />,
    items: [
      {
        heading: 'Georgia Institute of Technology',
        meta: 'PhD, Computational Science and Engineering | August 2022 - Present',
        body:
          'School of Materials Science and Engineering. Goizueta Foundation PhD Fellow and 2026 PMSE Emerging Professional.',
      },
      {
        heading: 'Georgia Institute of Technology',
        meta: 'BS, Materials Science and Engineering | Graduated December 2021',
        body: 'Jack J. and Leda Zbar MSE Scholar.',
      },
    ],
  },
  {
    title: 'Work Experience',
    icon: <BriefcaseBusiness />,
    items: [
      {
        heading: 'Graduate Research Assistant, Ramprasad Group',
        meta: 'Georgia Tech | August 2022 - Present',
        body:
          'Researching AI-assisted materials discovery for polymeric anion exchange membranes, including first-author papers on fluorine-free polymer design and physics-informed degradation prediction.',
      },
      {
        heading: 'Advanced Digital Innovation Intern, Dow Inc.',
        meta: 'May 2025 - August 2025',
        body:
          'Built a division-wide materials data ingestion and extraction pipeline using retrieval augmented generation, computer vision, and natural language processing.',
      },
      {
        heading: 'Head of Business Development, Matmerize',
        meta: 'January 2021 - January 2023',
        body:
          'Managed consulting projects helping clients use machine learning to accelerate the design of polymeric materials for specialty engineering applications.',
      },
      {
        heading: 'Technical Officer, Materials Innovation and Learning Lab',
        meta: 'August 2018 - January 2021',
        body: 'Trained and supervised users operating SEMs and 3D printers as a volunteer in the Materials Innovation and Learning Laboratory (MILL) maker space at Georgia Tech.',
      },
      {
        heading: 'Undergraduate Research Assistant, Ramprasad Group',
        meta: 'Georgia Tech | August - December 2020',
        body:
          'Coauthored copolymer informatics work in Macromolecules and helped curate thousands of polymer data points for AI-based materials discovery.',
      },
      {
        heading: 'Research Experience for Undergraduates',
        meta: 'Florida International University | June - August 2019',
        body:
          'Studied boron nitride nanotube polymer composites for piezoelectric microlattices using SEM and UV-Vis spectroscopy.',
      },
      {
        heading: 'Engineering Intern, Manufacturing and Operations',
        meta: 'CommScope | June 2020 - August 2020',
        body:
          'Developed work instructions for new equipment, supported CAD and engineering specification diagrams, and coordinated fixture design for manufacturing quality.',
      },
      {
        heading: 'Engineering Intern, Research and Development',
        meta: 'Carbice | January 2020 - April 2020',
        body:
          'Designed a thermal interface material system, executed thermal cycling tests, and led market analysis for aerospace applications.',
      },
      {
        heading: 'Engineering Intern, Data Analysis and Operations',
        meta: 'Georgia Pacific | May - August 2018',
        body:
          'Improved manufacturing procedures, analyzed customer complaint data, and helped reduce reject rates through targeted quality-system improvements.',
      },
    ],
  },
  {
    title: 'Technical Skills',
    icon: <Microscope />,
    items: [
      {
        heading: 'Programming and Data',
        meta: 'Python, C++, SQL, machine learning, atomistic simulations',
        body: 'Experience building data workflows, simulation-backed analyses, and applied ML systems for materials research.',
      },
      {
        heading: 'Engineering Tools and Instruments',
        meta: 'SolidWorks, MATLAB, SAP, SEM, UV-Vis, 3D printing',
        body: 'Hands-on background in experimental materials characterization, manufacturing, and research instrumentation.',
      },
    ],
  },
  {
    title: 'Awards',
    icon: <Award />,
    items: [
      {
        heading: '2026 PMSE Emerging Professional Awardee',
        meta: 'American Chemical Society, Polymer Materials: Science and Engineering Division',
      },
      {
        heading: '3rd Place Poster Competition',
        meta: '2026 Southeastern Energy Conference Student Symposium',
      },
      {
        heading: 'Best Paper Award',
        meta: '2025 UNCAGE-ME EFRC All Hands Meeting',
      },
      {
        heading: '2nd Place Poster Competition',
        meta: 'Georgia Tech MSE Spring 2025 Poster Competition',
      },
      {
        heading: '2nd Place Poster Showcase',
        meta: 'Georgia Tech MSE 2024 Fall Poster Showcase',
      },
    ],
  },
  {
    title: 'Personal',
    icon: <Mountain />,
    items: [
      {
        heading: 'Outside the lab',
        meta: 'Rock climbing, soccer, jazz piano, science fiction',
    
      },
      {
        heading: 'Languages',
        meta: 'Native English, Fluent Spanish, Conversational Hebrew',
      },
    ],
  },
];

const selectedWorks = [
  {
    title: 'AI-driven design of fluorine-free polymers for sustainable and high-performance anion exchange membranes',
    category: 'First-author paper',
    pdf: '/papers/ai-driven-fluorine-free-polymers.pdf',
    doi: 'https://www.oaepublish.com/articles/jmi.2024.69',
    description:
      'A materials informatics study using AI-driven design to identify fluorine-free polymers for sustainable anion exchange membranes.',
    tags: ['Materials Informatics', 'Polymers', 'AEMs'],
  },
  {
    title: 'AI-assisted physics-informed predictions of degradation behavior of polymeric anion exchange membranes',
    category: 'First-author paper',
    pdf: '/papers/physics-informed-degradation.pdf',
    doi: 'https://pubs.acs.org/doi/10.1021/acs.jpcb.5c07063',
    description:
      'A physics-informed prediction workflow for understanding degradation behavior in polymeric anion exchange membranes.',
    tags: ['Physics-Informed ML', 'Degradation', 'JPCB'],
  },
  {
    title: 'Copolymer informatics with multitask deep neural networks',
    category: 'Coauthored paper',
    pdf: '/papers/copolymer-informatics.pdf',
    doi: 'https://pubs.acs.org/doi/full/10.1021/acs.macromol.1c00728',
    description:
      'A coauthored Macromolecules paper connecting curated copolymer datasets with multitask deep learning for polymer property prediction.',
    tags: ['Deep Learning', 'Copolymer Data', 'Macromolecules'],
  },
];

const projects = [
  {
    title: 'Spotify Representative Sampler',
    category: 'Personal GitHub project',
    url: 'https://github.com/williamschertzer/spotify_representative_sampler',
    description:
      'A project for building a representative sample from Spotify listening or playlist data, useful for turning large music collections into smaller, analyzable subsets.',
    tags: ['Python', 'Data Analysis', 'Spotify'],
  },
  {
    title: 'Web Scraper',
    category: 'Personal GitHub project',
    url: 'https://github.com/williamschertzer/web-scraper',
    description:
      'A web-scraping project for collecting, parsing, and organizing web data into a more usable format.',
    tags: ['Python', 'Scraping', 'Automation'],
  },
  {
    title: 'Poster2Rating',
    category: 'Personal GitHub project',
    url: 'https://github.com/williamschertzer/poster2rating',
    description:
      'A project for evaluating research posters and converting poster content into structured ratings or feedback.',
    tags: ['AI', 'Evaluation', 'Research Tools'],
  },
  {
    title: 'AEM Conductivity, Water Uptake, and Swelling Dataset',
    category: 'Ramprasad Group / polyVERSE',
    url: 'https://github.com/Ramprasad-Group/polyVERSE/tree/main/Other/Conductivity_anionic_water_uptake_swelling',
    description:
      'Informatics-ready anion exchange membrane data for conductivity, water uptake, and swelling behavior within the Ramprasad Group polyVERSE repository.',
    tags: ['Materials Data', 'AEMs', 'polyVERSE'],
  },
];

function App() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Hero />
      <Nav />
      <Resume />
      <Story />
      <SelectedWork />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="bg-ink px-5 py-8 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid min-h-[86vh] max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            {profile.role}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">{profile.bio}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button button-light" href="#papers">
              <BookOpen size={18} />
              Selected Work
            </a>
            <a className="button button-ghost" href={profile.resumeUrl}>
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>

        <figure className="headshot-panel">
          <img src={profile.headshot} alt="William Schertzer headshot" />
          <figcaption>
            <span>{profile.name}</span>
            <span>{profile.location}</span>
          </figcaption>
        </figure>
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
        <p className={`mt-5 text-lg leading-8 ${inverted ? 'text-white/70' : 'text-slate'}`}>
          {children}
        </p>
      )}
    </div>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Gallery" title="Research, conferences, awards, and life outside work." />
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <GalleryCard image={image} key={image.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ image }) {
  const [imageFailed, setImageFailed] = React.useState(false);

  return (
    <figure className="gallery-card">
      {imageFailed ? (
        <div className="gallery-placeholder">
          <Presentation size={34} />
          <span>{image.label}</span>
        </div>
      ) : (
        <img src={image.src} alt={image.alt} onError={() => setImageFailed(true)} />
      )}
      <figcaption>{image.label}</figcaption>
    </figure>
  );
}

function Story() {
  return (
    <section id="story" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.42fr_0.58fr]">
        <SectionHeader eyebrow="Story" title="From experimental MSE to computational materials discovery." />
        <div className="space-y-6 text-lg leading-8 text-slate">
          {storyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow="Resume">
          </SectionHeader>
          <a className="button button-dark w-fit" href={profile.resumeUrl}>
            <Download size={18} />
            Download Full Resume
          </a>
        </div>
        <div className="resume-section-grid">
          {resumeSections.map((section) => (
            <article className="resume-card" key={section.title}>
              <div className="resume-card-title">
                {React.cloneElement(section.icon, { size: 22 })}
                <h3>{section.title}</h3>
              </div>
              <div className="mt-5 space-y-5">
                {section.items.map((item) => (
                  <div key={item.heading}>
                    <h4 className="text-lg font-extrabold text-ink">{item.heading}</h4>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-copper">{item.meta}</p>
                    <p className="mt-2 leading-7 text-slate">{item.body}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="papers" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Selected Work" title="Papers and case studies.">
          Paper cards show the PDF itself when the PDF is available locally, with download and DOI
          links beneath each summary.
        </SectionHeader>
        <div className="grid gap-6 lg:grid-cols-3">
          {selectedWorks.map((work) => (
            <article className="paper-card" key={work.title}>
              <div className="paper-preview">
                {work.pdf ? (
                  <iframe title={`${work.title} PDF preview`} src={`${work.pdf}#toolbar=0&navpanes=0`} />
                ) : (
                  <div className="paper-placeholder">
                    <BookOpen size={38} />
                    <span>PDF pending</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-copper">{work.category}</p>
                <h3 className="mt-3 text-2xl font-extrabold text-ink">{work.title}</h3>
                <p className="mt-4 leading-7 text-slate">{work.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {work.pdf && (
                    <a className="button button-dark" href={work.pdf}>
                      <Download size={18} />
                      PDF
                    </a>
                  )}
                  <a className="button button-outline" href={work.doi}>
                    DOI
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Projects" title="Code, data, and research tools." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <a className="project-link" href={project.url} key={project.title}>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-copper">{project.category}</p>
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
              <Github className="text-teal" size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-ink px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-3 text-lg text-white/75">
          <p className="flex items-center gap-3">
            <Mail className="text-copper" size={20} />
            <a className="font-semibold text-white hover:text-copper" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
          <p className="flex items-center gap-3">
            <Mail className="text-copper" size={20} />
            <a className="font-semibold text-white hover:text-copper" href={`mailto:${profile.personalEmail}`}>
              {profile.personalEmail}
            </a>
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="text-copper" size={20} />
            {profile.location}
          </p>
        </div>
        <div className="flex gap-3">
          <a className="icon-link icon-link-light" href={profile.linkedin} aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a className="icon-link icon-link-light" href={profile.github} aria-label="GitHub">
            <Github size={20} />
          </a>
        </div>
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
