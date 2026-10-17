import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Factory, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Packaging Machines Manufacturer in Mumbai - AVM Packaging System",
  description: "AVM Packaging System is a premier manufacturer, supplier, and exporter of high-speed automatic packaging machines based in Goregaon East, Mumbai, India.",
  keywords: "Packaging Machines Manufacturer Mumbai, Automatic Packaging Machine, Packaging Machinery India, AVM Packaging System",
  alternates: {
    canonical: "https://avmpackagingsystem.com/aboutus.php",
  },
  openGraph: {
    title: "Packaging Machines Manufacturer in Mumbai - AVM Packaging System",
    description: "AVM Packaging System is a premier manufacturer, supplier, and exporter of high-speed automatic packaging machines based in Goregaon East, Mumbai, India.",
    url: "https://avmpackagingsystem.com/aboutus.php",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Header Banner */}
      <section className="py-16 bg-[#0B192C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="badge-orange mb-3">Company Profile & Engineering Heritage</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About AVM Packaging System
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Delivering precision, industrial-grade packaging automation and sealing equipment to food, pharmaceutical, and chemical manufacturers across India and overseas.
          </p>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E14]">
                15+ Years of Engineering Reliability
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Pioneering Automatic Packaging Solutions from Mumbai, India
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Founded with a commitment to robust industrial engineering, <strong>AVM Packaging System</strong> has grown into one of Mumbai’s most trusted packaging machinery manufacturers, traders, and exporters.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating out of our fully equipped plant at C Wing, Gala No 13, Sanjay Nagar, Near Cama Estate in Goregaon East, Mumbai, we engineer custom Form-Fill-Seal (FFS) machines, heavy-duty band sealers, vacuum packaging units, auger powder fillers, liquid fillers, and end-of-line carton taping systems.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-extrabold text-[#FF5E14] block">1,500+</span>
                  <span className="text-xs font-semibold text-slate-700">Installations Across India & 18+ Countries</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-extrabold text-[#FF5E14] block">25+</span>
                  <span className="text-xs font-semibold text-slate-700">Years Engineering Heritage</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-900">
                <Image
                  src="/images/about/pic5.jpg"
                  alt="AVM Packaging System Engineering & Manufacturing Facility"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Floating Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E14] block">Manufacturing Facility</span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Precision Engineering & Rigorous Quality Assurance</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Goregaon East, Mumbai • Certified Packaging Solutions</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200 shrink-0">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>ISO Standard</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quality Commitment Grid */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-orange mb-2">Our Operating Standards</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Manufacturers Partner with AVM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <Factory className="w-8 h-8 text-[#FF5E14] mb-4" />
              <h3 className="text-base font-bold text-slate-900">Precision In-House Fabrication</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                All framing, sealing jaws, and hoppers are machined with tight tolerances to prevent mechanical vibration and film slippage.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-base font-bold text-slate-900">Food & Pharma Grade Materials</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                We strictly utilize SS 304 and SS 316 stainless steel for product contact parts, ensuring zero contamination and easy washdown.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <Users className="w-8 h-8 text-sky-600 mb-4" />
              <h3 className="text-base font-bold text-slate-900">Dedicated Field Service Engineers</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Prompt dispatch of replacement parts and on-site technicians ensure your production lines maintain optimal output without long interruptions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
