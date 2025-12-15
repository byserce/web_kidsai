"use client";

import Link from "next/link";
import { Sparkles, Apple, Play } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Header() {
  const { t, language, setLanguage } = useLanguage();

  return (
    // 'sticky top-0' yerine biraz boşluk bırakarak (pt-4) yüzen hissi veriyoruz
    <header className="sticky top-0 z-50 w-full pt-4 px-4 pb-4">
      
      {/* --- MENU KAPSAYICISI (HUD PANEL) --- */}
      <div className="container mx-auto max-w-6xl bg-white/90 backdrop-blur-md border-[3px] border-white rounded-full shadow-kids-md shadow-blue-200/50 h-[72px] flex items-center justify-between px-3 md:px-6 transition-all duration-300 hover:shadow-kids-lg hover:shadow-blue-200/60">
        
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-2 group pl-2">
          <div className="bg-kids-yellow/20 p-1.5 rounded-full group-hover:rotate-12 transition-transform duration-300">
            <Sparkles className="h-6 w-6 text-kids-yellowDark fill-kids-yellow" />
          </div>
          <span className="font-luckiest text-2xl tracking-wide bg-gradient-to-r from-kids-primary to-kids-secondary text-transparent bg-clip-text drop-shadow-sm">
            KidsAI
          </span>
        </Link>

        {/* --- SAĞ TARAF BUTONLARI --- */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* App Store Mini Button */}
          <Link 
            href="#" 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-kids-warning border-2 border-kids-warning text-slate-800 font-luckiest text-sm tracking-wide hover:bg-orange-400 hover:border-orange-400 hover:text-slate-900 transition-all duration-200 shadow-sm hover:shadow-kids-sm hover:shadow-kids-warningShadow active:translate-y-0.5 active:shadow-none"
          >
            <Apple className="h-4 w-4 mb-0.5" fill="currentColor" />
            <span>{t.header.appStore}</span>
          </Link>

          {/* Google Play Mini Button */}
          <Link 
            href="#" 
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-kids-accent text-kids-accent font-luckiest text-sm tracking-wide hover:bg-kids-accent hover:text-white transition-all duration-200 shadow-sm hover:shadow-kids-sm hover:shadow-kids-accentShadow active:translate-y-0.5 active:shadow-none"
          >
            <Play className="h-4 w-4 mb-0.5" fill="currentColor" />
            <span>{t.header.googlePlay}</span>
          </Link>

          {/* Dil Değiştirme Butonu (Basit) */}
          <button
            onClick={() => setLanguage(language === "en" ? "tr" : "en")}
            className="ml-2 w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-xl hover:bg-white hover:border-kids-primary transition-all"
            title="Change Language"
          >
            {language === "en" ? "🇹🇷" : "🇺🇸"}
          </button>

        </div>

        {/* Mobil Menü İkonu (Gerekirse buraya eklenebilir) */}
        <div className="md:hidden pr-2 flex items-center gap-3">
            {/* Dil Değiştirme Butonu (Mobil) */}
            <button
              onClick={() => setLanguage(language === "en" ? "tr" : "en")}
              className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-xl active:scale-95 transition-all"
              title="Change Language"
            >
              {language === "en" ? "🇹🇷" : "🇺🇸"}
            </button>

            {/* Basit bir mobil indirme butonu */}
            <Link href="#" className="bg-kids-warning text-slate-800 p-2 rounded-full shadow-kids-sm shadow-kids-warningShadow active:shadow-none active:translate-y-1 block">
                <Apple className="h-5 w-5" fill="currentColor" />
            </Link>
        </div>

      </div>
    </header>
  );
}