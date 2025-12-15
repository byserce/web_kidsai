import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Showcase } from "@/components/landing/showcase";
import { LanguageSupport } from "@/components/landing/language-support";
import { Rewards } from "@/components/landing/rewards";
import { Cta } from "@/components/landing/cta";
import { Cloud, Star } from 'lucide-react';
import { Luckiest_Guy } from 'next/font/google';

// 1. Fontu yüklüyoruz (Flutter'daki ile aynı)
const luckiestGuy = Luckiest_Guy({ 
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-luckiest-guy',
});

export default function Home() {
  return (
    <div className={`min-h-screen flex flex-col overflow-x-hidden bg-[#E0F7FA] ${luckiestGuy.className}`}>
      
      {/* --- ARKA PLAN SÜSLEMELERİ (Flutter'daki Stack yapısı) --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Sol Üst Bulut */}
        <div className="absolute top-[5%] -left-[5%] animate-pulse duration-[4000ms]">
          <Cloud className="w-[200px] h-[200px] text-white/60 fill-white/40" />
        </div>
        
        {/* Sağ Üst Bulut */}
        <div className="absolute top-[2%] -right-[2%] animate-pulse duration-[5000ms]">
          <Cloud className="w-[250px] h-[250px] text-white/50 fill-white/30" />
        </div>

        {/* Orta Sol (Uzak) Bulut */}
        <div className="absolute top-[40%] left-[10%] animate-bounce duration-[8000ms]">
          <Cloud className="w-[120px] h-[120px] text-white/40 fill-white/20" />
        </div>

        {/* Alt Sağ Bulut */}
        <div className="absolute bottom-[10%] right-[5%] animate-pulse duration-[6000ms]">
          <Cloud className="w-[300px] h-[300px] text-white/40 fill-white/20" />
        </div>

        {/* Dekoratif Yıldızlar (ScoreTree göndermesi) */}
        <div className="absolute top-[20%] right-[15%] animate-spin-slow opacity-60">
          <Star className="w-12 h-12 text-yellow-300 fill-yellow-300" />
        </div>
        <div className="absolute bottom-[30%] left-[5%] animate-pulse opacity-40">
          <Star className="w-8 h-8 text-pink-300 fill-pink-300" />
        </div>
      </div>

      {/* --- ANA İÇERİK --- */}
      <Header />
      
      <main className="flex-1 relative z-10">
        {/* Her bölümün arasına hafif boşluk bırakarak 'kart' hissini güçlendirebiliriz */}
        <div className="space-y-12 pb-20"> 
          <Hero />
          <Features />
          <Showcase />
          <LanguageSupport />
          <Rewards />
          <Cta />
        </div>
      </main>

      <Footer />
    </div>
  );
}