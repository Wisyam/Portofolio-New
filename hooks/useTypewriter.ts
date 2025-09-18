'use client';

import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed = 30, start = true) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    if (!start) return;
    setDisplayText(''); // Reset on text or start change
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, start]);

  return displayText;
};
