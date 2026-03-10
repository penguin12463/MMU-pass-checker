import { useState, useMemo } from "react";
import { Eye, EyeOff, Check, X, Shield, AlertTriangle, Copy, CheckCheck, Wand2 } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

interface PasswordCriteria {
  label: string;
  test: (password: string) => boolean;
}

const criteria: PasswordCriteria[] = [
  { label: "At least 8 characters", test: (pwd) => pwd.length >= 8 },
  { label: "Contains uppercase letter", test: (pwd) => /[A-Z]/.test(pwd) },
  { label: "Contains lowercase letter", test: (pwd) => /[a-z]/.test(pwd) },
  { label: "Contains number", test: (pwd) => /\d/.test(pwd) },
  { label: "Contains special character", test: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd) },
];

async function sha1(str: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-1", msgBuffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

async function checkHIBP(password: string): Promise<number> {
  const hash = await sha1(password);
  const prefix = hash.slice(0, 5);
  const suffix = hash.slice(5);
  const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
    headers: { "Add-Padding": "true" },
  });
  if (!response.ok) throw new Error("HIBP API unavailable");
  const text = await response.text();
  const match = text.split(/\r?\n/).find((line) => line.split(":")[0] === suffix);
  return match ? parseInt(match.split(":")[1], 10) : 0;
}

function generateStrongAlternative(password: string): { suggestion: string; improvements: string[] } {
  const improvements: string[] = [];
  let result = password;

  if (result.length < 8) {
    const words = ["Secure", "Safe", "Guard"];
    result += words[result.length % words.length];
    improvements.push("Extended to meet minimum length requirement");
  }

  if (!/[A-Z]/.test(result)) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
    improvements.push("Capitalized first letter");
  }

  if (!/[a-z]/.test(result)) {
    result = result.slice(0, -1) + result.slice(-1).toLowerCase();
    improvements.push("Added lowercase character");
  }

  if (!/\d/.test(result)) {
    const numMap: [string, string][] = [["a", "4"], ["e", "3"], ["i", "1"], ["o", "0"]];
    let applied = false;
    for (const [ch, num] of numMap) {
      const idx = result.toLowerCase().indexOf(ch);
      if (idx !== -1) {
        const original = result[idx];
        result = result.slice(0, idx) + num + result.slice(idx + 1);
        improvements.push(`Substituted '${original}' → '${num}' for added complexity`);
        applied = true;
        break;
      }
    }
    if (!applied) {
      result += "42";
      improvements.push("Appended numbers for added complexity");
    }
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(result)) {
    const specials = ["!", "@", "#", "$"];
    result += specials[result.length % specials.length];
    improvements.push("Appended special character");
  }

  if (result.length < 12) {
    const pads = ["Xk7", "Zn9", "Qp4", "Wm2"];
    result += pads[result.length % pads.length];
    improvements.push("Padded to recommended length (12+ characters)");
  }

  return { suggestion: result, improvements };
}

