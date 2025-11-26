import { Zap, Shield, Users, FileCheck, Clock, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Création Rapide',
    description: 'Créez un cahier des charges professionnel en moins de 15 minutes grâce à nos templates intelligents.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Sparkles,
    title: 'Templates Guidés',
    description: 'Choisissez parmi nos templates optimisés : Site web, E-commerce, App mobile, Identité visuelle.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileCheck,
    title: 'Validation Client Simple',
    description: 'Partagez un lien sécurisé à vos clients pour validation en un clic. Pas besoin de compte.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Collaboration Fluide',
    description: 'Invitez vos clients à consulter et commenter directement sur le CDC en temps réel.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Suivi de Projet',
    description: 'Suivez l\'avancement de tous vos projets dans un dashboard intuitif et centralisé.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Export PDF Pro',
    description: 'Générez des PDF professionnels avec votre branding pour impressionner vos clients.',
    gradient: 'from-red-500 to-rose-500',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-slate-600">
            Des fonctionnalités pensées pour les freelanceurs qui veulent gagner du temps
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${feature.gradient} mb-5`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}