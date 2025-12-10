'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';

export interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  activeHref?: string;
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: [number, number, number, number, number];
  initialActiveIndex?: number;
  className?: string;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  activeHref,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2],
  initialActiveIndex = 0,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const blobRef = useRef<HTMLSpanElement>(null);

  const noise = useCallback((n = 1) => n / 2 - Math.random() * n, []);

  const getXY = useCallback((el: HTMLElement, container: HTMLElement) => {
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    return {
      x: elRect.left - containerRect.left + elRect.width / 2,
      y: elRect.top - containerRect.top + elRect.height / 2,
    };
  }, []);

  const createParticle = useCallback(
    (x: number, y: number, container: HTMLElement, colorIndex: number) => {
      const particle = document.createElement('span');
      particle.className = `gooey-particle gooey-color-${colorIndex}`;

      const angle = Math.random() * Math.PI * 2;
      const [maxDist, minDist] = particleDistances;
      const dist = minDist + Math.random() * (maxDist - minDist);

      particle.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${particleR / 8}px;
        height: ${particleR / 8}px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
        transform: translate(-50%, -50%);
      `;

      container.appendChild(particle);

      const tx = Math.cos(angle) * dist + noise(10);
      const ty = Math.sin(angle) * dist + noise(10);
      const duration = animationTime * 0.5 + Math.random() * timeVariance;

      particle.animate(
        [
          { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
          {
            transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)`,
            opacity: 0,
          },
        ],
        { duration, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fill: 'forwards' }
      ).onfinish = () => particle.remove();
    },
    [animationTime, noise, particleDistances, particleR, timeVariance]
  );

  const handleHover = useCallback(
    (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const container = containerRef.current;
      const blob = blobRef.current;
      if (!container || !blob) return;

      const { x, y } = getXY(target, container);
      const colorIndex = colors[items.findIndex((item) => item.label === target.textContent) % colors.length];

      // Move blob
      blob.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      blob.className = `gooey-blob gooey-color-${colorIndex}`;

      // Create particles
      for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
          createParticle(x, y, container, colorIndex);
        }, i * 20);
      }
    },
    [colors, createParticle, getXY, items, particleCount]
  );

  useEffect(() => {
    const nav = navRef.current;
    const container = containerRef.current;
    const blob = blobRef.current;
    if (!nav || !container || !blob) return;

    const links = nav.querySelectorAll('a');

    // Set initial blob position
    const initialLink = links[initialActiveIndex];
    if (initialLink) {
      const { x, y } = getXY(initialLink as HTMLElement, container);
      blob.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleHover as EventListener);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleHover as EventListener);
      });
    };
  }, [getXY, handleHover, initialActiveIndex, items]);

  const isExternalLink = (href: string) =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:');

  return (
    <div ref={containerRef} className={`gooey-nav-wrapper relative ${className}`}>
      {/* SVG Filter */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id="gooey-effect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Styles */}
      <style jsx>{`
        .gooey-nav-wrapper {
          --color-1: #ffffff;
          --color-2: #3b82f6;
          --color-3: #10b981;
        }
        .gooey-nav-inner {
          filter: url(#gooey-effect);
        }
        .gooey-blob {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
          z-index: 0;
        }
        .gooey-color-1 { background: var(--color-1); }
        .gooey-color-2 { background: var(--color-2); }
        .gooey-color-3 { background: var(--color-3); }
        .gooey-particle.gooey-color-1 { background: var(--color-1); }
        .gooey-particle.gooey-color-2 { background: var(--color-2); }
        .gooey-particle.gooey-color-3 { background: var(--color-3); }
      `}</style>

      <div className="gooey-nav-inner relative">
        {/* Blob */}
        <span ref={blobRef} className="gooey-blob gooey-color-1" />

        <nav className="relative z-10">
          <ul
            ref={navRef}
            className="flex items-center gap-1 p-2 m-0 list-none bg-gray-900/90 backdrop-blur-sm rounded-full"
          >
            {items.map((item) => {
              const isActive = activeHref === item.href;

              const linkClasses = `
                relative z-10 px-5 py-3 text-sm font-semibold rounded-full
                transition-colors duration-200
                ${isActive ? 'text-gray-900' : 'text-white hover:text-gray-900'}
              `;

              return (
                <li key={item.href} className="relative">
                  {isExternalLink(item.href) ? (
                    <a href={item.href} className={linkClasses}>
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={linkClasses}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default GooeyNav;
