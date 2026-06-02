interface PageHeroProps {
  breadcrumb: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ breadcrumb, title, subtitle }: PageHeroProps) {
  return (
    <section className="py-14" style={{ backgroundColor: "var(--primary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>{breadcrumb}</p>
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        {subtitle && <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{subtitle}</p>}
      </div>
    </section>
  );
}
