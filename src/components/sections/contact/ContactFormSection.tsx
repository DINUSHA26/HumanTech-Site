import React from 'react';
import SectionBadge from '@/components/ui/SectionBadge';
import Button from '@/components/ui/Button';
import { CONTACT_DETAILS } from '@/config/site';
import { MapPin, Phone, Mail, AlertTriangle } from 'lucide-react';

export default function ContactFormSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
      {/* Info Column */}
      <div className="lg:col-span-5 flex flex-col items-start">
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
        <div className="flex flex-col gap-6 text-sm text-neutral-dark/80 w-full">
          {CONTACT_DETAILS.map((detail, index) => {
            const Icon = {
              MapPin: MapPin,
              Phone: Phone,
              Mail: Mail,
              AlertOctagon: AlertTriangle,
            }[detail.icon];

            return (
              <div key={index} className="flex gap-4 bg-white p-5 rounded-2xl border border-slate-100/60 shadow-sm">
                {Icon && (
                  <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <strong className="block text-accent-blue font-bold mb-1">
                    {detail.title.replace(/^[^\w\s\d]+/, '').trim()}
                  </strong>
                  <p className="text-neutral-dark/80">{detail.value}</p>
                </div>
              </div>
            );
          })}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-neutral-dark/70" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm text-neutral-dark focus:outline-none focus:border-accent-teal transition-colors"
                placeholder="Enter your phone number"
                required
              />
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
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-neutral-dark/70" htmlFor="message">
              Message Detail
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm text-neutral-dark focus:outline-none focus:border-accent-teal transition-colors resize-none"
              placeholder="Write your message here..."
              required
            />
          </div>

          {/* Attachment Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center text-xs font-semibold text-accent-blue bg-accent-blue/10 px-4 py-2 rounded-xl hover:bg-accent-blue/20 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue"
            >
              📎 Add an attachment
            </button>
            <span className="text-[10px] text-neutral-dark/50">Max file size: 5MB</span>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2.5 mt-2">
            <input
              type="checkbox"
              id="consent"
              className="mt-1 h-4 w-4 rounded border-slate-200 text-accent-teal focus:ring-accent-teal"
              required
            />
            <label className="text-xs text-neutral-dark/70 leading-normal" htmlFor="consent">
              I consent to HumanTec and its affiliates processing my personal data in accordance with the Privacy Notice to handle and respond to my request.
            </label>
          </div>

          <Button variant="primary" size="lg" className="w-full mt-2" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
