interface SectionHeaderProps {
  lineNum: string;
  comment: string;
  title: string;
}

export default function SectionHeader({
  lineNum,
  comment,
  title,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 sm:mb-12">
      <p className="text-text-muted text-[11px] sm:text-xs mb-1">{comment}</p>
      <h2 className="font-[family-name:var(--font-pixel)] text-sm sm:text-lg text-accent-green flex items-center gap-2 sm:gap-3">
        <span className="text-text-muted font-[family-name:var(--font-mono)] text-[11px] sm:text-xs">
          {lineNum}
        </span>
        {title}
      </h2>
    </div>
  );
}
