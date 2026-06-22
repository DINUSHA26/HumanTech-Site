import React from 'react';
import { HERO_BANNERS } from '@/config/banners';

export default function ContactHeroSection() {
  const config = HERO_BANNERS.contact;

  return (
    <div className={`bg-gradient-to-r ${config.bgGradient || 'from-accent-teal to-accent-blue'} pt-36 pb-20 px-6 text-white text-center`}>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        {config.title}
      </h1>
      <p className="text-white/85 text-lg max-w-xl mx-auto">
        {config.description}
      </p>
    </div>
  );
}
