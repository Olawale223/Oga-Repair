import Link from "next/link";
import { cn } from "@/utils/cn";

const variants = {
  primary:
    "bg-accent text-surface shadow-soft hover:-translate-y-0.5 hover:bg-[#f55e1f] focus-visible:shadow-focus",
  secondary:
    "border border-accent bg-transparent text-accent hover:-translate-y-0.5 hover:bg-accent hover:text-surface focus-visible:shadow-focus",
  dark: "bg-ink text-surface hover:bg-inkSoft focus-visible:shadow-focus",
  light:
    "bg-surface text-accent shadow-soft hover:-translate-y-0.5 hover:bg-page focus-visible:shadow-focus",
  ghost:
    "bg-transparent text-ink hover:bg-black/5 focus-visible:border-accent focus-visible:shadow-focus"
};

const sizes = {
  sm: "min-h-11 px-5 text-sm",
  md: "min-h-12 px-6 text-base",
  lg: "min-h-14 px-8 text-base"
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  fullWidth = false,
  children,
  ...props
}) {
  const sharedClassName = cn(
    "inline-flex items-center justify-center rounded-pill font-medium transition duration-300 ease-productive",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <Link href={href} className={sharedClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={sharedClassName} {...props}>
      {children}
    </button>
  );
}
