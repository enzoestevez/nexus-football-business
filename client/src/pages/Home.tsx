import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PlayersPreview from "@/components/PlayersPreview";
import Profile from "@/components/Profile";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * Home Page
 * Landing page completa para Nexus Fútbol & Business
 * Design: Minimalismo Legal Corporativo
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <PlayersPreview />
        <Profile />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
