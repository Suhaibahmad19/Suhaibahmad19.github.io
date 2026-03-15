export interface TechCategory {
  name: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    name: 'Languages',
    items: ['Python', 'C#', 'JavaScript', 'Java', 'C++'],
  },
  {
    name: 'AI / ML',
    items: ['LangChain', 'RAG', 'NLP', 'HuggingFace', 'Scikit-Learn'],
  },
  {
    name: 'Backend',
    items: ['Django', 'FastAPI', 'Flask', 'Node.js', 'Express'],
  },
  {
    name: 'Frontend',
    items: ['ReactJS', 'React Native'],
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server'],
  },
  {
    name: 'Tools',
    items: ['Git', 'Cursor', 'Postman', 'Jira', 'Slack'],
  },
];
