import { Card, CardContent } from "@/components/ui/card";
import { Gift, Zap } from "lucide-react";

export function Rewards() {
  return (
    <section id="rewards" className="py-20 sm:py-24 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
                <div className="relative">
                    <Zap className="w-32 h-32 text-yellow-400" fill="currentColor"/>
                    <Gift className="w-16 h-16 text-red-500 absolute bottom-0 right-0 -translate-x-2 translate-y-2" fill="currentColor"/>
                </div>
            </div>
            <div className="md:col-span-3 text-center md:text-left">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                    Keep the Fun Going!
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Running low on energy? Watch short, kid-friendly ads to earn extra "refill shots" and continue the object-finding adventure without interruption. It's a great way to get more playtime!
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
