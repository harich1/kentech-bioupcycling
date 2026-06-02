interface ImagePlaceholderProps {
  description: string;
  width?: string;
  height?: string;
  className?: string;
}

export default function ImagePlaceholder({ description, width = "100%", height = "240px", className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed text-center px-4 ${className}`}
      style={{
        width,
        height,
        backgroundColor: "#e8f5e9",
        borderColor: "#a5d6a7",
        color: "#2d6a4f",
      }}
    >
      <svg className="w-8 h-8 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-xs font-medium leading-relaxed max-w-xs opacity-75">{description}</p>
    </div>
  );
}
