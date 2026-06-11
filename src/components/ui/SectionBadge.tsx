import React from 'react';
import { cn } from '@/lib/utils';

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  color?: 'teal' | 'charcoal' | 'blue';
}

export default function SectionBadge({
  children,
  className,
  align = 'center',
  color = 'teal',
}: SectionBadgeProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto block',
    right: 'text-right',
  };

  const colors = {
    teal: 'text-secondary font-semibold',
    blue: 'text-accent-blue font-semibold',
    charcoal: 'text-neutral-dark/80 font-medium',
  };

  return (
    <span
      className={cn(
        'text-xs md:text-sm tracking-wider uppercase inline-block mb-3',
        alignments[align],
        colors[color],
        className
      )}
    >
      {children}
    </span>
  );
}
