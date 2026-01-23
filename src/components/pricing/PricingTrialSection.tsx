import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PricingTrialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 bg-background">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            7-day free trial
          </h2>
          
          <p className="text-muted-foreground/70 text-sm mb-5">
            Full access. No credit card.
          </p>
          
          {/* Limits as subtle pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="px-3 py-1 text-xs text-muted-foreground/50 bg-muted/30 rounded-full">
              2 cleaners
            </span>
            <span className="text-muted-foreground/20">·</span>
            <span className="px-3 py-1 text-xs text-muted-foreground/50 bg-muted/30 rounded-full">
              10 jobs
            </span>
            <span className="text-muted-foreground/20">·</span>
            <span className="px-3 py-1 text-xs text-muted-foreground/50 bg-muted/30 rounded-full">
              Full proof flow
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTrialSection;
