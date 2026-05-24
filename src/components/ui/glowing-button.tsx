"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlowingButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

// Beam paths for the button animation - adjusted for smaller button size
const beams = [
  {
    path: "M40 30H8C5.79 30 4 31.79 4 34V58",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["0%", "0%", "200%"],
        x2: ["0%", "0%", "180%"],
        y1: ["80%", "0%", "0%"],
        y2: ["100%", "20%", "20%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
  },
  {
    path: "M80 30H112C114.21 30 116 28.21 116 26V4",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
  },
];

const gradientColors = {
  start: "#d4a574",
  middle: "#f0c896",
  end: "#d4a574"
};

export function GlowingButton({
  href,
  children,
  className
}: GlowingButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-block group cursor-pointer",
        className
      )}
    >
      {/* Button with glow effect */}
      <span className="relative inline-flex items-center justify-center px-10 py-5 text-body-lg font-semibold rounded-full bg-transparent hover:bg-white/20 text-foreground border border-accent transition-all duration-300 ease-in-out overflow-hidden group-hover:scale-[1.02]">
        {/* Animated pulse beams in background */}
        <span className="absolute inset-0 overflow-hidden rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <svg
            width="120"
            height="60"
            viewBox="0 0 120 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            {beams.map((beam, index) => (
              <g key={index}>
                <path
                  d={beam.path}
                  stroke="var(--accent)"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
                <path
                  d={beam.path}
                  stroke={`url(#buttonGrad${index})`}
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    from="0 100"
                    to="100 0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            ))}
            <defs>
              {beams.map((_, index) => (
                <linearGradient
                  key={index}
                  id={`buttonGrad${index}`}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor={gradientColors.start} stopOpacity="0" />
                  <stop offset="50%" stopColor={gradientColors.middle} stopOpacity="1" />
                  <stop offset="100%" stopColor={gradientColors.end} stopOpacity="0" />
                </linearGradient>
              ))}
            </defs>
          </svg>
        </span>

        {/* Always visible glowing border */}
        <span className="absolute -inset-[2px] rounded-full pointer-events-none">
          <span className="absolute inset-0 rounded-full border-2 border-accent blur-sm" />
          <span className="absolute -inset-1 rounded-full bg-accent/40 blur-md" />
          <span className="absolute -inset-2 rounded-full bg-accent/20 blur-xl" />
        </span>

        {/* Button text */}
        <span className="relative z-10">{children}</span>
      </span>
    </Link>
  );
}
