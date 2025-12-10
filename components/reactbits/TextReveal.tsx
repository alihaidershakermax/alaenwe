'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { gsap } from 'gsap';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'up'
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const getDirection = () => {
      switch (direction) {
        case 'down': return { y: -30, x: 0 };
        case 'left': return { x: 30, y: 0 };
        case 'right': return { x: -30, y: 0 };
        default: return { y: 30, x: 0 };
      }
    };

    const dir = getDirection();

    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        ...dir,
        clipPath: 'inset(100% 0% 0% 0%)'
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration,
        delay,
        ease: 'power3.out'
      }
    );
  }, [isVisible, delay, duration, direction]);

  return (
    <div ref={containerRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
