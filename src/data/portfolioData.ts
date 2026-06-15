// Personal Information
export const personalInfo = {
  name: 'Rahul Singh',
  title: 'Senior Java Fullstack Developer',
  tagline: 'Performance-driven Senior Software Engineer with over 5 years of experience in designing and deploying scalable Java Fullstack solutions.',
  email: 'rahulsingh14769@gmail.com',
  phone: '+91-8084165567',
  linkedInUrl: 'https://www.linkedin.com/in/rahulsinghmorningstar/',
  linkedInLabel: 'LinkedIn',
  resumePath: '/resume.pdf',
};

// About Section Data
export const aboutSection = {
  professionalSummary:
    "Performance-driven Senior Software Engineer with over 5 years of experience in designing and deploying scalable Java Fullstack solutions. Expert in Spring Boot, Microservices architecture, and ReactJS. Proven track record in the banking and insurance sectors, delivering high-accuracy systems through Agile and DevOps practices. Adept at bridging the gap between robust backend logic and interactive frontend interfaces.",
  skills: [
    'Java',
    'Spring Boot',
    'Hibernate',
    'MySQL',
    'Git',
    'Agile Methodology',
    'RESTful APIs',
    'ReactJS',
    'Apache Kafka',
    'Microservices',
    'Domain-Driven Design',
    'JUnit',
    'Mockito',
    'Jenkins',
    'Maven',
    'Docker',
    'TypeScript',
    'Tailwind CSS',
  ],
};

// Education
export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  details?: string;
}

export const education: Education[] = [
  {
    degree: 'BCA',
    institution: 'Aryabhatta Knowledge University',
    location: 'Patna',
    duration: '08/2017 - 09/2020',
    details: 'Graduated with a CGPA of 7.29.',
  },
];

// Work Experience
export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  duration: string;
  location?: string;
  achievements: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    id: 'accenture',
    title: 'Senior Software Engineer',
    company: 'Accenture',
    duration: '03/2026 - Present',
    achievements: [
      'Application Modernization: Successfully decoupled legacy monolithic services into independent Spring Boot microservices, significantly improving overall system resilience, fault tolerance, and deployment velocity.',
      'Advanced Architecture Implementation: Applied the Saga design pattern to orchestrate distributed transactions, ensuring seamless rollback mechanisms and data consistency across decentralized databases without relying on traditional locking.',
      'Event-Driven Integration: Configured integrated Apache Kafka to handle real-time messaging and event streaming between modernized banking modules, eliminating synchronous bottlenecks.',
      'API Security & Optimization: Developed robust, secure RESTful APIs for client-facing and internal communications, focusing on optimized payload delivery, strategic data pagination, and strict access controls.',
    ],
  },
  {
    id: 'infosys',
    title: 'Senior Associate Consultant',
    company: 'Infosys Limited',
    duration: '05/2024 - 02/2026',
    achievements: [
      'Designed and developed scalable Spring Boot microservices using Spring Data JPA and Hibernate to manage complex enterprise payroll workflows.',
      'Collaborated on Java-based applications using Apache Kafka for real-time data streaming and asynchronous message brokering.',
      'Enhanced frontend interactivity by integrating ReactJS components with RESTful backend services, ensuring a seamless user experience.',
      'Optimized data retrieval and system performance by 35% through advanced SQL query optimization and strategic pagination.',
      'Actively participated in the full SDLC, from API design using NETCONF/RESTCONF to deployment in containerized environments.',
    ],
  },
  {
    id: 'tcs',
    title: 'System Engineer',
    company: 'Tata Consultancy Services Limited',
    duration: '10/2020 - 05/2024',
    achievements: [
      'Engineered Spring Boot microservices for insurance clients following Domain-Driven Design (DDD) principles.',
      'Developed and maintained RESTful APIs to integrate third-party IoT devices, expanding product compatibility.',
      'Implemented ReactJS for internal dashboards, facilitating better data visualization for cross-functional teams.',
      'Streamlined CI/CD pipelines using Git, Jenkins, and Maven, reducing time-to-market by 20%.',
      'Ensured 90%+ code coverage through rigorous unit and integration testing using JUnit and Mockito.',
    ],
  },
];

// Project Types
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
    id: 'bnc-modernization',
    title: 'Business Network Controller (BNC) Modernization',
    description:
      "Led the development and modernization of the Business Network Controller (BNC), a critical legacy application responsible for managing Verizon's network services. The project involved working on the existing monolithic application built on the OpenDaylight (ODL) framework and subsequently leading its migration to a Spring Boot microservices architecture. The goal was to decouple the Northbound (client-facing) and Southbound (network-facing) communication layers to improve scalability, maintainability, and deployment velocity.",
    type: 'Work',
    techStack: ['Spring Boot', 'Microservices', 'YANG', 'NetConf', 'RestConf', 'OpenDaylight'],
    link: '',
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy System Modernization',
    description:
      'Architected and developed a scalable microservices-based ecosystem for an insurance client to modernize legacy data ingestion pipelines. The solution integrated third-party IoT devices with core insurance processing systems by implementing Domain-Driven Design (DDD) principles, enabling real-time data processing, improved product compatibility, and enhanced operational visibility.',
    type: 'Work',
    techStack: ['Spring Boot', 'ReactJS', 'DDD Patterns', 'Message Brokers', 'IoT Integration'],
    link: '',
  },
  {
    id: 'the-patient-file',
    title: 'The Patient File (Clinic Management System)',
    description:
      'A personal fullstack project demonstrating modern React frontend architecture with a comprehensive Spring Boot microservices backend. The Clinic Management System (CMS) is an enterprise-grade healthcare platform built on microservices architecture with 11 distinct services (Admin, Patient, Doctor, Appointment, Billing, Inventory, Receptionist, Nurse, Notification, Report, API Gateway). Features include JWT-based RBAC authentication, real-time event-driven communication via Apache Kafka, database-per-service pattern with PostgreSQL, Redis caching, and an interactive React SPA dashboard for clinical workflows.',
    type: 'Personal',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Spring Boot', 'Microservices', 'Apache Kafka', 'PostgreSQL', 'Redis', 'JWT', 'Docker'],
    link: 'https://github.com/rahulsingh14769-alt/thepatientfile',
    featured: true,
  },
];