import { motion } from "framer-motion";

const PricingHeroSection = () => {
  return (
    <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-foreground">
      {/* Subtle glow effect - very soft */}
      <div className="absolute inset-0 gradient-glow opacity-15" />
      
      {/* Grid overlay - minimal */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '120px 120px'
        }}
      />
      
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary/60 text-xs uppercase tracking-[0.25em] mb-5"
        >
          Pricing
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-primary-foreground mb-4"
        >
          Pricing built for
          <br />
          <span className="text-primary">real cleaning operations.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary-foreground/35 text-sm max-w-sm mx-auto"
        >
          Simple limits. No hidden usage rules. No feature tiers.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingHeroSection;
