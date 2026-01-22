import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-display text-foreground mb-12">
            Ready to stop arguing
            <br />
            about work?
          </h2>
          
          <Button 
            size="lg" 
            className="h-14 px-12 text-base font-medium rounded-full shadow-soft hover:shadow-elevated transition-all duration-300"
          >
            Request demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
