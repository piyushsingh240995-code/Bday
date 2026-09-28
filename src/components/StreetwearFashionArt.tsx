import { useEffect, useRef } from 'react';

/**
 * Procedural Generative Canvas:
 * Minimalist SK8 & Streetwear Fashion Blueprint & Fabric Drape
 * Computed purely with Math.sin and vector lines.
 * Visualizes the iconic oversized hoodie & wide-leg silhouette.
 */
export default function StreetwearFashionArt() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let t = 0;

    const render = () => {
      t += 0.02;
      const w = (canvas.width = 460);
      const h = (canvas.height = 360);

      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;

      // Precision technical grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 40; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 15);
        ctx.lineTo(x, h - 15);
        ctx.stroke();
      }
      for (let y = 30; y < h; y += 30) {
        ctx.beginPath();
        ctx.moveTo(15, y);
        ctx.lineTo(w - 15, y);
        ctx.stroke();
      }

      // --- Mathematical Fabric Drape Waves (Bottom flowing hem) ---
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        const baseY = 210 + layer * 14;
        ctx.moveTo(cx - 100, baseY);

        for (let x = cx - 100; x <= cx + 100; x += 4) {
          const progress = (x - (cx - 100)) / 200;
          const envelope = Math.sin(progress * Math.PI); // Pinched at sides, loose at center
          const y = baseY + Math.sin(x * 0.05 + t * (1.2 + layer * 0.3)) * (7 + layer * 2) * envelope;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = layer === 0 ? 'rgba(192, 132, 252, 0.85)' : 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = layer === 0 ? 1.5 : 1;
        ctx.stroke();
      }

      // --- Streetwear Boxy Oversized Hoodie Wireframe ---
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.lineWidth = 1.5;

      // 1. Hood arch
      ctx.beginPath();
      ctx.arc(cx, 68, 28, Math.PI * 0.85, Math.PI * 2.15);
      ctx.stroke();

      // 2. Drop Shoulders (Extremely wide, slouchy streetwear cut)
      const shoulderLeft = cx - 110;
      const shoulderRight = cx + 110;
      const shoulderY = 96;

      ctx.beginPath();
      ctx.moveTo(cx - 24, 78);
      ctx.lineTo(shoulderLeft, shoulderY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(cx + 24, 78);
      ctx.lineTo(shoulderRight, shoulderY);
      ctx.stroke();

      // 3. Wide Sleeves flowing down
      ctx.beginPath();
      ctx.moveTo(shoulderLeft, shoulderY);
      ctx.lineTo(shoulderLeft - 18, 185);
      ctx.lineTo(shoulderLeft + 22, 185);
      ctx.lineTo(cx - 72, 140);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(shoulderRight, shoulderY);
      ctx.lineTo(shoulderRight + 18, 185);
      ctx.lineTo(shoulderRight - 22, 185);
      ctx.lineTo(cx + 72, 140);
      ctx.stroke();

      // 4. Boxy Torso Body
      ctx.beginPath();
      ctx.moveTo(cx - 72, 140);
      ctx.lineTo(cx - 80, 210);
      ctx.moveTo(cx + 72, 140);
      ctx.lineTo(cx + 80, 210);
      ctx.stroke();

      // 5. Kangaroo Pocket Wireframe
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.4)';
      ctx.beginPath();
      ctx.moveTo(cx - 45, 172);
      ctx.lineTo(cx + 45, 172);
      ctx.lineTo(cx + 52, 204);
      ctx.lineTo(cx - 52, 204);
      ctx.closePath();
      ctx.stroke();

      // 6. Wide-Leg SK8 Cargo Cut Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
      // Left leg
      ctx.beginPath();
      ctx.moveTo(cx - 70, 222);
      ctx.lineTo(cx - 82, 315);
      ctx.lineTo(cx - 15, 315);
      ctx.lineTo(cx - 10, 235);
      ctx.stroke();

      // Right leg
      ctx.beginPath();
      ctx.moveTo(cx + 10, 235);
      ctx.lineTo(cx + 15, 315);
      ctx.lineTo(cx + 82, 315);
      ctx.lineTo(cx + 70, 222);
      ctx.stroke();

      // Crotch fold
      ctx.beginPath();
      ctx.moveTo(cx - 10, 235);
      ctx.lineTo(cx, 248);
      ctx.lineTo(cx + 10, 235);
      ctx.stroke();

      // Technical Spec Callouts
      ctx.fillStyle = 'rgba(192, 132, 252, 0.9)';
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillText('DROP SHOULDER: +18CM', shoulderLeft - 10, shoulderY - 8);
      ctx.fillText('FIT: OVERSIZED SK8', shoulderRight - 55, shoulderY - 8);

      ctx.fillStyle = 'rgba(45, 212, 191, 0.85)';
      ctx.fillText('WIDE-LEG CARGO DRAPE', cx - 50, 335);

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
        <span>MATH: FABRIC HARMONICS</span>
        <span className="text-purple-400">UNBOTHERED SILHOUETTE</span>
      </div>
    </div>
  );
}
