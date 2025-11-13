import { LucideProps } from "lucide-react";
import { RefAttributes } from "react";

interface WhyCardProps {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}

export function WhyCard({ icon, title, description }: WhyCardProps) {
  const IconComponent = icon;
  return (
    <div className="relative p-6">
      <IconComponent className="" />

      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
    </div>
  );
}
