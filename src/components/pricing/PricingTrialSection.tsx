import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PricingTrialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-4">
            Trial
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            7 days. Full access. No card.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <span>2 cleaners</span>
            <span className="text-muted-foreground/40">·</span>
            <span>10 jobs</span>
            <span className="text-muted-foreground/40">·</span>
            <span>Full proof flow</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTrialSection;
