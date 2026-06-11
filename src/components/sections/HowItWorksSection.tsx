import React from 'react';
import SectionBadge from '../ui/SectionBadge';
import StepCard from '../ui/StepCard';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';

export default function HowItWorksSection() {
  return (
    <section className="bg-bg-light py-24 px-6 md:px-12" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <SectionBadge align="center" color="charcoal">
            How It Works – The Connected Ecosystem
          </SectionBadge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-dark mb-4 mt-2">
            Three Steps to Seamless Care
          </h2>
          <p className="text-sm sm:text-base text-neutral-dark/75 leading-relaxed">
            You can't be in the room every second, but the right technology can. Our curated online store features advanced wellness devices designed to keep your family safe, healthy, and connected.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <StepCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
