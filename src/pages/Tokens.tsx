
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Star } from 'lucide-react';

const Tokens = () => {
  const tokens = [
    {
      symbol: 'BONK',
      name: 'Bonk',
      image: '/lovable-uploads/c20442fe-b06a-40f4-9fb4-fad85a5bf1cd.png',
      price: '$0.0000152',
      change: '+12.45%',
      volume: '$2.4M',
      marketCap: '$125M',
      description: 'The first Solana dog coin built for the people, by the people.',
      tags: ['Community', 'Meme']
    },
    {
      symbol: 'WIF',
      name: 'dogwifhat',
      image: '/lovable-uploads/5158b8e4-ca6d-4434-aad7-7c33ccd68cbb.png',
      price: '$3.21',
      change: '-5.67%',
      volume: '$1.8M',
      marketCap: '$890M',
      description: 'A dog wearing a hat. That\'s it. That\'s the meme.',
      tags: ['Dog', 'Viral']
    },
    {
      symbol: 'PEPE',
      name: 'Pepe',
      image: '/lovable-uploads/5c1b6715-c4bd-462d-8f6e-fbfb61a8f071.png',
      price: '$0.0000089',
      change: '+8.92%',
      volume: '$3.1M',
      marketCap: '$245M',
      description: 'The most memeable memecoin in existence.',
      tags: ['Classic', 'Frog']
    },
    {
      symbol: 'POPCAT',
      name: 'Popcat',
      image: '/lovable-uploads/147e08a4-6b9c-4e42-bcf1-0f36f73682d3.png',
      price: '$1.45',
      change: '+15.23%',
      volume: '$892K',
      marketCap: '$67M',
      description: 'Pop pop pop cat, the internet sensation turned memecoin.',
      tags: ['Cat', 'Trending']
    },
    {
      symbol: 'JUP',
      name: 'Jupiter',
      image: '/lovable-uploads/c25e50ad-f670-47cb-9103-898ce9cb25f5.png',
      price: '$0.87',
      change: '+3.45%',
      volume: '$1.2M',
      marketCap: '$180M',
      description: 'The key liquidity aggregator and swap infrastructure for Solana.',
      tags: ['DeFi', 'Utility']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Supported{' '}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Tokens
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trade the hottest Solana memecoins with zero slippage and institutional-grade security
            </p>
          </div>

          <div className="grid gap-8">
            {tokens.map((token, index) => (
              <Card key={token.symbol} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    {/* Token Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 backdrop-blur-sm">
                        <img 
                          src={token.image} 
                          alt={token.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-2xl font-bold">{token.symbol}</h3>
                          {index < 3 && <Star className="w-5 h-5 text-yellow-500 fill-current" />}
                        </div>
                        <p className="text-muted-foreground">{token.name}</p>
                        <div className="flex gap-2 mt-2">
                          {token.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Price Info */}
                    <div className="space-y-3">
                      <div>
                        <div className="text-3xl font-bold">{token.price}</div>
                        <div className={`flex items-center gap-1 text-sm ${
                          token.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {token.change.startsWith('+') ? 
                            <TrendingUp className="w-4 h-4" /> : 
                            <TrendingDown className="w-4 h-4" />
                          }
                          {token.change}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Volume</div>
                          <div className="font-semibold">{token.volume}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Market Cap</div>
                          <div className="font-semibold">{token.marketCap}</div>
                        </div>
                      </div>
                    </div>

                    {/* Description & Action */}
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {token.description}
                      </p>
                      <div className="flex gap-3">
                        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                          Trade
                        </button>
                        <button className="px-6 py-2 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
                          View Chart
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Total Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">$12.4M</div>
                <p className="text-muted-foreground">Last 24 hours</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Active Pairs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">150+</div>
                <p className="text-muted-foreground">Trading pairs available</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Avg. Spread</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">0.15%</div>
                <p className="text-muted-foreground">Competitive pricing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tokens;
