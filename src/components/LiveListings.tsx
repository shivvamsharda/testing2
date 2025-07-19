import { TrendingUp, TrendingDown } from 'lucide-react';

const LiveListings = () => {
  const listings = [
    {
      name: "BONK",
      symbol: "BONK",
      amount: "1,000,000",
      price: "2.5 SOL",
      change: "+12.4%",
      isUp: true,
      image: "🐶"
    },
    {
      name: "PEPE",
      symbol: "PEPE", 
      amount: "500,000",
      price: "1.8 SOL",
      change: "+8.7%",
      isUp: true,
      image: "🐸"
    },
    {
      name: "DOGE",
      symbol: "DOGE",
      amount: "250,000",
      price: "3.2 SOL",
      change: "-2.1%",
      isUp: false,
      image: "🚀"
    },
    {
      name: "SHIB",
      symbol: "SHIB",
      amount: "2,000,000",
      price: "4.1 SOL",
      change: "+15.3%",
      isUp: true,
      image: "🦊"
    },
    {
      name: "FLOKI",
      symbol: "FLOKI",
      amount: "750,000",
      price: "1.9 SOL",
      change: "+6.8%",
      isUp: true,
      image: "🐺"
    },
    {
      name: "WOJAK",
      symbol: "WOJAK",
      amount: "300,000",
      price: "2.7 SOL",
      change: "-1.2%",
      isUp: false,
      image: "😤"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Live <span className="gradient-text-accent">OTC Listings</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real-time peer-to-peer deals happening now. Join the action.
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {listings.map((listing, index) => (
            <div 
              key={index}
              className="card-glow p-6 rounded-2xl group cursor-pointer animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                    {listing.image}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{listing.name}</div>
                    <div className="text-sm text-muted-foreground">{listing.symbol}</div>
                  </div>
                </div>
                
                {/* Price Change */}
                <div className={`flex items-center gap-1 text-sm font-semibold ${
                  listing.isUp ? 'text-success' : 'text-destructive'
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
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-semibold">{listing.amount} {listing.symbol}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Price:</span>
                  <span className="font-bold text-lg gradient-text-primary">{listing.price}</span>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full mt-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                Trade Now
              </button>

              {/* Pulse Effect */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-success animate-pulse-glow" />
            </div>
          ))}
        </div>

        {/* Live Stats Bar */}
        <div className="glass-effect rounded-2xl p-6 animate-on-scroll">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold gradient-text-primary">42</div>
              <div className="text-sm text-muted-foreground">Active Listings</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text-accent">$124K</div>
              <div className="text-sm text-muted-foreground">24h Volume</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text-meme">15s</div>
              <div className="text-sm text-muted-foreground">Avg Settlement</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success">99.8%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveListings;