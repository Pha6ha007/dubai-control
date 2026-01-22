import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProductRealitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 bg-foreground overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-glow opacity-30" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="space-y-8 mb-16"
        >
          <p className="text-primary/60 text-sm uppercase tracking-[0.2em]">
            What this is
          </p>
          
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-statement text-primary-foreground/40"
            >
              CleanProof is not a CRM.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-statement text-primary-foreground/40"
            >
              Not a task manager.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-statement text-primary-foreground/40"
            >
              Not a marketplace.
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <h2 className="text-display text-primary-foreground mb-8">
            It's a proof layer
            <br />
            <span className="text-primary">for cleaning operations.</span>
          </h2>
          
          <p className="text-primary-foreground/50 text-lg max-w-xl mx-auto">
            Built for real operations. Fits your existing workflow. 
            Creates undeniable evidence that work was completed—where, when, and how.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductRealitySection;
