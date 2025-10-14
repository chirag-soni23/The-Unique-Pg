import { Card } from "@/components/ui/card";
import { 
  Wifi,
  Utensils, 
  Shield, 
  Sparkles, 
  Wind, 
  Droplet,
  Dumbbell,
  Book,
  Car,
  Tv,
  Laptop,
  Clock
} from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: Wifi,
      title: "High-Speed Wi-Fi",
      description: "24/7 unlimited high-speed internet connectivity throughout the building",
      included: true,
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "3 healthy meals daily with variety - breakfast, lunch, and dinner",
      included: true,
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "CCTV surveillance and trained security personnel round the clock",
      included: true,
    },
    {
      icon: Sparkles,
      title: "Housekeeping",
      description: "Daily room cleaning and linen change services",
      included: true,
    },
    {
      icon: Wind,
      title: "AC Rooms",
      description: "Air-conditioned rooms available in premium categories",
      included: false,
    },
    {
      icon: Droplet,
      title: "Water Purifier",
      description: "RO purified drinking water available on all floors",
      included: true,
    },
    {
      icon: Dumbbell,
      title: "Gym Facility",
      description: "Well-equipped fitness center for daily workouts",
      included: true,
    },
    {
      icon: Book,
      title: "Study Room",
      description: "Quiet, well-lit study areas for focused learning",
      included: true,
    },
    {
      icon: Car,
      title: "Parking Space",
      description: "Secure parking for bikes and cars",
      included: true,
    },
    {
      icon: Tv,
      title: "Recreation Room",
      description: "Common area with TV, games, and entertainment",
      included: true,
    },
    {
      icon: Laptop,
      title: "Power Backup",
      description: "Uninterrupted power supply with backup generators",
      included: true,
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "No strict curfews - suitable for students with varying schedules",
      included: true,
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Amenities & Facilities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for a comfortable and productive student life
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:scale-105 transition-smooth"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center">
                    <amenity.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold">{amenity.title}</h3>
                    {amenity.included && (
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        Included
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{amenity.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-4">Laundry Services</h2>
            <p className="text-muted-foreground mb-4">
              Professional laundry services available at nominal charges. Washing machines available for self-service as well.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                Pickup and delivery service
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                Quick turnaround time
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                Affordable pricing
              </li>
            </ul>
          </Card>

          <Card className="p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-4">Maintenance Support</h2>
            <p className="text-muted-foreground mb-4">
              24/7 maintenance support for any issues in your room or common areas.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                Quick response time
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                Skilled technicians
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                No additional charges
              </li>
            </ul>
          </Card>
        </div>

        {/* Note */}
        <div className="mt-12 hero-gradient rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">More Than Just Amenities</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We focus on creating a supportive community where students feel at home, 
            make lifelong friends, and have everything they need to succeed academically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
