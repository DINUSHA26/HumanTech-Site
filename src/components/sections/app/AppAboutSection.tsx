import React from 'react';
import SectionBadge from '@/components/ui/SectionBadge';
import { APP_PAGE_FEATURES } from '@/config/app';

export default function AppAboutSection() {
  const config = APP_PAGE_FEATURES;

  return (
    <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
      <SectionBadge color="teal" align="center">
        {config.badge}
      </SectionBadge>
      
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-12">
        {config.title}
      </h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {config.items.map((feature, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100/60 text-left hover:shadow-md transition-shadow duration-300 flex flex-col justify-start">
            <span className="text-3xl mb-4 block">{feature.iconEmoji}</span>
            <h3 className="text-xl font-bold text-neutral-dark mb-3">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-dark/70 leading-relaxed flex-grow">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
