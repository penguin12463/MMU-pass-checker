import { Shield, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";

export function BestPractices() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-[#1E3A8A] to-[#0A192F] text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-purple-100 hover:text-white mb-4 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <Shield size={40} />
            <h1 className="text-4xl font-bold">Best Practices</h1>
          </div>
          <p className="text-purple-100 mt-2">
            Industry-standard best practices for password security
          </p>
        </div>
      </header>

      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Password Management Best Practices</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Use a Password Manager",
                  description: "A password manager is the cornerstone of good password hygiene. It allows you to use unique, complex passwords for every account without needing to remember them all.",
                  benefits: [
                    "Generates strong, random passwords automatically",
                    "Stores passwords securely with encryption",
                    "Auto-fills login credentials",
                    "Syncs across all your devices",
                    "Alerts you to weak or reused passwords"
                  ]
                },
                {
                  title: "Never Reuse Passwords",
                  description: "Using the same password across multiple accounts is one of the biggest security risks. If one account is compromised, all accounts using that password are vulnerable.",
                  benefits: [
                    "Limits damage from a single breach",
                    "Prevents credential stuffing attacks",
                    "Protects your most important accounts",
                    "Makes password manager essential (and easier)"
                  ]
                },
                {
                  title: "Change Compromised Passwords Immediately",
                  description: "If you receive notification that an account has been breached, change your password right away. Also change passwords on any other accounts where you used the same or similar passwords.",
                  benefits: [
                    "Stops unauthorized access quickly",
                    "Prevents further damage",
                    "Shows proactive security awareness",
                    "Opportunity to upgrade to stronger password"
                  ]
                },
                {
                  title: "Regular Security Audits",
                  description: "Periodically review your passwords and security settings. Most password managers have built-in tools to identify weak, old, or reused passwords.",
                  benefits: [
                    "Identifies weak passwords to update",
                    "Finds accounts you forgot about",
                    "Ensures 2FA is enabled where available",
                    "Keeps you aware of your security posture"
                  ]
                }
              ].map((practice, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="text-purple-600" size={24} />
                    {practice.title}
                  </h3>
                  <p className="text-gray-700 mb-3">{practice.description}</p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-purple-900 mb-2">Key Benefits:</p>
                    <ul className="space-y-1">
                      {practice.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-purple-800 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Account Security Checklist</h2>
            <p className="text-gray-700 mb-4">
              Use this checklist to ensure your accounts are properly secured:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Enable two-factor authentication (2FA)",
                "Use unique password for each account",
                "Password is at least 12 characters long",
                "Avoid personal information in passwords",
                "Update passwords if account is breached",
                "Review account activity regularly",
                "Set up login alerts when available",
                "Keep recovery email/phone updated",
                "Don't share passwords with others",
                "Store passwords in password manager only",
                "Use security questions wisely (or fake answers)",
                "Log out of public/shared computers"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">For Organizations & Teams</h2>
            <p className="text-gray-700 mb-4">
              If you're responsible for security in an organization, implement these policies:
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Password Policy</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Minimum password length requirements (12+ characters)</li>
                  <li>• Mandatory 2FA for all accounts</li>
                  <li>• Regular password audits and breach monitoring</li>
                  <li>• Password expiration only when compromised (not on schedule)</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Employee Training</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Regular security awareness training</li>
                  <li>• Phishing simulation exercises</li>
                  <li>• Clear reporting procedures for security incidents</li>
                  <li>• Provide access to enterprise password manager</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">Access Management</h3>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Principle of least privilege</li>
                  <li>• Regular access reviews and revocations</li>
                  <li>• Immediate deprovisioning when employees leave</li>
                  <li>• Use SSO (Single Sign-On) where possible</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">The Bottom Line</h2>
            <p className="text-purple-800 text-lg">
              Good password practices aren't about making your life harder—they're about making it 
              easier for you and harder for attackers. With a password manager and 2FA, you can have 
              both convenience and security. Make these practices part of your daily routine, and 
              they'll become second nature.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
