"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Apple, Play } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export const languages = [
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "tr", flag: "🇹🇷", label: "Türkçe" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "ja", flag: "🇯🇵", label: "日本語" },
  { code: "ko", flag: "🇰🇷", label: "한국어" },
  { code: "ar", flag: "🇸🇦", label: "العربية" },
] as const;

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  return (
    // 'sticky top-0' yerine biraz boşluk bırakarak (pt-4) yüzen hissi veriyoruz
    <header className="sticky top-0 z-50 w-full pt-4 px-4 pb-4">
      
      {/* --- MENU KAPSAYICISI (HUD PANEL) --- */}
      <div className="container mx-auto max-w-6xl bg-white/90 backdrop-blur-md border-[3px] border-white rounded-full shadow-kids-md shadow-blue-200/50 h-[72px] flex items-center justify-between px-3 md:px-6 transition-all duration-300 hover:shadow-kids-lg hover:shadow-blue-200/60">
        
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-2 group pl-2">
          <div className="bg-orange-100 p-1.5 rounded-full group-hover:rotate-12 transition-transform duration-300">
            <Sparkles className="h-6 w-6 text-orange-600 fill-orange-400" />
          </div>
          <span className="font-luckiest text-2xl tracking-wide bg-gradient-to-r from-kids-primary to-kids-secondary text-transparent bg-clip-text drop-shadow-sm">
            KidsAI
          </span>
        </Link>

        {/* --- SAĞ TARAF BUTONLARI --- */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* App Store Mini Button */}
          <Link 
            href="/beta" 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 border-2 border-orange-500 text-white font-luckiest text-sm tracking-wide hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-kids-sm hover:shadow-orange-200 active:translate-y-0.5 active:shadow-none"
          >
            <Apple className="h-4 w-4 mb-0.5" fill="currentColor" />
            <span>{t.header.appStore}</span>
          </Link>

          {/* Google Play Mini Button */}
          <Link 
            href="/beta" 
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-kids-accent text-kids-accent font-luckiest text-sm tracking-wide hover:bg-kids-accent hover:text-white transition-all duration-200 shadow-sm hover:shadow-kids-sm hover:shadow-kids-accentShadow active:translate-y-0.5 active:shadow-none"
          >
            <Play className="h-4 w-4 mb-0.5" fill="currentColor" />
            <span>{t.header.googlePlay}</span>
          </Link>

          {/* Dil Değiştirme Butonu (Dropdown) */}
          <div className="relative ml-2">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-xl hover:bg-white hover:border-kids-primary transition-all"
              title="Change Language"
            >
              {languages.find((l) => l.code === language)?.flag || "🇺🇸"}
            </button>

            {isLangMenuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsLangMenuOpen(false)} />
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border-2 border-slate-100 overflow-hidden py-2 flex flex-col gap-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsLangMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-left ${language === lang.code ? "bg-kids-primary/10 text-kids-primary font-bold" : "text-slate-600"}`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-luckiest text-sm tracking-wide">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

        </div>

        {/* Mobil Menü İkonu (Gerekirse buraya eklenebilir) */}
        <div className="md:hidden pr-2 flex items-center gap-3">
            {/* Dil Değiştirme Butonu (Mobil - Dropdown) */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-xl active:scale-95 transition-all"
                title="Change Language"
              >
                {languages.find((l) => l.code === language)?.flag || "🇺🇸"}
              </button>
              
              {isLangMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangMenuOpen(false)} />
                  <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border-2 border-slate-100 overflow-hidden py-2 flex flex-col gap-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any);
                          setIsLangMenuOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-left ${language === lang.code ? "bg-kids-primary/10 text-kids-primary font-bold" : "text-slate-600"}`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="font-luckiest text-sm tracking-wide">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Basit bir mobil indirme butonu */}
            <Link href="/beta" className="bg-orange-500 text-white p-2 rounded-full shadow-kids-sm shadow-orange-200 active:shadow-none active:translate-y-1 block">
                <Apple className="h-5 w-5" fill="currentColor" />
            </Link>
        </div>

      </div>
    </header>
  );
}