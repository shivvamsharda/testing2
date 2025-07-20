
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 20, 2025</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>We collect information you provide directly to us, such as:</p>
                  <ul className="space-y-2">
                    <li>• Wallet addresses for transaction processing</li>
                    <li>• Trading preferences and settings</li>
                    <li>• Communications with our support team</li>
                    <li>• Usage data and analytics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="space-y-2">
                    <li>• Provide and maintain our trading services</li>
                    <li>• Process transactions and send confirmations</li>
                    <li>• Respond to your comments and questions</li>
                    <li>• Improve our platform and user experience</li>
                    <li>• Comply with legal obligations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information in the following circumstances:
                </p>
                <ul className="space-y-2 text-muted-foreground mt-4">
                  <li>• With your consent</li>
                  <li>• To comply with legal requirements</li>
                  <li>• To protect our rights and safety</li>
                  <li>• In connection with a business transfer</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method 
                  of transmission over the internet is 100% secure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="space-y-2">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request deletion of your information</li>
                    <li>• Object to processing of your information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 space-y-1 text-muted-foreground">
                  <p>Email: privacy@memeotc.com</p>
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

export default Privacy;
