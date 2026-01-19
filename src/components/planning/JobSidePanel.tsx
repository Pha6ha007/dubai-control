import { X, MapPin, Clock, User, ArrowRight, Camera, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobStatusBadge } from "./JobStatusBadge";
import { PlanningJob } from "@/types/planning";
import { Link } from "react-router-dom";

interface JobSidePanelProps {
  job: PlanningJob;
  onClose: () => void;
}

function formatTime(time: string | null): string {
  if (!time) return "—";
  return time.slice(0, 5); // "HH:MM:SS" -> "HH:MM"
}

export function JobSidePanel({ job, onClose }: JobSidePanelProps) {
  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-card border-l border-border shadow-xl z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Job Details</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {/* Status */}
        <div>
          <JobStatusBadge status={job.status} />
        </div>

        {/* Location */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide">
            <MapPin className="w-3.5 h-3.5" />
            Location
          </div>
          <p className="text-foreground font-medium">{job.location.name}</p>
          {job.location.address && (
            <p className="text-sm text-muted-foreground">{job.location.address}</p>
          )}
        </div>

        {/* Date & Time */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide">
            <Clock className="w-3.5 h-3.5" />
            Schedule
          </div>
          <p className="text-foreground font-medium">
            {formatTime(job.scheduled_start_time)} – {formatTime(job.scheduled_end_time)}
          </p>
          <p className="text-sm text-muted-foreground">{job.scheduled_date} (GST UTC+4)</p>
        </div>

        {/* Cleaner */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide">
            <User className="w-3.5 h-3.5" />
            Cleaner
          </div>
          <p className="text-foreground font-medium">{job.cleaner.full_name}</p>
        </div>

        {/* Proof Summary */}
        <div className="space-y-3">
          <div className="text-xs text-muted-foreground uppercase tracking-wide">
            Proof of Work
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 px-3 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Camera className="w-4 h-4 text-muted-foreground" />
                Before Photo
              </div>
              <span
                className={`text-sm font-medium ${
                  job.has_before_photo ? "text-status-completed" : "text-muted-foreground"
                }`}
              >
                {job.has_before_photo ? "Captured" : "Pending"}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Camera className="w-4 h-4 text-muted-foreground" />
                After Photo
              </div>
              <span
                className={`text-sm font-medium ${
                  job.has_after_photo ? "text-status-completed" : "text-muted-foreground"
                }`}
              >
                {job.has_after_photo ? "Captured" : "Pending"}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <CheckSquare className="w-4 h-4 text-muted-foreground" />
                Checklist
              </div>
              <span
                className={`text-sm font-medium ${
                  job.checklist_required_done ? "text-status-completed" : "text-muted-foreground"
                }`}
              >
                {job.checklist_required_done ? "Complete" : "Pending"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <Link to={`/jobs/JOB-00${job.id}`}>
          <Button className="w-full" size="lg">
            Open Job Details
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
