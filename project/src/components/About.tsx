import React from 'react';
import { Code, Users, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: 'Skill Development',
      description: 'Learn the latest technologies through workshops, hackathons, and mentor-led sessions.'
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: 'Community',
      description: 'Connect with peers, mentors, and industry professionals who share your passion for coding.'
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: 'Innovation',
      description: 'Turn your ideas into reality through collaborative projects and creative problem-solving.'
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: 'Recognition',
      description: 'Showcase your skills, win competitions, and build a portfolio that stands out.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Our Club</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
          The Programming & Tech Skills Club is a vibrant community of students passionate about coding, web development, machine learning, and app development. We organize hands-on workshops, coding competitions, and collaborative projects to foster technical growth and innovation among our members. By providing a supportive environment, we encourage students to learn, practice, and share knowledge in various domains of computer science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
            Our vision is to build a dynamic community that serves as a launchpad for future tech leaders and innovators. We aspire to be recognized as a center of excellence for programming and technology, where students can learn, experiment, and showcase their skills to the world.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
            Our mission is to empower students with essential programming and technical skills, enabling them to excel in the digital era. We strive to create opportunities for members to participate in renowned competitions, contribute to open-source projects, and engage in industry-relevant activities
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center transform transition-all hover:shadow-lg"
            >
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;