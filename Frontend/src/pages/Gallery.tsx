import { Card } from "@/components/ui/card";
import { useState } from "react";
import { assets } from "../assets/assets.js";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null); // for modal

  const categories = [
    { id: "all", name: "All" },
    { id: "rooms", name: "Rooms" },
    { id: "common", name: "Common Areas" },
    { id: "facilities", name: "Facilities" },
    { id: "food", name: "Food" },
  ];

  const images = [
    {
      id: 1,
      category: "rooms",
      title: "Non-AC Room 1",
      desc: "Comfortable non-AC room with essential amenities and ample space.",
      img: assets.nonac1,
    },
    {
      id: 2,
      category: "rooms",
      title: "Non-AC Room 2",
      desc: "Well-ventilated non-AC accommodation designed for a relaxing stay.",
      img: assets.nonac2,
    },
    {
      id: 3,
      category: "rooms",
      title: "Non-AC Room 3",
      desc: "Spacious non-AC room with clean interiors and convenient storage.",
      img: assets.nonac3,
    },

    {
      id: 4,
      category: "common",
      title: "AC Room 4",
      desc: "Air-conditioned room area with comfortable seating, perfect for relaxation or group discussions.",
      img: assets.acroom,
    },
    {
      id: 5,
      category: "common",
      title: "Study Room",
      desc: "Quiet space for focused study sessions.",
      img: assets.studyroom,
    },

    {
      id: 6,
      category: "facilities",
      title: "Dining Hall",
      desc: "Spacious and hygienic dining area with a pleasant ambiance.",
      img: assets.dininghall,
    },
    {
      id: 7,
      category: "facilities",
      title: "Washroom",
      desc: "Clean, well-maintained, and hygienic washrooms equipped with modern fittings for your comfort and convenience.",
      img: assets.washroomroom,
    },

    {
      id: 8,
      category: "food",
      title: "Breakfast",
      desc: "Healthy start to your day with a balanced morning meal.",
      img: assets.breakfast,
    },
    {
      id: 9,
      category: "food",
      title: "Lunch Spread",
      desc: "Nutritious and fulfilling meal options for all tastes.",
      img: assets.lunch,
    },
    {
      id: 10,
      category: "food",
      title: "Dinner Spread",
      desc: "Wholesome and delicious dinner with a variety of nutritious options.",
      img: assets.dinner,
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a virtual tour of The Unique PG and see what makes us special
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                selectedCategory === category.id
                  ? "hero-gradient text-white shadow-soft"
                  : "bg-accent text-foreground hover:bg-accent/70"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="overflow-hidden shadow-card hover:scale-105 transition-smooth cursor-pointer"
            >
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                {image.img ? (
                  <img
                    src={image.img}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">📷</div>
                    <p className="text-sm text-muted-foreground">
                      Image placeholder
                    </p>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                <p className="text-muted-foreground text-sm">{image.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 shadow-card">
            <p className="text-muted-foreground">
              Want to see more?{" "}
              <a
                href="/contact"
                className="text-primary font-semibold hover:underline"
              >
                Schedule a visit
              </a>{" "}
              to tour our facilities in person!
            </p>
          </Card>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            className="relative bg-background rounded-xl shadow-xl max-w-3xl w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition"
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
