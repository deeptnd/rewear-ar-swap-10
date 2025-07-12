
import React from "react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Recycle, Leaf, Users } from "lucide-react";

const Leaderboard = () => {
  const topUsers = [
    {
      rank: 1,
      name: "Emma Rodriguez",
      ecoPoints: 2847,
      swapsCompleted: 23,
      carbonSaved: "127 kg",
      level: "Eco Champion",
      avatar: "ER",
    },
    {
      rank: 2,
      name: "Alex Chen",
      ecoPoints: 2654,
      swapsCompleted: 19,
      carbonSaved: "115 kg",
      level: "Green Guardian",
      avatar: "AC",
    },
    {
      rank: 3,
      name: "Sarah Johnson",
      ecoPoints: 2398,
      swapsCompleted: 18,
      carbonSaved: "98 kg",
      level: "Green Guardian",
      avatar: "SJ",
    },
    {
      rank: 4,
      name: "Michael Davis",
      ecoPoints: 2156,
      swapsCompleted: 16,
      carbonSaved: "89 kg",
      level: "Sustainability Star",
      avatar: "MD",
    },
    {
      rank: 5,
      name: "Lisa Torres",
      ecoPoints: 1987,
      swapsCompleted: 15,
      carbonSaved: "82 kg",
      level: "Sustainability Star",
      avatar: "LT",
    },
    {
      rank: 6,
      name: "David Wilson",
      ecoPoints: 1834,
      swapsCompleted: 14,
      carbonSaved: "76 kg",
      level: "Eco Enthusiast",
      avatar: "DW",
    },
    {
      rank: 7,
      name: "Jennifer Kim",
      ecoPoints: 1692,
      swapsCompleted: 12,
      carbonSaved: "68 kg",
      level: "Eco Enthusiast",
      avatar: "JK",
    },
    {
      rank: 8,
      name: "Ryan Martinez",
      ecoPoints: 1547,
      swapsCompleted: 11,
      carbonSaved: "61 kg",
      level: "Green Beginner",
      avatar: "RM",
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Eco Champion":
        return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white";
      case "Green Guardian":
        return "bg-gradient-to-r from-green-500 to-emerald-600 text-white";
      case "Sustainability Star":
        return "bg-gradient-to-r from-blue-500 to-cyan-600 text-white";
      case "Eco Enthusiast":
        return "bg-gradient-to-r from-purple-500 to-pink-600 text-white";
      case "Green Beginner":
        return "bg-gradient-to-r from-green-300 to-green-500 text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const communityStats = [
    {
      icon: Users,
      label: "Active Members",
      value: "12,847",
      color: "text-primary",
    },
    {
      icon: Recycle,
      label: "Total Swaps",
      value: "3,429",
      color: "text-success",
    },
    {
      icon: Leaf,
      label: "Carbon Saved",
      value: "18.2 tons",
      color: "text-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Community Leaderboard</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrate our most dedicated eco-warriors and see how you compare with the community.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            {communityStats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leaderboard */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Top Eco Champions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topUsers.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors hover:bg-muted/50 ${
                      user.rank <= 3 ? 'bg-gradient-to-r from-primary/5 to-success/5 border border-primary/20' : ''
                    }`}
                  >
                    <div className="flex items-center justify-center w-12">
                      {getRankIcon(user.rank)}
                    </div>
                    
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-foreground">{user.name}</h3>
                        <Badge className={getLevelColor(user.level)}>
                          {user.level}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span>{user.swapsCompleted} swaps</span>
                        <span>{user.carbonSaved} CO₂ saved</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xl font-bold text-success">
                        {user.ecoPoints.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">eco points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Your Position */}
          <Card className="max-w-4xl mx-auto mt-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12">
                    <span className="font-bold text-muted-foreground">#47</span>
                  </div>
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-muted text-muted-foreground font-semibold">
                      YU
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">Your Position</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>8 swaps</span>
                      <span>34 kg CO₂ saved</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-success">1,247</div>
                  <div className="text-sm text-muted-foreground">eco points</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
