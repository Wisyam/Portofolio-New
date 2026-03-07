'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Script
        async
        type="module"
        src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        strategy="afterInteractive"
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-brand-accent hover:bg-brand-text-light text-brand-bg-dark rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Open Chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Widget Container */}
      {isOpen && isLoaded && (
        <div 
          ref={widgetRef}
          className="fixed bottom-24 right-6 z-40 w-[360px] h-[500px] md:w-[400px] md:h-[600px] bg-brand-bg-secondary rounded-xl shadow-2xl overflow-hidden border border-brand-border animate-fade-in-up"
        >
          <zapier-interfaces-chatbot-embed
            is-popup="false"
            chatbot-id="cmmgbvabt00293lzlgjonboi8"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}

      {/* Mobile: Full screen on small devices */}
      {isOpen && isLoaded && (
        <style jsx global>{`
          @media (max-width: 640px) {
            .fixed.bottom-24.right-6.z-40 {
              bottom: 0 !important;
              right: 0 !important;
              left: 0 !important;
              width: 100% !important;
              height: calc(100vh - 80px) !important;
              border-radius: 1rem 1rem 0 0 !important;
            }
          }
        `}</style>
      )}
    </>
  );
}
