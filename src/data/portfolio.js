export const appViews = [
  {
    path: "/",
    label: "Overview",
    shortLabel: "Home",
    subtitle: "Snapshot",
    icon: "LayoutGrid",
    tone: "sky",
  },
  {
    path: "/experience",
    label: "Experience",
    shortLabel: "Work",
    subtitle: "Career",
    icon: "BriefcaseBusiness",
    tone: "amber",
  },
  {
    path: "/skills",
    label: "Skills",
    shortLabel: "Stack",
    subtitle: "Toolkit",
    icon: "Layers3",
    tone: "green",
  },
  {
    path: "/projects",
    label: "Projects",
    shortLabel: "Builds",
    subtitle: "Shipped work",
    icon: "FolderKanban",
    tone: "violet",
  },
  {
    path: "/achievements",
    label: "Achievements",
    shortLabel: "Wins",
    subtitle: "Signal",
    icon: "Trophy",
    tone: "rose",
  },
  {
    path: "/education",
    label: "Education",
    shortLabel: "Study",
    subtitle: "Foundation",
    icon: "GraduationCap",
    tone: "sky",
  },
  {
    path: "/contact",
    label: "Contact",
    shortLabel: "Contact",
    subtitle: "Reach out",
    icon: "Send",
    tone: "slate",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/hkshakib" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hkshakib/" },
  { label: "CodeChef", href: "https://www.codechef.com/users/hkshakib" },
  { label: "Codeforces", href: "https://codeforces.com/profile/_Bohemian" },
];

export const portfolio = {
  name: "MD Humayun Kibria Shakib",
  shortName: "Shakib",
  role: "Full-Stack AI Engineer",
  titleLine: "Full-stack engineer specializing in AI-driven SaaS ecosystems",
  location: "Kocaeli, Izmit, Turkey",
  availability: "Open to B2B / Remote Worldwide",
  email: "hkshakib.cse@gmail.com",
  phone: "+90 535 442 7438",
  resume: "/hkshakib-resume.pdf",
  headline:
    "Building AI products that feel sharp on the surface and solid underneath.",
  intro:
    "I work across interface systems, backend architecture, and production AI workflows. My recent focus has been shipping SaaS products that span web, mobile, billing, admin operations, and the infrastructure required to keep them dependable.",
  summary:
    "Proven track record of launching commercial products across iOS, Android, and web from conception to production, with strong foundations in FastAPI, React, scalable infrastructure, and high-performance problem solving.",
  heroBullets: [
    "Commercial product delivery across Web, iOS, and Android",
    "FastAPI, React, Flutter, Supabase, Databricks, and AI SDK workflows",
    "Strong algorithmic foundation from 3000+ solved programming problems",
  ],
  metrics: [
    { value: "10M+", label: "records migrated into Databricks SQL" },
    { value: "3000+", label: "algorithmic problems solved" },
    { value: "Full Web + Mobile", label: "product ecosystems shipped" },
  ],
  desktopNotes: [
    "macOS-inspired desktop workspace",
    "Android-inspired mobile app shell",
    "Single design system, two device personalities",
  ],
};

export const about = {
  paragraphs: [
    "I build full-stack systems where product quality and engineering discipline carry equal weight. My work usually spans admin tooling, subscription logic, AI orchestration, frontend polish, and the deployment path that turns prototypes into real products.",
    "What excites me most is shaping the entire product surface, then making sure the backend, data layer, and delivery workflows are just as thoughtful as the interface. I like systems that feel calm to use and predictable to maintain.",
  ],
  focusAreas: [
    {
      title: "AI Product Architecture",
      description:
        "Designing AI workbenches, backend flows, and operational tooling around OpenAI and Gemini-based systems.",
    },
    {
      title: "Frontend Systems",
      description:
        "Building reusable React interfaces with strong hierarchy, refined interaction design, and cross-device consistency.",
    },
    {
      title: "Platform Delivery",
      description:
        "Connecting auth, data, storage, billing, deployment, and monitoring into one coherent delivery pipeline.",
    },
  ],
};

