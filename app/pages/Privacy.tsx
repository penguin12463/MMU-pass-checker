import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";

export function Privacy() {
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
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-gray-300 mt-2">
            Last updated: February 24, 2026
          </p>
        </div>
      </header>

      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700">
              At MMU SecurePass, your privacy is our top priority. This Privacy Policy explains 
              how we handle information when you use our password strength checking and breach detection 
              services. The short version: we don't collect, store, or transmit your passwords.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Information We Don't Collect</h2>
            <p className="text-gray-700 mb-4">
              We want to be crystal clear about what we don't collect:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc">
              <li><strong>Your Passwords:</strong> We never receive, store, or transmit your actual passwords</li>
              <li><strong>Password Hashes:</strong> We don't store any form of your password, hashed or otherwise</li>
              <li><strong>Personal Account Information:</strong> We don't require or collect login credentials</li>
              <li><strong>Identifying Information:</strong> We don't link password checks to individual users</li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">How Our Service Works</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Password Strength Checking</h3>
                <p className="text-gray-700">
                  All password strength analysis happens entirely in your web browser using JavaScript. 
                  Your password never leaves your device. We simply apply algorithms to evaluate 
                  length, complexity, and pattern recognition locally.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Breach Detection</h3>
                <p className="text-gray-700 mb-2">
                  Our breach detection is a demonstration that uses a list of common compromised 
                  passwords stored locally in your browser. In a production environment, this would 
                  use the Have I Been Pwned API with k-anonymity:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Your password is hashed using SHA-1 locally in your browser</li>
                  <li>Only the first 5 characters of the hash are sent to the API</li>
                  <li>The API returns all hash suffixes matching those 5 characters</li>
                  <li>Your browser checks locally if your full hash appears in the results</li>
                </ol>
                <p className="text-gray-700 mt-2 text-sm italic">
                  This k-anonymity model means the API never receives enough information to 
                  determine your actual password.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Information We May Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect minimal, non-identifying information to improve our service:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc">
              <li><strong>Usage Analytics:</strong> Anonymous data about page views and feature usage</li>
              <li><strong>Browser Information:</strong> Browser type and version for compatibility</li>
              <li><strong>Aggregate Statistics:</strong> General patterns to improve the tool (e.g., "X% of passwords checked are weak")</li>
            </ul>
            <p className="text-gray-700 mt-4">
              This information is anonymous and cannot be linked back to any individual user or specific password.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700">
              We use minimal cookies only for essential functionality:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc mt-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Anonymous usage statistics (can be opted out)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We do not use advertising cookies or sell your data to third parties.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We may use the following third-party services:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc">
              <li><strong>Have I Been Pwned API:</strong> For breach detection (uses k-anonymity for privacy)</li>
              <li><strong>Analytics Providers:</strong> For anonymous usage statistics</li>
              <li><strong>Hosting Services:</strong> To deliver the website to you</li>
            </ul>
            <p className="text-gray-700 mt-4">
              None of these services receive your passwords or personally identifiable information.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-700">
              Since we don't collect your passwords, there's no password data to secure on our servers. 
              All processing happens in your browser. However, we still implement industry-standard 
              security measures:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc mt-4">
              <li>HTTPS encryption for all connections</li>
              <li>Regular security audits of our codebase</li>
              <li>Secure hosting infrastructure</li>
              <li>No storage of sensitive information</li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 list-disc">
              <li>Use our service without creating an account</li>
              <li>Opt out of analytics cookies</li>
              <li>Request information about any data we've collected (though we collect minimal data)</li>
              <li>Delete any data associated with you (contact us)</li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our service is available to all ages. Since we don't collect personal information or 
              passwords, there is no special concern for children's data. However, we recommend 
              parental guidance for users under 13.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify users of any 
              material changes by posting the new policy on this page and updating the "Last updated" 
              date at the top.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our practices, please contact us:
            </p>
            <Link to="/contact">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Contact Us
              </button>
            </Link>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
