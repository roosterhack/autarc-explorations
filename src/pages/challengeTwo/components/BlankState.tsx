import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { TYPING_SPEED } from '../utils';
import { imageUrl } from '../consts';

export const BlankState = () => {
  const [displayedText, setDisplayedText] = useState('');
  const intro = ` Hi I am Nora, how can I help you?`;

  useEffect(() => {
    const startDelay = 1000; // delay in ms before typing starts
    let index = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayedText(intro.slice(0, index));
        index++;
        if (index > intro.length) clearInterval(interval);
      }, TYPING_SPEED);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="flex flex-col items-center justify-center h-full">
        <motion.img
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, type: 'spring', stiffness: 50, bounce: 0.8 }}
          exit={{ scale: 0, opacity: 0 }}
          src={imageUrl}
          alt="AI Assistant"
          className="mb-4 rounded-full object-cover w-24 h-24 shadow-md"
        />
        <h1 className="text-2xl dark:text-gray-200 font-bold mb-4 text-center">{displayedText}</h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 2.5, ease: 'easeIn' }}
          className="text-gray-500 mb-4"
        >
          Type your question in the input box below.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 2.8, ease: 'easeIn' }}
        >
          <motion.div
            className="mt-6"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDoubleDownIcon className="w-8 h-8 stroke-gray-300" />
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
