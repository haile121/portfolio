export const devNavLinks = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Recognitions",
  "Testimonials",
  "Contact",
];

export const devSkillsBar = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Express.js",
  "Nuxt.js",
  "Python",
  "C++",
  "Dart",
  "Flutter",
  "React Native",
  "PostgreSQL",
  "Node.js",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Better Auth",
  "JWT",
  "OAuth",
];

export const devStats = [
  { num: "3+", label: "Years experience" },
  { num: "14+", label: "Projects shipped" },
  { num: "9+", label: "Happy clients" },
  { num: "∞", label: "Cups of tea" },
];

export const devSkillsBox = [
  {
    icon: "⚡",
    name: "Frontend Development",
    desc: "Building performant, accessible interfaces with modern web & mobile frameworks.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Flutter",
      "Tailwind CSS",
    ],
  },
  {
    icon: "🔧",
    name: "Backend & Systems",
    desc: "Scalable APIs, microservices, and database design that handle real production workloads.",
    tags: [
      "Express.js",
      "Node.js",
      "Nuxt.js",
      "Python",
      "C++",
      "Dart",
      "PostgreSQL",
      "Prisma",
      "GraphQL",
    ],
  },
  {
    icon: "☁️",
    name: "DevOps & Cloud",
    desc: "CI/CD pipelines, containerization, cloud hosting, cPanel management, and server infrastructure.",
    tags: [
      "AWS",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Yegara Host",
      "cPanel",
    ],
  },
  {
    icon: "🎨",
    name: "UI Engineering",
    desc: "Design systems, component libraries, animations, and translating design into clean code.",
    tags: ["Framer Motion", "Radix UI", "CSS Modules"],
  },
  {
    icon: "🔐",
    name: "Auth & Security",
    desc: "Better Auth, JWT, OAuth, session management, and security best practices.",
    tags: ["Better Auth", "JWT", "OAuth", "OWASP"],
  },
  {
    icon: "🤖",
    name: "AI & Data Workflows",
    desc: "Integrating AI APIs, LLM workflows, and data pipelines to solve complex problems.",
    tags: ["AI Integration", "Python", "SQL", "Vercel Analytics"],
  },
];

export interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  desc?: string;
  bullets?: string[];
}

export const devExperience: ExperienceItem[] = [
  {
    date: "Sep 2025 — Present",
    role: "Full-Stack Engineer",
    company: "Ethiopian Optometric Association",
    bullets: [
      "Architected and deployed the official full-stack web platform powering digital operations, admin management tools, and member services across Ethiopia.",
      "Engineered secure Role-Based Access Control (RBAC) authentication (JWT, OAuth) and automated digital credentialing with dynamic PDF generation (PDFKit) and QR code verification.",
      "Optimized database architecture using MySQL and Sequelize ORM, integrating Cloudinary for asset storage and automated cloud backups.",
    ],
  },
  {
    date: "May 2025 — Jul 2026",
    role: "Project Team Lead, Web Developer & UI/UX Designer",
    company: "BiTech Incubation Center",
    bullets: [
      "Lead multidisciplinary engineering and design team in developing software products for incubated tech startups.",
      "Direct visual identity, UI/UX prototyping (Figma), and full-stack web development across multiple concurrent projects.",
      "Facilitate stakeholder planning, sprint retrospectives, and technical architecture reviews.",
    ],
  },
  {
    date: "Jul 2025 — Mar 2026",
    role: "Frontend & SEO Developer / Full-Stack Intern",
    company: "Askuala Link",
    bullets: [
      "Frontend & SEO Developer (Oct 2025 — Mar 2026): Engineered responsive frontend interfaces and implemented SEO best practices (meta tags, site indexing, Core Web Vitals) for the main public portal (askualalink.com).",
      "Full-Stack Developer Intern (Jul 2025 — Oct 2025): Architected Askuala Wiki, an internal knowledge platform built with React 19, Tailwind CSS v4, Zustand, Node.js, Express, MySQL, and Cloudinary.",
      "Awarded special commendation by Founder & CEO for outstanding technical contributions and innovation.",
    ],
  },
  {
    date: "Jun 2025 — Aug 2025",
    role: "Backend Developer Intern",
    company: "Alyah Software",
    bullets: [
      "Built the backend services and API infrastructure for Hintern Bridge, an internship-matching platform connecting university students with tech companies.",
      "Developed scalable RESTful APIs, database models, and intelligent candidate-matching logic.",
    ],
  },
  {
    date: "2024 — 2025",
    role: "Co-Founder & CTO",
    company: "Code Biruh",
    bullets: [
      "Directed technical strategy, client web development projects, and curriculum design for developer training programs.",
      "Trained aspiring developers in core programming principles while delivering custom web solutions for local businesses and organizations.",
    ],
  },
  {
    date: "Feb 2025 — Mar 2025",
    role: "Web Development Intern",
    company: "Oasis Infobyte · Remote, India",
    bullets: [
      "Developed web applications solving real-world client requests in an agile, remote environment.",
    ],
  },
  {
    date: "Dec 2024 — Jan 2025",
    role: "Web Development Intern",
    company: "XAI · Remote, Morocco",
    bullets: [
      "Contributed to front-end and back-end web features for international clients with high performance standards.",
    ],
  },
];

