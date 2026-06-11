import React from 'react';
import SectionBadge from '../ui/SectionBadge';
import ProductCard from '../ui/ProductCard';
import { PRODUCT_ITEMS } from '@/lib/constants';

export default function ProductsSection() {
  return (
    <section className="bg-bg-light py-24 px-6 md:px-12" id="products">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <SectionBadge align="center" color="teal">
            Smart Tech & Wellness
          </SectionBadge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-dark mb-4 mt-2">
            The Smart Home Health Companion
          </h2>
          <p className="text-sm sm:text-base text-neutral-dark/75 leading-relaxed">
            You can't be in the room every second, but the right technology can. Our curated online store features advanced wellness devices designed to keep your family safe, healthy, and connected.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mt-8">
          {PRODUCT_ITEMS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
