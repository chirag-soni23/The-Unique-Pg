import { Card } from "@/components/ui/card";
import { Heart, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About The Unique PG</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just accommodation - we're building a community where students thrive
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <Card className="p-8 md:p-12 shadow-card">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                The Unique PG was founded with a simple vision: to provide students near by madhuban police station (Jodhpur) - 342005 with a 
                safe, comfortable, and inspiring place to call home during their academic journey.
              </p>
              <p>
                We understand the challenges students face when moving away from home for the first time. 
                That's why we've created more than just a place to stay – we've built a supportive community 
                that helps students focus on their studies while enjoying their independence.
              </p>
              <p>
                Located conveniently near by madhuban police station (Jodhpur) - 342005, The Unique PG offers modern amenities, nutritious meals, 
                and a welcoming environment where students from diverse backgrounds come together to create 
                lasting friendships and memories.
              </p>
            </div>
          </Card>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-card hover:scale-105 transition-smooth">
              <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Student-Centric</h3>
              <p className="text-muted-foreground">
                Every decision we make prioritizes student comfort, safety, and well-being. Your success is our success.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:scale-105 transition-smooth">
              <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quality Focused</h3>
              <p className="text-muted-foreground">
                From nutritious meals to clean facilities, we maintain the highest standards in everything we provide.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:scale-105 transition-smooth">
              <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Trusted by Parents</h3>
              <p className="text-muted-foreground">
                With 24/7 security, regular communication, and transparent policies, parents trust us with their children.
              </p>
            </Card>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-16 hero-gradient rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Happy Students</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-xl opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl opacity-90">Safety Record</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.8/5</div>
              <div className="text-xl opacity-90">Student Rating</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
