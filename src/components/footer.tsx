import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <Link
            href="/"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/automation"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Automations
          </Link>
          <Link
            href="/#contact"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
