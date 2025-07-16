import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesHighlight from '../components/ServicesHighlight';
import AnimatedCounters from '../components/AnimatedCounters';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesHighlight />
      <AnimatedCounters />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
