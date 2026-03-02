"use client"

import { useState, useEffect } from "react"
import { translations, type Language } from "@/lib/translations"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { languages } from "@/components/header"
import { Sparkles, ShieldCheck, Zap, Gift, HelpCircle, CheckCircle2, Users, Download, Clock, ChevronDown, ChevronUp, Lock, Unlock, MessageCircle, Apple } from "lucide-react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function BetaPage() {
  // Varsayılan dil TR, tarayıcı diline göre değişebilir
  const [lang, setLang] = useState<Language>("tr")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [hasJoinedGroup, setHasJoinedGroup] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // 1. Önce URL parametresini kontrol et (?lang=en, ?lang=de vb.)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const langParam = params.get("lang")
      // Eğer URL'de geçerli bir dil kodu varsa (translations objesinde tanımlıysa) onu kullan
      if (langParam && Object.keys(translations).includes(langParam)) {
        setLang(langParam as Language)
        return
      }
    }

    // 2. URL parametresi yoksa tarayıcı diline bak
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "en") {
        setLang("en")
      }
    }
  }, [])

  const t = translations[lang].beta

  const screenshotMap: Record<Language, string[]> = {
    en: [
      "/eng_screenshot/WhatsApp Image 2026-03-02 at 14.27.01.jpeg",
      "/eng_screenshot/WhatsApp Image 2026-03-02 at 14.27.01 (1).jpeg",
      "/eng_screenshot/WhatsApp Image 2026-03-02 at 14.27.01 (2).jpeg",
      "/eng_screenshot/WhatsApp Image 2026-03-02 at 14.27.01 (3).jpeg",
      "/eng_screenshot/WhatsApp Image 2026-03-02 at 14.27.01 (4).jpeg",
      "/eng_screenshot/WhatsApp Image 2026-03-02 at 14.27.02.jpeg",
    ],
    tr: [
      "/tr_screenshot/WhatsApp Image 2026-03-02 at 14.28.08.jpeg",
      "/tr_screenshot/WhatsApp Image 2026-03-02 at 14.28.09.jpeg",
      "/tr_screenshot/WhatsApp Image 2026-03-02 at 14.28.09 (1).jpeg",
      "/tr_screenshot/WhatsApp Image 2026-03-02 at 14.28.09 (2).jpeg",
      "/tr_screenshot/WhatsApp Image 2026-03-02 at 14.28.09 (3).jpeg",
      "/tr_screenshot/WhatsApp Image 2026-03-02 at 14.28.09 (4).jpeg",
    ],
    de: [
      "/de_screenshot/WhatsApp Image 2026-03-02 at 14.29.12.jpeg",
      "/de_screenshot/WhatsApp Image 2026-03-02 at 14.29.13.jpeg",
      "/de_screenshot/WhatsApp Image 2026-03-02 at 14.29.13 (1).jpeg",
      "/de_screenshot/WhatsApp Image 2026-03-02 at 14.29.14.jpeg",
      "/de_screenshot/WhatsApp Image 2026-03-02 at 14.29.14 (1).jpeg",
      "/de_screenshot/WhatsApp Image 2026-03-02 at 14.29.14 (2).jpeg",
    ],
    es: [
      "/es_screenshot/WhatsApp Image 2026-03-02 at 14.33.49.jpeg",
      "/es_screenshot/WhatsApp Image 2026-03-02 at 14.33.49 (1).jpeg",
      "/es_screenshot/WhatsApp Image 2026-03-02 at 14.33.49 (2).jpeg",
      "/es_screenshot/WhatsApp Image 2026-03-02 at 14.33.49 (3).jpeg",
      "/es_screenshot/WhatsApp Image 2026-03-02 at 14.33.49 (4).jpeg",
      "/es_screenshot/WhatsApp Image 2026-03-02 at 14.33.50.jpeg",
    ],
    fr: [
      "/fr_screenshot/WhatsApp Image 2026-03-02 at 14.33.00.jpeg",
      "/fr_screenshot/WhatsApp Image 2026-03-02 at 14.33.00 (1).jpeg",
      "/fr_screenshot/WhatsApp Image 2026-03-02 at 14.33.00 (2).jpeg",
      "/fr_screenshot/WhatsApp Image 2026-03-02 at 14.33.00 (3).jpeg",
      "/fr_screenshot/WhatsApp Image 2026-03-02 at 14.33.00 (4).jpeg",
      "/fr_screenshot/WhatsApp Image 2026-03-02 at 14.33.01.jpeg",
    ],
    ja: [
      "/ja_screenshot/WhatsApp Image 2026-03-02 at 14.30.17.jpeg",
      "/ja_screenshot/WhatsApp Image 2026-03-02 at 14.30.17 (1).jpeg",
      "/ja_screenshot/WhatsApp Image 2026-03-02 at 14.30.17 (2).jpeg",
      "/ja_screenshot/WhatsApp Image 2026-03-02 at 14.30.18.jpeg",
      "/ja_screenshot/WhatsApp Image 2026-03-02 at 14.30.18 (1).jpeg",
      "/ja_screenshot/WhatsApp Image 2026-03-02 at 14.30.18 (2).jpeg",
    ],
    ko: [
      "/ko_screenshot/WhatsApp Image 2026-03-02 at 14.31.53.jpeg",
      "/ko_screenshot/WhatsApp Image 2026-03-02 at 14.31.53 (1).jpeg",
      "/ko_screenshot/WhatsApp Image 2026-03-02 at 14.31.53 (2).jpeg",
      "/ko_screenshot/WhatsApp Image 2026-03-02 at 14.31.53 (3).jpeg",
      "/ko_screenshot/WhatsApp Image 2026-03-02 at 14.31.54.jpeg",
      "/ko_screenshot/WhatsApp Image 2026-03-02 at 14.31.54 (1).jpeg",
    ],
    ar: [
      "/ar_screenshot/WhatsApp Image 2026-03-02 at 14.34.57.jpeg",
      "/ar_screenshot/WhatsApp Image 2026-03-02 at 14.34.57 (1).jpeg",
      "/ar_screenshot/WhatsApp Image 2026-03-02 at 14.34.57 (2).jpeg",
      "/ar_screenshot/WhatsApp Image 2026-03-02 at 14.34.57 (3).jpeg",
      "/ar_screenshot/WhatsApp Image 2026-03-02 at 14.34.57 (4).jpeg",
      "/ar_screenshot/WhatsApp Image 2026-03-02 at 14.34.57 (5).jpeg",
    ],
  };

  const currentScreenshots = screenshotMap[lang] || screenshotMap.en;

  const handleJoinGroup = () => {
    window.open(t.googleGroupLink, "_blank")
    setHasJoinedGroup(true)
  }

  const handleDownload = () => {
    if (!hasJoinedGroup) {
      toast({
        title: "⚠️ " + (lang === "en" ? "Action Required" : "İşlem Gerekli"),
        description: t.lockedText,
        variant: "destructive",
      })
      return
    }
    window.open(t.playStoreLink, "_blank")
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 flex flex-col relative overflow-hidden">
      {/* Dil Değiştirici (Opsiyonel, test için) */}
      <div className="absolute top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm font-bold text-slate-600 hover:bg-white shadow-sm transition-all flex items-center gap-2"
          >
            <span className="text-lg">{languages.find(l => l.code === lang)?.flag}</span>
            <span className="hidden sm:inline">{languages.find(l => l.code === lang)?.label}</span>
            <ChevronDown className={cn("w-4 h-4 transition-transform", isLangMenuOpen && "rotate-180")} />
          </button>

          {isLangMenuOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsLangMenuOpen(false)} />
              <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1 z-20 flex flex-col">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code as Language)
                      setIsLangMenuOpen(false)
                    }}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-left text-sm",
                      lang === l.code ? "bg-blue-50 text-blue-600 font-bold" : "text-slate-600"
                    )}
                  >
                    <span className="text-lg">{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center px-4 py-12 text-center max-w-6xl mx-auto w-full z-0">
        
        {/* --- HERO SECTION --- */}
        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-bold text-blue-700 mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 mr-2 text-blue-600" /> {t.badge}
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 drop-shadow-sm leading-tight">
          {t.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed mx-auto">
          {t.description}
        </p>

        {/* Canlı Sayaç (FOMO) */}
        <div className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold text-sm mb-8 animate-pulse">
          <Users className="w-4 h-4" />
          {t.counter}
        </div>

        {/* --- AKSİYON BUTONLARI (STEP BY STEP) --- */}
        <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto mb-8">
          
          {/* iOS Kullanıcı Notu */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-2 text-sm text-blue-800 font-medium w-full flex items-start gap-3 text-left shadow-sm">
             <Apple className="w-5 h-5 flex-shrink-0 mt-0.5 fill-current" />
             <div className="flex flex-col gap-1">
               <span>{t.iosNote}</span>
               <a href={t.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-bold underline flex items-center gap-1 hover:opacity-80">
                 {t.whatsappBtn}
               </a>
             </div>
          </div>

          {/* 1. Adım: Gruba Katıl */}
          <button
            onClick={handleJoinGroup}
            className={cn(
              "w-full text-white text-lg font-bold py-4 px-8 rounded-2xl shadow-lg transform transition-all flex items-center justify-center gap-3",
              hasJoinedGroup 
                ? "bg-green-500 hover:bg-green-600 ring-4 ring-green-200" 
                : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105 active:scale-95 shadow-blue-500/20"
            )}
          >
            {hasJoinedGroup ? <CheckCircle2 className="w-6 h-6" /> : <Users className="w-6 h-6" />}
            {t.step1Btn}
          </button>

          {/* 2. Adım: İndir (Kilitli/Açık) */}
          <button
            onClick={handleDownload}
            disabled={!hasJoinedGroup}
            className={cn(
              "w-full text-lg font-bold py-4 px-8 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3",
              hasJoinedGroup
                ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white hover:scale-105 active:scale-95 shadow-orange-500/20 cursor-pointer animate-pulse"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            )}
          >
            {hasJoinedGroup ? <Unlock className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
            {t.step2Btn}
          </button>

          {!hasJoinedGroup && (
            <p className="text-xs text-red-500 font-bold bg-red-50 px-3 py-1 rounded-full border border-red-100">
              {t.lockedText}
            </p>
          )}

          {/* WhatsApp Destek */}
          <a href={t.whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-green-600 hover:text-green-700 font-bold bg-green-50 hover:bg-green-100 px-4 py-2 rounded-xl transition-colors border border-green-200">
            <MessageCircle className="w-5 h-5" />
            <div className="flex flex-col items-start text-xs sm:text-sm">
              <span>{t.whatsappBtn}</span>
              <span className="font-normal opacity-80 hidden sm:inline">{t.whatsappDesc}</span>
            </div>
          </a>

          <p className="text-sm text-slate-400 font-medium px-4 leading-snug mt-2">
            {lang === "en" ? "100% Free & Safe on Google Play" : "Google Play'de %100 Ücretsiz ve Güvenli"}
          </p>
        </div>

        {/* --- MOCKUP / GÖRSEL KANIT --- */}
        <div className="relative w-full max-w-5xl mx-auto mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-[3rem] blur-3xl opacity-20 -z-10 transform rotate-3"></div>
          <div className="bg-white/50 backdrop-blur-sm border-4 border-white rounded-[3rem] p-4 md:p-12 shadow-2xl">
             
             {/* Carousel Yapısı */}
             <Carousel className="w-full max-w-[280px] md:max-w-4xl mx-auto" opts={{ align: "center", loop: true }}>
                <CarouselContent className="-ml-4 md:-ml-8">
                  {currentScreenshots.map((src, index) => (
                    <CarouselItem key={index} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                     <div className="bg-slate-900 rounded-[2rem] border-[6px] md:border-[10px] border-slate-900 overflow-hidden relative shadow-xl transform transition-transform hover:scale-[1.02]">
                       <Image 
                         src={src} 
                         alt={`Screen ${index + 1}`} 
                         width={0}
                         height={0}
                         sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                         style={{ width: '100%', height: 'auto' }}
                         priority={index < 3} 
                       />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 bg-white border-2 border-slate-200 hover:bg-slate-50 text-slate-600" />
                <CarouselNext className="hidden md:flex -right-12 bg-white border-2 border-slate-200 hover:bg-slate-50 text-slate-600" />

                {/* Mobil Navigasyon Butonları */}
                <div className="flex md:hidden justify-center gap-6 mt-8">
                  <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50" />
                  <CarouselNext className="static translate-y-0 h-12 w-12 bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50" />
                </div>
             </Carousel>

             <p className="mt-8 text-slate-500 font-bold text-sm uppercase tracking-wide">
               {lang === "en" ? "Actual App Screenshots" : "Uygulama İçi Görüntüler"}
             </p>
          </div>
        </div>

        {/* --- ÖZELLİKLER (NEDEN KIDSAI?) --- */}
        <div className="mb-24 w-full">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12">{t.features.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Özellik 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border-b-8 border-blue-500 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto text-blue-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.features.safeTitle}</h3>
              <p className="text-slate-600 leading-relaxed">{t.features.safeDesc}</p>
            </div>
            {/* Özellik 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border-b-8 border-purple-500 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto text-purple-600">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.features.interactiveTitle}</h3>
              <p className="text-slate-600 leading-relaxed">{t.features.interactiveDesc}</p>
            </div>
            {/* Özellik 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border-b-8 border-green-500 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto text-green-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.features.adFreeTitle}</h3>
              <p className="text-slate-600 leading-relaxed">{t.features.adFreeDesc}</p>
            </div>
          </div>
        </div>

        {/* --- AVANTAJLAR (TEŞVİK) --- */}
        <div className="w-full max-w-3xl bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[3rem] p-8 md:p-12 text-white shadow-xl mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-6 border border-white/30">
              <Gift className="w-5 h-5" />
              <span className="font-bold">{t.benefits.title}</span>
            </div>
            <ul className="space-y-4 text-left max-w-lg mx-auto">
              <li className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                <div className="bg-white text-orange-500 p-2 rounded-full"><Sparkles className="w-5 h-5" /></div>
                <span className="font-bold text-lg">{t.benefits.item1}</span>
              </li>
              <li className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                <div className="bg-white text-orange-500 p-2 rounded-full"><Users className="w-5 h-5" /></div>
                <span className="font-bold text-lg">{t.benefits.item2}</span>
              </li>
              <li className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                <div className="bg-white text-orange-500 p-2 rounded-full"><Zap className="w-5 h-5" /></div>
                <span className="font-bold text-lg">{t.benefits.item3}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- ADIM ADIM REHBER --- */}
        <div className="w-full max-w-4xl mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12">{lang === "en" ? "How to Join?" : "Nasıl Katılırım?"}</h2>
          <div className="space-y-6">
            {/* Adım 1 */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-6 text-left">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black text-xl">1</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.steps.step1}</h3>
                <p className="text-slate-600 mb-4">{t.steps.step1Desc}</p>
                <button onClick={() => window.open(t.googleGroupLink, "_blank")} className="text-blue-600 font-bold underline hover:text-blue-800">
                  Google Grubuna Git &rarr;
                </button>
              </div>
            </div>
            {/* Adım 2 */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-6 text-left">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-black text-xl">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.steps.step2}</h3>
                <p className="text-slate-600 mb-4">{t.steps.step2Desc}</p>
                <button onClick={() => window.open(t.playStoreLink, "_blank")} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold transition-colors flex items-center gap-2 w-fit">
                  <Download className="w-4 h-4" /> Play Store
                </button>
              </div>
            </div>
            {/* Adım 3 */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-6 text-left opacity-80">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-black text-xl">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.steps.step3}</h3>
                <p className="text-slate-600">{t.steps.step3Desc}</p>
              </div>
              <Clock className="w-8 h-8 text-purple-300" />
            </div>
          </div>
        </div>

        {/* --- SSS (FAQ) --- */}
        <div className="w-full max-w-2xl mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex items-center justify-center gap-2">
            <HelpCircle className="w-8 h-8 text-slate-400" />
            {t.faq.title}
          </h2>
          <div className="space-y-4 text-left">
            {[
              { q: t.faq.q1, a: t.faq.a1 },
              { q: t.faq.q2, a: t.faq.a2 },
              { q: t.faq.q3, a: t.faq.a3 }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  {item.q}
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {openFaq === index && (
                  <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </main>
      
      <footer className="py-6 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} KidsAI. {lang === "en" ? "All rights reserved." : "Tüm hakları saklıdır."}</p>
      </footer>
    </div>
  )
}
