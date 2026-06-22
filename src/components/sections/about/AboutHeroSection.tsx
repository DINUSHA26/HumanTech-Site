import React from 'react';
import Image from 'next/image';
import { HERO_BANNERS } from '@/config/banners';

export default function AboutHeroSection() {
  const config = HERO_BANNERS.about;
  
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-36 pb-16 px-6 bg-neutral-900 text-white">
      {config.bgImage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={config.bgImage}
            alt="About Us Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/95 via-accent-blue/75 to-[#2DC1FF]/80 z-10" />
        </div>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-r ${config.bgGradient || 'from-accent-teal to-accent-blue'} z-0`} />
      )}

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-8 text-left z-20 animate-fade-in-up">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            {config.title}
          </h1>
          {config.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-white/90 text-sm sm:text-base mb-4 last:mb-0 leading-relaxed max-w-3xl">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
