import React from 'react';
import { HERO_BANNERS } from '@/config/banners';
import Button from '../../ui/Button';

export default function AppHeroSection() {
  const config = HERO_BANNERS.app;

  return (
    <div className={`bg-gradient-to-r ${config.bgGradient || 'from-accent-teal to-accent-blue'} pt-36 pb-20 px-6 text-white text-center`}>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        {config.title}
      </h1>
      <p className="text-white/85 text-lg max-w-xl mx-auto mb-8">
        {config.description}
      </p>
      <Button variant="white" size="lg" href="#download">
        Download App Now
      </Button>
    </div>
  );
}
