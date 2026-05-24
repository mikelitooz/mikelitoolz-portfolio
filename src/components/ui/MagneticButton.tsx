"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  strength?: number; // Added strength prop for customization
}

export default function MagneticButton({ children, className = "", strength = 0.35, ...props }: MagneticButtonProps) {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const currentMagnetic = magnetic.current;

    if (currentMagnetic) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = currentMagnetic.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * strength);
        yTo(y * strength);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      currentMagnetic.addEventListener("mousemove", handleMouseMove);
      currentMagnetic.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        currentMagnetic.removeEventListener("mousemove", handleMouseMove);
        currentMagnetic.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [strength]);

  return (
    <div
      ref={magnetic}
      className={`relative inline-flex cursor-pointer touch-none select-none border-none outline-none ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
