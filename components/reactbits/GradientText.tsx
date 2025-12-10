'use client';

import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  animate?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#3b82f6', '#60a5fa', '#3b82f6'],
  animationSpeed = 3,
  animate = true
}: GradientTextProps) {
  const gradientStyle = {
    background: `linear-gradient(90deg, ${colors.join(', ')})`,
    backgroundSize: animate ? '200% auto' : '100% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: animate ? `gradient-shift ${animationSpeed}s linear infinite` : 'none'
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
      <span className={className} style={gradientStyle}>
        {children}
      </span>
    </>
  );
}
