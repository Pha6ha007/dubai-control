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
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Standard Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="mb-6">
              <h3 className="text-lg font-medium text-slate-400 mb-3">Standard</h3>
              <p className="text-4xl md:text-5xl font-semibold text-white">
                $99<span className="text-lg font-normal text-slate-500"> / month</span>
              </p>
            </div>
            
            <p className="text-slate-400 mb-8">
              For small teams that need reliable proof.
            </p>
            
            <div className="flex-1 space-y-3 text-slate-400 text-sm mb-10">
              <p>Up to 5 cleaners</p>
              <p>Up to 300 jobs / month</p>
              <p>GPS check-in / check-out</p>
              <p>Before & after photos</p>
              <p>Checklist validation</p>
              <p>Verified PDF reports</p>
            </div>
            
            <div className="mt-auto">
              <Button 
                size="lg" 
                className="w-full h-12 text-base font-medium rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
              >
                Start 7-day trial
              </Button>
              <p className="text-xs text-slate-500 mt-3 text-center">
                No credit card required.
              </p>
            </div>
          </motion.div>
          
          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col p-8 md:p-10 rounded-2xl bg-white/[0.05] border border-primary/30"
          >
            {/* Subtle badge */}
            <div className="absolute -top-3 left-8 md:left-10">
              <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                Most teams choose Pro
              </span>
            </div>
            
            <div className="mb-6 mt-2">
              <h3 className="text-lg font-medium text-slate-300 mb-3">Pro</h3>
              <p className="text-4xl md:text-5xl font-semibold text-white">
                $199<span className="text-lg font-normal text-slate-500"> / month</span>
              </p>
            </div>
            
            <p className="text-slate-300 mb-8">
              For growing operations with higher volume.
            </p>
            
            <div className="flex-1 space-y-3 text-slate-400 text-sm mb-10">
              <p>Up to 15 cleaners</p>
              <p>Unlimited jobs</p>
              <p>Everything in Standard</p>
              <p>Priority support</p>
              <p>Advanced proof use cases</p>
            </div>
            
            <div className="mt-auto">
              <Link to="/demo" className="block">
                <Button 
                  size="lg" 
                  className="w-full h-12 text-base font-medium rounded-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90 transition-all duration-300"
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
