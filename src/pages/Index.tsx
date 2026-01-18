import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import RefundSection from "@/components/RefundSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import CasesSection from "@/components/CasesSection";
import ReviewInfoSection from "@/components/ReviewInfoSection";
import ComparisonSection from "@/components/ComparisonSection";
import ValueSection from "@/components/ValueSection";
import NotForSection from "@/components/NotForSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SkillsSection />
      <RefundSection />
      <TestimonialsSection />
      <ServicesSection />
      <StatsSection />
      <CasesSection />
      <ReviewInfoSection />
      <ComparisonSection />
      <ValueSection />
      <NotForSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
