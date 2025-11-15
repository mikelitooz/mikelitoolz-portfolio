"use client";

import { FC, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { PillButton } from "./pill-button";
import Container from "./Container";
import { BgImage } from "@/assets";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta1?: { label: string; hoverLabel: string; href: string };
  cta2?: { label: string; hoverLabel: string; href: string };
}

const HeroSection: FC<HeroSectionProps> = ({ title, subtitle, cta1, cta2 }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate title with split text effect
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
        }
      )
        // Animate subtitle
        .fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        // Stagger CTA buttons
        .fromTo(
          ctaContainerRef.current?.children || [],
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
          },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255, 0.9), rgba(255,255,255, 0.9)), url(${BgImage.src})`,
      }}
    >
      {/* <Image src={BgImage} alt="" fill priority className="object-cover object-center -z-10" /> */}

      {/* Optional overlay */}
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center 
 bg-muted/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
      <Container className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 ref={titleRef} className="hero-heading text-center mb-6 text-balance">
            {title}
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl text-center text-foreground font-medium mb-10 text-balance max-w-3xl mx-auto"
          >
            {subtitle}
          </p>
          <div ref={ctaContainerRef} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {cta1 && (
              <PillButton href={cta1.href} variant="primary">
                {cta1.label}
              </PillButton>
            )}
            {cta2 && (
              <PillButton href={cta2.href} variant="secondary">
                {cta2.label}
              </PillButton>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

//       <Image src={BgImage} alt="" fill priority className="object-cover object-center -z-10" />

//       {/* Optional overlay */}
//       <div
//         className="absolute pointer-events-none inset-0 flex items-center justify-center -z-1
//  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
//       />
