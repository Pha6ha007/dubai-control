import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingPlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="relative py-32 md:py-48 px-6 bg-foreground"
    >
      {/* Subtle grid background - same as landing transitions */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-slate-400 text-sm uppercase tracking-[0.2em] mb-6">
            Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Choose your scale.
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Standard Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-medium text-white mb-2">Standard</h3>
              <p className="text-4xl md:text-5xl font-semibold text-white">
                $99<span className="text-lg font-normal text-slate-400"> / month</span>
              </p>
            </div>
            
            <p className="text-lg text-slate-300">
              For small teams that need reliable proof.
            </p>
            
            <div className="space-y-4 text-slate-400">
              <p>Up to 5 cleaners</p>
              <p>Up to 300 jobs per month</p>
              <p>GPS check-in / check-out</p>
              <p>Before & after photos</p>
              <p>Checklist validation</p>
              <p>Verified PDF reports</p>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="h-12 px-8 text-base font-medium rounded-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90 transition-all duration-300"
              >
                Start 7-day trial
              </Button>
              <p className="text-sm text-slate-500 mt-3">
                No credit card required.
              </p>
            </div>
          </motion.div>
          
          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-medium text-white mb-2">Pro</h3>
              <p className="text-4xl md:text-5xl font-semibold text-white">
                $199<span className="text-lg font-normal text-slate-400"> / month</span>
              </p>
            </div>
            
            <p className="text-lg text-slate-300">
              For growing operations with higher volume.
            </p>
            
            <div className="space-y-4 text-slate-400">
              <p>Up to 15 cleaners</p>
              <p>Unlimited jobs</p>
              <p>Everything in Standard</p>
              <p>Priority support</p>
              <p>Advanced proof use cases</p>
            </div>
            
            <div className="pt-4">
              <Link to="/demo">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="h-12 px-8 text-base font-medium rounded-full border-slate-600 text-white hover:bg-white/10 transition-all duration-300"
                >
                  Request access
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;
