'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  blur?: number;
  direction?: 'top' | 'bottom' | 'left' | 'right';
}

export default function BlurText({
  text,
  className = '',
  delay = 0,
  duration = 1,
  blur = 10,
  direction = 'bottom'
}: BlurTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
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

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || !textRef.current) return;

    const getDirection = () => {
      switch (direction) {
        case 'top': return { y: -30 };
        case 'left': return { x: -30 };
        case 'right': return { x: 30 };
        default: return { y: 30 };
      }
    };

    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        filter: `blur(${blur}px)`,
        ...getDirection()
      },
      {
        opacity: 1,
        filter: 'blur(0px)',
        x: 0,
        y: 0,
        duration,
        delay,
        ease: 'power3.out'
      }
    );
  }, [isVisible, delay, duration, blur, direction]);

  return (
    <div ref={textRef} className={className} style={{ opacity: 0 }}>
      {text}
    </div>
  );
}
