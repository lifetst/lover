'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import FloatingHearts from './FloatingHearts';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background:
            'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 25%, #fef3c7 50%, #fce7f3 75%, #fff1f2 100%)',
          backgroundSize: '400% 400%',
        }}
      />

      {/* Floating hearts */}
      <FloatingHearts />

      {/* Decorative sparkle elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="animate-sparkle absolute text-amber-400"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              '--duration': `${2 + (i % 3)}s`,
              '--delay': `${i * 0.4}s`,
              fontSize: `${8 + (i % 3) * 6}px`,
            } as React.CSSProperties}
          >
            ✦
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-rose-200/50 text-sm text-rose-600 font-medium">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            来看看你的恋爱机遇
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span
            className="animate-shimmer bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #f43f5e, #ec4899, #f97316, #eab308, #ec4899, #f43f5e)',
              backgroundSize: '200% auto',
            }}
          >
            恋爱人格
          </span>
          <br />
          <span className="text-gray-800">测试</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed"
        >
 8 道题，测出你恋爱中隐藏的真实人格
        </motion.p>


        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1, type: 'spring', stiffness: 200 }}
        >
          <button
            onClick={onStart}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg
                       bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500
                       animate-pulse-glow
                       hover:scale-105 active:scale-95
                       transition-transform duration-200
                       cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
            开始测试
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Personality type previews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {['🎩 恋爱魔法师', '🐱 老板猫', '💖 恋爱怪兽', '🐕 忠犬八公', '💎 隐藏宝贝', '🦎 完美变色龙'].map(
            (type, i) => (
              <motion.span
                key={type}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + i * 0.1, type: 'spring', stiffness: 300 }}
                className="px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-rose-100/50
                           text-xs text-gray-500 hover:bg-white/80 hover:text-gray-700 transition-colors"
              >
                {type}
              </motion.span>
            ),
          )}
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
