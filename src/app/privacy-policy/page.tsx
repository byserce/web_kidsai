"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#E0F7FA] font-sans">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
        
        {/* Geri Dön Butonu */}
        <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-kids-secondary font-luckiest hover:underline">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
            </Link>
        </div>

        {/* İçerik Kartı */}
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] border-[6px] border-white shadow-kids-lg shadow-blue-200/50 p-8 md:p-16 relative overflow-hidden">
          
          {/* Dekoratif Arkaplan */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-kids-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          {/* Başlık Alanı */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-20 h-20 bg-kids-success/20 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-10 h-10 text-kids-success" />
            </div>
            <h1 className="font-luckiest text-4xl md:text-5xl text-slate-800 mb-4">
              {t.privacyPolicy.title}
            </h1>
            <p className="text-slate-400 font-bold text-sm">
              {t.privacyPolicy.lastUpdated}
            </p>
          </div>

          {/* Metin İçeriği */}
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
              {t.privacyPolicy.intro}
            </p>

            <div className="space-y-8">
              {t.privacyPolicy.sections.map((section, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100">
                  <h3 className="font-luckiest text-2xl text-kids-secondary mb-3">{section.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}