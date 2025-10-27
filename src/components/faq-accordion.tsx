"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-colors"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-secondary/30 transition-colors"
          >
            <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
            <div
              className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="px-6 pb-5 pt-2">
              <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