export const experiences = [
  {
    company: "BizClicQ",
    role: "Full-Stack AI Engineer",
    location: "London, UK",
    period: "May 2025 - Present",
    bullets: [
      "Architected and deployed a full AI SaaS ecosystem solo across web, mobile, and a centralized backend.",
      "Built an admin command center with role-based access control for system-wide operational oversight.",
      "Engineered an AI-agent workbench on Render using OpenAI and Gemini workflows, backed by Supabase and Cloudflare R2.",
      "Delivered Flutter mobile apps and React web apps with feature parity, plus Stripe and in-app purchase flows for subscriptions.",
    ],
  },
  {
    company: "Spark Sight Solution",
    role: "Machine Learning Engineer",
    location: "London, UK",
    period: "Oct 2024 - Apr 2025",
    bullets: [
      "Migrated enterprise-scale datasets with 10M+ records into Databricks SQL to improve query performance.",
      "Built production-grade data pipelines supporting large-scale analytics and machine learning workloads.",
    ],
  },
  {
    company: "LIILab",
    role: "Software Engineer",
    location: "Sylhet, Bangladesh",
    period: "Mar 2021 - Jan 2022",
    bullets: [
      "Developed high-performance backend services with Django REST Framework and optimized complex API query paths.",
      "Improved delivery speed by refining Django MVT workflows, contributing to a 40% faster deployment cycle.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "C", "Java", "Dart"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Next.js App Router",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Framer Motion",
      "Material UI",
      "Chakra UI",
      "Radix UI",
      "React Router DOM",
    ],
  },
  {
    title: "State & Client Patterns",
    items: [
      "Redux",
      "Redux Toolkit",
      "React Query",
      "Zod",
      "Design Pattern",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "FastAPI",
      "Django",
      "Django REST Framework",
      "RBAC",
      "Redis",
      "Djoser",
      "JWT Authentication",
      "NextAuth",
      "Celery",
      "Celery Beat",
      "Web Scraping",
    ],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "Riverpod", "GoRouter", "IAP Integration"],
  },
  {
    title: "Data & Storage",
    items: [
      "PostgreSQL",
      "MySQL",
      "Databricks SQL",
      "Supabase",
      "Firebase",
      "Cloudflare R2",
    ],
  },
  {
    title: "DevOps & Platform",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "Railway",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Stripe",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "OpenAI SDKs",
      "Gemini SDKs",
      "NLP",
      "Text-To-Speech",
      "Reinforcement Learning",
      "ANN",
    ],
  },
  {
    title: "Additional Working Knowledge",
    items: ["WordPress"],
  },
];

