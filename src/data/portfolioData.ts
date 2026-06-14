// Personal Information
export const personalInfo = {
  name: 'Rahul Singh',
  title: 'Senior Java Fullstack Developer',
  tagline: '5+ years of experience in designing scalable microservices',
  email: 'rahulsingh14769@gmail.com',
  phone: '+91-8084165567',
  linkedInUrl: 'https://www.linkedin.com/in/rahulsingh-morningstar/',
  linkedInLabel: 'LinkedIn',
  resumePath: '/Resume.pdf',
};

// About Section Data
export const aboutSection = {
  professionalSummary:
    "I am a performance-driven Senior Software Engineer with over 5 years of professional experience specializing in architecting, developing, and deploying scalable, high-accuracy enterprise solutions. My expertise spans Java, Spring Boot, ReactJS, and I have delivered high-accuracy systems for the banking and insurance sectors. I focus on application modernization, distributed transaction management, and event-driven microservices.",
  skills: [
    'Java',
    'Spring Boot',
    'Hibernate',
    'MySQL',
    'Git',
    'Agile',
    'RESTful APIs',
    'ReactJS',
    'Apache Kafka',
    'Microservices',
    'Domain-Driven Design',
  ],
};

// Project Type
export type ProjectType = 'Work' | 'Personal';

// Project Interface
export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  techStack: string[];
  link?: string;
  featured?: boolean;
}

// Projects Data
export const projects: Project[] = [
  {
    id: 'bwc-modernization',
    title: 'Business Network Controller (BNC) Modernization',
    description:
      'Migrated a massive network management monolith built on the OpenDaylight framework to a decoupled microservices architecture. Designed network data models using YANG and automated code generation via Maven. Successfully isolated Northbound and Southbound communication layers.',
    type: 'Work',
    techStack: ['Spring Boot', 'Microservices', 'YANG', 'NetConf', 'RestConf'],
    link: '',
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy System Modernization',
    description:
      'Modernized legacy insurance data ingestion pipelines to process real-time streams from diverse IoT devices. Decomposed the legacy monolith into distinct bounded contexts (Claims, Policy Management, Risk Assessment) using Domain-Driven Design principles.',
    type: 'Work',
    techStack: ['Spring Boot', 'ReactJS', 'DDD Patterns', 'Message Brokers'],
    link: '',
  },
  {
    id: 'the-patient-file',
    title: 'The Patient File',
    description:
      'A personal fullstack project demonstrating modern React frontend architecture with clean component design and responsive layouts. Features a highlighted project card with direct GitHub integration.',
    type: 'Personal',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/rahulsingh14769-alt/thepatientfile',
    featured: true,
  },
];