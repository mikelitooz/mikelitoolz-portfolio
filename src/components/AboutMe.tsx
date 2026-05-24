import { FC } from "react";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import Image from "next/image";
import { ProfileImage } from "@/assets";

const AboutMe: FC = ({}) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <Container className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full">
          <SectionTitle title="Why I Build Different" />
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Left Column - Image */}
            <div className="w-full flex items-center justify-center">
              <Image src={ProfileImage} alt="Izzy - Fullstack Developer" className="" />
            </div>

            {/* Right Column - Content */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-4 w-full">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                I&apos;m Izzy. Three years ago, I was the guy building side projects that nobody used. Then I figured out the problem: I was building for perfect, not for real.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Now I build MVPs that ship fast and iterate faster. I work with Next.js, Supabase, TypeScript, and AI tools like Claude and OpenAI to create products that look professional but launch in weeks, not months. My philosophy is simple: get it in front of users, learn what works, and improve from there.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I&apos;ve helped founders validate ideas, startups scale products, and businesses automate workflows that were eating up 10+ hours per week. If you need someone who codes fast, thinks strategically, and actually ships, let&apos;s talk.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
