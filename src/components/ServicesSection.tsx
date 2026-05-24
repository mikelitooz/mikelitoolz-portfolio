import { FC } from "react";
import Image from "next/image";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import { automationServices, services } from "@/constants";
import { ServiceCard } from "./service-card";

interface ServicesSectionProps {
  page: "home" | "automation";
}

const ServicesSection: FC<ServicesSectionProps> = ({ page }) => {
  const pageServices = page === "automation" ? automationServices : services;

  return (
    <section className="relative py-24 md:py-32 bg-swiss-charcoal border-b border-swiss-border font-mono" id="services">
      <Container>
        <div className="flex flex-col gap-16 md:gap-24">
          <div>
            <div className="text-xs text-accent tracking-[0.2em] uppercase mb-3">[ 04 / Capabilities ]</div>
            <SectionTitle
              title={page === "automation" ? "Systems That Save You Hours" : "Core Capabilities"}
              className="text-left md:text-left text-transit-heading"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24">
            {pageServices.map((service, index) => {
              // Safely handle missing icon if any, though types should match
              // Assuming service has { title, description, icon? }
              // If service-card had specific props, we map them here.
              // We need to assume the shape of 'service'.
              // Based on previous usage: {...service} was passed to ServiceCard.
              const Icon = service.icon || null;
              const isImage = Icon && typeof Icon === "object" && "src" in Icon;

              return (
                <div key={index} className="group flex flex-col gap-6 items-start">
                  <div className="w-full h-px bg-swiss-border group-hover:bg-accent/50 transition-colors duration-500 mb-2" />

                  <div className="flex items-center gap-4">
                    <span className="text-swiss-gray font-mono text-xs tracking-widest">
                      [ {(index + 1).toString().padStart(2, "0")} ]
                    </span>
                    {Icon &&
                      (isImage ? (
                        <Image
                          src={Icon}
                          alt={service.title}
                          className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity invert dark:invert-0"
                        />
                      ) : (
                        // @ts-ignore - We know it's a component if not an image
                        <Icon className="w-5 h-5 text-swiss-gray group-hover:text-accent transition-colors" />
                      ))}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-swiss-platinum uppercase tracking-wide group-hover:text-accent transition-colors font-sans">
                    {service.title}
                  </h3>

                  <p className="text-xs md:text-sm text-swiss-gray leading-relaxed max-w-md font-mono">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
