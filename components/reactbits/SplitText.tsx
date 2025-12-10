'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  animationType?: 'fade' | 'slide' | 'scale' | 'rotate';
}

export default function SplitText({
  text,
  className = '',
  delay = 0,
  duration = 0.05,
  ease = 'power3.out',
  splitType = 'chars',
  animationType = 'fade'
}: SplitTextProps) {
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

    const elements = containerRef.current.querySelectorAll('.split-item');
    
    const getInitialProps = () => {
      switch (animationType) {
        case 'slide':
          return { opacity: 0, y: 50 };
        case 'scale':
          return { opacity: 0, scale: 0 };
        case 'rotate':
          return { opacity: 0, rotationX: -90 };
        default:
          return { opacity: 0, y: 20 };
      }
    };

    const getFinalProps = () => {
      switch (animationType) {
        case 'slide':
          return { opacity: 1, y: 0 };
        case 'scale':
          return { opacity: 1, scale: 1 };
        case 'rotate':
          return { opacity: 1, rotationX: 0 };
        default:
          return { opacity: 1, y: 0 };
      }
    };

    gsap.set(elements, getInitialProps());
    gsap.to(elements, {
      ...getFinalProps(),
      duration: 0.6,
      stagger: duration,
      delay,
      ease
    });
  }, [isVisible, delay, duration, ease, animationType]);

  const splitContent = () => {
    if (splitType === 'words') {
      return text.split(' ').map((word, i) => (
        <span key={i} className="split-item inline-block mx-1">
          {word}
        </span>
      ));
    }
    if (splitType === 'lines') {
      return text.split('\n').map((line, i) => (
        <span key={i} className="split-item block">
          {line}
        </span>
      ));
    }
    // chars
    return text.split('').map((char, i) => (
      <span key={i} className="split-item inline-block" style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
        {char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className={className} style={{ perspective: '1000px' }}>
      {splitContent()}
    </div>
  );
}
