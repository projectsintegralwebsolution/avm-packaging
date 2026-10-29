import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  ShieldCheck, 
  Send, 
  Download, 
  PhoneCall, 
  Check, 
  Layers, 
  Zap, 
  Clock, 
  Wrench,
  ArrowRight
} from "lucide-react";
import { products, getProductBySlug, getProductsByCategory } from "@/data/products";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductSpecsTable from "@/components/ProductSpecsTable";
import FaqAccordion from "@/components/FaqAccordion";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all products at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate exact preserved SEO Metadata
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Packaging Machinery | AVM Packaging System",
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.metaKeywords,
    alternates: {
      canonical: product.canonicalUrl,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: product.canonicalUrl,
      type: "website",
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.categoryId)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  // Schema.org Product Structured Data
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: `https://avmpackagingsystem.com${product.image}`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "AVM Packaging System",
    },
    manufacturer: {
      "@type": "Organization",
      name: "AVM Packaging System",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "25000",
      highPrice: "950000",
      offerCount: "1",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "AVM Packaging System Mumbai",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumb Trail */}
      <Breadcrumbs
        items={[
          { label: "Machinery", href: "/pouch-packaging-machine" },
          { label: product.category, href: `/${product.categoryId === "pouch-packing" ? "pouch-packaging-machine" : product.slug}` },
          { label: product.name },
        ]}
      />

      {/* Product Page Header Banner — consistent with About Us & Contact Us */}
      <section className="py-12 sm:py-14 bg-[#0B192C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge-orange mb-3 inline-block">{product.category}</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              {product.h1 || product.name}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {product.shortDescription}
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>In-Stock & Ready for Dispatch</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#FF5E14]" />
                <span>Factory-Direct Pricing — No Middlemen</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-sky-400" />
                <span>Pan-India Installation & After-Sales Support</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Hero / Main Overview */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Product Imagery Showcase */}
            <div className="lg:col-span-6 space-y-4">
              {/* Image container — richer background for better machine visibility */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 border border-slate-300 rounded-3xl shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} manufactured by AVM Packaging System Mumbai`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain p-3 hover:scale-105 transition-transform duration-500 drop-shadow-md"
                />
                <div className="absolute top-4 left-4">
                  <span className="badge-orange text-xs shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Trust Badges under Image */}
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <span className="font-bold text-slate-900 block">Warranty</span>
                  <span className="text-slate-500 text-[11px]">100% Guaranteed</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <Wrench className="w-5 h-5 text-[#FF5E14] mx-auto mb-1" />
                  <span className="font-bold text-slate-900 block">On-Site Setup</span>
                  <span className="text-slate-500 text-[11px]">Pan-India Installation</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <Clock className="w-5 h-5 text-sky-600 mx-auto mb-1" />
                  <span className="font-bold text-slate-900 block">Fast Dispatch</span>
                  <span className="text-slate-500 text-[11px]">Ready Spares</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Overview & Immediate Action */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E14]">
                  AVM Industrial Machinery • Mumbai, India
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 leading-tight">
                  {product.h1 || product.name}
                </h2>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Key Highlights Checklist */}
              <div className="space-y-2.5 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Key Operational Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.features?.slice(0, 6).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={`https://api.whatsapp.com/send?phone=918928852195&text=${encodeURIComponent(`Hello AVM Packaging System, please send me a quote and technical datasheet for: ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Send className="w-4 h-4" />
                  <span>Get Machine Quotation</span>
                </a>

                <a
                  href="/avmpackagingsystem.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark"
                >
                  <Download className="w-4 h-4 text-slate-600" />
                  <span>Download Catalog PDF</span>
                </a>

                <a
                  href="tel:+918928852195"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  <span>Call Engineer</span>
                </a>
              </div>

              {/* Direct Inquiry Form Card */}
              <div className="pt-2">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">Need specific pouch size or speed calculation?</span>
                    <a href="tel:+918928852195" className="text-[#FF5E14] font-bold hover:underline">
                      +91-8928852195
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specifications & In-depth Technical Data */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Specs Table */}
            <div className="lg:col-span-7">
              <ProductSpecsTable
                specifications={product.specifications}
                productName={product.name}
              />
            </div>

            {/* Quick Contact Form on Product Page */}
            <div className="lg:col-span-5">
              <ContactForm />
            </div>
          </div>

          {/* Applications Grid */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#FF5E14]" />
              <span>Recommended Product Applications</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.applications?.map((app, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold border border-slate-200"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Specific Machine FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <FaqAccordion
          faqs={product.faqs}
          title={`${product.name} — Technical FAQs`}
          subtitle="Answers regarding operation, maintenance, tooling adjustments, and installation."
        />
      )}

      {/* Related Machinery in same category */}
      {relatedProducts.length > 0 && (
        <section className="py-14 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="badge-orange mb-1">Explore Compatible Systems</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Related Packaging Equipment
                </h3>
              </div>
              <Link
                href="/pouch-packaging-machine"
                className="text-xs sm:text-sm font-bold text-[#FF5E14] hover:underline flex items-center gap-1"
              >
                <span>View Full Line</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.slug} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
