import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";

export function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-[#1E3A8A] to-[#0A192F] text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-4 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <Shield size={40} />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-gray-300 mt-2">
            Last updated: February 24, 2026
          </p>
        </div>
      </header>

      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using MMU SecurePass, you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to these terms, please do 
              not use our service.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              MMU SecurePass provides the following services:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc">
              <li>Real-time password strength evaluation</li>
              <li>Password breach detection against known compromised passwords</li>
              <li>Educational resources about password security</li>
              <li>Security best practices and guidance</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Our service is provided free of charge and is intended for educational and security 
              awareness purposes.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">3. Use of Service</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Permitted Use</h3>
                <p className="text-gray-700">You may use this service to:</p>
                <ul className="space-y-1 text-gray-700 ml-6 list-disc mt-2">
                  <li>Check the strength of your passwords</li>
                  <li>Verify if passwords appear in known data breaches</li>
                  <li>Learn about password security best practices</li>
                  <li>Share our resources with others</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prohibited Use</h3>
                <p className="text-gray-700">You may NOT:</p>
                <ul className="space-y-1 text-gray-700 ml-6 list-disc mt-2">
                  <li>Attempt to reverse engineer or hack our service</li>
                  <li>Use automated tools to overwhelm our servers</li>
                  <li>Check passwords that don't belong to you</li>
                  <li>Misrepresent yourself or your affiliation</li>
                  <li>Use the service for any illegal purposes</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">4. No Warranty</h2>
            <p className="text-gray-700 mb-4">
              This service is provided "as is" without any warranties, expressed or implied. We make 
              no guarantees about:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc">
              <li>The accuracy or completeness of password strength assessments</li>
              <li>The completeness of breach databases</li>
              <li>Continuous availability of the service</li>
              <li>Protection from all security threats</li>
            </ul>
            <p className="text-gray-700 mt-4">
              While we strive for accuracy, no password checker can guarantee 100% security. Users 
              should use multiple security measures and exercise good judgment.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              MMU SecurePass and its operators shall not be liable for:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc">
              <li>Any damages arising from use or inability to use the service</li>
              <li>Unauthorized access to your accounts despite using our service</li>
              <li>Errors or omissions in breach detection</li>
              <li>Any security breaches or data loss</li>
              <li>Actions taken based on information provided by our service</li>
            </ul>
            <p className="text-gray-700 mt-4">
              You use this service at your own risk. We are not responsible for the security of your 
              accounts or passwords.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">6. Privacy and Data Handling</h2>
            <p className="text-gray-700 mb-4">
              Our handling of data is governed by our Privacy Policy. Key points:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc">
              <li>We do not store or transmit your passwords</li>
              <li>All password checking happens in your browser</li>
              <li>We collect minimal anonymous usage data</li>
              <li>We use secure connections (HTTPS) for all communications</li>
            </ul>
            <p className="text-gray-700 mt-4">
              For complete details, please read our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">7. Educational Purpose</h2>
            <p className="text-gray-700">
              This service is designed for educational and awareness purposes. The information and 
              tools provided should be used as part of a comprehensive security strategy. We recommend:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc mt-4">
              <li>Using a reputable password manager</li>
              <li>Enabling two-factor authentication where available</li>
              <li>Regularly updating passwords for compromised accounts</li>
              <li>Following security best practices outlined on our site</li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">8. Third-Party Services</h2>
            <p className="text-gray-700">
              Our service may integrate with or reference third-party services (such as Have I Been 
              Pwned). We are not responsible for the content, accuracy, or practices of these third 
              parties. Your use of third-party services is subject to their own terms and policies.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">9. Intellectual Property</h2>
            <p className="text-gray-700">
              The content, design, and code of MMU SecurePass are protected by copyright and 
              other intellectual property laws. You may not copy, modify, or distribute our service 
              without permission. However, you are welcome to:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc mt-4">
              <li>Link to our website</li>
              <li>Share our educational content with attribution</li>
              <li>Use screenshots for educational purposes</li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to this page. Your continued use of the service after changes 
              constitutes acceptance of the modified terms. We encourage you to review these terms 
              periodically.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
            <p className="text-gray-700">
              We reserve the right to terminate or suspend access to our service immediately, without 
              prior notice or liability, for any reason, including breach of these terms. Upon 
              termination, your right to use the service will cease immediately.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
            <p className="text-gray-700">
              These terms shall be governed by and construed in accordance with applicable laws, 
              without regard to conflict of law provisions. Any disputes arising from these terms 
              or use of the service shall be resolved in appropriate courts.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <Link to="/contact">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Contact Us
              </button>
            </Link>
          </Card>

          <Card className="p-8 bg-blue-50 border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>By using MMU SecurePass, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms of Service.</strong>
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
