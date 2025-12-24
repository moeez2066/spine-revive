import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does KKT treatment work?",
      answer: "KKT treatment uses precisely controlled sound wave frequencies to realign the spine to its natural position. This non-invasive approach promotes the body's natural healing process without surgery or medication.",
    },
    {
      question: "What types of conditions does KKT treat?",
      answer: "KKT treats various spine-related conditions including back pain, neck pain, sciatica, slipped disc, spondylosis, whiplash, fibromyalgia, and other musculoskeletal disorders.",
    },
    {
      question: "How effective is the KKT treatment?",
      answer: "KKT treatment has a 97% success rate with lasting pain relief, improved posture, and proven patient satisfaction. Over 100,000 patients worldwide have been successfully treated.",
    },
    {
      question: "Is KKT treatment painful?",
      answer: "No, KKT treatment is completely painless. The sound wave technology delivers a comfortable, pain-free treatment experience with no discomfort or harm.",
    },
    {
      question: "Does KKT have any side effects?",
      answer: "KKT treatment has no known side effects as it is non-invasive and medication-free. It works with your body's natural healing mechanisms.",
    },
    {
      question: "Are the sound waves of the KKT treatment similar to radiation?",
      answer: "No, KKT sound waves are not radiation. They are precisely controlled acoustic waves that are completely safe and have been approved by Health Canada and the FDA.",
    },
    {
      question: "How long is the typical treatment session?",
      answer: "A typical KKT treatment session lasts approximately 30-45 minutes, including preparation and the actual treatment procedure.",
    },
    {
      question: "How long does it take to achieve pain relief?",
      answer: "Many patients experience relief after their first few sessions, though the complete treatment plan varies based on individual conditions and severity.",
    },
    {
      question: "What if KKT treatment doesn't work for me?",
      answer: "Our specialists conduct thorough assessments before treatment. If KKT is not suitable for your condition, we will recommend alternative approaches for your care.",
    },
    {
      question: "Do you accept insurance/health card?",
      answer: "Please contact your nearest KKT center to inquire about insurance coverage and payment options available in your area.",
    },
    {
      question: "How much does the treatment cost?",
      answer: "Treatment costs vary based on individual conditions and treatment plans. Please schedule a consultation for a personalized assessment and cost estimate.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Have Questions?
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            FAQs
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
