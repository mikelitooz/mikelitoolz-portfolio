"use client";

import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-[0_2px_20px_rgba(45,51,64,0.08)] hover:shadow-[0_4px_30px_rgba(45,51,64,0.12)] transition-all duration-300 ease-in-out text-center">
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center">
          <Image src={icon} alt={`${title} icon`} width={40} height={40} />
        </div>
      </div>
      <h3 className="subsection-heading mb-4 text-foreground uppercase">{title}</h3>
      <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
