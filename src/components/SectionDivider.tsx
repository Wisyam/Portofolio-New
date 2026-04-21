interface SectionDividerProps {
  variant?: "default" | "dashed" | "comment";
  text?: string;
}

export default function SectionDivider({
  variant = "default",
  text,
}: SectionDividerProps) {
  if (variant === "comment") {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-text-muted text-xs font-[family-name:var(--font-mono)]">
          <div className="flex-1 h-px bg-border" />
          <span>{text || "/* ─────────────────── */"}</span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>
    );
  }

  if (variant === "dashed") {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-text-muted text-[10px] font-[family-name:var(--font-mono)] text-center tracking-[0.5em] select-none opacity-30">
          {"─".repeat(60)}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 bg-accent-green/30 rotate-45" />
          <div className="w-1.5 h-1.5 bg-accent-blue/30 rotate-45" />
          <div className="w-1.5 h-1.5 bg-accent-purple/30 rotate-45" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
}
