import { useState } from 'react';
import { Mail, Sparkles, Heart, Lock, Unlock } from 'lucide-react';

export default function LetterSection() {
  const [showGappuNote, setShowGappuNote] = useState(false);
  const [unlockedSecretNote, setUnlockedSecretNote] = useState(false);

  return (
    <section id="letter" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
      <div className="liquid-glass rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Minimalist Top Meta Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-white font-medium">DISPATCH // 29 SEPTEMBER</span>
          </div>
          <span className="text-teal-400">FOR SAKSHI // XIV</span>
        </div>

        {/* Editorial Letter Content */}
        <div className="space-y-6 text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-light">
          <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Happy 14th Birthday, Sakshi.
          </div>

          <p>
            You can act completely nonchalant, put on your poker face, and pretend you're 100% unbothered 24/7 in your oversized hoodies, but today is your day and you deserve to know how truly special you are.
          </p>

          <p>
            Watching you own the volleyball court with that vicious spike, rock the cleanest SK8 streetwear silhouettes, and watch your favorite dramas like <em className="text-purple-300 font-medium not-italic">Teach You A Lesson</em> with that calm aura is unmatched. Just like the sunflowers you adore, no matter how tough or chaotic things get, you always stand tall and turn toward the light with an unshakable, quiet warmth.
          </p>

          <p>
            Fourteen is a massive chapter — the start of bigger matches, high school energy, and endless unforgettable memories. Keep that quiet confidence, keep smashing winners down the line, and never change who you are. The whole squad is immensely proud of you.
          </p>

          <div className="pt-2 text-white font-medium flex items-center justify-between text-sm">
            <span>Always in your corner,</span>
            <span className="font-mono text-xs text-purple-300">September 29, 2026</span>
          </div>
        </div>

        {/* Personalized Interactive Modules: Secret Best Friend Wish & Gappu Dossier */}
        <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Module 1: The Gappu Code */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>FAMILY DOSSIER</span>
                <span className="text-pink-400">ALIAS: GAPPU</span>
              </div>
              <p className="text-xs text-slate-300 font-light">
                Why relatives and the inner circle will always call you Gappu.
              </p>
            </div>

            <div className="mt-3">
              <button
                onClick={() => setShowGappuNote(!showGappuNote)}
                className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer w-full justify-center"
              >
                <Heart className="w-3 h-3 text-pink-400 fill-current" />
                <span>{showGappuNote ? 'Conceal Dossier' : 'Reveal Origin Story'}</span>
              </button>
            </div>
          </div>

          {/* Module 2: Personalized Secret Best Friend Note */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>PRIVATE NOTE</span>
                <span className="text-teal-400">BEST FRIEND CODE</span>
              </div>
              <p className="text-xs text-slate-300 font-light">
                A locked personal reminder from your closest friend.
              </p>
            </div>

            <div className="mt-3">
              <button
                onClick={() => setUnlockedSecretNote(!unlockedSecretNote)}
                className="text-xs font-mono text-teal-300 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer w-full justify-center"
              >
                {unlockedSecretNote ? <Unlock className="w-3 h-3 text-teal-400" /> : <Lock className="w-3 h-3 text-teal-400" />}
                <span>{unlockedSecretNote ? 'Lock Message' : 'Unlock Personal Message'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Revealed Content 1: Gappu Code */}
        {showGappuNote && (
          <div className="mt-4 p-5 rounded-2xl bg-purple-950/20 border border-purple-500/30 text-xs text-slate-300 leading-relaxed font-sans backdrop-blur-md animate-fadeIn">
            <span className="text-purple-300 font-semibold font-mono block mb-1">
              THE "GAPPU" CODE:
            </span>
            No matter how tall you grow, how fierce your volleyball serves become, or how high-fashion your oversized streetwear gets, to your family and closest ones you’ll always be their sweet, sharp, adorable Gappu who lights up every single room. Never lose that warmth!
          </div>
        )}

        {/* Revealed Content 2: Secret Best Friend Message */}
        {unlockedSecretNote && (
          <div className="mt-4 p-5 rounded-2xl bg-teal-950/20 border border-teal-500/30 text-xs text-slate-300 leading-relaxed font-sans backdrop-blur-md animate-fadeIn">
            <span className="text-teal-300 font-semibold font-mono block mb-1">
              BEST FRIEND PACT // 14TH BIRTHDAY:
            </span>
            "You are officially the coolest person I know. Don't worry about trying to look tough or nonchalant around us — we know how genuinely caring and awesome you are. Here's to winning every tournament this year, getting unlimited food, and staying best friends forever. Happy 14th birthday, Sakshi!"
          </div>
        )}
      </div>
    </section>
  );
}
