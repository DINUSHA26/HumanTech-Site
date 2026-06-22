import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_LINK_GROUPS } from '@/config/navigation';
import { SOCIAL_LINKS, SITE_CONFIG } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start mb-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-3 select-none">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/icon/logo-color.png"
                  alt="HumanTec Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-[#1A8F5C]">Human</span>
                <span className="text-[#0072BC]">Tec</span>
                <sup className="text-xs font-semibold text-[#0072BC] ml-0.5">TM</sup>
              </span>
            </Link>
          </div>

          {/* Columns 2 & 3: Link Groups */}
          {FOOTER_LINK_GROUPS.map((group, index) => (
            <div key={index} className="flex flex-col">
              <ul className="flex flex-col gap-3.5">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Social Links */}
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative w-9 h-9 rounded-full transition-transform duration-200 hover:scale-110"
                  aria-label={link.platform}
                >
                  <Image
                    src={`/images/social/${link.platform.toLowerCase()}.png`}
                    alt={link.platform}
                    fill
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Separator */}
        <div className="h-[2px] bg-primary mb-8" />

        {/* Footer Bottom Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 {SITE_CONFIG.companyName}. All rights reserved.</p>
          <p>Designed By - IDIAinc</p>
        </div>
      </div>
    </footer>
  );
}
