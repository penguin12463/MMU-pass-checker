import { Shield, Github, Twitter, Mail } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield size={24} className="text-blue-400" />
              <span className="font-bold text-white text-lg">MMU SecurePass</span>
            </div>
            <p className="text-sm text-gray-400">
              Helping you create and maintain strong, secure passwords for a safer digital life.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/password-guide" className="hover:text-blue-400 transition">Password Guide</Link></li>
              <li><Link to="/security-tips" className="hover:text-blue-400 transition">Security Tips</Link></li>
              <li><Link to="/best-practices" className="hover:text-blue-400 transition">Best Practices</Link></li>
              <li><Link to="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Built with security and privacy in mind
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 MMU SecurePass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}