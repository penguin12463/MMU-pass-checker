import { Shield, ArrowLeft, Lock, UserX, Smartphone, Globe, Eye, AlertTriangle } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";

export function SecurityTips() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-[#1E3A8A] to-[#0A192F] text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-100 hover:text-white mb-4 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <Shield size={40} />
            <h1 className="text-4xl font-bold">Security Tips</h1>
          </div>
          <p className="text-indigo-100 mt-2">
            Essential security practices to protect your digital life
          </p>
        </div>
      </header>

      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Lock className="text-blue-600" size={28} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Use Two-Factor Authentication (2FA)</h2>
                <p className="text-gray-700 mb-4">
                  Enable 2FA on all accounts that support it. This adds an extra layer of security beyond 
                  just your password.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-white">Best 2FA Methods (in order of security):</h3>
                  <ol className="list-decimal list-inside space-y-1 text-gray-300">
                    <li>Hardware security keys (YubiKey, Titan)</li>
                    <li>Authenticator apps (Google Authenticator, Authy)</li>
                    <li>SMS codes (least secure, but better than nothing)</li>
                  </ol>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <UserX className="text-purple-600" size={28} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Recognize Phishing Attempts</h2>
                <p className="text-gray-700 mb-4">
                  Phishing is one of the most common ways attackers steal passwords. Be vigilant and look for these red flags:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Urgent or threatening language ("Your account will be closed!")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Suspicious sender email addresses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Requests for personal information or passwords</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Links that don't match the claimed destination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Poor grammar or spelling errors</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Smartphone className="text-green-600" size={28} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Keep Software Updated</h2>
                <p className="text-gray-700 mb-4">
                  Regular updates patch security vulnerabilities that hackers could exploit. Always update:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-white">Operating Systems</p>
                    <p className="text-sm text-gray-300">Windows, macOS, iOS, Android</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-white">Web Browsers</p>
                    <p className="text-sm text-gray-300">Chrome, Firefox, Safari, Edge</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-white">Apps & Software</p>
                    <p className="text-sm text-gray-300">All installed applications</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-white">Security Tools</p>
                    <p className="text-sm text-gray-300">Antivirus, firewalls, VPNs</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Globe className="text-orange-600" size={28} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Be Careful on Public Wi-Fi</h2>
                <p className="text-gray-700 mb-4">
                  Public Wi-Fi networks are often unsecured, making it easy for attackers to intercept your data.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">DON'T</div>
                    <p className="text-gray-700">Access sensitive accounts (banking, email) on public Wi-Fi</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">DO</div>
                    <p className="text-gray-700">Use a VPN (Virtual Private Network) when on public networks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">DO</div>
                    <p className="text-gray-700">Verify you're connecting to the legitimate network</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">DO</div>
                    <p className="text-gray-700">Disable auto-connect features on your devices</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Eye className="text-indigo-600" size={28} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Monitor Your Accounts</h2>
                <p className="text-gray-700 mb-4">
                  Regular monitoring helps you catch unauthorized access early.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    Review account activity and login history regularly
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    Set up alerts for suspicious activity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    Check your credit report annually
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    Use services like Have I Been Pwned to check for breaches
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Remember: Security is a Habit</h2>
            <p className="text-blue-800 text-lg">
              These practices might seem tedious at first, but they become second nature with time. 
              The small effort you put into securing your accounts today can save you from major 
              headaches tomorrow. Stay vigilant, stay safe!
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
