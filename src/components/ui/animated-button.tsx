import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  href: string;
  label: string;
  hoverLabel: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function AnimatedButton({
  href,
  label,
  hoverLabel,
  variant = "primary",
  className,
}: AnimatedButtonProps) {
  return (
    <Link
      href={href}
      className={cn("btn", variant === "secondary" && "btn--secondary", className)}
    >
      <span className="btn__inner">
        <span className="btn__label" data-label={label} data-hover={hoverLabel}>
          {label}
          <span className="btn__label__background"></span>
        </span>
      </span>
      <span className="btn__background"></span>
    </Link>
  );
}
