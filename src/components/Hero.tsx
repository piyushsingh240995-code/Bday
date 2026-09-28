import { Sparkles, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenBirthdaySurprise: () => void;
}

export default function Hero({ onOpenBirthdaySurprise }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Anti-slop zero-pill clean metadata */}
        <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-8 tracking-widest uppercase">
          <span className="text-amber-400">🌻 29.09.2026</span>
          <span className="text-slate-600">/</span>
          <span>SAKSHI TURNS 14</span>
          <span className="text-slate-600">/</span>
          <span className="text-teal-400">MIDNIGHT EDITION</span>
        </div>

        {/* Minimal High-End Title */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.04]">
          The Nonchalant <br />
          <span className="bg-gradient-to-r from-purple-200 via-amber-100 to-teal-200 bg-clip-text text-transparent">
            Fourteen
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Golden sunflowers, oversized streetwear cuts, unstoppable volleyball spikes, and an unbothered aura. Crafted exclusively for Sakshi.
        </p>

        {/* Action Button: Liquid Glass Pristine Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onOpenBirthdaySurprise}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-medium text-sm rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-all flex items-center gap-2.5 active:scale-98 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-purple-200" />
            <span>Celebrate Sakshi's 14th Birthday</span>
          </button>

          <a
            href="#exhibits"
            className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-mono text-xs rounded-2xl transition-all"
          >
            View Generative Dossier
          </a>
        </div>
      </div>

      <div className="mt-16">
        <a
          href="#exhibits"
          className="text-slate-600 hover:text-slate-400 transition-colors p-2 inline-flex flex-col items-center gap-1 text-[11px] font-mono tracking-wider"
        >
          <span>SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
