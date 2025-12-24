import { Syringe, Stethoscope, Pill } from "lucide-react";

const About = () => {
  const features = [
    { icon: Stethoscope, label: "No Pain" },
    { icon: Syringe, label: "No Surgery" },
    { icon: Pill, label: "No Drugs" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-6">
              About Our Treatment
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Revolutionary Non-Invasive Treatment Powered by{" "}
              <span className="text-primary">Canadian Technology</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                For over two decades, KKT Orthopedic Spine Center has been pioneering non-invasive, non-surgical treatments that diagnose and address the root causes of back, neck, shoulder, and pelvic pain through advanced sound-wave technology.
              </p>
              <p>
                Our mission is to introduce technological advancements in orthopedics by making globally recognized, non-surgical treatments accessible to patients and setting new standards for safe and effective musculoskeletal care.
              </p>
              <p>
                Since opening Pakistan's first research-focused Orthopedic and Spine Treatment Center in Lahore in 2012; KKT has expanded to 8 centers across 6 cities—offering evidence-based, non-invasive care to restore movement and relieve pain nationwide.
              </p>
              <p className="font-medium text-foreground">
                Our technology is approved by leading health regulatory bodies, including Health Canada and the FDA, underscoring our commitment to safe and effective treatment at every orthopedic hospital and spine center in our network.
              </p>
            </div>

            {/* No Pain, No Surgery, No Drugs */}
            <div className="flex flex-wrap gap-4 mt-8">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-full px-5 py-3"
                >
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-4 bg-card rounded-2xl shadow-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Stethoscope className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">20+ Years</h3>
                  <p className="text-muted-foreground">of pioneering non-invasive orthopedic care</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-2xl p-4 shadow-glow">
              <div className="font-serif text-2xl font-bold">8</div>
              <div className="text-sm">Centers in Pakistan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
