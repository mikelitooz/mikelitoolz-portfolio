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
    <section className="relative overflow-hidden py-16 md:py-24">
      <Container className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full">
          <SectionTitle title={page === 'automation' ? "Solutions That Save You Hours, Not Cost You Months" : "Products That Ship Fast and Scale Faster"} />
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
