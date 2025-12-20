"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { languages } from "@/components/header";

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
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          
          {languages.map((lang) => (
            <div 
              key={lang.code}
              onClick={() => setLanguage(lang.code as any)}
              className={`group relative w-full sm:w-auto min-w-[160px] bg-white border-[4px] ${language === lang.code ? 'border-kids-primary shadow-xl scale-105' : 'border-slate-200'} rounded-[24px] p-4 shadow-kids-sm hover:-translate-y-1 hover:shadow-lg hover:border-kids-primary/50 transition-all duration-300 cursor-pointer flex flex-col items-center gap-2`}
            >
              <span className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform">{lang.flag}</span>
              <span className={`font-luckiest text-xl tracking-wide ${language === lang.code ? 'text-kids-primary' : 'text-slate-400 group-hover:text-slate-600'}`}>{lang.label}</span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}