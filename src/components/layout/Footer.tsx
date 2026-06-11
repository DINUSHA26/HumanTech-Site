import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { FOOTER_LINK_GROUPS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="relative w-48 h-12 select-none">
              <Image
                src="/Logo-3.png"
                alt="HumanTec Logo Wordmark"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Providing standard-setting digital health solutions, home automation, and on-demand care ecosystem to ensure total safety and health preservation for your family.
            </p>
          </div>

          {/* Columns 2 & 3: Link Groups */}
          {FOOTER_LINK_GROUPS.map((group, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-widest">
                {group.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-widest">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-accent-blue hover:border-accent-blue transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-accent-blue hover:border-accent-blue transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300"
                aria-label="TikTok"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.94 1.17 2.27 2 3.75 2.4v3.91a11.19 11.19 0 0 1-5.18-1.58c-.01.07-.02.13-.02.2v6.86c0 1.25-.26 2.5-.79 3.65a8.21 8.21 0 0 1-4.73 4.7c-1.15.52-2.39.79-3.65.79-1.25 0-2.5-.27-3.65-.8a8.21 8.21 0 0 1-4.7-4.72A8.32 8.32 0 0 1 0 15.79c0-1.25.27-2.5.8-3.65a8.2 8.2 0 0 1 4.72-4.7c1.15-.53 2.4-.8 3.65-.8.15 0 .3 0 .45.01v4.06c-.15-.02-.3-.02-.45-.02-.7 0-1.39.15-2.03.45a4.23 4.23 0 0 0-2.4 2.4A4.3 4.3 0 0 0 4.3 15.8c0 .7.15 1.39.45 2.03a4.23 4.23 0 0 0 2.4 2.4A4.3 4.3 0 0 0 9.17 20.7c.7 0 1.39-.15 2.03-.45a4.22 4.22 0 0 0 2.4-2.4 4.3 4.3 0 0 0 .45-2.03V0h-.53z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Separator */}
        <div className="h-px bg-neutral-900 mb-8" />

        {/* Footer Bottom Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 HumanTec Inc. All rights reserved.</p>
          <p>
            Designed By –{' '}
            <span className="text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer">
              IDIAinc
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
