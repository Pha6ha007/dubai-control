import { Loader2 } from "lucide-react";
import { JobStatusBadge } from "./JobStatusBadge";
import { ProofSummary } from "./ProofSummary";
import { PlanningJob } from "@/types/planning";
import { Skeleton } from "@/components/ui/skeleton";

interface JobsTableProps {
  jobs: PlanningJob[];
  loading: boolean;
  onJobClick: (job: PlanningJob) => void;
}

function formatTime(time: string | null): string {
  if (!time) return "—";
  return time.slice(0, 5); // "HH:MM:SS" -> "HH:MM"
}

export function JobsTable({ jobs, loading, onJobClick }: JobsTableProps) {
  if (loading) {
    return (
      <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="p-4 space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-12 w-24" />
              <Skeleton className="h-12 flex-1" />
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-24" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="bg-card rounded-xl border border-border shadow-card p-12 text-center">
        <p className="text-muted-foreground">No jobs found for the selected date and filters.</p>
        <p className="text-sm text-muted-foreground mt-1">
          Try adjusting your filters or create a new job.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Time
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Location
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Cleaner
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Proof
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {jobs.map((job) => (
              <tr
                key={job.id}
                className="hover:bg-muted/30 transition-colors cursor-pointer"
                onClick={() => onJobClick(job)}
              >
                <td className="px-4 py-4">
                  <p className="text-foreground font-medium">
                    {formatTime(job.scheduled_start_time)} – {formatTime(job.scheduled_end_time)}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <div>
                    <p className="text-foreground font-medium">{job.location.name}</p>
                    {job.location.address && (
                      <p className="text-sm text-muted-foreground">{job.location.address}</p>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="text-foreground">{job.cleaner.full_name}</p>
                </td>
                <td className="px-4 py-4">
                  <JobStatusBadge status={job.status} />
                </td>
                <td className="px-4 py-4">
                  <ProofSummary job={job} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
