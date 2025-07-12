import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-corporate-blue/5 rounded-full blur-3xl animate-float delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Diversified Excellence Across Industries
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up delay-200">
            <span className="bg-gradient-to-r from-foreground to-corporate-light bg-clip-text text-transparent">
              Building Tomorrow's
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-corporate-blue bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
            From innovative water packaging to cutting-edge drone delivery, solar installations to premium footwear - 
            we're pioneering solutions across six dynamic industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in delay-700">
            <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto hover:scale-105 transition-transform duration-300">
              Explore Our Industries
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto hover:scale-105 transition-transform duration-300">
              <Play className="mr-2" size={20} />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in delay-1000 hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-muted-foreground">Industries</div>
            </div>
            <div className="text-center animate-fade-in delay-1100 hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center animate-fade-in delay-1200 hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-1">1M+</div>
              <div className="text-sm text-muted-foreground">Customers</div>
            </div>
            <div className="text-center animate-fade-in delay-1300 hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;