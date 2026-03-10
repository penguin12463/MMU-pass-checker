import { Shield, ArrowLeft, Users, Target, Heart } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-[#1E3A8A] to-[#0A192F] text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-cyan-100 hover:text-white mb-4 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <Shield size={40} />
            <h1 className="text-4xl font-bold">About Us</h1>
          </div>
          <p className="text-cyan-100 mt-2">
            Our mission to make the internet a safer place for everyone
          </p>
        </div>
      </header>

      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-4">Welcome to MMU SecurePass</h2>
            <p className="text-gray-700 text-lg mb-4">
              We believe that everyone deserves to feel safe and secure online. MMU SecurePass 
              was created to empower individuals and organizations with the tools and knowledge they 
              need to protect their digital identities.
            </p>
            <p className="text-gray-700 text-lg">
              In an era where data breaches and cyber attacks are increasingly common, having a strong 
              password is no longer optional—it's essential. Our platform makes it easy to check your 
              password strength and verify if it's been compromised in known data breaches.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To provide free, accessible security tools that help everyone create and maintain 
                strong passwords.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-700">
                Privacy, transparency, and user empowerment guide everything we do.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Community</h3>
              <p className="text-gray-700">
                Serving millions of users worldwide who trust us to help keep them secure.
              </p>
            </Card>
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Why We Built This</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The inspiration for MMU SecurePass came from seeing too many friends and family 
                members affected by security breaches. Many people don't realize their passwords are 
                weak or have been compromised until it's too late.
              </p>
              <p>
                We wanted to create a tool that's:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Free:</strong> Security shouldn't be a premium feature</li>
                <li><strong>Easy to use:</strong> No technical knowledge required</li>
                <li><strong>Private:</strong> Your passwords are never stored or transmitted</li>
                <li><strong>Educational:</strong> We help you understand why security matters</li>
                <li><strong>Comprehensive:</strong> Strength checking and breach detection in one place</li>
              </ul>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-700 mb-4">
              We take your privacy seriously. Here's our guarantee:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">✓ We Do</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Perform all checks in your browser</li>
                  <li>• Use secure, privacy-preserving methods</li>
                  <li>• Provide transparent information</li>
                  <li>• Keep our tools free and accessible</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">✗ We Don't</h3>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Store your passwords</li>
                  <li>• Track your personal information</li>
                  <li>• Share your data with third parties</li>
                  <li>• Require account creation</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Join Us in Making the Web Safer</h2>
            <p className="text-blue-800 text-lg mb-4">
              Whether you're an individual looking to improve your password security or an organization 
              seeking to educate your team, we're here to help. Together, we can create a more secure 
              digital world.
            </p>
            <div className="flex gap-4">
              <Link to="/contact">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Get in Touch
                </button>
              </Link>
              <Link to="/">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition border border-blue-300">
                  Try the Checker
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
