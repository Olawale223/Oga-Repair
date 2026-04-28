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
    <aside className="filter-panel">
      <div className="filter-header">
        <h2 className="filter-title">Filter</h2>
        <span className="filter-icon">↕</span>
      </div>
      <div className="filter-groups">
        {filterGroups.map((group) => (
          <div key={group.label} className="filter-group">
            <h3 className="filter-group-title">{group.label}</h3>
            {group.type === "tags" ? (
              <div className="filter-tags">
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
              <div className="filter-checkboxes">
                {group.options.map((option) => (
                  <div key={option.value} className="filter-checkbox-item">
                    <CheckboxField
                      id={`${group.value}-${option.value}`}
                      label={option.label}
                      checked={
                        selectedFilters[group.value] &&
                        selectedFilters[group.value].includes(option.value)
                      }
                      onChange={() => onToggleFilter(group.value, option.value)}
                    />
                    <span className="filter-count">{option.count}</span>
                  </div>
                ))}
              </div>
            )}
            {group.showMore ? (
              <Button type="button" variant="primary" className="filter-show-more">
                Show More
              </Button>
            ) : null}
          </div>
        ))}
      </div>
    </aside>
  );
}