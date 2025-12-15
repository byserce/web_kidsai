import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Showcase } from "@/components/landing/showcase";
import { LanguageSupport } from "@/components/landing/language-support";
import { Rewards } from "@/components/landing/rewards";
import { Cta } from "@/components/landing/cta";
import { Cloud } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 relative">
        <div className="absolute top-0 right-0 -z-10 -translate-y-1/4 translate-x-1/4">
          <Cloud className="w-[250px] h-[250px] text-primary/20" />
        </div>
        <div className="absolute top-1/2 left-0 -z-10 -translate-y-1/2 -translate-x-1/4">
          <Cloud className="w-[200px] h-[200px] text-primary/10" />
        </div>
        <div className="absolute bottom-0 right-0 -z-10 translate-y-1/4 translate-x-1/3">
          <Cloud className="w-[300px] h-[300px] text-primary/15" />
        </div>
        <Hero />
        <Features />
        <Showcase />
        <LanguageSupport />
        <Rewards />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
