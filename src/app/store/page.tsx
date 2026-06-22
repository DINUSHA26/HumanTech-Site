import React from 'react';
import StoreHeroSection from '@/components/sections/store/StoreHeroSection';
import StoreGridSection from '@/components/sections/store/StoreGridSection';

export const metadata = {
  title: 'Online Store — HumanTec.lk',
  description: 'Shop Drmini Robo, health trackers, supplements, and wellness essentials for your loved ones.',
};

export default function StorePage() {
  return (
    <div className="bg-bg-light min-h-[70vh]">
      <StoreHeroSection />
      <StoreGridSection />
    </div>
  );
}
