import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  User, 
  Trophy, 
  Camera, 
  Recycle, 
  Menu, 
  X,
  Leaf,
  Bell
} from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-eco rounded-lg flex items-center justify-center mr-3">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">ReWear</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-foreground">
              <Search className="w-4 h-4 mr-2" />
              Discover
            </Button>
            <Button variant="ghost" className="text-foreground">
              <Camera className="w-4 h-4 mr-2" />
              AR Try-On
            </Button>
            <Button variant="ghost" className="text-foreground">
              <Recycle className="w-4 h-4 mr-2" />
              My Swaps
            </Button>
            <Button variant="ghost" className="relative text-foreground">
              <Trophy className="w-4 h-4 mr-2" />
              Leaderboard
              <Badge variant="destructive" className="absolute -top-1 -right-1 px-1 min-w-5 h-5 text-xs">
                3
              </Badge>
            </Button>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Eco Points Display */}
            <div className="hidden sm:flex items-center bg-success/10 rounded-full px-3 py-1">
              <Recycle className="w-4 h-4 text-success mr-2" />
              <span className="text-sm font-medium text-success">1,247 pts</span>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 px-1 min-w-5 h-5 text-xs">
                5
              </Badge>
            </Button>

            {/* Add Item */}
            <Button variant="eco" className="hidden sm:flex">
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                <Search className="w-4 h-4 mr-2" />
                Discover
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Camera className="w-4 h-4 mr-2" />
                AR Try-On
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Recycle className="w-4 h-4 mr-2" />
                My Swaps
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Trophy className="w-4 h-4 mr-2" />
                Leaderboard
              </Button>
              <Button variant="eco" className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
              
              {/* Mobile Eco Points */}
              <div className="flex items-center justify-center bg-success/10 rounded-full px-3 py-2 mt-4">
                <Recycle className="w-4 h-4 text-success mr-2" />
                <span className="text-sm font-medium text-success">1,247 Eco Points</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};