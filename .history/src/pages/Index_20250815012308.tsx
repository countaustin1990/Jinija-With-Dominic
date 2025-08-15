import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
    </main>
  );
};

export default Index;
