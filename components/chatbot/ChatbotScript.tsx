'use client';

import Script from 'next/script';

export default function ChatbotScript() {
  return (
    <>
      <Script
        async
        type="module"
        src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        strategy="afterInteractive"
      />
      <zapier-interfaces-chatbot-embed
        is-popup="false"
        chatbot-id="cmmgbvabt00293lzlgjonboi8"
        height="600px"
        width="400px"
      />
    </>
  );
}
