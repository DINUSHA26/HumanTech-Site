import React from 'react';
import BottomCtaSection from './BottomCtaSection';
import { PROMO_CTAS } from '@/config/banners';

export default function CtaBannerSection() {
  const config = PROMO_CTAS.home;
  
  return (
    <BottomCtaSection
      title={config.title}
      description={config.description}
      buttonText={config.buttonText}
      buttonHref={config.buttonHref}
      bgImage={config.bgImage}
      overlayClassName="bg-gradient-to-r from-[#0066B1]/90 via-[#0066B1]/55 to-[#EFEFEF]/85"
    />
  );
}
