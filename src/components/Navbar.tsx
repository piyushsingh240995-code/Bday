import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBirthdaySurprise: () => void;
}

export default function Navbar({ onOpenBirthdaySurprise }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080a0f]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-white flex items-center gap-2 hover:opacity-85 transition-opacity"
        >
          <span>SAKSHI</span>
          <span className="text-purple-400 font-mono text-xs">/ XIV</span>
        </a>

        {/* Clean minimal navigation */}
        <nav className="flex items-center gap-6 text-xs font-mono text-slate-400">
          <a href="#exhibits" className="hover:text-white transition-colors hidden sm:inline">
            EXHIBITS
          </a>
          <a href="#letter" className="hover:text-white transition-colors hidden sm:inline">
            THE LETTER
          </a>

          <button
            onClick={onOpenBirthdaySurprise}
            className="px-3.5 py-1.5 bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-purple-400/40 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-purple-300" />
            <span>Celebrate 14</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
