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
        "section-heading",
        align === "center" && "section-heading-center",
        align === "left" && "section-heading-left",
        className
      )}
    >
      <h2
        className={cn(
          "section-title",
          size === "display" && "section-title-display",
          size === "section" && "section-title-section",
          size === "title" && "section-title-title",
          titleClassName
        )}
      >
        {prefix ? <span>{prefix} </span> : null}
        {accent ? <span className="section-title-accent">{accent}</span> : null}
        {suffix ? <span> {suffix}</span> : null}
      </h2>
      {subtitle ? (
        <p className={cn("section-subtitle", subtitleClassName)}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}