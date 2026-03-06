// ============================================================
// Central data store — swap this out with API calls if desired
// ============================================================

export const profile = {
  name: 'John Doe',
  initials: 'JD',
  title: 'Full Stack Developer',
  location: 'San Francisco, CA, USA',
  email: 'john.doe@example.com',
  linkedin: 'https://linkedin.com/in/johndoe',
  github: 'https://github.com/johndoe',
  twitter: 'https://twitter.com/johndoe',
  bio: [
    "I'm a Full Stack Developer with over 8 years of experience designing and building end-to-end web applications. I specialise in React, Node.js, TypeScript, and cloud services (AWS & GCP), delivering performant and maintainable code for startups and enterprise teams alike.",
    'My work spans building RESTful & GraphQL APIs, designing microservice architectures, and mentoring junior engineers. I\'ve led frontend rewrites that cut load times by 60% and built backend systems processing millions of requests per day.',
    'I hold a B.S. in Computer Science from UC Berkeley and certifications in AWS Solutions Architect, Google Cloud Professional, and Meta Front-End Developer.',
  ],
  stats: [
    { value: '8+', label: 'Years of Experience' },
    { value: '40+', label: 'Projects Shipped' },
    { value: '15+', label: 'Technologies' },
    { value: '5', label: 'Certifications' },
  ],
  expertise: [
    { label: 'Frontend Development', level: 'Expert Level' },
    { label: 'Backend Development', level: 'Expert Level' },
    { label: 'Cloud Architecture', level: 'Advanced Level' },
    { label: 'DevOps & CI/CD', level: 'Advanced Level' },
  ],
  pills: ['React / Next.js', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker', 'GraphQL', 'Kubernetes'],
};

export const industrySkills = [
  { title: 'Microservices Architecture', desc: 'Design and deploy loosely-coupled, independently scalable services using modern patterns and protocols.' },
  { title: 'RESTful & GraphQL APIs', desc: 'Robust API design, versioning strategies, and schema-first development with full documentation.' },
  { title: 'CI/CD Pipelines', desc: 'Automated build, test, and deployment workflows using GitHub Actions, CircleCI, and Jenkins.' },
  { title: 'Performance Optimisation', desc: 'Frontend and backend tuning — lazy loading, caching strategies, database indexing, CDN configuration.' },
  { title: 'Agile & Scrum', desc: 'Sprint planning, backlog grooming, and cross-functional collaboration in fast-paced product teams.' },
  { title: 'Security Best Practices', desc: 'Authentication / authorisation (OAuth, JWT), OWASP hardening, dependency scanning, and secrets management.' },
  { title: 'Cloud-Native Development', desc: 'Building twelve-factor apps optimised for container orchestration and serverless execution.' },
  { title: 'Technical Leadership', desc: 'Code reviews, architecture documentation, onboarding programmes, and team mentoring.' },
  { title: 'Test-Driven Development', desc: 'Unit, integration, and E2E test suites maintaining 90%+ code coverage across all projects.' },
];

export const toolSkills = [
  {
    category: 'Frontend',
    icon: 'fa-code',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux / Zustand', 'Vue 3', 'Vite', 'Storybook'],
  },
  {
    category: 'Backend',
    icon: 'fa-server',
    tags: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI', 'GraphQL', 'REST APIs', 'tRPC'],
  },
  {
    category: 'Database & Storage',
    icon: 'fa-database',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma', 'Elasticsearch', 'S3'],
  },
  {
    category: 'Cloud & DevOps',
    icon: 'fa-cloud',
    tags: ['AWS (EC2, Lambda, RDS, S3)', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Nginx'],
  },
  {
    category: 'Testing & Quality',
    icon: 'fa-vial',
    tags: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Vitest', 'ESLint'],
  },
  {
    category: 'Version Control & Collaboration',
    icon: 'fa-code-branch',
    tags: ['Git', 'GitHub', 'GitLab', 'Jira', 'Linear', 'Notion'],
  },
];

export const experience = [
  {
    initials: 'TN',
    role: 'Senior Full Stack Engineer',
    company: 'TechNova Inc.',
    period: 'Jan 2023 – Present',
    desc: 'Leading development of a multi-tenant SaaS platform serving 200K+ users. Architected a React / Next.js frontend with a NestJS microservices backend on AWS. Reduced API response times by 55% through query optimisation and Redis caching. Mentoring a team of 6 engineers.',
    chips: [
      { label: 'Frontend', value: 'React / Next.js' },
      { label: 'Backend', value: 'NestJS / GraphQL' },
      { label: 'Cloud', value: 'AWS' },
      { label: 'Database', value: 'PostgreSQL / Redis' },
      { label: 'Infra', value: 'Docker / K8s' },
      { label: 'CI/CD', value: 'GitHub Actions' },
    ],
  },
  {
    initials: 'BX',
    role: 'Full Stack Developer',
    company: 'Brightex Solutions',
    period: 'Mar 2020 – Dec 2022',
    desc: 'Built and maintained a real-time analytics dashboard for enterprise clients, handling 5M+ daily events. Migrated a monolithic Express app to microservices, cutting deployment time by 70%.',
    chips: [
      { label: 'Frontend', value: 'React / TypeScript' },
      { label: 'Backend', value: 'Node.js / REST' },
      { label: 'Database', value: 'MongoDB / ES' },
      { label: 'Cloud', value: 'GCP' },
    ],
  },
  {
    initials: 'WV',
    role: 'Frontend Developer',
    company: 'WebVault Agency',
    period: 'Jun 2017 – Feb 2020',
    desc: 'Developed responsive web applications and component libraries for 20+ client projects. Introduced automated testing achieving 85% coverage. Led the migration from Angular to React, improving developer velocity by 40%.',
    chips: [
      { label: 'Framework', value: 'React / Redux' },
      { label: 'Styling', value: 'CSS / SASS' },
      { label: 'Testing', value: 'Jest / Cypress' },
      { label: 'Tooling', value: 'Webpack / Babel' },
    ],
  },
];

export const awards = [
  {
    year: '2024',
    icon: 'fa-trophy',
    title: 'Engineer of the Year',
    desc: 'Awarded by TechNova Inc. for leading the platform migration that increased system reliability to 99.98% uptime and reduced infrastructure costs by 30%.',
    type: 'Individual Excellence',
  },
  {
    year: '2022',
    icon: 'fa-star',
    title: 'Innovation Catalyst Award',
    desc: 'Recognised at Brightex Solutions for building an internal developer CLI tool adopted by 30+ engineers, saving an estimated 4 hours per developer per week.',
    type: 'Innovation Leader',
  },
  {
    year: '2019',
    icon: 'fa-users',
    title: 'Collaboration Champion',
    desc: 'Honoured at WebVault Agency for establishing a cross-team knowledge-sharing programme that accelerated onboarding and improved code quality across all client projects.',
    type: 'Collaboration Excellence',
  },
];

export const certifications = [
  {
    logo: 'https://img.icons8.com/color/96/amazon-web-services.png',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    skills: 'EC2, S3, RDS, Lambda, VPC, IAM',
    meta: 'Issued: Mar 2024 · Expires: Mar 2027',
    url: '#',
  },
  {
    logo: 'https://img.icons8.com/color/96/google-cloud.png',
    name: 'Google Cloud Professional Cloud Developer',
    issuer: 'Google Cloud',
    skills: 'GKE, Cloud Run, BigQuery, Firestore',
    meta: 'Issued: Nov 2023 · Expires: Nov 2025',
    url: '#',
  },
  {
    logo: 'https://img.icons8.com/color/96/meta.png',
    name: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta',
    skills: 'React, JavaScript, CSS, UI/UX',
    meta: 'Issued: Jun 2022',
    url: '#',
  },
  {
    logo: 'https://img.icons8.com/color/96/nodejs.png',
    name: 'OpenJS Node.js Application Developer (JSNAD)',
    issuer: 'OpenJS Foundation',
    skills: 'Node.js, Streams, Buffers, Async',
    meta: 'Issued: Feb 2022',
    url: '#',
  },
  {
    logo: 'https://img.icons8.com/color/96/github--v1.png',
    name: 'GitHub Actions Certified',
    issuer: 'GitHub',
    skills: 'CI/CD, Workflows, Automation',
    meta: 'Issued: Sep 2023 · Expires: Sep 2026',
    url: '#',
  },
];
