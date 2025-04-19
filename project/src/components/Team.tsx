import React from 'react';
import { teamData } from '../data/teamData';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            The passionate individuals behind Programing and Techskills Club who work tirelessly to create
            amazing coding environment and opportunities for our college.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img 
                  src={member.photo}
                  alt={member.name}
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.github && (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;