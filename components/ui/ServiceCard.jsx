import { cn } from "@/utils/cn";

export default function ServiceCard({ title, description, icon: Icon, featured = false }) {
  return (
    <article className={cn("service-card", featured && "service-card-featured")}>
      <div className="service-card-icon">
        <Icon className={cn("service-card-icon-svg", featured && "service-card-icon-svg-featured")} strokeWidth={1.8} />
      </div>
      <div className="service-card-content">
        <h3 className="service-card-title">
          <span className="service-card-title-text">{title}</span>
        </h3>
        <p className={cn("service-card-description", featured && "service-card-description-featured")}>
          {description}
        </p>
      </div>
    </article>
  );
}