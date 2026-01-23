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
    highlighted: false,
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
      "",
    ],
    cta: "Request access",
    ctaLink: "/demo",
    note: null,
    badge: "Most teams choose Pro",
    highlighted: true,
  },
];

const PricingPlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="relative py-20 md:py-24 px-6 bg-foreground"
    >
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-12"
        >
          <p className="text-primary-foreground/40 text-xs uppercase tracking-[0.2em] mb-3">
            Plans
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-primary-foreground">
            Choose your scale.
          </h2>
        </motion.div>
        
        {/* Shared container for both plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-0 rounded-2xl border border-primary-foreground/[0.06] overflow-hidden"
        >
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-7 ${
                plan.highlighted 
                  ? "bg-primary-foreground/[0.04] border-l border-primary-foreground/[0.08] shadow-[inset_0_0_60px_rgba(255,255,255,0.02)]" 
                  : "bg-primary-foreground/[0.02]"
              } ${index === 0 ? "md:border-r md:border-primary-foreground/[0.04]" : ""}`}
            >
              {/* Reserved badge space - identical height for both cards */}
              <div className="h-6 mb-4">
                {plan.badge && (
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-medium text-primary bg-primary/10 rounded-full border border-primary/15">
                    {plan.badge}
                  </span>
                )}
              </div>
              
              {/* Plan name */}
              <h3 className="text-sm font-medium text-primary-foreground/45 mb-2">
                {plan.name}
              </h3>
              
              {/* Price - aligned baseline */}
              <p className="text-3xl font-semibold text-primary-foreground mb-1">
                {plan.price}
                <span className="text-sm font-normal text-primary-foreground/35 ml-1">/ month</span>
              </p>
              
              {/* Description - fixed height */}
              <p className="text-sm text-primary-foreground/40 h-10 mb-6">
                {plan.description}
              </p>
              
              {/* Features - fixed height container */}
              <div className="flex-1 mb-6" style={{ minHeight: "156px" }}>
                <div className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <p key={i} className="text-sm text-primary-foreground/45 h-5">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* CTA - aligned at bottom */}
              <div>
                {plan.ctaLink ? (
                  <Link to={plan.ctaLink} className="block">
                    <Button 
                      size="lg" 
                      className={`w-full h-11 text-sm font-medium rounded-full transition-all duration-300 ${
                        plan.highlighted
                          ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-sm"
                          : "bg-primary-foreground/90 text-foreground hover:bg-primary-foreground"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    size="lg" 
                    className={`w-full h-11 text-sm font-medium rounded-full transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-sm"
                        : "bg-primary-foreground/90 text-foreground hover:bg-primary-foreground"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                )}
                {/* Note space - fixed height */}
                <div className="h-5 mt-2.5">
                  {plan.note && (
                    <p className="text-[11px] text-primary-foreground/35 text-center">
                      {plan.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlansSection;
