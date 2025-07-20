
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Play, Shield, Users } from 'lucide-react';

const Documentation = () => {
  const guides = [
    {
      icon: Play,
      title: 'Getting Started',
      description: 'Learn how to connect your wallet and make your first trade',
      topics: ['Connect Wallet', 'Account Setup', 'First Trade', 'Security Tips']
    },
    {
      icon: Users,
      title: 'OTC Trading Guide',
      description: 'Understanding over-the-counter trading and how it works',
      topics: ['What is OTC?', 'Benefits', 'Order Types', 'Execution']
    },
    {
      icon: Shield,
      title: 'Security Best Practices',
      description: 'Keep your assets safe with our security recommendations',
      topics: ['Wallet Security', '2FA Setup', 'Safe Trading', 'Phishing Protection']
    },
    {
      icon: Book,
      title: 'Advanced Features',
      description: 'Explore advanced trading features and strategies',
      topics: ['Limit Orders', 'Market Analysis', 'Portfolio Management', 'API Integration']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about trading memecoins on MemeOTC
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <guide.icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{guide.description}</p>
                  <div className="space-y-1">
                    {guide.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="text-sm text-primary hover:underline cursor-pointer">
                        • {topic}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Start Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">1. Connect Your Wallet</h3>
                    <p className="text-muted-foreground">
                      Start by connecting your Solana wallet. We support Phantom, Solflare, and other popular wallets.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">2. Browse Available Tokens</h3>
                    <p className="text-muted-foreground">
                      Explore our curated list of supported memecoins and check current market prices.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">3. Place Your Order</h3>
                    <p className="text-muted-foreground">
                      Create buy or sell orders with your desired amount and price. Our OTC system ensures zero slippage.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">4. Execute the Trade</h3>
                    <p className="text-muted-foreground">
                      Once matched, your trade executes automatically with instant settlement on the Solana blockchain.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      'How OTC Trading Works',
                      'Understanding Spreads',
                      'Wallet Security Tips',
                      'Order Types Explained',
                      'Fee Structure',
                      'Withdrawal Process'
                    ].map((topic, index) => (
                      <div key={index} className="text-primary hover:underline cursor-pointer">
                        {topic}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need More Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <div className="space-y-2">
                    <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Contact Support
                    </button>
                    <button className="w-full px-4 py-2 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
                      Join Community
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Documentation;
