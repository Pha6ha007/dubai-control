import { motion } from "framer-motion";

const PricingHeroSection = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/[0.08] to-primary/[0.02] pt-20">
      {/* Grid overlay - matching landing page */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary text-sm uppercase tracking-[0.25em] mb-6"
        >
          Pricing
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-foreground mb-5"
        >
          Pricing built for
          <br />
          <span className="text-primary">real cleaning operations.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-base max-w-md mx-auto"
        >
          Simple limits. No hidden usage rules. No feature tiers.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingHeroSection;
