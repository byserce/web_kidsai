"use client";

import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t-[6px] border-kids-bg relative z-20 pb-6 pt-10">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* --- SOL TARAFA: LOGO VE SLOGAN --- */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 group cursor-default">
              <div className="bg-orange-100 p-2 rounded-full group-hover:rotate-12 transition-transform">
                <Sparkles className="h-6 w-6 text-orange-600 fill-orange-400" />
              </div>
              <span className="font-luckiest text-2xl tracking-wide bg-gradient-to-br from-kids-primary via-orange-400 to-kids-secondary text-transparent bg-clip-text drop-shadow-sm">
                KidsAI
              </span>
            </div>
            <p className="font-luckiest text-slate-400 text-sm tracking-wide text-center md:text-left">
              {t.footer.slogan}
            </p>
            <a href="mailto:game.kidsai.app@gmail.com" className="font-luckiest text-slate-400/80 text-sm tracking-wide hover:text-kids-primary transition-colors mt-1 block">
              game.kidsai.app@gmail.com
            </a>
          </div>

          {/* --- ORTA/SAĞ: LİNKLER --- */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link 
              href="/privacy-policy" 
              className="font-luckiest text-slate-500 hover:text-kids-primary transition-colors text-lg tracking-wide hover:underline decoration-4 decoration-kids-primary/30 underline-offset-4"
            >
              {t.footer.privacy}
            </Link>
            <Link 
              href="#" 
              className="font-luckiest text-slate-500 hover:text-kids-accent transition-colors text-lg tracking-wide hover:underline decoration-4 decoration-kids-accent/30 underline-offset-4"
            >
              {t.footer.terms}
            </Link>
            <Link 
              href="mailto:game.kidsai.app@gmail.com" 
              className="font-luckiest text-slate-500 hover:text-kids-secondary transition-colors text-lg tracking-wide hover:underline decoration-4 decoration-kids-secondary/30 underline-offset-4"
            >
              {t.footer.contact}
            </Link>
          </nav>
        </div>

        {/* --- ALT KISIM: COPYRIGHT --- */}
        <div className="mt-10 pt-6 border-t-2 border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm font-bold font-sans">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          
          <div className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full">
            <span>{t.footer.madeWith}</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
            <span>{t.footer.forKids}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}