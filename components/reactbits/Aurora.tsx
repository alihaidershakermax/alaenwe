'use client';

import { useEffect, useRef } from 'react';

interface AuroraProps {
  className?: string;
  colors?: string[];
  speed?: number;
  blur?: number;
}

export default function Aurora({
  className = '',
  colors = ['#3b82f6', '#8b5cf6', '#ec4899'],
  speed = 1,
  blur = 100
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      colors.forEach((color, i) => {
        const offset = (i / colors.length) * Math.PI * 2;
        const x = canvas.width * 0.5 + Math.sin(time * speed * 0.5 + offset) * canvas.width * 0.3;
        const y = canvas.height * 0.5 + Math.cos(time * speed * 0.3 + offset) * canvas.height * 0.3;
        const radius = Math.min(canvas.width, canvas.height) * (0.3 + Math.sin(time * speed + offset) * 0.1);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color + '40');
        gradient.addColorStop(0.5, color + '20');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      time += 0.01;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [colors, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ filter: `blur(${blur}px)` }}
    />
  );
}
