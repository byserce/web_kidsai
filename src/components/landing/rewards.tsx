"use client";

import { Gift, Zap, BatteryCharging } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Rewards() {
  const { t } = useLanguage();

  return (
    <section id="rewards" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        
        {/* --- ÖDÜL KARTI --- */}
        <div className="max-w-5xl mx-auto bg-white rounded-[50px] border-[6px] border-kids-yellow shadow-kids-lg shadow-kids-warningShadow/30 p-8 md:p-12 relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          
          {/* Arkaplan Işık Efekti */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-kids-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center relative z-10">
            
            {/* --- SOL TARAFA: GÖRSEL İKONLAR --- */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative group cursor-pointer">
                {/* Sarı Daire Arkaplan */}
                <div className="w-40 h-40 bg-kids-yellow rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-pulse-slow">
                  <Zap className="w-20 h-20 text-slate-800 fill-slate-800 drop-shadow-md" />
                </div>
                
                {/* Hediye Kutusu (Yüzen) */}
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl border-4 border-kids-bg shadow-kids-md shadow-black/5 animate-bounce" style={{ animationDuration: '2s' }}>
                  <Gift className="w-10 h-10 text-kids-primary fill-kids-primary" />
                </div>

                {/* Parıltılar */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-10 left-2 w-2 h-2 bg-white rounded-full animate-ping delay-75"></div>
                </div>
              </div>
            </div>

            {/* --- SAĞ TARAFA: METİN --- */}
            <div className="md:col-span-3 text-center md:text-left">
              
              <div className="inline-block px-4 py-1 bg-kids-yellow/30 text-yellow-800 font-luckiest rounded-full text-sm mb-4 border border-kids-yellow">
                {t.rewards.badge}
              </div>

              <h2 className="font-luckiest text-4xl md:text-5xl text-slate-800 mb-4">
                {t.rewards.titlePrefix} <span className="text-kids-warningShadow">{t.rewards.titleHighlight}</span> {t.rewards.titleSuffix}
              </h2>
              
              <p className="text-lg md:text-xl text-slate-500 font-luckiest tracking-wide leading-relaxed mb-8">
                {t.rewards.description}
              </p>

              {/* --- GÖRSEL TEMSİL (Flutter'daki Pil Göstergesi) --- */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 flex items-center gap-3">
                    {/* Pil İkonu */}
                    <div className="flex items-center gap-1 px-3 py-1 bg-white border-2 border-kids-success rounded-full shadow-sm">
                        <Zap className="w-5 h-5 text-kids-success fill-kids-success" />
                        <span className="font-luckiest text-kids-success text-lg">+3</span>
                    </div>
                    <span className="font-luckiest text-slate-400 text-sm">{t.rewards.refilled}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}