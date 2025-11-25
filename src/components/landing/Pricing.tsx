import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Gratuit',
    price: '0',
    description: 'Parfait pour tester la plateforme',
    features: [
      '2 projets par mois',
      'Templates de base',
      'Export PDF',
      'Validation client',
      'Support email',
    ],
    cta: 'Commencer gratuitement',
    href: '/register',
    popular: false,
  },
  {
    name: 'Premium',
    price: '15',
    description: 'Pour les freelanceurs actifs',
    features: [
      'Projets illimités',
      'Tous les templates',
      'Export PDF personnalisé',
      'Validation client avancée',
      'Support prioritaire',
      'Analytics détaillées',
    ],
    cta: 'Essayer 14 jours gratuits',
    href: '/register',
    popular: true,
  },
  {
    name: 'Agence',
    price: '49',
    description: 'Pour les équipes et agences',
    features: [
      'Tout Premium +',
      'Gestion d\'équipe',
      'Templates personnalisés',
      'Branding personnalisé',
      'API access',
      'Support dédié',
    ],
    cta: 'Contacter les ventes',
    href: '/contact',
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Un prix simple et transparent
          </h2>
          <p className="text-xl text-slate-600">
            Commencez gratuitement, évoluez quand vous en avez besoin
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-slate-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center space-x-2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                    <Sparkles className="h-4 w-4" />
                    <span>Plus populaire</span>
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-white' : 'text-slate-900'
                }`}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className={`mb-6 ${
                  plan.popular ? 'text-blue-100' : 'text-slate-600'
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}€</span>
                <span
                  className={`text-lg ${
                    plan.popular ? 'text-blue-100' : 'text-slate-600'
                  }`}
                >
                  /mois
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check
                      className={`h-5 w-5 mr-3 flex-shrink-0 ${
                        plan.popular ? 'text-blue-200' : 'text-green-600'
                      }`}
                    />
                    <span
                      className={
                        plan.popular ? 'text-blue-50' : 'text-slate-600'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href={plan.href}>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}