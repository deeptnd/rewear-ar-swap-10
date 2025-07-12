
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Users, 
  Heart, 
  RefreshCw, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const swapSteps = [
  {
    icon: Upload,
    title: "List Your Item",
    description: "Upload photos and details of clothes you want to swap or give away",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Connect & Browse",
    description: "Discover items from your community and connect with other swappers",
    color: "text-success"
  },
  {
    icon: RefreshCw,
    title: "Make a Swap",
    description: "Request swaps directly or use points to claim items you love",
    color: "text-warning"
  },
  {
    icon: CheckCircle,
    title: "Complete Exchange",
    description: "Meet safely, exchange items, and rate your experience",
    color: "text-success"
  }
];

const swapTypes = [
  {
    icon: RefreshCw,
    title: "Direct Swap",
    description: "Trade item for item with another community member",
    benefits: ["No points needed", "Instant exchange", "Build connections"],
    color: "bg-primary/10 border-primary/20"
  },
  {
    icon: Heart,
    title: "Point System",
    description: "Earn points by giving away items, spend points to claim others",
    benefits: ["Flexible timing", "Earn by giving", "Fair value system"],
    color: "bg-success/10 border-success/20"
  }
];

export const SwapFlow = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple & Sustainable Swapping
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community-driven platform where every swap helps reduce textile waste 
            and gives clothes a second life
          </p>
        </div>

        {/* Swap Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            The Swap Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {swapSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="shadow-card hover:shadow-glow transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-full bg-background shadow-sm flex items-center justify-center mx-auto mb-4 ${step.color}`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow connector for desktop */}
                  {index < swapSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                  
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Swap Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Choose Your Swap Style
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {swapTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className={`shadow-card hover:shadow-glow transition-all duration-300 border-2 ${type.color}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-background shadow-sm flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {type.title}
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          {type.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-eco text-primary-foreground shadow-glow max-w-3xl mx-auto">
          <CardContent className="p-8 text-center">
            <Upload className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Swapping?
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Earn points by listing items you no longer wear and discover amazing pieces from your community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="earth" size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Upload className="mr-2" />
                List Your First Item
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Browse Items
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
