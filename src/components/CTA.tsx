import { socialLinks } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import { FC } from "react";
import Container from "./Container";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { CalendarIcon, QrCode } from "@/assets";
import MagneticButton from "./ui/MagneticButton";

const CTASection: FC = ({ }) => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Main Action Grid - Swiss Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
            <Link
              href="mailto:ifeanyi_micheal@yahoo.com?subject=AI%20Automation%20Inquiry"
              className="w-full aspect-square md:aspect-auto md:h-[500px] rounded-[2rem] bg-swiss-platinum flex flex-col items-center justify-center text-swiss-black transition-colors duration-300 hover:bg-white group overflow-hidden relative cursor-pointer"
            >
              <div className="z-10 flex flex-col items-center gap-4 p-8 text-center">
                <span className="text-xl md:text-2xl font-medium tracking-widest uppercase opacity-70">Ready to Validate?</span>
                <h2 className="text-[10vw] md:text-[5vw] font-bold leading-none tracking-tighter group-hover:tracking-tight transition-all duration-500">
                  BOOK CALL
                </h2>
              </div>
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>

            {/* Right: Contra (Verified Partner) */}
            <div className="w-full aspect-square md:aspect-auto md:h-[500px] rounded-[2rem] border border-swiss-border bg-swiss-charcoal/50 flex flex-col items-center justify-center relative overflow-hidden group hover:border-swiss-platinum/30 transition-colors duration-500">
              <div className="z-10 flex flex-col items-center gap-8">
                <span className="text-xl md:text-2xl font-medium tracking-widest uppercase text-swiss-gray">Direct Hire</span>

                {/* Contra Button Container */}
                <div className="transform scale-125 md:scale-150">
                  <div
                    className="contra-hire-me-button"
                    data-analyticsuserid="a50dccd3-c110-4c81-9aaa-dfb3145cd8b3"
                    data-theme="dark"
                    data-username="izzydevbuilds"
                  ></div>
                </div>
              </div>

              {/* Decorative Background for Contra */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-swiss-stone/10 to-transparent opacity-50" />
            </div>
          </div>

          <Script src="https://contra.com/static/embed/sdk.js" strategy="lazyOnload" />

          {/* Footer Socials */}
          <div className="mt-8 flex gap-12 flex-wrap justify-center">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                className="text-lg text-swiss-gray hover:text-swiss-platinum transition-colors tracking-tight uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
