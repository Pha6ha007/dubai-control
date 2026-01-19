import { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { CleanerOption, LocationOption, ChecklistTemplate, CreateJobPayload, PlanningJob } from "@/types/planning";
import { fetchCleaners, fetchLocations, fetchChecklistTemplates, createJob } from "@/api/planning";

interface CreateJobDrawerProps {
  open: boolean;
  onClose: () => void;
  defaultDate: string;
  onJobCreated: (job: PlanningJob) => void;
}

export function CreateJobDrawer({ open, onClose, defaultDate, onJobCreated }: CreateJobDrawerProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  const [cleaners, setCleaners] = useState<CleanerOption[]>([]);
  const [locations, setLocations] = useState<LocationOption[]>([]);
  const [templates, setTemplates] = useState<ChecklistTemplate[]>([]);

  const [formData, setFormData] = useState({
    date: defaultDate,
    startTime: "09:00",
    endTime: "12:00",
    locationId: "",
    cleanerId: "",
    templateId: "",
    notes: "",
  });

  useEffect(() => {
    if (open) {
      setFormData((prev) => ({ ...prev, date: defaultDate }));
      loadOptions();
    }
  }, [open, defaultDate]);

  async function loadOptions() {
    setLoading(true);
    const [cleanersData, locationsData, templatesData] = await Promise.all([
      fetchCleaners(),
      fetchLocations(),
      fetchChecklistTemplates(),
    ]);
    setCleaners(cleanersData);
    setLocations(locationsData);
    setTemplates(templatesData);
    setLoading(false);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.locationId || !formData.cleanerId) {
      toast({
        title: "Missing fields",
        description: "Please select a location and cleaner.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const payload: CreateJobPayload = {
        scheduled_date: formData.date,
        scheduled_start_time: formData.startTime + ":00",
        scheduled_end_time: formData.endTime + ":00",
        location_id: parseInt(formData.locationId, 10),
        cleaner_id: parseInt(formData.cleanerId, 10),
        checklist_template_id: formData.templateId ? parseInt(formData.templateId, 10) : undefined,
        manager_notes: formData.notes || undefined,
      };

      const newJob = await createJob(payload);

      toast({
        title: "Job created",
        description: `Job scheduled for ${format(new Date(newJob.scheduled_date), "PPP")}`,
      });

      onJobCreated(newJob);
      onClose();

      // Reset form
      setFormData({
        date: defaultDate,
        startTime: "09:00",
        endTime: "12:00",
        locationId: "",
        cleanerId: "",
        templateId: "",
        notes: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create job. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setFormData((prev) => ({ ...prev, date: format(date, "yyyy-MM-dd") }));
    }
  };

  return (
    <Sheet open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle>Create Job</SheetTitle>
        </SheetHeader>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Date */}
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? format(new Date(formData.date), "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-popover" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date ? new Date(formData.date) : undefined}
                    onSelect={handleDateChange}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Time</Label>
                <Input
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => setFormData((prev) => ({ ...prev, startTime: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>End Time</Label>
                <Input
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => setFormData((prev) => ({ ...prev, endTime: e.target.value }))}
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label>Location</Label>
              <Select
                value={formData.locationId}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, locationId: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  {locations.map((location) => (
                    <SelectItem key={location.id} value={location.id.toString()}>
                      {location.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Cleaner */}
            <div className="space-y-2">
              <Label>Cleaner</Label>
              <Select
                value={formData.cleanerId}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, cleanerId: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select cleaner" />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  {cleaners.map((cleaner) => (
                    <SelectItem key={cleaner.id} value={cleaner.id.toString()}>
                      {cleaner.full_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Checklist Template */}
            <div className="space-y-2">
              <Label>Checklist Template</Label>
              <Select
                value={formData.templateId}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, templateId: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select template (optional)" />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  {templates.map((template) => (
                    <SelectItem key={template.id} value={template.id.toString()}>
                      {template.name} ({template.items_count} items)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                The template determines which checklist items the cleaner must complete.
              </p>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label>Manager Notes (optional)</Label>
              <Textarea
                value={formData.notes}
                onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                placeholder="Any special instructions for this job..."
                rows={3}
              />
            </div>

            {/* Submit */}
            <div className="pt-4 flex gap-3">
              <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="flex-1" disabled={submitting}>
                {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Create Job
              </Button>
            </div>
          </form>
        )}
      </SheetContent>
    </Sheet>
  );
}
