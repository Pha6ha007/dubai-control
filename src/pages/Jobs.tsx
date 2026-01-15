import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatusPill, JobStatus } from "@/components/ui/status-pill";
import { sampleJobs } from "@/data/sampleData";
import { Plus, FileCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Filter = "today" | "upcoming" | "completed";

export default function Jobs() {
  const [activeFilter, setActiveFilter] = useState<Filter>("today");

  const filteredJobs = sampleJobs.filter((job) => {
    if (activeFilter === "today") return job.date === "2024-01-15";
    if (activeFilter === "upcoming") return job.date > "2024-01-15";
    if (activeFilter === "completed") return job.status === "completed";
    return true;
  });

  const filters: { key: Filter; label: string }[] = [
    { key: "today", label: "Today" },
    { key: "upcoming", label: "Upcoming" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <div className="p-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">
            Jobs
          </h1>
          <p className="mt-1 text-muted-foreground">
            Manage and track all cleaning jobs
          </p>
        </div>
        <Link to="/create-job">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft">
            <Plus className="w-4 h-4 mr-2" />
            Create Job
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150",
              activeFilter === filter.key
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Jobs Table */}
      <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Location
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Cleaner
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Scheduled Time
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Proof
                </th>
                <th className="text-right px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredJobs.map((job) => (
                <tr
                  key={job.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-foreground">{job.location}</p>
                      <p className="text-sm text-muted-foreground">{job.address}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-foreground">{job.cleaner}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-foreground">
                      {job.startTime} - {job.endTime}
                    </p>
                    <p className="text-sm text-muted-foreground">{job.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <StatusPill status={job.status} />
                  </td>
                  <td className="px-6 py-4">
                    {job.hasProof ? (
                      <span className="inline-flex items-center gap-1.5 text-sm text-status-completed">
                        <FileCheck className="w-4 h-4" />
                        Available
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to={`/jobs/${job.id}`}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium"
                    >
                      View
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredJobs.length === 0 && (
          <div className="px-6 py-12 text-center">
            <p className="text-muted-foreground">No jobs found for this filter</p>
          </div>
        )}
      </div>
    </div>
  );
}
