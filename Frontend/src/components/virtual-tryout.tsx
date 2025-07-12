import React, { useState, useRef } from 'react';
import { Camera, Upload, RotateCcw, Download, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ClothItem {
  id: string;
  name: string;
  image: string;
  category: 'tops' | 'bottoms' | 'dresses' | 'accessories';
  color: string;
}

const mockClothes: ClothItem[] = [
  { id: '1', name: 'Vintage Denim Jacket', image: '/placeholder.svg', category: 'tops', color: 'Blue' },
  { id: '2', name: 'Silk Maxi Dress', image: '/placeholder.svg', category: 'dresses', color: 'Green' },
  { id: '3', name: 'High-waist Jeans', image: '/placeholder.svg', category: 'bottoms', color: 'Black' },
  { id: '4', name: 'Vintage Scarf', image: '/placeholder.svg', category: 'accessories', color: 'Red' },
];

export const VirtualTryout = () => {
  const [selectedCloth, setSelectedCloth] = useState<ClothItem | null>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [isAIProcessing, setIsAIProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const processAITryout = () => {
    setIsAIProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsAIProcessing(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5" />
              Your Photo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {!userPhoto ? (
                <div 
                  className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium">Upload your photo</p>
                  <p className="text-sm text-muted-foreground">Click to select or drag & drop</p>
                </div>
              ) : (
                <div className="relative">
                  <img 
                    src={userPhoto} 
                    alt="User" 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => setUserPhoto(null)}
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>
          </CardContent>
        </Card>

        {/* AR Preview Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              AI Try-On Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              {userPhoto && selectedCloth ? (
                <div className="relative w-full h-full">
                  <img 
                    src={userPhoto} 
                    alt="User with clothing" 
                    className="w-full h-full object-cover"
                  />
                  {/* Simulated AR overlay */}
                  <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                    {isAIProcessing ? (
                      <div className="text-center">
                        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                        <p className="text-sm">AI Processing...</p>
                      </div>
                    ) : (
                      <Badge variant="secondary" className="text-sm">
                        {selectedCloth.name} overlay applied
                      </Badge>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">
                    {!userPhoto ? "Upload a photo first" : "Select a clothing item to try on"}
                  </p>
                </div>
              )}
            </div>
            
            {userPhoto && selectedCloth && !isAIProcessing && (
              <div className="mt-4 flex gap-2">
                <Button onClick={processAITryout} className="flex-1">
                  <Zap className="h-4 w-4 mr-2" />
                  Generate AI Try-On
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Clothing Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Available Clothes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockClothes.map((cloth) => (
              <div
                key={cloth.id}
                className={`border rounded-lg p-3 cursor-pointer transition-all hover:shadow-md ${
                  selectedCloth?.id === cloth.id ? 'border-primary bg-primary/5' : 'border-border'
                }`}
                onClick={() => setSelectedCloth(cloth)}
              >
                <div className="aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center">
                  <img 
                    src={cloth.image} 
                    alt={cloth.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="font-medium text-sm">{cloth.name}</h4>
                <div className="flex items-center justify-between mt-1">
                  <Badge variant="outline" className="text-xs">
                    {cloth.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{cloth.color}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};