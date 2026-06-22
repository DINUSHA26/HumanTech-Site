import React from 'react';
import SectionBadge from '@/components/ui/SectionBadge';
import { PRODUCT_ITEMS, STORE_CATALOG } from '@/config/products';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { Check } from 'lucide-react';

export default function StoreGridSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-16 mb-24 text-center">
      <SectionBadge color="teal" align="center">
        {STORE_CATALOG.badge}
      </SectionBadge>
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
        {STORE_CATALOG.title}
      </h2>
      <p className="text-neutral-dark/70 max-w-2xl mx-auto mb-16">
        {STORE_CATALOG.description}
      </p>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCT_ITEMS.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl p-8 border border-slate-100/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-stretch text-left group"
          >
            <div>
              {/* Product Image */}
              <div className="w-full aspect-square bg-slate-50/50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden select-none p-6">
                <div className="relative w-40 h-40 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 150px, 180px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title & Price */}
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-xl font-bold text-neutral-dark group-hover:text-accent-blue transition-colors duration-200">
                  {product.title}
                </h3>
                <span className="text-lg font-extrabold text-secondary flex-shrink-0">
                  {product.price || 'Contact Us'}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-dark/70 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Bullet Features */}
              {product.features && (
                <ul className="flex flex-col gap-2 mb-8">
                  {product.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs text-neutral-dark/80 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Action button */}
            <Button
              variant="primary"
              className="w-full text-center mt-auto"
              size="md"
              href="/contact"
            >
              {product.buttonText || 'Buy Now'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
