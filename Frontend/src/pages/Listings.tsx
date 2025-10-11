import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Wifi, Utensils, Wind, Sparkles } from "lucide-react";

const Listings = () => {
  const [selectedType, setSelectedType] = useState("all");

  const rooms = [
    {
      id: 1,
      type: "nonac",
      title: "Non-AC Room 1",
      price: "₹5,500",
      features: ["Fan", "Common Bathroom", "Study Table", "Wardrobe"],
    },
    {
      id: 2,
      type: "nonac",
      title: "Non-AC Room 2",
      price: "₹5,500",
      features: ["Fan", "Common Bathroom", "Study Table", "Wardrobe"],
    },
    {
      id: 3,
      type: "nonac",
      title: "Non-AC Room 3",
      price: "₹5,500",
      features: ["Fan", "Common Bathroom", "Study Table", "Wardrobe"],
    },
    {
      id: 4,
      type: "ac",
      title: "AC Room",
      price: "₹6,500",
      features: ["AC", "Attached Bathroom", "Study Table", "Wardrobe"],
    },
  ];

  const filteredRooms =
    selectedType === "all"
      ? rooms
      : rooms.filter((room) => room.type === selectedType);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Available Rooms</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comfortable and affordable accommodation for boys — choose between
            Non-AC and AC rooms.
          </p>
        </div>

        {/* Filter */}
        <Card className="p-6 mb-12 shadow-card">
          <div>
            <label className="block text-sm font-medium mb-3">
              Room Type
            </label>
            <div className="flex gap-3">
              <Button
                variant={selectedType === "all" ? "default" : "outline"}
                onClick={() => setSelectedType("all")}
                className="flex-1"
              >
                All
              </Button>
              <Button
                variant={selectedType === "nonac" ? "default" : "outline"}
                onClick={() => setSelectedType("nonac")}
                className="flex-1"
              >
                <Users className="w-4 h-4 mr-1" />
                Non-AC
              </Button>
              <Button
                variant={selectedType === "ac" ? "default" : "outline"}
                onClick={() => setSelectedType("ac")}
                className="flex-1"
              >
                <Wind className="w-4 h-4 mr-1" />
                AC
              </Button>
            </div>
          </div>
        </Card>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <Card
              key={room.id}
              className="overflow-hidden shadow-card hover:scale-105 transition-smooth"
            >
              <div
                className={`h-48 flex items-center justify-center text-6xl text-white ${
                  room.type === "ac"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                    : "bg-gradient-to-r from-amber-500 to-yellow-400"
                }`}
              >
                {room.type === "ac" ? "❄️" : "🛏️"}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{room.title}</h3>
                  <span className="text-2xl font-bold text-primary">
                    {room.price}/mo
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  {room.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center mr-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button variant="default" className="w-full">
                    Book Now
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12">
          <Card className="p-6 text-center shadow-card bg-accent/50">
            <p className="text-lg mb-2">
              <strong>All rooms include:</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
              <span className="flex items-center">
                <Wifi className="w-4 h-4 mr-1" /> High-Speed Wi-Fi
              </span>
              <span className="flex items-center">
                <Utensils className="w-4 h-4 mr-1" /> 3 Meals Daily
              </span>
              <span className="flex items-center">
                <Sparkles className="w-4 h-4 mr-1" /> Housekeeping
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Listings;
