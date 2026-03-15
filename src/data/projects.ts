export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: 'AI / ML' | 'Full Stack' | 'Web Apps';
  github?: string;
  impact: string;
}

export const projects: Project[] = [
  {
    title: 'AI Companion App for Hearing Impaired',
    description:
      'An AI-powered companion application designed to assist hearing-impaired users with real-time speech recognition and natural language processing capabilities.',
    tech: ['React Native', 'AI/ML', 'Speech Recognition', 'NLP'],
    category: 'AI / ML',
    github: 'https://github.com/Suhaibahmad19',
    impact: 'Empowering accessibility through AI-driven real-time communication',
  },
  {
    title: 'House Price Prediction',
    description:
      'Machine learning model for predicting house prices using regression techniques, feature engineering, and data preprocessing pipelines.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy'],
    category: 'AI / ML',
    github: 'https://github.com/Suhaibahmad19',
    impact: 'Achieved 92% prediction accuracy on test data',
  },
  {
    title: 'ProFolio Portfolio Manager',
    description:
      'A full-stack portfolio management application with real-time data visualization, user authentication, and financial tracking dashboards.',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/Suhaibahmad19',
    impact: 'End-to-end portfolio management with real-time analytics',
  },
  {
    title: 'Cooking Mania',
    description:
      'An NLP-based recipe recommendation system using TF-IDF vectorization and K-Means clustering to suggest recipes based on user preferences.',
    tech: ['Python', 'NLP', 'TF-IDF', 'K-Means'],
    category: 'AI / ML',
    github: 'https://github.com/Suhaibahmad19',
    impact: 'Smart recipe recommendations using unsupervised learning',
  },
  {
    title: 'PhoneKart E-commerce',
    description:
      'A feature-rich e-commerce platform for mobile devices with shopping cart, payment integration, user reviews, and admin dashboard.',
    tech: ['ASP.NET MVC', 'C#', 'SQL Server'],
    category: 'Web Apps',
    github: 'https://github.com/Suhaibahmad19',
    impact: 'Complete e-commerce solution with secure payment processing',
  },
];
