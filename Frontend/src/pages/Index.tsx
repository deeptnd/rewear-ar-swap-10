
import React from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { Marketplace } from "@/components/marketplace";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <Marketplace />
      </div>
    </div>
  );
};

export default Index;
