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
    <form className="search-bar" role="search" onSubmit={(event) => event.preventDefault()}>
      <label className="search-field">
        <Search className="search-icon" />
        <span className="sr-only">Search by service</span>
        <input
          type="text"
          value={searchValue}
          onChange={onSearchChange}
          placeholder="Input Service Required"
          className="search-input"
        />
      </label>
      <div className="search-divider" />
      <label className="search-field">
        <MapPin className="search-icon" />
        <span className="sr-only">Search by location</span>
        <input
          type="text"
          value={locationValue}
          onChange={onLocationChange}
          placeholder="Location"
          className="search-input"
        />
      </label>
      <Button type="submit" variant="light" className="search-button">
        Search
      </Button>
    </form>
  );
}