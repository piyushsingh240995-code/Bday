import { useEffect, useRef } from 'react';

/**
 * Procedural Generative Canvas:
 * Minimalist Golden Ratio Sunflower (Fibonacci Phyllotaxis & Math.sin Petals)
 * 100% computed geometry visualizing Sakshi's favorite flower: Sunflower.
 */
export default function SunflowerMathArt() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let t = 0;

    const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~137.5077° Golden Angle

    const render = () => {
      t += 0.02;
      const w = (canvas.width = 460);
      const h = (canvas.height = 360);

      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2 - 10;

      // Subtle background radar/coordinate rings
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      [40, 80, 120, 150].forEach((rad) => {
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
      });

      // 1. Golden Glass Petals (Outer Ring)
      const petalCount = 21; // Fibonacci number
      const outerRadius = 95 + Math.sin(t * 0.8) * 4;

      ctx.save();
      for (let i = 0; i < petalCount; i++) {
        const angle = (i * Math.PI * 2) / petalCount + Math.sin(t * 0.5) * 0.05;
        const petalLen = outerRadius + Math.sin(i * 1.5 + t) * 6;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);

        // Glass Petal Gradient
        const petalGrad = ctx.createLinearGradient(35, 0, petalLen, 0);
        petalGrad.addColorStop(0, 'rgba(251, 191, 36, 0.25)'); // Amber gold
        petalGrad.addColorStop(0.6, 'rgba(245, 158, 11, 0.6)');
        petalGrad.addColorStop(1, 'rgba(254, 240, 138, 0.15)');

        ctx.fillStyle = petalGrad;
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.7)';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(35, 0);
        ctx.quadraticCurveTo(petalLen * 0.6, -11, petalLen, 0);
        ctx.quadraticCurveTo(petalLen * 0.6, 11, 35, 0);
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      }

      // 2. Inner Golden Ratio Seed Florets (Phyllotaxis Spiral: r = c * sqrt(n), θ = n * 137.5°)
      const floretCount = 130;
      const c = 3.4;

      for (let n = 0; n < floretCount; n++) {
        const r = c * Math.sqrt(n);
        const theta = n * goldenAngle + t * 0.1;

        const x = cx + r * Math.cos(theta);
        const y = cy + r * Math.sin(theta);

        // Size & opacity by distance
        const dotRadius = 1.2 + (n / floretCount) * 1.5;
        const alpha = 0.35 + (n / floretCount) * 0.55;

        ctx.fillStyle = n % 2 === 0 ? `rgba(251, 191, 36, ${alpha})` : `rgba(217, 119, 6, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Central Core Specular Highlight
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 28);
      coreGrad.addColorStop(0, 'rgba(254, 240, 138, 0.4)');
      coreGrad.addColorStop(0.7, 'rgba(217, 119, 6, 0.2)');
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 28, 0, Math.PI * 2);
      ctx.fill();

      // Technical Annotations
      ctx.fillStyle = 'rgba(251, 191, 36, 0.85)';
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('FIBONACCI SPIRAL: θ = 137.508°', cx, h - 22);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fillText('SAKSHI FAVORITE // HELIANTHUS', cx, h - 8);

      ctx.restore();

      frameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center p-3 sm:p-5">
      <canvas
        ref={canvasRef}
        width={460}
        height={360}
        className="w-full max-w-[420px] h-auto aspect-[460/360]"
      />
      <div className="flex items-center justify-between w-full max-w-[420px] text-[10px] font-mono text-slate-500 mt-2 px-1">
        <span className="text-amber-400">GOLDEN RATIO Φ</span>
        <span>WARMTH BENEATH NONCHALANCE</span>
      </div>
    </div>
  );
}
