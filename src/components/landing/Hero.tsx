'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, FileText, Users } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-60" />
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          {/* <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-8">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">
              AI-Powered CDC Creation
            </span>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Créez des{' '}
            <span className="bg-linear-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              cahiers des charges
            </span>{' '}
            en quelques minutes
          </h1>

          {/* Subheading */}
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Transformez vos idées en cahiers des charges professionnels grâce à 
            notre plateforme intelligente. Guidé, rapide, et validé par vos clients.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/register">
              <Button 
                size="lg" 
                className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg group"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg border-2 border-slate-300 hover:border-slate-400"
              >
                Voir la démo
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <span>500+ CDC créés</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span>200+ freelanceurs</span>
            </div>
          </div>
        </div>

        {/* Hero Image / Dashboard Preview */}
        <div className="mt-20 relative">
          <div className="relative mx-auto max-w-5xl">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-indigo-600/20 blur-3xl" />
            
            {/* Dashboard Preview */}
            {/* <div className="relative rounded-2xl border-8 border-white shadow-2xl overflow-hidden bg-white">
              <div className="aspect-video bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-slate-400 text-lg">Dashboard Preview</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}