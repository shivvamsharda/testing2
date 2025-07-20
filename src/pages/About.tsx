
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Zap, Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Maximum Security',
      description: 'Multi-signature wallets, cold storage, and institutional-grade security protocols protect your assets.'
    },
    {
      icon: Zap,
      title: 'Zero Slippage',
      description: 'Our OTC model ensures you get the exact price you see, with no slippage or hidden fees.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by the community, for the community. We listen to our users and evolve based on feedback.'
    },
    {
      icon: Target,
      title: 'Precise Execution',
      description: 'Advanced matching algorithms ensure optimal trade execution and competitive pricing.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      description: 'Former Goldman Sachs trader with 10+ years in DeFi and traditional finance.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO',
      description: 'Ex-Coinbase engineer, blockchain architect with expertise in Solana ecosystem.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b0e4?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Security',
      description: 'Cybersecurity expert with experience at major crypto exchanges and security firms.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emily Zhang',
      role: 'Head of Product',
      description: 'Product strategist focused on user experience and community-driven development.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const stats = [
    { icon: Globe, value: '$500M+', label: 'Total Volume Traded' },
    { icon: Users, value: '10K+', label: 'Active Users' },
    { icon: Award, value: '99.9%', label: 'Platform Uptime' },
    { icon: Shield, value: 'Zero', label: 'Security Incidents' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                MemeOTC
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing memecoin trading on Solana with the first dedicated OTC platform 
              that combines institutional-grade security with community-driven innovation.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission */}
          <div className="mb-20">
            <Card className="bg-gradient-to-r from-primary/5 to-purple-400/5 border-primary/20">
              <CardContent className="p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    To democratize access to efficient memecoin trading by providing a secure, 
                    transparent, and user-friendly OTC platform that serves both retail and 
                    institutional traders in the Solana ecosystem.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                      <p className="text-muted-foreground">
                        Full visibility into pricing, fees, and market conditions
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                      <p className="text-muted-foreground">
                        Cutting-edge technology meets memecoin culture
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Community</h3>
                      <p className="text-muted-foreground">
                        Built with and for the Solana memecoin community
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose MemeOTC?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Experienced professionals from traditional finance, crypto, and technology 
              working together to build the future of memecoin trading.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary to-purple-400 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Trading?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of traders who trust MemeOTC for their Solana memecoin trades
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Connect Wallet
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
