import { Shield, ArrowLeft, Mail, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-[#1E3A8A] to-[#0A192F] text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-4 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <MessageSquare size={40} />
            <h1 className="text-4xl font-bold">Contact Us</h1>
          </div>
          <p className="text-emerald-100 mt-2">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </header>

      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-600 text-sm mb-2">Send us an email anytime</p>
                  <a href="" className="text-blue-600 hover:underline">
                    Send an Email
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MessageSquare className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Support</h3>
                  <p className="text-gray-600 text-sm mb-2">Get help with your questions</p>
                  <a href="#" className="text-purple-600 hover:underline">
                    Visit Help Center
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-green-600" size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-green-900">Message Sent!</h2>
                <p className="text-gray-700">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your question or feedback..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto gap-2">
                    <Send size={16} />
                    Send Message
                  </Button>
                </form>
              </>
            )}
          </Card>

          <Card className="p-8 mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <h2 className="text-xl font-bold mb-3 text-blue-900">Common Questions?</h2>
            <p className="text-blue-800 mb-4">
              Before reaching out, you might find your answer in our FAQ section.
            </p>
            <Link to="/faq">
              <Button variant="outline" className="bg-white border-blue-300 text-blue-700 hover:bg-blue-100">
                Visit FAQ
              </Button>
            </Link>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
