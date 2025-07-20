
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Multi-Signature Security',
      description: 'All funds are protected by multi-signature wallets requiring multiple approvals for any transaction.'
    },
    {
      icon: Lock,
      title: 'Cold Storage',
      description: '95% of user funds are stored in offline cold storage, protected from online threats.'
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of all systems with real-time threat detection and response.'
    },
    {
      icon: CheckCircle,
      title: 'Smart Contract Audits',
      description: 'Regular security audits by leading blockchain security firms ensure code integrity.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Security
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your security is our top priority. Learn about the measures we take to protect your assets and data.
            </p>
          </div>

          {/* Security Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {securityFeatures.map((feature, index) => (
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

          {/* Security Stats */}
          <Card className="mb-12 bg-gradient-to-r from-primary/5 to-purple-400/5 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-center mb-8">Security Track Record</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">0</div>
                  <div className="text-muted-foreground">Security Incidents</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Platform Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">$500M+</div>
                  <div className="text-muted-foreground">Assets Secured</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>User Security Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Use Strong Passwords</h4>
                      <p className="text-sm text-muted-foreground">Create unique, complex passwords for your accounts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Enable 2FA</h4>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Verify URLs</h4>
                      <p className="text-sm text-muted-foreground">Always check you're on the official MemeOTC website</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Keep Software Updated</h4>
                      <p className="text-sm text-muted-foreground">Update your wallet and browser regularly</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audit Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">CertiK Security Audit</h4>
                      <span className="text-green-500 text-sm">Passed</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Comprehensive smart contract security audit
                    </p>
                    <button className="text-primary text-sm hover:underline">
                      View Report →
                    </button>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Trail of Bits Audit</h4>
                      <span className="text-green-500 text-sm">Passed</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Infrastructure and code security review
                    </p>
                    <button className="text-primary text-sm hover:underline">
                      View Report →
                    </button>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Quantstamp Audit</h4>
                      <span className="text-green-500 text-sm">Passed</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Trading engine security assessment
                    </p>
                    <button className="text-primary text-sm hover:underline">
                      View Report →
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Security Team */}
          <Card>
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Report a Security Issue</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                If you discover a security vulnerability, please report it immediately. 
                We take all security reports seriously and respond quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Report Vulnerability
                </button>
                <button className="px-8 py-3 border border-border font-semibold rounded-lg hover:bg-muted transition-colors">
                  Contact Security Team
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

export default Security;
