import React, { useState } from 'react';
import { resourceData } from '../data/resourceData';
import { BookOpen, Monitor, Server, Database, Globe, CheckCircle } from 'lucide-react';

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All', icon: <Globe className="h-5 w-5" /> },
    { id: 'frontend', name: 'Frontend', icon: <Monitor className="h-5 w-5" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="h-5 w-5" /> },
    { id: 'database', name: 'Database', icon: <Database className="h-5 w-5" /> },
    { id: 'beginners', name: 'Beginners', icon: <BookOpen className="h-5 w-5" /> },
  ];
  
  const filteredResources = resourceData.filter(
    resource => activeCategory === 'all' || resource.category === activeCategory
  );

  return (
    <section id="resources" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Learning Resources</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Explore our curated collection of learning materials to help you master various programming domains.
          </p>
        </div>

        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex space-x-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${
                      {
                        'frontend': 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
                        'backend': 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
                        'database': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
                        'beginners': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
                      }[resource.category] || 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300'
                    }`}>
                      {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    {resource.level}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{resource.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">You'll Learn:</h4>
                  <ul className="space-y-1">
                    {resource.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                  >
                    Explore Resource
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;