export const devCommunity: ExperienceItem[] = [
  {
    date: "Jun 2025 — Jun 2026",
    role: "Founder & Community Lead",
    company: "Meta Codz (BiT)",
    bullets: [
      "Founded and led a thriving student technology community at Bahir Dar Institute of Technology.",
      "Organized technical workshops, guest lectures, expert interviews, and multidisciplinary project showcase events for 100+ student developers.",
    ],
  },
  {
    date: "Oct — Nov 2025",
    role: "Hackathon Organizer",
    company: "Cursor Hackathon · Bahir Dar University",
    bullets: [
      "Co-organized an international-scale hackathon at Bahir Dar University.",
      "Coordinated logistics, participant mentorship, jury evaluation criteria, university leadership relations, and industry partnerships.",
    ],
  },
  {
    date: "Mar — May 2025",
    role: "Web Development Mentor",
    company: "Eshet Academy",
    bullets: [
      "Mentored high school students during a 3-month intensive coding bootcamp.",
      "Guided teams in building real-world applications including school management portals and student club registration systems.",
    ],
  },
];

export const devRecognitions = [
  {
    title: "Best Top 3 Internship Project of 2025",
    issuer: "Bahir Dar University",
  },
  {
    title: "BiT AI Hackathon 3rd Place Winner",
    issuer: "Computing Association - BiT",
  },
  {
    title: "Top 10 Finalist (Innovation for Peace 2025)",
    issuer: "Bahir Dar University - BiT",
  },
  {
    title: "PLP Software Development Scholarship",
    issuer: "Power Learn Project",
  },
  {
    title: "Cursor Hackathon Organizer",
    issuer: "Bahir Dar University",
  },
  {
    title: "Founder & Lead",
    issuer: "Meta Codz BiT",
  },
  {
    title: "Backend Bootcamp Developer",
    issuer: "IS HUB Addis Ababa University",
  },
  {
    title: "Fundamentals of Web Dev",
    issuer: "Udacity Certificate",
  },
  {
    title: "English Center Trainee",
    issuer: "ELIC",
  },
  {
    title: "Leadership Training",
    issuer: "Various Programs",
  },
];

