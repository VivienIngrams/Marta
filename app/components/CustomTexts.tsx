'use client'

import { motion, Variants } from 'framer-motion';
import { textContainer, textVariant } from '@/utils/motion';

interface TypingTextProps {
  title: string;
  textStyles: string;
}

export const TypingText: React.FC<TypingTextProps> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer as Variants}
    className={`font-light text-[22px] md:text-[30px] text-cyan-600 my-10 uppercase tracking-widest ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant as Variants} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

