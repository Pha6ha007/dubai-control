import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 bg-foreground">
      <div className="absolute inset-0 gradient-glow opacity-20" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Questions? Let's talk.
          </h2>
          
          <Link to="/demo">
            <Button 
              size="lg" 
              className="h-12 px-10 text-base font-medium rounded-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90 transition-all duration-300"
            >
              Request demo
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCTASection;
