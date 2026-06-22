import { SocialLink, ContactDetail } from '@/types';

export const SITE_CONFIG = {
  name: 'HumanTec',
  tagline: 'Smart Tech. Instant Care.',
  domain: 'humantec.lk',
  companyName: 'HumanTec Ventures.',
  designerName: 'HumanTec.lk',
  supportEmail: 'support@humantec.lk',
  dpoEmail: 'info@humantec.lk',
  dpoAddress: 'HumanTec.lk Data Protection Office, Colombo, Sri Lanka.',
  phoneSupport: '+94 11 234 5678',
  phoneSupportHours: 'Mon - Fri, 9:00 AM - 6:00 PM',
  officeAddress: '123 Medical Plaza, Colombo 03, Sri Lanka',
  emergencyLine: 'Available 24/7 to active app subscribers',
};

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    title: '📍 Office Address',
    icon: 'MapPin',
    value: SITE_CONFIG.officeAddress,
  },
  {
    title: '📞 Phone Support',
    icon: 'Phone',
    value: `${SITE_CONFIG.phoneSupport} (${SITE_CONFIG.phoneSupportHours})`,
  },
  {
    title: '✉️ Email Support',
    icon: 'Mail',
    value: SITE_CONFIG.supportEmail,
  },
  {
    title: '🚨 Emergency SOS Line',
    icon: 'AlertOctagon',
    value: SITE_CONFIG.emergencyLine,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Facebook', href: 'https://facebook.com', iconName: 'Facebook' },
  { platform: 'Instagram', href: 'https://instagram.com', iconName: 'Instagram' },
  { platform: 'YouTube', href: 'https://youtube.com', iconName: 'Youtube' },
  { platform: 'LinkedIn', href: 'https://linkedin.com', iconName: 'Linkedin' },
  { platform: 'TikTok', href: 'https://tiktok.com', iconName: 'TikTok' },
];
