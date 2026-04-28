import Link from "next/link";
import { cn } from "@/utils/cn";

export default function CheckboxField({
  id,
  label,
  description,
  linkLabel,
  linkHref = "#",
  className,
  ...props
}) {
  return (
    <label htmlFor={id} className={cn("checkbox-label", className)}>
      <input id={id} type="checkbox" className="checkbox-input" {...props} />
      <span className="checkbox-text">
        <span>{label}</span>{" "}
        {linkLabel ? (
          <Link href={linkHref} className="checkbox-link">
            {linkLabel}
          </Link>
        ) : null}
        {description ? <span className="checkbox-description">{description}</span> : null}
      </span>
    </label>
  );
}