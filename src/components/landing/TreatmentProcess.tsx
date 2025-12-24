import { ClipboardCheck, Scan, FileText, Waves, Heart } from "lucide-react";

const TreatmentProcess = () => {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Specialized Assessment",
      description: "Our team of specialists thoroughly assesses the patient's condition through a comprehensive examination. This assessment includes evaluating the body's balance, as any imbalances can exert pressure on the spine's vertebrae. Additionally, we meticulously assess the muscle's strength.",
    },
    {
      number: "02",
      icon: Scan,
      title: "Diagnostic Exam",
      description: "We utilize advanced KKT 3D X-ray technology to capture three-dimensional images from the top, lateral, and frontal perspectives. This detailed imaging provides a comprehensive view of the spine, enabling us to precisely detect ailments or abnormalities.",
    },
    {
      number: "03",
      icon: FileText,
      title: "Report of Findings",
      description: "Our team analyzes X-ray results, which reveal crucial insights into the overall spinal condition and facilitate precise diagnosis of underlying issues. Then, the patient has a one-on-one consultation with a specialist.",
    },
    {
      number: "04",
      icon: Waves,
      title: "KKT Specialized Treatment",
      description: "KKT Quantum Acoustic Waves use precisely controlled frequencies to realign spinal misalignment to its normal position. This non-invasive treatment eliminates pain, promotes the body's self-healing process, and restores balance.",
    },
    {
      number: "05",
      icon: Heart,
      title: "Supportive Treatment",
      description: "We provide comprehensive supportive therapies designed to ease discomfort and reduce pain. Combining KKT treatment with physiotherapy accelerates recovery, enhances mobility, and strengthens bones and ligaments.",
    },
  ];

  const benefits = [
    "Painless, Medication-free Treatment",
    "Personalized Treatment Plans",
    "Supportive Treatment & Guidance",
    "Follow-up Sessions",
    "Faster Recovery",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-6">
            Reclaim Your Health
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            How is KKT Treatment Done?
          </h2>
          
          <p className="text-muted-foreground">
            We understand how life-disrupting spine and joint pain can be. At KKT, our treatment is designed to relieve your pain gently and effectively.
          </p>
        </div>

        {/* Benefits pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {benefits.map((benefit) => (
            <span
              key={benefit}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:order-2 lg:pl-16"}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-accent font-bold text-sm mb-1">Step {step.number}</div>
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline node */}
                <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-accent rounded-full items-center justify-center text-accent-foreground font-bold shadow-glow ${
                  index % 2 === 0 ? "" : ""
                }`}>
                  {step.number}
                </div>

                {/* Spacer for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentProcess;
