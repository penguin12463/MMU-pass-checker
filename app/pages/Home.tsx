import { Hero } from "../components/Hero";
import { PasswordChecker } from "../components/PasswordChecker";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Hero />
      
      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <PasswordChecker />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
