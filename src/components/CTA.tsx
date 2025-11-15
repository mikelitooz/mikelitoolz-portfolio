import { socialLinks } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import { FC } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, QrCode } from "@/assets";

const CTASection: FC = ({}) => {
  return (
    <section id="contact">
      <Container>
        <div className="bg-accent px-6 sm:px-8 md:px-10 lg:px-16 py-6 md:py-10 rounded-[20px]">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-10">
            <div className="flex flex-col gap-10 sm:gap-20 lg:gap-30 items-center md:items-start">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-accent-foreground leading-tight">
                Got an Idea?
                <br /> Book Your Free Strategy Call Today!
              </h3>

              <div className="hidden md:flex flex-col" aria-label="Social media links">
                {socialLinks.map((link) => {
                  return (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      className="flex items-center text-accent-foreground gap-3 group w-fit"
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
                      <span className="text-lg transition-all duration-300 ease-in-out group-hover:pl-3">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Contact Card */}
            <div className="flex flex-col gap-6 bg-background/10 p-6 rounded-[50px] w-full max-w-[300px]">
              {/* Profile Badge */}
              <Link
                href="https://cal.com/izzydevbuild/30min"
                target="_blank"
                className="bg-accent-foreground/90 rounded-full p-3 flex items-center gap-3 shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center p-1.5">
                  <Image src={CalendarIcon} alt="Gmail logo" />
                </div>
                <span className="font-semibold tracking-[120%] text-foreground">Book a free call!</span>
              </Link>

              <div className="bg-background/15 rounded-3xl p-6 shadow-lg w-full">
                <div className="bg-white rounded-[20px] w-full p-2">
                  <Image src={QrCode} alt="scan qr code" width={200} height={200} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 md:hidden gap-7" aria-label="Social media links">
                {socialLinks.map((link) => {
                  return (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      className="col-span-6 flex items-center text-accent-foreground gap-3 group w-fit"
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
                      <span className="text-lg transition-all duration-300 ease-in-out group-hover:pl-3">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;