
import React from "react";
import { Navigation } from "@/components/navigation";
import { Gamification } from "@/components/gamification";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Your Eco Journey</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your sustainable fashion impact and unlock achievements as you build a greener wardrobe.
            </p>
          </div>
          <Gamification />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
