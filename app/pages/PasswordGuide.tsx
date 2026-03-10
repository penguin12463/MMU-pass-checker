import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";

export function PasswordGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-[#1E3A8A] to-[#0A192F] text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <Shield size={40} />
            <h1 className="text-4xl font-bold">Password Guide</h1>
          </div>
          <p className="text-blue-100 mt-2">
            Everything you need to know about creating strong passwords
          </p>
        </div>
      </header>

      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">What Makes a Strong Password?</h2>
            <p className="text-gray-700 mb-4">
              A strong password is your first line of defense against unauthorized access to your accounts. 
              Here are the key characteristics of a secure password:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>At least 12-16 characters long (longer is better)</li>
              <li>Mix of uppercase and lowercase letters</li>
              <li>Includes numbers and special characters</li>
              <li>Not based on personal information (birthdays, names, etc.)</li>
              <li>Unique for each account</li>
              <li>Not a common word or phrase</li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Password Creation Methods</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">1. Passphrase Method</h3>
                <p className="text-gray-700 mb-2">
                  Create a memorable phrase using random words:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  correct-horse-battery-staple
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  This method creates passwords that are both secure and memorable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">2. Random Character Method</h3>
                <p className="text-gray-700 mb-2">
                  Use a password generator to create truly random passwords:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  K9$mP2@vL5#nQ8
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Most secure, but requires a password manager to remember.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">3. Sentence Method</h3>
                <p className="text-gray-700 mb-2">
                  Turn a memorable sentence into a password using first letters and substitutions:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">"I love to eat 3 apples every day!"</p>
                  <p className="font-mono text-sm mt-2">ILt3@3a3D!</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">❌ Don't Use</h3>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Sequential numbers (123456)</li>
                  <li>• Keyboard patterns (qwerty)</li>
                  <li>• Personal info (birthday, name)</li>
                  <li>• Common words (password, admin)</li>
                  <li>• Simple substitutions (pa$$word)</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">✓ Do Use</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Random combinations</li>
                  <li>• Password manager</li>
                  <li>• Unique passwords per account</li>
                  <li>• Long passphrases</li>
                  <li>• Two-factor authentication</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-blue-50 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Pro Tip: Use a Password Manager</h2>
            <p className="text-blue-800">
              The best way to manage strong, unique passwords for all your accounts is to use a reputable 
              password manager. Popular options include 1Password, Bitwarden, LastPass, and Dashlane. 
              These tools can generate, store, and auto-fill complex passwords for you.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
