import { FaqItem } from '@/types';

export const FAQS_CONFIG = {
  badge: 'Frequently Asked Questions',
  title: 'Got Questions? We Have Answers',
  subtitle: 'Everything you need to know about the HumanTec App and care network.',
  items: [
    {
      question: 'Can I use the app on multiple devices?',
      answer: 'Yes! You can log in to your account on any compatible device. Your data and preferences will sync automatically in real-time, so you can pick up exactly where you left off, whether you\'re on a phone, tablet, or desktop.',
    },
    {
      question: 'Does the app work offline?',
      answer: 'For basic health logs and viewing cached document metadata, the app works offline. However, triggering real-time SOS alerts, conducting video consultations, and uploading new prescriptions require an active internet connection.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact customer support directly via the \'My Help center\' chat inside the mobile app, or call our phone support line at +94 11 234 5678 (Mon - Fri, 9:00 AM - 6:00 PM) for hardware configuration assistance.',
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Absolutely. All documents in your Health Vault and video consult streams are secured using end-to-end encryption. Only you and your explicitly authorized medical practitioners can access your clinical data, in compliance with the Sri Lankan Personal Data Protection Act (PDPA).',
    },
    {
      question: 'How do I invite my team or friends to the app?',
      answer: 'You can add family members to your \'Emergency Circle\' through the Profile settings. Simply input their mobile numbers, and the app will generate a secure link to connect your profiles.',
    },
    {
      question: 'Can I export my data or reports?',
      answer: 'Yes, active app subscribers on supported plans can generate and download comprehensive PDF summaries of their weekly vital trends, medical receipts, and active prescription lists directly from the settings panel.',
    },
  ] as FaqItem[],
};
