"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone, Mail, FileText, Send, Layers, Search, ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>("pouch-packing");
  const [searchQuery, setSearchQuery] = useState("");
  const { openModal } = useQuoteModal();

  const allProducts = useMemo(() => {
    return categories.flatMap((cat) =>
      cat.products.map((prod) => ({
        ...prod,
        categoryId: cat.id,
        categoryName: cat.name,
        categorySlug: cat.slug,
      }))
    );
  }, []);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q)
    );
  }, [allProducts, searchQuery]);

  if (!isOpen) return null;

  const toggleCategory = (id: string) => {
    setActiveCategoryId(activeCategoryId === id ? null : id);
  };

  const handleClose = () => {
    setSearchQuery("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative w-5/6 max-w-sm h-full bg-[#0B192C] text-white p-5 shadow-2xl overflow-y-auto flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <Link href="/" onClick={handleClose} className="font-extrabold text-base text-white tracking-tight">
              AVM <span className="text-[#FF5E14]">PACKAGING</span>
            </Link>
            <button
              onClick={handleClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Core Navigation */}
          <nav className="mt-4 space-y-1">
            <Link
              href="/"
              onClick={handleClose}
              className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-slate-800 hover:text-[#FF5E14] transition-colors"
            >
              Home
            </Link>

            {/* Machinery Accordion Header & Search */}
            <div className="pt-2 pb-1">
              <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#FF5E14]" />
                  <span>38 Machinery Models</span>
                </span>
                <span className="text-[10px] text-slate-500 font-semibold">5 Categories</span>
              </div>

              {/* Mobile Search Box */}
              <div className="relative mt-2 mb-2 px-1">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 38 machinery models..."
                  className="w-full pl-8 pr-7 py-1.5 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-[#FF5E14] placeholder:text-slate-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Filtered Search Results on Mobile OR Accordion */}
              {searchQuery.trim() ? (
                <div className="space-y-1.5 mt-2 px-1">
                  <div className="text-[10px] text-slate-400 px-1 pb-1">
                    {filteredProducts.length > 0 ? (
                      <>Found <span className="text-[#FF5E14] font-bold">{filteredProducts.length}</span> models:</>
                    ) : (
                      <>No matching models found</>
                    )}
                  </div>
                  {filteredProducts.map((prod) => (
                    <Link
                      key={prod.slug}
                      href={`/${prod.slug}`}
                      onClick={handleClose}
                      className="block p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-200 hover:text-[#FF5E14] hover:border-[#FF5E14] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{prod.name}</span>
                        <ArrowRight className="w-3 h-3 text-slate-500" />
                      </div>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{prod.categoryName}</span>
                    </Link>
                  ))}
                  {filteredProducts.length === 0 && (
                    <div className="text-center py-4 text-xs text-slate-400">
                      Try searching &ldquo;pouch&rdquo;, &ldquo;sealing&rdquo;, &ldquo;filling&rdquo;
                    </div>
                  )}
                </div>
              ) : (
                /* Category Accordion Items */
                <div className="space-y-1 mt-1">
                  {categories.map((cat) => {
                    const isExpanded = activeCategoryId === cat.id;
                    return (
                      <div key={cat.id} className="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-900/60">
                        <button
                          onClick={() => toggleCategory(cat.id)}
                          className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-200 hover:text-[#FF5E14] text-left transition-colors"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="relative w-8 h-8 rounded-lg bg-white border border-slate-700/80 p-0.5 shrink-0 overflow-hidden">
                              <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                sizes="32px"
                                className="object-contain"
                              />
                            </div>
                            <div className="min-w-0">
                              <span className="block truncate">{cat.name}</span>
                              <span className="text-[10px] text-slate-400 font-normal">{cat.products.length} Models</span>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                              isExpanded ? "rotate-180 text-[#FF5E14]" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="px-3 pb-3 pt-1 border-t border-slate-800 bg-slate-950/40 space-y-1">
                            <Link
                              href={`/${cat.slug}`}
                              onClick={handleClose}
                              className="block py-1 text-[11px] font-bold text-[#FF5E14] hover:underline"
                            >
                              &bull; View All {cat.name} &rarr;
                            </Link>
                            {cat.products.map((prod) => (
                              <Link
                                key={prod.slug}
                                href={`/${prod.slug}`}
                                onClick={handleClose}
                                className="block py-1.5 text-[11px] text-slate-300 hover:text-white hover:pl-1 transition-all border-b border-slate-800/40 last:border-none"
                              >
                                {prod.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/aboutus"
              onClick={handleClose}
              className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-slate-800 hover:text-[#FF5E14] transition-colors"
            >
              About Company
            </Link>

            <Link
              href="/videogallery"
              onClick={handleClose}
              className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-slate-800 hover:text-[#FF5E14] transition-colors"
            >
              Video Demos
            </Link>

            <Link
              href="/contactus"
              onClick={handleClose}
              className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-slate-800 hover:text-[#FF5E14] transition-colors"
            >
              Contact & Plant Directions
            </Link>
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 space-y-2.5">
          <button
            onClick={() => {
              handleClose();
              openModal();
            }}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#FF5E14] hover:bg-[#E04800] rounded-xl shadow-md transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Request Machine Quote</span>
          </button>

          <a
            href="/avmpackagingsystem.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:text-white rounded-xl transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Catalog PDF (3.2 MB)</span>
          </a>

          <div className="space-y-1 text-[11px] text-slate-400 pt-1">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-emerald-400" />
              <a href="tel:+918928852195">+91-8928852195</a> / <a href="tel:+919869911733">+91-9869911733</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-sky-400" />
              <a href="mailto:info@avmpackagingsystem.com">info@avmpackagingsystem.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
