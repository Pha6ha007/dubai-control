import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PricingTrialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-40 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-6">
            Trial
          </p>
          <h2 className="text-display text-foreground mb-12">
            Try CleanProof before committing.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-lg text-muted-foreground">
            <span>7 days</span>
            <span>Up to 2 cleaners</span>
            <span>Up to 10 jobs</span>
            <span>Full proof flow</span>
            <span>No credit card</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTrialSection;
