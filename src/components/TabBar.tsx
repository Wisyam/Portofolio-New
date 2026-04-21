"use client";

import { useState, useEffect } from "react";

const tabs = [
  { id: "hero", label: "home", ext: ".tsx", icon: "~" },
  { id: "skills", label: "skills", ext: ".ts", icon: "{}" },
  { id: "projects", label: "projects", ext: ".tsx", icon: "[]" },
  { id: "experience", label: "exp", ext: ".md", icon: "#" },
  { id: "education", label: "edu", ext: ".json", icon: "<>" },
  { id: "contact", label: "contact", ext: ".sh", icon: "$" },
];

export default function TabBar() {
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map((tab) => ({
        id: tab.id,
        el: document.getElementById(tab.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-secondary border-b border-border h-10 flex items-stretch select-none">
      {/* Logo */}
      <div className="flex items-center px-2.5 sm:px-4 gap-1.5 sm:gap-2 border-r border-border shrink-0">
        <div className="w-2 h-2 bg-accent-green animate-blink" />
        <span className="font-[family-name:var(--font-pixel)] text-[8px] text-accent-green whitespace-nowrap hidden sm:inline">
          PORTFOLIO
        </span>
        <span className="font-[family-name:var(--font-pixel)] text-[8px] text-accent-green sm:hidden">
          WZ
        </span>
      </div>

      {/* Tabs */}
      <div className="flex flex-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollTo(tab.id)}
            className={`flex items-center justify-center gap-1 sm:gap-1.5 flex-1 sm:flex-none px-1 sm:px-4 text-[11px] sm:text-xs border-r border-border transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-bg-primary text-text-primary border-t-2 border-t-accent-blue"
                : "text-text-secondary hover:bg-bg-tertiary hover:text-text-primary"
            }`}
          >
            <span className="text-accent-yellow text-[11px] sm:text-[10px]">
              {tab.icon}
            </span>
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="text-text-muted text-[10px] hidden md:inline">
              {tab.ext}
            </span>
          </button>
        ))}
      </div>

      {/* Window buttons - hidden on mobile */}
      <div className="hidden sm:flex items-center gap-2 px-3">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>
    </nav>
  );
}
