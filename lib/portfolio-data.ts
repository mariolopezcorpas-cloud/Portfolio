export const personal = {
  name: "Mario López Corpas",
  firstName: "Mario",
  lastName: "López Corpas",
  role: "Full-Stack Web Developer",
  roles: [
    "Full-Stack Web Developer",
    "Laravel & PHP Developer",
    "Junior DAW Graduate",
    "Problem Solver",
  ],
  location: "Sant Boi de Llobregat, Barcelona",
  email: "mariolopezcorpas@gmail.com",
  phone: "+34 662 91 11 39",
  github: "https://github.com/mlopezdaw2n25",
  linkedin: "https://www.linkedin.com/in/mario-lopez-816b37384/",
  cvUrl: "/cv/Mario-Lopez-Corpas-CV.pdf",
  bio:
    "Higher Technician in Web Application Development (DAW) with a genuine passion for technology. I'm committed, punctual and a perfectionist with every line of code and every system I manage. I love learning constantly to keep climbing the ladder in this profession — and I bring natural leadership, strong teamwork and a positive attitude that keeps momentum going day to day.",
  tagline:
    "Building reliable, full-stack web platforms — from database to interface.",
}

export const stats = [
  { label: "Years of hands-on IT & Dev", value: "3+" },
  { label: "Public repositories", value: "4+" },
  { label: "Languages spoken", value: "3" },
  { label: "Core stack", value: "PHP / Laravel" },
]

export type SkillCategory = {
  category: string
  icon: "server" | "layout" | "layers" | "database" | "plug" | "settings" | "network" | "flask" | "cpu" | "users"
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  percent: number
}

export const skills: SkillCategory[] = [
  { category: "Back-end Development", icon: "server", level: "Advanced", percent: 85 },
  { category: "Frameworks (Laravel)", icon: "layers", level: "Advanced", percent: 85 },
  { category: "Databases & SQL", icon: "database", level: "Advanced", percent: 85 },
  { category: "REST APIs", icon: "plug", level: "Advanced", percent: 85 },
  { category: "Systems Management", icon: "settings", level: "Advanced", percent: 80 },
  { category: "Hardware Maintenance", icon: "cpu", level: "Advanced", percent: 80 },
  { category: "Front-end Development", icon: "layout", level: "Intermediate", percent: 65 },
  { category: "Networking", icon: "network", level: "Intermediate", percent: 60 },
  { category: "Testing & QA", icon: "flask", level: "Intermediate", percent: 60 },
  { category: "Effective Communication", icon: "users", level: "Expert", percent: 95 },
]

export const techStack = [
  "PHP",
  "Laravel",
  "Blade",
  "JavaScript",
  "HTML5",
  "CSS3",
  "MySQL",
  "REST APIs",
  "Git & GitHub",
  "Linux",
  "Networking",
  "AWS (in progress)",
]

export const languages = [
  { name: "Spanish", level: "Native", percent: 100 },
  { name: "Catalan", level: "Native", percent: 100 },
  { name: "English", level: "Advanced", percent: 80 },
]

export type ExperienceItem = {
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "Centre Villar",
    location: "Gràcia, Barcelona",
    period: "Nov 2025 — Jul 2026",
    current: true,
    points: [
      "Developed a full web platform for booking and managing school materials and classrooms.",
      "Implemented a ticketing system for incident and request management.",
      "Integrated and consumed REST APIs across the application.",
      "Built both the front-end (JavaScript & Blade) and back-end (Laravel / PHP).",
      "Designed, created and implemented the project's database from scratch.",
      "Deployed and tested the application in the institute's local environment.",
      "Took part in the testing and validation phase prior to larger-scale rollout.",
    ],
  },
  {
    role: "Junior IT Technician",
    company: "Inters Moving",
    location: "Viladecans, Barcelona",
    period: "Oct 2023 — Jan 2024",
    points: [
      "Maintained and supported IT infrastructure for the company.",
      "Repaired and maintained computer equipment.",
      "Installed and configured operating systems.",
      "Managed and maintained the local server.",
      "Implemented a QR-code system for warehouse management via the company intranet.",
      "Supported and developed internal software solutions.",
      "Generated AI-created images for company clients.",
    ],
  },
  {
    role: "Junior IT Technician",
    company: "IES El Calamot",
    location: "Gavà, Barcelona",
    period: "May 2023 — Jul 2023",
    points: [
      "Resolved technical hardware and software incidents.",
      "Assembled, disassembled and maintained computer equipment.",
      "Maintained and configured the center's devices.",
      "Managed incidents through ticketing tools.",
      "Provided technical support to the center's users.",
      "Diagnosed and resolved a wide range of IT issues.",
    ],
  },
]

