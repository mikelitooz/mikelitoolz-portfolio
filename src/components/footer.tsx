import Link from "next/link";
import Container from "./Container";
import { socialLinks } from "@/constants";

export function Footer() {
  const navLinks = [
    { href: "/solutions", label: "Solutions" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/insights", label: "Insights" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <footer className="py-16 border-t border-swiss-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-swiss-platinum tracking-tighter uppercase">
              MICHEAL IFEANYI
            </Link>
            <p className="mt-3 text-sm text-swiss-gray leading-relaxed max-w-xs">
              AI Automation Agency — We build intelligent systems that run your operations.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs text-swiss-gray tracking-[0.2em] uppercase mb-4 font-medium">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-swiss-gray hover:text-swiss-platinum transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs text-swiss-gray tracking-[0.2em] uppercase mb-4 font-medium">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-swiss-gray hover:text-swiss-platinum transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-swiss-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-swiss-gray text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Micheal Ifeanyi. All rights reserved.
          </p>
          <p className="text-swiss-gray/50 text-xs tracking-wider">
            Built with Next.js & AI
          </p>
        </div>
      </Container>
    </footer>
  );
}
