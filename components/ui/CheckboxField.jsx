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
    <label
      htmlFor={id}
      className={cn(
        "flex cursor-pointer items-start gap-3 text-sm text-ink",
        className
      )}
    >
      <input
        id={id}
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-lineStrong text-accent focus:ring-accent"
        {...props}
      />
      <span>
        <span>{label}</span>{" "}
        {linkLabel ? (
          <Link href={linkHref} className="underline decoration-accent underline-offset-2">
            {linkLabel}
          </Link>
        ) : null}
        {description ? <span className="block text-muted">{description}</span> : null}
      </span>
    </label>
  );
}
