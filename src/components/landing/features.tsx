"use client";

import { Camera, Gamepad2, Map, PawPrint, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Camera,
      title: t.features.items[0].title,
      description: t.features.items[0].description,
      color: "bg-kids-primary", // Pembe
      shadow: "shadow-kids-primaryShadow",
      rotate: "-rotate-2", // Hafif sola yatık
      textColor: "text-white",
    },
    {
      icon: Gamepad2,
      title: t.features.items[1].title,
      description: t.features.items[1].description,
      color: "bg-kids-accent", // Turkuaz
      shadow: "shadow-kids-accentShadow",
      rotate: "rotate-1", // Hafif sağa yatık
      textColor: "text-white",
    },
    {
      icon: Map,
      title: t.features.items[2].title,
      description: t.features.items[2].description,
      color: "bg-kids-success", // Yeşil
      shadow: "shadow-kids-successShadow",
      rotate: "-rotate-1",
      textColor: "text-white",
    },
    {
      icon: PawPrint,
      title: t.features.items[3].title,
      description: t.features.items[3].description,
      color: "bg-kids-warning", // Turuncu
      shadow: "shadow-kids-warningShadow",
      rotate: "rotate-2",
      textColor: "text-slate-800",
    },
  ];

  return (
    <section id="features" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        
        {/* --- BAŞLIK --- */}
        <div className="text-center mb-16">
          <h2 className="font-luckiest text-4xl md:text-6xl text-kids-secondary drop-shadow-sm mb-4">
            {t.features.title}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-500 font-luckiest tracking-wide">
            {t.features.subtitle}
          </p>
        </div>

        {/* --- KARTLAR GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`
                group relative h-full p-8 rounded-[40px] border-[5px] border-white 
                ${feature.color} ${feature.shadow} shadow-kids-lg 
                transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-105
                ${feature.rotate} hover:rotate-0 cursor-default
              `}
            >
              {/* Baloncuk Efekti (Arkaplan Süsü) */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>

              {/* İkon Baloncuğu */}
              <div className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-6 border-4 transition-colors ${feature.textColor === 'text-slate-800' ? 'bg-white/40 border-white/50 group-hover:bg-white/50' : 'bg-white/20 border-white/30 group-hover:bg-white/30'}`}>
                <feature.icon className={`w-10 h-10 drop-shadow-md ${feature.textColor}`} strokeWidth={2.5} />
                {/* İkonun yanına küçük bir parıltı */}
                <Sparkles className={`absolute -top-2 -right-2 w-6 h-6 animate-pulse ${feature.textColor === 'text-slate-800' ? 'text-slate-800 fill-slate-800' : 'text-yellow-300 fill-yellow-300'}`} />
              </div>

              {/* İçerik */}
              <h3 className={`font-luckiest text-2xl mb-3 tracking-wide drop-shadow-md leading-tight ${feature.textColor}`}>
                {feature.title}
              </h3>
              <p className={`font-bold font-sans text-lg leading-relaxed drop-shadow-sm ${feature.textColor === 'text-slate-800' ? 'text-slate-800/90' : 'text-white/90'}`}>
                {feature.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}