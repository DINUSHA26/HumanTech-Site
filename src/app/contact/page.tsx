import React from 'react';
import SectionBadge from '@/components/ui/SectionBadge';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Contact Us — HumanTec.lk',
  description: 'Reach out to the HumanTec support team, consult a care agent, or send us inquiries about our wellness products.',
};

export default function ContactPage() {
  return (
    <div className="bg-bg-light min-h-[70vh] pb-24">
      {/* Banner */}
      <div className="bg-gradient-to-r from-accent-teal to-accent-blue pt-36 pb-20 px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-white/85 text-lg max-w-xl mx-auto">
          Need support, device troubleshooting, or assistance in configuring parent emergency circles? We are here to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Info Column */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <SectionBadge color="teal" align="left">
            Get In Touch
          </SectionBadge>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-6">
            Consult A Care Agent
          </h2>
          <p className="text-sm text-neutral-dark/75 leading-relaxed mb-8">
            Speak to our consultants to help set up health ecosystems in your household, or coordinate hardware setups for Drmini Robo.
          </p>

          {/* Details */}
          <div className="flex flex-col gap-5 text-sm text-neutral-dark/80">
            <div>
              <strong className="block text-accent-blue mb-1">📍 Office Address</strong>
              <p>123 Medical Plaza, Colombo 03, Sri Lanka</p>
            </div>
            <div>
              <strong className="block text-accent-blue mb-1">📞 Phone Support</strong>
              <p>+94 11 234 5678 (Mon - Fri, 9:00 AM - 6:00 PM)</p>
            </div>
            <div>
              <strong className="block text-accent-blue mb-1">✉️ Email Support</strong>
              <p>support@humantec.lk</p>
            </div>
            <div>
              <strong className="block text-accent-blue mb-1">🚨 Emergency SOS Line</strong>
              <p>Available 24/7 to active app subscribers</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100/60">
          <h3 className="text-xl font-bold text-neutral-dark mb-6">Send A Message</h3>
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-neutral-dark/70" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm text-neutral-dark focus:outline-none focus:border-accent-teal transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-neutral-dark/70" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm text-neutral-dark focus:outline-none focus:border-accent-teal transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-neutral-dark/70" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm text-neutral-dark focus:outline-none focus:border-accent-teal transition-colors"
                placeholder="How can we help you?"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-neutral-dark/70" htmlFor="message">
                Message Detail
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm text-neutral-dark focus:outline-none focus:border-accent-teal transition-colors resize-none"
                placeholder="Write your message here..."
                required
              />
            </div>

            <Button variant="primary" size="lg" className="w-full mt-2" type="submit">
              Submit Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
