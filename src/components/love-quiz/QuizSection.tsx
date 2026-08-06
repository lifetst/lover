'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { questions, type PersonalityId } from '@/data/quiz';

interface QuizSectionProps {
  onComplete: (answers: PersonalityId[]) => void;
}

export default function QuizSection({ onComplete }: QuizSectionProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<PersonalityId[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  const question = questions[currentQ];
  const progress = ((currentQ + 1) / questions.length) * 100;

  const handleSelect = (optionIndex: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIndex);

    const newAnswers = [...answers, question.options[optionIndex].type];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setDirection(1);
        setCurrentQ((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        onComplete(newAnswers);
      }
    }, 600);
  };

  const handleBack = () => {
    if (currentQ === 0 || selectedOption !== null) return;
    setDirection(-1);
    setAnswers((prev) => prev.slice(0, -1));
    setCurrentQ((prev) => prev - 1);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-rose-50/30 to-white">
      {/* Header with progress */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-rose-100/50">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={handleBack}
              disabled={currentQ === 0 || selectedOption !== null}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 
                         disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              上一题
            </button>
            <span className="text-sm font-medium text-gray-500">
              {currentQ + 1} / {questions.length}
            </span>
            <span className="text-sm text-gray-300">.</span>
          </div>
          {/* Progress bar */}
          <div className="h-2 bg-rose-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* Question area */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentQ}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {/* Question number badge */}
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-medium">
                  第 {currentQ + 1} 题
                </span>
              </div>

              {/* Question text */}
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10 leading-snug">
                {question.text}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <motion.button
                    key={`${currentQ}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                    onClick={() => handleSelect(index)}
                    disabled={selectedOption !== null}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                      ${
                        selectedOption === index
                          ? 'border-rose-400 bg-rose-50 scale-[1.02] shadow-lg shadow-rose-200/50'
                          : selectedOption !== null
                            ? 'border-gray-100 bg-gray-50/50 opacity-50'
                            : 'border-gray-200 bg-white hover:border-rose-300 hover:bg-rose-50/50 hover:shadow-md hover:shadow-rose-100/30'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                          ${
                            selectedOption === index
                              ? 'bg-rose-500 text-white'
                              : 'bg-gray-100 text-gray-500'
                          }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span
                        className={`text-base sm:text-lg transition-colors
                          ${selectedOption === index ? 'text-rose-700 font-medium' : 'text-gray-700'}`}
                      >
                        {option.text}
                      </span>
                      {selectedOption === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto flex-shrink-0"
                        >
                          <ChevronRight className="w-5 h-5 text-rose-500" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
