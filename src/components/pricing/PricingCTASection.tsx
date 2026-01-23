import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-14 md:py-16 px-6 bg-foreground border-t border-primary-foreground/[0.08]">
      <div className="relative z-10 max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <p className="text-lg text-primary-foreground/80 font-medium">
            Questions? Let's talk.
          </p>
          
          <Link to="/demo">
            <Button 
              size="lg" 
              className="h-12 px-8 text-sm font-medium bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/15 border border-primary-foreground/10 rounded-full transition-all duration-300"
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
