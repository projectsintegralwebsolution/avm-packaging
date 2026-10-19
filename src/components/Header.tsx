"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, Mail, FileText, ChevronDown, Menu, Send, ShieldCheck, MapPin, 
  Layers, ArrowRight, Search, X, Package, Droplets, Printer, Boxes 
} from "lucide-react";
import { categories } from "@/data/categories";
import { useQuoteModal } from "@/context/QuoteModalContext";
import MobileNav from "@/components/MobileNav";

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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-44 sm:w-56 h-10 sm:h-12">
              <Image
                src="/images/avmlogo.png"
                alt="AVM Packaging System Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
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

              {/* Redesigned Premium Industrial Mega Menu */}
              <div 
                id="mega-menu-machinery"
                ref={menuRef}
                role="dialog"
                aria-label="Machinery Catalog Navigation"
                onMouseEnter={handleMenuEnter}
                onMouseLeave={handleMenuLeave}
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[92vw] max-w-6xl bg-white border border-[#E5ECF0] rounded-2xl shadow-[0_20px_60px_-15px_rgba(11,25,44,0.18)] z-50 transition-all duration-200 overflow-hidden ${
                  isMegaMenuOpen 
                    ? "visible opacity-100 translate-y-0 pointer-events-auto" 
                    : "invisible opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {/* Invisible hover bridge spanning gap between header and dropdown */}
                <div className="absolute -top-3 left-0 right-0 h-3 bg-transparent pointer-events-auto" />

                {/* Mega Menu Top Header with Search Field */}
                <div className="px-7 py-4 bg-white border-b border-[#E5ECF0] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
                      <h3 className="text-base font-bold text-[#0B192C] tracking-tight">
                        Explore Our Machinery
                      </h3>
                      <span className="text-[11px] font-semibold text-[#164E7A] bg-[#164E7A]/10 px-2 py-0.5 rounded-full">
                        38 Models
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Packaging solutions for every industry &bull; Food, Pharma & FMCG
                    </p>
                  </div>

                  {/* Search Box */}
                  <div className="relative w-full sm:w-80">
                    <div className="relative flex items-center">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search 38 machinery models..."
                        className="w-full pl-9 pr-8 py-2 text-xs text-[#0F172A] bg-[#F8FAFC] border border-[#E5ECF0] rounded-xl focus:outline-none focus:border-[#FF5E14] focus:bg-white focus:ring-2 focus:ring-[#FF5E14]/15 transition-all placeholder:text-slate-400"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-2.5 p-1 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-200/60 transition-colors"
                          aria-label="Clear search"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Main Content Area: Search Filtered View OR 5-Column Category + Featured Card View */}
                <div className="p-6 max-h-[68vh] overflow-y-auto">
                  {searchQuery.trim() ? (
                    /* Search Results View */
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5ECF0]">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {filteredProducts.map((prod) => (
                            <Link
                              key={prod.slug}
                              href={`/${prod.slug}`}
                              onClick={closeMenu}
                              className="group flex flex-col justify-between p-3 rounded-xl border border-[#E5ECF0] bg-white hover:border-[#FF5E14] hover:bg-[#F8FAFC] hover:shadow-sm transition-all"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-1">
                                  <span className="text-[10px] font-bold text-[#164E7A] bg-[#164E7A]/10 px-1.5 py-0.5 rounded">
                                    {prod.categoryName}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF5E14] group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <h4 className="text-xs font-bold text-[#0F172A] group-hover:text-[#FF5E14] transition-colors">
                                  {prod.name}
                                </h4>
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {prod.shortDesc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-10 px-4">
                          <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                            <Search className="w-6 h-6" />
                          </div>
                          <h4 className="text-sm font-bold text-[#0B192C]">
                            No machinery found matching &ldquo;{searchQuery}&rdquo;
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                            Try searching for &ldquo;pouch&rdquo;, &ldquo;sealing&rdquo;, &ldquo;vacuum&rdquo;, &ldquo;filling&rdquo;, &ldquo;coding&rdquo;, or &ldquo;strapping&rdquo;.
                          </p>
                          <button
                            onClick={() => setSearchQuery("")}
                            className="mt-4 px-4 py-1.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#FF5E14] rounded-lg transition-colors"
                          >
                            Reset Search & View All 38 Models
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Default Multi-Column Grid + Compact Featured Product Panel */
                    <div className="grid grid-cols-12 gap-5">
                      {/* Left 4 Category Columns (Span 9 on desktop) */}
                      <div className="col-span-12 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                        {/* Column 1: Pouch Packaging Machines (9) */}
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2 pb-2 border-b border-[#E5ECF0]">
                            <div className="w-6 h-6 rounded-md bg-[#164E7A]/10 text-[#164E7A] flex items-center justify-center shrink-0">
                              <Package className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0">
                              <Link
                                href={`/${categories[0].slug}`}
                                onClick={closeMenu}
                                className="font-bold text-xs text-[#0B192C] hover:text-[#FF5E14] transition-colors block leading-tight truncate"
                              >
                                {categories[0].name}
                              </Link>
                              <span className="text-[10px] text-slate-400 font-medium">9 Models</span>
                            </div>
                          </div>
                          <ul className="space-y-1">
                            {categories[0].products.map((prod) => (
                              <li key={prod.slug}>
                                <Link
                                  href={`/${prod.slug}`}
                                  onClick={closeMenu}
                                  className="group block px-2 py-1 text-xs text-[#0F172A] hover:text-[#FF5E14] hover:bg-[#F8FAFC] rounded transition-colors font-medium leading-snug"
                                >
                                  <span className="group-hover:translate-x-0.5 inline-block transition-transform">
                                    {prod.name}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={`/${categories[0].slug}`}
                            onClick={closeMenu}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF5E14] hover:underline pt-1"
                          >
                            <span>View All Pouch Models</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        {/* Column 2: Sealing & Capping Machines (12) */}
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2 pb-2 border-b border-[#E5ECF0]">
                            <div className="w-6 h-6 rounded-md bg-[#164E7A]/10 text-[#164E7A] flex items-center justify-center shrink-0">
                              <ShieldCheck className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0">
                              <Link
                                href={`/${categories[1].slug}`}
                                onClick={closeMenu}
                                className="font-bold text-xs text-[#0B192C] hover:text-[#FF5E14] transition-colors block leading-tight truncate"
                              >
                                {categories[1].name}
                              </Link>
                              <span className="text-[10px] text-slate-400 font-medium">12 Models</span>
                            </div>
                          </div>
                          <ul className="space-y-1">
                            {categories[1].products.map((prod) => (
                              <li key={prod.slug}>
                                <Link
                                  href={`/${prod.slug}`}
                                  onClick={closeMenu}
                                  className="group block px-2 py-1 text-xs text-[#0F172A] hover:text-[#FF5E14] hover:bg-[#F8FAFC] rounded transition-colors font-medium leading-snug"
                                >
                                  <span className="group-hover:translate-x-0.5 inline-block transition-transform">
                                    {prod.name}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={`/${categories[1].slug}`}
                            onClick={closeMenu}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF5E14] hover:underline pt-1"
                          >
                            <span>View All Sealing Models</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        {/* Column 3: Filling & Dosing (6) + Coding & Marking (4) */}
                        <div className="space-y-4">
                          {/* Filling & Dosing Machinery */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 pb-2 border-b border-[#E5ECF0]">
                              <div className="w-6 h-6 rounded-md bg-[#164E7A]/10 text-[#164E7A] flex items-center justify-center shrink-0">
                                <Droplets className="w-3.5 h-3.5" />
                              </div>
                              <div className="min-w-0">
                                <Link
                                  href={`/${categories[2].slug}`}
                                  onClick={closeMenu}
                                  className="font-bold text-xs text-[#0B192C] hover:text-[#FF5E14] transition-colors block leading-tight truncate"
                                >
                                  {categories[2].name}
                                </Link>
                                <span className="text-[10px] text-slate-400 font-medium">6 Models</span>
                              </div>
                            </div>
                            <ul className="space-y-1">
                              {categories[2].products.map((prod) => (
                                <li key={prod.slug}>
                                  <Link
                                    href={`/${prod.slug}`}
                                    onClick={closeMenu}
                                    className="group block px-2 py-1 text-xs text-[#0F172A] hover:text-[#FF5E14] hover:bg-[#F8FAFC] rounded transition-colors font-medium leading-snug"
                                  >
                                    <span className="group-hover:translate-x-0.5 inline-block transition-transform">
                                      {prod.name}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Coding & Marking Equipment */}
                          <div className="space-y-2 pt-1">
                            <div className="flex items-center gap-2 pb-2 border-b border-[#E5ECF0]">
                              <div className="w-6 h-6 rounded-md bg-[#164E7A]/10 text-[#164E7A] flex items-center justify-center shrink-0">
                                <Printer className="w-3.5 h-3.5" />
                              </div>
                              <div className="min-w-0">
                                <Link
                                  href={`/${categories[3].slug}`}
                                  onClick={closeMenu}
                                  className="font-bold text-xs text-[#0B192C] hover:text-[#FF5E14] transition-colors block leading-tight truncate"
                                >
                                  {categories[3].name}
                                </Link>
                                <span className="text-[10px] text-slate-400 font-medium">4 Models</span>
                              </div>
                            </div>
                            <ul className="space-y-1">
                              {categories[3].products.map((prod) => (
                                <li key={prod.slug}>
                                  <Link
                                    href={`/${prod.slug}`}
                                    onClick={closeMenu}
                                    className="group block px-2 py-1 text-xs text-[#0F172A] hover:text-[#FF5E14] hover:bg-[#F8FAFC] rounded transition-colors font-medium leading-snug"
                                  >
                                    <span className="group-hover:translate-x-0.5 inline-block transition-transform">
                                      {prod.name}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Column 4: Carton Taping, Strapping & End-of-Line (7) */}
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2 pb-2 border-b border-[#E5ECF0]">
                            <div className="w-6 h-6 rounded-md bg-[#164E7A]/10 text-[#164E7A] flex items-center justify-center shrink-0">
                              <Boxes className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0">
                              <Link
                                href={`/${categories[4].slug}`}
                                onClick={closeMenu}
                                className="font-bold text-xs text-[#0B192C] hover:text-[#FF5E14] transition-colors block leading-tight truncate"
                              >
                                {categories[4].name}
                              </Link>
                              <span className="text-[10px] text-slate-400 font-medium">7 Models</span>
                            </div>
                          </div>
                          <ul className="space-y-1">
                            {categories[4].products.map((prod) => (
                              <li key={prod.slug}>
                                <Link
                                  href={`/${prod.slug}`}
                                  onClick={closeMenu}
                                  className="group block px-2 py-1 text-xs text-[#0F172A] hover:text-[#FF5E14] hover:bg-[#F8FAFC] rounded transition-colors font-medium leading-snug"
                                >
                                  <span className="group-hover:translate-x-0.5 inline-block transition-transform">
                                    {prod.name}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={`/${categories[4].slug}`}
                            onClick={closeMenu}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF5E14] hover:underline pt-1"
                          >
                            <span>View All End-of-Line</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: Compact Featured Machinery Panel (Span 3 on desktop) */}
                      <div className="col-span-12 lg:col-span-3 flex flex-col justify-between p-4 bg-[#F8FAFC] border border-[#E5ECF0] rounded-xl">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#FF5E14] bg-orange-100/70 px-2 py-0.5 rounded-full">
                              Featured Machinery
                            </span>
                            <span className="text-[10px] text-slate-500 font-semibold">Flagship</span>
                          </div>

                          <div className="relative w-full h-36 rounded-lg overflow-hidden bg-white border border-[#E5ECF0] my-2 group">
                            <Image
                              src="/images/avm/clean/product/automatic-pouch-packing-machine.jpg"
                              alt="Automatic Pouch Packing Machine"
                              fill
                              className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          <h4 className="font-bold text-xs text-[#0B192C] mt-2">
                            Automatic Pouch Packing Machine
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                            Continuous Form-Fill-Seal packaging with high-accuracy volumetric & auger dosing for snacks, spices & granules.
                          </p>
                        </div>

                        <div className="pt-3 mt-3 border-t border-[#E5ECF0] space-y-2">
                          <Link
                            href="/automatic-pouch-packing-machine"
                            onClick={closeMenu}
                            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#FF5E14] rounded-lg transition-colors shadow-sm"
                          >
                            <span>View Machine</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => {
                              closeMenu();
                              openModal("Automatic Pouch Packing Machine");
                            }}
                            className="w-full text-center text-[11px] font-semibold text-[#164E7A] hover:text-[#FF5E14] transition-colors py-0.5"
                          >
                            Request Custom Specs &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mega Menu Bottom Bar */}
                <div className="px-7 py-3 bg-[#F8FAFC] border-t border-[#E5ECF0] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>All 38 models manufactured with food/pharma grade SS 304/316 contact parts and standardized PLC controls.</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="font-semibold text-slate-800">
                      Factory Guidance: <a href="tel:+918928852195" className="text-[#FF5E14] hover:underline font-bold">+91-8928852195</a>
                    </span>
                    <a
                      href="/avmpackagingsystem.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#FF5E14] hover:underline flex items-center gap-1"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Catalog PDF</span>
                    </a>
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
          <div className="flex items-center gap-3">
            <button
              onClick={() => openModal()}
              className="btn-primary text-xs sm:text-sm px-4 sm:px-5 py-2.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Get Instant Quote</span>
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
