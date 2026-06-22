import React from 'react';
import SectionBadge from '@/components/ui/SectionBadge';
import { SUBSCRIPTION_PACKAGES } from '@/config/app';
import { Check, X } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function AppSubscriptionsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-16 text-center" id="download">
      <SectionBadge color="teal" align="center">
        Subscriptions
      </SectionBadge>
      
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
        Subscription Packages
      </h2>
      <p className="text-neutral-dark/70 max-w-lg mx-auto mb-12">
        Trusted products selected for your health and recovery.
      </p>

      {/* Subscription Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
        {SUBSCRIPTION_PACKAGES.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100/60 text-left flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              plan.isPopular ? 'ring-2 ring-secondary shadow-md md:scale-105 z-10' : ''
            }`}
          >
            {plan.isPopular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
                Best Choice
              </span>
            )}

            <div>
              <span className="text-xs font-bold text-neutral-dark/55 uppercase tracking-wider block mb-2">
                {plan.name}
              </span>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl md:text-4xl font-extrabold text-neutral-dark">
                  {plan.price}
                </span>
                <span className="text-xs text-neutral-dark/60">
                  /{plan.period.split('/')[1] || 'month'}
                </span>
              </div>
              
              <p className="text-xs font-semibold text-accent-blue mb-6">
                Best For: {plan.bestFor}
              </p>

              <div className="h-px bg-slate-100 mb-6" />

              {/* Checklist */}
              <ul className="flex flex-col gap-4 mb-8">
                {plan.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-start gap-2.5 text-sm text-neutral-dark/85">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    )}
                    <span className={feature.included ? '' : 'text-neutral-dark/40 line-through'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant={plan.isPopular ? 'primary' : 'secondary'}
              className="w-full text-center mt-auto"
              size="md"
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
