"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Send, Check, ShieldCheck } from "lucide-react";
import { Product } from "@/types";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openModal } = useQuoteModal();

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group">

      {/* Badge bar — sits in normal flow above the image, no overlap */}
      <div className="flex items-center justify-between px-3 pt-3 gap-2">
        <span className="badge-orange text-[10px] shadow-xs leading-tight">
          {product.category}
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
          <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
          <span>Ready Stock</span>
        </span>
      </div>

      {/* Image container */}
      <div className="relative w-full h-48 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 overflow-hidden border-b border-slate-200 flex items-center justify-center mt-2">
        <Image
          src={product.image || "/images/avm/clean/all/potato-chips-packaging-machine.jpg"}
          alt={`${product.name} manufactured by AVM Packaging System`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-3 group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <Link href={`/${product.slug}`} className="block group-hover:text-[#FF5E14] transition-colors">
            <h3 className="font-bold text-slate-900 text-base line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Quick Specs / Features Pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.features?.slice(0, 2).map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md"
              >
                <Check className="w-3 h-3 text-[#FF5E14]" />
                <span className="truncate max-w-[180px]">{feat}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <Link
            href={`/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-[#FF5E14] transition-colors"
          >
            <span>Specs & Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => openModal(product.name)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#FF5E14] rounded-lg shadow-sm transition-colors"
          >
            <Send className="w-3 h-3" />
            <span>Get Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
}
