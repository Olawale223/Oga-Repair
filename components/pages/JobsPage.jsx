"use client";

import { useDeferredValue, useState } from "react";
import MotionSection from "@/components/ui/MotionSection";
import FilterPanel from "@/components/ui/FilterPanel";
import JobCard from "@/components/ui/JobCard";
import SearchBar from "@/components/ui/SearchBar";
import SectionHeading from "@/components/ui/SectionHeading";
import WorldMapSection from "@/components/ui/WorldMapSection";
import { jobFilterGroups, jobsList } from "@/data/siteData";
import "./pages.css"


const initialFilters = {
  service: [],
  experienceLevel: [],
  datePosted: [],
  tags: []
};

export default function JobsPage() {
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [sortValue, setSortValue] = useState("latest");
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);

  const deferredSearch = useDeferredValue(searchValue);
  const deferredLocation = useDeferredValue(locationValue);

  const filteredJobs = jobsList
    .filter((job) => {
      const keyword = deferredSearch.trim().toLowerCase();
      const location = deferredLocation.trim().toLowerCase();

      const matchesSearch =
        !keyword ||
        [job.title, job.company, job.category]
          .join(" ")
          .toLowerCase()
          .includes(keyword);

      const matchesLocation = !location || job.location.toLowerCase().includes(location);

      const matchesService =
        selectedFilters.service.length === 0 ||
        selectedFilters.service.includes(job.service);

      const matchesExperience =
        selectedFilters.experienceLevel.length === 0 ||
        selectedFilters.experienceLevel.includes(job.experienceLevel);

      const matchesDate =
        selectedFilters.datePosted.length === 0 ||
        selectedFilters.datePosted.includes(job.datePosted);

      const matchesTags =
        selectedFilters.tags.length === 0 ||
        selectedFilters.tags.some((tag) => job.tags.includes(tag));

      return (
        matchesSearch &&
        matchesLocation &&
        matchesService &&
        matchesExperience &&
        matchesDate &&
        matchesTags
      );
    })
    .sort((left, right) => {
      if (sortValue === "location") {
        return left.location.localeCompare(right.location);
      }

      if (sortValue === "salary") {
        return parseMoney(right.salary) - parseMoney(left.salary);
      }

      return parseMinutes(left.posted) - parseMinutes(right.posted);
    });

  function toggleFilter(group, value) {
    setSelectedFilters((current) => {
      const exists = current[group].includes(value);

      return {
        ...current,
        [group]: exists
          ? current[group].filter((item) => item !== value)
          : [...current[group], value]
      };
    });
  }

  return (
    <main className="jobs-main">
      <section className="section-gap pb-12">
        <div className="section-shell">
          <MotionSection>
            <SearchBar
              searchValue={searchValue}
              locationValue={locationValue}
              onSearchChange={(event) => setSearchValue(event.target.value)}
              onLocationChange={(event) => setLocationValue(event.target.value)}
            />
          </MotionSection>

          <MotionSection className="mt-14">
            <h1 className="jobs-hero-title">
              What are <span className="jobs-hero-accent">you</span>
              <br />
              looking for?
            </h1>
            <div className="jobs-divider" />
          </MotionSection>

          <MotionSection className="jobs-stats-grid">
            <div className="jobs-stat-large">
              One
              <br />
              Platform
            </div>
            <div className="jobs-stat-large-right">
              Infinite
              <br />
              Options
            </div>
          </MotionSection>

          <MotionSection className="jobs-intro">
            <div className="space-y-3">
              <h2 className="jobs-intro-title">
                Explore Professionals that suit you
              </h2>
              <p className="jobs-intro-subtitle">
                Discover employers, read what others say about them and share your own
                experiences.
              </p>
            </div>
          </MotionSection>

          <div className="jobs-results-bar">
            <p className="jobs-count">
              Showing {filteredJobs.length}-{filteredJobs.length} of 10 results
            </p>
            <label className="jobs-sort">
              <span className="sr-only">Sort results</span>
              <select
                className="jobs-sort-select"
                value={sortValue}
                onChange={(event) => setSortValue(event.target.value)}
              >
                <option value="latest">Sort by latest</option>
                <option value="salary">Sort by salary</option>
                <option value="location">Sort by location</option>
              </select>
            </label>
          </div>

          <div className="jobs-layout">
            <MotionSection delay={0.04}>
              <FilterPanel
                filterGroups={jobFilterGroups}
                selectedFilters={selectedFilters}
                onToggleFilter={toggleFilter}
              />
            </MotionSection>
            <div className="jobs-list-container">
              {filteredJobs.map((job, index) => (
                <MotionSection key={job.slug} delay={index * 0.05}>
                  <JobCard {...job} />
                </MotionSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap pt-2">
        <div className="section-shell">
          <MotionSection>
            <SectionHeading
              prefix="Get connected with the right"
              accent="Professionals"
              align="left"
              className="max-w-[620px]"
            />
          </MotionSection>
          <MotionSection className="mt-12">
            <WorldMapSection className="space-y-0" />
          </MotionSection>
        </div>
      </section>
    </main>
  );
}

function parseMinutes(postedLabel) {
  return Number.parseInt(postedLabel, 10) || 0;
}

function parseMoney(moneyRange) {
  const amount = moneyRange.replace(/[^0-9]/g, "");
  return Number.parseInt(amount, 10) || 0;
}