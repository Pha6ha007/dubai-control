import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 bg-foreground">
      <div className="relative z-10 max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-medium text-primary-foreground/80 mb-5">
            Questions? Let's talk.
          </p>
          
          <Link to="/demo">
            <Button 
              size="default" 
              className="h-10 px-8 text-sm font-medium rounded-full bg-primary-foreground/90 text-foreground hover:bg-primary-foreground transition-all duration-300"
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
