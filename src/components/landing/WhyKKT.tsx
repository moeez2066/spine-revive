import { ShieldCheck, Sparkles, Cpu } from "lucide-react";

const WhyKKT = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Noninvasive & Non-Medicinal",
      description: "Say goodbye to long surgical procedures—our non-invasive, medication-free spinal and orthopedic treatment offers safe relief without scars or surgical risks.",
    },
    {
      icon: Sparkles,
      title: "Painless",
      description: "KKT Sound Wave Technology delivers a fully safe, pain-free treatment experience with no discomfort or harm.",
    },
    {
      icon: Cpu,
      title: "State-of-the-art Technology",
      description: "We prioritize research-backed Canadian-based technology at our orthopedic center to provide our patients with top-tier medical care.",
    },
  ];

  return (
    <section id="why-kkt" className="py-20 bg-gradient-to-br from-primary to-teal-dark text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
            Why Choose Us
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Why KKT Is the Trusted Leader in Spine & Orthopedic Care
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              
              <p className="text-primary-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKKT;
