
import React, { useState } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { Marketplace } from "@/components/marketplace";
import { UploadItem } from "@/components/upload-item";
import { UserDashboard } from "@/components/user-dashboard";
import { SwapFlow } from "@/components/swap-flow";
import { SustainabilityTracker } from "@/components/sustainability-tracker";
import { CommunityBadges } from "@/components/community-badges";
import { AuthSection } from "@/components/auth-section";
import { Gamification } from "@/components/gamification";
import { VirtualTryout } from "@/components/virtual-tryout";
import { AdminPanel } from "@/components/admin-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingBag, 
  Upload, 
  User, 
  Recycle, 
  Leaf, 
  Users, 
  LogIn,
  Camera,
  Trophy,
  Settings
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("browse");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Always visible */}
      <HeroSection />
      
      {/* Main Tab Interface */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="browse" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Browse</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              <span className="hidden sm:inline">Upload</span>
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="how-it-works" className="flex items-center gap-2">
              <Recycle className="h-4 w-4" />
              <span className="hidden sm:inline">How It Works</span>
            </TabsTrigger>
            <TabsTrigger value="impact" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              <span className="hidden sm:inline">Impact</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Community</span>
            </TabsTrigger>
            <TabsTrigger value="auth" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Login</span>
            </TabsTrigger>
            <TabsTrigger value="extras" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">More</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            <Marketplace />
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <UploadItem />
          </TabsContent>

          <TabsContent value="dashboard" className="space-y-6">
            <UserDashboard />
          </TabsContent>

          <TabsContent value="how-it-works" className="space-y-6">
            <SwapFlow />
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <SustainabilityTracker />
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <CommunityBadges />
          </TabsContent>

          <TabsContent value="auth" className="space-y-6">
            <AuthSection />
          </TabsContent>

          <TabsContent value="extras" className="space-y-6">
            {/* Additional Features */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Camera className="mr-2 text-primary" />
                  Virtual Try-On
                </h3>
                <VirtualTryout />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Trophy className="mr-2 text-warning" />
                  Achievements
                </h3>
                <Gamification />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Settings className="mr-2 text-muted-foreground" />
                  Admin Panel
                </h3>
                <AdminPanel />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
