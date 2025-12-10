'use client';

import { useRef, useState, ReactNode } from 'react';
import { gsap } from 'gsap';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
  glare?: boolean;
  glareMaxOpacity?: number;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 15,
  scale = 1.02,
  perspective = 1000,
  glare = true,
  glareMaxOpacity = 0.3
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateX = ((mouseY - centerY) / centerY) * -maxTilt;
    const rotateY = ((mouseX - centerX) / centerX) * maxTilt;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      scale,
      duration: 0.3,
      ease: 'power2.out'
    });

    if (glare && glareRef.current) {
      const glareX = (mouseX / rect.width) * 100;
      const glareY = (mouseY / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareMaxOpacity}), transparent 50%)`;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  };

  return (
    <div style={{ perspective: `${perspective}px` }}>
      <div
        ref={cardRef}
        className={`relative ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
        {glare && (
          <div
            ref={glareRef}
            className="pointer-events-none absolute inset-0 rounded-inherit transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              borderRadius: 'inherit'
            }}
          />
        )}
      </div>
    </div>
  );
}
