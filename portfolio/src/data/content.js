// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to personalize the entire site.
// Every page pulls its text/links/images from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Yugant Moundekar',
  designation: 'Technical and Business Operations Analyst',
  location: 'Pune, Maharashtra, India',
  languagesKnown: 'English, Hindi, Marathi',
  photo: '/profile.png',
  about: [
    "I'm a 24-year-old technology enthusiast based in Pune, with a growing career at the intersection of IT operations and cloud infrastructure. I thrive on solving problems end-to-end — from diagnosing tricky enterprise issues under tight SLAs to architecting and shipping my own web projects using React, Java, and Spring Boot. My time working across Microsoft Azure, AWS, and enterprise support systems has sharpened my ability to stay calm under pressure and communicate clearly with people at every level.",
    "I'm someone who genuinely enjoys the climb — whether that's learning a new cloud service, untangling a stubborn bug, or exploring a mountain trail on my motorcycle on weekends. I've collaborated with startups and individuals across the globe, and I'm always looking for the next challenge that pushes me a little further outside my comfort zone.",
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
    icon: 'target',
    text: 'Resolved 30–40+ technical incidents daily while maintaining 95%+ SLA adherence.',
  },
  {
    icon: 'cloud',
    text: 'Hands-on expertise across Microsoft Azure, AWS, virtualization, and enterprise DevOps.',
  },
  {
    icon: 'code',
    text: 'Full-stack development background with Java, Spring Boot, React JS, and REST APIs.',
  },
  {
    icon: 'users',
    text: 'Proven track record collaborating with startups and cross-functional teams worldwide.',
  },
]

export const experience = [
  {
    company: 'Technical and Business Operations Analyst',
    designation: 'Pune, Maharashtra',
    period: 'June 2026 — Present · 2 months',
    points: [
      'Virtualization, Microsoft 365, Microsoft Azure, and Microsoft Endpoint Configuration Manager.',
    ],
  },
  {
    company: 'HCLTech',
    designation: 'Technical Support Engineer · Nagpur, Maharashtra',
    period: 'January 2025 — May 2026 · 1 year 5 months',
    points: [
      'Handled 30–40+ technical incidents daily under defined SLA.',
      'Provided first-level resolution for Windows, Outlook, Teams, and enterprise application issues.',
      'Logged, categorized, and prioritized incidents using ServiceNow.',
      'Coordinated with L2/L3 teams for issue escalation and resolution.',
      'Performed root cause analysis for recurring incidents.',
      'Ensured 95%+ SLA adherence.',
      'Documented knowledge base articles for common issues, reducing repeat issues and improving resolution efficiency.',
      'Troubleshot network connectivity issues including DNS resolution, VPN access, and IP configuration using basic TCP/IP diagnostics.',
    ],
  },
  {
    company: 'Software Developer Intern',
    designation: 'Navi Mumbai, Maharashtra',
    period: 'January 2023 — June 2023 · 6 months',
    points: [
      'Worked on backend development using Java and Spring Boot in an Agile environment.',
      'Assisted with REST API development, SQL database integration, and application debugging.',
      'Collaborated with cross-functional teams following enterprise development standards.',
    ],
  },
]

export const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React JS'],
  Backend: ['Java', 'Spring Boot'],
  'Cloud & DevOps': ['AWS', 'Azure', 'DevOps'],
  Tools: ['Git'],
}

export const certifications = [
  { name: 'Certification Name — Issuing Platform', url: '#' },
  { name: 'Certification Name — Issuing Platform', url: '#' },
  { name: 'Certification Name — Issuing Platform', url: '#' },
]

export const education = [
  { year: 'March 2017', label: '10th / SSC — Bishop Cotton High School' },
  { year: '2017 - 2020', label: 'Diploma / MSBTE — G.H. Raisoni Polytechnic (GHRP), Nagpur' },
  { year: '2020 - 2023', label: "B-Tech / Bachelor's — G.H. Raisoni College of Engineering (GHRCE), Nagpur" },
]

export const projects = [
  {
    id: 1,
    name: 'Project Name A',
    image: '/project-placeholder-1.svg',
    stack: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/project-a',
  },
  {
    id: 2,
    name: 'Project Name B',
    image: '/project-placeholder-2.svg',
    stack: ['Next.js', 'Tailwind', 'PostgreSQL'],
    link: 'https://github.com/yourusername/project-b',
  },
  {
    id: 3,
    name: 'Project Name C',
    image: '/project-placeholder-1.svg',
    stack: ['React Native', 'Firebase'],
    link: 'https://github.com/yourusername/project-c',
  },
  {
    id: 4,
    name: 'Project Name D',
    image: '/project-placeholder-2.svg',
    stack: ['Python', 'Flask', 'Docker'],
    link: 'https://github.com/yourusername/project-d',
  },
]

export const gallery = [
  '/gallery-1.png',
  '/gallery-2.png',
  '/gallery-3.png',
  '/gallery-4.png',
]
