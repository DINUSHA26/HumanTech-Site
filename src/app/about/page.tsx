import React from 'react';
import SectionBadge from '@/components/ui/SectionBadge';

export const metadata = {
  title: 'About Us — HumanTec.lk',
  description: 'Learn more about HumanTec, our mission to support independent living, and our unified digital health ecosystems.',
};

export default function AboutPage() {
  return (
    <div className="bg-bg-light min-h-[70vh] pb-24">
      {/* Banner */}
      <div className="bg-gradient-to-r from-accent-teal to-accent-blue pt-36 pb-20 px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About HumanTec</h1>
        <p className="text-white/85 text-lg max-w-xl mx-auto">
          Pioneering smart health and technology solutions to make independent senior living safe, connected, and dignified.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-16 text-left">
        <SectionBadge color="teal" align="left">
          Our Mission
        </SectionBadge>
        
        <h2 className="text-3xl font-bold text-neutral-dark mb-6">
          Dignity, Independence, and Complete Safety
        </h2>
        
        <p className="text-neutral-dark/80 text-base leading-relaxed mb-6">
          HumanTec was born out of a simple, powerful realization: we can't always be in the room with our aging parents, but they deserve the peace of mind of round-the-clock protection. Our goal is to leverage advanced tech devices and seamless virtual healthcare solutions to support senior longevity and vitality.
        </p>
        
        <p className="text-neutral-dark/80 text-base leading-relaxed mb-12">
          Through our custom smart robot assistant Drmini Robo, high-end monitoring technologies, and secure medical portals, we bridge the distance between families and care teams. We enable seniors to preserve their lifestyle independence while keeping immediate safety networks within arm's reach.
        </p>

        {/* Company Pillars */}
        <h3 className="text-2xl font-bold text-neutral-dark mb-6">Our Core Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100/60 shadow-sm">
            <h4 className="font-bold text-accent-blue mb-2">Empathy First</h4>
            <p className="text-xs text-neutral-dark/70 leading-relaxed">
              We design everything from the ground up prioritizing senior user accessibility and human warmth.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100/60 shadow-sm">
            <h4 className="font-bold text-accent-blue mb-2">Vigilant Care</h4>
            <p className="text-xs text-neutral-dark/70 leading-relaxed">
              Our automated alerts and emergency SOS portals remain active 24/7, ready to support at any moment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100/60 shadow-sm">
            <h4 className="font-bold text-accent-blue mb-2">Secure Tech</h4>
            <p className="text-xs text-neutral-dark/70 leading-relaxed">
              Every piece of patient data is secured with high-grade compliance, keeping medical vaults private and safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