export const projects = [
  {
    title: "CopyAD AI",
    eyebrow: "AI Ad Platform",
    summary:
      "AI content platform focused on producing high-conversion ad assets with modular frontend architecture and secure account workflows.",
    stack: ["React", "FastAPI", "OpenAI"],
    highlights: [
      "Integrated GPT-powered content generation into a production workflow.",
      "Built the interface as a scalable component system with strong reuse across flows.",
      "Shaped authentication and backend foundations for secure multi-channel usage.",
    ],
    links: [{ label: "Code", href: "https://github.com/hkshakib/copyad-backend" }],
  },
  {
    title: "LUXHAVEN Backend",
    eyebrow: "Commerce Infrastructure",
    summary:
      "A Django-based commerce backend designed for reliability under load, cleaner data modeling, and faster response times.",
    stack: ["Python", "Django", "PostgreSQL"],
    highlights: [
      "Architected a backend capable of supporting 1,000+ concurrent users.",
      "Reduced response times by 35% through indexing and schema refinement.",
      "Focused on predictable data access patterns and cleaner API structure.",
    ],
    links: [{ label: "Code", href: "https://github.com/hkshakib/luxehaven" }],
  },
  {
    title: "Issue Tracker",
    eyebrow: "Workflow Product",
    summary:
      "A polished issue management product with structured workflows for creating, assigning, filtering, and updating work items.",
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL", "Zod", "NextAuth"],
    highlights: [
      "Implemented Google authentication with role-aware actions.",
      "Added markdown support, filtering, sorting, and assignment workflows.",
      "Deployed with Railway-backed data and a Vercel frontend.",
    ],
    links: [
      { label: "Code", href: "https://github.com/hkshakib/issue-tracker" },
      { label: "Live", href: "https://issue-tracker-nine-kappa.vercel.app/" },
    ],
  },
  {
    title: "PlayerHub",
    eyebrow: "Game Discovery UI",
    summary:
      "A polished RAWG-inspired game browsing interface built to explore search, filters, platform views, and faster client-side interaction design.",
    stack: ["React", "Vite", "TypeScript", "Custom Hooks"],
    highlights: [
      "Built a clean interactive browsing experience around external API data.",
      "Focused on client state, filtering, sorting, and category-driven discovery.",
      "Used the project to sharpen component structure and data-driven UI thinking.",
    ],
    links: [
      { label: "Code", href: "https://github.com/hkshakib/playerhub" },
      { label: "Live", href: "https://rawg-clone-chi.vercel.app/" },
    ],
  },
  {
    title: "React Fun Box",
    eyebrow: "Learning Sandbox",
    summary:
      "A compact collection of mini applications including a calculator, to-do list, quiz, snake, memory game, and tic-tac-toe.",
    stack: ["React", "React Router DOM", "React Icons"],
    highlights: [
      "Built as a hands-on playground to improve interaction design and state management.",
      "Packaged multiple small experiences into one reusable interface shell.",
      "Used the project to accelerate practical frontend iteration speed.",
    ],
    links: [
      { label: "Code", href: "https://github.com/hkshakib/reactfunbox" },
      { label: "Live", href: "https://reactfunbox.vercel.app/" },
    ],
  },
  {
    title: "Prosody-Controlled TTS",
    eyebrow: "Thesis Research",
    summary:
      "A Bengali text-to-speech research project exploring natural-sounding speech generation with stronger prosody and pitch control.",
    stack: ["NLP", "VITS", "Tacotron 2", "FastPitch"],
    highlights: [
      "Explored neural approaches for more natural Bangla speech synthesis.",
      "Worked on prosody and intonation control inside the generation pipeline.",
      "Built the project as a fourth-year thesis in software engineering.",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/hkshakib/Prosody-Controlled-TTS",
      },
    ],
  },
];

export const achievements = [
  {
    title: "IEEE Xtreme 14.0",
    detail: "Ranked Top 6 in Bangladesh with Team LUZeroIQ among 200+ teams.",
  },
  {
    title: "Problem Solving",
    detail: "Solved 3000+ algorithmic problems across major online judges.",
  },
  {
    title: "CodeChef",
    detail: "Reached 4-star status with a maximum rating of 1938.",
  },
  {
    title: "Codeforces",
    detail: "Earned Specialist rank with a maximum rating of 1543.",
  },
  {
    title: "ICPC",
    detail: "Participated in ICPC Dhaka Regional 2021.",
  },
  {
    title: "Recognition",
    detail: "Recognized for high-performance algorithm design and disciplined problem solving.",
  },
];

export const education = [
  {
    school: "Kocaeli University",
    degree: "MSc in Software Engineering",
    period: "Feb 2026 - Present",
    location: "Turkey",
  },
  {
    school: "University of Hertfordshire",
    degree: "MSc in Artificial Intelligence and Robotics",
    period: "Graduated Sep 2025",
    location: "UK",
  },
  {
    school: "Leading University",
    degree: "BSc in Computer Science and Engineering",
    period: "Graduated Jul 2022",
    location: "Bangladesh",
  },
];
