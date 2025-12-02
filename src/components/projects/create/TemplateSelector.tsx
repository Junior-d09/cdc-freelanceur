// src/components/projects/create/TemplateSelector.tsx
'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Palette,
  CheckCircle,
  Clock,
  ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface TemplateSelectorProps {
  onSelect: (templateId: string) => void
}

const templates = [
  {
    id: 'site-vitrine',
    name: 'Site Web Vitrine',
    description: 'Site de présentation pour entreprise ou professionnel',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    estimatedTime: '10-15 min',
    features: ['Responsive', 'SEO optimisé', '5-10 pages', 'Formulaire contact'],
    popular: true,
  },
  {
    id: 'ecommerce',
    name: 'Site E-commerce',
    description: 'Boutique en ligne complète pour vendre vos produits',
    icon: ShoppingCart,
    color: 'from-green-500 to-emerald-500',
    estimatedTime: '15-20 min',
    features: ['Catalogue produits', 'Panier', 'Paiement en ligne', 'Gestion stock'],
    popular: true,
  },
  {
    id: 'app-mobile',
    name: 'Application Mobile',
    description: 'Application iOS et/ou Android native ou hybride',
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
    estimatedTime: '15-20 min',
    features: ['iOS & Android', 'Push notifications', 'Offline mode', 'Analytics'],
    popular: false,
  },
  {
    id: 'identite-visuelle',
    name: 'Identité Visuelle',
    description: 'Logo, charte graphique et supports de communication',
    icon: Palette,
    color: 'from-orange-500 to-red-500',
    estimatedTime: '10-15 min',
    features: ['Logo', 'Charte graphique', 'Supports print', 'Réseaux sociaux'],
    popular: false,
  },
]

export function TemplateSelector({ onSelect }: TemplateSelectorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const handleSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
  }

  const handleContinue = () => {
    if (selectedTemplate) {
      onSelect(selectedTemplate)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Choisissez votre template
        </h2>
        <p className="text-slate-600">
          Sélectionnez le type de projet qui correspond à vos besoins
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => {
          const Icon = template.icon
          const isSelected = selectedTemplate === template.id

          return (
            <Card
              key={template.id}
              className={cn(
                'cursor-pointer transition-all hover:shadow-lg',
                isSelected && 'ring-2 ring-blue-600 shadow-lg'
              )}
              onClick={() => handleSelect(template.id)}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${template.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  {isSelected && (
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  )}
                  {template.popular && !isSelected && (
                    <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
                      Populaire
                    </Badge>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {template.name}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {template.description}
                </p>

                {/* Estimated Time */}
                <div className="flex items-center gap-2 mb-4 text-sm text-slate-600">
                  <Clock className="h-4 w-4" />
                  <span>Temps estimé: {template.estimatedTime}</span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {template.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Select Button */}
                {isSelected && (
                  <div className="mt-4 pt-4 border-t">
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
                      onClick={handleContinue}
                    >
                      Continuer avec ce template
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Continue Button */}
      {selectedTemplate && (
        <div className="flex justify-end pt-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600"
            onClick={handleContinue}
          >
            Continuer
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}