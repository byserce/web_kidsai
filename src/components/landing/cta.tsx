"use client";

import Link from "next/link";
import { AppStoreIcon, GooglePlayIcon } from "@/components/icons";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Cta() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative z-10 px-4">
      {/* --- ANA KART (Oyun Sonu Ekranı Gibi) --- */}
      <div className="container mx-auto max-w-5xl bg-white rounded-[50px] border-[6px] border-white shadow-kids-lg shadow-black/5 p-8 md:p-16 text-center relative overflow-hidden">
        
        {/* Dekoratif Arkaplan Baloncukları */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-kids-primary/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-kids-accent/10 rounded-full blur-2xl translate-x-1/3 translate-y-1/3"></div>

        <h2 className="font-luckiest text-4xl md:text-6xl text-kids-secondary mb-6 drop-shadow-sm">
          {t.cta.title}
        </h2>
        
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-500 font-luckiest tracking-wide mb-10 leading-relaxed">
          {t.cta.description} <br />
          <span className="text-kids-primary">{t.cta.download}</span> {t.cta.today}
        </p>

        {/* --- BUTONLAR --- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
          
          {/* iOS Button (Sarı - Güncellenmiş Stil) */}
          <Link 
            href="/beta" 
            className="group relative w-full sm:w-auto min-w-[240px] h-[64px] bg-kids-warning border-4 border-white rounded-full shadow-kids-md shadow-kids-warningShadow hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center justify-center gap-3 active:scale-95"
          >
            <div className="bg-white/20 p-1.5 rounded-full">
              <AppStoreIcon className="w-6 h-6 text-slate-800" />
            </div>
            <span className="font-luckiest text-slate-800 text-xl tracking-wider pt-1">{t.cta.ios}</span>
          </Link>

          {/* Android Button (Turkuaz - Smart Eye Rengi) */}
          <Link 
            href="/beta" 
            className="group relative w-full sm:w-auto min-w-[240px] h-[64px] bg-kids-accent border-4 border-white rounded-full shadow-kids-md shadow-kids-accentShadow hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center justify-center gap-3 active:scale-95"
          >
            <div className="bg-white/20 p-1.5 rounded-full">
              <GooglePlayIcon className="w-6 h-6 text-white" />
            </div>
            <span className="font-luckiest text-white text-xl tracking-wider pt-1">{t.cta.android}</span>
          </Link>

        </div>

        {/* --- YILDIZLAR VE YORUM --- */}
        <div className="flex flex-col items-center gap-3">
          {/* Animasyonlu Yıldızlar */}
          <div className="flex justify-center items-center gap-2 text-kids-yellowDark">
            {[0, 100, 200, 300, 400].map((delay, index) => (
              <div 
                key={index} 
                className="animate-bounce" 
                style={{ animationDelay: `${delay}ms` }}
              >
                <Star className="w-8 h-8 fill-kids-yellow drop-shadow-sm" />
              </div>
            ))}
          </div>
          
          <p className="text-lg text-slate-400 font-luckiest tracking-wide">
            {t.cta.lovedBy}
          </p>
        </div>

        {/* --- GİZLİLİK LİNKİ --- */}
        <div className="mt-12 pt-6 border-t-2 border-slate-100 max-w-md mx-auto">
          <p className="text-sm text-slate-400 font-sans font-bold">
            {t.cta.privacyPrefix}{" "}
            <Link 
              href="/privacy-policy" 
              className="text-kids-accent hover:text-kids-secondary underline decoration-2 underline-offset-2 transition-colors"
            >
              {t.cta.privacyLink}
            </Link>.
          </p>
        </div>

      </div>
    </section>
  );
}