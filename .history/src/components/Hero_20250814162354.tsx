import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Leaf, Heart } from "lucide-react";
import Hero from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-wellness overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={Hero} 
          alt="Natural wellness and herbal health products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
          <Leaf className="w-8 h-8 text-secondary" />
        </div>
      </div>
      <div className="absolute bottom-32 right-32 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
          <Heart className="w-6 h-6 text-accent" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto section-padding">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-white font-medium">Dominic's Premium Natural Health Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            <span className="hero-text block text-gray-200/30">Jinja with Dominic</span>
            Transform Your Health Naturally
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Your trusted wellness partner. I'm Dominic, and I've dedicated my life to bringing you 
            the finest JINJA herbal extracts - proven, natural solutions for optimal health and vitality.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-white font-medium">100% Natural</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-white font-medium">Scientifically Proven</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-white font-medium">Premium Quality</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button className="btn-secondary group">
              Discover Our Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-secondary bg-transparent text-secondary hover:border-secondary hover:bg-secondary/10 transition-colors px-8 py-4 rounded-full">
              Learn More About JINJA
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;