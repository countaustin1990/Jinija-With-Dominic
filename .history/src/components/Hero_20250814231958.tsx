import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Leaf, Heart } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 p-3">
        <img
          src={heroImage}
          alt="Natural wellness and herbal health products"
          className="w-full h-full object-contain md:object-contain object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/30 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-5 md:top-20 md:right-20 animate-float">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/20 rounded-full flex items-center justify-center">
          <Leaf className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
        </div>
      </div>
      <div
        className="absolute bottom-20 right-10 md:bottom-32 md:right-32 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center">
          <Heart className="w-5 h-5 md:w-6 md:h-6 text-accent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-0">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 animate-fade-in">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
            <span className="text-white text-sm md:text-base font-medium">
              Dominic's Premium Natural Health Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight animate-slide-up">
            <span className="hero-text text-secondary block">
              Jinja with Dominic
            </span>
            Transform Your Health Naturally
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-2xl text-white/90 mb-6 md:mb-8 max-w-3xl leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Your trusted wellness partner. I'm Dominic, and I've dedicated my
            life to bringing you the finest JINJA herbal extracts — proven,
            natural solutions for optimal health and vitality.
          </p>

          {/* Key Benefits */}
          <div
            className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {["100% Natural", "Scientifically Proven", "Premium Quality"].map(
              (text) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-white text-sm md:text-base font-medium">
                    {text}
                  </span>
                </div>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-scale-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button className="btn-secondary bg-secondary/10 hover:bg-secondary/20 text-primary group text-sm md:text-base px-6 py-3">
              Discover Our Products
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-secondary bg-transparent text-secondary hover:border-secondary hover:bg-secondary/30 px-6 py-3 rounded-full text-sm md:text-base"
            >
              Learn More About JINJA
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
