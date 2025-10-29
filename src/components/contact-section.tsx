import { SectionTitle } from "./section-title";
import { AnimatedButton } from "./ui/animated-button";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  emailLabel?: string;
  emailHoverLabel?: string;
}

export function ContactSection({
  title = "Let's Connect",
  subtitle = "Ready to build your next product?",
  emailLabel = "Get In Touch",
  emailHoverLabel = "Let's Build! 💪",
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl flex flex-col items-center mx-auto text-center">
        <SectionTitle title={title} subtitle={subtitle} />

        <AnimatedButton
          href="mailto:hello@example.com"
          label={emailLabel}
          hoverLabel={emailHoverLabel}
          variant="primary"
          className="text-xl md:text-2xl"
        />
      </div>
    </section>
  );
}