export const devProjects = [
  {
    num: "001 — Featured",
    name: "Ethiopian Optometric Association",
    desc: "Full-stack web application with comprehensive admin management tools, role-based access control (RBAC), and automated PDF/QR generation for digital operations and member services.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "JWT",
      "OAuth",
      "Cloudinary",
      "PDFKit",
      "QRCode",
      "RBAC",
    ],
    images: [
      "/images/projects/eoa/eoa-1.png",
      "/images/projects/eoa/eoa-2.png",
      "/images/projects/eoa/eoa-3.png",
    ],
    href: "https://ethiopianoptometricassociation.org/",
    isFeatured: true,
  },
  {
    num: "002",
    name: "Askuala Link Official Platform",
    desc: "Askuala Link’s official web platform, collaborating with the development team to build and refine a high-performance, responsive experience. Implemented dynamic content experiences, modern UI improvements, SEO enhancements, and performance optimizations to deliver a polished, production-ready platform across devices.",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "SEO",
      "Core Web Vitals",
      "REST API",
    ],
    href: "https://askualalink.com",
  },
  {
    num: "003",
    name: "AlphaX",
    desc: "Bilingual (Amharic/English) learning platform for C++ and web fundamentals — structured lessons, placement tests, verified certificates, g++ live compiler, WebSockets, Chapa payment, and an AI tutor.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "g++ Compiler",
      "Gemini AI",
      "OpenAI",
      "WebSockets",
      "Chapa Pay",
    ],
    images: [
      "/images/projects/alphax/alphax-1.png",
      "/images/projects/alphax/alphax-2.png",
      "/images/projects/alphax/alphax-3.png",
    ],
    href: "https://alpha-x-frontend.vercel.app/",
  },
  {
    num: "004",
    name: "Tenashi-Ai-Health-Monitor",
    desc: "An AI-powered health monitoring system leveraging scikit-learn IsolationForest anomaly detection, NumPy/Pandas data analytics, and containerized Docker services.",
    tags: [
      "React",
      "Vite",
      "Chart.js",
      "Python",
      "Flask",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Docker",
    ],
  },
  {
    num: "005",
    name: "Askuala Wiki",
    desc: "Centralized internal wiki platform for Askuala Link built with React 19, Tailwind CSS v4, Zustand state management, Node.js/Express, MySQL Sequelize, JWT auth, and Cloudinary storage.",
    tags: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Zustand",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "JWT",
      "Cloudinary",
    ],
  },
  {
    num: "006",
    name: "LINapNo App",
    desc: "A cross-platform mobile application built with Flutter & Dart for streamlined mobile experiences, offline sync, and intuitive user interactions.",
    tags: ["Flutter", "Mobile", "Dart", "REST API"],
  },
  {
    num: "007",
    name: "Hintern Bridge",
    desc: "Backend services for an internship-matching platform connecting students with companies, featuring scalable Node.js/Express APIs and intelligent matching.",
    tags: ["Node.js", "Express.js", "Backend", "APIs", "MySQL"],
  },
  {
    num: "008",
    name: "Yene Temari",
    desc: "Top 10 Finalist (Innovation for Peace 2025) — an AI-powered tutoring platform with intelligent tutor matching, profile verification, and student progress tracking.",
    tags: ["AI", "EdTech", "Matching", "Python", "React"],
  },
];

export const devTestimonials = [
  {
    text: "Hailemariam's technical expertise and leadership in engineering the Ethiopian Optometric Association platform exceeded our expectations. He delivered a robust, production-ready system with exceptional attention to detail.",
    author: "Dr. Bekalu Getahun Agaje",
    role: "President of Ethiopian Optometric Association | Assistant Professor of Clinical Optometry, Hawassa University",
    avatar: "BG",
    image: "/images/testimonials/dr-bekalu.jpg",
  },
  {
    text: "On behalf of the entire Askuala Link team, I would like to extend our heartfelt appreciation for your outstanding dedication and contribution during your internship with us. Your journey with us is an inspiring example of how passion and perseverance can lead to growth and innovation.",
    author: "Fanuel Almaw",
    role: "Founder & CEO, Askuala Link",
    avatar: "FA",
    image: "/images/testimonials/fanuel-almaw.png",
  },
  {
    text: "Hailemariam's dedication to quality and rapid delivery sets a new standard for development. His technical intuition is outstanding.",
    author: "Dr. Bahae Eddine Halim",
    role: "Founder and CEO at XAI Morocco",
    avatar: "HB",
    image: "/images/testimonials/dr-bahae.png",
  },
];

export const devSocialLinks = [
  {
    label: "haileag8@gmail.com",
    href: "mailto:haileag8@gmail.com",
  },
  { label: "GitHub", href: "https://github.com/haile121" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hailemariam-agabzie/",
  },
  { label: "X (Twitter)", href: "https://x.com/haile_121" },
  { label: "Telegram DM", href: "https://t.me/Mati_12021" },
  {
    label: "Telegram Channel",
    href: "https://t.me/haileDev12X",
  },
];
