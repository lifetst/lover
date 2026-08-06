'use client';

import { useMemo } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function generateHearts(): Heart[] {
 return Array.from({ length: 15 }, (_, i) => ({
   id: i,
   left: Math.random() * 100,
   size: Math.random() * 16 + 12,
   duration: Math.random() * 6 + 6,
   delay: Math.random() * 8,
   opacity: Math.random() * 0.4 + 0.1,
 }));
}

export default function FloatingHearts() {
  const hearts = useMemo(() => generateHearts(), []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="animate-float-heart absolute"
          style={{
            left: `${heart.left}%`,
            bottom: '-20px',
            '--duration': `${heart.duration}s`,
            '--delay': `${heart.delay}s`,
            opacity: heart.opacity,
            fontSize: `${heart.size}px`,
          } as React.CSSProperties}
        >
          💗
        </div>
      ))}
    </div>
  );
}
