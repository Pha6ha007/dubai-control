import { MapPin, Camera, CheckSquare, FileText } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MapPin,
    title: "Check in on site",
    description: "Cleaner arrives and checks in with GPS verification",
  },
  {
    number: "2",
    icon: Camera,
    title: "Before & after photos",
    description: "Visual proof captured with timestamps",
  },
  {
    number: "3",
    icon: CheckSquare,
    title: "Complete checklist",
    description: "Every task marked as done",
  },
  {
    number: "4",
    icon: FileText,
    title: "PDF report generated",
    description: "Manager receives complete proof of work",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
          How it works
        </p>
        
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-16">
          Simple, clear process
        </h2>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-12 bottom-12 w-px bg-border hidden md:block" />
          
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-start gap-6 md:gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
