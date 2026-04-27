import { cn } from "@/utils/cn";

export default function SectionHeading({
  prefix,
  accent,
  suffix,
  subtitle,
  subtitleClassName,
  align = "center",
  size = "section",
  className,
  titleClassName
}) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      <h2
        className={cn(
          "font-semibold text-ink text-balance",
          size === "display" && "text-display",
          size === "section" && "text-section",
          size === "title" && "text-title",
          titleClassName
        )}
      >
        {prefix ? <span>{prefix} </span> : null}
        {accent ? <span className="text-accent">{accent}</span> : null}
        {suffix ? <span> {suffix}</span> : null}
      </h2>
      {subtitle ? (
        <p className={cn("mx-auto max-w-text text-body text-muted", subtitleClassName)}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
