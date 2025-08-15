import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Leaf, Heart } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Natural wellness and herbal health products"
          fill
          priority
          className="object-cover md:object-contain opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent" />
      </div>

      {/* Floating Elements */}
      <FloatingIcon
        Icon={Leaf}
        position="top-10 right-5 md:top-20 md:right-20"
        delay="0s"
      />
      <FloatingIcon
        Icon={Heart}
        position="bottom-20 right-10 md:bottom-32 md:right-32"
        delay="1s"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
          <Shield className="w-5 h-5 text-secondary" />
          <span className="text-white text-base font-medium">
            Dominic&apos;s Premium Natural Health Solutions
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
          <span className="text-secondary block">Jinja with Dominic</span>
          Transform Your Health Naturally
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          I&apos;m Dominic, and I&apos;ve dedicated my life to bringing you the
          finest JINJA herbal extracts — natural solutions for optimal health
          and vitality.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-3 mb-10 animate-slide-up">
          {["100% Natural", "Scientifically Proven", "Premium Quality"].map(
            (text) => (
              <Badge key={text} text={text} />
            )
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
          <Button className="bg-secondary/10 hover:bg-secondary/20 text-primary group px-6 py-3">
            Discover Our Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/30 px-6 py-3 rounded-full"
          >
            Learn More About JINJA
          </Button>
        </div>
      </div>
    </section>
  );
};

// Floating Icon Component
interface FloatingIconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  position: string;
  delay?: string;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  Icon,
  position,
  delay = "0s",
}) => (
  <div
    className={`absolute ${position} animate-float`}
    style={{ animationDelay: delay }}
  >
    <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/20 rounded-full flex items-center justify-center">
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
    </div>
  </div>
);

// Benefit Badge Component
const Badge: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
    <div className="w-2 h-2 bg-secondary rounded-full" />
    <span className="text-white text-base font-medium">{text}</span>
  </div>
);

export default Hero;
