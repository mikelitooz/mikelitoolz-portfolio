"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-border/40">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full py-6 text-left flex items-start justify-between gap-6 transition-colors duration-300 ease-in-out hover:opacity-80 group cursor-pointer"
            >
              <h3 className="text-lg font-medium text-foreground pr-4 group-hover:text-accent transition-colors duration-300">
                {faq.question}
              </h3>
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-[5px] bg-foreground flex items-center justify-center transition-colors duration-300 ${
                  isOpen ? "bg-accent text-background" : "text-background"
                }`}
              >
                <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                  <Plus className="w-4 h-4" />
                </motion.div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-12">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
