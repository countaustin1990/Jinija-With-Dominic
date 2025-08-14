import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, TrendingUp, MapPin } from "lucide-react";
import teamExecutiveImage from "@/assets/team-executive.jpg";

const TeamSection = () => {
  const achievements = [
    { icon: Users, label: "Wellness Consultations", value: "5,000+" },
    { icon: Award, label: "Health Transformations", value: "2,500+" },
    { icon: TrendingUp, label: "Customer Satisfaction", value: "98%" },
    { icon: MapPin, label: "Distribution Network", value: "50+ Cities" }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-6">
                Leadership & Excellence
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="hero-text">Dedicated to Your</span>
                <br />
                <span className="text-foreground">Health & Success</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Multistream TM Limited, we're committed to revolutionizing health and wellness 
                through premium natural products and comprehensive support systems.
              </p>
            </div>

            {/* Company Mission */}
            <div className="wellness-card">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a new indigenous direct selling company, we provide holistic solutions 
                that combine herbal products, personal care, and online services into one 
                comprehensive wellness hub. Our goal is to help you achieve optimal health 
                and create sustainable financial opportunities.
              </p>
            </div>

            {/* What We Offer */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What We Offer:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Premium Wellness Products",
                  "Quality Consumables",
                  "Professional Services", 
                  "Wealth Building Opportunities"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Join Our Network
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn About Opportunities
              </Button>
            </div>
          </div>

          {/* Team & Stats */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Executive Profile */}
            <Card className="wellness-card border-0 shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img 
                      src={teamExecutiveImage}
                      alt="Team Executive - Multistream Health Care"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-success-foreground" />
                    </div>
                  </div>
                  <div>
                    <Badge className="bg-accent/10 text-accent mb-2">Team Executive</Badge>
                    <h4 className="text-lg font-semibold text-foreground">Health & Wellness Leader</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicated to transforming lives through natural health solutions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="wellness-card border-0 text-center group"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="wellness-card bg-gradient-primary text-primary-foreground">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2">Join Thousands of Satisfied Customers</h4>
                <p className="text-primary-foreground/90 mb-4">
                  Experience the difference that premium natural health products can make in your life
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-xs text-secondary-foreground">★</span>
                    </div>
                  ))}
                  <span className="ml-2 text-primary-foreground/90">4.9/5 Customer Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;