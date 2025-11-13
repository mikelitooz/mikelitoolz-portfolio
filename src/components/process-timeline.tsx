import { LucideProps } from "lucide-react";
import { RefAttributes } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  progress: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
      {steps.map((step, index) =>{
        const IconComponent = step.icon;
        return (
        <div key={index} className="relative text-center group">
          {/* Unified circular badge with icon + number */}
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-300">
            <IconComponent className="text-3xl" />
            <div className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold shadow-md">
              {step.number}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
        </div>
      )})}
    </div>
  );
}
