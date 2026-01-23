import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What happens if I exceed my cleaner limit?",
    answer: "You cannot add more cleaners than your plan allows. If your team grows beyond the limit, you can upgrade at any time. There are no overage charges — you simply upgrade before adding more cleaners.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes. You can upgrade or downgrade at any time. Changes take effect immediately. If you downgrade, you'll need to reduce your active cleaners to fit within the new plan's limits.",
  },
  {
    question: "Do clients need access?",
    answer: "No. Clients receive PDF reports directly — by email or download link. They don't need to create accounts or log into CleanProof. The proof speaks for itself.",
  },
  {
    question: "Is there a contract?",
    answer: "No long-term contracts. All plans are month-to-month. You can cancel at any time. If you cancel, your account remains active until the end of your billing period.",
  },
  {
    question: "Is CleanProof suitable for UAE operations?",
    answer: "Yes. CleanProof is built for UAE-based cleaning operations. It supports local time zones, works offline when needed, and generates documentation that meets professional standards for service verification.",
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }: { 
  faq: typeof faqs[0]; 
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group"
    >
      <button
        onClick={onToggle}
        className="w-full text-left py-8 flex items-start justify-between gap-8 focus:outline-none"
      >
        <span className="text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {faq.question}
        </span>
        <span className="flex-shrink-0 mt-1">
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary" />
          ) : (
            <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          )}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="h-px bg-border/50" />
    </motion.div>
  );
};

const PricingFAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-6">
            FAQ
          </p>
          <h2 className="text-display text-foreground">
            Pricing questions
          </h2>
        </motion.div>
        
        {isInView && (
          <div className="divide-y-0">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                faq={faq} 
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingFAQSection;
