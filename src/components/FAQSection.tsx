import { FC } from "react";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import { FAQAccordion } from "./faq-accordion";
import { automationFaqs, faqs } from "@/constants";

interface FAQSectionProps {
  page: "home" | "automation";
}

const FAQSection: FC<FAQSectionProps> = ({page}) => {
  return (
    <section className="relative overflow-hidden">
      <Container className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full py-8">
          <SectionTitle title="Frequently Asked Questions" />
          <FAQAccordion faqs={page === 'automation' ? automationFaqs : faqs} />
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
