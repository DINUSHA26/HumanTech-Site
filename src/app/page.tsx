import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import AppServicesSection from '@/components/sections/AppServicesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import CtaBannerSection from '@/components/sections/CtaBannerSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <AppServicesSection />
      <HowItWorksSection />
      <CtaBannerSection />
    </>
  );
}

