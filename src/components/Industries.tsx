import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Zap, 
  Plane, 
  Monitor, 
  Footprints, 
  Cigarette,
  ArrowRight 
} from "lucide-react";
import waterPackaging from "@/assets/water-packaging.jpg";
import footwear from "@/assets/footwear.jpg";
import fumestick from "@/assets/fumestick.jpeg";
import software from "@/assets/software.jpg";
import droneDelivery from "@/assets/drone-delivery.jpg";
import solarInstallation from "@/assets/solar-installation.jpg";

const Industries = () => {
  const industries = [
    {
      icon: Droplets,
      title: "Water Packaging",
      description: "Premium water bottling and packaging solutions with sustainable practices and cutting-edge purification technology.",
      features: ["Advanced Filtration", "Eco-Friendly Packaging", "Global Distribution"],
      color: "from-blue-500 to-cyan-500",
      image: waterPackaging
    },
    {
      icon: Footprints,
      title: "Premium Footwear",
      description: "Crafting high-quality shoes that combine comfort, style, and durability for modern lifestyles.",
      features: ["Premium Materials", "Ergonomic Design", "Fashion Forward"],
      color: "from-amber-500 to-orange-500",
      image: footwear
    },
    {
      icon: Cigarette,
      title: "Fumestick Solutions",
      description: "Innovative smoking alternatives and premium products with focus on quality and user experience.",
      features: ["Premium Quality", "Safety Standards", "Modern Design"],
      color: "from-purple-500 to-pink-500",
      image: fumestick
    },
    {
      icon: Monitor,
      title: "Software Development",
      description: "Custom software solutions, enterprise applications, and digital transformation services.",
      features: ["Enterprise Solutions", "Cloud Computing", "AI Integration"],
      color: "from-green-500 to-teal-500",
      image: software
    },
    {
      icon: Plane,
      title: "Drone Delivery",
      description: "Next-generation autonomous delivery systems revolutionizing logistics and last-mile delivery.",
      features: ["Autonomous Flight", "Real-time Tracking", "Rapid Delivery"],
      color: "from-indigo-500 to-blue-500",
      image: droneDelivery
    },
    {
      icon: Zap,
      title: "Solar Installation",
      description: "Comprehensive solar energy solutions from consultation to installation and maintenance.",
      features: ["Clean Energy", "Expert Installation", "24/7 Monitoring"],
      color: "from-yellow-500 to-orange-500",
      image: solarInstallation
    }
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-corporate-blue bg-clip-text text-transparent">
              Our Industries
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diversified excellence across six dynamic sectors, each powered by innovation and commitment to quality.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={industry.title}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 overflow-hidden animate-slide-up hover:scale-105`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br ${industry.color} p-2 group-hover:scale-110 transition-transform duration-300 animate-float`}>
                  <industry.icon className="w-full h-full text-white" />
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {industry.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className="flex items-center text-sm text-muted-foreground animate-fade-in"
                      style={{ animationDelay: `${(index * 150) + (featureIndex * 50)}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 animate-pulse" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in delay-1000">
          <Button variant="corporate" size="lg" className="px-8 py-4 text-lg h-auto hover:scale-105 transition-transform duration-300 animate-glow">
            Partner With Us
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;