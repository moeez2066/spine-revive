import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, MapPin, Phone, Shield, Users, CheckCircle } from "lucide-react";

const Appointment = () => {
  const centers = [
    "Sydney",
    "Melbourne", 
    "Brisbane",
    "Perth",
    "Adelaide",
  ];

  const treatments = [
    "Back Pain",
    "Neck Pain",
    "Sciatica",
    "Slipped Disk",
    "Scoliosis",
    "Fibromyalgia",
    "Migraine/Headaches",
    "Sports Injuries",
    "Other",
  ];

  const benefits = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose appointment times that work with your busy schedule. We offer morning, afternoon, and weekend slots.",
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Our team responds within 24 hours to confirm your appointment and answer any questions you may have.",
    },
    {
      icon: MapPin,
      title: "Multiple Centers",
      description: "Visit any of our conveniently located centers across Australia for your consultation.",
    },
    {
      icon: Shield,
      title: "Expert Care",
      description: "Our certified specialists have years of experience in non-surgical spine treatment.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Book Your Appointment",
      description: "Fill out the form with your details and preferred time slot.",
    },
    {
      number: "02",
      title: "Confirmation Call",
      description: "Our team will call you to confirm the appointment and gather initial information.",
    },
    {
      number: "03",
      title: "Initial Consultation",
      description: "Meet with our specialist for a thorough assessment of your condition.",
    },
    {
      number: "04",
      title: "Personalized Treatment Plan",
      description: "Receive a customized treatment plan tailored to your specific needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Schedule Your Visit
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Book Your{" "}
              <span className="text-primary">Appointment</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Take the first step towards a pain-free life. Our team of specialists is ready to help you 
              with personalized, non-surgical treatment for your spine-related conditions.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="container mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
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
        </section>

        {/* Main Content */}
        <section className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                Fill Out Your Details
              </h2>
              <p className="text-muted-foreground mb-8">
                Complete the form below and we'll get back to you within 24 hours to confirm your appointment.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+61 XXX XXX XXX"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                        <SelectItem value="evening">Evening (4PM - 6PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="center">Select Center *</Label>
                    <Select>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Choose a center" />
                      </SelectTrigger>
                      <SelectContent>
                        {centers.map((center) => (
                          <SelectItem key={center} value={center.toLowerCase()}>
                            {center}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="treatment">Treatment/Condition *</Label>
                    <Select>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        {treatments.map((treatment) => (
                          <SelectItem key={treatment} value={treatment.toLowerCase().replace(/\//g, '-')}>
                            {treatment}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Briefly describe your condition, symptoms, or any specific concerns you'd like to discuss..."
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg shadow-glow"
                >
                  Book Appointment
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and consent to be contacted 
                  regarding your appointment.
                </p>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              {/* Process Steps */}
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  What Happens Next?
                </h3>
                <div className="space-y-6">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{step.number}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="font-serif text-xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  If you have urgent questions or need immediate help, our team is available 
                  during business hours to assist you.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:1300558558"
                    className="flex items-center gap-3 text-primary-foreground hover:text-accent transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">1300 558 558</span>
                  </a>
                  <div className="flex items-center gap-3 text-primary-foreground/80">
                    <Clock className="w-5 h-5" />
                    <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  Why Choose KKT?
                </h3>
                <div className="space-y-4">
                  {[
                    "Non-surgical, pain-free treatment",
                    "Over 100,000+ successful treatments",
                    "97% patient satisfaction rate",
                    "Globally recognized methodology",
                    "Personalized treatment plans",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Appointment;
