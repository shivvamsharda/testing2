
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      {/* Floating Memecoin Avatars - All consistent size and style */}
      <div className="absolute inset-0 pointer-events-none">
        {/* BONK - Top left */}
        <div className="absolute top-24 left-16 w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 animate-float shadow-lg overflow-hidden border border-white/10 backdrop-blur-sm">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-300/20 to-transparent">
            <div className="text-2xl font-bold text-white">B</div>
          </div>
        </div>
        
        {/* WIF/dogwifhat - Top right */}
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 animate-float shadow-lg overflow-hidden border border-white/10 backdrop-blur-sm" style={{ animationDelay: '-1s' }}>
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-300/20 to-transparent">
            <div className="text-2xl font-bold text-white">W</div>
          </div>
        </div>
        
        {/* POPCAT - Bottom left */}
        <div className="absolute bottom-40 left-12 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 animate-float shadow-lg overflow-hidden border border-white/10 backdrop-blur-sm" style={{ animationDelay: '-3s' }}>
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-300/20 to-transparent">
            <div className="text-2xl font-bold text-white">P</div>
          </div>
        </div>
        
        {/* JUP (Jupiter) - Bottom right */}
        <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 animate-float shadow-lg overflow-hidden border border-white/10 backdrop-blur-sm" style={{ animationDelay: '-2s' }}>
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-300/20 to-transparent">
            <div className="text-2xl font-bold text-white">J</div>
          </div>
        </div>
        
        {/* RAY (Raydium) - Middle right */}
        <div className="absolute top-1/2 right-12 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 animate-float shadow-lg overflow-hidden border border-white/10 backdrop-blur-sm" style={{ animationDelay: '-4s' }}>
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-300/20 to-transparent">
            <div className="text-2xl font-bold text-white">R</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in-scale">
          
          {/* Live Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/40 backdrop-blur-xl border border-primary/20 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">Now Live on Solana</span>
          </div>

          {/* Main Headline - Matching reference typography */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
              The{' '}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                OTC Platform
              </span>
              <br />
              powering the
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-orange-400 bg-clip-text text-transparent">
                Solana memecoin
              </span>
              <br />
              future
            </h1>
          </div>

          {/* Subheadline - cleaner spacing */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Secure, private, and efficient OTC trading for Solana memecoins. 
              Access exclusive liquidity and competitive pricing.
            </p>
          </div>

          {/* CTA Buttons - styled like reference */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-primary to-purple-500 rounded-2xl font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <span>Start Trading</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="group px-10 py-4 bg-card/80 backdrop-blur-xl border border-border rounded-2xl font-semibold text-lg text-foreground hover:bg-card hover:border-primary/30 transition-all duration-300 flex items-center gap-3">
              <Play className="w-5 h-5" />
              <span>View Demo</span>
            </button>
          </div>

          {/* Stats - matching reference layout */}
          <div className="grid grid-cols-3 gap-8 pt-20 max-w-2xl mx-auto">
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                $2.4M+
              </div>
              <div className="text-sm text-muted-foreground font-medium">Volume Traded</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                420+
              </div>
              <div className="text-sm text-muted-foreground font-medium">Active Traders</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-primary bg-clip-text text-transparent">
                150+
              </div>
              <div className="text-sm text-muted-foreground font-medium">Memecoins Listed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