export function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [copied, setCopied] = useState(false);
  const [breachChecked, setBreachChecked] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [breachError, setBreachError] = useState<string | null>(null);
  const [breachResult, setBreachResult] = useState<{
    breached: boolean;
    count?: number;
  } | null>(null);

  const calculateStrength = (): { score: number; label: string; color: string } => {
    if (!password) return { score: 0, label: "", color: "" };
    const passed = criteria.filter((c) => c.test(password)).length;
    const percentage = (passed / criteria.length) * 100;
    if (passed <= 2) return { score: percentage, label: "Weak", color: "text-red-500" };
    if (passed === 3) return { score: percentage, label: "Fair", color: "text-orange-500" };
    if (passed === 4) return { score: percentage, label: "Good", color: "text-yellow-500" };
    return { score: percentage, label: "Strong", color: "text-green-500" };
  };

  const strength = calculateStrength();
  const allCriteriaMet = criteria.every((c) => c.test(password));

  const suggestion = useMemo(() => {
    if (!password || allCriteriaMet) return null;
    return generateStrongAlternative(password);
  }, [password, allCriteriaMet]);

  const checkBreach = async () => {
    if (!password) return;
    setIsChecking(true);
    setBreachChecked(false);
    setBreachError(null);
    try {
      const count = await checkHIBP(password);
      setBreachResult({ breached: count > 0, count: count > 0 ? count : undefined });
      setBreachChecked(true);
    } catch {
      setBreachError("Unable to reach the breach database. Please check your internet connection and try again.");
    } finally {
      setIsChecking(false);
    }
  };

  const copySuggestion = async () => {
    if (!suggestion) return;
    await navigator.clipboard.writeText(suggestion.suggestion);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setBreachChecked(false);
    setBreachResult(null);
    setBreachError(null);
  };

  return (
    <Card className="w-full max-w-4xl p-8 space-y-6 shadow-lg">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Password Strength Checker</h2>
        <p className="text-gray-600">
          Enter a password to check its strength and see if it's been compromised in data breaches
        </p>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            placeholder="Enter your password"
            className="pr-10 h-12 text-lg"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {password && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Password Strength:</span>
              <span className={`text-sm font-semibold ${strength.color}`}>
                {strength.label}
              </span>
            </div>
            <Progress
              value={strength.score}
              className="h-2"
              indicatorClassName={
                strength.label === "Weak" ? "bg-red-500" :
                strength.label === "Fair" ? "bg-orange-500" :
                strength.label === "Good" ? "bg-yellow-500" :
                "bg-green-500"
              }
            />
          </div>
        )}

        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700">Password Requirements:</p>
          <ul className="space-y-2">
            {criteria.map((criterion, index) => {
              const passes = criterion.test(password);
              return (
                <li key={index} className="flex items-center gap-2 text-sm">
                  {passes ? (
                    <Check size={16} className="text-green-500 flex-shrink-0" />
                  ) : (
                    <X size={16} className="text-gray-400 flex-shrink-0" />
                  )}
                  <span className={passes ? "text-green-700" : "text-gray-600"}>
                    {criterion.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Suggested Strong Password */}
        {suggestion && (
          <div className="pt-4 border-t space-y-3">
            <div className="flex items-center gap-2">
              <Wand2 size={18} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900">Suggested Strong Password</h3>
            </div>
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <code
                  className={`text-sm font-mono flex-1 break-all transition-all ${
                    showSuggestion ? "text-blue-900" : "blur-sm select-none text-blue-900"
                  }`}
                >
                  {suggestion.suggestion}
                </code>
                <div className="flex gap-2 flex-shrink-0">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setShowSuggestion(!showSuggestion)}
                    className="bg-white border-blue-300 text-blue-700 hover:bg-blue-50"
                  >
                    {showSuggestion ? <EyeOff size={14} /> : <Eye size={14} />}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copySuggestion}
                    className="bg-white border-blue-300 text-blue-700 hover:bg-blue-50"
                  >
                    {copied ? <CheckCheck size={14} /> : <Copy size={14} />}
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </div>
              {suggestion.improvements.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-blue-800 mb-1">Improvements applied:</p>
                  <ul className="space-y-0.5">
                    {suggestion.improvements.map((imp, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-xs text-blue-700">
                        <Check size={12} className="text-blue-600 flex-shrink-0" />
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="text-xs text-blue-600">
                This is a suggested example — consider using a password manager to generate and store unique passwords.
              </p>
            </div>
          </div>
        )}

        {/* Breach Check Section */}
        <div className="pt-4 border-t space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">Data Breach Check</h3>
              <p className="text-sm text-gray-600">
                Check if this password has appeared in known data breaches
              </p>
            </div>
            <Button
              onClick={checkBreach}
              disabled={!password || isChecking}
              className="gap-2"
            >
              <Shield size={16} />
              {isChecking ? "Checking..." : "Check Breaches"}
            </Button>
          </div>

          {breachError && (
            <div className="p-4 rounded-lg border-2 bg-yellow-50 border-yellow-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-0.5" size={24} />
                <p className="text-sm text-yellow-800">{breachError}</p>
              </div>
            </div>
          )}

          {breachChecked && breachResult && (
            <div className={`p-4 rounded-lg border-2 ${
              breachResult.breached
                ? "bg-red-50 border-red-200"
                : "bg-green-50 border-green-200"
            }`}>
              <div className="flex items-start gap-3">
                {breachResult.breached ? (
                  <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={24} />
                ) : (
                  <Shield className="text-green-600 flex-shrink-0 mt-0.5" size={24} />
                )}
                <div className="space-y-1">
                  <h4 className={`font-semibold ${
                    breachResult.breached ? "text-red-900" : "text-green-900"
                  }`}>
                    {breachResult.breached
                      ? "⚠️ Password Compromised"
                      : "✓ No Breaches Found"}
                  </h4>
                  <p className={`text-sm ${
                    breachResult.breached ? "text-red-800" : "text-green-800"
                  }`}>
                    {breachResult.breached
                      ? `This password has appeared in ${breachResult.count?.toLocaleString()} known data breaches. Do not use this password.`
                      : "This password hasn't been found in any known data breaches. However, always use a unique password for each account."}
                  </p>
                </div>
              </div>
            </div>
          )}

          <p className="text-xs text-gray-500">
            Powered by{" "}
            <a href="https://haveibeenpwned.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
              Have I Been Pwned
            </a>
            . Only the first 5 characters of a SHA-1 hash are sent — your password never leaves your browser.
          </p>
        </div>
      </div>
    </Card>
  );
}
