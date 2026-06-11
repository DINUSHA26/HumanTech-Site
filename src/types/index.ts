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
