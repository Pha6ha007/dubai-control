import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Update {
  id: string;
  date: string;
  title: string;
  summary: string;
  fullDescription: string[];
  hasImage?: boolean;
}

const updates: Update[] = [
  {
    id: "1",
    date: "Jan 18, 2026",
    title: "Trial limits added for Standard plan",
    summary: "Cleaner limits, job caps, and proof enforcement are now active during trial.",
    fullDescription: [
      "Trial accounts on the Standard plan now include realistic operational limits to help you evaluate CleanProof under real conditions.",
      "During the 7-day trial, you can add up to 2 cleaners and create up to 10 jobs. The full proof flow — including GPS validation, photo capture, and timestamping — is fully enabled.",
      "These limits help ensure a focused evaluation experience while giving you access to all core features."
    ],
    hasImage: true
  },
  {
    id: "2",
    date: "Jan 12, 2026",
    title: "GPS validation accuracy improvements",
    summary: "Location verification now uses refined geofencing for more reliable proof of presence.",
    fullDescription: [
      "We've updated the GPS validation engine to provide more accurate location verification for job sites.",
      "The new geofencing algorithm accounts for building layouts, multi-floor structures, and areas with limited GPS signal. This reduces false negatives in dense urban environments like Dubai Marina and Downtown.",
      "Validation tolerance is now configurable per location, allowing you to adjust sensitivity based on site requirements."
    ]
  },
  {
    id: "3",
    date: "Jan 5, 2026",
    title: "PDF report formatting updates",
    summary: "Exported proof reports now include cleaner timestamps and improved photo layouts.",
    fullDescription: [
      "PDF exports have been redesigned for better readability and professional presentation.",
      "Key improvements include:",
      "• Larger, higher-resolution proof photos with proper aspect ratios",
      "• Cleaner timestamp formatting with timezone indicators",
      "• Location details now include map thumbnails when GPS data is available",
      "• Report headers include your company branding and contact information"
    ],
    hasImage: true
  }
];

const UpdateCard = ({ update }: { update: Update }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-card border border-border/50 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-elevated cursor-pointer"
      whileHover={{ scale: 1.01 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-2">{update.date}</p>
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
              {update.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {update.summary}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="mt-1"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-border/50">
                <p className="text-xs text-muted-foreground/60 mb-4 uppercase tracking-wide">
                  {update.date}
                </p>
                <div className="space-y-4">
                  {update.fullDescription.map((paragraph, index) => (
                    <p 
                      key={index} 
                      className="text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {update.hasImage && (
                  <div className="mt-6 rounded-lg bg-muted/30 border border-border/30 aspect-video flex items-center justify-center">
                    <p className="text-sm text-muted-foreground/50">Image placeholder</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ProductUpdatesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/30"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-lg font-semibold text-foreground">
              CleanProof
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/pricing" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link 
                to="/updates" 
                className="text-sm text-foreground font-medium"
              >
                Product updates
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          
          <Link to="/login">
            <Button 
              variant="ghost" 
              className="text-foreground/70 hover:text-foreground hover:bg-foreground/5"
            >
              Sign in
            </Button>
          </Link>
        </div>
      </motion.header>

      <main>
        {/* Compact Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Subtle background */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                               linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Product updates
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground"
            >
              What's new in CleanProof.
            </motion.p>
          </div>
        </section>

        {/* Updates List */}
        <section className="pb-24 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              {updates.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 bg-foreground border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-primary-foreground font-semibold">CleanProof</span>
            <p className="text-sm text-primary-foreground/40">
              Built for UAE cleaning operations.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/" className="text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Home
            </Link>
            <Link to="/pricing" className="text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Pricing
            </Link>
            <a href="#" className="text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductUpdatesPage;
