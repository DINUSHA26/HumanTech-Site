import React from 'react';
import { StepItem } from '@/types';

interface StepCardProps {
  item: StepItem;
}

export default function StepCard({ item }: StepCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-100/80 shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center">
      {/* Step label */}
      <span className="text-xs font-bold text-accent-blue/80 tracking-widest uppercase mb-4 block">
        {item.step}
      </span>
      
      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-neutral-dark mb-3">
        {item.title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-neutral-dark/70 leading-relaxed max-w-xs">
        {item.description}
      </p>
    </div>
  );
}
