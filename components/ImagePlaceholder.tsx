import Image from "next/image";

interface ImagePlaceholderProps {
  description: string;
  src?: string;
  eyebrow?: string;
  logoSrc?: string;
  width?: string;
  height?: string;
  className?: string;
}

export default function ImagePlaceholder({
  description,
  src,
  eyebrow = "Bio-Upcycling Platform",
  logoSrc,
  width = "100%",
  height = "260px",
  className = "",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <figure className={`sample-image ${className}`} style={{ width, minHeight: height }}>
        <Image
          src={src}
          alt={description}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="sample-image-media"
          priority={src.includes("hero")}
          unoptimized
        />
        <div className="sample-image-overlay" />
        {logoSrc && (
          <Image
            src={logoSrc}
            alt="KENTECH 바이오업사이클링 센터"
            width={230}
            height={68}
            className="sample-image-logo"
            unoptimized
          />
        )}
      </figure>
    );
  }

  return (
    <div className={`visual-panel ${className}`} style={{ width, minHeight: height }}>
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
