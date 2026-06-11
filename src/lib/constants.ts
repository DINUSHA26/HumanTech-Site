import { NavLink, ProductItem, AppFeature, StepItem, FooterLinkGroup, SocialLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Online Store', href: '/store' },
  { label: 'HumanTec App', href: '/humantec-app' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact us', href: '/contact' },
];

export const PRODUCT_ITEMS: ProductItem[] = [
  {
    id: 'drmini-robo',
    title: 'Drmini Robo',
    description: 'Our flagship intelligent wellness companion. Features automated health monitoring, smart reminders, and seamless integration with our family ecosystem.',
    image: '/images/drmini-robo.png',
    href: '/store',
  },
  {
    id: 'wellness-essentials',
    title: 'Wellness Essentials',
    description: 'Premium, pure wellness essentials curated specifically to boost immunity and support daily vitality for seniors.',
    image: '/images/omega-supplement.png',
    href: '/store',
  },
  {
    id: 'tech-devices',
    title: 'Technology & Devices',
    description: 'From smart vitals trackers to daily mobility aids, delivered straight to their doorstep.',
    image: '/images/tech-devices.png',
    href: '/store',
  },
];

export const APP_FEATURES: AppFeature[] = [
  {
    id: 'mydoctor',
    title: 'Mydoctor (SOS & Consultations):',
    highlightLabel: 'Mydoctor (SOS & Consultations)',
    description: 'Instant video or audio consultations with certified physicians. Features a one-tap emergency SOS trigger that alerts our medical team and your family simultaneously.',
  },
  {
    id: 'mydocuments',
    title: 'My documents (Health Records):',
    highlightLabel: 'My documents (Health Records)',
    description: 'A secure, encrypted digital vault for all prescriptions, medical reports, and lab results. Accessible anytime, anywhere.',
  },
  {
    id: 'myhelpcenter',
    title: 'My Help center (Dedicated Support):',
    highlightLabel: 'My Help center (Dedicated Support)',
    description: 'A compassionate, human-first guidance center to help you navigate care schedules, app troubleshooting, and medical inquiries.',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: 'STEP 01',
    title: 'Equip Their Home',
    description: 'Find the perfect health companion like Drmini Robo and curated Truehive wellness products on our website.',
  },
  {
    step: 'STEP 02',
    title: 'Download the Companion App',
    description: "Install the app on your phone and your parent's phone to unlock Mydoctor consultations and emergency SOS setups.",
  },
  {
    step: 'STEP 03',
    title: 'Stay Connected, Anywhere',
    description: 'Monitor health trends, manage My documents, and gain absolute peace of mind knowing medical help is just one tap away.',
  },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: 'App Features',
    links: [
      { label: 'App Features', href: '/humantec-app' },
      { label: 'Upload Prescription', href: '/store' },
      { label: 'Privacy & Safety', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Return Policy', href: '/store' },
    ],
  },
  {
    heading: 'Privacy & Policy',
    links: [
      { label: 'Privacy Policy', href: '/about' },
      { label: 'Data Processing Agreement', href: '/about' },
      { label: 'Privacy & Safety', href: '/about' },
      { label: 'Terms', href: '/about' },
      { label: 'Cookies', href: '/about' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Facebook', href: 'https://facebook.com', iconName: 'Facebook' },
  { platform: 'Instagram', href: 'https://instagram.com', iconName: 'Instagram' },
  { platform: 'YouTube', href: 'https://youtube.com', iconName: 'Youtube' },
  { platform: 'LinkedIn', href: 'https://linkedin.com', iconName: 'Linkedin' },
  { platform: 'TikTok', href: 'https://tiktok.com', iconName: 'Twitter' }, // standard icon fallback or Lucide icon
];
