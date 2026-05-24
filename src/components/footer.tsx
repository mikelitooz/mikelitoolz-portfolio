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
    <footer className="relative py-24 border-t border-swiss-border overflow-hidden bg-swiss-charcoal font-mono">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xl font-bold text-swiss-platinum tracking-tighter uppercase font-sans">
              MICHEAL IFEANYI
            </Link>
            <p className="text-sm text-swiss-gray leading-relaxed max-w-xs">
              Independent AI Engineer — Architecting autonomous pipelines & robust financial engines for fast-scaling companies.
            </p>
            {/* Live Status */}
            <div className="mt-2 flex items-center gap-2.5 text-xs font-mono tracking-wider uppercase text-swiss-gray bg-swiss-stone border border-swiss-border px-3 py-1.5 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span>Available for Q3 Embedded Work</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs text-swiss-platinum tracking-[0.2em] uppercase mb-4 font-semibold">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-swiss-gray hover:text-accent transition-colors uppercase"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs text-swiss-platinum tracking-[0.2em] uppercase mb-4 font-semibold">Connect</h3>
            <ul className="space-y-2 font-mono text-xs">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-swiss-gray hover:text-accent transition-colors uppercase"
                  >
                    {link.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-swiss-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-swiss-gray">
          <p className="tracking-wider">
            &copy; {new Date().getFullYear()} Micheal Ifeanyi. All rights reserved.
          </p>
          <p className="tracking-wider">
            [ Swiss Carbon Edition ]
          </p>
        </div>

        {/* Giant horizontal low-opacity signature */}
        <div className="mt-16 select-none pointer-events-none text-center opacity-30 select-none">
          <span className="text-[12vw] font-bold text-swiss-stone/40 leading-none tracking-tighter block uppercase font-sans">
            MICHEAL IFEANYI
          </span>
        </div>
      </Container>
    </footer>
  );
}
