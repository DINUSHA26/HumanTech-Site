import React from 'react';
import { PRIVACY_CONFIG, PRIVACY_SECTIONS } from '@/config/privacy';

export default function PrivacyContentSection() {
  return (
    <div className="max-w-4xl mx-auto px-6 mt-16 mb-24 text-left">
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100/80 shadow-sm">
        {/* Title & Metadata */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-dark mb-2 leading-tight">
          {PRIVACY_CONFIG.title}
        </h2>
        <div className="flex flex-col gap-1 text-xs text-neutral-dark/60 font-semibold mb-6">
          <span>Last Updated: {PRIVACY_CONFIG.lastUpdated}</span>
          <span className="text-secondary">{PRIVACY_CONFIG.compliance}</span>
        </div>

        <p className="text-sm text-neutral-dark/85 leading-relaxed mb-8 border-b border-slate-100 pb-8">
          {PRIVACY_CONFIG.introText}
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {PRIVACY_SECTIONS.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-bold text-accent-blue mb-4">
                {section.title}
              </h3>
              
              {section.content && (
                <p className="text-sm text-neutral-dark/80 leading-relaxed mb-4">
                  {section.content}
                </p>
              )}

              {section.subsections && (
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-100">
                  {section.subsections.map((sub, subIndex) => (
                    <div key={subIndex} className="mt-2">
                      {sub.title && (
                        <h4 className="text-sm font-bold text-neutral-dark mb-2">
                          {sub.title}
                        </h4>
                      )}
                      {sub.content && (
                        <p className="text-xs text-neutral-dark/70 leading-relaxed mb-2 font-medium">
                          {sub.content}
                        </p>
                      )}
                      {sub.bullets && (
                        <ul className="list-disc pl-5 flex flex-col gap-1.5 text-xs text-neutral-dark/75 leading-relaxed">
                          {sub.bullets.map((b, bIndex) => (
                            <li key={bIndex}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
