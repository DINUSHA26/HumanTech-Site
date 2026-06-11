import React from 'react';
import SectionBadge from '@/components/ui/SectionBadge';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'HumanTec App — Total Peace of Mind',
  description: 'Download the HumanTec Care app for instant medical consultations, SOS emergency triggers, and health vault storage.',
};

export default function AppDetailsPage() {
  return (
    <div className="bg-bg-light min-h-[70vh] pb-24">
      {/* Banner */}
      <div className="bg-gradient-to-r from-accent-teal to-accent-blue pt-36 pb-20 px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">HumanTec Care App</h1>
        <p className="text-white/85 text-lg max-w-xl mx-auto">
          Your smartphone transformed into a 24/7 medical portal with instant SOS responses and physician consultations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <SectionBadge color="teal" align="center">
          Care In Your Pocket
        </SectionBadge>
        
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-12">
          Features Built For Peace of Mind
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100/60 text-left">
            <span className="text-2xl mb-4 block">🚨</span>
            <h3 className="text-xl font-bold text-neutral-dark mb-3">Mydoctor (SOS Trigger)</h3>
            <p className="text-sm text-neutral-dark/70 leading-relaxed">
              Connect instantly with doctors via video/audio calls, and use the one-tap SOS feature to immediately dispatch medical support and alert emergency contacts.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100/60 text-left">
            <span className="text-2xl mb-4 block">📁</span>
            <h3 className="text-xl font-bold text-neutral-dark mb-3">My documents (Health Vault)</h3>
            <p className="text-sm text-neutral-dark/70 leading-relaxed">
              Store prescriptions, lab records, reports, and medication histories securely in an encrypted cloud vault. Share access with physicians in a click.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100/60 text-left">
            <span className="text-2xl mb-4 block">💬</span>
            <h3 className="text-xl font-bold text-neutral-dark mb-3">My Help center</h3>
            <p className="text-sm text-neutral-dark/70 leading-relaxed">
              Reach out to caring support teams to help troubleshoot devices, manage health schedules, coordinate pharmacy refills, and resolve queries.
            </p>
          </div>
        </div>

        {/* App download section */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-neutral-dark mb-4">Start Protecting Your Loved Ones Today</h3>
          <p className="text-neutral-dark/70 mb-8 max-w-lg mx-auto">
            Install the app on your smartphone and your parents' devices to link profiles and form a secure safety loop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Download for iOS</Button>
            <Button variant="secondary" size="lg">Download for Android</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
