import { Event } from '../types';

// Create a mix of past and upcoming events
const currentDate = new Date();
const twoWeeksFromNow = new Date();
twoWeeksFromNow.setDate(currentDate.getDate() + 14);

const oneMonthFromNow = new Date();
oneMonthFromNow.setDate(currentDate.getDate() + 30);

const twoMonthsFromNow = new Date();
twoMonthsFromNow.setDate(currentDate.getDate() + 60);

const oneMonthAgo = new Date();
oneMonthAgo.setDate(currentDate.getDate() - 30);

const twoMonthsAgo = new Date();
twoMonthsAgo.setDate(currentDate.getDate() - 60);

export const eventData: Event[] = [
  {
    title: 'Web Development Bootcamp',
    date: twoWeeksFromNow.toISOString(),
    time: '10:00 AM - 4:00 PM',
    location: 'Computer Science Building, Room 305',
    description: 'A full-day intensive bootcamp covering HTML, CSS, JavaScript, and React. Perfect for beginners and those looking to refresh their skills.',
    image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=600',
    registrationLink: '#register'
  },
  {
    title: 'Introduction to Machine Learning',
    date: oneMonthFromNow.toISOString(),
    time: '5:00 PM - 7:00 PM',
    location: 'Virtual Event',
    description: 'Learn the fundamentals of machine learning algorithms and how to implement them in Python. No prior ML experience required.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
    registrationLink: '#register'
  },
  {
    title: 'Summer Hackathon 2025',
    date: twoMonthsFromNow.toISOString(),
    time: '48-Hour Event',
    location: 'University Campus Center',
    description: 'Our annual hackathon! Form teams, build innovative projects, and compete for prizes. Open to all skill levels.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
    registrationLink: '#register'
  },
  {
    title: 'Building RESTful APIs',
    date: oneMonthAgo.toISOString(),
    time: '6:00 PM - 8:00 PM',
    location: 'Computer Science Building, Room 101',
    description: 'A workshop on designing and implementing RESTful APIs using Node.js and Express. Participants built a fully functional API by the end of the session.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Git & GitHub Workshop',
    date: twoMonthsAgo.toISOString(),
    time: '4:00 PM - 6:00 PM',
    location: 'Computer Science Building, Room 202',
    description: 'An introduction to version control with Git and collaboration using GitHub. Participants learned how to manage repositories, branches, and pull requests.',
    image: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Mobile App Development',
    date: twoMonthsAgo.toISOString(),
    time: '5:00 PM - 7:00 PM',
    location: 'Virtual Event',
    description: 'A hands-on session on building mobile apps with React Native. Attendees created a simple but functional app during the workshop.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];