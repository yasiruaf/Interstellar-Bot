import Header  from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Roadmap from "./components/RoadmapSection";
import BuyBackSection from "./components/BuyBackSection";
import FAQsSection from "./components/FAQsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      < Header />
      < HeroSection />
      < FeaturesSection />
      < Roadmap />
      < BuyBackSection />
      < FAQsSection />
      < ContactSection />
    </main>
  );
}
