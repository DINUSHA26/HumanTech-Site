import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

export default function CtaBannerSection() {
  return (
    <section className="relative py-28 px-6 md:px-12 bg-neutral-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Elderly couple care banner background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/60 to-transparent z-10" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-20 flex flex-col items-start text-left animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight mb-4">
          Give them the care they deserve, even when you can't be there.
        </h2>
        
        <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed mb-8">
          Your loved ones' safety shouldn't be a source of worry. With one-tap SOS alerts, 24/7 doctor consultations, and a built-in pharmacy, we provide a complete safety net for your parents, right from your phone.
        </p>

        <Button
          href="/contact"
          variant="white"
          size="lg"
          className="text-accent-blue font-bold px-8 py-3.5 hover:bg-white hover:brightness-105 active:scale-95 rounded-full"
        >
          Secure Their Care Today
        </Button>
      </div>
    </section>
  );
}
