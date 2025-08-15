import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";

const Index = () => {
    const productshowcaseRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Hero scrollToSection={scrollToSection} productshowcaseRef={ProductShowcaseRef} />
      <ProductShowcase />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
    </main>
  );
};

export default Index;
