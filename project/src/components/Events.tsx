import React, { useState } from 'react';
import { eventData } from '../data/eventData';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  
  // Filter events based on the selected filter
  const filteredEvents = eventData.filter(event => {
    if (filter === 'all') return true;
    const eventDate = new Date(event.date);
    const now = new Date();
    return filter === 'upcoming' ? eventDate > now : eventDate <= now;
  });

  return (
    <section id="events" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Events</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Join us for workshops, hackathons, and tech talks designed to enhance your coding skills
            and connect you with fellow enthusiasts.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                filter === 'all'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } border border-gray-300 dark:border-gray-600`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'upcoming'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } border-t border-b border-r border-gray-300 dark:border-gray-600`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                filter === 'past'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } border-t border-b border-r border-gray-300 dark:border-gray-600`}
            >
              Past
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => {
            const eventDate = new Date(event.date);
            const isUpcoming = eventDate > new Date();
            return (
              <div 
                key={index} 
                className={`bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-lg ${
                  isUpcoming ? 'border-l-4 border-green-500 dark:border-green-600' : ''
                }`}
              >
                {event.image && (
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  {isUpcoming && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-full mb-4">
                      Upcoming
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{event.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{event.description}</p>
                  {isUpcoming && event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;