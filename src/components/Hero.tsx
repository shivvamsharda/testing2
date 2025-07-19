import { ArrowRight, Play } from 'lucide-react';
import memeAvatars from '@/assets/meme-avatars.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Floating Memecoin Avatars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-card border border-card-border overflow-hidden float-animation">
          <div className="w-full h-full bg-gradient-accent opacity-80" />
        </div>
        <div className="absolute top-32 right-16 w-20 h-20 rounded-full bg-card border border-card-border overflow-hidden float-animation">
          <div className="w-full h-full bg-gradient-primary opacity-80" />
        </div>
        <div className="absolute bottom-32 left-20 w-12 h-12 rounded-full bg-card border border-card-border overflow-hidden float-animation">
          <div className="w-full h-full bg-gradient-secondary opacity-80" />
        </div>
        <div className="absolute bottom-20 right-10 w-18 h-18 rounded-full bg-card border border-card-border overflow-hidden float-animation">
          <div className="w-full h-full bg-gradient-meme opacity-80" />
        </div>
        <div className="absolute top-1/2 right-8 w-14 h-14 rounded-full bg-card border border-card-border overflow-hidden float-animation">
          <div className="w-full h-full bg-gradient-accent opacity-80" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-scale">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border-gradient text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-gradient-primary animate-pulse-glow" />
            Now Live on Solana
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            The <span className="gradient-text-primary">OTC Platform</span>
            <br />
            powers the
            <br />
            <span className="gradient-text-meme">Solana memecoin</span>
            <br />
            future
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Secure, private, and efficient OTC trading for Solana memecoins. Access exclusive 
            liquidity and competitive pricing in the DeFi space.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="btn-gradient px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 group">
              Start Trading
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-dark px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 group">
              <Play className="w-5 h-5" />
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold gradient-text-primary">$2.4M+</div>
              <div className="text-sm text-muted-foreground">Volume Traded</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold gradient-text-accent">420+</div>
              <div className="text-sm text-muted-foreground">Active Traders</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold gradient-text-meme">150+</div>
              <div className="text-sm text-muted-foreground">Memecoins Listed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;