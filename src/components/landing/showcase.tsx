"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Showcase() {
  const { t } = useLanguage();

  // Kendi ekran görüntülerinizi eklemek için bu listeyi düzenleyin.
  // Resimleri 'public' klasörüne atıp yollarını (örn: /screen1.png) buraya yazın.
  const showcaseImages = [
    { id: "1", imageUrl: "/eng_screenshot/WhatsApp Image 2026-03-02 at 14.27.01.jpeg", description: "Game Screen 1", imageHint: "screenshot" },
    { id: "2", imageUrl: "/eng_screenshot/WhatsApp Image 2026-03-02 at 14.27.01 (1).jpeg", description: "Game Screen 2", imageHint: "screenshot" },
    { id: "3", imageUrl: "/eng_screenshot/WhatsApp Image 2026-03-02 at 14.27.01 (2).jpeg", description: "Game Screen 3", imageHint: "screenshot" },
    { id: "4", imageUrl: "/eng_screenshot/WhatsApp Image 2026-03-02 at 14.27.01 (3).jpeg", description: "Game Screen 4", imageHint: "screenshot" },
    { id: "5", imageUrl: "/eng_screenshot/WhatsApp Image 2026-03-02 at 14.27.01 (4).jpeg", description: "Game Screen 5", imageHint: "screenshot" },
    { id: "6", imageUrl: "/eng_screenshot/WhatsApp Image 2026-03-02 at 14.27.02.jpeg", description: "Game Screen 6", imageHint: "screenshot" },
  ];

  return (
    <section id="showcase" className="py-20 sm:py-32 relative z-10 overflow-hidden">
      
      {/* Arka Plan Süsü (Hafif Desen) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#4DD0E1 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container mx-auto px-4">
        
        {/* --- BAŞLIK --- */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center justify-center p-2 bg-white rounded-full border-4 border-kids-primary/20 mb-4 shadow-sm">
             <Sparkles className="w-6 h-6 text-kids-primary" />
          </div>
          <h2 className="font-luckiest text-4xl md:text-5xl text-kids-secondary drop-shadow-sm mb-4">
            {t.showcase.title}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-500 font-luckiest tracking-wide">
            {t.showcase.description}
          </p>
        </div>

        {/* --- CAROUSEL ALANI --- */}
        <div className="flex justify-center relative">
          
          {/* Dekoratif Arka Plan Elemanları (Telefonun Arkasında) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-kids-accent/20 rounded-[60px] blur-3xl -z-10 animate-pulse-slow"></div>
          
          {/* Yüzen Yıldız Süsleri */}
          <div className="absolute top-10 left-4 md:left-1/4 animate-bounce" style={{ animationDuration: '3s' }}>
            <Star className="w-12 h-12 text-yellow-600 fill-kids-yellow drop-shadow-md" />
          </div>
          <div className="absolute bottom-10 right-4 md:right-1/4 animate-bounce" style={{ animationDuration: '4s' }}>
            <Star className="w-8 h-8 text-kids-primary fill-kids-primary drop-shadow-md" />
          </div>

          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-[320px]"
          >
            {/* TELEFON ÇERÇEVESİ */}
            <div className="relative bg-slate-900 rounded-[45px] border-[8px] border-slate-900 shadow-2xl overflow-hidden ring-4 ring-white/50">
                
                {/* Telefon Çentiği (Notch) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-slate-900 rounded-b-xl z-20"></div>

                <CarouselContent>
                  {showcaseImages.map((image) => (
                    <CarouselItem key={image.id} className="basis-full">
                      <div className="aspect-[9/19] relative bg-kids-bg w-full h-full">
                         {/* Resim */}
                         <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                          />
                          {/* Resim üzerine hafif gradient (Daha iyi görünüm için) */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
            </div>

            {/* --- ÖZEL NAVİGASYON BUTONLARI --- */}
            <div className="absolute top-1/2 -left-16 hidden md:block">
                <CarouselPrevious className="relative left-0 translate-y-0 h-14 w-14 bg-white border-4 border-kids-secondary text-kids-secondary hover:bg-kids-secondary hover:text-white hover:border-white transition-all shadow-kids-sm" />
            </div>
            <div className="absolute top-1/2 -right-16 hidden md:block">
                <CarouselNext className="relative right-0 translate-y-0 h-14 w-14 bg-kids-warning border-4 border-white text-slate-800 hover:bg-orange-400 hover:text-slate-900 hover:border-white transition-all shadow-kids-sm" />
            </div>

            {/* Mobil Navigasyon (Telefonun altına) */}
            <div className="flex md:hidden justify-center gap-6 mt-8">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white border-4 border-kids-secondary text-kids-secondary hover:bg-kids-secondary hover:text-white" />
                <CarouselNext className="static translate-y-0 h-12 w-12 bg-kids-warning border-4 border-white text-slate-800 hover:bg-orange-400 hover:text-slate-900" />
            </div>

          </Carousel>
        </div>
      </div>
    </section>
  );
}