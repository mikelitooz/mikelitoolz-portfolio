"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

const CalendlyModal = dynamic(() => import("./CalendlyModal"), { ssr: false });

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const desktopLinks = [
    { href: "/solutions", label: "Solutions" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/insights", label: "Insights" },
  ];

  const mobileLinks = [
    { href: "/solutions", label: "Solutions" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/insights", label: "Insights" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8">
      <div className="flex justify-between items-start mix-blend-difference text-white">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase hover:opacity-70 transition-opacity">
          MICHEAL IFEANYI
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-col items-end gap-1">
          <div className="flex gap-8 text-sm font-medium tracking-wide items-center">
            {desktopLinks.map((link) => (
              <Link key={link.label} href={link.href} className="relative group overflow-hidden">
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              </Link>
            ))}
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="px-5 py-2 border border-white/30 rounded-full text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Book a Call
            </button>
          </div>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">AI Automation Agency</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-sm font-bold uppercase tracking-widest">
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

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
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-12 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity text-swiss-platinum"
            >
              Close
            </button>

            {mobileLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl md:text-5xl font-bold uppercase tracking-tighter hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCalendlyOpen(true);
              }}
              className="mt-4 px-8 py-4 bg-swiss-platinum text-swiss-black font-bold uppercase tracking-widest rounded-full text-lg"
            >
              Book a Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Calendly Modal */}
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </nav>
  );
}
