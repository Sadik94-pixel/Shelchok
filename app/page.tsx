'use client';

import HeroSection from '../components/HeroSection';
import ProductCollection from '../components/ProductCollection';
import TechnologySection from '../components/TechnologySection';
import QualitySection from '../components/QualitySection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProductCollection />
      <TechnologySection />
      <QualitySection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}