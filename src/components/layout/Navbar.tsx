'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import Button from '../ui/Button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      {/* Navbar Container: Pill shape on desktop */}
      <div
        className={cn(
          'mx-auto max-w-7xl bg-white/95 backdrop-blur-md rounded-full shadow-md border border-slate-100/80 transition-all duration-300 px-6 py-3 flex items-center justify-between',
          scrolled ? 'shadow-lg py-2' : ''
        )}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:rotate-6">
            <Image
              src="/Logo-2.png"
              alt="HumanTec Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">
            HumanTec.lk
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm font-medium transition-colors duration-300 py-1.5 px-1',
                  isActive
                    ? 'text-accent-blue font-semibold'
                    : 'text-neutral-dark hover:text-accent-blue'
                )}
              >
                {link.label}
                {/* Active Underline Animation */}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 right-0 h-0.5 bg-accent-teal rounded-full scale-x-0 transition-transform duration-300 origin-left',
                    isActive ? 'scale-x-100' : 'group-hover:scale-x-100'
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Call to Action */}
        <div className="hidden lg:block">
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            icon={<Phone className="w-3.5 h-3.5" />}
            iconPosition="left"
          >
            Contact Agent
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-neutral-dark hover:text-accent-blue focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-4 top-20 bg-white rounded-3xl shadow-xl border border-slate-100 p-6 flex flex-col gap-4 transition-all duration-300 origin-top',
          isOpen
            ? 'scale-y-100 opacity-100 visible'
            : 'scale-y-95 opacity-0 invisible pointer-events-none'
        )}
      >
        <nav className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-base font-medium py-2 px-3 rounded-xl transition-colors duration-200',
                  isActive
                    ? 'bg-accent-blue/10 text-accent-blue font-semibold'
                    : 'text-neutral-dark hover:bg-slate-50 hover:text-accent-blue'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="h-px bg-slate-100 my-2" />
        <Button
          href="/contact"
          onClick={() => setIsOpen(false)}
          variant="primary"
          size="md"
          className="w-full"
          icon={<Phone className="w-4 h-4" />}
          iconPosition="left"
        >
          Contact Agent
        </Button>
      </div>
    </header>
  );
}
