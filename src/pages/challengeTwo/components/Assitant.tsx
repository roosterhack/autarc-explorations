import { useEffect, useRef, useState } from 'react';
import { TYPING_SPEED } from '../utils';
import { BlankState } from './BlankState';
import { PaperAirplaneIcon, PlusIcon, StopCircleIcon } from '@heroicons/react/24/outline';
import { TypingDots } from './TypingDots';
import { imageUrl, MOCK_RESPONSES } from '../consts';
import clsx from 'clsx';

type Role = 'user' | 'assistant';
type Message = { role: Role; content: string; isStreaming?: boolean };

export const AIassitant = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const msgAreaRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentTimeout, setCurrentTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [currentInterval, setCurrentInterval] = useState<ReturnType<typeof setInterval> | null>(
    null
  );

  useEffect(() => {
    if (msgAreaRef.current) {
      msgAreaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!hasUserInteracted) setHasUserInteracted(true);
    setInputValue(e.target.value);

    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  const handleSend = () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    const aiMessage: Message = { role: 'assistant', content: '', isStreaming: true };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setInputValue('');
    setIsTyping(true);

    const fullResponse = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)];

    const timeout = setTimeout(() => {
      setIsTyping(true);
      setIsThinking(true);

      let index = 0;

      const interval = setInterval(() => {
        index++;
        setMessages((prev) => {
          const updated = [...prev];
          const lastIndex = updated.length - 1;
          updated[lastIndex] = {
            ...updated[lastIndex],
            content: fullResponse.slice(0, index),
            isStreaming: false,
          };
          return updated;
        });

        if (index >= fullResponse.length) {
          clearInterval(interval);
          setCurrentInterval(null);
          setIsTyping(false);
          setIsThinking(false);
        }
      }, TYPING_SPEED);

      setCurrentInterval(interval);
    }, 2000);
    setCurrentTimeout(timeout);
  };

  const handleStop = () => {
    if (currentInterval) {
      clearInterval(currentInterval);
      setCurrentInterval(null);
    }

    if (currentTimeout) {
      clearTimeout(currentTimeout);
      setCurrentTimeout(null);
    }
    setIsThinking(false);
    setIsTyping(false);

    setMessages((prev) => {
      const updated = [...prev];
      const lastIndex = updated.length - 1;
      if (updated[lastIndex]?.role === 'assistant') {
        updated[lastIndex].isStreaming = false;
        updated[lastIndex].content = updated[lastIndex].content.trim();
        updated[lastIndex].content += '...';
      }
      return updated;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isThinking && !isTyping) {
        handleSend();
      } else {
        handleStop();
      }
    }
  };

  return (
    <div className="bg-white w-[500px] rounded-lg shadow-lg overflow-hidden flex flex-col h-[800px] border-1 border-gray-50 dark:border-gray-700">
      <div className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-800 w-full p-8">
        {!hasUserInteracted ? (
          <BlankState />
        ) : (
          <div className="space-y-6 overflow-y-auto w-full">
            {messages.map((msg, index) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={index}
                  className={clsx(
                    `px-6 py-4 rounded-2xl text-gray-700 break-words font-normal max-w-full w-full flex ${isUser ? 'justify-end' : 'justify-start'}`,
                    isUser
                      ? 'self-end bg-gray-100 dark:bg-transparent dark:text-gray-200'
                      : 'self-start bg-white dark:bg-gray-700 dark:text-white'
                  )}
                >
                  <div className="flex items-center gap-2 max-w-[80%] break-words">
                    {!isUser && (
                      <img
                        src={imageUrl}
                        alt="AI Assistant"
                        className="rounded-full object-cover w-8 h-8 shadow-md flex-shrink-0"
                      />
                    )}
                    {msg.role === 'assistant' && msg.isStreaming ? (
                      <TypingDots />
                    ) : (
                      <span className="whitespace-pre-line break-words">{msg.content}</span>
                    )}
                  </div>
                </div>
              );
            })}
            <div ref={msgAreaRef} />
          </div>
        )}
      </div>
      {/* Input panel */}
      <div className="bg-white dark:bg-gray-800 w-full p-8 flex gap-2 items-center justify-between border-t border-gray-200 dark:border-gray-500">
        <div className="flex gap-6 w-full">
          {/* extra menu */}
          <button className="cursor-pointer">
            <PlusIcon className="w-5 h-5 stroke-gray-800 dark:stroke-gray-200" />
          </button>
          <textarea
            autoFocus
            ref={textAreaRef}
            value={inputValue}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            rows={1}
            id="chatInput"
            placeholder="Ask me anything"
            className="resize-none shadow-none text-md dark:text-gray-200 font-normal border-0 bg-transparent focus:ring-0 focus:outline-none max-h-35"
          />
        </div>
        {!isTyping ? (
          <button className="cursor-pointer" onClick={handleSend}>
            <PaperAirplaneIcon className="w-5 h-5 stroke-gray-800 dark:stroke-gray-200" />
          </button>
        ) : (
          <button onClick={handleStop}>
            <StopCircleIcon className="w-5 h-5 stroke-gray-800 dark:stroke-gray-200" />
          </button>
        )}
      </div>
    </div>
  );
};
