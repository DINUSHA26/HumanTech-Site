import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { HERO_BANNERS } from '@/config/banners';

export default function HeroSection() {
  const config = HERO_BANNERS.home;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 px-6 md:px-12 bg-neutral-900 text-white">
      {/* Background Image */}
      {config.bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={config.bgImage}
            alt="Family Care Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/85 via-accent-teal/40 to-accent-blue/90 z-10" />
        </div>
      )}

      {/* Hero Right Logo Watermark (Absolute aligned on right, half visible) */}
      {config.watermark && (
        <div className="absolute right-[-300px] top-1/2 -translate-y-1/2 z-10 select-none opacity-20 hidden lg:block w-[600px] h-[600px] pointer-events-none">
          <div className="relative w-full h-full animate-pulse-slow">
            <Image
              src={config.watermark}
              alt="Logo watermark"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-20">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-9 flex flex-col items-start text-left animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-4">
            {config.title}
          </h1>
          {config.subtitle && (
            <h2 className="text-xl sm:text-2xl font-bold text-white/95 mb-6">
              {config.subtitle}
            </h2>
          )}
          <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed mb-8">
            {config.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {config.button1Text && config.button1Href && (
              <Button
                href={config.button1Href}
                variant="white"
                size="lg"
                className="text-center"
              >
                {config.button1Text}
              </Button>
            )}
            {config.button2Text && config.button2Href && (
              <Button
                href={config.button2Href}
                variant="outline"
                size="lg"
                className="text-center"
              >
                {config.button2Text}
              </Button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
