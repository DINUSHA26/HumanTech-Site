import React from 'react';
import { ABOUT_MISSION } from '@/config/about';

export default function AboutMissionSection() {
  const config = ABOUT_MISSION;

  return (
    <section className="py-20 px-6 bg-white border-b border-slate-100/50">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0ea5e9] mb-6">
          Our Mission
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          {config.coreStatement.title}. {config.coreStatement.description}
        </p>
      </div>
    </section>
  );
}
