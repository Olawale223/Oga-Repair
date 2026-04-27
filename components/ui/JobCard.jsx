import Link from "next/link";
import {
  Bookmark,
  BriefcaseBusiness,
  Clock3,
  MapPin,
  WalletCards
} from "lucide-react";
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
    <article className="surface-card relative overflow-hidden rounded-xl px-6 py-8 sm:px-10 sm:py-10">
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="inline-flex rounded-sm bg-ink px-4 py-2 text-sm font-medium text-surface">
          {posted}
        </span>
        <button
          type="button"
          aria-label={`Save ${title}`}
          className="rounded-full p-2 text-muted transition duration-300 hover:bg-page hover:text-accent"
        >
          <Bookmark className="h-6 w-6" strokeWidth={1.8} />
        </button>
      </div>
      <div className="mb-8 flex items-start gap-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d7c5b6] via-[#9a8b82] to-[#d3d5de]" />
        <div className="space-y-2">
          <h3 className="text-[1.55rem] font-semibold leading-tight text-ink sm:text-[1.7rem]">
            {title}
          </h3>
          <p className="text-lg text-mutedDark">{company}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap gap-x-6 gap-y-4 text-mutedDark">
          <Meta icon={BriefcaseBusiness}>{category}</Meta>
          {employmentType ? <Meta icon={Clock3}>{employmentType}</Meta> : null}
          <Meta icon={WalletCards}>{salary}</Meta>
          <Meta icon={MapPin}>{location}</Meta>
        </div>
        <Link
          href={`/jobs/${slug}`}
          className={cn(
            "inline-flex min-h-12 items-center justify-center rounded-sm bg-accent px-7 text-base font-medium text-surface transition duration-300 ease-productive hover:-translate-y-0.5 hover:bg-[#f55e1f]"
          )}
        >
          Job Details
        </Link>
      </div>
    </article>
  );
}

function Meta({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-3 text-lg">
      <Icon className="h-5 w-5 text-accent" strokeWidth={1.9} />
      <span>{children}</span>
    </span>
  );
}