export type EducationItem = {
  degree: string
  school: string
  location: string
  period: string
}

export const education: EducationItem[] = [
  {
    degree: "Higher Vocational Training — Full-Stack Web App Development (DAW)",
    school: "Mare de Déu de la Mercè",
    location: "Barcelona",
    period: "Oct 2024 — Jun 2026",
  },
  {
    degree: "Mid-Level Vocational Training — Microcomputer Systems & Networks (SMIR)",
    school: "Marianao",
    location: "Sant Boi de Llobregat",
    period: "Sep 2021 — Dec 2023",
  },
]

export type Project = {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  github: string
  demo?: string
  featured?: boolean
  status: "In development" | "Completed" | "Academic project"
}

export const projects: Project[] = [
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio — This Website",
    description:
      "This dark, futuristic developer portfolio — built with Next.js, Tailwind and Motion, showcasing my skills, experience and projects.",
    longDescription:
      "The site you're browsing right now. A modern, animated portfolio built with Next.js App Router, Tailwind CSS and Motion, featuring reveal-on-scroll sections, a typed hero, an animated skills grid, an experience timeline and a working contact form.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
    github: "https://github.com/mariolopezcorpas-cloud/Portfolio",
    featured: true,
    status: "Completed",
  },
  {
    slug: "villar-practicas",
    title: "Centre Villar — Booking Platform",
    description:
      "Web platform for booking classrooms and material, with an internal incident ticketing system.",
    longDescription:
      "Full-stack platform built during my role at Centre Villar to manage and reserve school materials and classrooms. Includes a ticketing module for incidents and requests, a custom-designed database, and REST API integration across the app.",
    tags: ["PHP", "Laravel", "Blade", "MySQL", "REST API"],
    github: "https://github.com/mlopezdaw2n25/VillarPracticas",
    featured: true,
    status: "In development",
  },
  {
    slug: "proyecto0616",
    title: "Proyecto0616 — Collaborative Laravel App",
    description:
      "Class project built collaboratively, practicing full-stack CRUD flows with Laravel & Blade.",
    longDescription:
      "A collaborative Laravel application developed together with a classmate to practice full-stack development, Blade templating, and team-based Git workflows including branching and pull requests.",
    tags: ["PHP", "Laravel", "Blade", "Git"],
    github: "https://github.com/mlopezdaw2n25/proyecto0616",
    featured: true,
    status: "Academic project",
  },
  {
    slug: "portafoli-m0614",
    title: "El Meu Portafoli Web",
    description:
      "Static HTML/CSS personal portfolio built for the M06 module, deployed with GitHub Pages.",
    longDescription:
      "A static personal portfolio website built for the M0614 module, focused on semantic HTML5, CSS3 and a clean Git & GitHub workflow, including collaboration with a classmate and continuous deployment via GitHub Pages.",
    tags: ["HTML5", "CSS3", "Git", "GitHub Pages"],
    github: "https://github.com/mlopezdaw2n25/portafoli-M0614-AEA3",
    demo: "https://mlopezdaw2n25.github.io/portafoli-M0614-AEA3/",
    featured: true,
    status: "Academic project",
  },
]

export const interests = [
  "App Development",
  "Video Games",
  "Sports",
  "Hackathons",
  "Game Development",
]
