import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wifi, Utensils, Shield, Sparkles, Users, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    { icon: Wifi, title: "High-Speed Wi-Fi", desc: "24/7 unlimited internet" },
    { icon: Utensils, title: "Healthy Meals", desc: "3 meals daily with variety" },
    { icon: Shield, title: "24/7 Security", desc: "CCTV & security staff" },
    { icon: Sparkles, title: "Housekeeping", desc: "Daily cleaning service" },
    { icon: Users, title: "Community", desc: "Social events & networking" },
    { icon: Clock, title: "Flexible Timing", desc: "No strict curfews" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 86, 145, 0.75), rgba(33, 86, 145, 0.75)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to The Unique PG
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Near by madhuban police station (Jodhpur) - 342005
          </p>
          <p className="text-lg mb-10 max-w-xl mx-auto opacity-90 animate-fade-in">
            Premium accommodation for students seeking comfort, safety, and a vibrant community
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 animate-scale-in">
              Book Your Room Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose The Unique PG?</h2>
            <p className="text-xl text-muted-foreground">Everything you need for a comfortable student life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:scale-105 transition-smooth shadow-card">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make The Unique PG Your Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of happy students who have found their perfect accommodation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/listings">
              <Button variant="secondary" size="lg" className="text-lg">
                View Available Rooms
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="text-lg bg-white/20 hover:bg-white/30 text-white border-2 border-white"
              >
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
