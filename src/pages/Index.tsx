import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrustIndicators />
      <Features />
      <Stats />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
