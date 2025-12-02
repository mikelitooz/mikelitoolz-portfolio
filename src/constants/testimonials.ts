export interface Testimonial {
  id: string;
  author: {
    name: string;
    role: string;
    company: string;
  };
  content: string;
  rating: 5;
  date: string;
  project?: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    author: {
      name: 'Harrison Chikezie',
      role: 'Founder',
      company: 'Attesta Digital Services',
    },
    content:
      'Israel was well dedicated to the project with a keen eye for details. The most interesting part of working with him was his intuition in coming up with solutions even when not explicitly given.',
    rating: 5,
    date: '2024-10-15',
    verified: true,
  },
  {
    id: 'testimonial-2',
    author: {
      name: 'Chiemelie Okoye',
      role: 'Founder',
      company: 'AirbillsPay',
    },
    content:
      'Chinwuba is someone that is dedicated to his work and he always meet up on deadlines with a professional result. He is also a good team player that tries to understand what the project demands and his code base is well structured.',
    rating: 5,
    date: '2024-09-20',
    project: 'AirbillsPay Payment Platform',
    verified: true,
  },
];
