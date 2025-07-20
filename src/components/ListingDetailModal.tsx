
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { User, Clock, TrendingUp, TrendingDown, Shield, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

interface ListingDetailModalProps {
  listing: Listing;
  isOpen: boolean;
  onClose: () => void;
}

const ListingDetailModal = ({ listing, isOpen, onClose }: ListingDetailModalProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleBuyNow = async () => {
    setIsProcessing(true);
    
    // Simulate transaction processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    toast({
      title: "Purchase Initiated!",
      description: "Your transaction has been submitted to the blockchain.",
    });
    
    setIsProcessing(false);
    onClose();
  };

  const handleContactSeller = () => {
    toast({
      title: "Contact Feature",
      description: "Direct messaging will be available soon!",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-xl">
              {listing.image}
            </div>
            <div>
              <div className="text-xl font-bold">{listing.token}</div>
              <div className="text-sm text-muted-foreground font-normal">{listing.tokenName}</div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Price and Change */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-primary">
                {listing.price} {listing.priceUnit}
              </div>
              <div className="text-sm text-muted-foreground">
                Total price for {listing.amount} {listing.token}
              </div>
            </div>
            <div className={`flex items-center gap-1 text-lg font-semibold ${
              listing.isUp ? 'text-green-500' : 'text-red-500'
            }`}>
              {listing.isUp ? (
                <TrendingUp className="w-5 h-5" />
              ) : (
                <TrendingDown className="w-5 h-5" />
              )}
              {listing.change}
            </div>
          </div>

          <Separator />

          {/* Listing Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground">Amount</div>
                <div className="font-semibold">{listing.amount} {listing.token}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Price per Token</div>
                <div className="font-semibold">
                  {(parseFloat(listing.price) / parseFloat(listing.amount.replace(/,/g, ''))).toFixed(8)} {listing.priceUnit}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground">Time Remaining</div>
                <div className="flex items-center gap-1 font-semibold">
                  <Clock className="w-4 h-4" />
                  {listing.duration}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Listing ID</div>
                <div className="font-mono text-sm">{listing.id}</div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Seller Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Seller Information</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="font-mono">{listing.seller}</div>
                  <div className="text-sm text-muted-foreground">Verified seller</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <Badge variant="secondary">{listing.reputation}% Success Rate</Badge>
              </div>
            </div>
          </div>

          {/* Description */}
          {listing.description && (
            <>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-muted-foreground">{listing.description}</p>
              </div>
            </>
          )}

          <Separator />

          {/* Terms */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Transaction Terms</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Escrow protection included</li>
              <li>• 24-hour dispute resolution</li>
              <li>• Network fees apply</li>
              <li>• Non-refundable after confirmation</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button 
              onClick={handleBuyNow}
              className="flex-1"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : `Buy for ${listing.price} ${listing.priceUnit}`}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleContactSeller}
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Contact
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ListingDetailModal;
