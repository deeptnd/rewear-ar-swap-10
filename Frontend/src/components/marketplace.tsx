import { useState } from "react";
import { ItemCard } from "@/components/item-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, SlidersHorizontal, Sparkles } from "lucide-react";

// Mock data - in real app this would come from API
const mockItems = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    brand: "Levi's",
    size: "M",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    owner: "Sarah Chen",
    ownerAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=40&h=40&fit=crop&crop=face",
    ecoPoints: 85,
    rating: 4.8,
    isLiked: true
  },
  {
    id: "2", 
    title: "Sustainable Cotton Dress",
    brand: "Reformation",
    size: "S",
    condition: "Excellent",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    owner: "Maria Garcia",
    ownerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    ecoPoints: 120,
    rating: 4.9,
    isLiked: false
  },
  {
    id: "3",
    title: "Designer Wool Blazer",
    brand: "Armani",
    size: "L",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    owner: "Alex Johnson",
    ownerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    ecoPoints: 200,
    rating: 4.7,
    isLiked: false
  },
  {
    id: "4",
    title: "Bohemian Maxi Skirt",
    brand: "Free People",
    size: "M",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13c44?w=400&h=400&fit=crop",
    owner: "Emma Wilson",
    ownerAvatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face",
    ecoPoints: 95,
    rating: 4.6,
    isLiked: true
  },
  {
    id: "5",
    title: "Classic White Sneakers",
    brand: "Adidas",
    size: "9",
    condition: "Very Good",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    owner: "David Kim",
    ownerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    ecoPoints: 75,
    rating: 4.5,
    isLiked: false
  },
  {
    id: "6",
    title: "Silk Evening Gown",
    brand: "Versace",
    size: "S",
    condition: "Excellent",
    image: "https://images.unsplash.com/photo-1566479179817-c1a76c6166e8?w=400&h=400&fit=crop",
    owner: "Isabella Rodriguez",
    ownerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
    ecoPoints: 350,
    rating: 5.0,
    isLiked: true
  }
];

export const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Badge variant="secondary" className="px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Matching
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Discover Amazing Swaps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find perfect pieces that match your style and size with our intelligent recommendation engine
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl border border-border p-6 mb-8 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search items, brands, styles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="tops">Tops</SelectItem>
                <SelectItem value="bottoms">Bottoms</SelectItem>
                <SelectItem value="dresses">Dresses</SelectItem>
                <SelectItem value="outerwear">Outerwear</SelectItem>
                <SelectItem value="shoes">Shoes</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>

            {/* Size */}
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger>
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sizes</SelectItem>
                <SelectItem value="xs">XS</SelectItem>
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="l">L</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="points">Eco Points</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="brand">Brand</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <div className="text-sm text-muted-foreground">
              Showing {mockItems.length} items
            </div>
            <Button variant="ghost" size="sm">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Items
          </Button>
        </div>
      </div>
    </section>
  );
};