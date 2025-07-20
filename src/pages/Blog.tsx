
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Memecoin Trading on Solana',
      excerpt: 'Exploring how OTC trading is revolutionizing the memecoin ecosystem and providing better liquidity for traders.',
      author: 'Alex Chen',
      date: 'January 20, 2025',
      category: 'Industry',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop',
      featured: true
    },
    {
      title: 'Understanding OTC vs DEX Trading',
      excerpt: 'A comprehensive comparison of over-the-counter trading versus decentralized exchanges for memecoin traders.',
      author: 'Sarah Rodriguez',
      date: 'January 18, 2025',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop'
    },
    {
      title: 'Security Best Practices for Crypto Trading',
      excerpt: 'Essential security measures every trader should implement to protect their assets in the DeFi space.',
      author: 'Marcus Johnson',
      date: 'January 15, 2025',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop'
    },
    {
      title: 'Market Analysis: Solana Memecoins in 2025',
      excerpt: 'An in-depth analysis of the current state and future prospects of memecoins in the Solana ecosystem.',
      author: 'Emily Zhang',
      date: 'January 12, 2025',
      category: 'Analysis',
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=400&fit=crop'
    },
    {
      title: 'MemeOTC API v2.0 Released',
      excerpt: 'Announcing new features and improvements in our latest API version, including better rate limits and new endpoints.',
      author: 'Development Team',
      date: 'January 10, 2025',
      category: 'Updates',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop'
    },
    {
      title: 'Community Spotlight: Top Traders of Q4 2024',
      excerpt: 'Celebrating our most successful traders and the strategies that made them stand out in the memecoin market.',
      author: 'Community Team',
      date: 'January 8, 2025',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop'
    }
  ];

  const categories = ['All', 'Industry', 'Education', 'Security', 'Analysis', 'Updates', 'Community'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest news, insights, and developments in the memecoin trading world
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === 'All' ? 'default' : 'secondary'}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          {posts[0].featured && (
            <Card className="mb-12 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="lg:order-2">
                  <img 
                    src={posts[0].image} 
                    alt={posts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4">{posts[0].category}</Badge>
                  <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {posts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {posts[0].date}
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
              Load More Posts
            </button>
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-16 bg-gradient-to-r from-primary/5 to-purple-400/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get the latest insights, market analysis, 
                and platform updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
                />
                <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Subscribe
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

export default Blog;
