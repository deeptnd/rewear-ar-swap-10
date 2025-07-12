
import React from "react";
import { Navigation } from "@/components/navigation";
import { VirtualTryout } from "@/components/virtual-tryout";

const VirtualTryOn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Virtual Try-On Studio</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience clothes before you swap! Use our AR technology to see how items look on you.
            </p>
          </div>
          <VirtualTryout />
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;
