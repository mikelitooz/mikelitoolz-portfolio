import { FC } from "react";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import Image from "next/image";
import { ProfileImage } from "@/assets";

const AboutMe: FC = ({}) => {
  return (
    <section className="relative overflow-hidden">
      <Container className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full py-8">
          <SectionTitle title="About Me" />
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Left Column - Image */}
            <div className="w-full flex items-center justify-center">
              <Image src={ProfileImage} alt="Izzy - Fullstack Developer" className="" />
            </div>

            {/* Right Column - Content */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-4 w-full">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Hey, I&apos;m Izzy, a Fullstack Developer focused on helping founders and businesses turn their ideas into fast,
                scalable, and visually appealing MVPs. I build products that combine performance, usability, and design using
                tools like Next.js, Supabase, ShadCn, TailwindCSS, n8n, and Claude AI.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                By combining code with no-code tools, I speed up development while maintaining high quality, delivering
                production-ready applications that are efficient, stable, and easy to maintain.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                With experience in AI-powered automation, workflow optimization, and fullstack development, I&apos;ve helped
                startups streamline operations, ship faster, and reach users sooner. My approach blends technical expertise with a
                clear understanding of business goals, ensuring every project delivers real results and long-term value.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
