"use client"

import { GlowingEffect } from "@/components/ui/glowing-effect"

interface TechStackBadgeProps {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export function TechStackBadge({ name, icon, color }: TechStackBadgeProps) {
  return (
    <div className="relative bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:transform hover:scale-105 flex flex-col items-center gap-4">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={80}
        inactiveZone={0.1}
        borderWidth={2}
      />
      <div className={`${color} w-16 h-16 rounded-lg flex items-center justify-center text-3xl`}>
        {icon}
      </div>
      <p className="text-sm font-semibold">{name}</p>
    </div>
  );
}
