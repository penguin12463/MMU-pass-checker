import { Hero } from "../components/Hero";
import { PasswordChecker } from "../components/PasswordChecker";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Hero />
      
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <PasswordChecker />
      </main>
      
      <Footer />
    </div>
  );
}
