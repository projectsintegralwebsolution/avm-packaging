import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://avmpackagingsystem.com/",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href
          ? `https://avmpackagingsystem.com${item.href.startsWith("/") ? item.href : `/${item.href}`}`
          : undefined,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-50 border-b border-slate-200 text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap text-slate-600">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#FF5E14] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#FF5E14] transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-slate-900 truncate max-w-[280px] sm:max-w-none">
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
}
