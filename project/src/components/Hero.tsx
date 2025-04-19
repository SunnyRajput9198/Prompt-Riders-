import React, { useEffect, useState } from 'react';
import { Code, ArrowRight, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set next event date - example: 2 weeks from now
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="max-w-lg mx-auto md:mx-0">
              <div className="flex items-center mb-4">
              <img
  src="https://d1fdloi71mui9q.cloudfront.net/oL9wBqRnRQmBujVtdYXt_2yn4Zn1mWy8JJ17g"
  alt="Your Logo"
  className="w-20 h-20 mr-3"
/>

                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Programming & Tech Skills Club</h1>
              </div>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                Where Code Meets Creativity
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                We're a community of passionate programmers, developers, and tech enthusiasts
                dedicated to learning, building, and growing together. Join us to expand your
                skills, work on exciting projects, and connect with like-minded individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#join"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center justify-center sm:justify-start"
                >
                  Join Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#about"
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-md transition-colors text-center sm:text-left"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-white" />
                  <h3 className="text-white font-semibold">Next Hackathon</h3>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-white/20 rounded-md p-2">
                    <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                    <div className="text-xs text-white/80">days</div>
                  </div>
                  <div className="bg-white/20 rounded-md p-2">
                    <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
                    <div className="text-xs text-white/80">hours</div>
                  </div>
                  <div className="bg-white/20 rounded-md p-2">
                    <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
                    <div className="text-xs text-white/80">mins</div>
                  </div>
                  <div className="bg-white/20 rounded-md p-2">
                    <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
                    <div className="text-xs text-white/80">secs</div>
                  </div>
                </div>
              </div>
              <div className="text-white text-center">
                <p className="font-medium">Web Dev Bootcamp - Spring 2025</p>
                <p className="text-sm text-white/80 mt-1">Register now to secure your spot!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;