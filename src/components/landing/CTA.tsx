import Link from 'next/link'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-semibold">
            Offre spéciale : 14 jours d&apos;essai gratuit
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Prêt à transformer votre façon de créer des CDC ?
        </h2>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Rejoignez des centaines de freelanceurs qui ont déjà simplifié leur processus 
          et impressionné leurs clients.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/register">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold group shadow-xl"
            >
              Commencer gratuitement
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#pricing">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              Voir les tarifs
            </Button>
          </Link>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-300" />
            <span className="text-blue-100">Aucune carte requise</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-300" />
            <span className="text-blue-100">Annulation à tout moment</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-300" />
            <span className="text-blue-100">Support 7j/7</span>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200 text-sm">CDC créés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-200 text-sm">Freelanceurs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200 text-sm">Taux de validation</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-blue-200 text-sm">Note moyenne</div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12">
          <p className="text-blue-100 text-sm">
            Utilisé par des freelanceurs chez
          </p>
          <div className="flex items-center justify-center space-x-8 mt-4 opacity-60">
            <div className="text-xl font-semibold">Upwork</div>
            <div className="text-xl font-semibold">Malt</div>
            <div className="text-xl font-semibold">Freelance.com</div>
            <div className="text-xl font-semibold">Fiverr</div>
          </div>
        </div>
      </div>
    </section>
  )
}