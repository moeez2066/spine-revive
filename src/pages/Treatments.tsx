import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Treatments = () => {
  const conditions = [
    {
      title: "Whiplash",
      description: "Whiplash is a neck injury caused by a sudden, forceful back-and-forth movement of the neck, commonly occurring during car accidents, sports injuries, or falls. This rapid motion can damage the soft tissues, muscles, and ligaments in the cervical spine.",
      details: "At KKT Australia, we use advanced sound wave technology to gently realign the cervical vertebrae and promote natural healing. Our non-invasive approach helps reduce inflammation, restore proper neck function, and alleviate chronic pain without surgery or medication.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Neck pain and stiffness", "Headaches at the base of skull", "Dizziness and fatigue", "Shoulder and upper back pain", "Difficulty concentrating", "Blurred vision"],
    },
    {
      title: "Spondylosis",
      description: "Spondylosis is a degenerative condition affecting the spinal disks and joints, commonly associated with aging. As we age, the disks between vertebrae lose hydration and elasticity, leading to reduced cushioning and increased friction between bones.",
      details: "Our KKT treatment protocol addresses spondylosis by improving spinal alignment and reducing pressure on affected disks. Through precise sound wave therapy, we help slow the degenerative process, improve mobility, and significantly reduce pain levels for long-term relief.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Chronic back or neck pain", "Morning stiffness lasting hours", "Reduced range of motion", "Muscle weakness in limbs", "Grinding sensation when moving", "Numbness or tingling"],
    },
    {
      title: "Sciatica",
      description: "Sciatica refers to pain that radiates along the path of the sciatic nerve, which runs from the lower back through the hips, buttocks, and down each leg. It typically occurs when a herniated disk, bone spur, or spinal stenosis compresses part of the nerve.",
      details: "KKT treatment effectively addresses sciatica by correcting spinal misalignments that cause nerve compression. Our gentle, targeted approach reduces pressure on the sciatic nerve, alleviates inflammation, and restores proper nerve function without invasive procedures.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Sharp lower back pain", "Pain radiating down the leg", "Numbness in leg or foot", "Tingling or burning sensation", "Weakness in affected leg", "Pain worsening when sitting"],
    },
    {
      title: "Slipped Disk (Herniated Disk)",
      description: "A slipped or herniated disk occurs when the soft, gel-like center of a spinal disk pushes through a crack in the tougher exterior casing. This can irritate nearby nerves and result in pain, numbness, or weakness in an arm or leg.",
      details: "Our non-surgical KKT approach helps patients with herniated disks by reducing pressure on the affected area and promoting natural disk healing. The treatment improves spinal alignment, decreases nerve irritation, and helps restore normal disk function over time.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Intense localized back pain", "Radiating arm or leg pain", "Muscle weakness", "Numbness or tingling", "Difficulty with certain movements", "Pain worsening at night"],
    },
    {
      title: "Chronic Back Pain",
      description: "Chronic back pain is persistent pain lasting 12 weeks or longer, even after an initial injury or underlying cause has been treated. It can stem from various factors including poor posture, muscle strain, degenerative conditions, or structural abnormalities.",
      details: "KKT Australia specializes in identifying and treating the root cause of chronic back pain rather than just masking symptoms. Our comprehensive approach combines spinal realignment therapy with personalized treatment plans to provide lasting relief and improved quality of life.",
      image: "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Persistent aching or stiffness", "Sharp, localized pain", "Limited flexibility and mobility", "Muscle spasms and tension", "Pain after prolonged sitting", "Difficulty sleeping due to pain"],
    },
    {
      title: "Neck Pain (Cervical Pain)",
      description: "Neck pain is a common condition that can result from poor posture, muscle strain, worn joints, nerve compression, injuries, or diseases. Modern lifestyle factors like prolonged computer use and smartphone usage have significantly increased neck pain prevalence.",
      details: "Our KKT treatment for neck pain focuses on restoring proper cervical spine alignment and reducing muscle tension. Using precise sound wave technology, we address the underlying structural issues causing pain, providing relief without medication or surgery.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Stiff neck muscles", "Tension headaches", "Shoulder blade pain", "Reduced range of motion", "Pain radiating to arms", "Muscle spasms in neck"],
    },
    {
      title: "Scoliosis",
      description: "Scoliosis is a sideways curvature of the spine that most often occurs during the growth spurt just before puberty. While mild scoliosis may not cause significant problems, severe curves can be disabling and reduce the amount of space within the chest.",
      details: "KKT treatment helps manage scoliosis by improving spinal alignment and reducing the progression of curvature. Our non-invasive approach is particularly effective for patients seeking alternatives to bracing or surgery, offering improved posture and reduced discomfort.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Uneven shoulders or waist", "One shoulder blade more prominent", "Visible curved spine", "Back pain and fatigue", "Uneven hips", "Difficulty standing straight"],
    },
    {
      title: "Kyphosis",
      description: "Kyphosis is an excessive outward curvature of the spine, causing abnormal rounding of the upper back. While some rounding is normal, kyphosis refers to an exaggerated curve of more than 50 degrees. It can occur at any age but is most common in older women.",
      details: "Our KKT treatment protocol for kyphosis works to improve spinal alignment and strengthen the supporting structures. Through targeted therapy, we help reduce the excessive curvature, improve posture, and alleviate associated pain and discomfort.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
      symptoms: ["Rounded upper back", "Persistent back pain", "Spine stiffness", "Tight hamstrings", "Fatigue and weakness", "Difficulty breathing in severe cases"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Our Treatments
              </span>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Conditions We Treat at{" "}
                <span className="text-primary">KKT Australia</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                At KKT Australia, we specialize in non-invasive spinal treatment using advanced sound wave technology. 
                Our approach targets the root cause of spinal conditions rather than just treating symptoms, 
                providing long-lasting relief without surgery or medication.
              </p>
              
              <p className="text-muted-foreground mb-8">
                Our team of experienced orthopedic specialists has successfully treated thousands of patients 
                across Australia, helping them return to active, pain-free lives. Each treatment plan is 
                personalized to address your specific condition and health goals.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50">
                  <Shield className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Non-Invasive</p>
                    <p className="text-sm text-muted-foreground">No surgery required</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50">
                  <Zap className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Advanced Technology</p>
                    <p className="text-sm text-muted-foreground">Sound wave therapy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50">
                  <Heart className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Lasting Relief</p>
                    <p className="text-sm text-muted-foreground">Root cause treatment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Grid */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Spinal Conditions We Specialize In
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the range of conditions our specialists treat using the revolutionary KKT treatment protocol.
              </p>
            </div>

            <div className="space-y-8">
              {conditions.map((condition, index) => (
                <div
                  key={condition.title}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden">
                      <img 
                        src={condition.image} 
                        alt={condition.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="lg:w-2/3 p-6 lg:p-8">
                      <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {condition.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4">{condition.description}</p>
                      
                      <p className="text-muted-foreground mb-6 bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                        <strong className="text-foreground">How KKT Helps: </strong>
                        {condition.details}
                      </p>
                      
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground">Common Symptoms:</p>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
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
              Book a consultation with our specialists to discuss your condition and explore how KKT treatment can help you 
              achieve lasting relief from pain and improved quality of life.
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
