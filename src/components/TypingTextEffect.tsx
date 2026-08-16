import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface RollingPhraseItem {
  text: string;
  icon?: React.ReactNode;
  highlight?: string;
  badge?: string;
}

interface TypingTextEffectProps {
  phrases: string[] | RollingPhraseItem[];
  pauseDuration?: number;
  className?: string;
}

/**
 * Ultra-smooth vertical sliding slot animation (Smooth bottom-to-top roll & exit)
 * Strictly zero layout shifts, perfectly fixed vertical height and crisp typography.
 */
export const TypingTextEffect: React.FC<TypingTextEffectProps> = ({
  phrases,
  pauseDuration = 2800,
  className = '',
}) => {
  const [index, setIndex] = useState(0);
  const phrasesCount = phrases.length;
  const prevPhrasesLengthRef = useRef(phrasesCount);

  useEffect(() => {
    if (phrasesCount <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrasesCount);
    }, pauseDuration);

    return () => clearInterval(interval);
  }, [phrasesCount, pauseDuration]);

  // Only reset index if total count actually changes (e.g. language switch)
  useEffect(() => {
    if (prevPhrasesLengthRef.current !== phrasesCount) {
      setIndex(0);
      prevPhrasesLengthRef.current = phrasesCount;
    }
  }, [phrasesCount]);

  if (!phrases || phrases.length === 0) return null;

  const currentItem = phrases[index % phrases.length];
  const isObject = typeof currentItem === 'object' && currentItem !== null;
  const currentText = isObject ? (currentItem as RollingPhraseItem).text : (currentItem as string);
  const currentIcon = isObject ? (currentItem as RollingPhraseItem).icon : null;
  const currentBadge = isObject ? (currentItem as RollingPhraseItem).badge : null;

  return (
    <div className={`inline-flex items-center overflow-hidden relative font-heading-bn transform-gpu h-full select-none ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`rolling-phrase-${index}`}
          initial={{ opacity: 0, y: 26, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -26, scale: 0.96 }}
          transition={{
            duration: 0.38,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-flex items-center gap-1.5 sm:gap-2.5 whitespace-nowrap text-[#7EC151] font-black drop-shadow-xs"
        >
          {currentIcon && (
            <span className="shrink-0 p-1 sm:p-1.5 rounded-xl bg-[#7EC151]/15 text-[#7EC151] border border-[#7EC151]/40 shadow-xs flex items-center justify-center">
              {currentIcon}
            </span>
          )}
          <span className="tracking-tight whitespace-normal text-center sm:whitespace-nowrap">
            {currentText}
          </span>
          {currentBadge && (
            <span className="hidden md:inline-block text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#FED24F] text-[#0F172A] border border-[#0F172A] shadow-xs shrink-0">
              {currentBadge}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export interface TypewriterTextProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
  cursorColor?: string;
  showCursor?: boolean;
}

/**
 * TypewriterText: Types out any incoming text string character-by-character
 * whenever the text prop changes.
 */
export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 22,
  className = '',
  cursorColor = '#7EC151',
  showCursor = true,
}) => {
  const [displayed, setDisplayed] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayed('');
    setIsTyping(true);
    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={`inline-flex items-center flex-wrap font-bengali ${className}`}>
      <span>{displayed}</span>
      {showCursor && (
        <span
          className={`inline-block ml-0.5 w-[3px] h-[1em] align-middle rounded-full ${
            isTyping ? 'opacity-100' : 'animate-pulse'
          }`}
          style={{ backgroundColor: cursorColor }}
          aria-hidden="true"
        />
      )}
    </span>
  );
};



