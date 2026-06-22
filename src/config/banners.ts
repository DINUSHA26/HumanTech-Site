export interface HeroBannerConfig {
  title: string;
  subtitle?: string;
  description: string;
  bgImage?: string;
  bgGradient?: string;
  button1Text?: string;
  button1Href?: string;
  button2Text?: string;
  button2Href?: string;
  watermark?: string;
}

export interface PromoCtaConfig {
  title: string;
  description: string;
  bgImage?: string;
  buttonText: string;
  buttonHref: string;
}

export const HERO_BANNERS = {
  home: {
    title: 'Smart Tech. Instant Care.',
    subtitle: 'Total Peace of Mind for Your Loved Ones.',
    description: 'Give your parents the independent life they want and the round-the-clock safety they deserve. Explore our curated wellness tech online, or download our app for instant medical care.',
    bgImage: '/images/home/hero-bg-new-1.png',
    button1Text: 'Shop Drmini Robo & Wellness',
    button1Href: '/store',
    button2Text: 'Download the Care App',
    button2Href: '/humantec-app',
    watermark: '/images/icon/logo-watermark.png',
  } as HeroBannerConfig,

  about: {
    title: 'Transforming Healthcare Through Intelligent Connection',
    description: 'Welcome to HumanTec, where advanced artificial intelligence meets compassionate, human-centered care. We are a pioneering health technology platform dedicated to empowering individuals, modernizing healthcare management, and bridging the gap between cutting-edge tech and daily wellness needs.\n\nAt HumanTec, we believe managing your health should be seamless, proactive, and deeply personalized. By combining an ecosystem of smart devices, AI-driven insights, and on-demand professional support, we are building a world where wellness is always within reach.',
    bgImage: '/images/product/aboutus.jpeg',
  } as HeroBannerConfig,

  app: {
    title: 'HumanTec Care App',
    description: 'Your smartphone transformed into a 24/7 medical portal with instant SOS responses and physician consultations.',
    bgGradient: 'from-accent-teal to-accent-blue',
  } as HeroBannerConfig,

  contact: {
    title: 'Contact Us',
    description: 'Need support, device troubleshooting, or assistance in configuring parent emergency circles? We are here to help.',
    bgGradient: 'from-accent-teal to-accent-blue',
  } as HeroBannerConfig,

  store: {
    title: 'Online Store',
    description: 'Advanced wellness devices and smart home companions designed to keep your family healthy and connected.',
    bgGradient: 'from-accent-teal to-accent-blue',
  } as HeroBannerConfig,

  privacy: {
    title: 'People first Technology that follows',
    description: 'We started HumanTec.lk with one belief — that every person in Sri Lanka deserves access to professional healthcare, no matter where they are or what time it is.',
    bgGradient: 'from-accent-teal to-accent-blue',
  } as HeroBannerConfig,
};

export const PROMO_CTAS = {
  home: {
    title: 'Give them the care they deserve, even when you can\'t be there.',
    description: 'Your loved ones\' safety shouldn\'t be a source of worry. With one-tap SOS alerts, 24/7 doctor consultations, and a built-in pharmacy, we provide a complete safety net for your parents, right from your phone.',
    bgImage: '/images/banners/cta-bg-new.png',
    buttonText: 'Secure Their Care Today',
    buttonHref: '/contact',
  } as PromoCtaConfig,

  about: {
    title: 'Fast response when every second counts.',
    description: 'Whether it\'s a sudden emergency or a quick medical question, help is always one tap away. Connect with certified doctors instantly or trigger an SOS alert that notifies both our emergency team and your family.',
    bgImage: '/images/banners/cta-bg-new.png',
    buttonText: 'Try a Consultation',
    buttonHref: '/contact',
  } as PromoCtaConfig,

  app: {
    title: 'Ready to Prioritize Your Health?',
    description: 'Join thousands of users who trust HumanTec for their daily wellness and emergency safety.',
    bgImage: '/images/banners/cta-bg-new.png',
    buttonText: 'Get Started Today',
    buttonHref: '/contact',
  } as PromoCtaConfig,
};
