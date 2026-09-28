import { useState } from 'react';
import { X, Sparkles, Wind, Award, Flame, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CakeSurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CakeSurpriseModal({ isOpen, onClose }: CakeSurpriseModalProps) {
  // 14 candles for her 14th birthday
  const [candles, setCandles] = useState<boolean[]>(Array(14).fill(true));
  const [hasCelebrated, setHasCelebrated] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const blownCount = candles.filter((lit) => !lit).length;
  const allBlown = blownCount === 14;

  const triggerCelebration = () => {
    setHasCelebrated(true);

    // High performance lightweight confetti blast
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#c084fc', '#38bdf8', '#fbbf24', '#f472b6', '#ffffff'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleBlowCandle = (index: number) => {
    if (!candles[index]) return;
    const next = [...candles];
    next[index] = false;
    setCandles(next);

    if (next.filter((c) => !c).length === 14) {
      triggerCelebration();
    }
  };

  const handleBlowAll = () => {
    setCandles(Array(14).fill(false));
    triggerCelebration();
  };

  const handleRelight = () => {
    setCandles(Array(14).fill(true));
    setHasCelebrated(false);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/85 backdrop-blur-xl">
      <div className="relative w-full max-w-2xl liquid-glass rounded-3xl p-6 sm:p-10 border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.8)] my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SAKSHI // CHAPTER XIV</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
            Happy 14th Birthday!
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-light">
            {allBlown
              ? 'All 14 candles extinguished. May this year be your most phenomenal yet.'
              : 'Tap each candle or blow them all out together to make your birthday wish.'}
          </p>
        </div>

        {/* Liquid Glass Birthday Cake Area */}
        <div className="bg-black/50 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md mb-6">
          {/* 14 Candles Flex Grid */}
          <div className="flex flex-wrap justify-center items-end gap-2.5 sm:gap-3.5 mb-6 min-h-[80px]">
            {candles.map((isLit, idx) => (
              <button
                key={idx}
                onClick={() => handleBlowCandle(idx)}
                className="flex flex-col items-center cursor-pointer transition-transform hover:scale-110 active:scale-90"
                title={isLit ? `Tap to blow candle #${idx + 1}` : 'Extinguished'}
              >
                {/* Flame */}
                <div className="h-6 flex items-center justify-center">
                  {isLit ? (
                    <div className="w-3 h-5 bg-gradient-to-t from-amber-500 via-orange-400 to-yellow-200 rounded-full animate-flame shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
                  ) : (
                    <div className="w-1.5 h-2 bg-slate-500/40 rounded-full" />
                  )}
                </div>

                {/* Candle Stick */}
                <div
                  className={`w-2.5 sm:w-3 h-11 rounded-t-sm border border-white/20 ${
                    idx % 3 === 0
                      ? 'bg-gradient-to-b from-amber-300 via-amber-500 to-yellow-600 shadow-[0_0_8px_rgba(251,191,36,0.3)]'
                      : idx % 3 === 1
                      ? 'bg-gradient-to-b from-purple-400 to-indigo-600'
                      : 'bg-gradient-to-b from-teal-300 to-emerald-600'
                  }`}
                />
                <span className="text-[8px] font-mono text-slate-500 mt-1">{idx + 1}</span>
              </button>
            ))}
          </div>

          {/* Tiered Glass Cake */}
          <div className="space-y-1.5 max-w-sm mx-auto">
            <div className="h-8 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center gap-1.5 text-xs font-mono text-amber-200">
              <span>🌻</span>
              <span>SUNFLOWER EDITION // CHAPTER 14</span>
            </div>
            <div className="h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between px-6 text-xs font-mono text-slate-300">
              <span>SAKSHI (GAPPU)</span>
              <span className="text-teal-400">#14 ACE</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex justify-center">
            {!allBlown ? (
              <button
                onClick={handleBlowAll}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 text-white font-medium text-xs rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Wind className="w-3.5 h-3.5" />
                <span>Blow All 14 Candles & Make Wish</span>
              </button>
            ) : (
              <button
                onClick={handleRelight}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white text-xs font-mono rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Relight Candles</span>
              </button>
            )}
          </div>
        </div>

        {/* Certificate of Nonchalance (Revealed upon blowing all candles) */}
        {allBlown && (
          <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-950/40 to-black border border-purple-500/30 text-center animate-fadeIn">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-purple-300 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>OFFICIAL CERTIFICATE OF NONCHALANCE</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
              Sakshi // Gappu
            </h3>
            <p className="text-slate-400 text-xs font-light max-w-md mx-auto mb-4">
              Officially 14 years old. Unmatched court presence, superior streetwear style, and master of the unbothered smirk.
            </p>

            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-mono rounded-xl transition-all inline-flex items-center gap-1.5"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
              <span>{copiedLink ? 'Link Copied' : 'Share Experience Link'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
