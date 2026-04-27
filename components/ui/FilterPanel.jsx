"use client";

import CheckboxField from "@/components/ui/CheckboxField";
import Button from "@/components/ui/Button";
import TagChip from "@/components/ui/TagChip";

export default function FilterPanel({
  filterGroups,
  selectedFilters,
  onToggleFilter
}) {
  return (
    <aside className="surface-card rounded-xl px-5 py-7 sm:px-7">
      <div className="mb-6 flex items-center gap-3">
        <h2 className="text-xl font-semibold text-ink">Filter</h2>
        <span className="text-muted">↕</span>
      </div>
      <div className="space-y-7">
        {filterGroups.map((group) => (
          <div key={group.label} className="space-y-4">
            <h3 className="text-xl font-semibold text-ink">{group.label}</h3>
            {group.type === "tags" ? (
              <div className="flex flex-wrap gap-3">
                {group.options.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    onClick={() => onToggleFilter(group.value, option.value)}
                  >
                    <TagChip
                      active={
                        selectedFilters[group.value] &&
                        selectedFilters[group.value].includes(option.value)
                      }
                    >
                      {option.label}
                    </TagChip>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {group.options.map((option) => (
                  <div key={option.value} className="flex items-center justify-between gap-4">
                    <CheckboxField
                      id={`${group.value}-${option.value}`}
                      label={option.label}
                      checked={
                        selectedFilters[group.value] &&
                        selectedFilters[group.value].includes(option.value)
                      }
                      onChange={() => onToggleFilter(group.value, option.value)}
                    />
                    <span className="text-muted">{option.count}</span>
                  </div>
                ))}
              </div>
            )}
            {group.showMore ? (
              <Button
                type="button"
                variant="primary"
                className="min-h-11 w-full rounded-sm text-sm"
              >
                Show More
              </Button>
            ) : null}
          </div>
        ))}
      </div>
    </aside>
  );
}
