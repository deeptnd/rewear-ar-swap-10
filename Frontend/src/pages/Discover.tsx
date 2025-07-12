import React, { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Search, Filter, MapPin } from "lucide-react";

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const featuredItems = [
    {
      id: 1,
      title: "Vintage Leather Jacket",
      description: "Classic brown leather jacket from the 80s",
      category: "Outerwear",
      size: "M",
      condition: "Excellent",
      location: "New York, NY",
      owner: "Alex Chen",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
      ecoPoints: 200,
      likes: 24,
    },
    {
      id: 2,
      title: "Bohemian Maxi Dress",
      description: "Flowy summer dress with floral pattern",
      category: "Dresses",
      size: "S",
      condition: "Good",
      location: "Los Angeles, CA",
      owner: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
      ecoPoints: 150,
      likes: 18,
    },
    {
      id: 3,
      title: "Designer Blazer",
      description: "Professional navy blazer, perfect for work",
      category: "Formal",
      size: "L",
      condition: "Like New",
      location: "Chicago, IL",
      owner: "Michael Davis",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop",
      ecoPoints: 180,
      likes: 31,
    },
    {
      id: 4,
      title: "Casual Denim Jeans",
      description: "Comfortable straight-leg jeans",
      category: "Bottoms",
      size: "32W",
      condition: "Good",
      location: "Austin, TX",
      owner: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
      ecoPoints: 120,
      likes: 12,
    },
    {
      id: 5,
      title: "Vintage Band T-Shirt",
      description: "Rare Pink Floyd concert tee from 1990",
      category: "Tops",
      size: "M",
      condition: "Fair",
      location: "Seattle, WA",
      owner: "David Rock",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      ecoPoints: 100,
      likes: 45,
    },
    {
      id: 6,
      title: "Summer Sandals",
      description: "Comfortable leather sandals for warm weather",
      category: "Shoes",
      size: "8",
      condition: "Good",
      location: "Miami, FL",
      owner: "Lisa Torres",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop",
      ecoPoints: 80,
      likes: 19,
    },
  ];

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Like New":
        return "bg-success/10 text-success";
      case "Excellent":
        return "bg-primary/10 text-primary";
      case "Good":
        return "bg-warning/10 text-warning";
      case "Fair":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Discover Fashion</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore unique clothing items from our community. Find your next favorite piece while helping the environment.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="tops">Tops</SelectItem>
                <SelectItem value="bottoms">Bottoms</SelectItem>
                <SelectItem value="dresses">Dresses</SelectItem>
                <SelectItem value="outerwear">Outerwear</SelectItem>
                <SelectItem value="shoes">Shoes</SelectItem>
                <SelectItem value="formal">Formal</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm text-foreground">
                    {item.ecoPoints} pts
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <Badge className={getConditionColor(item.condition)}>
                      {item.condition}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span>Size: {item.size}</span>
                    <span>Category: {item.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-medium">
                        {item.owner.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium">{item.owner}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Heart className="h-3 w-3" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="eco">
                    Request Swap
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
