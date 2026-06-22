import React from 'react';
import SectionBadge from '@/components/ui/SectionBadge';
import { ABOUT_SERVICES } from '@/config/about';
import { HeartHandshake, FolderHeart, Activity, ShoppingCart, ShieldAlert } from 'lucide-react';

export default function AboutWhatWeDoSection() {
  const config = ABOUT_SERVICES;

  const icons = [
    HeartHandshake,
    FolderHeart,
    Activity,
    ShoppingCart,
    ShieldAlert,
  ];

  return (
    <section className="bg-bg-light py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <SectionBadge color="teal" align="center" className="mb-4">
            {config.badge}
          </SectionBadge>
          <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-dark mb-4">
            What We Do
          </h2>
          <p className="text-sm sm:text-base text-neutral-dark/70 leading-relaxed">
            {config.description}
          </p>
        </div>

        {/* Services Grid (Premium rounded layout) */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row: 3 Columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {config.items.slice(0, 3).map((service, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl border border-slate-100/60 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-neutral-dark text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-dark/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 2 Columns on desktop (centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {config.items.slice(3, 5).map((service, index) => {
              const Icon = icons[index + 3];
              return (
                <div
                  key={index + 3}
                  className="bg-white p-8 rounded-3xl border border-slate-100/60 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-neutral-dark text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-dark/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
