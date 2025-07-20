
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Key, Zap, Shield } from 'lucide-react';

const ApiDocs = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/tokens',
      description: 'Get list of all supported tokens',
      response: '{ "tokens": [...] }'
    },
    {
      method: 'GET',
      path: '/api/v1/tokens/{symbol}/price',
      description: 'Get current price for a specific token',
      response: '{ "symbol": "BONK", "price": 0.0000152 }'
    },
    {
      method: 'POST',
      path: '/api/v1/orders',
      description: 'Create a new OTC order',
      response: '{ "orderId": "abc123", "status": "pending" }'
    },
    {
      method: 'GET',
      path: '/api/v1/orders/{orderId}',
      description: 'Get order details and status',
      response: '{ "orderId": "abc123", "status": "filled" }'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6">
              API{' '}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Integrate MemeOTC into your applications with our powerful REST API
            </p>
          </div>

          {/* Quick Start */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Key className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Secure your API requests with API keys and wallet signatures.
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Rate Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Standard rate limit of 1000 requests per minute.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Public endpoints:</span>
                    <span className="font-semibold">1000/min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Private endpoints:</span>
                    <span className="font-semibold">500/min</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  All API requests are secured with HTTPS and require authentication.
                </p>
                <div className="text-sm space-y-1">
                  <div>✓ HTTPS Only</div>
                  <div>✓ API Key Required</div>
                  <div>✓ Wallet Signature</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Base URL */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Base URL</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-primary font-mono">https://api.memeotc.com/v1</code>
              </div>
            </CardContent>
          </Card>

          {/* Endpoints */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>API Endpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="border border-border rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="font-mono text-lg">{endpoint.path}</code>
                    </div>
                    <p className="text-muted-foreground mb-4">{endpoint.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Example Response:</h4>
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">{endpoint.response}</code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Code Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Code Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">JavaScript/Node.js</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`const response = await fetch('https://api.memeotc.com/v1/tokens', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const tokens = await response.json();
console.log(tokens);`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Python</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.memeotc.com/v1/tokens', headers=headers)
tokens = response.json()
print(tokens)`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">cURL</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`curl -X GET "https://api.memeotc.com/v1/tokens" \\
     -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json"`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about the API or need technical support, we're here to help.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Contact Support
                </button>
                <button className="px-6 py-2 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
                  Join Discord
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

export default ApiDocs;
