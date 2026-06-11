import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductItem } from '@/types';

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-3xl p-8 pt-12 shadow-sm border border-slate-100/50 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-2 mt-8">
      {/* Floating Image Wrapper */}
      <div className="relative w-44 h-44 -mt-24 mb-6 transition-transform duration-500 group-hover:scale-105 select-none">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 150px, 180px"
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-bold text-neutral-dark mb-3 group-hover:text-accent-blue transition-colors duration-300">
        {product.title}
      </h3>
      
      <p className="text-sm text-neutral-dark/70 leading-relaxed mb-6 flex-grow">
        {product.description}
      </p>

      {/* Action Link */}
      <Link
        href={product.href}
        className="inline-flex items-center text-accent-blue font-semibold text-sm group-hover:text-accent-teal transition-colors duration-300"
      >
        Explore
        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </div>
  );
}
