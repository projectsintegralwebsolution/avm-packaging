import React from "react";
import { 
  Zap, 
  Gauge, 
  Box, 
  Scale, 
  Sliders, 
  ShieldCheck, 
  Layers, 
  Wind, 
  CheckCircle2, 
  Cpu, 
  FileText 
} from "lucide-react";

interface ProductSpecsTableProps {
  specifications: Record<string, string>;
  productName: string;
}

function getSpecIcon(key: string) {
  const lower = key.toLowerCase();
  if (lower.includes("speed") || lower.includes("capacity") || lower.includes("output") || lower.includes("rate") || lower.includes("ppm")) {
    return <Gauge className="w-4 h-4 text-[#FF5E14]" />;
  }
  if (lower.includes("power") || lower.includes("voltage") || lower.includes("motor") || lower.includes("electric") || lower.includes("watt") || lower.includes("kw")) {
    return <Zap className="w-4 h-4 text-amber-500" />;
  }
  if (lower.includes("dimension") || lower.includes("size") || lower.includes("width") || lower.includes("height") || lower.includes("length")) {
    return <Sliders className="w-4 h-4 text-sky-500" />;
  }
  if (lower.includes("weight") || lower.includes("load") || lower.includes("accuracy") || lower.includes("range")) {
    return <Scale className="w-4 h-4 text-emerald-500" />;
  }
  if (lower.includes("material") || lower.includes("steel") || lower.includes("contact") || lower.includes("grade") || lower.includes("body")) {
    return <ShieldCheck className="w-4 h-4 text-indigo-500" />;
  }
  if (lower.includes("seal") || lower.includes("pouch") || lower.includes("film") || lower.includes("bag") || lower.includes("type")) {
    return <Layers className="w-4 h-4 text-rose-500" />;
  }
  if (lower.includes("air") || lower.includes("pressure") || lower.includes("pneumatic") || lower.includes("gas") || lower.includes("nitrogen")) {
    return <Wind className="w-4 h-4 text-teal-500" />;
  }
  if (lower.includes("plc") || lower.includes("control") || lower.includes("panel") || lower.includes("display") || lower.includes("automation")) {
    return <Cpu className="w-4 h-4 text-purple-500" />;
  }
  return <CheckCircle2 className="w-4 h-4 text-slate-400" />;
}

export default function ProductSpecsTable({ specifications, productName }: ProductSpecsTableProps) {
  const entries = Object.entries(specifications || {});

  if (entries.length === 0) {
    return (
      <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs text-slate-500 flex items-center justify-center gap-2">
        <FileText className="w-4 h-4 text-slate-400" />
        <span>Custom engineering specifications are configured per client requirement for {productName}.</span>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-sm bg-white">
      <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
            <Sliders className="w-4 h-4 text-[#FF5E14]" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5E14] block">Technical Data Sheet</span>
            <h3 className="text-sm sm:text-base font-bold">Engineering Specifications</h3>
          </div>
        </div>
        <span className="text-xs text-slate-400 hidden sm:inline font-mono">AVM Standard Quality</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <th className="py-3 px-6 w-2/5">Technical Parameter</th>
              <th className="py-3 px-6 w-3/5">AVM Engineering Specification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {entries.map(([key, value], idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white hover:bg-slate-50/80" : "bg-slate-50/50 hover:bg-slate-50"}
              >
                <td className="py-3.5 px-6 font-semibold text-slate-800 border-r border-slate-100 flex items-center gap-2.5">
                  {getSpecIcon(key)}
                  <span>{key}</span>
                </td>
                <td className="py-3.5 px-6 text-slate-700 font-medium">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
        <span>Specifications may vary based on pouch dimension, packaging material, and product density.</span>
        <span className="font-semibold text-slate-700">Custom configurations available on request</span>
      </div>
    </div>
  );
}
