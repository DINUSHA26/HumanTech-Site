import { WhatWeDoItem, ValueItem } from '@/types';

export const ABOUT_MISSION = {
  badge: 'Our Mission',
  heading: 'Dignity, Independence, and Complete Safety',
  paragraphs: [
    'HumanTec was born out of a simple, powerful realization: we can\'t always be in the room with our aging parents, but they deserve the peace of mind of round-the-clock protection. Our goal is to leverage advanced tech devices and seamless virtual healthcare solutions to support senior longevity and vitality.',
    'Through our custom smart robot assistant Drmini Robo, high-end monitoring technologies, and secure medical portals, we bridge the distance between families and care teams. We enable seniors to preserve their lifestyle independence while keeping immediate safety networks within arm\'s reach.',
  ],
  coreStatement: {
    title: 'To humanize technology for better health',
    description: 'We strive to provide individuals and families with the digital tools and actual human assistance required to live healthier, safer, and more autonomous lives. Whether you are navigating an ongoing condition or optimizing your daily vitality, HumanTec is your companion every step of the way.',
  }
};

export const ABOUT_SERVICES = {
  badge: 'What We Do',
  title: 'Comprehensive Digital Health & On-Demand Care',
  description: 'The HumanTec mobile ecosystem provides a complete suite of services designed to put you in control of your medical journey:',
  items: [
    {
      title: 'On-Demand Care Coordination',
      description: 'Whether you need an experienced nurse, a dedicated caregiver, or a trusted driver to transport you to an appointment, our streamlined system allows you to schedule verified care support exactly when and where you need it.',
      iconEmoji: '🧑‍⚕️',
    },
    {
      title: 'Intelligent Medical Records & AI Diagnostics',
      description: 'Say goodbye to scattered paperwork. Users can securely upload test reports, X-rays, and prescriptions to a centralized digital profile. Our integrated AI Doctor assistant analyzes uploaded files to deliver instant, easy-to-understand health insights.',
      iconEmoji: '📁',
    },
    {
      title: 'Continuous Vital & Lifestyle Tracking',
      description: 'From real-time heart rate ranges and stress monitoring to automated sleep tracking, our applications transform raw biological data into a comprehensive weekly recap, keeping you informed of your baseline vitals.',
      iconEmoji: '⌚',
    },
    {
      title: 'HumanTec Online Store',
      description: 'We offer a curated marketplace of essential health hardware and premium supplements—including smart blood pressure monitors, wearable ECG watches, glucose meters, and verified organic wellness products—delivered straight to your doorstep.',
      iconEmoji: '🛒',
    },
    {
      title: 'Critical Emergency Response',
      description: 'Peace of mind is our priority. With our dedicated SOS emergency feature, users can instantly alert medical professionals or get immediate connection to live agents in times of crisis.',
      iconEmoji: '🚨',
    },
  ] as WhatWeDoItem[],
};

export const ABOUT_VALUES = {
  title: 'Our Core Values',
  items: [
    {
      title: 'Empathy First',
      description: 'We design everything from the ground up prioritizing senior user accessibility and human warmth.',
      color: 'blue',
    },
    {
      title: 'Vigilant Care',
      description: 'Our automated alerts and emergency SOS portals remain active 24/7, ready to support at any moment.',
      color: 'teal',
    },
    {
      title: 'Secure Tech',
      description: 'Every piece of patient data is secured with high-grade compliance, keeping medical vaults private and safe.',
      color: 'blue',
    },
  ] as ValueItem[],
};
