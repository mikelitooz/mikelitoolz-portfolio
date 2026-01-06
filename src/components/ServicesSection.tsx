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
    <section className="relative py-24 md:py-32 bg-swiss-charcoal" id="services">
      <Container>
        <div className="flex flex-col gap-16 md:gap-24">
          <SectionTitle
            title={page === "automation" ? "Solutions That Save You Hours" : "Products That Ship Fast"}
            className="text-left md:text-left"
          />

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
                  <div className="w-full h-px bg-swiss-border group-hover:bg-swiss-platinum/50 transition-colors duration-500 mb-2" />

                  <div className="flex items-center gap-4">
                    <span className="text-swiss-gray font-mono text-sm tracking-widest">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    {Icon &&
                      (isImage ? (
                        <Image
                          src={Icon}
                          alt={service.title}
                          className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity invert dark:invert-0"
                        />
                      ) : (
                        // @ts-ignore - We know it's a component if not an image
                        <Icon className="w-6 h-6 text-accent" />
                      ))}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-swiss-platinum group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-lg text-swiss-gray leading-relaxed max-w-md">{service.description}</p>
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
