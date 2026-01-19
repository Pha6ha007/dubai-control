import { Camera, CheckSquare, ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlanningJob } from "@/types/planning";

interface ProofSummaryProps {
  job: PlanningJob;
  className?: string;
}

export function ProofSummary({ job, className }: ProofSummaryProps) {
  const hasBeforePhoto = job.has_before_photo;
  const hasAfterPhoto = job.has_after_photo;
  const checklistDone = job.checklist_required_done;

  // If job hasn't started, show dash
  if (job.status === "scheduled" && !hasBeforePhoto && !hasAfterPhoto && !checklistDone) {
    return <span className="text-sm text-muted-foreground">—</span>;
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Before Photo */}
      <div
        className={cn(
          "flex items-center gap-1 text-xs",
          hasBeforePhoto ? "text-status-completed" : "text-muted-foreground"
        )}
        title={hasBeforePhoto ? "Before photo captured" : "No before photo"}
      >
        {hasBeforePhoto ? (
          <Camera className="w-3.5 h-3.5" />
        ) : (
          <ImageOff className="w-3.5 h-3.5" />
        )}
        <span className="hidden sm:inline">Before</span>
      </div>

      {/* After Photo */}
      <div
        className={cn(
          "flex items-center gap-1 text-xs",
          hasAfterPhoto ? "text-status-completed" : "text-muted-foreground"
        )}
        title={hasAfterPhoto ? "After photo captured" : "No after photo"}
      >
        {hasAfterPhoto ? (
          <Camera className="w-3.5 h-3.5" />
        ) : (
          <ImageOff className="w-3.5 h-3.5" />
        )}
        <span className="hidden sm:inline">After</span>
      </div>

      {/* Checklist */}
      <div
        className={cn(
          "flex items-center gap-1 text-xs",
          checklistDone ? "text-status-completed" : "text-muted-foreground"
        )}
        title={checklistDone ? "Checklist completed" : "Checklist incomplete"}
      >
        <CheckSquare className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">List</span>
      </div>
    </div>
  );
}
