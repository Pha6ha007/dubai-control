import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-32 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
          See how CleanProof works in practice
        </h2>
        
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

export default CTASection;
