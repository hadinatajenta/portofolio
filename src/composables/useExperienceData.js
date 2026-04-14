import { ref } from 'vue'

const experiences = [
  {
    period: 'Dec 2023 - Present',
    dateStart: '2023-12',
    dateEnd: null,
    title: 'Backend Developer',
    company: 'Bank Rakyat Indonesia (BRI)',
    description:
      'Develop and maintain distributed microservices for the Merchant Management System (MMS) in a high-throughput financial environment. Focus on secure system integration, reliable data processing, and scalable service architecture supporting merchant lifecycle operations across multiple internal and external systems.',
    highlights: [
      'Designed and implemented microservices handling merchant onboarding, outlet creation (single & bulk), EDC registration, QRIS parent setup, and QRIS request flows',
      'Integrated services with core banking and external systems including Way4, Fraud Monitoring, Soundbox management, and PTEN (IN/OUT) using secure and standardized APIs',
      'Engineered asynchronous processing pipelines using RabbitMQ to decouple services and improve system responsiveness under high load',
      'Optimized data access and performance using Redis caching strategies, reducing latency in frequently accessed workflows',
      'Managed structured data flows across MySQL, Redis, and object storage (MinIO) to ensure consistency and reliability',
      'Collaborated across multiple squads to align API contracts, ensure system interoperability, and resolve cross-service issues',
      'Maintained code quality and security compliance using SonarQube, SAST practices, and structured QA cycles before deployment',
      'Deployed and monitored services in containerized environments using Red Hat OpenShift with CI/CD pipelines (Bamboo, Bitbucket, Nexus)',
      'Participated in system design discussions, troubleshooting production issues, and improving overall service reliability',
      'Contributed to standardizing backend practices across teams including API structure, error handling, and logging'
    ],
    tags: [
      'Go (Gin, Echo)',
      'Laravel',
      'Node.js (Express)',
      'Microservices',
      'RabbitMQ',
      'Redis',
      'MySQL',
      'MinIO',
      'OpenShift',
      'CI/CD',
      'SAST',
      'System Integration'
    ]
  },
  {
    period: 'Aug 2023 – Dec 2023',
    dateStart: '2023-08',
    dateEnd: '2023-12',
    title: 'Lecturer Assistant – Project TI',
    company: 'Sumatera Institute of Technology (ITERA)',
    description:
      'Mentored multiple student teams through real-world IT projects from planning and system design to development, testing, and deployment.',
    highlights: [
      'Guided teams in choosing suitable SDLC models (Agile, RAD, Modified Waterfall) based on project scope and client requirements',
      'Supported planning using Gantt charts, Trello, and Jira; oversaw architecture, database modeling, UML, and requirements documentation',
      'Monitored development progress, resolved technical blockers, and supervised integration and testing',
      'Ensured each team delivered complete documentation and a functional system'
    ],
    tags: ['Agile', 'RAD', 'Waterfall', 'UML', 'Jira', 'Trello', 'SDLC', 'Mentorship']
  },
  {
    period: 'Aug 2023 – Dec 2023',
    dateStart: '2023-08',
    dateEnd: '2023-12',
    title: 'Lecturer Assistant – Web Programming',
    company: 'Sumatera Institute of Technology (ITERA)',
    description:
      'Taught core web fundamentals and guided students in building full-stack web applications from scratch.',
    highlights: [
      'Taught internet basics, web architecture, static vs dynamic sites, and client-server interactions',
      'Guided students in building full-stack pages using HTML, CSS, JavaScript, PHP, and MySQL',
      'Provided hands-on support through lab sessions and code reviews',
      'Supervised final projects — personal websites evaluated for technical accuracy and design quality'
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Mentorship']
  },
  {
    period: 'May 2023',
    dateStart: '2023-05',
    dateEnd: '2023-05',
    title: 'Full Stack GIS Web Developer',
    company: 'Sumatera Institute of Technology (ITERA)',
    description:
      'Developed a web-based GIS application for mapping healthcare facilities in Palembang as part of the Geographic Information System Development course.',
    highlights: [
      'Implemented interactive mapping using Leaflet.js with custom markers and area boundary definitions',
      'Built features to display detailed facility info: name, address, emergency contact, and images',
      'Delivered an interactive platform supporting accurate visualization of local healthcare infrastructure'
    ],
    tags: ['Laravel', 'Leaflet.js', 'jQuery', 'Bootstrap', 'MySQL']
  },
  {
    period: 'Dec 2022 – Jul 2023',
    dateStart: '2022-12',
    dateEnd: '2023-07',
    title: 'Full Stack Developer (Contract)',
    company: 'PT Andalas Media Group',
    description:
      'Built a fully custom online news portal (andalasnet.com) from scratch using Laravel 9, Bootstrap, and CKEditor to meet client requirements that off-the-shelf CMS platforms could not fulfill.',
    highlights: [
      'Developed a complete CMS with article management, categories, multi-level author roles, advertisement placement, banner schedules, and pricing configs',
      'Designed entire system architecture including database schema, admin/author dashboards, and front-page layout templates',
      'Implemented SEO-friendly structures and analytics pages for tracking article volume and publishing activity',
      'Deployed on shared hosting (HPanel/Niagahoster); maintained production stability with 500+ published articles',
      'Managed the project end-to-end: requirement gathering, UI design, backend, QA, deployment, and continuous maintenance'
    ],
    tags: ['Laravel 9', 'MySQL', 'Bootstrap', 'CKEditor', 'SEO', 'CMS']
  },
  {
    period: 'Feb 2023',
    dateStart: '2023-02',
    dateEnd: '2023-02',
    title: 'Full Stack Developer',
    company: 'SMPN 28 Bandar Lampung',
    description:
      'Built an inventory lending system to digitize and streamline manual school processes.',
    highlights: [
      'Reduced manual processing by approximately 70%',
      'Improved tracking accuracy and operational efficiency for school staff'
    ],
    tags: ['Laravel', 'MySQL']
  },
  {
    period: 'Nov 2023',
    dateStart: '2023-11',
    dateEnd: '2023-11',
    title: 'Full Stack Developer (Freelance)',
    company: 'NGO Basmi',
    description:
      'Built a Laravel-based web platform with advertising, staff management, and scheduling features using a Modified Waterfall approach.',
    highlights: [
      'Built features for staff management, scheduling, and advertising',
      'Delivered using Modified Waterfall methodology with structured requirements and phased deployment',
      'Ensured usability and maintainability for non-technical users'
    ],
    tags: ['Laravel', 'MySQL', 'Bootstrap']
  },
  {
    period: 'Jun 2022 – Jul 2022',
    dateStart: '2022-06',
    dateEnd: '2022-07',
    title: 'Content Writer Intern',
    company: 'PT Andalas Media Group',
    description:
      'Produced and edited regional news content, learning the full workflow from research and fact-checking to publication.',
    highlights: [
      'Wrote articles following journalistic structure and editorial standards',
      'Performed fact-checking and content validation',
      'Gained hands-on experience with newsroom processes and publishing workflows'
    ],
    tags: ['Writing', 'Journalism', 'Editorial']
  }
]

// Global singleton state
const experienceList = ref(experiences)

/**
 * Composable for managing experience data
 */
export function useExperienceData() {
  return {
    experiences: experienceList
  }
}
