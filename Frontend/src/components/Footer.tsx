import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center text-white font-bold
               text-xl">
                U
              </div>
              <span className="text-xl font-bold">The Unique PG</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Premium student accommodation near by madhuban police station (Jodhpur). Safe, comfortable, and home-like living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </Link>
              <Link to="/listings" className="block text-muted-foreground hover:text-primary transition-smooth">
                PG Listings
              </Link>
              <Link to="/amenities" className="block text-muted-foreground hover:text-primary transition-smooth">
                Amenities
              </Link>
              <Link to="/faq" className="block text-muted-foreground hover:text-primary transition-smooth">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                <Phone className="w-4 h-4 mr-2" />
                +91 8955455348
              </a>
              <a href="mailto:info@theuniquepg.com" className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="w-4 h-4 mr-2" />
                vsingh91317@gmail.com
              </a>
              <div className="flex items-start text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Near by madhuban police station (Jodhpur) - 342005</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-white transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-white transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-white transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Unique PG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
