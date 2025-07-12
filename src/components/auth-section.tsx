
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Lock, Upload, Heart, Leaf } from "lucide-react";

export const AuthSection = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate avatar upload - in real app would handle file upload
      setAvatarUrl("https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=100&h=100&fit=crop&crop=face");
    }
  };

  return (
    <section className="py-16 bg-gradient-earth">
      <div className="container mx-auto px-4 max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-success mr-2" />
            <Leaf className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome to ReWear
          </h2>
          <p className="text-muted-foreground">
            Join our sustainable fashion community
          </p>
        </div>

        <Card className="shadow-glow bg-background/95 backdrop-blur-sm">
          <Tabs defaultValue="login" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Login Tab */}
              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Label>
                  <Input 
                    id="login-email" 
                    type="email" 
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="login-password" className="flex items-center">
                    <Lock className="w-4 h-4 mr-2" />
                    Password
                  </Label>
                  <Input 
                    id="login-password" 
                    type="password" 
                    placeholder="••••••••"
                  />
                </div>

                <Button variant="eco" className="w-full">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>

                <div className="text-center">
                  <Button variant="link" className="text-sm text-muted-foreground">
                    Forgot your password?
                  </Button>
                </div>
              </TabsContent>

              {/* Signup Tab */}
              <TabsContent value="signup" className="space-y-4">
                {/* Avatar Upload */}
                <div className="text-center">
                  <div className="relative inline-block">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={avatarUrl} alt="Profile" />
                      <AvatarFallback className="text-2xl">
                        <User className="w-8 h-8" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-full bg-background"
                      >
                        <Upload className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Upload profile photo
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Sarah" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Chen" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Label>
                  <Input 
                    id="signup-email" 
                    type="email" 
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="flex items-center">
                    <Lock className="w-4 h-4 mr-2" />
                    Password
                  </Label>
                  <Input 
                    id="signup-password" 
                    type="password" 
                    placeholder="••••••••"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio (Optional)</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Tell us about your style and sustainability goals..."
                    className="min-h-[80px]"
                  />
                </div>

                <Button variant="eco" className="w-full">
                  <Heart className="w-4 h-4 mr-2" />
                  Join ReWear Community
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        {/* Benefits */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm font-medium text-foreground">Join 5,000+ sustainable fashion lovers</p>
          <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center">
              <Leaf className="w-3 h-3 mr-1 text-success" />
              Eco-friendly
            </span>
            <span className="flex items-center">
              <Heart className="w-3 h-3 mr-1 text-destructive" />
              Community-driven
            </span>
            <span className="flex items-center">
              <User className="w-3 h-3 mr-1 text-primary" />
              Free to join
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
