import StreetwearFashionArt from './StreetwearFashionArt';
import VolleyballMathArt from './VolleyballMathArt';
import SunflowerMathArt from './SunflowerMathArt';

export default function GenerativeExhibits() {
  return (
    <section id="exhibits" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Minimal Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="text-xs font-mono text-purple-400 mb-2 tracking-widest uppercase">
          BLUEPRINTS // 01 — 03
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          The Nonchalant Archetype
        </h2>
        <p className="text-slate-400 text-sm font-light mt-2 max-w-xl">
          Procedural vector mathematics visualizing oversized streetwear drapery, varsity volleyball physics, and her favorite golden sunflower.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exhibit 1: Streetwear & SK8 Clothing Style */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-purple-400/40 transition-all">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
              <span>01. FASHION BLUEPRINT</span>
              <span className="text-purple-400">OVERSIZED DRAPE</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-1">
              SK8 Streetwear Style
            </h3>
            <p className="text-slate-400 text-xs font-light mb-4">
              Harmonic sine calculations simulating the slouchy drop-shoulder hoodie cut, relaxed cargo lines, and unbothered posture.
            </p>
          </div>

          <div className="bg-black/50 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
            <StreetwearFashionArt />
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>FIT: OVERSIZED HOODIE + CARGO</span>
            <span className="text-purple-300">100% UNBOTHERED</span>
          </div>
        </div>

        {/* Exhibit 2: Volleyball Spike Trajectory */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-teal-400/40 transition-all">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
              <span>02. COURT PHYSICS</span>
              <span className="text-teal-400">PARABOLIC SPIKE</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-1">
              Varsity Volleyball Ace
            </h3>
            <p className="text-slate-400 text-xs font-light mb-4">
              Calculated set-to-spike projectile arc over the net. Sakshi's signature #14 outside hitter attack vector.
            </p>
          </div>

          <div className="bg-black/50 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
            <VolleyballMathArt />
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>ROLE: OUTSIDE SPIKER #14</span>
            <span className="text-teal-300">CLUTCH: 99.9%</span>
          </div>
        </div>

        {/* Exhibit 3: Sunflower Golden Ratio Art */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-amber-400/40 transition-all md:col-span-2 lg:col-span-1">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
              <span>03. BOTANICAL MATH</span>
              <span className="text-amber-400">GOLDEN RATIO Φ</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-1">
              The Golden Sunflower
            </h3>
            <p className="text-slate-400 text-xs font-light mb-4">
              Fibonacci phyllotaxis spiral geometry ($137.5^\circ$). Sakshi's favorite bloom representing loyalty, strength, and hidden warmth.
            </p>
          </div>

          <div className="bg-black/50 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
            <SunflowerMathArt />
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>FAVORITE BLOOM: SUNFLOWER</span>
            <span className="text-amber-300">WARMTH & LIGHT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
