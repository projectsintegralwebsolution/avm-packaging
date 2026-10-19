"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  FileText, 
  Award
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface SlideData {
  id: number;
  badge: string;
  badgeColor: string;
  titleLight: string;
  titleHighlight: string;
  description: string;
  bannerImage: string;
  machineName: string;
  specs: { label: string; value: string }[];
  primaryCtaText: string;
  primaryCtaMachine: string;
  secondaryCtaLink: string;
  secondaryCtaText: string;
  trustPoints: string[];
}

const slides: SlideData[] = [
  {
    id: 1,
    badge: "Direct Factory Manufacturer • 25+ Years Legacy",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    titleLight: "High-Speed Automated",
    titleHighlight: "Pouch Packaging Systems",
    description: "Complete vertical form-fill-seal packaging line with supporting conveyor and sealing equipment. Engineered for potato chips, namkeen, fryums, snacks, and food granules.",
    bannerImage: "/images/banner/hero-banner-1.png",
    machineName: "Vertical Form-Fill-Seal Packaging Line",
    specs: [
      { label: "Output Speed", value: "15 - 120 PPM" },
      { label: "Construction", value: "SS 304 Contact Parts" },
      { label: "Automation", value: "Touchscreen PLC" },
      { label: "Accuracy", value: "±0.5% Combined Weigher" },
    ],
    primaryCtaText: "Get Factory Price Quote",
    primaryCtaMachine: "Automatic Pouch Packing Machine",
    secondaryCtaLink: "/automatic-pouch-packing-machine",
    secondaryCtaText: "Explore Pouch Packaging",
    trustPoints: [
      "Zero Product Breakage",
      "Nitrogen Gas Flushing Ready",
      "Pan-India Setup & Training"
    ]
  },
  {
    id: 2,
    badge: "High-Speed Flow Packaging • Precision Engineering",
    badgeColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    titleLight: "High-Efficiency Horizontal",
    titleHighlight: "Flow-Wrap Packaging Machines",
    description: "Horizontal flow-wrap packaging machine with extended feeding conveyor and film-wrapping mechanism. Continuous hermetic wrapping for bakery, biscuits, trays, and industrial items.",
    bannerImage: "/images/banner/hero-banner-2.png",
    machineName: "Horizontal Flow-Wrap Packaging Machine",
    specs: [
      { label: "Output Speed", value: "30 - 250 PPM" },
      { label: "Film Width", value: "Up to 350 mm" },
      { label: "Control", value: "Digital PID & PLC" },
      { label: "Sealing", value: "Pillow Pack Hermetic" },
    ],
    primaryCtaText: "Request Flow-Wrap Quote",
    primaryCtaMachine: "Horizontal Flow Wrap Machine",
    secondaryCtaLink: "/horizontal-flow-wrap-machine",
    secondaryCtaText: "View Flow-Wrap Systems",
    trustPoints: [
      "Consistent Film Tracking",
      "Quick Product Changeover",
      "Ready Stock Spare Parts"
    ]
  },
  {
    id: 3,
    badge: "Heavy-Duty Secondary Packaging • Warehouse Automation",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    titleLight: "High-Speed Automatic",
    titleHighlight: "Carton Strapping Systems",
    description: "Industrial carton strapping machine with yellow arch frame, integrated conveyor system, and heavy-duty black strapping reel. Engineered for high-throughput logistics and dispatch.",
    bannerImage: "/images/banner/hero-banner-3.png",
    machineName: "Automatic Arch Carton Strapping Machine",
    specs: [
      { label: "Cycle Speed", value: "1.5 - 2.0 Sec/Strap" },
      { label: "Arch Size", value: "Standard & Custom" },
      { label: "Tension Range", value: "10 - 70 kg Adjustable" },
      { label: "Reel", value: "PP Strap Compatible" },
    ],
    primaryCtaText: "Get Strapping Quote",
    primaryCtaMachine: "Box Strapping Machine",
    secondaryCtaLink: "/box-strapping-machine",
    secondaryCtaText: "View Strapping Systems",
    trustPoints: [
      "High Tension Reliability",
      "Integrated Roller Conveyor",
      "1-Year Comprehensive Warranty"
    ]
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { openModal } = useQuoteModal();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section 
      className="relative overflow-hidden bg-[#07111E] text-white h-[600px] sm:h-[550px] md:h-[520px] lg:h-[530px] border-b border-slate-800 flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Machinery Showcase Slider"
    >
      {/* 
        Hero Banner Images
      */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={idx !== currentSlide}
        >
          <Image
            src={s.bannerImage}
            alt={s.machineName}
            fill
            priority={idx === 0}
            sizes="100vw"
            quality={95}
            className="object-cover object-right md:object-center select-none"
          />
        </div>
      ))}

      {/* 
        20% Navy Blue Overlay:
        Color: #0B192C at 20% opacity (rgba(11, 25, 44, 0.2)).
        Positioned above banner images (z-0) and below all text, buttons, and slider controls (z-10).
      */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ backgroundColor: "rgba(11, 25, 44, 0.2)" }}
        aria-hidden="true"
      />

      {/* Foreground Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-8 md:pt-10 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Machine Information & CTAs (Localized subtle backdrop on mobile for readability, completely transparent on desktop) */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-3.5 sm:space-y-4 bg-[#07111E]/80 sm:bg-[#07111E]/60 lg:bg-transparent p-4 sm:p-5 lg:p-0 rounded-2xl lg:rounded-none backdrop-blur-xs lg:backdrop-blur-none">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md transition-all duration-300">
              <span className={`inline-block w-2 h-2 rounded-full ${currentSlide === 0 ? "bg-[#FF5E14]" : currentSlide === 1 ? "bg-sky-400" : "bg-amber-400"} animate-pulse`} />
              <span className="text-slate-100">{slide.badge}</span>
            </div>

            {/* Main Headline (Equalized height across all slides) */}
            <div className="space-y-0.5 min-h-[60px] sm:min-h-[68px] lg:min-h-[72px] flex flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[34px] font-extrabold tracking-tight leading-tight">
                <span className="text-white block drop-shadow-sm">{slide.titleLight}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E14] via-amber-400 to-[#FF7A00] block mt-0.5">
                  {slide.titleHighlight}
                </span>
              </h1>
            </div>

            {/* Description (Equalized height across all slides) */}
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-xl min-h-[36px] sm:min-h-[40px] drop-shadow-xs flex items-center">
              {slide.description}
            </p>

            {/* Technical Telemetry Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-0.5">
              {slide.specs.map((spec, idx) => (
                <div 
                  key={idx} 
                  className="p-2.5 rounded-xl bg-slate-900/85 border border-slate-700/70 shadow-sm backdrop-blur-sm"
                >
                  <span className="text-[10px] font-medium text-slate-400 block uppercase tracking-wider">{spec.label}</span>
                  <span className="text-xs font-bold text-white mt-0.5 block truncate">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Trust Highlights Checklist */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-200">
              {slide.trustPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Conversion CTA Group */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => openModal(slide.primaryCtaMachine)}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-[#FF5E14] to-[#E04D0B] text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{slide.primaryCtaText}</span>
              </button>

              <Link
                href={slide.secondaryCtaLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 transition-all duration-200 shadow-sm"
              >
                <span>{slide.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-[#FF5E14]" />
              </Link>

              <a
                href="/avmpackagingsystem.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-colors shadow-sm"
                title="Download Official Engineering Brochure"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Catalog PDF</span>
                <span className="sm:hidden">Catalog</span>
              </a>
            </div>

          </div>

          {/* Right Column: Left clear so the machinery in the banner is completely prominent & visible */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-end items-start pt-2 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/75 border border-slate-700/60 backdrop-blur-md text-xs text-slate-200 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold">{slide.machineName}</span>
              <span className="text-[#FF5E14] font-bold ml-1">Ready Stock</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Slider Navigation Controls & Indicators */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-4 sm:pb-6 pt-3">
        <div className="flex items-center justify-between border-t border-slate-800/60 pt-3">
          
          {/* Slide Dots / Progress Indicators */}
          <div className="flex items-center gap-2.5">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? "w-8 h-2.5 bg-[#FF5E14]"
                    : "w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
            <span className="text-xs text-slate-300 ml-2 font-mono">
              0{currentSlide + 1} / 0{slides.length}
            </span>
          </div>

          {/* Quick Slide Switcher Pills */}
          <div className="hidden md:flex items-center gap-3 text-xs text-slate-300">
            <span className="text-slate-400">Featured Machinery:</span>
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  idx === currentSlide 
                    ? "bg-slate-800/90 text-white border border-slate-700 shadow-xs" 
                    : "hover:text-white text-slate-400"
                }`}
              >
                {idx === 0 ? "VFFS Pouch Packaging" : idx === 1 ? "Horizontal Flow-Wrap" : "Carton Strapping"}
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
