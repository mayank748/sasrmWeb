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

const Industries = () => {
  const industries = [
    {
      icon: Droplets,
      title: "Water Packaging",
      description: "Premium water bottling and packaging solutions with sustainable practices and cutting-edge purification technology.",
      features: ["Advanced Filtration", "Eco-Friendly Packaging", "Global Distribution"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Footprints,
      title: "Premium Footwear",
      description: "Crafting high-quality shoes that combine comfort, style, and durability for modern lifestyles.",
      features: ["Premium Materials", "Ergonomic Design", "Fashion Forward"],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Cigarette,
      title: "Fumestick Solutions",
      description: "Innovative smoking alternatives and premium products with focus on quality and user experience.",
      features: ["Premium Quality", "Safety Standards", "Modern Design"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Monitor,
      title: "Software Development",
      description: "Custom software solutions, enterprise applications, and digital transformation services.",
      features: ["Enterprise Solutions", "Cloud Computing", "AI Integration"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Plane,
      title: "Drone Delivery",
      description: "Next-generation autonomous delivery systems revolutionizing logistics and last-mile delivery.",
      features: ["Autonomous Flight", "Real-time Tracking", "Rapid Delivery"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Solar Installation",
      description: "Comprehensive solar energy solutions from consultation to installation and maintenance.",
      features: ["Clean Energy", "Expert Installation", "24/7 Monitoring"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border/50 overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${industry.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="corporate" size="lg" className="px-8 py-4 text-lg h-auto">
            Partner With Us
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;