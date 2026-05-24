"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface PillButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export function PillButton({ href, variant = "primary", children, className }: PillButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent";

  const variantStyles = {
    primary: "bg-accent text-white hover:bg-accent/90 hover:shadow-[0_8px_24px_rgba(161,104,211,0.3)] hover:scale-105",
    secondary: "border-2 border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background hover:scale-105"
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </Link>
  );
}
