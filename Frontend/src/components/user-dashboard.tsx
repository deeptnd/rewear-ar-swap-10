
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Heart, 
  Package, 
  RefreshCw, 
  History, 
  Edit3, 
  Star,
  CheckCircle,
  Clock,
  X
} from "lucide-react";

const userProfile = {
  name: "Sarah Chen",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=100&h=100&fit=crop&crop=face",
  bio: "Sustainable fashion enthusiast who loves giving clothes a second life. Always looking for unique vintage pieces!",
  points: 1247,
  itemsListed: 23,
  swapsCompleted: 18,
  memberSince: "March 2024"
};

const myItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop",
    status: "active",
    views: 45,
    likes: 12,
    type: "swap"
  },
  {
    id: 2,
    title: "Summer Maxi Dress",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop",
    status: "swapped",
    views: 38,
    likes: 8,
    type: "points",
    points: 35
  }
];

const swapRequests = [
  {
    id: 1,
    type: "incoming",
    user: "Emma Wilson",
    userAvatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=50&h=50&fit=crop&crop=face",
    item: "Vintage Denim Jacket",
    theirItem: "Silk Blouse",
    status: "pending",
    date: "2 hours ago"
  },
  {
    id: 2,
    type: "outgoing",
    user: "Alex Johnson",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    item: "Designer Blazer",
    theirItem: "Summer Maxi Dress",
    status: "accepted",
    date: "1 day ago"
  }
];

const swapHistory = [
  {
    id: 1,
    partner: "Maria Garcia",
    partnerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    myItem: "Cotton Dress",
    theirItem: "Wool Sweater",
    date: "5 days ago",
    rating: 5
  },
  {
    id: 2,
    partner: "David Kim",
    partnerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    myItem: "Casual Jeans",
    theirItem: "Button-up Shirt",
    date: "2 weeks ago",
    rating: 5
  }
];

export const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("items");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "swapped": return "bg-muted text-muted-foreground";
      case "pending": return "bg-warning text-warning-foreground";
      case "accepted": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <Clock className="w-3 h-3" />;
      case "swapped": return <CheckCircle className="w-3 h-3" />;
      case "pending": return <RefreshCw className="w-3 h-3" />;
      case "accepted": return <CheckCircle className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Profile Header */}
        <Card className="shadow-card mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                  <AvatarFallback className="text-2xl">SC</AvatarFallback>
                </Avatar>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-background border-2"
                >
                  <Edit3 className="w-3 h-3" />
                </Button>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{userProfile.name}</h1>
                    <p className="text-muted-foreground">Member since {userProfile.memberSince}</p>
                  </div>
                  <Button variant="outline">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                
                <p className="text-foreground mb-6">{userProfile.bio}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success mb-1">{userProfile.points}</div>
                    <div className="text-sm text-muted-foreground">Points</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{userProfile.itemsListed}</div>
                    <div className="text-sm text-muted-foreground">Items Listed</div>
                  </div>
                  <div className="text-center p-4 bg-warning/10 rounded-lg">
                    <div className="text-2xl font-bold text-warning mb-1">{userProfile.swapsCompleted}</div>
                    <div className="text-sm text-muted-foreground">Swaps Done</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-foreground mb-1">4.9</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="items" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              My Items
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Swap Requests
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              History
            </TabsTrigger>
          </TabsList>

          {/* My Items Tab */}
          <TabsContent value="items" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myItems.map((item) => (
                <Card key={item.id} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge 
                        className={`absolute top-2 left-2 ${getStatusColor(item.status)}`}
                      >
                        {getStatusIcon(item.status)}
                        <span className="ml-1 capitalize">{item.status}</span>
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span>{item.views} views</span>
                        <span className="flex items-center">
                          <Heart className="w-3 h-3 mr-1" />
                          {item.likes}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Swap Requests Tab */}
          <TabsContent value="requests" className="space-y-6">
            {swapRequests.map((request) => (
              <Card key={request.id} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={request.userAvatar} alt={request.user} />
                        <AvatarFallback>{request.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {request.type === "incoming" ? "Incoming" : "Outgoing"} Swap Request
                        </h3>
                        <p className="text-muted-foreground">
                          {request.user} wants to swap their "{request.theirItem}" for your "{request.item}"
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">{request.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {request.status === "pending" && request.type === "incoming" && (
                        <>
                          <Button variant="eco" size="sm">Accept</Button>
                          <Button variant="outline" size="sm">Decline</Button>
                        </>
                      )}
                      {request.status === "accepted" && (
                        <Badge className="bg-success text-success-foreground">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Accepted
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            {swapHistory.map((swap) => (
              <Card key={swap.id} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={swap.partnerAvatar} alt={swap.partner} />
                        <AvatarFallback>{swap.partner.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground">Swap with {swap.partner}</h3>
                        <p className="text-muted-foreground">
                          You gave: "{swap.myItem}" • You received: "{swap.theirItem}"
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">{swap.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < swap.rating ? "fill-warning text-warning" : "text-muted-foreground"
                            }`} 
                          />
                        ))}
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
