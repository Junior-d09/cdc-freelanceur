import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Designer UX/UI",
    company: "Freelance",
    avatar: "/testimonials/sarah.webp",
    rating: 5,
    text: 'CDC Pro a transformé ma façon de travailler. Je crée des cahiers des charges en 10 minutes...',
    highlight: "Gain de temps incroyable",
  },
  {
    name: "Thomas Dubois",
    role: "Développeur Full-Stack",
    company: "Tech Solutions",
    avatar: "/testimonials/thomas.jpg",
    rating: 5,
    text: 'Avant, je perdais un temps fou à rédiger des CDC.…',
    highlight: "Process ultra-simplifié",
  },
  {
    name: "Emma Lefebvre",
    role: "Consultante Marketing",
    company: "Digital Boost",
    avatar: "/testimonials/emma.jpg",
    rating: 5,
    text: 'J’ai triplé mon nombre de projets grâce à CDC Pro.…',
    highlight: "+200% de productivité",
  },
  {
    name: "Karim Ben Ali",
    role: "Chef de Projet Web",
    company: "WebAgency",
    avatar: "/testimonials/karim.jpg",
    rating: 5,
    text: 'L’outil parfait pour standardiser nos CDC.…',
    highlight: "Validation 3x plus rapide",
  },
  {
    name: "Julie Moreau",
    role: "Graphiste",
    company: "Creative Studio",
    avatar: "/testimonials/julie.jpg",
    rating: 5,
    text: 'Je n’ai jamais été à l’aise avec la rédaction…',
    highlight: "Simple et efficace",
  },
  {
    name: "Alexandre Petit",
    role: "E-commerce Manager",
    company: "ShopOnline",
    avatar: "/testimonials/alexandre.jpg",
    rating: 5,
    text: 'Excellent rapport qualité-prix.…',
    highlight: "15 projets réussis",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
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
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-slate-300 shadow-sm">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    placeholder="blur"
                    blurDataURL="/blur-placeholder.png"
                    className="object-cover"
                  />
                </div>

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
  );
}
