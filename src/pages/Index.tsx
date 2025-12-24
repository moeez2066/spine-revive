import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Conditions from "@/components/landing/Conditions";
import TreatmentProcess from "@/components/landing/TreatmentProcess";
import AppointmentForm from "@/components/landing/AppointmentForm";
import WhyKKT from "@/components/landing/WhyKKT";
import Testimonials from "@/components/landing/Testimonials";
import BlogSection from "@/components/landing/BlogSection";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Conditions />
        <TreatmentProcess />
        <AppointmentForm />
        <WhyKKT />
        <Testimonials />
        <BlogSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
