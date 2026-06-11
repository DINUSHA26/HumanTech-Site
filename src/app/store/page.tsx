import React from 'react';
import SectionBadge from '@/components/ui/SectionBadge';

export const metadata = {
  title: 'Online Store — HumanTec.lk',
  description: 'Shop Drmini Robo, health trackers, supplements, and wellness essentials for your loved ones.',
};

export default function StorePage() {
  return (
    <div className="bg-bg-light min-h-[70vh] pb-24">
      {/* Banner */}
      <div className="bg-gradient-to-r from-accent-teal to-accent-blue pt-36 pb-20 px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Online Store</h1>
        <p className="text-white/85 text-lg max-w-xl mx-auto">
          Advanced wellness devices and smart home companions designed to keep your family healthy and connected.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <SectionBadge color="teal" align="center">
          Featured Wellness Catalog
        </SectionBadge>
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
          Curated Smart Care Devices
        </h2>
        <p className="text-neutral-dark/70 max-w-2xl mx-auto mb-12">
          Browse our smart robots, medical grade vital trackers, safety monitoring tools, and elder-focused dietary supplements.
        </p>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100/60 flex flex-col items-center">
              <div className="w-full aspect-square bg-slate-50 rounded-2xl mb-6 flex items-center justify-center text-neutral-300">
                Product Image Placeholder
              </div>
              <div className="h-6 w-2/3 bg-slate-100 rounded mb-3" />
              <div className="h-4 w-5/6 bg-slate-100 rounded mb-6" />
              <div className="h-10 w-24 bg-slate-100 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
