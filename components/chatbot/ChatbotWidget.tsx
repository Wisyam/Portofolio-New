'use client';

import { useEffect, useState } from 'react';

interface ChatbotWidgetProps {
  chatbotId?: string;
  scriptUrl?: string;
}

export default function ChatbotWidget({ chatbotId, scriptUrl }: ChatbotWidgetProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // If chatbotId is provided, use Zapier standard embed
    if (chatbotId) {
      const script = document.createElement('script');
      script.src = 'https://widget.chatreviewer.com/chatbot.js';
      script.async = true;
      script.setAttribute('data-chatbot-id', chatbotId);
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }

    // If scriptUrl is provided, load custom script
    if (scriptUrl) {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [chatbotId, scriptUrl]);

  // If no configuration provided, show placeholder message
  if (!chatbotId && !scriptUrl) {
    return null;
  }

  return null;
}

// Helper function to initialize Zapier Chatbot manually
export const initZapierChatbot = (chatbotId: string, position: 'bottom-right' | 'bottom-left' = 'bottom-right') => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://widget.chatreviewer.com/chatbot.js';
    script.async = true;
    script.setAttribute('data-chatbot-id', chatbotId);
    script.setAttribute('data-position', position);
    document.body.appendChild(script);
  }
};
