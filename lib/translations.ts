import {
  education,
  experience,
  interests,
  languages,
  personal,
  projects,
  skills,
  stats,
} from "@/lib/portfolio-data"
import type { Language } from "@/lib/language-context"

const spanish = {
  nav: ["Sobre mí", "Habilidades", "Experiencia", "Proyectos", "Contacto"],
  hero: {
    availability: "Disponible para puestos junior de desarrollo full-stack",
    greeting: "Hola, soy",
    tagline:
      "Desarrollo plataformas web full-stack fiables, desde la base de datos hasta la interfaz.",
    basedIn: "Desde",
    description:
      "creo con Laravel, PHP y JavaScript, convirtiendo problemas reales de centros educativos y empresas en software funcional.",
    projects: "Ver proyectos",
    downloadCv: "Descargar CV",
    stats: ["Años de experiencia en IT y desarrollo", "Repositorios públicos", "Idiomas hablados", "Tecnologías principales"],
    roles: [
      "Desarrollador web full-stack",
      "Desarrollador Laravel y PHP",
      "Técnico superior en DAW",
      "Resolutivo y orientado a soluciones",
    ],
  },
  about: {
    index: "01 — Sobre mí",
    title: "Quién soy",
    bio:
      "Técnico Superior en Desarrollo de Aplicaciones Web (DAW) con una auténtica pasión por la tecnología. Soy comprometido, puntual y perfeccionista con cada línea de código y cada sistema que gestiono. Me encanta aprender continuamente para seguir creciendo en esta profesión; además, aporto liderazgo natural, trabajo en equipo y una actitud positiva que impulsa el día a día.",
    education: "Formación",
    degrees: [
      "Ciclo Formativo de Grado Superior — Desarrollo de Aplicaciones Web (DAW)",
      "Ciclo Formativo de Grado Medio — Sistemas Microinformáticos y Redes (SMIR)",
    ],
    languages: "Idiomas",
    languageNames: ["Español", "Catalán", "Inglés"],
    languageLevels: ["Nativo", "Nativo", "Avanzado"],
    beyondCode: "Más allá del código",
    interests: ["Desarrollo de aplicaciones", "Videojuegos", "Deporte", "Hackatones", "Desarrollo de videojuegos"],
  },
  skills: {
    index: "02 — Habilidades",
    title: "Con qué trabajo",
    subtitle:
      "Un conjunto práctico de habilidades desarrollado en prácticas reales, proyectos académicos y aprendizaje continuo.",
    categories: [
      "Desarrollo back-end",
      "Frameworks (Laravel)",
      "Bases de datos y SQL",
      "API REST",
      "Administración de sistemas",
      "Mantenimiento de hardware",
      "Desarrollo front-end",
      "Redes",
      "Pruebas y control de calidad",
      "Comunicación efectiva",
    ],
    levels: { Beginner: "Inicial", Intermediate: "Intermedio", Advanced: "Avanzado", Expert: "Experto" },
    stack: "Tecnologías y herramientas",
  },
  experience: {
    index: "03 — Experiencia",
    title: "Dónde he trabajado",
    subtitle:
      "Experiencia práctica que me ha llevado del soporte IT al desarrollo integral de plataformas full-stack.",
    roles: ["Desarrollador web", "Técnico IT junior", "Técnico IT junior"],
    current: "Actual",
    points: [
      [
        "Desarrollé una plataforma web completa para reservar y gestionar material y aulas.",
        "Implementé un sistema de tickets para gestionar incidencias y solicitudes.",
        "Integré y consumí API REST en toda la aplicación.",
        "Desarrollé tanto el front-end (JavaScript y Blade) como el back-end (Laravel y PHP).",
        "Diseñé, creé e implementé la base de datos del proyecto desde cero.",
        "Desplegué y probé la aplicación en el entorno local del instituto.",
        "Participé en las pruebas y validación previas a su puesta en marcha a mayor escala.",
      ],
      [
        "Mantuve y di soporte a la infraestructura IT de la empresa.",
        "Reparé y mantuve equipos informáticos.",
        "Instalé y configuré sistemas operativos.",
        "Gestioné y mantuve el servidor local.",
        "Implementé un sistema de códigos QR para gestionar el almacén desde la intranet de la empresa.",
        "Di soporte y desarrollé soluciones de software internas.",
        "Generé imágenes creadas con IA para clientes de la empresa.",
      ],
      [
        "Resolví incidencias técnicas de hardware y software.",
        "Monté, desmonté y mantuve equipos informáticos.",
        "Mantuve y configuré los dispositivos del centro.",
        "Gestioné incidencias mediante herramientas de tickets.",
        "Ofrecí soporte técnico a los usuarios del centro.",
        "Diagnostiqué y resolví una amplia variedad de problemas IT.",
      ],
    ],
  },
  projects: {
    index: "04 — Proyectos",
    title: "Proyectos destacados",
    subtitle:
      "Proyectos reales de mis prácticas y formación académica, públicos y disponibles en GitHub.",
    titles: [
      "Portfolio personal — Esta web",
      "Centre Villar — Plataforma de reservas",
      "Proyecto0616 — Aplicación colaborativa con Laravel",
      "Mi portfolio web",
    ],
    descriptions: [
      "Portfolio de desarrollador con estética futurista, creado con Next.js, Tailwind y Motion para mostrar mis habilidades, experiencia y proyectos.",
      "Plataforma web para reservar aulas y material, con un sistema interno de tickets para incidencias.",
      "Proyecto de clase colaborativo para practicar flujos CRUD full-stack con Laravel y Blade.",
      "Portfolio personal estático en HTML y CSS, creado para el módulo M06 y publicado con GitHub Pages.",
    ],
    longDescriptions: [
      "La web que estás visitando. Un portfolio moderno y animado, creado con Next.js App Router, Tailwind CSS y Motion. Incluye secciones con animaciones al desplazarse, un titular dinámico, una cuadrícula de habilidades animada, una cronología profesional y un formulario de contacto funcional.",
      "Plataforma full-stack desarrollada durante mi etapa en Centre Villar para gestionar y reservar material escolar y aulas. Incluye un módulo de tickets para incidencias y solicitudes, una base de datos diseñada a medida e integración de API REST.",
      "Aplicación colaborativa desarrollada con un compañero para practicar desarrollo full-stack, plantillas Blade y flujos de trabajo Git en equipo con ramas y pull requests.",
      "Portfolio personal estático creado para el módulo M0614, centrado en HTML5 semántico, CSS3 y un flujo de trabajo limpio con Git y GitHub, en colaboración con un compañero y con despliegue continuo mediante GitHub Pages.",
    ],
    statuses: { "In development": "En desarrollo", Completed: "Completado", "Academic project": "Proyecto académico" },
    code: "Código",
    demo: "Demo en directo",
    more: "¿Quieres ver más? Todos mis repositorios son públicos.",
    github: "Ver perfil de GitHub",
  },
  contact: {
    index: "05 — Contacto",
    title: "Construyamos algo juntos",
    subtitle:
      "Estoy buscando oportunidades junior de desarrollo full-stack. Escríbeme; normalmente respondo en un día.",
    labels: ["Correo", "Teléfono", "Ubicación", "GitHub"],
  },
  footer: { rights: "Todos los derechos reservados.", built: "Hecho con" },
}

