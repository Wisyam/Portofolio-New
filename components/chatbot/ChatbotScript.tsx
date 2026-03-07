'use client';

import Script from 'next/script';

interface ChatbotScriptProps {
  chatbotId?: string;
}

export default function ChatbotScript({ chatbotId }: ChatbotScriptProps) {
  // If no chatbotId is provided, don't render anything
  if (!chatbotId) {
    return null;
  }

  return (
    <Script
      id="zapier-chatbot"
      src="https://embed.chatreviewer.com/widget/v2/client.js"
      strategy="afterInteractive"
      onLoad={() => {
        // Initialize the chatbot after script loads
        if ((window as any).ChatWidget) {
          (window as any).ChatWidget.init({
            chatbotId: chatbotId,
            position: 'bottom-right',
            theme: 'auto',
          });
        }
      }}
    />
  );
}
