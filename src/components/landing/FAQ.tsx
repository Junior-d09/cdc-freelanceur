'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Comment fonctionne CDC Pro exactement ?',
    answer: 'CDC Pro vous guide à travers un questionnaire intelligent adapté au type de projet que vous choisissez. Vous répondez à des questions simples, et notre système génère automatiquement un cahier des charges professionnel et structuré. Vous pouvez ensuite le personnaliser, le partager avec votre client pour validation, et l\'exporter en PDF.',
  },
  {
    question: 'Puis-je essayer gratuitement ?',
    answer: 'Oui ! Vous pouvez créer jusqu\'à 2 projets par mois avec le plan gratuit. Cela vous permet de tester toutes les fonctionnalités essentielles : création guidée, validation client, et export PDF. Aucune carte bancaire n\'est requise pour commencer.',
  },
  {
    question: 'Mes clients ont-ils besoin de créer un compte ?',
    answer: 'Non, absolument pas ! C\'est l\'un de nos plus grands avantages. Vous partagez simplement un lien sécurisé à vos clients. Ils peuvent consulter le CDC, laisser des commentaires et valider en 1 clic, sans inscription ni installation.',
  },
  {
    question: 'Puis-je personnaliser les templates ?',
    answer: 'Dans le plan gratuit, vous utilisez nos templates optimisés tels quels. Avec le plan Premium, vous pouvez personnaliser entièrement les CDC : ajouter votre logo, modifier les sections, ajuster les couleurs, etc. Le plan Agence permet même de créer vos propres templates.',
  },
  {
    question: 'Les PDF générés sont-ils professionnels ?',
    answer: 'Oui ! Tous nos PDF sont conçus pour être élégants et professionnels. Ils incluent une table des matières, une mise en page soignée, et respectent les standards de qualité attendus par vos clients. Avec les plans payants, vous pouvez ajouter votre branding (logo, couleurs).',
  },
  {
    question: 'Que se passe-t-il avec mes données ?',
    answer: 'Vos données sont hébergées de manière sécurisée et restent votre propriété. Nous ne partageons jamais vos informations avec des tiers. Vous pouvez exporter ou supprimer vos projets à tout moment. Nous sommes conformes RGPD.',
  },
  {
    question: 'Puis-je collaborer avec mon équipe ?',
    answer: 'Oui ! Le plan Agence inclut la gestion d\'équipe. Vous pouvez inviter des collaborateurs, définir des rôles et permissions, et travailler ensemble sur les projets. Chaque membre a son propre accès avec ses propres identifiants.',
  },
  {
    question: 'Y a-t-il un engagement ou puis-je annuler à tout moment ?',
    answer: 'Aucun engagement ! Tous nos plans sont sans engagement. Vous pouvez upgrader, downgrader ou annuler votre abonnement à tout moment depuis votre compte. Si vous annulez, vous gardez accès jusqu\'à la fin de votre période de facturation.',
  },
  {
    question: 'Proposez-vous un support si j\'ai besoin d\'aide ?',
    answer: 'Absolument ! Le plan gratuit inclut un support par email (réponse sous 48h). Les plans Premium et Agence bénéficient d\'un support prioritaire (réponse sous 24h). Nous avons également une base de connaissances complète et des tutoriels vidéo.',
  },
  {
    question: 'Puis-je importer mes anciens CDC ?',
    answer: 'Actuellement, la fonctionnalité d\'import n\'est pas disponible dans le MVP. Cependant, vous pouvez facilement recréer vos CDC existants en utilisant nos templates, ce qui est généralement plus rapide que de les reformater manuellement.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-slate-600">
            Tout ce que vous devez savoir sur CDC Pro
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all hover:shadow-md"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-500 shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}