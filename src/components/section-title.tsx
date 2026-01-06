import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className }: SectionTitleProps) {
  return <h2 className={cn("section-heading text-center mb-12 text-foreground", className)}>{title}</h2>;
}
