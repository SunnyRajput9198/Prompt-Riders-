export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  registrationLink?: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface Resource {
  title: string;
  category: string;
  level: string;
  description: string;
  topics: string[];
  link: string;
}