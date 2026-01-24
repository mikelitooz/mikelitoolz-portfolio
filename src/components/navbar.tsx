"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import MagneticButton from "./ui/MagneticButton";

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
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8">
      <div className="flex justify-between items-start mix-blend-difference text-white">
        {/* Logo / Brand - Top Left */}
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase hover:opacity-70 transition-opacity">
          MICHEAL IFEANYI
        </Link>

        {/* Desktop Nav - Top Middle/Right */}
        <div className="hidden md:flex flex-col items-end gap-1">
          <div className="flex gap-8 text-sm font-medium tracking-wide">
            {[
              { href: "/#work", label: "Work" },
              { href: "/#services", label: "Services" },
              { href: "/automation", label: "Automation" },
              { href: "/#contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="relative group overflow-hidden">
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              </Link>
            ))}
          </div>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">AI Automation Engineer</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-sm font-bold uppercase tracking-widest">
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0px at calc(100% - 3rem) 3rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 3rem)" }}
            exit={{ clipPath: "circle(0px at calc(100% - 3rem) 3rem)" }}
            transition={{ type: "spring", stiffness: 20, damping: 10 }}
            className="fixed inset-0 bg-swiss-charcoal z-60 flex flex-col items-center justify-center gap-8 text-swiss-platinum"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-12 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity text-swiss-platinum"
            >
              Close
            </button>

            {/* Links */}
            {[
              { href: "/#work", label: "Work" },
              { href: "/#services", label: "Services" },
              { href: "/automation", label: "Automation" },
              { href: "/#contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl md:text-5xl font-bold uppercase tracking-tighter hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
