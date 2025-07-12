import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Recycle, Camera, Trophy, Users, Leaf, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-eco overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Sustainable Fashion Community"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            <Leaf className="w-4 h-4 mr-2" />
            Revolutionizing Sustainable Fashion
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            ReWear
            <span className="block bg-gradient-to-r from-success to-primary-glow bg-clip-text text-transparent">
              Try. Swap. Thrive.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience clothes before you swap with AR try-on, earn eco-points for sustainability, 
            and join the world's most innovative fashion circular economy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="eco" size="lg" className="px-8 py-4 text-lg">
              <Camera className="mr-2" />
              Try AR Experience
            </Button>
            <Button variant="earth" size="lg" className="px-8 py-4 text-lg">
              <Recycle className="mr-2" />
              Start Swapping
            </Button>
          </div>

          {/* Impact Counter */}
          <div className="bg-background/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-primary-foreground/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2 animate-pulse-eco">
                  47,392
                </div>
                <div className="text-primary-foreground/80 text-sm">Items Swapped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-success-foreground mb-2 animate-pulse-eco">
                  23.6T
                </div>
                <div className="text-primary-foreground/80 text-sm">CO₂ Saved (kg)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2 animate-pulse-eco">
                  15,847
                </div>
                <div className="text-primary-foreground/80 text-sm">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2 animate-pulse-eco">
                  98%
                </div>
                <div className="text-primary-foreground/80 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-background/10 backdrop-blur-md rounded-xl p-6 border border-primary-foreground/20 hover:bg-background/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-6 h-6 text-success-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary-foreground mb-2">AR Try-On</h3>
            <p className="text-primary-foreground/80">See how clothes look on you before swapping with cutting-edge AR technology.</p>
          </div>

          <div className="bg-background/10 backdrop-blur-md rounded-xl p-6 border border-primary-foreground/20 hover:bg-background/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary-glow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary-foreground mb-2">Eco Gamification</h3>
            <p className="text-primary-foreground/80">Earn points, badges, and climb leaderboards for your sustainable choices.</p>
          </div>

          <div className="bg-background/10 backdrop-blur-md rounded-xl p-6 border border-primary-foreground/20 hover:bg-background/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-success-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary-foreground mb-2">Smart Matching</h3>
            <p className="text-primary-foreground/80">AI-powered recommendations find perfect swap partners based on your style.</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-success/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-glow/20 rounded-full animate-float hidden lg:block" style={{animationDelay: '1s'}} />
    </section>
  );
};