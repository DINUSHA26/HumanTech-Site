export interface NavLink {
  label: string;
  href: string;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  price?: string;
  features?: string[];
  buttonText?: string;
}

export interface AppFeature {
  id: string;
  title: string;
  highlightLabel: string;
  description: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  iconName: string;
}

export interface WhatWeDoItem {
  title: string;
  description: string;
  iconEmoji: string;
}

export interface ValueItem {
  title: string;
  description: string;
  color: string;
}

export interface SubscriptionFeature {
  text: string;
  included: boolean;
}

export interface SubscriptionPlan {
  name: string;
  price: string;
  period: string;
  bestFor: string;
  isPopular?: boolean;
  features: SubscriptionFeature[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PrivacyPolicySubsection {
  title?: string;
  content: string;
  bullets?: string[];
}

export interface PrivacyPolicySection {
  id: string;
  title: string;
  content?: string;
  subsections?: PrivacyPolicySubsection[];
}

export interface ContactDetail {
  title: string;
  icon: string;
  value: string;
}
