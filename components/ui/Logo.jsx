import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import logoMark from "@/assets/icons/logo-mark.svg";

export default function Logo({ className, tone = "light" }) {
  return (
    <Link
      href="/"
      aria-label="Oga Repair home"
      className={cn("logo", className)}
    >
      <Image src={logoMark} alt="" className="logo-icon" priority />
      <span
        className={cn("logo-text", {
          "logo-text-light": tone === "light",
          "logo-text-dark": tone === "dark"
        })}
      >
        Oga <span className="logo-text-accent">Repair</span>
      </span>
    </Link>
  );
}