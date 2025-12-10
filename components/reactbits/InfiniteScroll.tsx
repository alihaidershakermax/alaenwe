'use client';

import { ReactNode, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface InfiniteScrollProps {
  children: ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

export default function InfiniteScroll({
  children,
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
  className = ''
}: InfiniteScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const scrollerContent = Array.from(scroller.children);
    
    // Clone items for seamless loop
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true);
      scroller.appendChild(clone);
    });

    const totalWidth = scroller.scrollWidth / 2;
    const duration = totalWidth / speed;

    gsap.set(scroller, { x: direction === 'left' ? 0 : -totalWidth });

    animationRef.current = gsap.to(scroller, {
      x: direction === 'left' ? -totalWidth : 0,
      duration,
      ease: 'none',
      repeat: -1
    });

    return () => {
      animationRef.current?.kill();
    };
  }, [speed, direction]);

  const handleMouseEnter = () => {
    if (pauseOnHover && animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && animationRef.current) {
      animationRef.current.resume();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={scrollerRef} className="flex w-max">
        {children}
      </div>
    </div>
  );
}
