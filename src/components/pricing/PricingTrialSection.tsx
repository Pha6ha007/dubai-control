import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PricingTrialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-24 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            7-day free trial
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Full access. No credit card.
          </p>
          
          <p className="text-sm text-muted-foreground/60">
            2 cleaners · 10 jobs · Full proof flow
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTrialSection;
