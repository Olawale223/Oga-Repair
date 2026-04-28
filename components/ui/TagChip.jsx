import { cn } from "@/utils/cn";

export default function TagChip({ active = false, children }) {
  return (
    <span className={cn("tag-chip", active && "tag-chip-active")}>
      {children}
    </span>
  );
}