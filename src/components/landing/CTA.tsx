import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div
        className="relative bg-linear-to-br from-blue-400 via-indigo-100 to-blue-200 text-slate-800 
                      max-w-4xl w-full rounded-3xl border border-white/20 shadow-xl px-6 sm:px-10 py-10"
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Prêt à transformer votre façon de créer des CDC ?
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Rejoignez des centaines de freelanceurs qui ont déjà simplifié leur
          processus et impressionné leurs clients.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link href="/register">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-4 text-lg font-semibold group shadow-lg"
            >
              Commencer gratuitement
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link href="#pricing">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-4 text-lg font-semibold group shadow-lg"
            >
              Voir les tarifs
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-slate-700 text-sm">Aucune carte requise</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-slate-700 text-sm">
              Annulation à tout moment
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-slate-700 text-sm">Support 7j/7</span>
          </div>
        </div>

        {/* Freelance Platforms */}
        <div className="mt-8">
          <p className="text-slate-700 text-sm text-center mb-4">
            Utilisé par des freelanceurs chez
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
            <div className="px-4 py-2 bg-white/10 rounded-lg">Upwork</div>
            <div className="px-4 py-2 bg-white/10 rounded-lg">Malt</div>
            <div className="px-4 py-2 bg-white/10 rounded-lg">
              Freelance.com
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-lg">Fiverr</div>
          </div>
        </div>
      </div>
    </section>
  );
}
