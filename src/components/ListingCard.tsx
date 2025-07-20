
import { useState } from 'react';
import { TrendingUp, TrendingDown, User, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ListingDetailModal from '@/components/ListingDetailModal';

interface Listing {
  id: string;
  seller: string;
  token: string;
  tokenName: string;
  amount: string;
  price: string;
  priceUnit: string;
  change: string;
  isUp: boolean;
  image: string;
  duration: string;
  reputation: number;
  description: string;
}

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-2xl">
                {listing.image}
              </div>
              <div>
                <div className="font-bold text-lg">{listing.token}</div>
                <div className="text-sm text-muted-foreground">{listing.tokenName}</div>
              </div>
            </div>
            
            {/* Price Change */}
            <div className={`flex items-center gap-1 text-sm font-semibold ${
              listing.isUp ? 'text-green-500' : 'text-red-500'
            }`}>
              {listing.isUp ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {listing.change}
            </div>
          </div>

          {/* Amount & Price */}
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Amount:</span>
              <span className="font-semibold">{listing.amount} {listing.token}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Price:</span>
              <span className="font-bold text-lg text-primary">{listing.price} {listing.priceUnit}</span>
            </div>
          </div>

          {/* Seller Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{listing.seller}</span>
              <Badge variant="secondary">{listing.reputation}%</Badge>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {listing.duration}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {listing.description}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              className="flex-1"
              onClick={() => setIsModalOpen(true)}
            >
              View Details
            </Button>
            <Button variant="outline" size="icon">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <ListingDetailModal 
        listing={listing}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ListingCard;
