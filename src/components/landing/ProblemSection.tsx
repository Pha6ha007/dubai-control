import { AlertCircle, MessageSquareWarning, ImageOff, FileX } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    text: "No proof cleaners were on site",
  },
  {
    icon: MessageSquareWarning,
    text: "Disputes with clients after jobs",
  },
  {
    icon: ImageOff,
    text: "WhatsApp photos ≠ evidence",
  },
  {
    icon: FileX,
    text: "No single report of completed work",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-12">
          The problem
        </p>
        
        <div className="space-y-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex items-start gap-5 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center">
                <problem.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-xl md:text-2xl text-foreground font-medium pt-1.5">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
