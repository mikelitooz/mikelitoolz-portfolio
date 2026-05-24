import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins if needed
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

// Common animation configurations
export const animations = {
  fadeIn: {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  },
  slideUp: {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  },
  slideInLeft: {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  },
  slideInRight: {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  },
  scaleIn: {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
  },
};

// Timeline creation helper
export const createTimeline = (options?: gsap.TimelineVars) => {
  return gsap.timeline(options);
};

// Quick animation helpers
export const animateIn = (element: gsap.TweenTarget, animation = animations.fadeIn) => {
  return gsap.fromTo(element, animation, { opacity: 1, x: 0, y: 0, scale: 1 });
};

export const staggerIn = (
  elements: gsap.TweenTarget,
  animation = animations.slideUp,
  stagger = 0.2
) => {
  return gsap.fromTo(
    elements,
    animation,
    {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      stagger,
    }
  );
};