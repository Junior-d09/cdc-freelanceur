import { FileText, MessageSquare, CheckCircle, Download } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Choisissez un template',
    description: 'Sélectionnez le type de projet parmi nos templates optimisés : Site web, E-commerce, App mobile ou Identité visuelle.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Répondez aux questions',
    description: 'Notre assistant intelligent vous guide avec des questions adaptées à votre projet pour créer un CDC complet en quelques minutes.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Validez avec votre client',
    description: 'Partagez un lien sécurisé à votre client pour qu\'il consulte et valide le cahier des charges en un clic.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    number: '04',
    icon: Download,
    title: 'Exportez en PDF',
    description: 'Générez un document PDF professionnel avec votre branding pour impressionner vos clients et démarrer le projet.',
    color: 'from-orange-500 to-red-500',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-slate-600">
            4 étapes simples pour créer un cahier des charges professionnel
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-200" />
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} mb-6 mt-4`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-4">
            Prêt à simplifier votre processus de création de CDC ?
          </p>
          <a
            href="/register"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Commencer maintenant
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}