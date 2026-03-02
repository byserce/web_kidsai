"use client"

import { useState, useEffect } from "react"
import { translations, type Language } from "@/components/landing/translations"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function BetaPage() {
  // Varsayılan dil TR, tarayıcı diline göre değişebilir
  const [lang, setLang] = useState<Language>("tr")
  const { toast } = useToast()

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "en") {
        setLang("en")
      }
    }
  }, [])

  const t = translations[lang].beta

  const handleJoin = () => {
    // 1. Google Grubunu yeni sekmede aç
    window.open(t.googleGroupLink, "_blank")

    // 2. Play Store linkini göster (Toast mesajı ile)
    toast({
      title: t.steps.step2,
      description: (
        <div className="flex flex-col gap-2 mt-1">
          <span>{t.steps.step2Desc}</span>
          <a 
            href={t.playStoreLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 font-bold underline hover:text-blue-800"
          >
            Download Link
          </a>
        </div>
      ),
      duration: 10000,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 flex flex-col relative overflow-hidden">
      {/* Dil Değiştirici (Opsiyonel, test için) */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setLang(lang === "en" ? "tr" : "en")}
          className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-slate-600 hover:bg-white shadow-sm transition-all"
        >
          {lang === "en" ? "🇹🇷 TR" : "🇺🇸 EN"}
        </button>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center max-w-4xl mx-auto w-full z-0">
        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-bold text-blue-700 mb-8 shadow-sm">
          ✨ {t.badge}
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 drop-shadow-sm leading-tight">
          {t.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed mx-auto">
          {t.description}
        </p>

        <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto mb-16">
          <button
            onClick={handleJoin}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-4 px-8 rounded-2xl shadow-xl shadow-orange-500/20 transform transition-all hover:scale-105 active:scale-95"
          >
            {t.cta}
          </button>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
            {lang === "en" ? "Limited Time Offer" : "Sınırlı Süreli Teklif"}
          </p>
        </div>

        {/* Adımlar Bölümü */}
        <div className="grid md:grid-cols-2 gap-6 w-full text-left">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-3 relative z-10">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold">1</span>
              {t.steps.step1}
            </h3>
            <p className="text-slate-600 text-sm pl-11 relative z-10">
              {t.steps.step1Desc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-50 rounded-full opacity-50 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-3 relative z-10">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 text-sm font-bold">2</span>
              {t.steps.step2}
            </h3>
            <p className="text-slate-600 text-sm pl-11 relative z-10">
              {t.steps.step2Desc}
            </p>
          </div>
        </div>
      </main>
      
      <footer className="py-6 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} KidsAI. {lang === "en" ? "All rights reserved." : "Tüm hakları saklıdır."}</p>
      </footer>
    </div>
  )
}