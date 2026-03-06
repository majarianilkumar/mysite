export const portfolioData = {
  profile: {
    name: 'John Doe',
    title: 'Full Stack Developer',
    location: 'San Francisco, CA, USA',
    email: 'john.doe@example.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
  },
  experience: [
    {
      id: 1,
      role: 'Senior Full Stack Engineer',
      company: 'TechNova Inc.',
      period: 'Jan 2023 – Present',
      description:
        'Leading development of a multi-tenant SaaS platform serving 200K+ users. Architected React/Next.js frontend with NestJS microservices on AWS.',
      tags: ['React', 'NestJS', 'AWS', 'PostgreSQL', 'Redis', 'Docker'],
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Brightex Solutions',
      period: 'Mar 2020 – Dec 2022',
      description:
        'Built real-time analytics dashboard handling 5M+ daily events. Migrated monolith to microservices, cutting deployment time by 70%.',
      tags: ['React', 'Node.js', 'MongoDB', 'GCP'],
    },
    {
      id: 3,
      role: 'Frontend Developer',
      company: 'WebVault Agency',
      period: 'Jun 2017 – Feb 2020',
      description:
        'Developed responsive web apps for 20+ clients. Led Angular-to-React migration, improving developer velocity by 40%.',
      tags: ['React', 'Redux', 'SASS', 'Jest', 'Cypress'],
    },
  ],
  skills: {
    industry: [
      'Microservices Architecture',
      'RESTful & GraphQL APIs',
      'CI/CD Pipelines',
      'Performance Optimisation',
      'Agile & Scrum',
      'Security Best Practices',
      'Cloud-Native Development',
      'Technical Leadership',
      'Test-Driven Development',
    ],
    tools: {
      Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue 3', 'Vite'],
      Backend: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI', 'GraphQL'],
      Database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma'],
      Cloud: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    },
  },
  awards: [
    { id: 1, year: '2024', title: 'Engineer of the Year', type: 'Individual Excellence', company: 'TechNova Inc.' },
    { id: 2, year: '2022', title: 'Innovation Catalyst Award', type: 'Innovation Leader', company: 'Brightex Solutions' },
    { id: 3, year: '2019', title: 'Collaboration Champion', type: 'Collaboration Excellence', company: 'WebVault Agency' },
  ],
  certifications: [
    { id: 1, name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', year: '2024' },
    { id: 2, name: 'Google Cloud Professional Cloud Developer', issuer: 'Google Cloud', year: '2023' },
    { id: 3, name: 'Meta Front-End Developer Professional Certificate', issuer: 'Meta', year: '2022' },
    { id: 4, name: 'OpenJS Node.js Application Developer (JSNAD)', issuer: 'OpenJS Foundation', year: '2022' },
    { id: 5, name: 'GitHub Actions Certified', issuer: 'GitHub', year: '2023' },
  ],
}
