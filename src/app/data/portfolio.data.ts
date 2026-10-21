// Edita este archivo con tu información: todo el portafolio se genera a partir de aquí.
import { Education, Experience, Profile, Project, SkillGroup } from './portfolio.models';

export const PROFILE: Profile = {
  name: 'Nestor Quiroga Suárez',
  role: 'Full Stack Software Engineer',
  tagline:
    'Construyo soluciones full stack con .NET, Node.js, Angular y React para los sectores financiero, fintech y sourcing, con Clean Architecture y desarrollo asistido por IA.',
  location: 'Medellín, Colombia',
  email: 'nqs48@hotmail.com',
  available: true,
  cvUrl: 'cv-nestor-quiroga.pdf',
  about: [
    'Soy Full Stack Software Engineer con 4 años de experiencia como consultor de desarrollo, entregando soluciones para clientes de los sectores financiero, fintech y sourcing con C#/.NET Core, Node.js, Angular y React.',
    'Me especializo en Clean Architecture, arquitectura hexagonal y micro-frontends. Integro la IA en el ciclo de desarrollo con Claude y GitHub Copilot, bajo Agentic Spec-Driven Development (ASDD) y supervisión humana (HITL), para acelerar las entregas sin sacrificar calidad ni arquitectura.',
    'He liderado técnicamente el frontend de mi equipo y apoyo la mentoría y el onboarding de nuevos desarrolladores. Trabajo en equipos ágiles con Scrum y Kanban, y hablo inglés en nivel B2.',
  ],
  stats: [
    { value: '4+', label: 'años de experiencia' },
    { value: '85 %', label: 'cobertura de pruebas unitarias' },
    { value: '3,5 s', label: 'por transacción (límite de 6 s)' },
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/nqs48', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nqs48/', icon: 'linkedin' },
    { label: 'Correo', url: 'mailto:nqs48@hotmail.com', icon: 'mail' },
  ],
};

