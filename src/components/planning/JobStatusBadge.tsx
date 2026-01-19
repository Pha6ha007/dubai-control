import { cn } from "@/lib/utils";
import { PlanningJobStatus } from "@/types/planning";

interface JobStatusBadgeProps {
  status: PlanningJobStatus;
  className?: string;
}

const statusConfig: Record<PlanningJobStatus, { label: string; className: string }> = {
  scheduled: {
    label: "Scheduled",
    className: "bg-muted text-muted-foreground",
  },
  in_progress: {
    label: "In Progress",
    className: "bg-primary/10 text-primary",
  },
  completed: {
    label: "Completed",
    className: "bg-status-completed-bg text-status-completed",
  },
};

export function JobStatusBadge({ status, className }: JobStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
