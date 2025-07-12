
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Droplets, 
  Zap, 
  TreePine, 
  Recycle, 
  Award,
  TrendingUp,
  Globe
} from "lucide-react";

const impactStats = [
  {
    icon: Recycle,
    title: "Textile Waste Saved",
    value: "5.2",
    unit: "kg",
    description: "Clothes diverted from landfills",
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    icon: Droplets,
    title: "Water Conserved",
    value: "1,847",
    unit: "L",
    description: "Water saved by reusing clothes",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Zap,
    title: "Energy Saved",
    value: "23.4",
    unit: "kWh",
    description: "Energy not used in production",
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    icon: TreePine,
    title: "CO₂ Reduced",
    value: "18.9",
    unit: "kg",
    description: "Carbon emissions prevented",
    color: "text-success",
    bgColor: "bg-success/10"
  }
];

const milestones = [
  { title: "First Swap", value: 1, completed: true },
  { title: "Eco Warrior", value: 5, completed: true },
  { title: "Green Champion", value: 10, completed: false, current: 7 },
  { title: "Sustainability Hero", value: 25, completed: false, current: 7 }
];

const communityImpact = {
  totalMembers: 5643,
  itemsSwapped: 12847,
  wasteReduced: 8947,
  co2Saved: 23567
};

export const SustainabilityTracker = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-success/10 text-success border-success/20">
            <Globe className="w-4 h-4 mr-2" />
            Environmental Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Sustainability Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track the positive environmental impact you're making through conscious fashion choices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Impact Stats */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="mr-2 text-success" />
                  Your Environmental Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {impactStats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className={`w-16 h-16 rounded-full ${stat.bgColor} flex items-center justify-center mx-auto mb-4`}>
                          <IconComponent className={`w-8 h-8 ${stat.color}`} />
                        </div>
                        <div className="mb-2">
                          <span className={`text-3xl font-bold ${stat.color}`}>
                            {stat.value}
                          </span>
                          <span className="text-xl text-muted-foreground ml-1">
                            {stat.unit}
                          </span>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {stat.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {stat.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Progress Milestones */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 text-warning" />
                  Sustainability Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">
                        {milestone.title}
                      </span>
                      <Badge 
                        variant={milestone.completed ? "default" : "outline"}
                        className={milestone.completed ? "bg-success text-success-foreground" : ""}
                      >
                        {milestone.completed ? "Completed" : `${milestone.current}/${milestone.value}`}
                      </Badge>
                    </div>
                    <Progress 
                      value={milestone.completed ? 100 : (milestone.current! / milestone.value) * 100}
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Community Impact */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 text-primary" />
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {communityImpact.totalMembers.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Active Community Members
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-success mb-1">
                    {communityImpact.itemsSwapped.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Items Successfully Swapped
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-warning mb-1">
                    {communityImpact.wasteReduced.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    kg of Waste Diverted
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-success mb-1">
                    {(communityImpact.co2Saved / 1000).toFixed(1)}T
                  </div>
                  <div className="text-sm text-muted-foreground">
                    CO₂ Emissions Prevented
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Environmental Quote */}
            <Card className="shadow-card bg-gradient-earth border border-border/50">
              <CardContent className="p-6 text-center">
                <TreePine className="w-12 h-12 text-success mx-auto mb-4" />
                <blockquote className="text-foreground font-medium mb-4 italic">
                  "Every piece of clothing you swap prevents approximately 2.1kg of CO₂ from entering our atmosphere."
                </blockquote>
                <cite className="text-sm text-muted-foreground">
                  - Environmental Fashion Council
                </cite>
              </CardContent>
            </Card>

            {/* Weekly Challenge */}
            <Card className="shadow-card bg-gradient-success">
              <CardContent className="p-6 text-center">
                <Award className="w-10 h-10 text-success-foreground mx-auto mb-3" />
                <h4 className="font-bold text-success-foreground mb-2">
                  This Week's Challenge
                </h4>
                <p className="text-success-foreground/90 text-sm mb-4">
                  Swap 2 more items to unlock the "Green Week" badge and earn 50 bonus points!
                </p>
                <Progress value={60} className="h-2 bg-success-foreground/20" />
                <p className="text-xs text-success-foreground/80 mt-2">
                  3 of 5 swaps completed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
