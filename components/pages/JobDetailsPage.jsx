import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Facebook, Linkedin, MapPin, MoveRight, Twitter, X } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";
import JobCard from "@/components/ui/JobCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { media } from "@/data/media";
import { jobDetail, jobsList } from "@/data/siteData";
import "./pages.css"


const shareIcons = {
  facebook: Facebook,
  x: X,
  linkedin: Linkedin
};

export default function JobDetailsPage({ slug }) {
  const selectedJob = jobsList.find((job) => job.slug === slug);

  if (!selectedJob) {
    notFound();
  }

  const relatedJobs = jobsList.filter((job) => job.slug !== slug).slice(0, 3);

  return (
    <main className="job-details-main">
      <div className="section-shell">
        <section className="job-header-grid">
          <MotionSection>
            <h1 className="job-title">Job Description</h1>
            <p className="job-description">
              {jobDetail.description}
            </p>
          </MotionSection>
          <MotionSection delay={0.08}>
            <Image
              src={media.jobAuthor}
              alt="Profile avatar"
              className="job-author-image"
            />
          </MotionSection>
        </section>

        <MotionSection className="job-section">
          <h2 className="job-section-title">Key Responsibilities</h2>
          <ul className="job-list">
            {jobDetail.responsibilities.map((item) => (
              <li key={item} className="job-list-item">
                <Check className="job-list-icon" strokeWidth={2.2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </MotionSection>

        <MotionSection className="job-section">
          <h2 className="job-section-title">Certifications & Licenses</h2>
          <ul className="job-list">
            {jobDetail.certifications.map((item) => (
              <li key={item} className="job-list-item">
                <Check className="job-list-icon" strokeWidth={2.2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </MotionSection>

        <MotionSection className="share-section">
          <span className="share-label">Share Job:</span>
          {["facebook", "x", "linkedin"].map((item) => {
            const Icon = shareIcons[item];
            return (
              <Link
                key={item}
                href="#"
                className="share-link"
                aria-label={`Share on ${item}`}
              >
                <Icon className="share-icon" strokeWidth={2} />
              </Link>
            );
          })}
        </MotionSection>

        <MotionSection className="gallery-section">
          <div className="gallery-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="gallery-item">
                <Image
                  src={media.jobGallery}
                  alt={`Related project ${item}`}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </MotionSection>

        <section className="related-jobs-section">
          <MotionSection>
            <SectionHeading
              suffix="Related Jobs"
              align="left"
              className="space-y-2"
              subtitle="Looking for someone similar ?"
            />
          </MotionSection>
          <div className="related-jobs-list">
            {relatedJobs.map((job, index) => (
              <MotionSection key={job.slug} delay={index * 0.05}>
                <JobCard {...job} />
              </MotionSection>
            ))}
          </div>
        </section>

        <MotionSection>
          <Link href="/jobs" className="back-link">
            Back to all jobs
            <MoveRight className="h-4 w-4" />
          </Link>
        </MotionSection>
      </div>
    </main>
  );
}