import React from 'react';
import SectionBadge from '../ui/SectionBadge';
import ProductCard from '../ui/ProductCard';
import { PRODUCT_ITEMS, PRODUCTS_SECTION_HEADER } from '@/config/products';

export default function ProductsSection() {
  const header = PRODUCTS_SECTION_HEADER;

  return (
    <section className="bg-bg-light py-20 px-6 md:px-12" id="products">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <SectionBadge align="center" color="teal">
            {header.badge}
          </SectionBadge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-dark mb-4 mt-2">
            {header.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-dark/75 leading-relaxed">
            {header.description}
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
