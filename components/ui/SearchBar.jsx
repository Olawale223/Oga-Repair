"use client";

import { MapPin, Search } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SearchBar({
  searchValue,
  locationValue,
  onSearchChange,
  onLocationChange
}) {
  return (
    <form
      className="mx-auto flex w-full max-w-[832px] flex-col rounded-pill bg-ink p-2 shadow-card sm:flex-row sm:items-center"
      role="search"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="flex min-h-[68px] flex-1 items-center gap-4 rounded-pill px-6 text-surface">
        <Search className="h-6 w-6 text-surface" />
        <span className="sr-only">Search by service</span>
        <input
          type="text"
          value={searchValue}
          onChange={onSearchChange}
          placeholder="Input Service Required"
          className="w-full bg-transparent text-[1.1rem] text-surface placeholder:text-white/80"
        />
      </label>
      <div className="mx-2 hidden h-10 w-px bg-accent sm:block" />
      <label className="flex min-h-[68px] flex-1 items-center gap-4 rounded-pill px-6 text-surface">
        <MapPin className="h-6 w-6 text-surface" />
        <span className="sr-only">Search by location</span>
        <input
          type="text"
          value={locationValue}
          onChange={onLocationChange}
          placeholder="Location"
          className="w-full bg-transparent text-[1.1rem] text-surface placeholder:text-white/80"
        />
      </label>
      <Button
        type="submit"
        variant="light"
        className="mx-2 min-h-[52px] rounded-pill px-8 text-xl font-medium"
      >
        Search
      </Button>
    </form>
  );
}
