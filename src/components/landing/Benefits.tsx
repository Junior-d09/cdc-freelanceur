import { Clock, TrendingUp, Shield, Smile, Target, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Gagnez 80% de temps',
    description: 'Créez un cahier des charges en 15 minutes au lieu de plusieurs heures.',
    stat: '15 min',
    statLabel: 'vs 2-3 heures',
  },
  {
    icon: TrendingUp,
    title: 'Augmentez votre productivité',
    description: 'Gérez plus de projets avec la même qualité grâce à nos templates optimisés.',
    stat: '+40%',
    statLabel: 'de projets traités',
  },
  {
    icon: Shield,
    title: 'Réduisez les malentendus',
    description: 'Un CDC clair et structuré évite 90% des incompréhensions avec vos clients.',
    stat: '90%',
    statLabel: 'moins d\'erreurs',
  },
  {
    icon: Smile,
    title: 'Impressionnez vos clients',
    description: 'Des documents professionnels qui inspirent confiance dès le premier contact.',
    stat: '4.9/5',
    statLabel: 'satisfaction client',
  },
  {
    icon: Target,
    title: 'Projets mieux cadrés',
    description: 'Des cahiers des charges complets qui couvrent tous les aspects essentiels.',
    stat: '100%',
    statLabel: 'de clarté',
  },
  {
    icon: Zap,
    title: 'Validation ultra-rapide',
    description: 'Vos clients valident en 1 clic, sans compte ni installation nécessaire.',
    stat: '24h',
    statLabel: 'validation moyenne',
  },
]

export function Benefits() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Pourquoi les freelanceurs nous adorent
          </h2>
          <p className="text-xl text-blue-100">
            Des résultats concrets qui transforment votre façon de travailler
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-xl bg-white/20 mb-6">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-blue-100 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              {/* Stat */}
              <div className="pt-6 border-t border-white/20">
                <div className="text-4xl font-bold mb-1">
                  {benefit.stat}
                </div>
                <div className="text-sm text-blue-200">
                  {benefit.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">500+</div>
            <div className="text-blue-200">CDC créés</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">200+</div>
            <div className="text-blue-200">Freelanceurs actifs</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">95%</div>
            <div className="text-blue-200">Taux de validation</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">4.9★</div>
            <div className="text-blue-200">Note moyenne</div>
          </div>
        </div>
      </div>
    </section>
  )
}