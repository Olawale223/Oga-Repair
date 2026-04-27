import { cn } from "@/utils/cn";

export default function TagChip({ active = false, children }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-9 items-center rounded-pill px-4 text-sm font-medium transition duration-300 ease-productive",
        active ? "bg-accent text-surface" : "bg-ink text-surface"
      )}
    >
      {children}
    </span>
  );
}
