import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-swiss-charcoal flex flex-col items-center justify-center p-6 text-center">
      {/* Swiss Layout Line */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-swiss-border" />

      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-[12rem] md:text-[18rem] font-bold text-swiss-platinum leading-none tracking-tighter opacity-10 select-none">
          404
        </h1>

        <div className="space-y-6 relative z-10 -mt-20 md:-mt-32">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Page Not Found</h2>
          <p className="text-swiss-gray text-lg md:text-xl max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-swiss-platinum text-swiss-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
            >
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </Link>
          </div>
        </div>
      </div>

      {/* Swiss Layout Line */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-swiss-border" />
    </div>
  );
}
