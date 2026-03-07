'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    if (!isLoaded && !isLoading) {
      setIsLoading(true);
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Script
        async
        type="module"
        src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        strategy="afterInteractive"
        onLoad={() => {
          setIsLoaded(true);
          setIsLoading(false);
        }}
        onError={() => setIsLoading(false)}
      />
      
      {/* Chat Button - Fixed position for mobile - Higher z-index than nav */}
      <button
        onClick={toggleChat}
        className="fixed bg-brand-accent hover:bg-brand-text-light text-brand-bg-dark rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Open Chat"
        style={{
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 9999,
        }}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : isLoading || !isLoaded ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Widget Container - Mobile responsive */}
      {isOpen && (
        <div 
          ref={widgetRef}
          className="fixed bg-brand-bg-secondary rounded-t-xl md:rounded-xl shadow-2xl overflow-hidden border border-brand-border animate-fade-in-up"
          style={{
            // Mobile: Full width, bottom sheet style
            left: '0.5rem',
            right: '0.5rem',
            bottom: '5.5rem',
            width: 'calc(100% - 1rem)',
            height: 'calc(100vh - 8rem)',
            maxHeight: '600px',
            zIndex: 9998,
          }}
        >
          {/* Loading Skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-brand-bg-secondary z-10 flex flex-col">
              {/* Header skeleton */}
              <div className="bg-brand-bg-dark p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-border animate-pulse" />
                <div className="flex-1">
                  <div className="h-4 w-32 bg-brand-border rounded animate-pulse mb-2" />
                  <div className="h-3 w-20 bg-brand-border rounded animate-pulse" />
                </div>
              </div>
              {/* Messages skeleton */}
              <div className="flex-1 p-4 space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-border animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-3/4 bg-brand-border rounded animate-pulse" />
                    <div className="h-3 w-1/2 bg-brand-border rounded animate-pulse" />
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-2/3 bg-brand-border rounded animate-pulse ml-auto" />
                    <div className="h-3 w-1/2 bg-brand-border rounded animate-pulse ml-auto" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-accent/30 animate-pulse" />
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-border animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-full bg-brand-border rounded animate-pulse" />
                    <div className="h-3 w-4/5 bg-brand-border rounded animate-pulse" />
                  </div>
                </div>
              </div>
              {/* Input skeleton */}
              <div className="p-4 border-t border-brand-border">
                <div className="h-12 bg-brand-border rounded-lg animate-pulse" />
              </div>
            </div>
          )}
          
          <zapier-interfaces-chatbot-embed
            is-popup="false"
            chatbot-id="cmmgbvabt00293lzlgjonboi8"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}
    </>
  );
}
