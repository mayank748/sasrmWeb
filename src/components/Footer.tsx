import { 
  Droplets, 
  Zap, 
  Plane, 
  Monitor, 
  Footprints, 
  Cigarette,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from "lucide-react";

const Footer = () => {
  const industries = [
    { name: "Water Packaging", icon: Droplets },
    { name: "Premium Footwear", icon: Footprints },
    { name: "Fumestick Solutions", icon: Cigarette },
    { name: "Software Development", icon: Monitor },
    { name: "Drone Delivery", icon: Plane },
    { name: "Solar Installation", icon: Zap }
  ];

  const quickLinks = [
    "About Us", "Careers", "Investors", "News", "Sustainability", "Innovation"
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" }
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-corporate-blue bg-clip-text text-transparent mb-4">
              SASRM
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A diversified corporation pioneering innovation across six dynamic industries, 
              committed to excellence and sustainable growth.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Our Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <a 
                    href="#industries" 
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <industry.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-muted-foreground">mayank.singh@sasrm.com</div>
                  <div className="text-sm text-muted-foreground">info@sasrm.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-muted-foreground">+91 (750) 353-727</div>
                  <div className="text-sm text-muted-foreground">24/7 Support</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-muted-foreground">U-61/15,U-block,Sector 24</div>
                  <div className="text-sm text-muted-foreground">Gurugram,Haryana,India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 SASRM. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;