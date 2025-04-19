import { Resource } from '../types';

export const resourceData: Resource[] = [
  {
    title: 'Getting Started with HTML & CSS',
    category: 'frontend',
    level: 'Beginner',
    description: 'A comprehensive introduction to building websites with HTML and CSS, covering structure, styling, and responsive design.',
    topics: [
      'HTML document structure',
      'CSS selectors and properties',
      'Responsive layouts with Flexbox and Grid',
      'Forms and input validation'
    ],
    link: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer'
  },
  {
    title: 'Modern JavaScript Fundamentals',
    category: 'frontend',
    level: 'Beginner-Intermediate',
    description: 'Learn JavaScript from the ground up, including ES6+ features, async programming, and DOM manipulation.',
    topics: [
      'Variables, functions, and control flow',
      'ES6+ syntax and features',
      'Asynchronous JavaScript with Promises',
      'Working with the DOM and events'
    ],
    link: 'https://javascript.info/'
  },
  {
    title: 'React.js for Beginners',
    category: 'frontend',
    level: 'Intermediate',
    description: 'A step-by-step guide to building interactive user interfaces with React, the popular JavaScript library.',
    topics: [
      'Components and props',
      'State management with hooks',
      'Routing and navigation',
      'Forms and user input'
    ],
    link: 'https://react.dev/learn'
  },
  {
    title: 'Node.js Backend Development',
    category: 'backend',
    level: 'Intermediate',
    description: 'Build scalable and robust backend services with Node.js and Express. Learn RESTful API design and implementation.',
    topics: [
      'Setting up Express servers',
      'RESTful API design principles',
      'Middleware and request handling',
      'Authentication and authorization'
    ],
    link: 'https://nodejs.org/en/learn'
  },
  {
    title: 'SQL Database Essentials',
    category: 'database',
    level: 'Beginner-Intermediate',
    description: 'Master the fundamentals of SQL and relational database design, with practical examples and exercises.',
    topics: [
      'Database design and normalization',
      'CRUD operations in SQL',
      'Joins and relationships',
      'Indexing and performance'
    ],
    link: 'https://www.postgresql.org/docs/current/tutorial.html'
  },
  {
    title: 'MongoDB for Modern Applications',
    category: 'database',
    level: 'Intermediate',
    description: 'Learn how to store, query, and manage data in MongoDB, a popular NoSQL database for web applications.',
    topics: [
      'Document data modeling',
      'CRUD operations in MongoDB',
      'Aggregation framework',
      'Indexing strategies'
    ],
    link: 'https://learn.mongodb.com/'
  },
  {
    title: 'Python Programming: Zero to Hero',
    category: 'beginners',
    level: 'Beginner',
    description: 'A comprehensive guide to Python programming, perfect for absolute beginners with no coding experience.',
    topics: [
      'Python syntax and basic concepts',
      'Data structures and algorithms',
      'Object-oriented programming',
      'File handling and libraries'
    ],
    link: 'https://docs.python.org/3/tutorial/'
  },
  {
    title: 'Git and GitHub for Beginners',
    category: 'beginners',
    level: 'Beginner',
    description: 'Learn version control with Git and how to collaborate using GitHub, essential skills for any programmer.',
    topics: [
      'Basic Git commands',
      'Branching and merging',
      'Pull requests and code reviews',
      'Resolving conflicts'
    ],
    link: 'https://git-scm.com/book/en/v2'
  },
  {
    title: 'Advanced Node.js: Architecture & Patterns',
    category: 'backend',
    level: 'Advanced',
    description: 'Deep dive into Node.js architecture, design patterns, and best practices for production-ready applications.',
    topics: [
      'Event loop and async patterns',
      'Microservices architecture',
      'Testing and TDD in Node.js',
      'Performance optimization'
    ],
    link: 'https://nodejs.org/en/docs'
  }
];