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
    <label className={cn("text-field", className)} htmlFor={id}>
      {(label || hint) && (
        <span className="text-field-header">
          {label ? (
            <span className="text-field-label">{label}</span>
          ) : (
            <span />
          )}
          {hint ? <span className="text-field-hint">{hint}</span> : null}
        </span>
      )}
      <InputTag
        id={id}
        className={cn(
          "text-field-input",
          textarea && "text-field-textarea",
          inputClassName
        )}
        {...props}
      />
    </label>
  );
}