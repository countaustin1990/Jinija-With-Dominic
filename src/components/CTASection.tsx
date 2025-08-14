import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+234 (0) 123 456 7890",
      action: "Start Your Wellness Journey"
    },
    {
      icon: Mail,
      label: "Email Us", 
      value: "info@multistreamhealth.com",
      action: "Get Product Information"
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Lagos, Nigeria",
      action: "Find Local Distributors"
    },
    {
      icon: Clock,
      label: "Support Hours",
      value: "Mon-Fri 9AM-6PM",
      action: "24/7 Online Support"
    }
  ];

  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform
            <br />
            <span className="text-secondary">Your Health?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join thousands of satisfied customers who have experienced the life-changing benefits 
            of JINJA herbal extracts. Start your wellness journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-secondary group text-lg px-12 py-6">
              Order JINJA Now
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-12 py-6 rounded-full"
            >
              Become a Distributor
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>Nationwide Delivery</span>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                  <method.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-white font-semibold mb-2">{method.label}</h3>
                <p className="text-white/80 text-sm mb-3">{method.value}</p>
                <p className="text-secondary text-xs font-medium">{method.action}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Special Launch Offer - Limited Time!
            </h3>
            <p className="text-white/90 mb-6">
              Get 20% off your first JINJA herbal extract order plus free nationwide delivery. 
              Offer valid for new customers only.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-secondary">
                Claim Your Discount
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10"
              >
                Terms & Conditions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;