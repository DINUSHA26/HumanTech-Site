import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-teal';
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent-teal to-accent-blue text-white shadow-md hover:shadow-lg hover:brightness-110',
    secondary: 'bg-secondary text-white shadow-md hover:shadow-lg hover:bg-secondary/90',
    outline: 'border-2 border-white text-white bg-transparent hover:bg-white hover:text-accent-blue',
    white: 'bg-white text-accent-blue shadow-md hover:shadow-lg hover:bg-slate-50',
    ghost: 'text-neutral-dark hover:bg-slate-100',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </button>
  );
}
