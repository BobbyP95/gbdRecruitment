type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

/**
 * Shared hero banner for interior pages (Consulting, Recruiting, Get A Job,
 * About Us, Contact Us). The Navbar is `position: fixed`, so this component
 * carries the top padding needed to clear it — every page that uses
 * PageHero does not need to add its own top spacing.
 */
export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-emerald-950 pt-32 sm:pt-28 lg:pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-[#e48f45] font-semibold tracking-widest text-sm uppercase mb-3">
          {eyebrow}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
