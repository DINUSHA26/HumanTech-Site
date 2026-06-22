import React from 'react';
import AboutHeroSection from '@/components/sections/about/AboutHeroSection';
import AboutMissionSection from '@/components/sections/about/AboutMissionSection';
import AboutWhatWeDoSection from '@/components/sections/about/AboutWhatWeDoSection';
import BottomCtaSection from '@/components/sections/BottomCtaSection';
import { PROMO_CTAS } from '@/config/banners';

export const metadata = {
  title: 'About Us — HumanTec.lk',
  description: 'Learn more about HumanTec, our mission to support independent living, and our unified digital health ecosystems.',
};

export default function AboutPage() {
  const ctaConfig = PROMO_CTAS.about;

  return (
    <div className="bg-bg-light min-h-[70vh]">
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutWhatWeDoSection />
      <BottomCtaSection
        title={ctaConfig.title}
        description={ctaConfig.description}
        buttonText={ctaConfig.buttonText}
        buttonHref={ctaConfig.buttonHref}
        bgImage={ctaConfig.bgImage}
      />
    </div>
  );
}
