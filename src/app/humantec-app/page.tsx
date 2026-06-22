import React from 'react';
import AppHeroSection from '@/components/sections/app/AppHeroSection';
import AppAboutSection from '@/components/sections/app/AppAboutSection';
import AppSubscriptionsSection from '@/components/sections/app/AppSubscriptionsSection';
import AppFaqSection from '@/components/sections/app/AppFaqSection';
import BottomCtaSection from '@/components/sections/BottomCtaSection';
import { PROMO_CTAS } from '@/config/banners';

export const metadata = {
  title: 'HumanTec App — Total Peace of Mind',
  description: 'Download the HumanTec Care app for instant medical consultations, SOS emergency triggers, and health vault storage.',
};

export default function AppDetailsPage() {
  const ctaConfig = PROMO_CTAS.app;

  return (
    <div className="bg-bg-light min-h-[70vh]">
      <AppHeroSection />
      <AppAboutSection />
      <AppSubscriptionsSection />
      <AppFaqSection />
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
