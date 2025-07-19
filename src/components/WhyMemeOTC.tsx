import { Shield, Zap, Target, Users } from 'lucide-react';

const WhyMemeOTC = () => {
  const features = [
    {
      icon: Shield,
      title: "No Front-running",
      description: "Private peer-to-peer trades mean MEV bots can't sandwich your orders.",
      color: "primary"
    },
    {
      icon: Zap,
      title: "No DEX Fees",
      description: "Skip the 0.3% fees and slippage. Pay only what you agree to.",
      color: "accent"
    },
    {
      icon: Target,
      title: "Memecoin-only Focus",
      description: "Built specifically for degens trading the hottest Solana memecoins.",
      color: "meme"
    },
    {
      icon: Users,
      title: "Direct P2P Payment",
      description: "Instant settlement between wallets. No intermediaries or delays.",
      color: "secondary"
    }
  ];

  const getGradientClass = (color: string) => {
    switch (color) {
      case 'primary': return 'gradient-text-primary';
      case 'accent': return 'gradient-text-accent';
      case 'meme': return 'gradient-text-meme';
      default: return 'gradient-text-primary';
    }
  };

  const getIconBg = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-gradient-primary shadow-glow-primary';
      case 'accent': return 'bg-gradient-secondary shadow-glow-accent';
      case 'meme': return 'bg-gradient-meme shadow-glow-blue';
      default: return 'bg-gradient-primary shadow-glow-primary';
    }
  };

  return (
    <section className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why <span className="gradient-text-meme">Degens</span> Use MemeOTC
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The most advanced OTC trading experience designed for serious memecoin traders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="relative group animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                
                {/* Feature Card */}
                <div className="card-glow p-8 rounded-3xl text-center h-full">
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${getIconBg(feature.color)} p-4`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-4 ${getGradientClass(feature.color)}`}>
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-8 glass-effect px-8 py-6 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text-primary">0%</div>
              <div className="text-sm text-muted-foreground">Trading Fees</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Secure Escrow</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text-meme">∞</div>
              <div className="text-sm text-muted-foreground">Liquidity Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMemeOTC;