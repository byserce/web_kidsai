import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppStoreIcon, GooglePlayIcon } from "@/components/icons";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">
            KidsAI
          </span>
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#">
              <AppStoreIcon className="h-5 w-5 mr-2" />
              App Store
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#">
              <GooglePlayIcon className="h-5 w-5 mr-2" />
              Google Play
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
