import { useEffect, useRef } from 'react';

/**
 * Procedural Volleyball Spike Trajectory:
 * Computed using parametric parabola physics and Math.sin oscillation.
 * Pure vector canvas, sleek and minimal.
 */
export default function VolleyballMathArt() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let t = 0;

    const render = () => {
      t += 0.025;
      const w = (canvas.width = 440);
      const h = (canvas.height = 300);

      ctx.clearRect(0, 0, w, h);

      // Floor & Court Line
      const groundY = h - 50;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(30, groundY);
      ctx.lineTo(w - 30, groundY);
      ctx.stroke();

      // Net Center Pole & Net Mesh
      const netX = w * 0.52;
      const netTopY = groundY - 130;

      // Net Pole
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(netX, groundY);
      ctx.lineTo(netX, netTopY - 15);
      ctx.stroke();

      // Net Grid
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.fillRect(netX - 8, netTopY, 16, 130);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 0.75;
      for (let y = netTopY; y <= groundY; y += 14) {
        ctx.beginPath();
        ctx.moveTo(netX - 8, y);
        ctx.lineTo(netX + 8, y);
        ctx.stroke();
      }

      // Ball Trajectory Curve (Parabolic Spike)
      // Ball rises from left, peaks over net, crashes steeply into opponent court
      const progress = (t * 0.6) % 1; // 0 to 1 cycle
      const startX = 60;
      const peakX = netX - 10;
      const endX = w - 60;

      // Trajectory path
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.25)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(startX, groundY - 30);
      ctx.quadraticCurveTo(peakX - 30, netTopY - 70, endX, groundY - 5);
      ctx.stroke();
      ctx.setLineDash([]);

      // Current ball position along curve
      let ballX: number;
      let ballY: number;

      if (progress < 0.6) {
        // Rise and set phase
        const p = progress / 0.6;
        ballX = startX + (peakX - startX) * p;
        const peakHeight = netTopY - 55;
        ballY = (groundY - 30) - Math.sin(p * Math.PI * 0.5) * ((groundY - 30) - peakHeight);
      } else {
        // Fast spike smash phase
        const p = (progress - 0.6) / 0.4;
        ballX = peakX + (endX - peakX) * p;
        const peakHeight = netTopY - 55;
        ballY = peakHeight + (groundY - peakHeight) * (p * p); // Accelerates down
      }

      // Ball Glow
      const glow = ctx.createRadialGradient(ballX, ballY, 0, ballX, ballY, 20);
      glow.addColorStop(0, 'rgba(45, 212, 191, 0.5)');
      glow.addColorStop(1, 'rgba(45, 212, 191, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(ballX, ballY, 20, 0, Math.PI * 2);
      ctx.fill();

      // Ball Core
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(ballX, ballY, 7, 0, Math.PI * 2);
      ctx.fill();

      // Jersey #14 Spike Annotation at peak
      ctx.fillStyle = '#c084fc';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('#14 SPIKE IMPACT', peakX, netTopY - 70);

      // Velocity vectors
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(ballX, ballY);
      ctx.lineTo(ballX - 12, ballY - 6);
      ctx.stroke();

      frameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <canvas
        ref={canvasRef}
        width={440}
        height={300}
        className="w-full max-w-[380px] h-auto aspect-[440/300]"
      />
      <div className="flex items-center justify-between w-full max-w-[380px] text-[10px] font-mono text-slate-500 mt-2 px-2">
        <span>MATH: d²y/dt² = -g</span>
        <span className="text-teal-400">VARSITY ACE HITTER</span>
      </div>
    </div>
  );
}
