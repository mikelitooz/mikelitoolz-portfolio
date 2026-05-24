"use client";

import { StructuredData, generateServiceSchema, generateFAQSchema, type FAQ } from "@/lib/structured-data";

interface PageSchemasProps {
  services?: Array<"mvp" | "automation" | "design">;
  faqs?: FAQ[];
}

export function PageSchemas({ services = [], faqs = [] }: PageSchemasProps) {
  return (
    <>
      {services.map((serviceType) => (
        <StructuredData key={serviceType} data={generateServiceSchema(serviceType)} />
      ))}
      {faqs.length > 0 && <StructuredData data={generateFAQSchema(faqs)} />}
    </>
  );
}
