import { NavLink, FooterLinkGroup } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Online Store', href: '/store' },
  { label: 'HumanTec App', href: '/humantec-app' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact us', href: '/contact' },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: 'App Features',
    links: [
      { label: 'App Features', href: '/humantec-app' },
      { label: 'Upload Prescription', href: '/store' },
      { label: 'Privacy & Safety', href: '/privacy-policy' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Return Policy', href: '/store' },
    ],
  },
  {
    heading: 'Privacy & Policy',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Data Processing Agreement', href: '/privacy-policy' },
      { label: 'Privacy & Safety', href: '/privacy-policy' },
      { label: 'Terms', href: '/privacy-policy' },
      { label: 'Cookies', href: '/privacy-policy' },
    ],
  },
];
