
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, X, Camera, Plus, Recycle, Heart } from "lucide-react";

const clothingTypes = ["Top", "Bottom", "Dress", "Outerwear", "Shoes", "Accessories"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const conditions = ["Like New", "Excellent", "Very Good", "Good", "Fair"];
const popularTags = ["Boho", "Formal", "Casual", "Vintage", "Designer", "Sustainable", "Handmade", "Summer", "Winter"];

export const UploadItem = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [listingType, setListingType] = useState<"swap" | "points">("swap");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Simulate image upload - in real app would handle file upload
      const newImages = Array.from(files).map((file, index) => 
        `https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop&${index}`
      );
      setImages(prev => [...prev, ...newImages].slice(0, 5)); // Max 5 images
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            List Your Item
          </h2>
          <p className="text-xl text-muted-foreground">
            Give your clothes a second life and earn points or find perfect swaps
          </p>
        </div>

        <Card className="shadow-card bg-background">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Upload className="mr-2 text-primary" />
              Item Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Image Upload */}
            <div>
              <Label className="text-base font-medium mb-4 block">Photos (up to 5)</Label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={image} 
                      alt={`Upload ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeImage(index)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
                {images.length < 5 && (
                  <div className="relative">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="w-full h-32 border-2 border-dashed border-muted-foreground/30 rounded-lg flex flex-col items-center justify-center hover:border-primary transition-colors bg-muted/20">
                      <Camera className="w-6 h-6 text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground">Add Photo</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="title">Item Title</Label>
                <Input id="title" placeholder="e.g. Vintage Denim Jacket" />
              </div>
              <div>
                <Label htmlFor="type">Clothing Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {clothingTypes.map(type => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Describe the item, its history, and why you're sharing it..."
                className="min-h-[100px]"
              />
            </div>

            {/* Size and Condition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="size">Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map(size => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="condition">Condition</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {conditions.map(condition => (
                      <SelectItem key={condition} value={condition.toLowerCase().replace(' ', '-')}>
                        {condition}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tags */}
            <div>
              <Label className="text-base font-medium mb-4 block">Tags</Label>
              <div className="flex flex-wrap gap-2">
                {popularTags.map(tag => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                    onClick={() => toggleTag(tag)}
                  >
                    {selectedTags.includes(tag) && <Plus className="w-3 h-3 mr-1 rotate-45" />}
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Listing Type */}
            <div>
              <Label className="text-base font-medium mb-4 block">Listing Type</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card 
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                    listingType === "swap" ? "ring-2 ring-primary bg-primary/5" : ""
                  }`}
                  onClick={() => setListingType("swap")}
                >
                  <CardContent className="p-4 text-center">
                    <Recycle className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground mb-1">Available for Swap</h3>
                    <p className="text-sm text-muted-foreground">
                      Trade directly with other members
                    </p>
                  </CardContent>
                </Card>

                <Card 
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                    listingType === "points" ? "ring-2 ring-primary bg-primary/5" : ""
                  }`}
                  onClick={() => setListingType("points")}
                >
                  <CardContent className="p-4 text-center">
                    <Heart className="w-8 h-8 text-success mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground mb-1">Redeem via Points</h3>
                    <p className="text-sm text-muted-foreground">
                      Set a point value for your item
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button 
                variant="eco" 
                size="lg" 
                className="w-full text-lg py-6"
              >
                <Upload className="mr-2" />
                List My Item
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-3">
                By listing, you agree to our community guidelines and terms of service
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
