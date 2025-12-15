"use client";

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GooglePlayIcon, AppStoreIcon } from "@/components/icons"; // AppStoreIcon'u da ekledik
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Hero() {
  const { t } = useLanguage();

  // Kendi resminizi kullanmak için:
  // 1. Resminizi 'public' klasörüne atın (örn: hero.png).
  // 2. Aşağıdaki 'imageUrl' kısmına "/hero.png" yazın.
  const heroImage = {
    imageUrl: "/hero.png", // BURAYA KENDİ RESİM YOLUNUZU YAZIN
    description: "KidsAI Uygulama Görseli",
    imageHint: "hero-image"
  };

  return (
    <section className="pt-20 pb-32 md:pt-32 relative z-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- SOL KOLON: METİN --- */}
        <div className="text-center lg:text-left relative z-20">
          
          {/* Üst Rozet */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-kids-accent shadow-sm mb-6 animate-bounce">
            <Star className="w-5 h-5 text-kids-yellowDark fill-kids-yellow" />
            <span className="font-luckiest text-kids-accent tracking-wide">
              {t.hero.badge}
            </span>
          </div>

          {/* Ana Başlık */}
          <h1 className="font-luckiest text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 relative">
            <span className="text-slate-700">{t.hero.titlePrefix}</span> <br />
            <span className="bg-gradient-to-br from-kids-primary via-orange-400 to-kids-secondary text-transparent bg-clip-text filter drop-shadow-sm">
              {t.hero.titleHighlight}
            </span>
            {/* Süsleme Yıldızı */}
            <Sparkles className="hidden lg:block absolute -top-8 -right-10 w-16 h-16 text-kids-yellow animate-pulse-slow" />
          </h1>

          <p className="mt-6 text-xl text-slate-500 font-luckiest tracking-wide max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t.hero.description}
          </p>

          {/* Buton Grubu */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            
            {/* Primary Button (Get Started) - Sarı Stil */}
            <Link 
              href="#"
              className="group relative w-full sm:w-auto h-[60px] px-8 bg-kids-warning border-4 border-white rounded-full shadow-kids-md shadow-kids-warningShadow hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center justify-center gap-3 active:scale-95"
            >
              <GooglePlayIcon className="h-6 w-6 text-slate-800" />
              <span className="font-luckiest text-slate-800 text-xl tracking-wider pt-1">{t.hero.getStarted}</span>
            </Link>

            {/* Secondary Button (Learn More) - Beyaz Stil */}
            <Link 
              href="#features"
              className="group relative w-full sm:w-auto h-[60px] px-8 bg-white border-4 border-kids-bg rounded-full shadow-kids-md shadow-blue-200 hover:border-kids-accent hover:shadow-kids-accentShadow hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 text-kids-secondary"
            >
              <span className="font-luckiest text-lg tracking-wider pt-1">{t.hero.learnMore}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </Link>

          </div>
          
          {/* Güvenilirlik Yazısı */}
          <p className="mt-6 text-sm font-luckiest text-slate-400">
            {t.hero.trust}
          </p>
        </div>

        {/* --- SAĞ KOLON: GÖRSEL (Floating Phone) --- */}
        <div className="relative flex justify-center lg:justify-end z-10">
            
            {/* Arka Plan Glow Efekti */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-kids-primary/20 via-kids-accent/20 to-kids-secondary/20 rounded-full blur-3xl -z-10"></div>

            {heroImage && (
              <div className="relative animate-float">
                {/* Dekoratif Süsler Resim Çevresinde */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-kids-warning rounded-full border-4 border-white z-20 shadow-lg animate-bounce"></div>
                <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-kids-accent rounded-full border-4 border-white z-20 shadow-lg flex items-center justify-center">
                    <span className="font-luckiest text-white text-3xl">AI</span>
                </div>

                {/* Resim Çerçevesi */}
                <div className="bg-white p-2 rounded-[40px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image
                      src={heroImage.imageUrl}
                      alt={heroImage.description}
                      width={600}
                      height={400}
                      className="rounded-[32px] border-[6px] border-kids-bg object-cover"
                      priority
                      data-ai-hint={heroImage.imageHint}
                    />
                </div>
              </div>
            )}
        </div>

      </div>
    </section>
  );
}