import { Star, Quote } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Sarah Martinez',
    role: 'Designer UX/UI',
    company: 'Freelance',
    avatar: '',
    rating: 5,
    text: 'CDC Pro a transformé ma façon de travailler. Je crée des cahiers des charges en 10 minutes au lieu de 2 heures. Mes clients adorent la clarté et le professionnalisme.',
    highlight: 'Gain de temps incroyable',
  },
  {
    name: 'Thomas Dubois',
    role: 'Développeur Full-Stack',
    company: 'Tech Solutions',
    avatar: '',
    rating: 5,
    text: 'Avant, je perdais un temps fou à rédiger des CDC. Maintenant, tout est guidé et structuré. La validation client en 1 clic est un game-changer pour moi.',
    highlight: 'Process ultra-simplifié',
  },
  {
    name: 'Emma Lefebvre',
    role: 'Consultante Marketing',
    company: 'Digital Boost',
    avatar: '',
    rating: 5,
    text: 'J\'ai triplé mon nombre de projets grâce à CDC Pro. Les templates sont parfaits, l\'export PDF est impeccable. Je recommande à 200% !',
    highlight: '+200% de productivité',
  },
  {
    name: 'Karim Ben Ali',
    role: 'Chef de Projet Web',
    company: 'WebAgency',
    avatar: '',
    rating: 5,
    text: 'L\'outil parfait pour standardiser nos CDC. Mon équipe l\'utilise quotidiennement et nos clients valident beaucoup plus vite qu\'avant.',
    highlight: 'Validation 3x plus rapide',
  },
  {
    name: 'Julie Moreau',
    role: 'Graphiste',
    company: 'Creative Studio',
    avatar: '',
    rating: 5,
    text: 'Je n\'ai jamais été à l\'aise avec la rédaction. CDC Pro me guide parfaitement et le résultat est toujours professionnel. C\'est devenu indispensable.',
    highlight: 'Simple et efficace',
  },
  {
    name: 'Alexandre Petit',
    role: 'E-commerce Manager',
    company: 'ShopOnline',
    avatar: '',
    rating: 5,
    text: 'Excellent rapport qualité-prix. J\'ai lancé 15 projets e-commerce avec cet outil. La structure des templates est vraiment bien pensée.',
    highlight: '15 projets réussis',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-semibold">4.9/5 sur 200+ avis</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-xl text-slate-600">
            Rejoignez des centaines de freelanceurs satisfaits
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="h-12 w-12 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Highlight Badge */}
              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {testimonial.highlight}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 leading-relaxed mb-6">
                `{testimonial.text}`
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-6 border-t border-slate-200">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback className="bg-linear-to-br from-blue-600 to-indigo-600 text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-slate-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-4">
            Rejoignez-les et transformez votre façon de créer des CDC
          </p>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-all hover:scale-105 shadow-lg"
          >
            Essayer gratuitement
          </a>
        </div>
      </div>
    </section>
  )
}