import { motion } from "framer-motion";

const PricingHeroSection = () => {
  return (
    <section className="relative min-h-[28vh] flex items-center justify-center overflow-hidden bg-foreground pt-20">
      {/* Subtle glow effect - very soft */}
      <div className="absolute inset-0 gradient-glow opacity-10" />
      
      {/* Grid overlay - minimal */}
      <div 
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '120px 120px'
        }}
      />
      
      <div className="relative z-10 max-w-xl mx-auto px-6 py-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary/50 text-xs uppercase tracking-[0.25em] mb-4"
        >
          Pricing
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-primary-foreground mb-4"
        >
          Pricing built for
          <br />
          <span className="text-primary">real cleaning operations.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary-foreground/40 text-sm max-w-md mx-auto"
        >
          Simple limits. No hidden usage rules. No feature tiers.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingHeroSection;
