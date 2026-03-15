export interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Associate Software Engineer',
    company: 'WAMO Labs',
    period: 'Dec 2025 - Present',
    achievements: [
      'Shipped 8+ full-stack products using Django, FastAPI, LangChain and RAG pipelines',
      'Contributed to closing 3 multinational client projects through technical scoping',
      'Mentored 10+ fresh graduate engineers on best practices and tooling',
      'Led internal workshops on AI tooling and modern development workflows',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Caregenix Solutions',
    period: 'Jun 2024 - Jan 2025',
    achievements: [
      'Reduced backend response time by 30% using ASP.NET and optimized SQL queries',
      'Refactored database schema and APIs for improved performance and maintainability',
      'Improved Git workflow and team collaboration practices',
    ],
  },
];