export function getPortfolioContent(language: Language) {
  const isSpanish = language === "es"

  if (!isSpanish) {
    return {
      nav: ["About", "Skills", "Experience", "Projects", "Contact"],
      hero: {
        availability: "Available for junior full-stack roles",
        greeting: "Hi, I'm",
        tagline: personal.tagline,
        basedIn: "Based in",
        description:
          "I build with Laravel, PHP and JavaScript — turning real institute and business problems into working software.",
        projects: "View Projects",
        downloadCv: "Download CV",
        roles: personal.roles,
      },
      about: {
        index: "01 — About",
        title: "Who I am",
        bio: personal.bio,
        education: "Education",
        languages: "Languages",
        beyondCode: "Beyond Code",
      },
      skillsCopy: {
        index: "02 — Skills",
        title: "What I work with",
        subtitle:
          "A practical skill set built through real internships, academic projects, and constant self-learning.",
        stack: "Tech Stack & Tools",
        levels: { Beginner: "Beginner", Intermediate: "Intermediate", Advanced: "Advanced", Expert: "Expert" },
      },
      experienceCopy: {
        index: "03 — Experience",
        title: "Where I've worked",
        subtitle:
          "Hands-on roles that took me from IT support to building full-stack platforms end to end.",
        current: "Current",
      },
      projectsCopy: {
        index: "04 — Projects",
        title: "Selected work",
        subtitle:
          "Real projects from my internship and academic path — all public and open to explore on GitHub.",
        code: "Code",
        demo: "Live demo",
        more: "Want to see more? All my repositories are public.",
        github: "View GitHub Profile",
      },
      contact: {
        index: "05 — Contact",
        title: "Let's build something together",
        subtitle:
          "I'm actively looking for junior full-stack opportunities. Reach out — I usually reply within a day.",
        labels: ["Email", "Phone", "Location", "GitHub"],
      },
      footer: { rights: "All rights reserved.", built: "Built with" },
      personal,
      stats,
      skills,
      education,
      languages,
      interests,
      experience,
      projects,
    }
  }

  return {
    nav: spanish.nav,
    hero: spanish.hero,
    about: spanish.about,
    skillsCopy: spanish.skills,
    experienceCopy: spanish.experience,
    projectsCopy: spanish.projects,
    contact: spanish.contact,
    footer: spanish.footer,
    personal: {
      ...personal,
      bio: spanish.about.bio,
      tagline: spanish.hero.tagline,
      roles: spanish.hero.roles,
    },
    stats: stats.map((stat, index) => ({ ...stat, label: spanish.hero.stats[index] })),
    skills: skills.map((skill, index) => ({
      ...skill,
      category: spanish.skills.categories[index],
      levelLabel: spanish.skills.levels[skill.level],
    })),
    education: education.map((item, index) => ({ ...item, degree: spanish.about.degrees[index] })),
    languages: languages.map((item, index) => ({
      ...item,
      name: spanish.about.languageNames[index],
      level: spanish.about.languageLevels[index],
    })),
    interests: spanish.about.interests,
    experience: experience.map((item, index) => ({
      ...item,
      role: spanish.experience.roles[index],
      points: spanish.experience.points[index],
    })),
    projects: projects.map((project, index) => ({
      ...project,
      title: spanish.projects.titles[index],
      description: spanish.projects.descriptions[index],
      longDescription: spanish.projects.longDescriptions[index],
      status: spanish.projects.statuses[project.status],
    })),
  }
}
