import React from 'react';
import SectionBadge from '../ui/SectionBadge';
import StepCard from '../ui/StepCard';
import { ECOSYSTEM_STEPS } from '@/config/app';

export default function HowItWorksSection() {
  const config = ECOSYSTEM_STEPS;

  return (
    <section className="bg-bg-light py-20 px-6 md:px-12" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <SectionBadge align="center" color="charcoal">
            {config.badge}
          </SectionBadge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0ea5e9] mb-4 mt-2">
            {config.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-dark/75 leading-relaxed">
            {config.description}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.steps.map((item, index) => (
            <StepCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
