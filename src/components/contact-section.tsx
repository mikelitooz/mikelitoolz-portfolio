import Link from "next/link";
import { SectionTitle } from "./section-title";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  emailLabel?: string;
  showSocials?: boolean;
}

export function ContactSection({
  title = "Let's Connect",
  subtitle = "Ready to build your next product?",
  emailLabel = "Get In Touch",
  showSocials = true,
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <Link
            href="mailto:hello@example.com"
            className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            ✉️ {emailLabel}
          </Link>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors"
          >
            → GitHub
          </a>
        </div>
        {showSocials && (
          <div className="flex gap-6 justify-center text-2xl">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Twitter/X"
            >
              𝕏
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Portfolio"
            >
              ⚙️
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
