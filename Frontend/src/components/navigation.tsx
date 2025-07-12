
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
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClasses = (path: string) => {
    return `flex items-center gap-2 ${isActive(path) ? 'text-primary font-medium' : 'text-foreground hover:text-primary'} transition-colors`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-eco rounded-lg flex items-center justify-center mr-3">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">ReWear</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/discover" className={getLinkClasses('/discover')}>
              <Search className="w-4 h-4" />
              Discover
            </Link>
            <Link to="/virtual-try-on" className={getLinkClasses('/virtual-try-on')}>
              <Camera className="w-4 h-4" />
              AR Try-On
            </Link>
            <Link to="/my-swaps" className={getLinkClasses('/my-swaps')}>
              <Recycle className="w-4 h-4" />
              My Swaps
            </Link>
            <Link to="/leaderboard" className={getLinkClasses('/leaderboard')}>
              <Trophy className="w-4 h-4" />
              Leaderboard
              <Badge variant="destructive" className="ml-1 px-1 min-w-5 h-5 text-xs">
                3
              </Badge>
            </Link>
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
              <Link 
                to="/discover" 
                className={`w-full justify-start ${getLinkClasses('/discover')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="ghost" className="w-full justify-start">
                  <Search className="w-4 h-4 mr-2" />
                  Discover
                </Button>
              </Link>
              <Link 
                to="/virtual-try-on" 
                className={`w-full justify-start ${getLinkClasses('/virtual-try-on')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="ghost" className="w-full justify-start">
                  <Camera className="w-4 h-4 mr-2" />
                  AR Try-On
                </Button>
              </Link>
              <Link 
                to="/my-swaps" 
                className={`w-full justify-start ${getLinkClasses('/my-swaps')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="ghost" className="w-full justify-start">
                  <Recycle className="w-4 h-4 mr-2" />
                  My Swaps
                </Button>
              </Link>
              <Link 
                to="/leaderboard" 
                className={`w-full justify-start ${getLinkClasses('/leaderboard')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="ghost" className="w-full justify-start">
                  <Trophy className="w-4 h-4 mr-2" />
                  Leaderboard
                </Button>
              </Link>
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
