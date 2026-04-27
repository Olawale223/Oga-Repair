import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import logoMark from "@/assets/icons/logo-mark.svg";

export default function Logo({ className, tone = "light" }) {
  return (
    <Link
      href="/"
      aria-label="Oga Repair home"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <Image src={logoMark} alt="" className="h-7 w-7" priority />
      <span
        className={cn("text-[1.2rem] font-semibold tracking-tight", {
          "text-surface": tone === "light",
          "text-ink": tone === "dark"
        })}
      >
        Oga <span className="text-accent">Repair</span>
      </span>
    </Link>
  );
}
