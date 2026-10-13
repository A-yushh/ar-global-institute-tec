// Home Page in TypeScript
import { memo } from 'react';
import HeroSection from '../components/home/HeroSection';
import ClassCategories from '../components/home/ClassCategories';
import BatchSection from '../components/home/BatchSection';
import ExtraActivities from '../components/home/ExtraActivities';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ComingSoonSection from '../components/home/ComingSoonSection';

export const Home = memo(function Home() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Class Categories */}
      <ClassCategories />

      {/* 3. Batches with Filter Tabs & Search */}
      <BatchSection />

      {/* 4. Extra Activities & Test Series */}
      <ExtraActivities />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Testimonials & Results */}
      <TestimonialsSection />

      {/* 7. IT Company – Coming Soon Section */}
      <ComingSoonSection />
    </div>
  );
});

export default Home;
