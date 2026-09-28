import { useEffect, useRef } from 'react';

/**
 * High-performance, lightweight generative liquid wave canvas using Math.sin
 * Creates an ultra-premium, smooth glass caustic ripple background with subtle
 * golden sunflower amber light flares. 100% lag-free.
 */
export default function LiquidGlassCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    let t = 0;

    // Lightweight deterministic sunflower gold sparks
    const sparks = Array.from({ length: 18 }, (_, i) => ({
      x: (i * 0.055 + 0.02) * width,
      yBase: (i % 5) * (height / 5) + 50,
      radius: 1.5 + (i % 3) * 0.8,
      speedX: 0.3 + (i % 3) * 0.2,
      freq: 0.003 + (i % 4) * 0.001,
      amp: 25 + (i % 4) * 15,
      phase: i * 1.3,
    }));

    const render = () => {
      t += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Render 3 mathematical flowing sine ribbons with translucent glass gradients
      const ribbons = [
        {
          baseY: height * 0.35,
          amp1: 45,
          amp2: 25,
          freq1: 0.0022,
          freq2: 0.0048,
          speed: 1,
          colorA: 'rgba(168, 85, 247, 0.07)', // Purple
          colorB: 'rgba(99, 102, 241, 0.02)', // Indigo
        },
        {
          baseY: height * 0.55,
          amp1: 65,
          amp2: 35,
          freq1: 0.0018,
          freq2: 0.0035,
          speed: 1.3,
          colorA: 'rgba(251, 191, 36, 0.04)', // Sunflower Amber Glow
          colorB: 'rgba(147, 51, 234, 0.02)',
        },
        {
          baseY: height * 0.72,
          amp1: 50,
          amp2: 30,
          freq1: 0.0025,
          freq2: 0.005,
          speed: 0.8,
          colorA: 'rgba(20, 184, 166, 0.04)', // Teal
          colorB: 'rgba(251, 191, 36, 0.02)',
        },
      ];

      ribbons.forEach((ribbon) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 12) {
          const y =
            ribbon.baseY +
            Math.sin(x * ribbon.freq1 + t * ribbon.speed) * ribbon.amp1 +
            Math.sin(x * ribbon.freq2 - t * 0.7) * ribbon.amp2;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, ribbon.baseY - 60, width, ribbon.baseY + 120);
        grad.addColorStop(0, ribbon.colorA);
        grad.addColorStop(1, ribbon.colorB);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Subtle golden sunflower ambient flares
      for (let i = 0; i < 4; i++) {
        const cx = width * (0.2 + i * 0.22) + Math.cos(t * 0.6 + i) * 80;
        const cy = height * 0.45 + Math.sin(t * 0.8 + i * 1.5) * 60;
        const rad = 140;

        const radial = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        radial.addColorStop(0, i % 2 === 0 ? 'rgba(251, 191, 36, 0.03)' : 'rgba(255, 255, 255, 0.02)');
        radial.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.fill();
      }

      // Floating golden sunflower dust (sinusoidal gentle drift)
      sparks.forEach((s) => {
        const sx = (s.x + t * 25 * s.speedX) % width;
        const sy = s.yBase + Math.sin(sx * s.freq + t + s.phase) * s.amp;

        ctx.fillStyle = 'rgba(251, 191, 36, 0.45)';
        ctx.beginPath();
        ctx.arc(sx, sy, s.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
