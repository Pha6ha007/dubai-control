import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PricingTrialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-10 md:py-12 px-6 bg-foreground border-t border-primary-foreground/[0.04]">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-primary-foreground mb-1.5">
            7-day free trial
          </h3>
          
          <p className="text-primary-foreground/45 text-sm mb-4">
            Full access. No credit card.
          </p>
          
          {/* Limits as inline subtle items */}
          <div className="flex items-center justify-center gap-3 text-xs text-primary-foreground/35">
            <span>2 cleaners</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <span>10 jobs</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <span>Full proof flow</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTrialSection;
