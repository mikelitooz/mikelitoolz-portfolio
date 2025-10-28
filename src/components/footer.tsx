import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-foreground/60 text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="text-foreground hover:text-accent transition-colors w-10 h-10 flex items-center justify-center rounded-full"
          >
            <BsTwitterX size={24} />
          </Link>
          <Link
            href="/"
            className="text-foreground hover:text-accent transition-colors w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="/"
            className="text-foreground hover:text-accent transition-colors w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaLinkedinIn size={24} />
          </Link>
          <Link
            href="/"
            className="text-foreground hover:text-accent transition-colors w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
