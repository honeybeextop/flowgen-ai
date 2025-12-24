import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { PerformanceSection } from '@/components/PerformanceSection';
import { Footer } from '@/components/Footer';
import { StarryBackground } from '@/components/StarryBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Full page starry background */}
      <div className="fixed inset-0 z-0">
        <StarryBackground />
      </div>
      
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <PerformanceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
