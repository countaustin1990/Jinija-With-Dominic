import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, Heart, Star } from "lucide-react";
import productsImage from "@/assets/products-collection.jpg";

const ProductShowcase = () => {
  const benefits = [
    { icon: Shield, text: "Natural Detoxifier & Immune Booster" },
    { icon: Heart, text: "Promotes Heart & Liver Health" },
    { icon: Zap, text: "Rich in Antioxidants" },
    { icon: Star, text: "Fights Bacteria, Fungi & Viruses" },
    { icon: Check, text: "Regulates Blood Pressure & Sugar" },
    { icon: Heart, text: "Enhances Male & Female Fertility" }
  ];

  const keyFeatures = [
    "Treats Malaria & Typhoid Fever",
    "Helps with Weight Loss & Digestion", 
    "Arthritis Relief & Inflammation Fighter",
    "Improves Vision & Respiratory Health",
    "Cancer Prevention Properties",
    "Supports Kidney Function"
  ];

  return (
    <section className="section-padding bg-gradient-wellness">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">JINJA Herbal Extract</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="hero-text">The Power of Nature</span>
            <br />
            <span className="text-foreground">in Every Drop</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the comprehensive health benefits of our premium JINJA herbal extracts, 
            carefully crafted from the finest natural ingredients to support your wellness journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="relative animate-slide-up">
            <div className="relative group">
              <img 
                src={productsImage}
                alt="JINJA Herbal Extract Products Collection"
                className="w-full rounded-3xl shadow-strong hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-secondary rounded-2xl p-4 shadow-glow animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-foreground">100%</div>
                <div className="text-sm text-secondary-foreground/80">Natural</div>
              </div>
            </div>
          </div>

          {/* Benefits Content */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Comprehensive Health Benefits
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our JINJA herbal extracts work synergistically to provide holistic health support, 
                addressing multiple wellness needs with one powerful natural solution.
              </p>
            </div>

            {/* Primary Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="product-benefit group"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional Features */}
            <div className="wellness-card">
              <h4 className="text-xl font-semibold mb-4 text-foreground">Additional Health Support:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/+2349029054789" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary">
                Shop JINJA Products Now
                <Zap className="ml-2 w-4 h-4" />
              </Button>
              </a>
              <Link to="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Missing import
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export default ProductShowcase;
