"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-border/40">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full py-6 text-left flex items-start justify-between gap-6 transition-colors duration-300 ease-in-out hover:opacity-80"
          >
            <h3 className="text-lg font-medium text-foreground pr-4">{faq.question}</h3>
            <div className="cursor-pointer flex-shrink-0 w-6 h-6 rounded-[5px] bg-foreground flex items-center justify-center transition-all duration-300 ease-in-out">
              {openIndex === index ? <X className="w-4 h-4 text-background" /> : <Plus className="w-4 h-4 text-background" />}
            </div>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="pr-12">
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
