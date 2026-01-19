// Fake API functions for planning - will be replaced with real Django API calls

import {
  PlanningJob,
  CleanerOption,
  LocationOption,
  ChecklistTemplate,
  PlanningFilters,
  CreateJobPayload,
} from "@/types/planning";

// Simulated delay to mimic API latency
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock data
const mockLocations: LocationOption[] = [
  { id: 1, name: "Dubai Marina Tower", address: "Marina Walk, Dubai Marina" },
  { id: 2, name: "Business Bay Office", address: "Bay Square, Business Bay" },
  { id: 3, name: "Downtown Residence", address: "Boulevard Point, Downtown Dubai" },
  { id: 4, name: "JBR Apartment", address: "Jumeirah Beach Residence" },
  { id: 5, name: "DIFC Office", address: "Gate Building, DIFC" },
];

const mockCleaners: CleanerOption[] = [
  { id: 1, full_name: "Ahmed Hassan" },
  { id: 2, full_name: "Maria Santos" },
  { id: 3, full_name: "Fatima Al-Rashid" },
  { id: 4, full_name: "John Okonkwo" },
];

const mockTemplates: ChecklistTemplate[] = [
  { id: 1, name: "Standard Cleaning", items_count: 6 },
  { id: 2, name: "Deep Cleaning", items_count: 12 },
  { id: 3, name: "Office Cleaning", items_count: 8 },
];

// Generate mock jobs for today and nearby dates
const generateMockJobs = (): PlanningJob[] => {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  return [
    {
      id: 1001,
      scheduled_date: today,
      scheduled_start_time: "09:00:00",
      scheduled_end_time: "12:00:00",
      location: { id: 1, name: "Dubai Marina Tower", address: "Marina Walk, Dubai Marina" },
      cleaner: { id: 1, full_name: "Ahmed Hassan" },
      status: "completed",
      has_before_photo: true,
      has_after_photo: true,
      checklist_required_done: true,
    },
    {
      id: 1002,
      scheduled_date: today,
      scheduled_start_time: "13:00:00",
      scheduled_end_time: "16:00:00",
      location: { id: 2, name: "Business Bay Office", address: "Bay Square, Business Bay" },
      cleaner: { id: 2, full_name: "Maria Santos" },
      status: "in_progress",
      has_before_photo: true,
      has_after_photo: false,
      checklist_required_done: false,
    },
    {
      id: 1003,
      scheduled_date: today,
      scheduled_start_time: "10:00:00",
      scheduled_end_time: "13:00:00",
      location: { id: 3, name: "Downtown Residence", address: "Boulevard Point, Downtown Dubai" },
      cleaner: { id: 3, full_name: "Fatima Al-Rashid" },
      status: "scheduled",
      has_before_photo: false,
      has_after_photo: false,
      checklist_required_done: false,
    },
    {
      id: 1004,
      scheduled_date: today,
      scheduled_start_time: "14:00:00",
      scheduled_end_time: "17:00:00",
      location: { id: 4, name: "JBR Apartment", address: "Jumeirah Beach Residence" },
      cleaner: { id: 4, full_name: "John Okonkwo" },
      status: "scheduled",
      has_before_photo: false,
      has_after_photo: false,
      checklist_required_done: false,
    },
    {
      id: 1005,
      scheduled_date: tomorrow,
      scheduled_start_time: "08:00:00",
      scheduled_end_time: "11:00:00",
      location: { id: 5, name: "DIFC Office", address: "Gate Building, DIFC" },
      cleaner: { id: 1, full_name: "Ahmed Hassan" },
      status: "scheduled",
      has_before_photo: false,
      has_after_photo: false,
      checklist_required_done: false,
    },
    {
      id: 1006,
      scheduled_date: yesterday,
      scheduled_start_time: "09:00:00",
      scheduled_end_time: "12:00:00",
      location: { id: 1, name: "Dubai Marina Tower", address: "Marina Walk, Dubai Marina" },
      cleaner: { id: 2, full_name: "Maria Santos" },
      status: "completed",
      has_before_photo: true,
      has_after_photo: true,
      checklist_required_done: true,
    },
  ];
};

let mockJobsStore = generateMockJobs();
let nextJobId = 2000;

// API Functions

export async function fetchPlanningJobs(filters: PlanningFilters): Promise<PlanningJob[]> {
  await delay(600);

  let jobs = [...mockJobsStore];

  // Filter by date
  if (filters.date) {
    jobs = jobs.filter((job) => job.scheduled_date === filters.date);
  }

  // Filter by cleaners
  if (filters.cleanerIds.length > 0) {
    jobs = jobs.filter((job) => filters.cleanerIds.includes(job.cleaner.id));
  }

  // Filter by location
  if (filters.locationId) {
    jobs = jobs.filter((job) => job.location.id === filters.locationId);
  }

  // Filter by statuses
  if (filters.statuses.length > 0) {
    jobs = jobs.filter((job) => filters.statuses.includes(job.status));
  }

  // Sort by start time
  jobs.sort((a, b) => {
    const timeA = a.scheduled_start_time || "00:00:00";
    const timeB = b.scheduled_start_time || "00:00:00";
    return timeA.localeCompare(timeB);
  });

  return jobs;
}

export async function fetchCleaners(): Promise<CleanerOption[]> {
  await delay(300);
  return mockCleaners;
}

export async function fetchLocations(): Promise<LocationOption[]> {
  await delay(300);
  return mockLocations;
}

export async function fetchChecklistTemplates(): Promise<ChecklistTemplate[]> {
  await delay(300);
  return mockTemplates;
}

export async function createJob(payload: CreateJobPayload): Promise<PlanningJob> {
  await delay(800);

  const location = mockLocations.find((l) => l.id === payload.location_id);
  const cleaner = mockCleaners.find((c) => c.id === payload.cleaner_id);

  if (!location || !cleaner) {
    throw new Error("Invalid location or cleaner");
  }

  const newJob: PlanningJob = {
    id: nextJobId++,
    scheduled_date: payload.scheduled_date,
    scheduled_start_time: payload.scheduled_start_time,
    scheduled_end_time: payload.scheduled_end_time,
    location: {
      id: location.id,
      name: location.name,
      address: location.address || null,
    },
    cleaner: {
      id: cleaner.id,
      full_name: cleaner.full_name,
    },
    status: "scheduled",
    has_before_photo: false,
    has_after_photo: false,
    checklist_required_done: false,
  };

  mockJobsStore.push(newJob);
  return newJob;
}
