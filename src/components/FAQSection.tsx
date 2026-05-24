import { FC } from "react";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import { FAQAccordion } from "./faq-accordion";
import { automationFaqs, faqs } from "@/constants";

interface FAQSectionProps {
  page: "home" | "automation";
}

const FAQSection: FC<FAQSectionProps> = ({ page }) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <Container>
        <div className="flex flex-col w-full">
          <SectionTitle title="Questions You're Probably Asking" className="text-left" />
          <FAQAccordion faqs={page === "automation" ? automationFaqs : faqs} />
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
