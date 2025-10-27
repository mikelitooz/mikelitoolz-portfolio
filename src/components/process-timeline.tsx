"use client";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Vertical connecting line - hidden on mobile */}
      <div className="hidden md:block absolute left-[50px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20" />

      <div className="space-y-8 md:space-y-16">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-start md:items-center gap-6 md:gap-12`}
            >
              {/* Icon Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-[100px] h-[100px] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center relative group hover:scale-105 transition-transform">
                  <div className="text-4xl">{step.icon}</div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center border-2 border-background">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${isEven ? "md:text-left" : "md:text-right"}`}>
                <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-accent/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                      Step {step.number}
                    </div>
                    <span className="text-sm text-foreground/60 font-medium">{step.progress}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>

                  {/* Progress Bar */}
                  <div className="mt-6 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all"
                      style={{ width: step.progress }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
