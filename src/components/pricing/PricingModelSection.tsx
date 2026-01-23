import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PricingModelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-6">
            How it works
          </p>
          <h2 className="text-display text-foreground mb-12">
            CleanProof pricing is based on team size — not features.
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Every customer gets the same proof flow:
          </p>
          
          <div className="space-y-4 text-lg md:text-xl text-muted-foreground">
            <p>GPS check-in.</p>
            <p>Photos.</p>
            <p>Checklist.</p>
            <p>Verified PDF.</p>
          </div>
          
          <p className="text-xl md:text-2xl text-foreground font-medium pt-8">
            The difference is <span className="text-primary">scale.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingModelSection;
