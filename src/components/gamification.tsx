import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Award, 
  Target, 
  Recycle, 
  Leaf, 
  Star, 
  Crown,
  Medal,
  TreePine,
  Heart
} from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "First Swap",
    description: "Complete your first clothing swap",
    icon: Recycle,
    earned: true,
    points: 50,
    rarity: "common"
  },
  {
    id: 2,
    title: "Eco Warrior",
    description: "Save 100kg of CO₂ through swaps",
    icon: Leaf,
    earned: true,
    points: 200,
    rarity: "rare"
  },
  {
    id: 3,
    title: "Style Curator",
    description: "Receive 50 five-star ratings",
    icon: Star,
    earned: false,
    points: 500,
    rarity: "epic",
    progress: 32
  },
  {
    id: 4,
    title: "Community Champion",
    description: "Help 100 members find perfect swaps",
    icon: Heart,
    earned: false,
    points: 1000,
    rarity: "legendary",
    progress: 67
  }
];

const leaderboard = [
  {
    rank: 1,
    name: "Sophia Martinez",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=40&h=40&fit=crop&crop=face",
    points: 4850,
    swaps: 127,
    co2Saved: 234.5
  },
  {
    rank: 2,
    name: "Emily Johnson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    points: 4720,
    swaps: 119,
    co2Saved: 228.3
  },
  {
    rank: 3,
    name: "You",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    points: 4520,
    swaps: 98,
    co2Saved: 187.2,
    isCurrentUser: true
  },
  {
    rank: 4,
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    points: 4350,
    swaps: 103,
    co2Saved: 201.7
  },
  {
    rank: 5,
    name: "Maria Rodriguez",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
    points: 4180,
    swaps: 89,
    co2Saved: 156.8
  }
];

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'common': return 'text-muted-foreground border-muted';
    case 'rare': return 'text-primary border-primary';
    case 'epic': return 'text-purple-500 border-purple-500';
    case 'legendary': return 'text-yellow-500 border-yellow-500';
    default: return 'text-muted-foreground border-muted';
  }
};

export const Gamification = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Trophy className="w-4 h-4 mr-2" />
            Gamified Sustainability
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Level Up Your Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Earn points, unlock achievements, and compete with friends while saving the planet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Progress */}
          <div className="space-y-6">
            {/* Level Progress */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Your Progress</span>
                  <Badge variant="secondary" className="text-sm bg-success text-success-foreground">
                    <Crown className="w-4 h-4 mr-1" />
                    Level 12
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Level Progress</span>
                    <span className="text-sm text-muted-foreground">2,420 / 3,000 XP</span>
                  </div>
                  <Progress value={80} className="h-3" />
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success mb-1">1,247</div>
                    <div className="text-sm text-muted-foreground">Eco Points</div>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">47</div>
                    <div className="text-sm text-muted-foreground">Items Swapped</div>
                  </div>
                  <div className="p-4 bg-warning/10 rounded-lg">
                    <div className="text-2xl font-bold text-warning mb-1">89.2</div>
                    <div className="text-sm text-muted-foreground">kg CO₂ Saved</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Achievements</span>
                  <Badge variant="outline" className="text-sm">
                    2 / 4 Unlocked
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div 
                      key={achievement.id}
                      className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 ${
                        achievement.earned 
                          ? `bg-${achievement.rarity === 'legendary' ? 'yellow' : achievement.rarity === 'epic' ? 'purple' : achievement.rarity === 'rare' ? 'primary' : 'muted'}/10 ${getRarityColor(achievement.rarity)}` 
                          : 'bg-muted/30 border-muted opacity-60'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        achievement.earned 
                          ? achievement.rarity === 'legendary' ? 'bg-yellow-500' : achievement.rarity === 'epic' ? 'bg-purple-500' : achievement.rarity === 'rare' ? 'bg-primary' : 'bg-success'
                          : 'bg-muted'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${achievement.earned ? 'text-white' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        {!achievement.earned && achievement.progress && (
                          <div className="mt-2">
                            <Progress value={achievement.progress} className="h-2" />
                            <span className="text-xs text-muted-foreground mt-1 block">
                              {achievement.progress}% Complete
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-success">+{achievement.points}</div>
                        <div className="text-xs text-muted-foreground capitalize">{achievement.rarity}</div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Global Leaderboard</span>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {leaderboard.map((user) => (
                <div 
                  key={user.rank}
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                    user.isCurrentUser 
                      ? 'bg-gradient-eco border border-primary/20 shadow-eco' 
                      : 'bg-muted/30 hover:bg-muted/50'
                  }`}
                >
                  {/* Rank */}
                  <div className="w-8 h-8 flex items-center justify-center mr-4">
                    {user.rank <= 3 ? (
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        user.rank === 1 ? 'bg-yellow-500' : user.rank === 2 ? 'bg-gray-400' : 'bg-amber-600'
                      }`}>
                        {user.rank === 1 ? (
                          <Crown className="w-4 h-4 text-white" />
                        ) : (
                          <Medal className="w-4 h-4 text-white" />
                        )}
                      </div>
                    ) : (
                      <span className="text-lg font-bold text-muted-foreground">#{user.rank}</span>
                    )}
                  </div>

                  {/* User Info */}
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <h4 className={`font-semibold ${user.isCurrentUser ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {user.name}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className={user.isCurrentUser ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                        {user.swaps} swaps
                      </span>
                      <span className={user.isCurrentUser ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                        {user.co2Saved}kg CO₂
                      </span>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="text-right">
                    <div className={`text-lg font-bold ${user.isCurrentUser ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {user.points.toLocaleString()}
                    </div>
                    <div className={`text-sm ${user.isCurrentUser ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      points
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Challenge CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-earth border border-border/50 shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <TreePine className="w-16 h-16 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Weekly Challenge: Green Week
              </h3>
              <p className="text-muted-foreground mb-6">
                Swap 5 items this week and earn 2x eco points! Only 3 days left.
              </p>
              <div className="mb-6">
                <Progress value={60} className="h-3 mb-2" />
                <span className="text-sm text-muted-foreground">3 / 5 swaps completed</span>
              </div>
              <Button variant="default" size="lg" className="bg-success hover:bg-success/90 text-success-foreground">
                <Target className="w-4 h-4 mr-2" />
                Accept Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};