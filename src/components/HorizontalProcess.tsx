"use client";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HorizontalProcessProps {
  steps: Step[];
}

export default function HorizontalProcess({ steps }: HorizontalProcessProps) {
  return (
    <div className="relative bg-swiss-charcoal py-24 md:py-32 border-t border-swiss-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-32">
          {/* Sticky Header (Left) */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="sticky top-32">
              <h2 className="text-transit-heading text-swiss-platinum leading-[0.8]">
                THE
                <br />
                <span className="text-swiss-gray opacity-50">PROCESS</span>
              </h2>
              <p className="mt-8 text-lg text-swiss-gray max-w-xs leading-relaxed">
                A linear journey from chaos to clarity. We validate, build, and scale without the fluff.
              </p>
            </div>
          </div>

          {/* Vertical Steps List (Right) */}
          <div className="md:w-2/3 lg:w-3/4 flex flex-col pt-8 md:pl-12">
            {steps.map((step) => (
              <div key={step.number} className="group relative border-b border-swiss-border/50 py-16">
                <div className="flex flex-col items-start gap-8">
                  {/* Number - Large Editorial Style */}
                  <span className="text-8xl md:text-9xl font-bold text-swiss-platinum/20 leading-none select-none">
                    {String(step.number).padStart(2, "0")}
                  </span>

                  <div className="space-y-6 max-w-2xl">
                    <h3 className="text-3xl md:text-5xl font-bold text-swiss-platinum tracking-tight uppercase">{step.title}</h3>
                    <p className="text-xl text-swiss-gray leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
