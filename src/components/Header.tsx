"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, Mail, FileText, ChevronDown, Menu, Send, ShieldCheck, MapPin, 
  Layers, ArrowRight, Search, X, Package, Droplets, Printer, Boxes, 
  ChevronRight, Settings, Globe, Headphones, Filter, Barcode 
} from "lucide-react";
import { categories } from "@/data/categories";
import { useQuoteModal } from "@/context/QuoteModalContext";
import MobileNav from "@/components/MobileNav";

const categoryIcons: Record<string, React.ReactNode> = {
  "pouch-packing": <Package className="w-3.5 h-3.5 text-[#FF5E14]" />,
  "sealing-machines": <Settings className="w-3.5 h-3.5 text-[#FF5E14]" />,
  "filling-machines": <Filter className="w-3.5 h-3.5 text-[#FF5E14]" />,
  "coding-marking": <Barcode className="w-3.5 h-3.5 text-[#FF5E14]" />,
  "end-of-line": <Boxes className="w-3.5 h-3.5 text-[#FF5E14]" />,
};

const viewAllLabels: Record<string, string> = {
  "pouch-packing": "View All Pouch Machines",
  "sealing-machines": "View All Sealing & Capping",
  "filling-machines": "View All Filling Machines",
  "coding-marking": "View All Coding & Marking",
  "end-of-line": "View All End-of-Line",
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const megaMenuTimerRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { openModal } = useQuoteModal();

  const handleMenuEnter = () => {
    if (megaMenuTimerRef.current) {
      clearTimeout(megaMenuTimerRef.current);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMenuLeave = () => {
    megaMenuTimerRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 250);
  };

  const closeMenu = () => {
    setIsMegaMenuOpen(false);
    setSearchQuery("");
  };

  // Flatten all 38 products across categories for instant client-side search
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isMegaMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsMegaMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMegaMenuOpen) {
        setIsMegaMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMegaMenuOpen]);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#0B192C] text-slate-300 text-xs py-2 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+918928852195"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-white">+91-8928852195</span>
            </a>
            <a
              href="tel:+919869911733"
              className="hover:text-white transition-colors"
            >
              +91-9869911733
            </a>
            <a
              href="mailto:info@avmpackagingsystem.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>info@avmpackagingsystem.com</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF5E14]" />
              <span className="font-medium">Direct Factory Manufacturer</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Goregaon East, Mumbai</span>
            </div>
            <a
              href="/avmpackagingsystem.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF5E14]" />
              <span>Catalog PDF (3.2 MB)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/98 backdrop-blur-md relative ${
          isScrolled ? "shadow-md py-3" : "py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group py-1">
            <div className="relative w-[185px] sm:w-[210px] md:w-[220px] lg:w-[240px] xl:w-[250px] h-[20px] sm:h-[23px] md:h-[24px] lg:h-[26px] xl:h-[27px]">
              <Image
                src="/images/avmlogo.png"
                alt="AVM Packaging Systems Logo"
                fill
                priority
                unoptimized
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-[#FF5E14] transition-colors">
              Home
            </Link>

            {/* Mega Menu Trigger: Kept accessible for SEO and interactive for users */}
            <div 
              className="static py-2"
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              <button
                ref={triggerRef}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsMegaMenuOpen(!isMegaMenuOpen);
                  }
                }}
                className={`flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5E14] rounded px-1.5 py-0.5 ${
                  isMegaMenuOpen ? "text-[#FF5E14]" : "hover:text-[#FF5E14]"
                }`}
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="dialog"
                aria-controls="mega-menu-machinery"
              >
                <Layers className="w-4 h-4 text-[#FF5E14]" />
                <span>All Machinery (38 Models)</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Redesigned Premium Industrial Mega Menu with Category Product Images (Reference Screenshot 2) */}
              <div 
                id="mega-menu-machinery"
                ref={menuRef}
                role="dialog"
                aria-label="Machinery Catalog Navigation"
                onMouseEnter={handleMenuEnter}
                onMouseLeave={handleMenuLeave}
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[98vw] max-w-[1380px] max-h-[calc(100vh-85px)] flex flex-col bg-white border border-[#E5ECF0] rounded-2xl shadow-[0_25px_70px_-15px_rgba(11,25,44,0.22)] z-50 transition-all duration-200 overflow-hidden ${
                  isMegaMenuOpen 
                    ? "visible opacity-100 translate-y-0 pointer-events-auto" 
                    : "invisible opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {/* Invisible hover bridge spanning gap between header and dropdown */}
                <div className="absolute -top-3 left-0 right-0 h-3 bg-transparent pointer-events-auto" />

                {/* Top Mega Menu Header - Compact */}
                <div className="px-5 py-2.5 sm:py-3 bg-white border-b border-[#E5ECF0] flex flex-wrap items-center justify-between gap-3 shrink-0">
                  <div>
                    <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-[#FF5E14] block">
                      ENGINEERED IN MUMBAI, DELIVERED WORLDWIDE
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0B192C] tracking-tight leading-tight">
                      Explore Our Packaging Machinery
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Complete range of 38 models for every packaging need
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    {/* Search Box */}
                    <div className="relative w-full sm:w-64 md:w-72">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search 38 machinery models..."
                        className="w-full pl-8 pr-7 py-1.5 text-xs text-[#0F172A] bg-[#F8FAFC] border border-[#E5ECF0] rounded-lg focus:outline-none focus:border-[#FF5E14] focus:bg-white focus:ring-2 focus:ring-[#FF5E14]/15 transition-all placeholder:text-slate-400 font-medium"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 rounded hover:bg-slate-200/60 transition-colors"
                          aria-label="Clear search"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    {/* Request Custom Model Quote Button */}
                    <button
                      onClick={() => {
                        closeMenu();
                        openModal();
                      }}
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#FF5E14] hover:bg-[#E04800] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
                    >
                      <Settings className="w-3 h-3" />
                      <span>Request Custom Model Quote →</span>
                    </button>
                  </div>
                </div>

                {/* Main Content Area - Flex-1 with internal scrolling if viewport is constrained */}
                <div className="p-3 sm:p-3.5 flex-1 min-h-0 overflow-y-auto">
                  {searchQuery.trim() ? (
                    /* Search Results View */
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E5ECF0]">
                        <span className="text-xs font-semibold text-[#0B192C]">
                          {filteredProducts.length > 0 ? (
                            <>Found <span className="text-[#FF5E14] font-bold">{filteredProducts.length}</span> matching models for &ldquo;{searchQuery}&rdquo;:</>
                          ) : (
                            <>No matching models found</>
                          )}
                        </span>
                        <button
                          onClick={() => setSearchQuery("")}
                          className="text-xs text-[#FF5E14] hover:underline font-semibold"
                        >
                          Clear Search
                        </button>
                      </div>

                      {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                          {filteredProducts.map((prod) => (
                            <Link
                              key={prod.slug}
                              href={`/${prod.slug}`}
                              onClick={closeMenu}
                              className="group flex flex-col justify-between p-2.5 rounded-lg border border-[#E5ECF0] bg-white hover:border-[#FF5E14] hover:bg-[#F8FAFC] hover:shadow-sm transition-all"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-1">
                                  <span className="text-[9.5px] font-bold text-[#164E7A] bg-[#164E7A]/10 px-1.5 py-0.5 rounded">
                                    {prod.categoryName}
                                  </span>
                                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#FF5E14] group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <h4 className="text-xs font-bold text-[#0F172A] group-hover:text-[#FF5E14] transition-colors leading-snug">
                                  {prod.name}
                                </h4>
                                <p className="text-[10.5px] text-slate-500 line-clamp-1 mt-0.5">
                                  {prod.shortDesc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 px-4">
                          <div className="w-10 h-10 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-2.5">
                            <Search className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-[#0B192C]">
                            No machinery found matching &ldquo;{searchQuery}&rdquo;
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                            Try searching for &ldquo;pouch&rdquo;, &ldquo;sealing&rdquo;, &ldquo;vacuum&rdquo;, &ldquo;filling&rdquo;, &ldquo;coding&rdquo;, or &ldquo;strapping&rdquo;.
                          </p>
                          <button
                            onClick={() => setSearchQuery("")}
                            className="mt-3 px-3.5 py-1 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#FF5E14] rounded-lg transition-colors"
                          >
                            Reset Search & View All 38 Models
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* 6-Column Layout: 5 Category Cards + 1 Featured Panel */
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 xl:gap-3 items-stretch">
                      {/* 5 Category Cards with Compact ~90px Product Images */}
                      {categories.map((cat) => (
                        <div 
                          key={cat.id} 
                          className="bg-white rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between overflow-hidden hover:shadow-md hover:border-slate-300 transition-all group"
                        >
                          {/* Top Fixed Area: Image + Category Header + Divider */}
                          <div className="shrink-0">
                            {/* Compact 90px Image Area */}
                            <div className="relative w-full h-[90px] bg-[#F8FAFC] border-b border-slate-100 p-1.5 flex items-center justify-center overflow-hidden">
                              <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 200px"
                                className="object-contain object-center p-1 group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>

                            {/* Category Header */}
                            <div className="p-2.5 pb-1.5">
                              <div className="flex items-start justify-between gap-1.5">
                                <div className="flex items-center gap-2 min-w-0">
                                  <div className="w-5 h-5 rounded-md bg-orange-50 text-[#FF5E14] flex items-center justify-center shrink-0">
                                    {categoryIcons[cat.id] || <Package className="w-3 h-3 text-[#FF5E14]" />}
                                  </div>
                                  <div className="min-w-0">
                                    <Link
                                      href={`/${cat.slug}`}
                                      onClick={closeMenu}
                                      className="font-bold text-xs text-[#0B192C] hover:text-[#FF5E14] transition-colors block leading-tight truncate"
                                      title={cat.name}
                                    >
                                      {cat.name}
                                    </Link>
                                    <span className="text-[9.5px] text-slate-400 font-medium block">
                                      {cat.products.length} Models
                                    </span>
                                  </div>
                                </div>
                                <Link 
                                  href={`/${cat.slug}`}
                                  onClick={closeMenu}
                                  aria-label={`View ${cat.name}`}
                                  className="text-slate-400 hover:text-[#FF5E14] transition-colors shrink-0 mt-0.5"
                                >
                                  <ChevronRight className="w-3 h-3" />
                                </Link>
                              </div>
                            </div>

                            {/* Thin Divider */}
                            <div className="border-b border-slate-100 mx-2.5" />
                          </div>

                          {/* Product Links List - Internal Scroll Area */}
                          <ul className="px-1.5 py-1 flex-1 min-h-0 max-h-[145px] sm:max-h-[155px] overflow-y-auto overscroll-contain scrollbar-thin space-y-0.5">
                            {cat.products.map((prod) => (
                              <li key={prod.slug}>
                                <Link
                                  href={`/${prod.slug}`}
                                  onClick={closeMenu}
                                  className="flex items-center justify-between py-0.5 px-1.5 rounded hover:bg-[#F8FAFC] text-[10.5px] text-[#0F172A] hover:text-[#FF5E14] transition-colors font-medium group/item leading-snug"
                                  title={prod.name}
                                >
                                  <span className="truncate pr-1 group-hover/item:translate-x-0.5 transition-transform">
                                    {prod.name}
                                  </span>
                                  <ChevronRight className="w-2.5 h-2.5 text-slate-300 group-hover/item:text-[#FF5E14] shrink-0" />
                                </Link>
                              </li>
                            ))}
                          </ul>

                          {/* Bottom Fixed Area: View All Button */}
                          <div className="p-2 pt-1 mt-auto border-t border-slate-100/80 shrink-0">
                            <Link
                              href={`/${cat.slug}`}
                              onClick={closeMenu}
                              className="block w-full py-1 px-1.5 rounded-lg bg-orange-50/70 hover:bg-orange-100/90 text-[10.5px] font-bold text-[#FF5E14] text-center transition-colors"
                            >
                              {viewAllLabels[cat.id] || `View All ${cat.name}`} →
                            </Link>
                          </div>
                        </div>
                      ))}

                      {/* Column 6: Compact Featured Machinery Panel */}
                      <div className="bg-[#F0F7FD] rounded-xl border border-[#D5E5F5] p-2.5 sm:p-3 flex flex-col justify-between">
                        <div>
                          <span className="self-start inline-block text-[8.5px] font-extrabold uppercase tracking-wider text-white bg-[#FF5E14] px-2 py-0.5 rounded-full mb-1">
                            FEATURED MACHINERY
                          </span>

                          {/* Compact 105px Featured Machine Image */}
                          <div className="relative w-full h-[105px] bg-white rounded-lg border border-slate-200/80 p-1.5 overflow-hidden shadow-xs my-1 group">
                            <Image
                              src="/images/avm/clean/product/automatic-pouch-packing-machine.jpg"
                              alt="Automatic Pouch Packing Machine"
                              fill
                              sizes="200px"
                              className="object-contain object-center p-1 group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          <h4 className="font-extrabold text-xs text-[#0B192C] mt-1 leading-tight truncate" title="Automatic Pouch Packing Machine">
                            Automatic Pouch Packing Machine
                          </h4>
                          <p className="text-[10px] text-slate-600 mt-0.5 line-clamp-2 leading-relaxed">
                            High-speed, reliable pouch packing solution for food, pharma and industrial products.
                          </p>
                        </div>

                        <div className="mt-2 space-y-1.5 shrink-0">
                          <Link
                            href="/automatic-pouch-packing-machine"
                            onClick={closeMenu}
                            className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 text-xs font-bold text-white bg-[#FF5E14] hover:bg-[#E04800] rounded-lg transition-colors shadow-sm"
                          >
                            <span>View Machine</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>

                          {/* 3 mini thumbnails row */}
                          <div className="grid grid-cols-3 gap-1 pt-1.5 border-t border-slate-200/60">
                            <div className="relative h-8 bg-white rounded border border-slate-200 p-0.5 overflow-hidden">
                              <Image
                                src="/images/avm/clean/product/automatic-pouch-packing-machine.jpg"
                                alt="Pouch"
                                fill
                                sizes="40px"
                                className="object-contain"
                              />
                            </div>
                            <div className="relative h-8 bg-white rounded border border-slate-200 p-0.5 overflow-hidden">
                              <Image
                                src="/images/avm/clean/printing/horizontal-continuous-sealing-machine.jpg"
                                alt="Sealing"
                                fill
                                sizes="40px"
                                className="object-contain"
                              />
                            </div>
                            <div className="relative h-8 bg-white rounded border border-slate-200 p-0.5 overflow-hidden">
                              <Image
                                src="/images/avm/clean/all/auger-filling-machine.jpg"
                                alt="Filling"
                                fill
                                sizes="40px"
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Feature Badges Bar - Compact & Always Visible */}
                <div className="bg-[#F8FAFC] border-t border-[#E5ECF0] px-5 py-2 sm:py-2.5 grid grid-cols-2 lg:grid-cols-4 gap-3 rounded-b-2xl shrink-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100/80 text-[#164E7A] flex items-center justify-center shrink-0">
                      <Settings className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#0B192C] block leading-tight">38+ Machinery Models</span>
                      <span className="text-[9.5px] text-slate-500 font-medium block">Complete Packaging Solutions</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100/80 text-[#164E7A] flex items-center justify-center shrink-0">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#0B192C] block leading-tight">Engineered in Mumbai</span>
                      <span className="text-[9.5px] text-slate-500 font-medium block">Trusted Worldwide</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100/80 text-[#164E7A] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#164E7A]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#0B192C] block leading-tight">Custom Solutions</span>
                      <span className="text-[9.5px] text-slate-500 font-medium block">Tailored to Your Needs</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100/80 text-[#164E7A] flex items-center justify-center shrink-0">
                      <Headphones className="w-3.5 h-3.5 text-[#164E7A]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#0B192C] block leading-tight">Expert Support</span>
                      <span className="text-[9.5px] text-slate-500 font-medium block">From Selection to Installation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/aboutus" className="hover:text-[#FF5E14] transition-colors">
              About Us
            </Link>

            <Link href="/videogallery" className="hover:text-[#FF5E14] transition-colors">
              Video Demos
            </Link>

            <Link href="/contactus" className="hover:text-[#FF5E14] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => openModal()}
              className="btn-primary text-xs sm:text-sm px-3 sm:px-4 xl:px-5 py-2 sm:py-2.5 shadow-sm whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Get Instant Quote</span>
              <span className="inline sm:hidden">Quote</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Off-canvas Mobile Menu */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
