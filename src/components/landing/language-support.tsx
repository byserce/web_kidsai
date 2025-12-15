import { Badge } from "@/components/ui/badge";

export function LanguageSupport() {
  return (
    <section id="languages" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
          Play in Your Language
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          KidsAI Adventures is designed for families around the world.
        </p>
        <div className="mt-8 flex justify-center items-center gap-6">
          <Badge className="text-lg px-6 py-2 bg-secondary text-secondary-foreground border-2 border-border shadow-sm">
            <span className="mr-2 text-2xl">🇬🇧</span>
            English
          </Badge>
          <Badge className="text-lg px-6 py-2 bg-secondary text-secondary-foreground border-2 border-border shadow-sm">
            <span className="mr-2 text-2xl">🇹🇷</span>
            Türkçe
          </Badge>
        </div>
      </div>
    </section>
  );
}
