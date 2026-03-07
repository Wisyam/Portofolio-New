'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showFirstMobileSkeleton, setShowFirstMobileSkeleton] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen && !isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isMobile]);

  const toggleChat = () => {
    const nextOpenState = !isOpen;

    if (nextOpenState && !hasOpenedOnce) {
      setHasOpenedOnce(true);
      if (isMobile) {
        setShowFirstMobileSkeleton(true);
        window.setTimeout(() => {
          setShowFirstMobileSkeleton(false);
        }, 700);
      }
    }

    if (nextOpenState && !isLoaded && !isLoading) {
      setIsLoading(true);
    }

    setIsOpen(nextOpenState);
  };

  const closeChat = () => {
    setIsOpen(false);
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

      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bg-brand-accent hover:bg-brand-text-light text-brand-bg-dark rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Open Chat"
          style={{
            bottom: isMobile ? '5.5rem' : '1.5rem',
            right: isMobile ? '1rem' : '1.5rem',
            zIndex: 9999,
          }}
        >
          {isLoading || !isLoaded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      )}

      {isOpen && (
        <div
          ref={widgetRef}
          className="fixed bg-brand-bg-secondary rounded-t-xl md:rounded-xl shadow-2xl overflow-hidden border border-brand-border animate-fade-in-up flex flex-col"
          style={{
            left: isMobile ? '0' : '0.5rem',
            right: isMobile ? '0' : '0.5rem',
            bottom: isMobile ? '0' : '1.5rem',
            width: isMobile ? '100%' : '420px',
            height: isMobile ? 'calc(100vh - 4.5rem)' : 'min(78vh, 680px)',
            maxWidth: isMobile ? '100%' : 'calc(100vw - 1rem)',
            zIndex: 9998,
          }}
        >
          <div className="bg-brand-bg-dark px-4 py-3 flex items-center justify-between border-b border-brand-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-bg-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="text-brand-text-light font-medium">AI Assistant</span>
            </div>
            <button
              onClick={closeChat}
              className="p-2 rounded-full hover:bg-brand-border transition-colors"
              aria-label="Close Chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="relative flex-1 overflow-hidden">
            {isMobile && (showFirstMobileSkeleton || (!isLoaded && isLoading)) && (
              <div className="absolute inset-0 bg-brand-bg-secondary z-10 flex flex-col">
                <div className="bg-brand-bg-dark p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-border animate-pulse" />
                  <div className="flex-1">
                    <div className="h-4 w-32 bg-brand-border rounded animate-pulse mb-2" />
                    <div className="h-3 w-20 bg-brand-border rounded animate-pulse" />
                  </div>
                </div>

                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
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
        </div>
      )}
    </>
  );
}
