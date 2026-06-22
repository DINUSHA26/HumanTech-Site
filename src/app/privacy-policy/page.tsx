import React from 'react';
import PrivacyHeroSection from '@/components/sections/privacy/PrivacyHeroSection';
import PrivacyContentSection from '@/components/sections/privacy/PrivacyContentSection';
import BottomCtaSection from '@/components/sections/BottomCtaSection';
import { PROMO_CTAS } from '@/config/banners';

export const metadata = {
  title: 'Privacy Policy & Data Protection Notice — HumanTec.lk',
  description: 'In compliance with Personal Data Protection Act (PDPA), No. 9 of 2022 of Sri Lanka. Learn how we secure your healthcare data.',
};

export default function PrivacyPolicyPage() {
  const ctaConfig = PROMO_CTAS.home;

  return (
    <div className="bg-bg-light min-h-[70vh]">
      <PrivacyHeroSection />
      <PrivacyContentSection />
      <BottomCtaSection
        title={ctaConfig.title}
        description={ctaConfig.description}
        buttonText="Try a Consultation"
        buttonHref={ctaConfig.buttonHref}
        bgImage={ctaConfig.bgImage}
      />
    </div>
  );
}
