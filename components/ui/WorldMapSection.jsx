import Image from "next/image";
import { media } from "@/data/media";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/utils/cn";

export default function WorldMapSection({
  prefix,
  accent,
  suffix,
  subtitle,
  className,
  mapClassName,
  children
}) {
  return (
    <section className={cn("space-y-10", className)}>
      <div className="world-map-wrap map-frame">
        <Image
          src={media.worldMap}
          alt="Global coverage map"
          priority={false}
          className={cn("mx-auto h-auto w-full max-w-[1050px] object-contain", mapClassName)}
        />
      </div>
      {(prefix || accent || suffix || subtitle || children) && (
        <div className="space-y-6 text-center">
          {(prefix || accent || suffix || subtitle) && (
            <SectionHeading
              prefix={prefix}
              accent={accent}
              suffix={suffix}
              subtitle={subtitle}
            />
          )}
          {children}
        </div>
      )}
    </section>
  );
}
