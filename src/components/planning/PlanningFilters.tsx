import { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { CleanerOption, LocationOption, PlanningFilters, PlanningJobStatus } from "@/types/planning";
import { fetchCleaners, fetchLocations } from "@/api/planning";

interface PlanningFiltersProps {
  filters: PlanningFilters;
  onFiltersChange: (filters: PlanningFilters) => void;
}

const STATUS_OPTIONS: { value: PlanningJobStatus; label: string }[] = [
  { value: "scheduled", label: "Scheduled" },
  { value: "in_progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
];

export function PlanningFiltersPanel({ filters, onFiltersChange }: PlanningFiltersProps) {
  const [cleaners, setCleaners] = useState<CleanerOption[]>([]);
  const [locations, setLocations] = useState<LocationOption[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOptions() {
      setLoading(true);
      const [cleanersData, locationsData] = await Promise.all([
        fetchCleaners(),
        fetchLocations(),
      ]);
      setCleaners(cleanersData);
      setLocations(locationsData);
      setLoading(false);
    }
    loadOptions();
  }, []);

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      onFiltersChange({
        ...filters,
        date: format(date, "yyyy-MM-dd"),
      });
    }
  };

  const handleCleanerChange = (cleanerId: string) => {
    if (cleanerId === "all") {
      onFiltersChange({ ...filters, cleanerIds: [] });
    } else {
      const id = parseInt(cleanerId, 10);
      onFiltersChange({ ...filters, cleanerIds: [id] });
    }
  };

  const handleLocationChange = (locationId: string) => {
    onFiltersChange({
      ...filters,
      locationId: locationId === "all" ? null : parseInt(locationId, 10),
    });
  };

  const handleStatusToggle = (status: PlanningJobStatus) => {
    const newStatuses = filters.statuses.includes(status)
      ? filters.statuses.filter((s) => s !== status)
      : [...filters.statuses, status];
    onFiltersChange({ ...filters, statuses: newStatuses });
  };

  const handleClearFilters = () => {
    onFiltersChange({
      date: format(new Date(), "yyyy-MM-dd"),
      cleanerIds: [],
      locationId: null,
      statuses: [],
    });
  };

  const hasActiveFilters =
    filters.cleanerIds.length > 0 ||
    filters.locationId !== null ||
    filters.statuses.length > 0;

  if (loading) {
    return (
      <div className="space-y-4 p-4 bg-card rounded-xl border border-border">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-5 p-5 bg-card rounded-xl border border-border shadow-card">
      <h3 className="text-sm font-medium text-foreground">Filters</h3>

      {/* Date Picker */}
      <div className="space-y-2">
        <Label className="text-xs text-muted-foreground">Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !filters.date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {filters.date ? format(new Date(filters.date), "PPP") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-popover" align="start">
            <Calendar
              mode="single"
              selected={filters.date ? new Date(filters.date) : undefined}
              onSelect={handleDateChange}
              initialFocus
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Cleaner Select */}
      <div className="space-y-2">
        <Label className="text-xs text-muted-foreground">Cleaner</Label>
        <Select
          value={filters.cleanerIds.length === 1 ? filters.cleanerIds[0].toString() : "all"}
          onValueChange={handleCleanerChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All cleaners" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            <SelectItem value="all">All cleaners</SelectItem>
            {cleaners.map((cleaner) => (
              <SelectItem key={cleaner.id} value={cleaner.id.toString()}>
                {cleaner.full_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location Select */}
      <div className="space-y-2">
        <Label className="text-xs text-muted-foreground">Location</Label>
        <Select
          value={filters.locationId?.toString() || "all"}
          onValueChange={handleLocationChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All locations" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            <SelectItem value="all">All locations</SelectItem>
            {locations.map((location) => (
              <SelectItem key={location.id} value={location.id.toString()}>
                {location.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Status Filter */}
      <div className="space-y-3">
        <Label className="text-xs text-muted-foreground">Status</Label>
        <div className="space-y-2">
          {STATUS_OPTIONS.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={`status-${option.value}`}
                checked={filters.statuses.includes(option.value)}
                onCheckedChange={() => handleStatusToggle(option.value)}
              />
              <label
                htmlFor={`status-${option.value}`}
                className="text-sm text-foreground cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClearFilters}
          className="w-full text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4 mr-1" />
          Clear filters
        </Button>
      )}
    </div>
  );
}
