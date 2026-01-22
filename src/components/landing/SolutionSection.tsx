import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Check in on site",
    description: "GPS verification confirms presence",
  },
  {
    number: "02",
    title: "Before & after photos",
    description: "Timestamped visual evidence",
  },
  {
    number: "03",
    title: "Complete checklist",
    description: "Every task accounted for",
  },
  {
    number: "04",
    title: "PDF report generated",
    description: "One file. Complete proof.",
  },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 md:mb-32"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-6">
            The solution
          </p>
          <h2 className="text-display text-foreground">
            Control, not chaos.
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border/50 -translate-x-3" />
              )}
              
              <div className="relative p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-500">
                <span className="text-6xl font-bold text-muted/50 absolute top-4 right-6">
                  {step.number}
                </span>
                
                <div className="relative z-10 pt-12">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
