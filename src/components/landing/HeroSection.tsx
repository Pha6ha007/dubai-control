import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-medium tracking-wide mb-6 text-sm uppercase">
          CleanProof
        </p>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight mb-6">
          Proof of work for cleaning teams
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12">
          Clear evidence of when work was done — not just promises.
        </p>
        
        <Button 
          size="lg" 
          className="h-14 px-10 text-base font-medium rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300"
        >
          Request demo
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
