import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, CheckCircle, Calendar } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah O.",
      location: "Lagos, Nigeria",
      condition: "Chronic Fatigue",
      testimonial: "Working with Dominic changed my life. His JINJA herbal extracts restored my energy levels completely. I feel 10 years younger!",
      rating: 5,
      timeframe: "3 months"
    },
    {
      name: "Michael A.", 
      location: "Abuja, Nigeria",
      condition: "High Blood Pressure",
      testimonial: "Dominic's personal guidance and JINJA products helped me normalize my blood pressure naturally. My doctor was amazed at the results.",
      rating: 5,
      timeframe: "2 months"
    },
    {
      name: "Grace K.",
      location: "Port Harcourt, Nigeria", 
      condition: "Digestive Issues",
      testimonial: "After years of digestive problems, Dominic's herbal solutions gave me relief. His caring approach makes all the difference.",
      rating: 5,
      timeframe: "6 weeks"
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: "Personalized consultation with Dominic" },
    { icon: Calendar, text: "Ongoing support throughout your journey" },
    { icon: Star, text: "Premium quality JINJA herbal extracts" },
    { icon: Quote, text: "Proven results from real customers" }
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-6">
            Real Stories, Real Results
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="hero-text">Success Stories</span>
            <br />
            <span className="text-foreground">from Jinja with Dominic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how Dominic's personalized approach and premium JINJA herbal extracts 
            have transformed lives across Nigeria.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="wellness-card group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.timeframe}
                    </Badge>
                  </div>
                  <div className="mt-2">
                    <Badge className="bg-success/10 text-success text-xs">
                      {testimonial.condition}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Why People Choose Jinja with Dominic
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              It's not just about the products - it's about the personal care, 
              expertise, and dedication that Dominic brings to every client relationship.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="wellness-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Lives Transformed</div>
              </CardContent>
            </Card>
            <Card className="wellness-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
            <Card className="wellness-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="wellness-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;