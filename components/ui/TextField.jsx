import { cn } from "@/utils/cn";

export default function TextField({
  id,
  label,
  hint,
  textarea = false,
  className,
  inputClassName,
  ...props
}) {
  const InputTag = textarea ? "textarea" : "input";

  return (
    <label className={cn("block space-y-2", className)} htmlFor={id}>
      {(label || hint) && (
        <span className="flex items-center justify-between gap-3">
          {label ? (
            <span className="text-base font-medium text-ink">{label}</span>
          ) : (
            <span />
          )}
          {hint ? <span className="text-sm text-ink">{hint}</span> : null}
        </span>
      )}
      <InputTag
        id={id}
        className={cn(
          "input-reset",
          textarea && "min-h-[138px] resize-none pt-4",
          inputClassName
        )}
        {...props}
      />
    </label>
  );
}
