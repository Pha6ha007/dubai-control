import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  "Cleaners say they were there.",
  "Clients say they weren't.",
  "Photos are sent in WhatsApp.",
  "There is no proof."
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 bg-background overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-24 md:mb-32"
        >
          The problem
        </motion.p>
        
        <div className="space-y-8 md:space-y-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.3 + index * 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className={`${index % 2 === 1 ? 'md:ml-24' : ''} ${index === 3 ? 'md:ml-48' : ''}`}
            >
              <p className={`text-statement ${index === 3 ? 'text-primary font-semibold' : 'text-foreground/80'}`}>
                {problem}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
