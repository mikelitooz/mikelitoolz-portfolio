"use client";

import React, { FC } from "react";
import { automationTools, fullStackTools } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { TechStackBadge } from "./tech-stack-badge";
import Image from "next/image";
import { SectionTitle } from "./section-title";
import Container from "./Container";

type IconType = React.ComponentType<{ className?: string }> | string;

interface ToolType {
  id: string;
  name: string;
  icon: IconType;
}

interface TechStackSectionProps {
  page: "automation" | "home";
}

const TechStackSection: FC<TechStackSectionProps> = ({ page }) => {
  const pageTechStack = page === "automation" ? automationTools : fullStackTools;
  return (
    <section className="relative overflow-hidden">
      <Container className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full py-8">
          <SectionTitle title="Technology Stack" />
          <div className="relative w-full overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              speed={500}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: { slidesPerView: 3, spaceBetween: 8 },
                640: { slidesPerView: 4, spaceBetween: 12 },
                768: { slidesPerView: 5, spaceBetween: 14 },
                1024: { slidesPerView: 7, spaceBetween: 16 },
              }}
              className="py-4 w-full"
            >
              {pageTechStack.map((tool: ToolType) => {
                const iconNode =
                  typeof tool.icon === "function" ? (
                    React.createElement(tool.icon, { className: "w-8 h-8" })
                  ) : (
                    <Image src={tool.icon} alt={tool.name} width={32} height={32} className="object-contain" />
                  );

                return (
                  <SwiperSlide key={tool.id} className="flex justify-center">
                    <TechStackBadge name={tool.name} icon={iconNode} color={"bg-card/0"} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechStackSection;
