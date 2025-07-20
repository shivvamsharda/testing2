
import { useState } from 'react';
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Trading = () => {
  const [selectedToken, setSelectedToken] = useState('BONK');

  const mockTokens = [
    { symbol: 'BONK', name: 'Bonk', price: '$0.0000152', change: '+12.45%', volume: '$2.4M' },
    { symbol: 'WIF', name: 'dogwifhat', price: '$3.21', change: '-5.67%', volume: '$1.8M' },
    { symbol: 'PEPE', name: 'Pepe', price: '$0.0000089', change: '+8.92%', volume: '$3.1M' },
    { symbol: 'POPCAT', name: 'Popcat', price: '$1.45', change: '+15.23%', volume: '$892K' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Trading Platform</h1>
            <p className="text-xl text-muted-foreground">Trade Solana memecoins with zero slippage and maximum security</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Token List */}
            <Card>
              <CardHeader>
                <CardTitle>Available Tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTokens.map((token) => (
                    <div 
                      key={token.symbol}
                      className={`p-4 rounded-lg cursor-pointer transition-colors ${
                        selectedToken === token.symbol ? 'bg-primary/10 border border-primary' : 'bg-muted hover:bg-muted/80'
                      }`}
                      onClick={() => setSelectedToken(token.symbol)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">{token.symbol}</div>
                          <div className="text-sm text-muted-foreground">{token.name}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{token.price}</div>
                          <div className={`text-sm ${token.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                            {token.change}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trading Interface */}
            <Card>
              <CardHeader>
                <CardTitle>Trade {selectedToken}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="default" className="h-12">Buy</Button>
                    <Button variant="outline" className="h-12">Sell</Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Amount</label>
                      <input 
                        type="number" 
                        className="w-full p-3 rounded-lg border border-border bg-background"
                        placeholder="0.00"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Price</label>
                      <input 
                        type="number" 
                        className="w-full p-3 rounded-lg border border-border bg-background"
                        placeholder="Market Price"
                      />
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex justify-between text-sm">
                        <span>Total</span>
                        <span>$0.00</span>
                      </div>
                    </div>
                    
                    <Button className="w-full h-12">Place Order</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Market Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm">24h High</span>
                      </div>
                      <div className="text-xl font-bold">$0.0000165</div>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingDown className="w-4 h-4 text-red-500" />
                        <span className="text-sm">24h Low</span>
                      </div>
                      <div className="text-xl font-bold">$0.0000142</div>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-4 h-4 text-primary" />
                        <span className="text-sm">Volume</span>
                      </div>
                      <div className="text-xl font-bold">$2.4M</div>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="text-sm">Market Cap</span>
                      </div>
                      <div className="text-xl font-bold">$125M</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Recent Orders</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Buy 1.2M BONK</span>
                        <span className="text-green-500">$18.24</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sell 800K BONK</span>
                        <span className="text-red-500">$12.16</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Buy 2.5M BONK</span>
                        <span className="text-green-500">$38.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Trading;
