import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/status-pill";
import { sampleJobs } from "@/data/sampleData";
import {
  ArrowLeft,
  FileText,
  Download,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  Circle,
  Camera,
  User,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStep {
  id: string;
  label: string;
  time?: string;
  completed: boolean;
  icon: React.ElementType;
}

export default function JobDetails() {
  const { id } = useParams();
  const job = sampleJobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="p-8">
        <p className="text-muted-foreground">Job not found</p>
        <Link to="/jobs" className="text-primary hover:text-primary/80 mt-2 inline-block">
          ← Back to Jobs
        </Link>
      </div>
    );
  }

  const timelineSteps: TimelineStep[] = [
    {
      id: "scheduled",
      label: "Scheduled",
      time: `${job.date} at ${job.startTime}`,
      completed: true,
      icon: Calendar,
    },
    {
      id: "checkin",
      label: "Check-in",
      time: job.checkInTime,
      completed: !!job.checkInTime,
      icon: MapPin,
    },
    {
      id: "before",
      label: "Before Photo",
      completed: !!job.beforePhotos?.length,
      icon: Camera,
    },
    {
      id: "checklist",
      label: "Checklist",
      completed: job.checklist?.every((item) => item.completed) ?? false,
      icon: CheckCircle2,
    },
    {
      id: "after",
      label: "After Photo",
      completed: !!job.afterPhotos?.length,
      icon: Camera,
    },
    {
      id: "checkout",
      label: "Check-out",
      time: job.checkOutTime,
      completed: !!job.checkOutTime,
      icon: MapPin,
    },
  ];

  return (
    <div className="p-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/jobs"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Jobs
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-semibold text-foreground tracking-tight">
                {job.location}
              </h1>
              <StatusPill status={job.status} />
            </div>
            <p className="text-muted-foreground">{job.address}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-border">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="border-border">
              <Mail className="w-4 h-4 mr-2" />
              Email PDF
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft">
              <FileText className="w-4 h-4 mr-2" />
              Generate PDF Report
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Timeline */}
          <div className="bg-card rounded-xl border border-border shadow-card p-6">
            <h2 className="font-semibold text-foreground mb-6">Job Timeline</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-8 bottom-8 w-px bg-border" />
              
              <div className="space-y-6">
                {timelineSteps.map((step, index) => (
                  <div key={step.id} className="relative flex items-start gap-4">
                    <div
                      className={cn(
                        "relative z-10 w-8 h-8 rounded-full flex items-center justify-center",
                        step.completed
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      <step.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 pt-1">
                      <p
                        className={cn(
                          "font-medium",
                          step.completed ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {step.label}
                      </p>
                      {step.time && (
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {step.time}
                        </p>
                      )}
                    </div>
                    {step.completed && (
                      <CheckCircle2 className="w-5 h-5 text-status-completed mt-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Before / After Photos */}
          {(job.beforePhotos?.length || job.afterPhotos?.length) && (
            <div className="bg-card rounded-xl border border-border shadow-card p-6">
              <h2 className="font-semibold text-foreground mb-6">Photo Documentation</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">Before</p>
                  <div className="grid grid-cols-2 gap-3">
                    {job.beforePhotos?.map((photo, i) => (
                      <div
                        key={i}
                        className="aspect-video bg-muted rounded-lg border border-border flex items-center justify-center"
                      >
                        <Camera className="w-8 h-8 text-muted-foreground" />
                      </div>
                    ))}
                    {!job.beforePhotos?.length && (
                      <p className="text-sm text-muted-foreground col-span-2">No photos</p>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">After</p>
                  <div className="grid grid-cols-2 gap-3">
                    {job.afterPhotos?.map((photo, i) => (
                      <div
                        key={i}
                        className="aspect-video bg-muted rounded-lg border border-border flex items-center justify-center"
                      >
                        <Camera className="w-8 h-8 text-muted-foreground" />
                      </div>
                    ))}
                    {!job.afterPhotos?.length && (
                      <p className="text-sm text-muted-foreground col-span-2">No photos</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Checklist */}
          {job.checklist && (
            <div className="bg-card rounded-xl border border-border shadow-card p-6">
              <h2 className="font-semibold text-foreground mb-6">Cleaning Checklist</h2>
              <div className="space-y-3">
                {job.checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {item.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-status-completed flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                    <span
                      className={cn(
                        "text-sm",
                        item.completed ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {item.item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Job Info */}
          <div className="bg-card rounded-xl border border-border shadow-card p-6">
            <h2 className="font-semibold text-foreground mb-4">Job Details</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Job ID
                </dt>
                <dd className="mt-1 text-sm text-foreground font-mono">{job.id}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Cleaner
                </dt>
                <dd className="mt-1 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{job.cleaner}</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Scheduled Time
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  {job.startTime} - {job.endTime}
                </dd>
              </div>
              {job.hourlyRate && (
                <div>
                  <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Hourly Rate
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">
                    AED {job.hourlyRate}/hr
                  </dd>
                </div>
              )}
              {job.flatRate && (
                <div>
                  <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Flat Rate
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">
                    AED {job.flatRate}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* GPS Data */}
          {(job.checkInGPS || job.checkOutGPS) && (
            <div className="bg-card rounded-xl border border-border shadow-card p-6">
              <h2 className="font-semibold text-foreground mb-4">Location Verification</h2>
              <dl className="space-y-4">
                {job.checkInGPS && (
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Check-in GPS
                    </dt>
                    <dd className="mt-1 text-sm text-foreground font-mono text-xs">
                      {job.checkInGPS}
                    </dd>
                    <dd className="text-xs text-muted-foreground mt-0.5">
                      {job.checkInTime}
                    </dd>
                  </div>
                )}
                {job.checkOutGPS && (
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Check-out GPS
                    </dt>
                    <dd className="mt-1 text-sm text-foreground font-mono text-xs">
                      {job.checkOutGPS}
                    </dd>
                    <dd className="text-xs text-muted-foreground mt-0.5">
                      {job.checkOutTime}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
