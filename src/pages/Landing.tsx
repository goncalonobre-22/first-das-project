import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MentorsSection from "@/components/MentorsSection";
import BookingSection from "@/components/BookingSection";
import FooterSection from "@/components/FooterSection";
import ChatWidget from "@/components/ChatWidget";

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
      <FooterSection />
      <ChatWidget />
    </main>
  );
};

export default Landing;