import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Send, 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  Zap, 
  CheckCircle2, 
  Download, 
  Factory,
  Layers,
  PhoneCall,
  Activity,
  Sliders,
  Settings
} from "lucide-react";
import { categories } from "@/data/categories";
import { products, getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FaqAccordion from "@/components/FaqAccordion";
import HeroSlider from "@/components/HeroSlider";

const homeFaqs = [
  {
    question: "What types of packaging machines does AVM Packaging System manufacture?",
    answer: "AVM Packaging System manufactures and supplies a comprehensive range of automatic and semi-automatic machines including Pouch Packing Machines (FFS, collar type), Continuous Band Sealers, Vacuum Sealing Machines, Auger Powder Fillers, Liquid & Paste Fillers, Pad Printing & Batch Coding Machines, Box Strapping Machines, Carton Taping Machines, and Shrink Tunnels."
  },
  {
    question: "Where is AVM Packaging System located in Mumbai?",
    answer: "Our manufacturing and demonstration facility is located at C Wing, Gala No 13, Sanjay Nagar, Near Cama Estate, Opp. Kusum Masala, Goregaon East, Mumbai - 400063, Maharashtra, India. We deliver, install, and service machines across all Indian states and export globally."
  },
  {
    question: "Do you provide customized packaging machinery for specific pouch sizes or products?",
    answer: "Yes, we specialize in custom-tailored packaging machinery engineered to your specific product requirements, pouch dimensions, sealing style (center seal, 3-side seal, 4-side seal), and desired speed outputs ranging from 15 to 120 pouches per minute."
  },
  {
    question: "What kind of warranty and after-sales service is provided?",
    answer: "All AVM packaging machinery comes with comprehensive warranty coverage, on-site commissioning, operator training, readily available genuine spare parts, and dedicated phone/video technical support."
  },
  {
    question: "Can your machines handle nitrogen flushing for snacks and potato chips?",
    answer: "Yes, our potato chips packing machines and nitrogen-flushing pouch packaging lines are engineered specifically with gas flushing attachments to extend the shelf life and protect crispness in snack foods."
  },
  {
    question: "What is the typical dispatch timeframe for machinery orders?",
    answer: "Standard models (band sealers, pedal sealers, tabletop vacuum machines) are available for immediate dispatch or within 3 to 7 days. Customized automatic pouch packing lines are fabricated and tested within 2 to 4 weeks."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://avmpackagingsystem.com/#organization",
      "name": "AVM Packaging System",
      "url": "https://avmpackagingsystem.com/",
      "logo": "https://avmpackagingsystem.com/images/avmlogo.png",
      "description": "AVM Packaging System is a recognized manufacturer, trader, supplier, and exporter of automatic packaging machines, sealing machines, filling machines, and coding equipment across Mumbai and India.",
      "telephone": "+91-8928852195",
      "email": "info@avmpackagingsystem.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C Wing, Gala No 13, Sanjay Nagar, Near Cama Estate, Opp. Kusum Masala, Goregaon East",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400063",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-8928852195",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-9029174133",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://avmpackagingsystem.com/#localbusiness",
      "name": "AVM Packaging System Mumbai",
      "image": "https://avmpackagingsystem.com/images/avmlogo.png",
      "url": "https://avmpackagingsystem.com/",
      "telephone": "+91-8928852195",
      "priceRange": "₹₹ - ₹₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C Wing, Gala No 13, Sanjay Nagar, Near Cama Estate, Opp. Kusum Masala, Goregaon East",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400063",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.1663",
        "longitude": "72.8526"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://avmpackagingsystem.com/#website",
      "url": "https://avmpackagingsystem.com/",
      "name": "AVM Packaging System",
      "publisher": { "@id": "https://avmpackagingsystem.com/#organization" }
    }
  ]
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Professional Multi-Slide Hero Banner */}
      <HeroSlider />

      {/* Machinery Categories Showcase with Authentic Client Images */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-orange mb-2">Automated Production Lines</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Machinery Categories
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Browse our complete range of packaging machinery, continuous band sealers, powder fillers, date coders, and end-of-line carton taping systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                {/* Category Authentic Image Container */}
                <div className="relative w-full h-52 bg-slate-100/70 overflow-hidden border-b border-slate-100 flex items-center justify-center">
                  <Image
                    src={cat.image}
                    alt={`${cat.name} manufactured by AVM Packaging System`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge-orange text-[10px]">
                      {cat.products.length} Models Available
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF5E14] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Quick Model Pills */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {cat.products.slice(0, 3).map((prod) => (
                        <span
                          key={prod.slug}
                          className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-medium truncate max-w-[170px]"
                        >
                          {prod.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/${cat.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5E14] hover:text-[#E04800]"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] text-slate-400 font-semibold">
                      Goregaon Plant
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Machinery Grid with Authentic Client Photos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="badge-orange mb-2">High Demand Production Machinery</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Featured Packaging Systems
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Reliable, field-tested models installed across food, pharma, and chemical processing facilities.
              </p>
            </div>
            <Link
              href="/pouch-packaging-machine"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF5E14] hover:underline"
            >
              <span>View All {products.length} Machinery Models</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Matrix */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-navy text-xs text-[#FF5E14]">Industries Served</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              Packaging Automation for Every Sector
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Customized tooling, sealing jaws, and feeding mechanisms tailored to specific product physical properties.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Snacks & Chips", desc: "Nitrogen flushed, fragile product handling" },
              { title: "Powders & Spices", desc: "Zero dust, high precision auger dosing" },
              { title: "Grains & Pulses", desc: "Volumetric cup & multi-head weighing" },
              { title: "Liquids & Pastes", desc: "Pneumatic piston, drip-free nozzles" },
              { title: "Pharmaceuticals", desc: "GMP compliant, batch date code verification" },
              { title: "Cartons & Boxes", desc: "High-speed auto-taping and strapping" },
            ].map((ind, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center flex flex-col justify-between hover:border-[#FF5E14]/50 transition-colors"
              >
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-[#FF5E14]/10 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-[#FF5E14]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{ind.title}</h4>
                  <p className="mt-1 text-[11px] text-slate-400 leading-snug">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Advantage & Client Showcase */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-orange">Why Industry Leaders Choose AVM</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Engineering Integrity Built into Every Single Component
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating out of Goregaon East, Mumbai, AVM Packaging System combines 15+ years of mechanical precision with modern PLC and servo electronics. We eliminate the frustration of frequent machine jams, inaccurate filling, and costly downtime.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Food-Grade Stainless Steel (SS 304/316)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">All contact parts comply with food safety and pharmaceutical GMP hygiene requirements.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Standardized Off-The-Shelf Electronics</h4>
                    <p className="text-xs text-slate-600 mt-0.5">We utilize globally recognized PLC, temperature controllers, and motors with readily available replacements.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Operator Training & Guaranteed Spares</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Our technicians train your in-house floor operators during installation, backed by 24/7 video and phone support.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/contactus" className="btn-primary">
                  <span>Visit Our Mumbai Demonstration Plant</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Clients Grid */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-8">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Trusted By Fast Growing Brands</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Our Packaging Machinery Clients</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center justify-center aspect-video hover:border-[#FF5E14]/40 transition-colors"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={`/images/clients/clogo${idx}.jpg`}
                        alt={`AVM Packaging System Machinery Client ${idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-[11px] text-slate-500 mt-4">
                Installed in over 500+ manufacturing plants across Maharashtra, Gujarat, Delhi NCR, and nationwide.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqAccordion
        faqs={homeFaqs}
        title="Packaging Machinery Questions & Answers"
        subtitle="Frequently asked questions about machine capacity, installation, warranty, and dispatch timeframes."
      />

      {/* Global Quick Quote Callout Banner */}
      <section className="bg-gradient-to-r from-[#0B192C] to-[#1E293B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-[#FF5E14] uppercase tracking-wider">Fast Response Within 15 Minutes</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Need a Customized Machine Quotation?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Speak directly with an AVM Packaging technical specialist or request a factory visit in Goregaon East, Mumbai.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contactus"
              className="btn-primary text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Contact Engineering Team</span>
            </Link>
            <a
              href="tel:+918928852195"
              className="btn-outline-white text-sm"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call +91-8928852195</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
