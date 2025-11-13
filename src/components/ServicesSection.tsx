import { FC } from "react";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import { automationServices, services } from "@/constants";
import { ServiceCard } from "./service-card";

interface ServicesSectionProps {
  page: "home" | "automation";
}

const ServicesSection: FC<ServicesSectionProps> = ({page}) => {
    const pageServices = page === 'automation' ? automationServices : services;
  return (
    <section className="relative overflow-hidden">
      <Container className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full py-8">
          <SectionTitle title={page === 'automation' ? "What I Build" : "What I Build"} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pageServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;

