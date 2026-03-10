import { Shield, Lock, Eye } from "lucide-react";

export function Hero() {
  return (
    <div className="w-full bg-gradient-to-br from-[#1E3A8A] via-[#0A192F] to-[#1E3A8A] text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Shield size={64} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold">
            MMU SecurePass
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Protect your digital life with strong, secure passwords
          </p>
          
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Check your password strength in real-time and verify if it's been compromised in data breaches. 
            Your security is our priority - all checks are performed securely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Lock className="mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-lg mb-2">Strength Analysis</h3>
              <p className="text-sm text-blue-100">
                Real-time password strength evaluation with detailed criteria
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Shield className="mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-lg mb-2">Breach Detection</h3>
              <p className="text-sm text-blue-100">
                Check if your password appears in known data breaches
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Eye className="mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-lg mb-2">Privacy First</h3>
              <p className="text-sm text-blue-100">
                Your passwords are never stored or transmitted insecurely
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
