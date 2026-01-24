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
  // Add your client testimonials here when available
];
