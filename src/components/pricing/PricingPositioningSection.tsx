import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PricingPositioningSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="relative min-h-[60vh] flex items-center justify-center px-6 bg-foreground"
    >
      {/* Subtle grid background - same as landing transitions */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2 text-2xl md:text-3xl lg:text-4xl text-slate-400 mb-8">
            <p>CleanProof is not a CRM.</p>
            <p>Not a task manager.</p>
            <p>Not a marketplace.</p>
          </div>
          
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            It is a <span className="text-primary">proof layer</span> for cleaning operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPositioningSection;
