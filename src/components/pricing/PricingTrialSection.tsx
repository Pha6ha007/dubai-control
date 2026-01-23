import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PricingTrialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-14 md:py-16 px-6 bg-foreground">
      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-primary-foreground/10" />
      
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-primary-foreground mb-2">
            7-day free trial
          </h3>
          
          <p className="text-primary-foreground/50 text-sm mb-6">
            Full access. No credit card.
          </p>
          
          {/* Limits as pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="px-3 py-1.5 text-xs text-primary-foreground/50 bg-primary-foreground/[0.04] rounded-full border border-primary-foreground/[0.06]">
              2 cleaners
            </span>
            <span className="px-3 py-1.5 text-xs text-primary-foreground/50 bg-primary-foreground/[0.04] rounded-full border border-primary-foreground/[0.06]">
              10 jobs
            </span>
            <span className="px-3 py-1.5 text-xs text-primary-foreground/50 bg-primary-foreground/[0.04] rounded-full border border-primary-foreground/[0.06]">
              Full proof flow
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTrialSection;
