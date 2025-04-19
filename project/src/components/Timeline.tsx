import React from 'react';
import { timelineData } from '../data/timelineData';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            From humble beginnings to a thriving community. Here's how our club has evolved over the years.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row mb-12 md:mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 px-4 md:px-8">
                <div 
                  className={`bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all hover:shadow-lg relative ${
                    index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                  }`}
                >
                  {/* Arrow pointing to timeline */}
                  <div 
                    className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-solid border-t-transparent border-b-transparent ${
                      index % 2 === 0 
                        ? 'left-0 -translate-x-full border-r-[10px] border-r-gray-100 dark:border-r-gray-800' 
                        : 'right-0 translate-x-full border-l-[10px] border-l-gray-100 dark:border-l-gray-800'
                    }`}
                  ></div>
                  
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 dark:bg-blue-500 rounded-full mb-3">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;