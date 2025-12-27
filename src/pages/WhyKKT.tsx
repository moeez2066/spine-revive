import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Cpu, Award, Users, Clock, CheckCircle, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const WhyKKTPage = () => {
  const mainFeatures = [
    {
      icon: ShieldCheck,
      title: "Non-Invasive & Non-Medicinal",
      description: "Say goodbye to long surgical procedures—our non-invasive, medication-free spinal and orthopedic treatment offers safe relief without scars or surgical risks.",
      details: "Unlike traditional treatments that rely on surgery or long-term medication, KKT uses advanced sound wave technology to treat spinal conditions naturally. This means no incisions, no anesthesia, and no pharmaceutical side effects.",
    },
    {
      icon: Sparkles,
      title: "Completely Painless",
      description: "KKT Sound Wave Technology delivers a fully safe, pain-free treatment experience with no discomfort or harm.",
      details: "Our treatment sessions are gentle and comfortable. Patients often describe the experience as relaxing. There is no recovery time needed—you can return to your daily activities immediately after each session.",
    },
    {
      icon: Cpu,
      title: "State-of-the-Art Technology",
      description: "We prioritize research-backed Canadian-based technology at our orthopedic center to provide our patients with top-tier medical care.",
      details: "The KKT device uses precisely calibrated sound waves to realign vertebrae and stimulate natural healing processes. This technology has been developed through decades of research and clinical trials.",
    },
  ];

  const additionalBenefits = [
    {
      icon: Award,
      title: "Proven Results",
      description: "Thousands of patients worldwide have experienced significant improvement in their spinal conditions through KKT treatment.",
    },
    {
      icon: Users,
      title: "Expert Specialists",
      description: "Our team consists of highly trained orthopedic specialists with extensive experience in spinal care and KKT treatment protocols.",
    },
    {
      icon: Clock,
      title: "Quick Sessions",
      description: "Treatment sessions typically last only 15-30 minutes, making it easy to fit into your busy schedule without disrupting your life.",
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "We treat the whole person, not just symptoms. Our approach considers your lifestyle, posture, and overall health for comprehensive care.",
    },
    {
      icon: Target,
      title: "Root Cause Treatment",
      description: "Unlike pain medications that mask symptoms, KKT addresses the underlying structural issues causing your discomfort.",
    },
    {
      icon: CheckCircle,
      title: "No Side Effects",
      description: "Because our treatment is non-invasive and drug-free, there are no harmful side effects or risk of dependency.",
    },
  ];

  const treatmentProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Meet with our specialists for a thorough evaluation of your condition, medical history, and treatment goals.",
    },
    {
      step: "02",
      title: "Diagnostic Assessment",
      description: "Advanced imaging and analysis to understand the exact nature of your spinal condition and develop a personalized plan.",
    },
    {
      step: "03",
      title: "KKT Treatment Sessions",
      description: "Receive gentle, targeted sound wave therapy to realign your spine and promote natural healing.",
    },
    {
      step: "04",
      title: "Progress Monitoring",
      description: "Regular check-ups to track your improvement and adjust the treatment plan as needed for optimal results.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-teal-dark text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
                Why Choose KKT
              </span>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Why KKT Is the Trusted Leader in Spine & Orthopedic Care
              </h1>
              
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                For over two decades, KKT has been at the forefront of non-invasive spinal treatment, 
                helping patients worldwide achieve lasting relief from pain and improved quality of life 
                through our revolutionary sound wave technology.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-primary-foreground/20 px-6 py-3 rounded-full">
                  <span className="font-bold text-2xl">20+</span>
                  <span className="ml-2 text-primary-foreground/80">Years Experience</span>
                </div>
                <div className="bg-primary-foreground/20 px-6 py-3 rounded-full">
                  <span className="font-bold text-2xl">50K+</span>
                  <span className="ml-2 text-primary-foreground/80">Patients Treated</span>
                </div>
                <div className="bg-primary-foreground/20 px-6 py-3 rounded-full">
                  <span className="font-bold text-2xl">95%</span>
                  <span className="ml-2 text-primary-foreground/80">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                What Makes KKT Different
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our unique approach to spinal care sets us apart from traditional treatment methods.
              </p>
            </div>

            <div className="space-y-8">
              {mainFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-card rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="lg:flex items-start gap-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 lg:mb-0 flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-lg">
                        {feature.description}
                      </p>
                      <p className="text-muted-foreground bg-secondary/50 p-4 rounded-lg">
                        {feature.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Benefits Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                More Reasons to Choose KKT Australia
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Beyond our core treatment technology, we offer a comprehensive patient experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Your Journey to Recovery
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our structured treatment process ensures you receive the best possible care at every step.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentProcess.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="bg-card rounded-xl p-6 border border-border/50 h-full">
                    <span className="text-4xl font-bold text-primary/20">{step.step}</span>
                    <h3 className="font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < treatmentProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Experience the KKT Difference
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of patients who have found relief through our revolutionary treatment. 
              Book your consultation today and take the first step toward a pain-free life.
            </p>
            <Link to="/#appointment">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyKKTPage;
