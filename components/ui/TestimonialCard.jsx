import { Quote } from "lucide-react";

export default function TestimonialCard({ title, quote, author, role }) {
  return (
    <article className="rounded-lg bg-surface px-8 py-7 shadow-soft">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold text-ink">{title}</h3>
        <span className="text-sm tracking-[0.35em] text-ink">★★★★★</span>
      </div>
      <p className="mb-8 text-sm leading-8 text-ink/85">{quote}</p>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d7c5b6] via-[#9a8b82] to-[#d3d5de]" />
          <div>
            <p className="text-lg font-semibold text-ink">{author}</p>
            <p className="text-sm text-muted">{role}</p>
          </div>
        </div>
        <Quote className="h-8 w-8 text-ink" strokeWidth={2.6} />
      </div>
    </article>
  );
}
