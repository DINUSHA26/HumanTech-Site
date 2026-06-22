import { AppFeature, StepItem, SubscriptionPlan } from '@/types';

// Homepage features highlight list
export const HOME_APP_SERVICES = {
  badge: 'The App Services – Care in Your Pocket',
  title: 'Your On-Demand Care Team',
  description: 'For immediate medical attention, secure records, and dedicated support, our mobile app transforms your smartphone into a 24/7 healthcare portal.',
  buttonText: 'Explore More',
  buttonHref: '/humantec-app',
  mockupImage: '/images/home/phone-mockup-new.png',
  features: [
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
  ] as AppFeature[],
};

// Ecosystem three steps guide
export const ECOSYSTEM_STEPS = {
  badge: 'How It Works – The Connected Ecosystem',
  title: 'Three Steps to Seamless Care',
  description: 'You can\'t be in the room every second, but the right technology can. Our curated online store features advanced wellness devices designed to keep your family safe, healthy, and connected.',
  steps: [
    {
      step: 'STEP 01',
      title: 'Equip Their Home',
      description: 'Find the perfect health companion like Drmini Robo and curated Truehive wellness products on our website.',
    },
    {
      step: 'STEP 02',
      title: 'Download the Companion App',
      description: 'Install the app on your phone and your parent\'s phone to unlock Mydoctor consultations and emergency SOS setups.',
    },
    {
      step: 'STEP 03',
      title: 'Stay Connected, Anywhere',
      description: 'Monitor health trends, manage My documents, and gain absolute peace of mind knowing medical help is just one tap away.',
    },
  ] as StepItem[],
};

// App page features config (from App.pdf)
export const APP_PAGE_FEATURES = {
  badge: 'Care In Your Pocket',
  title: 'Features Built For Peace of Mind',
  items: [
    {
      title: 'Integrated Patient Call Tracking',
      description: 'Never miss a critical update. Automatically log and manage healthcare communications, ensuring a clear history of patient-provider interactions for better follow-up care.',
      iconEmoji: '📞',
    },
    {
      title: 'One-Tap SOS Emergency System',
      description: 'In a crisis, every second is a vital variable. Our high-priority SOS notification sends your precise location and health profile to emergency contacts and medical responders instantly.',
      iconEmoji: '🚨',
    },
    {
      title: 'Real-Time Vital Sync',
      description: 'Connect your smart medical devices directly to the app. Monitor your health metrics in real-time and receive AI-driven alerts if your vitals fall outside your \'green zone\'.',
      iconEmoji: '⌚',
    },
    {
      title: 'Instant Prescription Management',
      description: 'Sync your App profile with the HumanTec Store. Get automated reminders when you\'re running low on medication and refill with a single swipe.',
      iconEmoji: '📁',
    },
  ],
};

// Subscription pricing structures
export const SUBSCRIPTION_PACKAGES: SubscriptionPlan[] = [
  {
    name: 'STARTER PLAN',
    price: 'FREE',
    period: 'Per User/month',
    bestFor: 'Individuals or beginners on a budget.',
    features: [
      { text: 'Core features only', included: true },
      { text: 'Limited support', included: true },
      { text: '1 SOS Calls Per Month', included: true },
      { text: '1 Contact Support', included: true },
      { text: 'Monthly Reports', included: false },
    ],
  },
  {
    name: 'THE ESSENTIAL PLAN',
    price: 'Rs. 2000',
    period: 'Per User/month',
    bestFor: 'Seniors requiring regular contact.',
    isPopular: true,
    features: [
      { text: 'Core features only', included: true },
      { text: 'Priority support', included: true },
      { text: '10 SOS Calls Per Month', included: true },
      { text: '5 Contact Support', included: true },
      { text: 'Monthly Reports', included: false },
    ],
  },
  {
    name: 'PRO PLAN',
    price: 'Rs. 5000',
    period: 'Per User/month',
    bestFor: 'Families requiring comprehensive oversight.',
    features: [
      { text: 'Core features only', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Unlimited SOS Calls Per Month', included: true },
      { text: 'Dedicated Care Agent', included: true },
      { text: 'Monthly Reports', included: true },
    ],
  },
];
