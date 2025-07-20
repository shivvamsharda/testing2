
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 20, 2025</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-muted-foreground">
                  By accessing and using MemeOTC ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  MemeOTC provides an over-the-counter (OTC) trading platform for Solana-based memecoins. Our services include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• OTC trading services for supported tokens</li>
                  <li>• Market data and analytics</li>
                  <li>• Wallet integration and management</li>
                  <li>• Order matching and execution</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>Users are responsible for:</p>
                  <ul className="space-y-2">
                    <li>• Maintaining the security of their wallet and private keys</li>
                    <li>• Verifying all transaction details before execution</li>
                    <li>• Complying with applicable laws and regulations</li>
                    <li>• Not using the platform for illegal activities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Trading Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Trading cryptocurrencies involves substantial risk. Users acknowledge that:
                  </p>
                  <ul className="space-y-2">
                    <li>• Cryptocurrency values can be extremely volatile</li>
                    <li>• Past performance does not guarantee future results</li>
                    <li>• Users may lose their entire investment</li>
                    <li>• MemeOTC is not responsible for trading losses</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Fees and Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  MemeOTC charges fees for trading services as disclosed on the platform. 
                  Fees may change with prior notice. All fees are non-refundable unless 
                  otherwise specified.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  MemeOTC shall not be liable for any direct, indirect, incidental, special, 
                  or consequential damages resulting from the use or inability to use the platform, 
                  including but not limited to damages for loss of profits, goodwill, use, data, 
                  or other intangible losses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 space-y-1 text-muted-foreground">
                  <p>Email: legal@memeotc.com</p>
                  <p>Address: 123 Blockchain Ave, Crypto City, CC 12345</p>
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

export default Terms;
