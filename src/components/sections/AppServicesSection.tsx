import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import SectionBadge from '../ui/SectionBadge';
import Button from '../ui/Button';
import { HOME_APP_SERVICES } from '@/config/app';

export default function AppServicesSection() {
  const config = HOME_APP_SERVICES;

  return (
    <section className="bg-white py-20 px-6 md:px-12 overflow-hidden" id="app-services">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Features */}
        <div className="lg:col-span-6 flex flex-col items-start text-left animate-fade-in-up">
          <SectionBadge align="left" color="teal">
            {config.badge}
          </SectionBadge>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-dark mb-4 mt-2">
            {config.title}
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-dark/75 leading-relaxed mb-6">
            {config.description}
          </p>

          <Button
            href={config.buttonHref}
            variant="secondary"
            size="md"
            className="mb-10"
            icon={<ChevronRight className="w-4 h-4" />}
          >
            {config.buttonText}
          </Button>

          {/* Bullet Feature List */}
          <ul className="flex flex-col gap-6">
            {config.features.map((feature) => (
              <li key={feature.id} className="flex items-start gap-3 group">
                {/* Custom Bullet Indicator */}
                <span className="w-2.5 h-2.5 rounded-full bg-secondary mt-2 flex-shrink-0 group-hover:scale-120 transition-transform duration-300" />
                <p className="text-sm sm:text-base text-neutral-dark/80 leading-relaxed">
                  <strong className="text-secondary font-bold mr-1 block sm:inline">
                    {feature.highlightLabel}:
                  </strong>
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Phone Mockups */}
        <div className="lg:col-span-6 flex justify-center relative select-none w-full">
          <div className="relative w-[320px] h-[360px] sm:w-[460px] sm:h-[500px] lg:w-[500px] lg:h-[540px]">
            <Image
              src={config.mockupImage}
              alt="HumanTec Care Mobile App UI Mockups"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 340px, 600px"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
