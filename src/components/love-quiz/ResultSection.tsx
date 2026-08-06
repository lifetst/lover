'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, Flame, RotateCcw, Share2 } from 'lucide-react';
import { type Personality } from '@/data/quiz';

interface ResultSectionProps {
  personality: Personality;
  onRestart: () => void;
}

type DisplayMode = 'choose' | 'praise' | 'roast';

function ContentDisplay({
  content,
  isRoast,
  onSwitch,
}: {
  content: string[];
  isRoast: boolean;
  onSwitch: () => void;
}) {
  const [visibleLines, setVisibleLines] = useState(0);

  // Use callback ref approach to start the reveal animation on mount
  const handleRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;
      let count = 0;
      const timer = setInterval(() => {
        count++;
        if (count > content.length) {
          clearInterval(timer);
          return;
        }
        setVisibleLines(count);
      }, 600);
      return () => clearInterval(timer);
    },
    [content.length],
  );

  return (
    <div ref={handleRef}>
      {/* Mode header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onSwitch}
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          ← 换一个
        </button>
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            isRoast ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
          }`}
        >
          {isRoast ? '🔥 输出火力' : '✨ 暴力夸夸'}
        </span>
        <div className="w-12" />
      </div>

      {/* Content lines */}
      <div className="space-y-4">
        {content.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isRoast ? -30 : 30, scale: 0.9 }}
            animate={
              index < visibleLines
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: isRoast ? -30 : 30, scale: 0.9 }
            }
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            className={`relative p-5 rounded-2xl backdrop-blur-sm ${
              isRoast
                ? 'bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50'
                : 'bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200/50'
            }`}
          >
            {/* Line number badge */}
            <div
              className={`absolute -left-2 -top-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                isRoast ? 'bg-red-500' : 'bg-amber-500'
              }`}
            >
              {index + 1}
            </div>

            <p
              className={`text-base leading-relaxed ${
                isRoast ? 'text-gray-700' : 'text-gray-700'
              }`}
            >
              {line}
            </p>

            {/* Emoji decoration for roast */}
            {isRoast && index === visibleLines - 1 && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -right-2 -bottom-2 text-xl"
              >
                {['💀', '🔥', '😭', '💅'][index % 4]}
              </motion.span>
            )}

            {/* Emoji decoration for praise */}
            {!isRoast && index === visibleLines - 1 && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -right-2 -bottom-2 text-xl"
              >
                {['💕', '🌟', '✨', '🎉'][index % 4]}
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Loading indicator */}
      {visibleLines < content.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center mt-6 gap-1.5"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className={`w-2 h-2 rounded-full ${isRoast ? 'bg-red-400' : 'bg-amber-400'}`}
            />
          ))}
        </motion.div>
      )}

      {/* All content revealed */}
      {visibleLines >= content.length && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <p className="text-sm text-gray-400">
            {isRoast ? '疼吗？要不再来一次？' : '怎么样，开心了吗？'}
          </p>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onSwitch}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer
                ${
                  isRoast
                    ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                    : 'bg-red-100 text-red-700 hover:bg-red-200'
                }`}
            >
              {isRoast ? (
                <>
                  <ThumbsUp className="w-4 h-4" />
                  换个夸夸
                </>
              ) : (
                <>
                  <Flame className="w-4 h-4" />
                  换个骂骂
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function ResultSection({ personality, onRestart }: ResultSectionProps) {
  const [mode, setMode] = useState<DisplayMode>('choose');

  const isRoast = mode === 'roast';
  const content = mode === 'praise' ? personality.praise : personality.roast;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-rose-50/20 to-white">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-start px-4 pt-8 pb-24">
        <div className="w-full max-w-lg mx-auto">
          {/* Personality Type Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
            className="relative"
          >
            {/* Decorative glow */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
              style={{
                background: `linear-gradient(135deg, ${personality.color}40, ${personality.color}10)`,
              }}
            />

            {/* Card */}
            <div
              className={`relative rounded-3xl p-8 bg-gradient-to-br ${personality.bgGradient} border border-white/50 shadow-xl overflow-hidden`}
            >
              {/* Inner decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

              <div className="relative text-center">
                {/* Emoji with animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, type: 'spring', stiffness: 200 }}
                  className="text-6xl mb-4"
                >
                  {personality.emoji}
                </motion.div>

                {/* Name with gradient */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className={`text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${personality.textGradient} mb-2`}
                >
                  {personality.name}
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-sm text-gray-500 mb-4"
                >
                  {personality.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto"
                >
                  {personality.description}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Mode choice / content display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8"
          >
            <AnimatePresence mode="wait">
              {mode === 'choose' ? (
                <motion.div
                  key="choose"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center"
                >
                  <p className="text-gray-500 text-sm mb-5">选择你的命运吧 ↓</p>
                  <div className="flex gap-3 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setMode('praise')}
                      className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white
                                 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400
                                 shadow-lg shadow-amber-300/30
                                 hover:shadow-xl hover:shadow-amber-300/50
                                 transition-shadow cursor-pointer"
                    >
                      <ThumbsUp className="w-5 h-5" />
                      使劲夸我
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setMode('roast')}
                      className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white
                                 bg-gradient-to-r from-orange-500 via-red-500 to-rose-600
                                 shadow-lg shadow-red-300/30
                                 hover:shadow-xl hover:shadow-red-300/50
                                 transition-shadow cursor-pointer"
                    >
                      <Flame className="w-5 h-5" />
                      使劲骂我
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <ContentDisplay
                    content={content}
                    isRoast={isRoast}
                    onSwitch={() => setMode('choose')}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-rose-100/50 z-20">
        <div className="max-w-lg mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={onRestart}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            重新测试
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: `我的恋爱人格是${personality.emoji}${personality.name}`,
                  text: `我刚测了恋爱人格，结果是「${personality.name}」——${personality.subtitle}！你也来测测吧~`,
                });
              }
            }}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            分享结果
          </button>
        </div>
      </div>
    </div>
  );
}
