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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-200 to-indigo-200 text-gray-900 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pourquoi les freelanceurs nous adorent
          </h2>
          <p className="text-lg text-gray-700">
            Des résultats concrets qui transforment votre façon de travailler
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-blue-50/20 backdrop-blur-sm rounded-xl p-6 border border-gray-100 hover:bg-blue-100/30 transition-all hover:scale-105"
            >
              {/* Icon */}
              <div className="inline-flex p-2 rounded-lg bg-blue-100/30 mb-4">
                <benefit.icon className="h-6 w-6 text-blue-700" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {benefit.description}
              </p>

              {/* Stat */}
              <div className="pt-4 border-t border-blue-100">
                <div className="text-3xl font-bold text-blue-700 mb-1">
                  {benefit.stat}
                </div>
                <div className="text-xs text-gray-500">
                  {benefit.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
