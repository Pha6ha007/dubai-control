import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ScrollShowcaseSection from "@/components/landing/ScrollShowcaseSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import TransitionSection1 from "@/components/landing/TransitionSection1";
import TransitionSection2 from "@/components/landing/TransitionSection2";
import TransitionSection3 from "@/components/landing/TransitionSection3";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header - transparent on dark hero */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold text-primary-foreground">
            CleanProof
          </Link>
          
          <Link to="/login">
            <Button 
              variant="ghost" 
              className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              Sign in
            </Button>
          </Link>
        </div>
      </motion.header>
      
      {/* Page sections */}
      <main className="overflow-hidden">
        <HeroSection />
        <ProblemSection />
        <TransitionSection1 />
        <SolutionSection />
        <TransitionSection2 />
        <ScrollShowcaseSection />
        <FAQSection />
        <TransitionSection3 />
        <CTASection />
      </main>
      
      {/* Minimal footer */}
      <footer className="py-16 px-6 bg-foreground border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-primary-foreground font-semibold">CleanProof</span>
            <p className="text-sm text-primary-foreground/40">
              Built for UAE cleaning operations.
            </p>
          </div>
          <div className="flex items-center gap-8">
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

export default LandingPage;
