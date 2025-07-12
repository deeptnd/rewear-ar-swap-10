
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Crown, 
  Heart, 
  Leaf, 
  Star, 
  Trophy, 
  Medal,
  Sparkles,
  Users,
  TrendingUp
} from "lucide-react";

const topSwappers = [
  {
    rank: 1,
    name: "Sophia Martinez",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=50&h=50&fit=crop&crop=face",
    swaps: 127,
    points: 4850,
    badge: "Eco Legend"
  },
  {
    rank: 2,
    name: "Emily Johnson", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    swaps: 119,
    points: 4720,
    badge: "Green Hero"
  },
  {
    rank: 3,
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    swaps: 103,
    points: 4350,
    badge: "Generous Giver"
  },
  {
    rank: 4,
    name: "Maria Rodriguez",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face",
    swaps: 89,
    points: 4180,
    badge: "Style Curator"
  },
  {
    rank: 5,
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    swaps: 76,
    points: 3950,
    badge: "Swap Master"
  }
];

const communityBadges = [
  {
    title: "Eco Hero",
    description: "Completed 50+ sustainable swaps",
    icon: Leaf,
    color: "text-success",
    bgColor: "bg-success/10",
    earned: true,
    rarity: "Epic"
  },
  {
    title: "Generous Giver",
    description: "Listed 25+ items for the community",
    icon: Heart,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    earned: true,
    rarity: "Rare"
  },
  {
    title: "Style Curator",
    description: "Received 100+ five-star ratings",
    icon: Star,
    color: "text-warning",
    bgColor: "bg-warning/10",
    earned: false,
    progress: 78,
    rarity: "Epic"
  },
  {
    title: "Community Champion",
    description: "Helped 200+ members find perfect swaps",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
    earned: false,
    progress: 34,
    rarity: "Legendary"
  },
  {
    title: "Trendsetter",
    description: "Your items get 90%+ like rate",
    icon: TrendingUp,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    earned: false,
    progress: 67,
    rarity: "Epic"
  },
  {
    title: "Swap Master",
    description: "Completed swaps with 95%+ success rate",
    icon: Trophy,
    color: "text-warning",
    bgColor: "bg-warning/10",
    earned: true,
    rarity: "Rare"
  }
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1: return <Crown className="w-5 h-5 text-yellow-500" />;
    case 2: return <Medal className="w-5 h-5 text-gray-400" />;
    case 3: return <Medal className="w-5 h-5 text-amber-600" />;
    default: return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  }
};

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'Legendary': return 'text-yellow-500 border-yellow-500 bg-yellow-500/10';
    case 'Epic': return 'text-purple-500 border-purple-500 bg-purple-500/10';
    case 'Rare': return 'text-primary border-primary bg-primary/10';
    default: return 'text-muted-foreground border-muted bg-muted/10';
  }
};

export const CommunityBadges = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Community Recognition
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Celebrate Our Champions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognize outstanding community members and earn badges for your sustainable fashion journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Swappers Leaderboard */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="mr-2 text-warning" />
                Top Swappers This Month
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topSwappers.map((user) => (
                <div 
                  key={user.rank}
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                    user.rank <= 3 
                      ? 'bg-gradient-to-r from-warning/10 to-success/10 border border-warning/20' 
                      : 'bg-muted/30 hover:bg-muted/50'
                  }`}
                >
                  {/* Rank */}
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    {getRankIcon(user.rank)}
                  </div>

                  {/* User Info */}
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{user.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{user.swaps} swaps</span>
                      <span>{user.points.toLocaleString()} points</span>
                    </div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {user.badge}
                    </Badge>
                  </div>

                  {/* Points */}
                  <div className="text-right">
                    <div className="text-lg font-bold text-success">
                      {user.points.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">points</div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 text-center">
                <Button variant="outline">View Full Leaderboard</Button>
              </div>
            </CardContent>
          </Card>

          {/* Community Badges */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Medal className="mr-2 text-primary" />
                Achievement Badges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {communityBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 ${
                      badge.earned 
                        ? `${badge.bgColor} border-opacity-50` 
                        : 'bg-muted/20 border-muted opacity-70'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      badge.earned ? badge.bgColor : 'bg-muted'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${badge.earned ? badge.color : 'text-muted-foreground'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{badge.title}</h4>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getRarityColor(badge.rarity)}`}
                        >
                          {badge.rarity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{badge.description}</p>
                      
                      {!badge.earned && badge.progress && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Progress</span>
                            <span>{badge.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${badge.color.replace('text-', 'bg-')}`}
                              style={{ width: `${badge.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {badge.earned && (
                      <div className="text-success">
                        <Trophy className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-eco text-primary-foreground shadow-glow max-w-3xl mx-auto">
          <CardContent className="p-8 text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">
              Join Our Amazing Community
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Start your sustainable fashion journey today and earn your first badge!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="earth" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Start Swapping
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
