"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, ArrowRight, Video, X, PhoneCall, ShieldCheck, CheckCircle2, Layers, Filter } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: "Pouch Packaging" | "Sealing & Vacuum" | "Filling & Dosing" | "Coding & Marking" | "End-of-Line";
  description: string;
  machineSlug: string;
  machineName: string;
}

const avmVideos: VideoItem[] = [
  {
    id: "v1",
    youtubeId: "-zdCLEWP9nM",
    title: "Automatic Potato Chips & Namkeen Packaging Machine",
    category: "Pouch Packaging",
    description: "Multi-head combination weigher packing potato chips and namkeen with continuous nitrogen gas flushing and zero breakage.",
    machineSlug: "potato-chips-packing-machine",
    machineName: "Potato Chips Packing Machine"
  },
  {
    id: "v2",
    youtubeId: "ot-oFhH1iek",
    title: "4-Head Collar Type Potato Chips Packaging Machine",
    category: "Pouch Packaging",
    description: "High-speed 4-head electronic combination weigher collar-type form-fill-seal system for snacks and fryums.",
    machineSlug: "collar-type-packaging-machine",
    machineName: "Collar Type Packaging Machine"
  },
  {
    id: "v3",
    youtubeId: "KFfOA72LQtI",
    title: "2-Head Combination Weigher Chips Packaging System",
    category: "Pouch Packaging",
    description: "Compact dual-head weigher packaging machine for medium-capacity snack food processing units.",
    machineSlug: "multihead-weigh-filler-machine",
    machineName: "Multihead Weigh Filler Machine"
  },
  {
    id: "v4",
    youtubeId: "0kT4cxRYkrg",
    title: "Automatic Spices & Powder Pouch Packaging Machine",
    category: "Pouch Packaging",
    description: "Precision auger dosing packaging system sealing turmeric, chili powder, and blended spice pouches.",
    machineSlug: "spice-packaging-machine",
    machineName: "Spice Packaging Machine"
  },
  {
    id: "v5",
    youtubeId: "xXr9uDN2BX8",
    title: "Namkeen Packaging Machine Operation",
    category: "Pouch Packaging",
    description: "Automatic pouch packaging machine packing savory mixtures, sev, and roasted nuts in center-sealed pouches.",
    machineSlug: "packaging-machine",
    machineName: "Packaging Machine"
  },
  {
    id: "v6",
    youtubeId: "PxFuXRuXsno",
    title: "Continuous Form Fill Seal (FFS) Pouch Packing System",
    category: "Pouch Packaging",
    description: "Fully automated FFS machinery creating airtight 3-side and center-seal pouches at 40-70 PPM.",
    machineSlug: "automatic-pouch-packing-machine",
    machineName: "Automatic Pouch Packing Machine"
  },
  {
    id: "v7",
    youtubeId: "3XBTtFENMb8",
    title: "Heavy Duty Continuous Band Sealing Machine",
    category: "Sealing & Vacuum",
    description: "Industrial motorized conveyor band sealer sealing laminated pouches with integrated solid-ink batch coding.",
    machineSlug: "continuous-sealing-machine",
    machineName: "Continuous Sealing Machine"
  },
  {
    id: "v8",
    youtubeId: "B13sdcqY3BY",
    title: "Vertical Continuous Band Sealer For Liquid & Granules",
    category: "Sealing & Vacuum",
    description: "Vertical orientation band sealer designed for standing pouches containing liquids, powders, and heavy grains.",
    machineSlug: "band-sealing-machine",
    machineName: "Band Sealing Machine"
  },
  {
    id: "v9",
    youtubeId: "KcEFCkPE1H0",
    title: "Nitrogen Flushing Continuous Sealing Machine",
    category: "Sealing & Vacuum",
    description: "Gas flushing attachment on continuous band sealer to replace oxygen with nitrogen for extended food freshness.",
    machineSlug: "nitrogen-flushing-machine",
    machineName: "Nitrogen Flushing Machine"
  },
  {
    id: "v10",
    youtubeId: "meEPEJ4y96Q",
    title: "Industrial Single/Double Chamber Vacuum Sealing Machine",
    category: "Sealing & Vacuum",
    description: "Heavy-duty vacuum packaging machine removing air and sealing bags for meat, cheese, nuts, and electronics.",
    machineSlug: "vacuum-sealing-machine",
    machineName: "Vacuum Sealing Machine"
  },
  {
    id: "v11",
    youtubeId: "vWU5NSJsqFg",
    title: "Tabletop Mini Vacuum Sealing Machine",
    category: "Sealing & Vacuum",
    description: "Compact benchtop vacuum sealer for retail shops, restaurants, research labs, and commercial kitchens.",
    machineSlug: "mini-vacuum-sealing-machine",
    machineName: "Mini Vacuum Sealing Machine"
  },
  {
    id: "v12",
    youtubeId: "PQVCS3P8Hho",
    title: "Agarbatti & Long Pouch Sealing Machine",
    category: "Sealing & Vacuum",
    description: "Specialized sealing unit configured for incense stick (agarbatti) packaging and long poly bags.",
    machineSlug: "pedal-sealing-machine",
    machineName: "Pedal Sealing Machine"
  },
  {
    id: "v13",
    youtubeId: "kARHsH2Wglc",
    title: "Semi-Automatic Plastic & Lami Tube Sealing Machine",
    category: "Sealing & Vacuum",
    description: "Ultrasonic / thermal tube sealing with automatic trimming and batch coding for cosmetics, pastes, and ointments.",
    machineSlug: "plastic-tube-sealing-machine",
    machineName: "Plastic Tube Sealing Machine"
  },
  {
    id: "v14",
    youtubeId: "7rSuErlnJu4",
    title: "Continuous Induction Cap Sealing Machine",
    category: "Sealing & Vacuum",
    description: "Non-contact electromagnetic induction foil sealing machine for tamper-evident sealing of bottles and jars.",
    machineSlug: "induction-sealing-machine",
    machineName: "Induction Sealing Machine"
  },
  {
    id: "v15",
    youtubeId: "XTgEI5Urycc",
    title: "Semi-Automatic Volumetric Liquid Filling Machine",
    category: "Filling & Dosing",
    description: "Piston liquid filling machine for edible oil, syrups, juices, chemical detergents, and cosmetic lotions.",
    machineSlug: "liquid-filling-machine",
    machineName: "Liquid Filling Machine"
  },
  {
    id: "v16",
    youtubeId: "wP3vTAsAtrI",
    title: "Semi-Automatic Namkeen & Granule Filling Machine",
    category: "Filling & Dosing",
    description: "Weigh-based dosing filler with foot pedal trigger for manual pouch presentation and automatic weighing.",
    machineSlug: "paste-filling-machine",
    machineName: "Paste Filling Machine"
  },
  {
    id: "v17",
    youtubeId: "q7LUjEyxKqs",
    title: "Electric Pad Printing Machine (Single Color)",
    category: "Coding & Marking",
    description: "Precision ink pad printing machine for batch coding, brand logos, and expiry date marking on curved bottle surfaces.",
    machineSlug: "pad-printing-machine",
    machineName: "Pad Printing Machine"
  },
  {
    id: "v18",
    youtubeId: "rLHYKbowRx0",
    title: "High-Speed Pouch & Carton Batch Coding Machine",
    category: "Coding & Marking",
    description: "Automatic friction feeder batch coder printing MRP, expiry dates, and lot numbers on flat cartons and pouches.",
    machineSlug: "coding-machine",
    machineName: "Coding Machine"
  },
  {
    id: "v19",
    youtubeId: "3eYWc_2QdqE",
    title: "Automatic Round Bottle Sticker Labeling Machine",
    category: "Coding & Marking",
    description: "Self-adhesive wrap-around sticker labeler for cylindrical glass, pet, and hdpe pharmaceutical bottles.",
    machineSlug: "bottle-sticker-labeling-machine",
    machineName: "Bottle Sticker Labeling Machine"
  },
  {
    id: "v20",
    youtubeId: "h-eyahoh6o0",
    title: "Automatic Carton Box Flap Taping Machine",
    category: "End-of-Line",
    description: "Top and bottom simultaneous carton taping conveyor sealing corrugated shipping boxes on production lines.",
    machineSlug: "carton-taping-machine",
    machineName: "Carton Taping Machine"
  },
  {
    id: "v21",
    youtubeId: "nTugSL6G5V0",
    title: "Industrial Flat Belt Conveyor System",
    category: "End-of-Line",
    description: "Heavy duty motorized belt conveyor connecting packaging machines to inspection and packing stations.",
    machineSlug: "conveyor-systems",
    machineName: "Conveyor Systems"
  },
  {
    id: "v22",
    youtubeId: "p9HLaAxQJAk",
    title: "Manual & Pneumatic Crown Capping Machine",
    category: "Sealing & Vacuum",
    description: "Crown cork sealing machine for glass beverage bottles, soda bottles, and pharmaceutical liquid containers.",
    machineSlug: "manual-crown-capping-machine",
    machineName: "Manual Crown Capping Machine"
  },
  {
    id: "v23",
    youtubeId: "yrz36WZkm3A",
    title: "Camphor Tablet Automatic Packaging Machine",
    category: "Pouch Packaging",
    description: "Specialized compact packaging system engineered for camphor tablets, pharmaceutical pills, and chemical cakes.",
    machineSlug: "automatic-Camphor-packaging-machine",
    machineName: "Camphor Packaging Machine"
  }
];

