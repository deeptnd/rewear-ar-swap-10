
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Recycle, Upload, Leaf, Heart, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const featuredItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
    points: 45,
    condition: "Like New"
  },
  {
    id: 2,
    title: "Bohemian Maxi Dress",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
    points: 35,
    condition: "Excellent"
  },
  {
    id: 3,
    title: "Designer Wool Coat",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
    points: 80,
    condition: "Good"
  },
  {
    id: 4,
    title: "Classic White Sneakers",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
    points: 25,
    condition: "Very Good"
  }
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-earth overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Sustainable Fashion Community"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-6 py-3 text-sm bg-success/10 text-success border-success/20">
            <Leaf className="w-4 h-4 mr-2" />
            Sustainable Fashion Exchange
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Give Clothes a
            <span className="block bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
              Second Life
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Swap or redeem unused clothing with your community. 
            Join thousands making fashion more sustainable, one swap at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="eco" size="lg" className="px-8 py-4 text-lg group">
              <Recycle className="mr-2 group-hover:rotate-180 transition-transform duration-300" />
              Start Swapping
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="earth" size="lg" className="px-8 py-4 text-lg">
              <Upload className="mr-2" />
              List an Item
            </Button>
          </div>

          {/* Featured Items Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                Featured Items
              </Badge>
            </div>
            
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {featuredItems.map((item) => (
                  <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <Card className="group hover:shadow-card transition-all duration-300 hover:scale-[1.02] bg-background/90 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge 
                            variant="secondary" 
                            className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm"
                          >
                            {item.condition}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-success">
                              <Heart className="w-4 h-4 mr-1 fill-current" />
                              <span className="font-medium">{item.points} points</span>
                            </div>
                            <Button variant="ghost" size="sm" className="text-xs">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-background/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-foreground/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-success mb-2 animate-pulse-eco">
                12,847
              </div>
              <div className="text-foreground/70 text-sm">Items Swapped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-pulse-eco">
                8.9T
              </div>
              <div className="text-foreground/70 text-sm">Waste Saved (kg)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-success mb-2 animate-pulse-eco">
                5,643
              </div>
              <div className="text-foreground/70 text-sm">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-pulse-eco">
                96%
              </div>
              <div className="text-foreground/70 text-sm">Happy Swappers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-success/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rounded-full animate-float hidden lg:block" style={{animationDelay: '1s'}} />
    </section>
  );
};
