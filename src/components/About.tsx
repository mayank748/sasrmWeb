import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Users, 
  Globe, 
  TrendingUp,
  Award,
  Lightbulb
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Pursuing the highest standards in everything we do across all industries."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering new solutions and technologies that shape the future."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships and fostering teamwork for mutual success."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating positive change and sustainable solutions worldwide."
    }
  ];

  const stats = [
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: Users, number: "10K+", label: "Team Members" },
    { icon: Globe, number: "50+", label: "Countries" },
    { icon: TrendingUp, number: "$5B+", label: "Revenue" }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-corporate-blue bg-clip-text text-transparent">
              About SASRM
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diversified corporation leading innovation across multiple industries with a commitment to excellence and sustainable growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Building the Future Through Diversified Excellence
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since our founding, SASRM has grown from a single-industry company to a 
              diversified corporation operating across six dynamic sectors. Our journey represents 
              a commitment to innovation, quality, and sustainable growth.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From water packaging to drone delivery, from premium footwear to solar installations, 
              we bring the same level of excellence and innovation to every industry we enter. 
              Our success is built on understanding that true value comes from solving real 
              problems with innovative solutions.
            </p>

            <div className="pt-4">
              <Button variant="corporate" size="lg" className="px-8 py-4 text-lg h-auto">
                Our Story
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center p-6 bg-card border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-6 bg-card border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-corporate-blue rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-foreground">{value.title}</h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;