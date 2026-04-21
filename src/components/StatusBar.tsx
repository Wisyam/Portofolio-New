"use client";

import { useState, useEffect } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-accent-blue text-white text-xs flex justify-between items-center px-3 h-6">
      <span className="flex items-center gap-2 sm:gap-3">
        <span>main*</span>
        <span className="hidden sm:inline">0 errors</span>
        <span className="hidden sm:inline">0 warnings</span>
      </span>
      <span className="flex items-center gap-2 sm:gap-3">
        <span className="hidden sm:inline">Ln 1, Col 1</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span>TypeScript</span>
        <span>{time}</span>
      </span>
    </footer>
  );
}
