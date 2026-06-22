import React from 'react';
import ContactHeroSection from '@/components/sections/contact/ContactHeroSection';
import ContactFormSection from '@/components/sections/contact/ContactFormSection';
import BottomCtaSection from '@/components/sections/BottomCtaSection';
import { PROMO_CTAS } from '@/config/banners';

export const metadata = {
  title: 'Contact Us — HumanTec.lk',
  description: 'Reach out to the HumanTec support team, consult a care agent, or send us inquiries about our wellness products.',
};

export default function ContactPage() {
  const ctaConfig = PROMO_CTAS.about;

  return (
    <div className="bg-bg-light min-h-[70vh]">
      <ContactHeroSection />
      <ContactFormSection />
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
