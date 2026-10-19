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
  Zap, 
  Settings, 
  Clock, 
  Gauge, 
  Award,
  Layers
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface SlideData {
  id: number;
  badge: string;
  badgeColor: string;
  titleLight: string;
  titleHighlight: string;
  description: string;
  image: string;
  machineName: string;
  specs: { label: string; value: string; icon: string }[];
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
    badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    titleLight: "High-Speed Automated",
    titleHighlight: "Pouch Packaging Systems",
    description: "Engineered for potato chips, namkeen, fryums, snacks, and spices. Heavy-duty SS 304 food-grade contact parts, multi-head combination weighers, and continuous nitrogen gas flushing.",
    image: "/images/avm/clean/all/potato-chips-packaging-machine.jpg",
    machineName: "Flagship Multihead Pouch Packaging System",
    specs: [
      { label: "Output Speed", value: "15 - 120 PPM", icon: "speed" },
      { label: "Construction", value: "SS 304 Contact Parts", icon: "metal" },
      { label: "Automation", value: "Touchscreen PLC", icon: "plc" },
      { label: "Accuracy", value: "±0.5% Combined Weigher", icon: "accuracy" },
    ],
    primaryCtaText: "Get Factory Price Quote",
    primaryCtaMachine: "Potato Chips Packing Machine",
    secondaryCtaLink: "/pouch-packaging-machine.php",
    secondaryCtaText: "Explore Pouch Packaging",
    trustPoints: [
      "Zero Product Breakage",
      "Nitrogen Gas Flushing Ready",
      "Pan-India Setup & Training"
    ]
  },
  {
    id: 2,
    badge: "Heavy-Duty Industrial Sealing • ISO 9001 Standard",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    titleLight: "Continuous Band & Industrial",
    titleHighlight: "Vacuum Sealing Machinery",
    description: "Air-tight hermetic seals for food, pharma, and chemical pouches. Featuring synchronized motorized conveyors, solid-ink date coding wheels, and single/double chamber vacuum systems.",
    image: "/images/avm/clean/printing/horizontal-continuous-sealing-machine.jpg",
    machineName: "Continuous Band Sealer with Conveyor",
    specs: [
      { label: "Sealing Speed", value: "0 - 12 Meters/Min", icon: "speed" },
      { label: "Sealing Width", value: "8 - 12 mm Embossed", icon: "metal" },
      { label: "Temp Control", value: "0 - 300°C Digital PID", icon: "plc" },
      { label: "Max Conveyor Load", value: "5 - 15 kg Heavy-Duty", icon: "accuracy" },
    ],
    primaryCtaText: "Request Band Sealer Pricing",
    primaryCtaMachine: "Continuous Sealing Machine",
    secondaryCtaLink: "/continuous-sealing-machine.php",
    secondaryCtaText: "View Sealing Machines",
    trustPoints: [
      "Consistent Leak-Proof Sealing",
      "Hot Ink Roller Coding Included",
      "Ready Stock Spare Parts"
    ]
  },
  {
    id: 3,
    badge: "Precision Dosing & Marking • Custom Tooling",
    badgeColor: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    titleLight: "Servo-Driven Auger Fillers &",
    titleHighlight: "Industrial Coding Systems",
    description: "Micro-dosing filling accuracy for pharmaceutical powders, spices, protein supplements, liquids, and pastes. Combined with high-speed carton batch coders and bottle sticker labelers.",
    image: "/images/avm/clean/all/powder-filling-machine.jpg",
    machineName: "Servo Auger Powder Filling Machine",
    specs: [
      { label: "Dosing Range", value: "5g to 5000g Jars/Pouches", icon: "speed" },
      { label: "Filling Precision", value: "≤ ±1% High Accuracy", icon: "metal" },
      { label: "Drive System", value: "High-Torque Servo Motor", icon: "plc" },
      { label: "Hopper Capacity", value: "35L - 50L SS 316 Option", icon: "accuracy" },
    ],
    primaryCtaText: "Get Auger Filler Quote",
    primaryCtaMachine: "Auger Filling Machine",
    secondaryCtaLink: "/auger-filling-machine.php",
    secondaryCtaText: "Explore Dosing Systems",
    trustPoints: [
      "Quick-Release Cleaning Hopper",
      "No-Spill Anti-Drip Nozzles",
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
      className="relative overflow-hidden bg-gradient-to-b from-[#07111E] via-[#0B192C] to-[#0A1628] text-white py-8 md:py-[45px] border-b border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Machinery Showcase Slider"
    >
      {/* Background Ambience & Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Machine Information & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md transition-all duration-300">
              <span className={`inline-block w-2 h-2 rounded-full ${currentSlide === 0 ? "bg-[#FF5E14]" : currentSlide === 1 ? "bg-emerald-400" : "bg-sky-400"} animate-pulse`} />
              <span className="text-slate-200">{slide.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                <span className="text-white block">{slide.titleLight}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E14] via-amber-400 to-[#FF7A00] block mt-0.5">
                  {slide.titleHighlight}
                </span>
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl pt-1">
                {slide.description}
              </p>
            </div>

            {/* Technical Telemetry Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-0.5">
              {slide.specs.map((spec, idx) => (
                <div 
                  key={idx} 
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/60 shadow-inner backdrop-blur-sm"
                >
                  <span className="text-[10px] font-medium text-slate-400 block uppercase tracking-wider">{spec.label}</span>
                  <span className="text-xs font-bold text-white mt-0.5 block truncate">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Trust Highlights Checklist */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-300">
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
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 transition-all duration-200"
              >
                <span>{slide.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-[#FF5E14]" />
              </Link>

              <a
                href="/avmpackagingsystem.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 transition-colors"
                title="Download Official Engineering Brochure"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Catalog PDF (3.2MB)</span>
                <span className="sm:hidden">Catalog</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Machinery Showcase Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Machinery Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5E14]/15 via-sky-500/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            {/* Showcase Stage Frame */}
            <div className="relative w-full max-w-[390px] aspect-square bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-4 sm:p-5 rounded-3xl border border-slate-700/80 shadow-2xl flex flex-col items-center justify-between">
              
              {/* Stage Header Info */}
              <div className="w-full flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    AVM Model #{slide.id}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 truncate max-w-[180px]">
                    {slide.machineName}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Ready Stock</span>
                </div>
              </div>

              {/* Machinery Studio Image: Clean, Sharp, No Ghosting */}
              <div className="relative w-full h-52 sm:h-60 my-auto flex items-center justify-center">
                <Image
                  key={slide.image}
                  src={slide.image}
                  alt={slide.machineName}
                  fill
                  priority
                  className="object-contain p-2 drop-shadow-2xl transition-all duration-500"
                />
              </div>

              {/* Stage Footer Bar */}
              <div className="w-full pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#FF5E14]" />
                  <span>Factory Tested</span>
                </span>
                <span className="text-slate-300 font-semibold">Goregaon East, Mumbai</span>
                <span className="text-[#FF5E14] font-bold">100% Genuine Parts</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Slider Navigation Controls & Indicators */}
        <div className="flex items-center justify-between pt-5 sm:pt-6 border-t border-slate-800/80 mt-6 sm:mt-7">
          
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
            <span className="text-xs text-slate-400 ml-2 font-mono">
              0{currentSlide + 1} / 0{slides.length}
            </span>
          </div>

          {/* Quick Slide Switcher Pill */}
          <div className="hidden md:flex items-center gap-3 text-xs text-slate-400">
            <span className="text-slate-500">Machinery Categories:</span>
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  idx === currentSlide 
                    ? "bg-slate-800 text-white border border-slate-700" 
                    : "hover:text-slate-200"
                }`}
              >
                {idx === 0 ? "Pouch Packaging" : idx === 1 ? "Band & Vacuum Sealing" : "Auger & Coding"}
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
