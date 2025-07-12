
import React from "react";
import { Navigation } from "@/components/navigation";
import { AdminPanel } from "@/components/admin-panel";

const AdminPanelPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Admin Dashboard</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manage the ReWear platform, monitor user activities, and maintain quality standards.
            </p>
          </div>
          <AdminPanel />
        </div>
      </div>
    </div>
  );
};

export default AdminPanelPage;
