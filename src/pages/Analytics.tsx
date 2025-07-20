
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const volumeData = [
    { date: '01/15', volume: 2.4 },
    { date: '01/16', volume: 3.1 },
    { date: '01/17', volume: 2.8 },
    { date: '01/18', volume: 4.2 },
    { date: '01/19', volume: 3.7 },
    { date: '01/20', volume: 5.1 },
    { date: '01/21', volume: 4.6 },
  ];

  const tokenData = [
    { name: 'BONK', trades: 45, volume: 2.4 },
    { name: 'WIF', trades: 32, volume: 1.8 },
    { name: 'PEPE', trades: 28, volume: 3.1 },
    { name: 'POPCAT', trades: 19, volume: 0.9 },
    { name: 'JUP', trades: 15, volume: 1.2 },
  ];

  const pieData = [
    { name: 'BONK', value: 35, color: '#10b981' },
    { name: 'PEPE', value: 25, color: '#f59e0b' },
    { name: 'WIF', value: 20, color: '#3b82f6' },
    { name: 'POPCAT', value: 12, color: '#8b5cf6' },
    { name: 'Others', value: 8, color: '#6b7280' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6">
              Trading{' '}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-time insights and market data for informed trading decisions
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground">Total Volume (24h)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">$12.4M</div>
                <div className="text-sm text-green-500">+18.3% ↗</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground">Active Traders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">1,247</div>
                <div className="text-sm text-green-500">+12.7% ↗</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground">Total Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">8,923</div>
                <div className="text-sm text-green-500">+25.1% ↗</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground">Avg. Trade Size</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">$1,389</div>
                <div className="text-sm text-red-500">-3.2% ↘</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Volume Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Daily Trading Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={volumeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="volume" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Token Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Token Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={tokenData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="volume" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Market Share */}
            <Card>
              <CardHeader>
                <CardTitle>Volume by Token</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name} ${value}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top Traders */}
            <Card>
              <CardHeader>
                <CardTitle>Top Traders (24h)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { address: '7xKd...9mFn', volume: '$45,230', trades: 23 },
                    { address: '9kLp...2rGt', volume: '$38,920', trades: 19 },
                    { address: '4nBx...8vCz', volume: '$32,580', trades: 31 },
                    { address: '2mRt...5hKl', volume: '$28,940', trades: 15 },
                    { address: '6pQs...3jWx', volume: '$24,720', trades: 12 },
                  ].map((trader, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <div className="font-mono text-sm">{trader.address}</div>
                        <div className="text-xs text-muted-foreground">{trader.trades} trades</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{trader.volume}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { type: 'Buy', token: 'BONK', amount: '1.2M', price: '$18.24', time: '2m ago' },
                    { type: 'Sell', token: 'WIF', amount: '50', price: '$160.50', time: '4m ago' },
                    { type: 'Buy', token: 'PEPE', amount: '3.5M', price: '$31.15', time: '7m ago' },
                    { type: 'Buy', token: 'POPCAT', amount: '120', price: '$174.00', time: '12m ago' },
                    { type: 'Sell', token: 'JUP', amount: '1.8K', price: '$1,566', time: '15m ago' },
                  ].map((trade, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.type === 'Buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {trade.type}
                        </span>
                        <span className="font-medium">{trade.token}</span>
                      </div>
                      <div className="text-right">
                        <div>{trade.amount}</div>
                        <div className="text-muted-foreground text-xs">{trade.time}</div>
                      </div>
                    </div>
                  ))}
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

export default Analytics;
