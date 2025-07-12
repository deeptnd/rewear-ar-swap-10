
import React from "react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Package, CheckCircle, XCircle, ArrowRight } from "lucide-react";

const MySwaps = () => {
  const swapHistory = [
    {
      id: 1,
      itemGiven: "Vintage Denim Jacket",
      itemReceived: "Bohemian Maxi Dress",
      status: "completed",
      date: "2024-01-15",
      ecoPoints: 150,
      partner: "Sarah M.",
    },
    {
      id: 2,
      itemGiven: "Designer Heels",
      itemReceived: "Casual Sneakers",
      status: "pending",
      date: "2024-01-10",
      ecoPoints: 120,
      partner: "Emma L.",
    },
    {
      id: 3,
      itemGiven: "Silk Blouse",
      itemReceived: "Cotton Cardigan",
      status: "in-transit",
      date: "2024-01-08",
      ecoPoints: 100,
      partner: "Lisa K.",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      case "in-transit":
        return <Package className="h-4 w-4 text-primary" />;
      default:
        return <XCircle className="h-4 w-4 text-destructive" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success";
      case "pending":
        return "bg-warning/10 text-warning";
      case "in-transit":
        return "bg-primary/10 text-primary";
      default:
        return "bg-destructive/10 text-destructive";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">My Swaps</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your clothing exchanges and see the positive environmental impact you're making.
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {swapHistory.map((swap) => (
              <Card key={swap.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Swap #{swap.id}</CardTitle>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(swap.status)}
                      <Badge className={getStatusColor(swap.status)}>
                        {swap.status.replace("-", " ")}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{swap.itemGiven}</p>
                      <p className="text-sm text-muted-foreground">Your item</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground mx-4" />
                    <div className="flex-1 text-right">
                      <p className="font-medium text-foreground">{swap.itemReceived}</p>
                      <p className="text-sm text-muted-foreground">Received item</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div>
                      <span>Partner: {swap.partner}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span>{swap.date}</span>
                      <div className="flex items-center gap-1 text-success">
                        <span>+{swap.ecoPoints} pts</span>
                      </div>
                    </div>
                  </div>
                  
                  {swap.status === "pending" && (
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline">
                        Cancel Swap
                      </Button>
                      <Button size="sm">
                        Contact Partner
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySwaps;
