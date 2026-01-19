// Planning-specific types aligned with Django REST API models

export type PlanningJobStatus = "scheduled" | "in_progress" | "completed";

export interface PlanningJob {
  id: number;
  scheduled_date: string;              // "YYYY-MM-DD"
  scheduled_start_time: string | null; // "HH:MM:SS"
  scheduled_end_time: string | null;
  location: {
    id: number;
    name: string;
    address: string | null;
  };
  cleaner: {
    id: number;
    full_name: string;
  };
  status: PlanningJobStatus;
  has_before_photo?: boolean;
  has_after_photo?: boolean;
  checklist_required_done?: boolean;
}

export interface CleanerOption {
  id: number;
  full_name: string;
}

export interface LocationOption {
  id: number;
  name: string;
  address?: string;
}

export interface ChecklistTemplate {
  id: number;
  name: string;
  items_count: number;
}

export interface PlanningFilters {
  date: string;
  cleanerIds: number[];
  locationId: number | null;
  statuses: PlanningJobStatus[];
}

export interface CreateJobPayload {
  scheduled_date: string;
  scheduled_start_time: string;
  scheduled_end_time: string;
  location_id: number;
  cleaner_id: number;
  checklist_template_id?: number;
  manager_notes?: string;
}
