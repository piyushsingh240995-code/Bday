/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LiquidGlassCanvas from './components/LiquidGlassCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GenerativeExhibits from './components/GenerativeExhibits';
import LetterSection from './components/LetterSection';
import CakeSurpriseModal from './components/CakeSurpriseModal';
import Footer from './components/Footer';

export default function App() {
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-purple-500/30 selection:text-purple-200 relative overflow-hidden">
      {/* 60fps Lightweight Math.sin Generative Liquid Glass Canvas */}
      <LiquidGlassCanvas />

      {/* App Content */}
      <div className="relative z-10">
        <Navbar onOpenBirthdaySurprise={() => setIsSurpriseOpen(true)} />

        <main>
          <Hero onOpenBirthdaySurprise={() => setIsSurpriseOpen(true)} />
          <GenerativeExhibits />
          <LetterSection />
        </main>

        <Footer />

        <CakeSurpriseModal
          isOpen={isSurpriseOpen}
          onClose={() => setIsSurpriseOpen(false)}
        />
      </div>
    </div>
  );
}
