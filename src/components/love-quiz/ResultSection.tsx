'use client';

import { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RotateCcw,
  Share2,
  MessageCircleHeart,
  Shield,
  AlertTriangle,
  Sparkles,
  Target,
  XCircle,
  CheckCircle2,
  Lightbulb,
  Flag,
  ArrowRight,
} from 'lucide-react';
import { type Personality } from '@/data/quiz';

interface ResultSectionProps {
  personality: Personality;
  isRoast: boolean;
  onRestart: () => void;
}

/* ---------- info card ---------- */
interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  gradient: string;
  delay: number;
}

function InfoCard({ icon, label, children, gradient, delay }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`rounded-2xl p-4 bg-gradient-to-br ${gradient} border border-white/50`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base">{icon}</span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </motion.div>
  );
}

/* ---------- content display with line-by-line reveal ---------- */
function ContentDisplay({ content, isRoast }: { content: string[]; isRoast: boolean }) {
  const [visibleLines, setVisibleLines] = useState(0);

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
      {/* header badge */}
      <div className="flex items-center justify-center mb-6">
        <span
          className={`text-xs font-medium px-4 py-1.5 rounded-full ${
            isRoast
              ? 'bg-red-100 text-red-600'
              : 'bg-amber-100 text-amber-600'
          }`}
        >
          {isRoast ? '🔥 恋爱诊断报告' : '✨ 你的恋爱超能力'}
        </span>
      </div>

      {/* lines */}
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
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`relative p-5 rounded-2xl backdrop-blur-sm ${
              isRoast
                ? 'bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50'
                : 'bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200/50'
            }`}
          >
            <div
              className={`absolute -left-2 -top-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                isRoast ? 'bg-red-500' : 'bg-amber-500'
              }`}
            >
              {index + 1}
            </div>
            <p className="text-base leading-relaxed text-gray-700">{line}</p>
            {isRoast && index === visibleLines - 1 && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -right-2 -bottom-2 text-xl"
              >
                {['💀', '🔥', '😭', '💅'][index % 4]}
              </motion.span>
            )}
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

      {/* loading dots */}
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
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
              className={`w-2 h-2 rounded-full ${isRoast ? 'bg-red-400' : 'bg-amber-400'}`}
            />
          ))}
        </motion.div>
      )}

      {/* all revealed footer */}
      {visibleLines >= content.length && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-400">
            {isRoast ? '别生气，都是善意的提醒~ 💪' : '就是这么优秀，不接受反驳 😎'}
          </p>
        </motion.div>
      )}
    </div>
  );
}

/* ===================== MAIN ===================== */
export default function ResultSection({ personality, isRoast, onRestart }: ResultSectionProps) {
  const [showProfile, setShowProfile] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const content = isRoast ? personality.roast : personality.praise;

  const cardData = [
    {
      icon: <MessageCircleHeart className="w-4 h-4 text-rose-500" />,
      label: '爱的语言',
      text: personality.loveLanguage,
      gradient: 'from-rose-50 to-pink-50',
    },
    {
      icon: <Shield className="w-4 h-4 text-emerald-500" />,
      label: '最强武器',
      text: personality.strength,
      gradient: 'from-emerald-50 to-green-50',
    },
    {
      icon: <AlertTriangle className="w-4 h-4 text-amber-500" />,
      label: '致命软肋',
      text: personality.weakness,
      gradient: 'from-amber-50 to-yellow-50',
    },
    {
      icon: <Flag className="w-4 h-4 text-red-500" />,
      label: '分手预警',
      text: personality.breakupReason,
      gradient: 'from-red-50 to-rose-50',
    },
    {
      icon: <Target className="w-4 h-4 text-cyan-500" />,
      label: '最佳搭档',
      text: personality.bestMatch,
      gradient: 'from-cyan-50 to-sky-50',
    },
    {
      icon: <XCircle className="w-4 h-4 text-orange-500" />,
      label: '最怕遇到',
      text: personality.worstMatch,
      gradient: 'from-orange-50 to-amber-50',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-violet-500" />,
      label: '经典场景',
      text: personality.classicScenario,
      gradient: 'from-violet-50 to-purple-50',
    },
    {
      icon: <Lightbulb className="w-4 h-4 text-yellow-600" />,
      label: '恋爱忠告',
      text: personality.loveTip,
      gradient: 'from-yellow-50 to-amber-50',
    },
    {
      icon: <Flag className="w-4 h-4 text-red-400" />,
      label: '红旗信号',
      text: personality.redFlag,
      gradient: 'from-red-50/60 to-orange-50/60',
    },
    {
      icon: <CheckCircle2 className="w-4 h-4 text-green-500" />,
      label: '绿灯信号',
      text: personality.greenFlag,
      gradient: 'from-green-50 to-emerald-50',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-rose-50/20 to-white">
      {/* ---------- scrollable content ---------- */}
      <div className="flex-1 flex flex-col items-center justify-start px-4 pt-8 pb-28">
        <div className="w-full max-w-lg mx-auto">
          {/* ======== personality reveal card ======== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
            className="relative"
          >
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
              style={{
                background: `linear-gradient(135deg, ${personality.color}40, ${personality.color}10)`,
              }}
            />
            <div
              className={`relative rounded-3xl p-8 bg-gradient-to-br ${personality.bgGradient} border border-white/50 shadow-xl overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

              <div className="relative text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, type: 'spring', stiffness: 200 }}
                  className="text-6xl mb-3"
                >
                  {personality.emoji}
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className={`text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${personality.textGradient} mb-1`}
                >
                  {personality.name}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                  className="text-xs text-gray-400 font-medium tracking-wider mb-2"
                >
                  {personality.englishName}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75 }}
                  className="text-sm text-gray-500 mb-4"
                >
                  {personality.subtitle}
                </motion.p>

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

          {/* ======== expand profile button ======== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-6"
          >
            <button
              onClick={() => setShowProfile((p) => !p)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-rose-100/50 text-sm text-gray-500 hover:text-gray-700 hover:bg-white/90 transition-all cursor-pointer"
            >
              {showProfile ? '收起详情' : '查看完整恋爱档案'}
              <ArrowRight
                className={`w-4 h-4 transition-transform ${showProfile ? 'rotate-90' : '-rotate-90'}`}
              />
            </button>
          </motion.div>

          {/* ======== profile info grid ======== */}
          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cardData.map((card, i) => (
                    <InfoCard
                      key={card.label}
                      icon={card.icon}
                      label={card.label}
                      gradient={card.gradient}
                      delay={i * 0.06}
                    >
                      {card.text}
                    </InfoCard>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ======== reveal content button ======== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-8"
          >
            {!showContent ? (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowContent(true)}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-white cursor-pointer
                  ${
                    isRoast
                      ? 'bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 shadow-lg shadow-red-300/30 hover:shadow-xl hover:shadow-red-300/50'
                      : 'bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 shadow-lg shadow-amber-300/30 hover:shadow-xl hover:shadow-amber-300/50'
                  }`}
              >
                {isRoast ? '🔥 查看你的恋爱诊断报告' : '✨ 查看你的恋爱超能力'}
              </motion.button>
            ) : (
              <ContentDisplay content={content} isRoast={isRoast} />
            )}
          </motion.div>
        </div>
      </div>

      {/* ======== sticky bottom bar ======== */}
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
                  text: `我刚测了恋爱人格，结果是「${personality.name}」(${personality.englishName})——${personality.subtitle}！你也来测测吧~`,
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
