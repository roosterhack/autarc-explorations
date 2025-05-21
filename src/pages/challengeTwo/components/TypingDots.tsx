import { motion } from 'motion/react';

export const TypingDots = () => {
  return (
    <div className="flex items-center space-x-2 ml-2">
      {[0, 0.2, 0.6].map((delay, i) => (
        <motion.span
          key={i}
          className="w-2 h-2 md:w-3 md:h-3 bg-teal-300 dark:bg-gray-200 rounded-full"
          animate={{ y: [0, -6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: 'easeInOut',
            delay,
          }}
        />
      ))}
    </div>
  );
};
