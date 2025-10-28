"use client";

import React from "react";
import { automationTools } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { TechStackBadge } from "./tech-stack-badge";

type IconType = React.ComponentType<{ className?: string }> | string;

interface ToolType {
  id: string;
  name: string;
  icon: IconType;
}

export function AutomationTechStack() {
  return (
    <section className="py-12 px-4 bg-secondary/0">
      <div className={`max-w-6xl mx-auto`}>
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-semibold">Technology Stack</h3>
          <p className="text-foreground/70 mt-2">Enterprise-grade tools architected for reliability and scale</p>
        </div>

        <div className="relative w-full overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            speed={500}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 12 },
              640: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 16 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
            className="py-4 w-full"
          >
            {automationTools.map((tool) => {
              const iconNode =
                typeof tool.icon === "function" ? (
                  React.createElement(tool.icon as React.ComponentType<{ className?: string }>, { className: "w-10 h-10" })
                ) : (
                  <Image src={tool.icon as string} alt={tool.name} width={40} height={40} className="object-contain" />
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
    </section>
  );
}
