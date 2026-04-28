import Link from "next/link";
import { cn } from "@/utils/cn";
import "./ui.css";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  dark: "btn-dark",
  light: "btn-light",
  ghost: "btn-ghost"
};

const sizes = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg"
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
    "btn",
    variants[variant],
    sizes[size],
    fullWidth && "btn-full-width",
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