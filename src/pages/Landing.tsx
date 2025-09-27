import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MentorsSection from "@/components/MentorsSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Landing = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <MentorsSection />
      <BookingSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Landing;