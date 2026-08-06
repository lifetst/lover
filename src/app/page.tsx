'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { type PersonalityId, calculatePersonality, type Personality } from '@/data/quiz';
import LandingPage from '@/components/love-quiz/LandingPage';
import BirthdayInput from '@/components/love-quiz/BirthdayInput';
import QuizSection from '@/components/love-quiz/QuizSection';
import ResultSection from '@/components/love-quiz/ResultSection';

type Phase = 'landing' | 'birthday' | 'quiz' | 'result';

export default function Home() {
  const [phase, setPhase] = useState<Phase>('landing');
  const [personality, setPersonality] = useState<Personality | null>(null);
  const [isRoast, setIsRoast] = useState(false);

  const handleStart = () => setPhase('birthday');

  const handleBirthday = (month: number, day: number) => {
    // 3月15日 → 骂，其余 → 夸
    setIsRoast(month === 3 && day === 15);
    setPhase('quiz');
  };

  const handleQuizComplete = (answers: PersonalityId[]) => {
    setPersonality(calculatePersonality(answers));
    setPhase('result');
  };

  const handleRestart = () => {
    setPersonality(null);
    setIsRoast(false);
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
      {phase === 'birthday' && (
        <motion.div
          key="birthday"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <BirthdayInput onSubmit={handleBirthday} onBack={() => setPhase('landing')} />
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
          <ResultSection personality={personality} isRoast={isRoast} onRestart={handleRestart} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
