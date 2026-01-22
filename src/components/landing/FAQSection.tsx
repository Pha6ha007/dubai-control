import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const FAQSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
          Questions
        </p>
        
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
          Frequently asked
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/50 rounded-xl px-6 bg-background shadow-card data-[state=open]:shadow-soft transition-shadow duration-200"
            >
              <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
