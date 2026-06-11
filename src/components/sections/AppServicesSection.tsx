import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import SectionBadge from '../ui/SectionBadge';
import Button from '../ui/Button';
import { APP_FEATURES } from '@/lib/constants';

export default function AppServicesSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden" id="app-services">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Features */}
        <div className="lg:col-span-7 flex flex-col items-start text-left animate-fade-in-up">
          <SectionBadge align="left" color="teal">
            The App Services – Care in Your Pocket
          </SectionBadge>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-dark mb-4 mt-2">
            Your On-Demand Care Team
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-dark/75 leading-relaxed mb-6">
            For immediate medical attention, secure records, and dedicated support, our mobile app transforms your smartphone into a <span className="text-secondary font-bold">24/7</span> healthcare portal.
          </p>

          <Button
            href="/humantec-app"
            variant="secondary"
            size="md"
            className="mb-10"
            icon={<ChevronRight className="w-4 h-4" />}
          >
            Explore More
          </Button>

          {/* Bullet Feature List */}
          <ul className="flex flex-col gap-6">
            {APP_FEATURES.map((feature) => (
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
        <div className="lg:col-span-5 flex justify-center relative select-none">
          <div className="relative w-[320px] h-[550px] sm:w-[400px] sm:h-[650px]">
            <Image
              src="/images/phone-mockup.png"
              alt="HumanTec Care Mobile App UI Mockups"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 320px, 450px"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
