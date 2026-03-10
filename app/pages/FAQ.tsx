import { Shield, ArrowLeft, HelpCircle } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How often should I change my passwords?",
      answer: "Contrary to old advice, you don't need to change passwords on a schedule. Only change them when: (1) You suspect unauthorized access, (2) The service notifies you of a breach, (3) You've shared the password with someone, or (4) You used it on an unsecure computer. Regular changes without reason can lead to weaker passwords as people make small, predictable modifications."
    },
    {
      question: "Is it safe to write down my passwords?",
      answer: "Writing passwords on paper and storing them securely (like in a locked safe) is actually safer than many digital methods, as long as the physical security is strong. However, a password manager is much more convenient and secure for most people. Never write passwords on sticky notes on your monitor or in easily accessible places."
    },
    {
      question: "What's the difference between a password and a passphrase?",
      answer: "A password is typically a shorter string of mixed characters (e.g., 'K9$mP2@v'), while a passphrase is a longer sequence of words (e.g., 'correct-horse-battery-staple'). Passphrases are often easier to remember and can be just as secure or more secure due to their length. Both are valid approaches."
    },
    {
      question: "Are password managers safe?",
      answer: "Yes, reputable password managers are very safe. They use strong encryption, and even the company can't access your passwords. The master password is the key to everything, so make it extremely strong and unique. The risk of not using a password manager (weak or reused passwords) is much greater than any risk from using one."
    },
    {
      question: "What if I forget my master password?",
      answer: "Most password managers don't have a way to recover your master password because they don't store it. Some offer account recovery options using emergency contacts or recovery codes. It's crucial to: (1) Make your master password memorable but secure, (2) Set up recovery options if available, (3) Keep an emergency backup of critical passwords in a secure physical location."
    },
    {
      question: "Should I use the same password with a number at the end for different sites?",
      answer: "No, this is a bad practice. Attackers know people do this and will try variations. If one account is compromised, they'll try Password1, Password2, Password123, etc. on all your other accounts. Each account should have a completely unique password."
    },
    {
      question: "Is SMS two-factor authentication secure?",
      answer: "SMS 2FA is better than no 2FA, but it's the least secure option. SMS messages can be intercepted through SIM swapping attacks. When possible, use authenticator apps (like Google Authenticator or Authy) or hardware security keys (like YubiKey) instead. However, SMS 2FA is still much better than password-only."
    },
    {
      question: "What makes a password 'breached'?",
      answer: "A password is considered breached when it appears in a database leak from a hacked website or service. These databases are often posted online and used by attackers. Even if YOUR account wasn't hacked, if the password appears in any breach anywhere, attackers will try it on your accounts. This is why using unique passwords for each account is critical."
    },
    {
      question: "Can I trust browser password managers?",
      answer: "Modern browser password managers (Chrome, Safari, Firefox, Edge) are reasonably secure and much better than reusing passwords or using weak ones. However, dedicated password managers often offer more features like security audits, breach monitoring, and secure sharing. For maximum security, use a dedicated password manager."
    },
    {
      question: "How long should my password be?",
      answer: "At minimum, 12 characters. However, 16+ characters is ideal. Length is one of the most important factors in password strength. A 16-character password is exponentially harder to crack than an 8-character one, even if the shorter one uses complex characters."
    },
    {
      question: "What should I do if my password was found in a breach?",
      answer: "Change it immediately on the affected account. Then check all other accounts where you might have used the same or similar password and change those too. Enable 2FA if you haven't already. Consider running a security audit of all your passwords using your password manager's built-in tools."
    },
    {
      question: "Do I really need different passwords for everything?",
      answer: "Yes, absolutely. This is one of the most important security practices. When credentials from one site are stolen (which happens frequently), attackers try them on other popular sites. This is called 'credential stuffing.' By using unique passwords, you ensure that a breach at one site can't compromise your other accounts."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-[#1E3A8A] to-[#0A192F] text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-green-100 hover:text-white mb-4 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <HelpCircle size={40} />
            <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          </div>
          <p className="text-green-100 mt-2">
            Find answers to common questions about password security
          </p>
        </div>
      </header>

      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <Card className="p-8 bg-blue-50 border-blue-200">
            <h2 className="text-xl font-bold mb-3 text-blue-900">Still Have Questions?</h2>
            <p className="text-blue-800 mb-4">
              If you couldn't find the answer you were looking for, feel free to reach out to us.
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
