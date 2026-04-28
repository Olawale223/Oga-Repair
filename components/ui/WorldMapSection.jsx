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
    <section className={cn("world-map-section", className)}>
      <div className="world-map-container">
        <Image
          src={media.worldMap}
          alt="Global coverage map"
          priority={false}
          className={cn("world-map-image", mapClassName)}
        />
      </div>
      {(prefix || accent || suffix || subtitle || children) && (
        <div className="world-map-content">
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