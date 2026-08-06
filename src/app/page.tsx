'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { type PersonalityId, calculatePersonality, type Personality } from '@/data/quiz';
import LandingPage from '@/components/love-quiz/LandingPage';
import QuizSection from '@/components/love-quiz/QuizSection';
import ResultSection from '@/components/love-quiz/ResultSection';

type Phase = 'landing' | 'quiz' | 'result';

export default function Home() {
  const [phase, setPhase] = useState<Phase>('landing');
  const [personality, setPersonality] = useState<Personality | null>(null);

  const handleStart = () => {
    setPhase('quiz');
  };

  const handleQuizComplete = (answers: PersonalityId[]) => {
    const result = calculatePersonality(answers);
    setPersonality(result);
    setPhase('result');
  };

  const handleRestart = () => {
    setPersonality(null);
    setPhase('landing');
  };

  return (
    <AnimatePresence mode="wait">
      {phase === 'landing' && (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <LandingPage onStart={handleStart} />
        </motion.div>
      )}
      {phase === 'quiz' && (
        <motion.div
          key="quiz"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <QuizSection onComplete={handleQuizComplete} />
        </motion.div>
      )}
      {phase === 'result' && personality && (
        <motion.div
          key="result"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <ResultSection personality={personality} onRestart={handleRestart} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
