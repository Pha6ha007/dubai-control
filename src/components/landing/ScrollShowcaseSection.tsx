import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, MapPin, Camera, Clock, FileText, ChevronRight, MoreHorizontal } from "lucide-react";

const showcaseSteps = [
  {
    id: "dashboard",
    title: "Manager Web Dashboard",
    items: [
      "Plan and track all jobs in one place",
      "See job status in real time",
      "Open any job and view full proof",
    ],
  },
  {
    id: "mobile",
    title: "Cleaner Mobile App",
    items: [
      "Cleaners follow a strict flow",
      "No steps can be skipped",
      "Proof is captured on site",
    ],
  },
  {
    id: "pdf",
    title: "PDF Report",
    items: [
      "One PDF. All proof.",
      "GPS coordinates, photos, checklist, timestamps",
      "Ready to send to clients",
    ],
  },
];

// Desktop Dashboard Mockup
const DashboardMockup = () => (
  <div className="relative w-full max-w-2xl">
    {/* Browser Frame */}
    <div className="bg-[hsl(222,47%,15%)] rounded-xl overflow-hidden shadow-2xl border border-white/10">
      {/* Browser Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(222,47%,12%)] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-[hsl(222,47%,18%)] rounded-md px-3 py-1.5 text-xs text-white/40 flex items-center gap-2">
            <span className="text-green-400">🔒</span>
            app.cleanproof.ae/jobs
          </div>
        </div>
      </div>
      
      {/* Dashboard Content */}
      <div className="p-4 bg-[hsl(210,20%,98%)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-foreground font-semibold text-sm">Today's Jobs</h3>
            <p className="text-muted-foreground text-xs">12 jobs scheduled</p>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1.5 bg-primary text-primary-foreground text-xs rounded-md font-medium">+ New Job</div>
          </div>
        </div>
        
        {/* Jobs Table */}
        <div className="bg-white rounded-lg border border-border overflow-hidden">
          <div className="grid grid-cols-5 gap-2 px-3 py-2 bg-muted/50 text-xs font-medium text-muted-foreground border-b">
            <span>Location</span>
            <span>Cleaner</span>
            <span>Time</span>
            <span>Status</span>
            <span>Proof</span>
          </div>
          
          {[
            { location: "Marina Tower #401", cleaner: "Ahmed M.", time: "09:00", status: "completed", proof: true },
            { location: "JBR Residence", cleaner: "Sarah K.", time: "10:30", status: "in-progress", proof: false },
            { location: "Downtown Office", cleaner: "Omar H.", time: "12:00", status: "scheduled", proof: false },
          ].map((job, i) => (
            <div key={i} className="grid grid-cols-5 gap-2 px-3 py-2.5 text-xs border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
              <span className="text-foreground font-medium truncate">{job.location}</span>
              <span className="text-muted-foreground">{job.cleaner}</span>
              <span className="text-muted-foreground">{job.time}</span>
              <span>
                <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ${
                  job.status === 'completed' ? 'bg-green-100 text-green-700' :
                  job.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {job.status === 'completed' ? 'Completed' : job.status === 'in-progress' ? 'In Progress' : 'Scheduled'}
                </span>
              </span>
              <span>
                {job.proof ? (
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <Check className="w-3 h-3" /> PDF
                  </span>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </span>
            </div>
          ))}
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            { label: "Completed", value: "8", color: "text-green-600" },
            { label: "In Progress", value: "2", color: "text-blue-600" },
            { label: "Pending", value: "2", color: "text-muted-foreground" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-lg border border-border p-3 text-center">
              <p className={`text-lg font-semibold ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Mobile App Mockup
const MobileMockup = () => (
  <div className="relative mx-auto" style={{ width: 280 }}>
    {/* iPhone Frame */}
    <div className="relative bg-[hsl(222,47%,8%)] rounded-[3rem] p-3 shadow-2xl">
      {/* Dynamic Island */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10" />
      
      {/* Screen */}
      <div className="bg-[hsl(210,20%,98%)] rounded-[2.25rem] overflow-hidden relative" style={{ height: 520 }}>
        {/* Status Bar */}
        <div className="flex items-center justify-between px-6 pt-14 pb-2">
          <span className="text-xs font-medium text-foreground">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 flex gap-px">
              <div className="w-0.5 h-full bg-foreground rounded-sm" />
              <div className="w-0.5 h-full bg-foreground rounded-sm" />
              <div className="w-0.5 h-full bg-foreground rounded-sm" />
              <div className="w-0.5 h-full bg-foreground/30 rounded-sm" />
            </div>
            <div className="w-6 h-3 border border-foreground rounded-sm relative">
              <div className="absolute inset-0.5 bg-foreground rounded-sm" style={{ width: '70%' }} />
            </div>
          </div>
        </div>
        
        {/* App Header */}
        <div className="px-5 py-3 border-b border-border/50">
          <h4 className="text-base font-semibold text-foreground">Today's Jobs</h4>
          <p className="text-xs text-muted-foreground">3 jobs remaining</p>
        </div>
        
        {/* Job Card */}
        <div className="p-4 space-y-3">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-border">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h5 className="text-sm font-semibold text-foreground">Marina Tower #401</h5>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" /> Dubai Marina
                </p>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-medium rounded-full">
                In Progress
              </span>
            </div>
            
            {/* Progress Steps */}
            <div className="space-y-2">
              {[
                { label: "Check in", done: true },
                { label: "Before photos", done: true },
                { label: "Checklist", done: false, active: true },
                { label: "After photos", done: false },
                { label: "Check out", done: false },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    step.done ? 'bg-green-500 text-white' : 
                    step.active ? 'bg-primary text-white' : 
                    'bg-muted text-muted-foreground'
                  }`}>
                    {step.done ? <Check className="w-3 h-3" /> : i + 1}
                  </div>
                  <span className={`text-xs ${step.done ? 'text-green-600' : step.active ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                    {step.label}
                  </span>
                  {step.active && <ChevronRight className="w-3 h-3 text-primary ml-auto" />}
                </div>
              ))}
            </div>
          </div>
          
          {/* Other Jobs */}
          <div className="bg-white/50 rounded-xl p-4 border border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-sm font-medium text-foreground/70">JBR Residence</h5>
                <p className="text-xs text-muted-foreground">12:00 PM</p>
              </div>
              <span className="px-2 py-1 bg-muted text-muted-foreground text-[10px] rounded-full">
                Upcoming
              </span>
            </div>
          </div>
        </div>
        
        {/* Bottom Nav */}
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-3 bg-white border-t border-border/50">
          <div className="flex justify-around">
            <div className="text-center">
              <div className="w-6 h-6 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              <span className="text-[10px] text-primary font-medium">Jobs</span>
            </div>
            <div className="text-center">
              <div className="w-6 h-6 mx-auto rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-[10px] text-muted-foreground">History</span>
            </div>
            <div className="text-center">
              <div className="w-6 h-6 mx-auto rounded-lg flex items-center justify-center">
                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-[10px] text-muted-foreground">More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// PDF Report Mockup
const PDFMockup = () => (
  <div className="relative w-full max-w-md mx-auto">
    {/* PDF Shadow/Depth */}
    <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-1 scale-[0.98] blur-xl" />
    
    {/* PDF Document */}
    <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden border border-border">
      {/* PDF Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-semibold text-sm">Job Completion Report</h4>
            <p className="text-white/70 text-xs">CleanProof Verified</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <Check className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      
      {/* PDF Content */}
      <div className="p-6 space-y-4">
        {/* Job Info */}
        <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Location</p>
            <p className="text-sm font-medium text-foreground">Marina Tower #401</p>
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Date</p>
            <p className="text-sm font-medium text-foreground">Jan 22, 2025</p>
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Cleaner</p>
            <p className="text-sm font-medium text-foreground">Ahmed M.</p>
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Duration</p>
            <p className="text-sm font-medium text-foreground">2h 15m</p>
          </div>
        </div>
        
        {/* GPS Verification */}
        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
          <MapPin className="w-5 h-5 text-green-600" />
          <div>
            <p className="text-xs font-medium text-green-800">GPS Verified</p>
            <p className="text-[10px] text-green-600">25.0657° N, 55.1713° E</p>
          </div>
        </div>
        
        {/* Times */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-[10px] text-muted-foreground">Check-in</p>
            <p className="text-sm font-semibold text-foreground">09:02 AM</p>
          </div>
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-[10px] text-muted-foreground">Check-out</p>
            <p className="text-sm font-semibold text-foreground">11:17 AM</p>
          </div>
        </div>
        
        {/* Photo Grid */}
        <div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Photos (6)</p>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-md flex items-center justify-center">
                <Camera className="w-4 h-4 text-muted-foreground/50" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Checklist Summary */}
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <span className="text-xs text-muted-foreground">Checklist completed</span>
          <span className="text-sm font-semibold text-green-600">12/12 items</span>
        </div>
      </div>
      
      {/* PDF Footer */}
      <div className="px-6 py-3 bg-muted/30 border-t border-border flex items-center justify-between">
        <span className="text-[10px] text-muted-foreground">Generated by CleanProof</span>
        <span className="text-[10px] text-muted-foreground">Page 1 of 2</span>
      </div>
    </div>
  </div>
);

const ScrollShowcaseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate which step is active based on scroll progress
  // Divide into 3 equal sections for 3 steps
  const step1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.33, 0.4], [1, 1, 1, 0]);
  const step2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.66, 0.73], [0, 1, 1, 0]);
  const step3Opacity = useTransform(scrollYProgress, [0.63, 0.73, 1], [0, 1, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-foreground" 
      style={{ height: "200vh" }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="relative h-[350px] lg:h-[400px]">
              {showcaseSteps.map((step, index) => {
                const opacity = index === 0 ? step1Opacity : index === 1 ? step2Opacity : step3Opacity;
                
                return (
                  <motion.div
                    key={step.id}
                    style={{ opacity }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    {/* Section label - light gray, uppercase */}
                    <p className="text-slate-400 text-sm uppercase tracking-[0.2em] mb-6 font-medium">
                      {step.title}
                    </p>
                    
                    {/* Main content items - pure white */}
                    <div className="space-y-5">
                      {step.items.map((item, i) => (
                        <p
                          key={i}
                          className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-snug"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Right: Visual Content - Sticky */}
            <div className="relative h-[450px] lg:h-[550px] flex items-center justify-center">
              {/* Dashboard */}
              <motion.div
                style={{ opacity: step1Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <DashboardMockup />
              </motion.div>
              
              {/* Mobile */}
              <motion.div
                style={{ opacity: step2Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <MobileMockup />
              </motion.div>
              
              {/* PDF */}
              <motion.div
                style={{ opacity: step3Opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <PDFMockup />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollShowcaseSection;
