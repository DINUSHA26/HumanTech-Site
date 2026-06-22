import { ProductItem } from '@/types';

export const PRODUCTS_SECTION_HEADER = {
  badge: 'Smart Tech & Wellness',
  title: 'The Smart Home Health Companion',
  description: 'You can\'t be in the room every second, but the right technology can. Our curated online store features advanced wellness devices designed to keep your family safe, healthy, and connected.',
};

export const STORE_CATALOG = {
  badge: 'Featured Wellness Catalog',
  title: 'Curated Smart Care Devices',
  description: 'Browse our smart robots, medical grade vital trackers, safety monitoring tools, and elder-focused dietary supplements.',
};

export const PRODUCT_ITEMS: ProductItem[] = [
  {
    id: 'drmini-robo',
    title: 'Drmini Robo',
    description: 'Our flagship intelligent wellness companion. Features automated health monitoring, smart reminders, and seamless integration with our family ecosystem.',
    image: '/images/product/drmini-robo-final.jpeg',
    href: '/store',
    price: 'Rs. 45,000',
    features: ['AI health companion', 'SOS video integration', 'Smart medication reminders', 'Vital sensor sync'],
    buttonText: 'Buy Robo Now',
  },
  {
    id: 'wellness-essentials',
    title: 'Wellness Essentials',
    description: 'Premium, pure wellness essentials curated specifically to boost immunity and support daily vitality for seniors.',
    image: '/images/product/omega-3.png',
    href: '/store',
    price: 'Rs. 3,500',
    features: ['High-absorption formula', 'Immunity enhancement', 'Sustainably sourced', 'Batch purity tested'],
    buttonText: 'Order Essentials',
  },
  {
    id: 'tech-devices',
    title: 'Technology & Devices',
    description: 'From smart vitals trackers to daily mobility aids, delivered straight to their doorstep.',
    image: '/images/product/devices.jpeg',
    href: '/store',
    price: 'Rs. 12,000',
    features: ['Real-time vitals tracking', 'Bluetooth sync with app', 'Long-lasting battery', 'Water-resistant build'],
    buttonText: 'Shop Devices',
  },
];
