import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  Globe
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "mayank.singh@sasrm.com",
      subdetails: "info@sasrm.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 (750) 353-727",
      subdetails: "+91 (750) 353-727"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "U-61/15,U- block,Sector 24",
      subdetails: "Gurugram,Haryana,India,122002"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      subdetails: "Sat - Sun: 10:00 AM - 4:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-corporate-blue bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to partner with us? Let's discuss how we can help drive your business forward across any of our industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border/50">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Company
                  </label>
                  <Input 
                    placeholder="Your Company" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Industry of Interest
                  </label>
                  <select className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:border-primary">
                    <option value="">Select an industry</option>
                    <option value="water">Water Packaging</option>
                    <option value="footwear">Premium Footwear</option>
                    <option value="fumestick">Fumestick Solutions</option>
                    <option value="software">Software Development</option>
                    <option value="drone">Drone Delivery</option>
                    <option value="solar">Solar Installation</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project or inquiry..."
                    className="bg-background border-border focus:border-primary min-h-[120px]"
                  />
                </div>

                <Button variant="corporate" size="lg" className="w-full text-lg py-4 h-auto">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to help you explore opportunities across our diverse portfolio of industries. 
                Reach out through any of these channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="p-6 bg-card border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-sm text-muted-foreground">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subdetails}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Global Presence */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-corporate-blue/5 border-primary/20">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Global Presence</h4>
                    <p className="text-sm text-muted-foreground">Operating in 50+ countries worldwide</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  With offices and operations across six continents, we're always close to our clients and partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;