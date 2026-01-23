import { motion } from "framer-motion";

const PricingHeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-foreground">
      {/* Subtle glow effect - same as landing */}
      <div className="absolute inset-0 gradient-glow opacity-50" />
      
      {/* Grid overlay - same as landing */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary/80 text-sm uppercase tracking-[0.3em] mb-8"
        >
          Pricing
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-hero text-primary-foreground mb-8"
        >
          Pricing built for
          <br />
          <span className="text-primary">real cleaning operations.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-primary-foreground/40 text-sm md:text-base max-w-md mx-auto"
        >
          Simple limits. No hidden usage rules. No feature tiers.
        </motion.p>
      </div>
      
      {/* Scroll indicator - same as landing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-transparent via-primary-foreground/30 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default PricingHeroSection;
