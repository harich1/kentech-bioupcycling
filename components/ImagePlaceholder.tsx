interface ImagePlaceholderProps {
  description: string;
  eyebrow?: string;
  height?: string;
  className?: string;
}

export default function ImagePlaceholder({
  description,
  eyebrow = "Bio-Upcycling Platform",
  height = "260px",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div className={`visual-panel ${className}`} style={{ minHeight: height }}>
      <div className="visual-grid" />
      <div className="visual-flow" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="relative z-10 max-w-md">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">{eyebrow}</p>
        <p className="text-lg font-semibold leading-8 text-white">{description}</p>
      </div>
    </div>
  );
}
