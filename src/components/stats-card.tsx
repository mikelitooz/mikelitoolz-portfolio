import { LucideProps } from "lucide-react";
import { RefAttributes } from "react";

interface StatsCardProps {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  value: string;
  label: string;
  subtitle: string;
  bgColor: string;
}

export function StatsCard({ icon, value, label, subtitle, bgColor }: StatsCardProps) {
  return (
    <div className="relative p-8 text-center">
      <div className="text-5xl font-bold mb-2 text-foreground">{value}</div>
      <h3 className="text-base font-semibold mb-2 text-foreground">{label}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{subtitle}</p>
    </div>
  );
}
