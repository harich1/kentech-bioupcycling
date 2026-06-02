interface PageHeroProps {
  breadcrumb: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ breadcrumb, title, subtitle }: PageHeroProps) {
  return (
    <section className="py-12 border-b border-gray-200" style={{ backgroundColor: "var(--gray-bg)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs mb-2" style={{ color: "var(--text-mid)" }}>{breadcrumb}</p>
        <h1 className="text-3xl font-bold mb-1" style={{ color: "var(--primary)" }}>{title}</h1>
        {subtitle && <p className="text-sm mt-1" style={{ color: "var(--text-mid)" }}>{subtitle}</p>}
      </div>
    </section>
  );
}
