import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 px-6 md:px-12 bg-neutral-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Family Care Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/85 via-accent-teal/40 to-accent-blue/90 z-10" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-20">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-8 flex flex-col items-start text-left animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-4">
            Smart Tech. Instant Care.
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-white/95 mb-6">
            Total Peace of Mind for Your Loved Ones.
          </h2>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed mb-8">
            Give your parents the independent life they want and the round-the-clock safety they deserve. Explore our curated wellness tech online, or download our app for instant medical care.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Button
              href="/store"
              variant="white"
              size="lg"
              className="text-center"
            >
              Shop Drmini Robo & Wellness
            </Button>
            <Button
              href="/humantec-app"
              variant="outline"
              size="lg"
              className="text-center"
            >
              Download the Care App
            </Button>
          </div>
        </div>

        {/* Hero Right Logo Watermark */}
        <div className="hidden lg:col-span-4 lg:flex items-center justify-end relative h-96 select-none opacity-20">
          <div className="relative w-80 h-80 animate-pulse-slow">
            <Image
              src="/Logo-1.png"
              alt="Logo watermark"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
