import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import VideoGalleryClient from "@/components/VideoGalleryClient";

export const metadata: Metadata = {
  title: "Packaging Machine Videos - AVM Packaging System Mumbai",
  description: "Watch 23+ operational video demonstrations of authentic AVM Packaging System machinery including pouch packing machines, continuous band sealers, auger fillers, and vacuum sealers.",
  keywords: "Packaging Machine Videos, Pouch Packing Machine Video, Band Sealer Video, Chips Packaging Machine Video, AVM Packaging Video Gallery",
  alternates: {
    canonical: "https://avmpackagingsystem.com/videogallery.php",
  },
  openGraph: {
    title: "Packaging Machine Videos - AVM Packaging System Mumbai",
    description: "Watch 23+ operational video demonstrations of authentic AVM Packaging System machinery.",
    url: "https://avmpackagingsystem.com/videogallery.php",
    type: "website",
  },
};

export default function VideoGalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Video Demonstrations" }]} />

      {/* Header Banner */}
      <section className="py-14 bg-[#0B192C] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="badge-orange mb-3 inline-block">23+ Live Factory Demonstrations</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Packaging Machinery Operational Videos
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Watch real operational footage of AVM Packaging System machines running in actual food, chemical, and pharmaceutical packaging plants across India.
          </p>
        </div>
      </section>

      {/* Interactive Video Gallery */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoGalleryClient />
        </div>
      </section>
    </>
  );
}
