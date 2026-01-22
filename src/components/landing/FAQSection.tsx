import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What exactly is CleanProof?",
    answer: "CleanProof is a proof-of-work system for cleaning companies. It shows when cleaners were on site, what was done, and provides a single PDF report you can share with clients. No task lists. No messaging. Just evidence.",
  },
  {
    question: "Who is CleanProof for?",
    answer: "For cleaning company owners and operations managers who need proof — not promises. If you manage cleaners and deal with client disputes, CleanProof is built for you.",
  },
  {
    question: "Do my clients need to use CleanProof?",
    answer: "No. Clients never log in. They simply receive a clear PDF report after the job is done.",
  },
  {
    question: "How does this work day-to-day?",
    answer: "You schedule jobs as usual. Cleaners check in on site, take photos, complete a checklist, and check out. You receive a structured report automatically.",
  },
  {
    question: "Do cleaners need to be tech-savvy?",
    answer: "No. If they can use a phone camera, they can use CleanProof. The app only shows today's jobs and required steps.",
  },
  {
    question: "Can cleaners fake location or photos?",
    answer: "No. Check-in and check-out only work near the job location (GPS verified). Photos are tied to the job and time they were taken.",
  },
  {
    question: "What happens if there is no internet on site?",
    answer: "Photos and checklist actions can be captured offline and synced later. Check-in and check-out require a connection to ensure location accuracy.",
  },
  {
    question: "What exactly do I get at the end of a job?",
    answer: "A professional PDF report with job details, times, photos, and checklist. One file. Clear proof.",
  },
  {
    question: "Is this a marketplace or client platform?",
    answer: "No. CleanProof is an internal operational tool. You stay in full control of your business and clients.",
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

const FAQSection = () => {
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
            Questions
          </p>
          <h2 className="text-display text-foreground">
            Everything you need to know.
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

export default FAQSection;
