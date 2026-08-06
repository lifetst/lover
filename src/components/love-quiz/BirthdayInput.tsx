'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cake } from 'lucide-react';

interface BirthdayInputProps {
  onSubmit: (month: number, day: number) => void;
  onBack: () => void;
}

const MONTHS = [
  '一月', '二月', '三月', '四月', '五月', '六月',
  '七月', '八月', '九月', '十月', '十一月', '十二月',
];

export default function BirthdayInput({ onSubmit, onBack }: BirthdayInputProps) {
  const [month, setMonth] = useState<number | null>(null);
  const [day, setDay] = useState<number | null>(null);

  const daysInMonth = month ? new Date(2024, month, 0).getDate() : 31;
  const canSubmit = month !== null && day !== null;

  const handleSubmit = () => {
    if (canSubmit) onSubmit(month, day);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-rose-50/30 to-white">
      {/* header */}
      <div className="pt-6 px-6">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          ← 返回
        </button>
      </div>

      {/* content */}
      <div className="flex-1 flex items-center justify-center px-6 pb-12">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="text-5xl mb-4"
            >
              🎂
            </motion.div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              先告诉我们你的生日
            </h2>
            <p className="text-sm text-gray-400">只需要月份和日期，不需要年份~</p>
          </motion.div>

          {/* month selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6"
          >
            <label className="block text-sm font-medium text-gray-500 mb-3">月份</label>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {MONTHS.map((m, i) => {
                const idx = i + 1;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setMonth(idx);
                      if (day !== null && day > new Date(2024, idx, 0).getDate()) {
                        setDay(null);
                      }
                    }}
                    className={`py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer
                      ${
                        month === idx
                          ? 'bg-rose-500 text-white shadow-md shadow-rose-200/50 scale-105'
                          : 'bg-white border border-gray-200 text-gray-600 hover:border-rose-300 hover:bg-rose-50/50'
                      }`}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* day selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mb-10"
          >
            <label className="block text-sm font-medium text-gray-500 mb-3">日期</label>
            <div className="grid grid-cols-7 sm:grid-cols-8 gap-2">
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
                <button
                  key={d}
                  onClick={() => setDay(d)}
                  disabled={month === null}
                  className={`py-2 rounded-xl text-sm font-medium transition-all cursor-pointer
                    ${
                      day === d
                        ? 'bg-rose-500 text-white shadow-md shadow-rose-200/50 scale-105'
                        : month === null
                          ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
                          : 'bg-white border border-gray-200 text-gray-600 hover:border-rose-300 hover:bg-rose-50/50'
                    }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </motion.div>

          {/* submit button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-lg transition-all cursor-pointer
                ${
                  canSubmit
                    ? 'bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 text-white shadow-lg shadow-rose-300/30 hover:shadow-xl hover:shadow-rose-300/50 animate-pulse-glow'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
            >
              <Cake className="w-5 h-5" />
              继续测试
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
