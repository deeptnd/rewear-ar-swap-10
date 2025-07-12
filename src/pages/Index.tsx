import React, { useState } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { Marketplace } from "@/components/marketplace";
import { Gamification } from "@/components/gamification";
import { VirtualTryout } from "@/components/virtual-tryout";
import { AdminPanel } from "@/components/admin-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, ShoppingBag, Trophy, Settings } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("marketplace");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Always visible */}
      <HeroSection />
      
      {/* Main Tab Interface */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="marketplace" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Marketplace
            </TabsTrigger>
            <TabsTrigger value="tryout" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              Virtual Try-On
            </TabsTrigger>
            <TabsTrigger value="gamification" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Admin
            </TabsTrigger>
          </TabsList>

          <TabsContent value="marketplace" className="space-y-6">
            <Marketplace />
          </TabsContent>

          <TabsContent value="tryout" className="space-y-6">
            <VirtualTryout />
          </TabsContent>

          <TabsContent value="gamification" className="space-y-6">
            <Gamification />
          </TabsContent>

          <TabsContent value="admin" className="space-y-6">
            <AdminPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
