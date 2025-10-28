import Link from "next/link";
import { SectionTitle } from "./section-title";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  emailLabel?: string;
}

export function ContactSection({
  title = "Let's Connect",
  subtitle = "Ready to build your next product?",
  emailLabel = "Get In Touch",
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl flex flex-col items-center mx-auto text-center">
        <SectionTitle title={title} subtitle={subtitle} />

        <Link
          href="mailto:hello@example.com"
          className="flex items-center justify-center text-lg sm:text-xl md:text-2xl font-semibold w-full max-w-xs px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
        {emailLabel}
        </Link>
      </div>
    </section>
  );
}
