"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function LanguageSupport() {
  const { t, setLanguage, language } = useLanguage();

  return (
    <section id="languages" className="py-20 sm:py-24 relative z-10 overflow-hidden">
      
      {/* Arka Plan Süsü: Devasa Silik Dünya */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Globe className="w-[500px] h-[500px] animate-spin-slow text-slate-900" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-20">
        
        {/* --- BAŞLIK --- */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full border-4 border-kids-bg shadow-sm mb-4">
            <Globe className="w-8 h-8 text-kids-accent" />
          </div>
          <h2 className="font-luckiest text-4xl md:text-5xl text-kids-accent drop-shadow-sm">
            {t.languageSupport.title}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-xl text-slate-500 font-luckiest tracking-wide">
            {t.languageSupport.description}
          </p>
        </div>

        {/* --- DİL KARTLARI --- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          
          {/* ENGLISH CARD */}
          <div 
            onClick={() => setLanguage("en")}
            className={`group relative w-full sm:w-auto min-w-[200px] bg-white border-[5px] ${language === 'en' ? 'border-blue-500 shadow-xl' : 'border-blue-200'} rounded-[30px] p-4 shadow-kids-md shadow-blue-200/50 hover:-translate-y-1 hover:shadow-xl hover:border-blue-400 transition-all duration-300 cursor-pointer`}
          >
            <div className="flex items-center justify-center gap-4">
              <span className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform">🇺🇸</span>
              <span className="font-luckiest text-2xl text-blue-500 tracking-wide">{t.languageSupport.english}</span>
            </div>
          </div>

          {/* TURKISH CARD */}
          <div 
            onClick={() => setLanguage("tr")}
            className={`group relative w-full sm:w-auto min-w-[200px] bg-white border-[5px] ${language === 'tr' ? 'border-red-500 shadow-xl' : 'border-red-200'} rounded-[30px] p-4 shadow-kids-md shadow-red-200/50 hover:-translate-y-1 hover:shadow-xl hover:border-red-400 transition-all duration-300 cursor-pointer`}
          >
            <div className="flex items-center justify-center gap-4">
              <span className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform">🇹🇷</span>
              <span className="font-luckiest text-2xl text-red-500 tracking-wide">{t.languageSupport.turkish}</span>
            </div>
          </div>

          {/* MORE COMING SOON BADGE */}
          <div className="hidden md:flex items-center justify-center px-6 py-4 bg-slate-100 border-[3px] border-slate-200 rounded-[30px] border-dashed">
            <span className="font-luckiest text-slate-400 text-lg">{t.languageSupport.comingSoon}</span>
          </div>

        </div>
      </div>
    </section>
  );
}