"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Container from "./Container";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/automation", label: "Automations" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled && !isMobileMenuOpen ? "bg-foreground/5 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Container>
          <div className="py-4 flex h-20 items-center justify-between">
            <Link href="/" className="group z-50">
              <span className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 ease-in-out">
                IzzyDev
                <span className="text-accent group-hover:text-primary transition-colors duration-300 ease-in-out">Builds</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-300 ease-in-out group ${
                      isActive ? "text-accent" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ease-in-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
              <a
                href="#contact"
                onClick={handleContactClick}
                className="relative text-sm font-medium transition-colors duration-300 ease-in-out group text-foreground/70 hover:text-foreground"
              >
                Contact
                <span className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
              </a>
              <div
                className="contra-hire-me-button"
                data-analyticsuserid="a50dccd3-c110-4c81-9aaa-dfb3145cd8b3"
                data-theme="light"
                data-username="izzydevbuilds"
              ></div>
              <Script src="https://contra.com/static/embed/sdk.js" strategy="lazyOnload" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" onClick={() => setIsMobileMenuOpen(false)} />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-2xl font-medium transition-colors duration-300 ease-in-out ${
                  isActive ? "text-accent" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="text-2xl font-medium transition-colors duration-300 ease-in-out text-foreground/70 hover:text-foreground"
          >
            Contact
          </a>
          <div
            className="contra-hire-me-button"
            data-analyticsuserid="a50dccd3-c110-4c81-9aaa-dfb3145cd8b3"
            data-theme="light"
            data-username="izzydevbuilds"
          ></div>
        </div>
      </div>
    </>
  );
}
