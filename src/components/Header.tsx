"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, FileText, ChevronDown, Menu, Send, ShieldCheck, MapPin, Layers, ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { useQuoteModal } from "@/context/QuoteModalContext";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuTimerRef = React.useRef<NodeJS.Timeout | null>(null);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/98 backdrop-blur-md ${
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

            {/* Mega Menu Trigger: Always in DOM for SEO crawlability */}
            <div 
              className="relative py-2"
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1.5 transition-colors ${
                  isMegaMenuOpen ? "text-[#FF5E14]" : "hover:text-[#FF5E14]"
                }`}
                aria-expanded={isMegaMenuOpen}
              >
                <Layers className="w-4 h-4 text-[#FF5E14]" />
                <span>All Machinery (38 Models)</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Full Multi-Column Mega Menu: Unconditionally in HTML DOM for 100% SEO discovery */}
              <div 
                onMouseEnter={handleMenuEnter}
                onMouseLeave={handleMenuLeave}
                className={`fixed left-0 right-0 top-full bg-white border-t border-b border-slate-200 shadow-2xl z-50 transition-all duration-200 ${
                  isMegaMenuOpen 
                    ? "visible opacity-100 translate-y-0 pointer-events-auto" 
                    : "invisible opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {/* Invisible hover bridge spanning gap between header and dropdown */}
                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent pointer-events-auto" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  {/* Top Mega Menu Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E14]">
                        Engineered In Mumbai, Delivered Worldwide
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                        Complete Packaging Machinery Catalog (All 38 Models)
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openModal()}
                        className="btn-primary text-xs py-2 px-4"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Request Custom Model Quote</span>
                      </button>
                    </div>
                  </div>

                  {/* 5-Column Grid with ALL 38 Products */}
                  <div className="grid grid-cols-5 gap-6 text-xs">
                    {categories.map((cat) => (
                      <div key={cat.id} className="space-y-3">
                        {/* Category Header Link */}
                        <Link
                          href={`/${cat.slug}`}
                          className="block font-bold text-slate-900 hover:text-[#FF5E14] text-xs uppercase tracking-wider pb-1.5 border-b border-slate-200 group/cat"
                        >
                          <span className="group-hover/cat:translate-x-0.5 transition-transform inline-block">
                            {cat.name} &rarr;
                          </span>
                        </Link>

                        {/* Product Links List */}
                        <ul className="space-y-1.5">
                          {cat.products.map((prod) => (
                            <li key={prod.slug}>
                              <Link
                                href={`/${prod.slug}`}
                                className="text-slate-600 hover:text-[#FF5E14] hover:bg-orange-50/50 p-1 rounded block transition-colors leading-tight font-medium"
                                title={prod.name}
                              >
                                {prod.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Mega Menu Bottom Bar */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-slate-50 p-3.5 rounded-xl">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>All models feature food/pharma grade SS 304/316 contact parts and standardized PLC controls.</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-slate-800">
                        Need Technical Guidance? Call <a href="tel:+918928852195" className="text-[#FF5E14] hover:underline">+91-8928852195</a>
                      </span>
                      <a
                        href="/avmpackagingsystem.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#FF5E14] hover:underline flex items-center gap-1"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>PDF Datasheet</span>
                      </a>
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
