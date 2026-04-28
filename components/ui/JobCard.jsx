import Link from "next/link";
import { Bookmark, BriefcaseBusiness, Clock3, MapPin, WalletCards } from "lucide-react";
import { cn } from "@/utils/cn";

export default function JobCard({
  slug,
  title,
  company,
  category,
  employmentType,
  salary,
  location,
  posted
}) {
  return (
    <article className="job-card">
      <div className="job-card-header">
        <span className="job-card-badge">{posted}</span>
        <button type="button" aria-label={`Save ${title}`} className="job-card-save">
          <Bookmark className="job-card-save-icon" strokeWidth={1.8} />
        </button>
      </div>
      <div className="job-card-company">
        <div className="job-card-avatar" />
        <div className="job-card-company-info">
          <h3 className="job-card-title">{title}</h3>
          <p className="job-card-company-name">{company}</p>
        </div>
      </div>
      <div className="job-card-footer">
        <div className="job-card-meta">
          <Meta icon={BriefcaseBusiness}>{category}</Meta>
          {employmentType ? <Meta icon={Clock3}>{employmentType}</Meta> : null}
          <Meta icon={WalletCards}>{salary}</Meta>
          <Meta icon={MapPin}>{location}</Meta>
        </div>
        <Link href={`/jobs/${slug}`} className="job-card-link">
          Job Details
        </Link>
      </div>
    </article>
  );
}

function Meta({ icon: Icon, children }) {
  return (
    <span className="job-card-meta-item">
      <Icon className="job-card-meta-icon" strokeWidth={1.9} />
      <span>{children}</span>
    </span>
  );
}