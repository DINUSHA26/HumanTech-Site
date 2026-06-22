import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

interface BottomCtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  bgImage?: string;
  overlayClassName?: string;
}

export default function BottomCtaSection({
  title,
  description,
  buttonText,
  buttonHref,
  bgImage = '/images/banners/cta-bg.jpg',
  overlayClassName,
}: BottomCtaSectionProps) {
  return (
    <section className="relative py-28 px-6 md:px-12 bg-neutral-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Elderly couple care banner background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay for Contrast */}
        <div className={`absolute inset-0 z-10 ${overlayClassName || 'bg-gradient-to-r from-neutral-950/85 via-neutral-950/65 to-transparent'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-20 flex flex-col items-start text-left animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight mb-4">
          {title}
        </h2>
        
        <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed mb-8">
          {description}
        </p>

        <Button
          href={buttonHref}
          variant="white"
          size="lg"
          className="text-accent-blue font-bold px-8 py-3.5 hover:bg-white hover:brightness-105 active:scale-95 rounded-full"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
