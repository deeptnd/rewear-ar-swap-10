import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Camera, Star, Recycle, User } from "lucide-react";

interface ItemCardProps {
  item: {
    id: string;
    title: string;
    brand: string;
    size: string;
    condition: string;
    image: string;
    owner: string;
    ownerAvatar: string;
    ecoPoints: number;
    rating: number;
    isLiked?: boolean;
  };
}

export const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:scale-[1.02] overflow-hidden">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-64 object-cover"
        />
        
        {/* AR Preview Button */}
        <Button 
          variant="eco" 
          size="sm" 
          className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Camera className="w-4 h-4 mr-1" />
          AR Try
        </Button>
        
        {/* Like Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm ${item.isLiked ? 'text-destructive' : 'text-muted-foreground'}`}
        >
          <Heart className={`w-4 h-4 ${item.isLiked ? 'fill-current' : ''}`} />
        </Button>
        
        {/* Condition Badge */}
        <Badge 
          variant="secondary" 
          className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm"
        >
          {item.condition}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-foreground truncate">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.brand} • Size {item.size}</p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-warning text-warning mr-1" />
            {item.rating}
          </div>
        </div>
        
        {/* Owner Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img 
              src={item.ownerAvatar} 
              alt={item.owner}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-sm text-muted-foreground">{item.owner}</span>
          </div>
          <div className="flex items-center text-success">
            <Recycle className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">{item.ecoPoints} pts</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button className="flex-1" variant="default">
            <Recycle className="w-4 h-4 mr-2" />
            Swap Request
          </Button>
          <Button variant="outline" size="icon">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};