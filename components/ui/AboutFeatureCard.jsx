export default function AboutFeatureCard({ title, description, icon: Icon }) {
  return (
    <article className="surface-card flex min-h-[220px] flex-col items-center justify-center gap-5 px-6 py-8 text-center">
      <div className="rounded-full border border-accentSoft p-4 text-accent">
        <Icon className="h-8 w-8" strokeWidth={1.8} />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        <p className="text-sm leading-7 text-muted">{description}</p>
      </div>
    </article>
  );
}
