// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to personalize the entire site.
// Every page pulls its text/links/images from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Yugant Moundekar',
  designation: 'Software Engineer',
  location: 'Pune, Maharashtra, India',
  languagesKnown: 'English, Hindi, Marathi',
  photo: '/profile.png',
  about: [
    "I'm a 24-year-old software engineer based in Pune, focused on designing and building clean, reliable applications with Java and Spring Boot. My path here started in technical support, where I spent over a year debugging enterprise systems and working across Microsoft Azure and AWS. That experience taught me to think in root causes, not just symptoms, and it's the mindset I now bring to writing code.",
    "Outside of my day job, I've spent my time building things: six independent Spring Boot APIs covering everything from task management to e-commerce, each with a proper layered architecture, database integration, and documented endpoints. I'm actively growing my skills in Java, Spring Boot, and full-stack development, and I'm looking for the next opportunity to build software professionally. On weekends, you'll usually find me exploring a mountain trail on my motorcycle.",
  ],
  quote: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.',
  resumeUrl: '/resume.pdf',
  // Contact form delivery: sign up free at https://formspree.io, click "+ New Form",
  // set the recipient email to yours, then paste the 8-character Form ID below.
  // Until you do, the contact form will show a setup notice instead of submitting.
  formspreeId: 'xeeygobz',
  socials: [
    { label: 'GitHub', url: 'https://github.com/YugantMoundekar' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yugantmoundekar' },
    { label: 'Email', url: 'mailto:moundekaryugant@gmail.com' },
  ],
}

export const heroHighlights = [
  {
    icon: 'code',
    text: 'Software engineer building applications and REST APIs with Java, Spring Boot, and Spring Data JPA.',
  },
  {
    icon: 'target',
    text: 'Shipped 6 independent Spring Boot APIs, each with a clean, layered architecture and documented endpoints.',
  },
  {
    icon: 'cloud',
    text: 'Full-stack skills across React JS, SQL databases, and cloud platforms like Azure and AWS.',
  },
  {
    icon: 'users',
    text: 'Sharp debugging instincts and a calm, methodical approach, built from resolving real production issues daily.',
  },
]

export const experience = [
  {
    company: 'Amdocs',
    logo: '/logo-amdocs.svg',
    designation: 'Technical and Business Operations Analyst · Pune, Maharashtra',
    period: 'June 2026 - Present',
    points: [
      'Manage and troubleshoot virtualization, Microsoft 365, Microsoft Azure, and endpoint configuration across the organization\'s technical infrastructure.',
    ],
  },
  {
    company: 'HCLTech',
    logo: '/logo-hcltech.svg',
    designation: 'Technical Support Engineer · Nagpur, Maharashtra',
    period: 'January 2025 - May 2026 · 1 year 5 months',
    points: [
      'Diagnosed and resolved 30–40+ technical incidents daily, applying structured root cause analysis across Windows, Outlook, Teams, and enterprise applications.',
      'Investigated network-level issues including DNS resolution, VPN connectivity, and IP configuration using TCP/IP diagnostics.',
      'Authored knowledge base documentation for recurring issues, reducing repeat tickets and improving team resolution time.',
      'Coordinated with L2/L3 engineering teams to escalate and resolve complex technical issues while maintaining 95%+ SLA adherence.',
      'Logged and triaged incidents in ServiceNow, prioritizing by technical severity and business impact.',
    ],
  },
  {
    company: 'Capgemini',
    logo: '/logo-capgemini.svg',
    designation: 'Software Developer Intern · Navi Mumbai, Maharashtra',
    period: 'January 2023 - June 2023 · 6 months',
    points: [
      'Worked on backend development using Java and Spring Boot in an Agile environment.',
      'Assisted with REST API development, SQL database integration, and application debugging.',
      'Collaborated with cross-functional teams following enterprise development standards.',
    ],
  },
]

export const skills = {
  Backend: ['Java', 'Spring Boot', 'REST APIs', 'Spring Data JPA'],
  Frontend: ['React JS', 'JavaScript', 'HTML5', 'CSS3'],
  'Cloud & DevOps': ['AWS', 'Azure', 'DevOps'],
  Tools: ['Git', 'Maven'],
}

export const certifications = [
  {
    name: 'Java Developer Associate (JDAC), EduMex',
    url: 'https://drive.google.com/file/d/1rroTKAmHsRXs_ikcpCtrChYsooy1aXdA/view',
  },
  {
    name: 'Java Spring Framework with Spring Boot, Udemy',
    url: 'https://www.udemy.com/certificate/UC-d8403e9b-66ca-46f6-a313-7a2ca5a3ab07/',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    url: 'https://drive.google.com/file/d/1gr6AUN8toNkJ01toT-wQHmspwMKpgFHJ/view',
  },
]

export const education = [
  { year: 'March 2017', label: '10th / SSC, Bishop Cotton High School' },
  { year: '2017 - 2020', label: 'Diploma / MSBTE, G.H. Raisoni Polytechnic (GHRP), Nagpur' },
  { year: '2020 - 2023', label: "B-Tech / Bachelor's, G.H. Raisoni College of Engineering (GHRCE), Nagpur" },
]

export const projects = [
  {
    id: 1,
    name: 'E-commerce Backend API',
    description:
      'A full-featured REST API for an online store, covering product catalog, shopping cart, order processing, and inventory tracking with role-based access control.',
    image: '/project-ecommerce-backend.svg',
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'H2'],
    link: 'https://github.com/YugantMoundekar/ecommerce-backend-api',
  },
  {
    id: 2,
    name: 'Task Management API',
    description:
      'Create, assign, and track tasks across projects with status workflows, priorities, and due dates. Documented end-to-end with Swagger UI.',
    image: '/project-task-management.svg',
    stack: ['Java', 'Spring Boot', 'REST API', 'Swagger'],
    link: 'https://github.com/YugantMoundekar/task-management-api',
  },
  {
    id: 3,
    name: 'Expense Tracker API',
    description:
      'Tracks personal expenses by category and date, with endpoints for monthly summaries so spending patterns are easy to analyze.',
    image: '/project-expense-tracker.svg',
    stack: ['Java', 'Spring Boot', 'JPA', 'H2'],
    link: 'https://github.com/YugantMoundekar/expense-tracker-api',
  },
  {
    id: 4,
    name: 'Employee Leave Management API',
    description:
      'Handles leave requests, approvals, and balance tracking for employees and managers, with clear role-based permissions.',
    image: '/project-leave-management.svg',
    stack: ['Java', 'Spring Boot', 'Spring Data JPA'],
    link: 'https://github.com/YugantMoundekar/employee-leave-management-api',
  },
  {
    id: 5,
    name: 'URL Shortener API',
    description:
      'Converts long URLs into short, shareable links and tracks click analytics for every link generated.',
    image: '/project-url-shortener.svg',
    stack: ['Java', 'Spring Boot', 'REST API'],
    link: 'https://github.com/YugantMoundekar/url-shortener-api',
  },
  {
    id: 6,
    name: 'Library Management API',
    description:
      'Manages books, members, and the full borrow-and-return workflow for a library, including due-date and availability tracking.',
    image: '/project-library-management.svg',
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'H2'],
    link: 'https://github.com/YugantMoundekar/library-management-api',
  },
]

export const gallery = [
  '/gallery-1.png',
  '/gallery-2.png',
  '/gallery-3.png',
  '/gallery-4.png',
]
