import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Treatments = () => {
  const conditions = [
    {
      title: "Whiplash",
      description: "Neck injury from rapid back-and-forth movement. Our specialized treatment helps restore proper cervical alignment and reduce pain.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Neck pain and stiffness", "Headaches", "Dizziness", "Shoulder pain"],
    },
    {
      title: "Spondylosis",
      description: "Age-related wear and tear of the spinal disks. KKT treatment helps manage symptoms and improve spinal function.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Chronic back pain", "Stiffness", "Reduced mobility", "Muscle weakness"],
    },
    {
      title: "Sciatica",
      description: "Pain radiating along the sciatic nerve from the lower back through the hips and down each leg.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Lower back pain", "Hip pain", "Leg numbness", "Tingling sensation"],
    },
    {
      title: "Slipped Disk",
      description: "Displacement of spinal disk causing nerve compression. Our non-invasive approach helps realign and relieve pressure.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Sharp back pain", "Muscle weakness", "Numbness", "Difficulty walking"],
    },
    {
      title: "Back Pain",
      description: "Chronic or acute pain in the back region. We address the root cause rather than just masking symptoms.",
      image: "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Persistent aching", "Limited flexibility", "Muscle spasms", "Poor posture"],
    },
    {
      title: "Neck Pain",
      description: "Discomfort in the cervical spine area. Our treatment restores proper alignment and reduces tension.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Stiff neck", "Headaches", "Shoulder tension", "Limited movement"],
    },
    {
      title: "Scoliosis",
      description: "Abnormal lateral curvature of the spine. KKT helps improve spinal alignment and reduce associated discomfort.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Uneven shoulders", "Curved spine", "Back pain", "Fatigue"],
    },
    {
      title: "Kyphosis",
      description: "Excessive outward curve of the spine causing hunching. Our treatment helps improve posture and reduce pain.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Rounded upper back", "Back pain", "Stiffness", "Fatigue"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Our Treatments
              </span>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Conditions We Treat at{" "}
                <span className="text-primary">KKT Australia</span>
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Our orthopedic specialists use advanced, non-invasive KKT treatment to address the root cause of spinal conditions. 
                We don't just mask symptoms—we work to restore proper spinal alignment and function.
              </p>
            </div>
          </div>
        </section>

        {/* Conditions Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {conditions.map((condition, index) => (
                <div
                  key={condition.title}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                      <img 
                        src={condition.image} 
                        alt={condition.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <h2 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {condition.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4">{condition.description}</p>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Common Symptoms:</p>
                        <ul className="grid grid-cols-2 gap-2">
                          {condition.symptoms.map((symptom) => (
                            <li key={symptom} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Treatment?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a consultation with our specialists to discuss your condition and explore how KKT treatment can help you.
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

export default Treatments;