export const SKILLS: SkillGroup[] = [
  {
    area: 'Frontend',
    description: 'Interfaces modulares con componentes reutilizables.',
    skills: ['Angular', 'React', 'React Native', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Styled Components'],
  },
  {
    area: 'Backend',
    description: 'APIs y microservicios probados y documentados.',
    skills: ['.NET Core', 'C#', 'Node.js', 'NestJS', 'Entity Framework', 'Dapper', 'Sequelize', 'REST', 'GraphQL', 'Swagger'],
  },
  {
    area: 'Bases de datos',
    description: 'Modelado relacional y documental.',
    skills: ['SQL Server', 'MySQL', 'MongoDB', 'Firestore'],
  },
  {
    area: 'DevOps y nube',
    description: 'Servicios en la nube, mensajería y monitoreo.',
    skills: ['AWS', 'Azure DevOps', 'Kubernetes', 'Azure Service Bus', 'Azure Logic Apps', 'Azure Blob Storage', 'RabbitMQ'],
  },
  {
    area: 'IA aplicada al desarrollo',
    description: 'IA en el ciclo de desarrollo, siempre con supervisión humana.',
    skills: ['Claude', 'Claude Code', 'GitHub Copilot', 'ASDD', 'Human in the Loop'],
  },
  {
    area: 'Arquitectura y testing',
    description: 'Código limpio, mantenible y con pruebas.',
    skills: ['Clean Architecture', 'Hexagonal', 'DDD', 'Micro-frontends', 'Atomic Design', 'xUnit', 'Jest', 'Karma'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Gestión de plásticos de tarjetas',
    summary:
      'Aplicación para gestionar los plásticos de tarjetas débito y crédito, con control de inventario por agencia y solicitud de lotes.',
    category: 'Fullstack',
    client: 'Cooperativa JFK · sector financiero',
    stack: ['.NET Core', 'C#', 'Dapper', 'Entity Framework', 'SQL Server', 'Azure Service Bus', 'Kubernetes'],
    highlights: [
      'Transacciones en ~3,5 s frente a un límite de 6 s',
      '85 % de cobertura de pruebas con xUnit',
      'Desarrollo asistido por IA (ASDD + HITL)',
    ],
    featured: true,
  },
  {
    title: 'Negociación con proveedores',
    summary:
      'Plataforma web responsiva para gestionar negociaciones con proveedores, desde la creación del proceso hasta la adjudicación con rondas de selección.',
    category: 'Fullstack',
    client: 'SUMMA · sourcing tech',
    stack: ['Angular', 'Node.js', 'Sequelize', 'MySQL', 'MongoDB', 'Azure Logic Apps', 'AWS'],
    highlights: [
      'Gestión de contratos y firma con Adobe Sign',
      'Módulos de PQRS y evaluación de proveedores',
      'Frontend modular alineado al diseño corporativo',
    ],
    featured: true,
  },
  {
    title: 'App móvil fintech',
    summary: 'Navegación y componentes de una app financiera para iOS y Android, con manejo de permisos y datos del dispositivo.',
    category: 'Móvil',
    client: 'Dale · fintech',
    stack: ['React Native', 'Styled Components', 'GraphQL', 'Auth0'],
    highlights: ['Navegación para iOS y Android', 'Custom hooks y hooks nativos', 'Gestión de permisos del dispositivo'],
  },
  {
    title: 'Juego de cartas en línea',
    summary: 'Juego multijugador con arquitectura limpia y DDD, inicio de sesión con Google y mensajería en tiempo real.',
    category: 'Fullstack',
    client: 'Sofka University · formación',
    stack: ['Angular', 'Java', 'Spring Boot', 'WebSockets', 'DDD'],
    highlights: ['Partidas en tiempo real con WebSockets', 'Autenticación con Google', 'Arquitectura limpia y DDD'],
  },
  {
    title: 'Tienda de tarjetas',
    summary: 'Aplicación SPA que consume una API pública, con autenticación multifactor y persistencia de datos.',
    category: 'Frontend',
    client: 'Sofka University · formación',
    stack: ['Angular', 'TypeScript', 'Node.js'],
    highlights: ['Autenticación multifactor', 'Consumo de API pública', 'Persistencia de datos'],
  },
  {
    title: 'Plataforma de propiedad horizontal',
    summary: 'Módulo frontend y landing page para servicios de propiedad horizontal, fiel al diseño corporativo en Figma.',
    category: 'Frontend',
    client: 'DinDom.co',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    highlights: ['Componentes reutilizables', 'Autenticación y Firestore', 'Landing page de servicios'],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Full Stack Developer y líder de frontend',
    company: 'Cooperativa JFK · vía Sofka Technologies',
    period: 'jun 2025 — Presente',
    description: 'Aplicaciones full stack para la gestión de plásticos de tarjetas débito y crédito en el sector financiero.',
    achievements: [
      'Flujo transaccional completo bajo Clean Architecture, con 85 % de cobertura de pruebas (xUnit).',
      'Optimicé el flujo a ~3,5 s por transacción frente a un límite de 6 s, midiendo cada microservicio.',
      'Incorporé IA al desarrollo con Claude y GitHub Copilot bajo ASDD y HITL.',
      'Lidero técnicamente el frontend y apoyo la mentoría y el onboarding del equipo.',
    ],
    stack: ['C#', '.NET Core', 'Dapper', 'Kubernetes', 'Azure Service Bus', 'RabbitMQ', 'SQL Server'],
  },
  {
    role: 'Full Stack Developer',
    company: 'SUMMA · vía Sofka Technologies',
    period: 'may 2023 — may 2025',
    description: 'Módulos de una plataforma web de negociación con proveedores.',
    achievements: [
      'Flujo de negociación desde la creación del proceso hasta la adjudicación.',
      'Módulo de contratos con asignación de tareas y firma en Adobe Sign vía Azure Logic Apps.',
      'Módulos de PQRS y evaluación de proveedores con componentes reutilizables.',
    ],
    stack: ['Angular', 'Node.js', 'Sequelize', 'MySQL', 'MongoDB', 'AWS', 'Azure DevOps'],
  },
  {
    role: 'Mobile Developer',
    company: 'Dale · vía Sofka Technologies',
    period: 'dic 2022 — abr 2023',
    description: 'App móvil fintech para iOS y Android.',
    achievements: [
      'Navegación de la app con manejo de permisos y acceso a información del dispositivo.',
      'Componentes con Styled Components, custom hooks y hooks nativos.',
    ],
    stack: ['React Native', 'Styled Components', 'Auth0', 'GraphQL'],
  },
  {
    role: 'Full Stack Developer Training',
    company: 'Sofka Technologies',
    period: 'ago 2022 — nov 2022',
    description: 'Formación en desarrollo web full stack orientada a banca.',
    achievements: [
      'Tienda de tarjetas SPA con autenticación multifactor.',
      'Juego de cartas en línea con DDD, login con Google y WebSockets.',
    ],
    stack: ['Angular', 'Node.js', 'Java', 'Spring Boot', 'WebSockets'],
  },
  {
    role: 'Frontend Developer Junior',
    company: 'DinDom.co',
    period: 'ene 2022 — jul 2022',
    description: 'Frontend de la aplicación web y landing page de servicios de propiedad horizontal.',
    achievements: [
      'Componentes reutilizables coherentes con el diseño corporativo en Figma.',
      'Integración de Firebase Auth y Firestore.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
  },
];

export const EDUCATION: Education[] = [
  { title: 'Full Stack Web Developer', institution: 'Sofka University Bootcamp', period: '2022' },
  { title: 'Desarrollador de Software', institution: 'Misión TIC 2022 · Universidad de Caldas', period: '2021' },
  { title: 'Ingeniería Mecatrónica (9 semestres cursados)', institution: 'Fundación Universitaria Agraria', period: '2012 — 2018' },
];

export const CERTIFICATIONS: string[] = [
  'Claude 101 y Claude Code 101 · Anthropic Academy',
  'Desarrollo de Aplicaciones Web',
  'Curso Profesional de Git y GitHub · Platzi',
  'Java Intermedio POO · Platzi',
];