const categories = [
  "All Machines",
  "Pouch Packaging",
  "Sealing & Vacuum",
  "Filling & Dosing",
  "Coding & Marking",
  "End-of-Line"
] as const;

export default function VideoGalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Machines");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const { openModal } = useQuoteModal();

  const filteredVideos = selectedCategory === "All Machines"
    ? avmVideos
    : avmVideos.filter((v) => v.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-[#FF5E14] text-white shadow-md shadow-orange-500/20"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {cat} {cat === "All Machines" ? `(${avmVideos.length})` : `(${avmVideos.filter(v => v.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            {/* YouTube Embed Container */}
            <div className="relative aspect-video bg-slate-950 overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                title={`${video.title} - AVM Packaging System`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>

            {/* Video Info Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-[#FF5E14] border border-orange-200">
                    {video.category}
                  </span>
                  <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>AVM Workshop Video</span>
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#FF5E14] transition-colors">
                  {video.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {video.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  href={`/${video.machineSlug}`}
                  className="text-xs font-bold text-slate-800 hover:text-[#FF5E14] flex items-center gap-1 transition-colors"
                >
                  <Layers className="w-3.5 h-3.5 text-[#FF5E14]" />
                  <span>View Specifications</span>
                </Link>

                <button
                  onClick={() => openModal(video.machineName)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#FF5E14] text-white transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Workshop Visit Banner */}
      <div className="mt-16 p-8 sm:p-10 bg-gradient-to-r from-[#0B192C] to-[#132845] text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider">
            <span>Live Demonstration & Trial Runs</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Want to see these machines run with your own products?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Visit our factory at Goregaon East, Mumbai. Bring your packaging films, pouches, and product samples for live on-the-spot trial runs and sealing tests.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => openModal("Workshop Trial Run")}
            className="btn-primary text-sm px-6 py-3.5 shadow-lg shadow-orange-500/30"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book Live Demonstration</span>
          </button>
          <a
            href="tel:+918928852195"
            className="px-5 py-3.5 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
          >
            Call: +91-8928852195
          </a>
        </div>
      </div>
    </div>
  );
}
