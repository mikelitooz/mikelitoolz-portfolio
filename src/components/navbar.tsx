"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/automation", label: "Automations" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="group transition-colors duration-500">
          <span className="text-xl font-bold text-primary group-hover:text-accent">
            IzzyDev<span className="text-accent group-hover:text-primary">Builds</span>
          </span>
        </Link>
        <div className="flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors group ${
                  isActive ? "text-accent" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          })}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="relative text-sm font-medium transition-colors group text-foreground/70 hover:text-foreground"
          >
            Contact
            <span className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 w-0 group-hover:w-full" />
          </a>
        </div>
      </div>
    </nav>
  );
}
