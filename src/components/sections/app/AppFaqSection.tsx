'use client';

import React, { useState } from 'react';
import SectionBadge from '@/components/ui/SectionBadge';
import { FAQS_CONFIG } from '@/config/faqs';
import { Plus, Minus } from 'lucide-react';

export default function AppFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for premium usability

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 mb-24 text-left">
      <SectionBadge color="teal" align="center" className="mb-4">
        {FAQS_CONFIG.badge}
      </SectionBadge>
      
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark text-center mb-2">
        {FAQS_CONFIG.title}
      </h2>
      <p className="text-neutral-dark/70 text-center mb-12">
        {FAQS_CONFIG.subtitle}
      </p>

      {/* Accordions */}
      <div className="flex flex-col gap-4">
        {FAQS_CONFIG.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100/60 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-neutral-dark hover:text-accent-blue focus:outline-none transition-colors duration-200"
              >
                <span className="pr-4">{item.question}</span>
                {isOpen ? (
                  <Minus className="w-5 h-5 text-accent-blue flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-neutral-dark/60 flex-shrink-0" />
                )}
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 border-t border-slate-50' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="px-6 py-5 text-sm text-neutral-dark/75 leading-relaxed bg-slate-50/50">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
