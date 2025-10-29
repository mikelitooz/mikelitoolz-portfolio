"use client";

import React from "react";
import { fullStackTools } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Type for our icon prop which can be either a React component or a string URL
type IconType = React.ComponentType<{ className?: string }> | string;

// Update the tool type to match our constants
interface ToolType {
  id: string;
  name: string;
  icon: IconType;
}

// Reuse existing badge for consistent styles
import { TechStackBadge } from "./tech-stack-badge";
import Image from "next/image";

export function TechStackSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
            Our Tech Stack
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Technology Excellence</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build robust, scalable solutions
          </p>
        </div>

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
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              320: { slidesPerView: 3, spaceBetween: 8 },
              640: { slidesPerView: 4, spaceBetween: 12 },
              768: { slidesPerView: 5, spaceBetween: 14 },
              1024: { slidesPerView: 7, spaceBetween: 16 },
            }}
            className="py-4 w-full"
          >
            {fullStackTools.map((tool: ToolType) => {
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
    </section>
  );
}
