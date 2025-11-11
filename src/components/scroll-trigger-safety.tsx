"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * Global ScrollTrigger safety component that handles page visibility changes.
 * Prevents errors when users return to the tab after leaving it inactive.
 */
export function ScrollTriggerSafety() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is now hidden - disable ScrollTrigger updates
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger) {
            trigger.disable();
          }
        });
      } else {
        // Page is now visible - safely re-enable ScrollTrigger
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
          ScrollTrigger.getAll().forEach(trigger => {
            if (trigger && typeof trigger.enable === 'function') {
              try {
                trigger.enable();
              } catch {
                // If re-enabling fails, kill the trigger to prevent future errors
                if (typeof trigger.kill === 'function') {
                  trigger.kill();
                }
              }
            }
          });

          // Refresh ScrollTrigger after re-enabling to recalculate positions
          try {
            ScrollTrigger.refresh();
          } catch (error) {
            // Silently handle refresh errors
            console.warn('ScrollTrigger refresh failed:', error);
          }
        }, 100);
      }
    };

    // Listen for page visibility changes
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
