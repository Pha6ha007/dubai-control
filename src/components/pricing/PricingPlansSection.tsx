import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Standard",
    price: "$99",
    description: "For small teams that need reliable proof.",
    features: [
      "Up to 5 cleaners",
      "Up to 300 jobs / month",
      "GPS check-in / check-out",
      "Before & after photos",
      "Checklist validation",
      "Verified PDF reports",
    ],
    cta: "Start 7-day trial",
    ctaLink: null,
    note: "No credit card required.",
    badge: null,
  },
  {
    name: "Pro",
    price: "$199",
    description: "For growing operations with higher volume.",
    features: [
      "Up to 15 cleaners",
      "Unlimited jobs",
      "Everything in Standard",
      "Priority support",
      "Advanced proof use cases",
      "", // Empty to match height
    ],
    cta: "Request access",
    ctaLink: "/demo",
    note: null,
    badge: "Most teams choose Pro",
  },
];

const PricingPlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="relative py-24 md:py-32 px-6 bg-foreground"
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-primary-foreground/50 text-xs uppercase tracking-[0.2em] mb-4">
            Plans
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
            Choose your scale.
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                plan.badge 
                  ? "bg-primary-foreground/[0.05] border-primary/30" 
                  : "bg-primary-foreground/[0.03] border-primary-foreground/[0.06]"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-8">
                  <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              {/* Header - fixed height */}
              <div className={`mb-6 ${plan.badge ? "mt-2" : ""}`} style={{ minHeight: "88px" }}>
                <h3 className="text-base font-medium text-primary-foreground/50 mb-2">{plan.name}</h3>
                <p className="text-4xl font-semibold text-primary-foreground mb-2">
                  {plan.price}<span className="text-base font-normal text-primary-foreground/40"> / month</span>
                </p>
                <p className="text-sm text-primary-foreground/50">{plan.description}</p>
              </div>
              
              {/* Features - fixed height container */}
              <div className="flex-1 mb-8" style={{ minHeight: "180px" }}>
                <div className="space-y-2.5">
                  {plan.features.map((feature, i) => (
                    <p key={i} className="text-sm text-primary-foreground/50 h-5">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* CTA - aligned at bottom */}
              <div className="mt-auto">
                {plan.ctaLink ? (
                  <Link to={plan.ctaLink} className="block">
                    <Button 
                      size="lg" 
                      className="w-full h-12 text-sm font-medium rounded-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90 transition-all duration-300"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    size="lg" 
                    className="w-full h-12 text-sm font-medium rounded-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90 transition-all duration-300"
                  >
                    {plan.cta}
                  </Button>
                )}
                {plan.note && (
                  <p className="text-xs text-primary-foreground/40 mt-3 text-center h-4">
                    {plan.note}
                  </p>
                )}
                {!plan.note && <div className="h-4 mt-3" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;
