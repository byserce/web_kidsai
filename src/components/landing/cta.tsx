import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppStoreIcon, GooglePlayIcon } from "@/components/icons";
import { Star } from "lucide-react";

export function Cta() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
          Ready for an Adventure?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Unlock a world of learning and fun for your child. Download KidsAI Adventures today and start the journey!
        </p>
        <div className="mt-8 flex justify-center items-center gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg" asChild>
            <Link href="#">
              <AppStoreIcon className="h-6 w-6 mr-2" />
              Download for iOS
            </Link>
          </Button>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg" asChild>
            <Link href="#">
              <GooglePlayIcon className="h-6 w-6 mr-2" />
              Download for Android
            </Link>
          </Button>
        </div>
        <div className="mt-6 flex justify-center items-center gap-2 text-yellow-500">
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
        </div>
        <p className="text-sm text-muted-foreground mt-2">Loved by kids and parents everywhere</p>
      </div>
    </section>
  );
}
