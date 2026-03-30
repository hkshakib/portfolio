export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
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
  location: "Kocaeli, Izmit, Turkey",
  availability: "Open to B2B / Remote Worldwide",
  email: "hkshakib.cse@gmail.com",
  phone: "+90 535 442 7438",
  resume: "/hkshakib-resume.pdf",
  intro:
    "Full-stack engineer specializing in AI-driven SaaS ecosystems, with hands-on experience shipping commercial products across web, iOS, Android, and the backend systems that keep them reliable.",
  headline:
    "Shipping calm, scalable AI products across web, mobile, and the infrastructure underneath.",
  heroNotes: [
    "FastAPI, React, Flutter, and modern AI workflows",
    "Commercial delivery across Web, iOS, and Android",
    "Strong algorithmic foundation from competitive programming",
  ],
  stats: [
    { value: "10M+", label: "records migrated to Databricks SQL" },
    { value: "3000+", label: "algorithmic problems solved" },
    { value: "Web + iOS + Android", label: "product surface shipped together" },
  ],
};

export const about = {
  paragraphs: [
    "I build full-stack systems where product quality and engineering discipline carry equal weight. My recent work has centered on AI-native SaaS, operational tooling, subscriptions, and multi-platform delivery.",
    "I enjoy shaping platforms end to end: backend architecture, AI integrations, admin control centers, polished frontend systems, and the deployment workflows that make shipping feel dependable instead of fragile.",
  ],
  focusAreas: [
    {
      title: "AI Product Architecture",
      description:
        "Designing AI workbenches, orchestration flows, and production-ready backend services around OpenAI and Gemini workflows.",
    },
    {
      title: "Interface Systems",
      description:
        "Building refined React frontends with reusable components, clear hierarchy, and calm interaction design that feels deliberate on desktop and mobile.",
    },
    {
      title: "Platform Delivery",
      description:
        "Connecting data, auth, storage, billing, and deployment into one coherent system using tools like Supabase, Render, Vercel, and Cloudflare R2.",
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
      "Architected and deployed a full AI SaaS ecosystem solo, covering web, mobile, and a centralized backend.",
      "Built an admin command center with role-based access control for operational oversight across the platform.",
      "Engineered an AI-agent workbench on Render using OpenAI and Gemini workflows, backed by Supabase and Cloudflare R2.",
      "Delivered Flutter mobile apps and React web experiences with feature parity, plus Stripe and in-app purchase flows for subscription management.",
    ],
  },
  {
    company: "Spark Sight Solution",
    role: "Machine Learning Engineer",
    location: "London, UK",
    period: "Oct 2024 - Apr 2025",
    bullets: [
      "Migrated enterprise-scale datasets with 10M+ records into Databricks SQL to improve analytics and query performance.",
      "Built production-grade data pipelines supporting large-scale reporting and machine learning workloads.",
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
    title: "Backend & AI",
    items: ["FastAPI", "Django", "RBAC", "Redis", "OpenAI SDKs", "Gemini SDKs"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js App Router", "Tailwind CSS", "Redux"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "Riverpod", "GoRouter", "IAP Integration"],
  },
  {
    title: "Data & Storage",
    items: ["PostgreSQL", "Databricks SQL", "Supabase", "Cloudflare R2"],
  },
  {
    title: "DevOps & Delivery",
    items: ["Vercel", "Render", "GitHub Actions", "Docker", "CI/CD"],
  },
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++"],
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
    links: [
      { label: "Code", href: "https://github.com/hkshakib/copyad-backend" },
    ],
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
      "A polished issue management application with structured workflows for creating, assigning, filtering, and updating work items.",
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL", "Zod", "NextAuth"],
    highlights: [
      "Implemented Google-based authentication with role-aware actions.",
      "Added markdown support, filtering, sorting, and assignment flows.",
      "Deployed the app with Railway-backed data and a Vercel frontend.",
    ],
    links: [
      { label: "Code", href: "https://github.com/hkshakib/issue-tracker" },
      { label: "Live", href: "https://issue-tracker-nine-kappa.vercel.app/" },
    ],
  },
  {
    title: "Prosody-Controlled TTS",
    eyebrow: "Thesis Research",
    summary:
      "A Bengali text-to-speech research project exploring natural-sounding speech generation with better prosody and pitch control.",
    stack: ["NLP", "VITS", "Tacotron 2", "FastPitch"],
    highlights: [
      "Explored neural approaches for more natural Bangla speech synthesis.",
      "Worked on prosody and intonation control inside the generation pipeline.",
      "Built the project as part of a fourth-year thesis in software engineering.",
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
    title: "Competitive Programming",
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
    detail: "Known for high-performance algorithm design and disciplined problem solving.",
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
