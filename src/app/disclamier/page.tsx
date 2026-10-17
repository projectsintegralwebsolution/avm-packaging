import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disclaimer - AVM Packaging System Mumbai India",
  description: "Product performance and specification disclaimer for packaging machinery manufactured by AVM Packaging System Mumbai.",
  alternates: {
    canonical: "https://avmpackagingsystem.com/disclamier.php",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />
      <div className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <span className="badge-orange text-xs">Legal Notice</span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Product & Engineering Disclaimer
          </h1>
          <div className="prose prose-slate text-sm text-slate-600 leading-relaxed space-y-4">
            <p>
              The information, technical specifications, and imagery contained on this website (https://avmpackagingsystem.com) are provided for general guidance and machine selection purposes.
            </p>
            <h3 className="text-lg font-bold text-slate-900">1. Production Output & Speed Ratings</h3>
            <p>
              Machine speeds (pouches per minute, meters per minute) and filling accuracy indicated in product datasheets depend upon product characteristics (granule size, moisture content, powder bulk density, viscosity), pouch dimensions, packaging film thickness, and operator proficiency. Actual operating parameters are finalized upon testing sample client materials at our Mumbai plant.
            </p>
            <h3 className="text-lg font-bold text-slate-900">2. Technical Improvements</h3>
            <p>
              Due to continuous research and development in industrial automation, AVM Packaging System reserves the right to modify mechanical specifications, electrical components, dimensions, and aesthetics without prior notice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
