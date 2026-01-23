import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-10 md:py-12 px-6 bg-foreground border-t border-primary-foreground/[0.06]">
      <div className="relative z-10 max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-sm text-primary-foreground/60">
            Questions? Let's talk.
          </p>
          
          <Link to="/demo">
            <Button 
              size="sm" 
              variant="ghost"
              className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5 transition-all duration-300"
            >
              Request demo →
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCTASection;
