interface PageHeroProps {
  breadcrumb: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ breadcrumb, title, subtitle }: PageHeroProps) {
  return (
    <section
      className="page-hero py-14 border-b border-gray-200 text-white"
      style={{
        background:
          "linear-gradient(90deg, rgba(15, 36, 64, 0.96), rgba(15, 36, 64, 0.78)), url('/kentech-sub-visual.jpg') center / cover",
      }}
    >
      <div className="section-wrap">
        <p className="page-crumb text-xs font-extrabold mb-2 text-white/60">{breadcrumb}</p>
        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight">{title}</h1>
        {subtitle && <p className="page-subtitle text-sm leading-7 mt-3 max-w-3xl text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}
