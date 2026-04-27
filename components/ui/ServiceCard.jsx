import { cn } from "@/utils/cn";

export default function ServiceCard({ title, description, icon: Icon, featured = false }) {
  return (
    <article
      className={cn(
        "group flex min-h-[208px] flex-col justify-between rounded-md border p-6 shadow-soft transition duration-300 ease-productive hover:-translate-y-1",
        featured
          ? "border-accent bg-accent text-surface"
          : "border-line bg-surface text-ink"
      )}
    >
      <div className="flex justify-end">
        <Icon
          className={cn("h-12 w-12", featured ? "text-surface" : "text-accent")}
          strokeWidth={1.8}
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-[2rem] font-semibold leading-tight sm:text-[2.2rem] md:text-[2rem]">
          <span className="block text-[1.25rem] leading-tight">{title}</span>
        </h3>
        <p className={cn("max-w-[16rem] text-sm leading-7", featured ? "text-white/88" : "text-muted")}>
          {description}
        </p>
      </div>
    </article>
  );
}
