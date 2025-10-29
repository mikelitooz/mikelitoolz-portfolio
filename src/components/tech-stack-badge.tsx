"use client"

import { GlowingEffect } from "@/components/ui/glowing-effect"

interface TechStackBadgeProps {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export function TechStackBadge({ name, icon, color }: TechStackBadgeProps) {
  return (
    <div className="relative bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-all hover:transform hover:scale-105 flex flex-col items-center gap-3">
      <GlowingEffect
        spread={30}
        glow={true}
        disabled={false}
        proximity={60}
        inactiveZone={0.1}
        borderWidth={1}
      />
      <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
        {icon}
      </div>
      <p className="text-xs font-medium">{name}</p>
    </div>
  );
}
