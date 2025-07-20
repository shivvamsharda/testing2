
import { useState } from 'react';
import { Plus, Filter, Search, TrendingUp, TrendingDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CreateListingForm from '@/components/CreateListingForm';
import ListingCard from '@/components/ListingCard';

const Listings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const mockListings = [
    {
      id: '1',
      seller: '7xKX...9mPz',
      token: 'BONK',
      tokenName: 'Bonk',
      amount: '1,000,000',
      price: '2.5',
      priceUnit: 'SOL',
      change: '+12.45%',
      isUp: true,
      image: '🐶',
      duration: '2 days left',
      reputation: 98,
      description: 'Quick sale, serious buyers only'
    },
    {
      id: '2',
      seller: '3bNm...7kLx',
      token: 'PEPE',
      tokenName: 'Pepe',
      amount: '500,000',
      price: '1.8',
      priceUnit: 'SOL',
      change: '+8.92%',
      isUp: true,
      image: '🐸',
      duration: '5 days left',
      reputation: 95,
      description: 'Bulk sale with discount'
    },
    {
      id: '3',
      seller: '9pQr...2vCd',
      token: 'WIF',
      tokenName: 'dogwifhat',
      amount: '250,000',
      price: '3.2',
      priceUnit: 'SOL',
      change: '-5.67%',
      isUp: false,
      image: '🐕',
      duration: '1 day left',
      reputation: 92,
      description: 'Negotiable price for quick sale'
    },
    {
      id: '4',
      seller: '5tGh...8nBv',
      token: 'POPCAT',
      tokenName: 'Popcat',
      amount: '2,000,000',
      price: '4.1',
      priceUnit: 'SOL',
      change: '+15.23%',
      isUp: true,
      image: '🐱',
      duration: '3 days left',
      reputation: 96,
      description: 'Premium tokens, verified seller'
    }
  ];

  const filteredListings = mockListings.filter(listing => {
    const matchesSearch = listing.token.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.tokenName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || listing.token === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">OTC Marketplace</h1>
            <p className="text-xl text-muted-foreground">Buy and sell Solana memecoins directly with other traders</p>
          </div>

          <Tabs defaultValue="browse" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="browse">Browse Listings</TabsTrigger>
              <TabsTrigger value="create">Create Listing</TabsTrigger>
            </TabsList>

            <TabsContent value="browse">
              <div className="space-y-6">
                {/* Search and Filter Bar */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="Search tokens..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant={selectedFilter === 'all' ? 'default' : 'outline'}
                          onClick={() => setSelectedFilter('all')}
                        >
                          All
                        </Button>
                        <Button 
                          variant={selectedFilter === 'BONK' ? 'default' : 'outline'}
                          onClick={() => setSelectedFilter('BONK')}
                        >
                          BONK
                        </Button>
                        <Button 
                          variant={selectedFilter === 'PEPE' ? 'default' : 'outline'}
                          onClick={() => setSelectedFilter('PEPE')}
                        >
                          PEPE
                        </Button>
                        <Button 
                          variant={selectedFilter === 'WIF' ? 'default' : 'outline'}
                          onClick={() => setSelectedFilter('WIF')}
                        >
                          WIF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Listings Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </div>

                {filteredListings.length === 0 && (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <p className="text-muted-foreground">No listings found matching your criteria.</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="create">
              <CreateListingForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Listings;
