import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, TrendingUp, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

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
                Meet Dominic - Your Wellness Expert
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="hero-text">Passionate About</span>
                <br />
                <span className="text-foreground">Your Health Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Hi, I'm Dominic, founder of Multistream TM Limited and your dedicated partner in natural wellness. 
                With years of experience in herbal medicine, I personally ensure every JINJA product meets 
                the highest standards of quality and effectiveness.
              </p>
            </div>

            {/* Personal Mission */}
            <div className="wellness-card">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Personal Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                I founded this company with a simple belief: everyone deserves access to premium, 
                natural health solutions. Through JINJA herbal extracts and personalized wellness guidance, 
                I'm here to help you achieve optimal health while building sustainable financial opportunities 
                for our community.
              </p>
            </div>

            {/* Personal Approach */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why Choose Jinja with Dominic:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Personally Curated Products",
                  "One-on-One Wellness Consultation", 
                  "Proven Results & Testimonials",
                  "Ongoing Health Support"
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
                Chat with Dominic
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Success Stories
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
                      src={heroImage}
                      alt="Natural wellness and herbal health products"
                      className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-success-foreground" />
                    </div>
                  </div>
                  <div>
                    <Badge className="bg-accent/10 text-accent mb-2">Dominic - Wellness Expert</Badge>
                    <h4 className="text-lg font-semibold text-foreground">Herbal Medicine Specialist</h4>
                    <p className="text-sm text-muted-foreground">
                      "Transforming lives through natural healing, one person at a time"
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