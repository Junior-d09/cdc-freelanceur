'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Loader2, Sparkles } from 'lucide-react'

interface QuestionnaireFormProps {
  templateId: string
  onSubmit: (data: any) => void
  isLoading?: boolean
}

// Schéma de validation
const projectSchema = z.object({
  title: z.string().min(3, 'Le titre doit contenir au moins 3 caractères'),
  clientName: z.string().min(2, 'Le nom du client est requis'),
  clientEmail: z.string().email('Email invalide'),
  description: z.string().min(10, 'La description doit contenir au moins 10 caractères'),
  budget: z.string().min(1, 'Le budget est requis'),
  deadline: z.string().min(1, 'La deadline est requise'),
  objectives: z.string().min(10, 'Les objectifs doivent être détaillés'),
  targetAudience: z.string().optional(),
  features: z.array(z.string()).min(1, 'Sélectionnez au moins une fonctionnalité'),
})

const templateQuestions = {
  'site-vitrine': {
    features: [
      'Page d\'accueil',
      'Présentation entreprise',
      'Services/Produits',
      'Galerie photos',
      'Formulaire de contact',
      'Blog',
      'Témoignages clients',
      'FAQ',
    ],
  },
  'ecommerce': {
    features: [
      'Catalogue produits',
      'Panier d\'achat',
      'Paiement en ligne',
      'Gestion des stocks',
      'Compte client',
      'Suivi commandes',
      'Avis clients',
      'Programme fidélité',
    ],
  },
  'app-mobile': {
    features: [
      'Authentification utilisateur',
      'Push notifications',
      'Mode hors ligne',
      'Géolocalisation',
      'Partage social',
      'Chat intégré',
      'Paiement in-app',
      'Analytics',
    ],
  },
  'identite-visuelle': {
    features: [
      'Logo principal',
      'Variantes logo',
      'Charte graphique',
      'Carte de visite',
      'Papier à en-tête',
      'Signature email',
      'Templates réseaux sociaux',
      'Guide de style',
    ],
  },
}

export function QuestionnaireForm({ templateId, onSubmit, isLoading }: QuestionnaireFormProps) {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  
  const features = templateQuestions[templateId as keyof typeof templateQuestions]?.features || []

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
  })

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    )
  }

  const onFormSubmit = (data: any) => {
    onSubmit({
      ...data,
      features: selectedFeatures,
    })
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <Sparkles className="h-5 w-5 text-blue-600" />
        <p className="text-sm text-blue-900">
          Remplissez ce questionnaire pour générer automatiquement votre cahier des charges
        </p>
      </div>

      {/* Informations de base */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Informations générales
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="title">Nom du projet *</Label>
            <Input
              id="title"
              placeholder="Ex: Site web Mode Élégante"
              {...register('title')}
            />
            {errors.title && (
              <p className="text-sm text-red-600">{errors.title.message as string}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="clientName">Nom du client *</Label>
            <Input
              id="clientName"
              placeholder="Ex: Marie Dupont"
              {...register('clientName')}
            />
            {errors.clientName && (
              <p className="text-sm text-red-600">{errors.clientName.message as string}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="clientEmail">Email du client *</Label>
          <Input
            id="clientEmail"
            type="email"
            placeholder="client@exemple.com"
            {...register('clientEmail')}
          />
          {errors.clientEmail && (
            <p className="text-sm text-red-600">{errors.clientEmail.message as string}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description du projet *</Label>
          <Textarea
            id="description"
            rows={4}
            placeholder="Décrivez brièvement votre projet..."
            {...register('description')}
          />
          {errors.description && (
            <p className="text-sm text-red-600">{errors.description.message as string}</p>
          )}
        </div>
      </div>

      {/* Budget & Timeline */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Budget & Planning
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="budget">Budget estimé *</Label>
            <Select {...register('budget')}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez un budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<5000">Moins de 5 000€</SelectItem>
                <SelectItem value="5000-10000">5 000€ - 10 000€</SelectItem>
                <SelectItem value="10000-20000">10 000€ - 20 000€</SelectItem>
                <SelectItem value="20000-50000">20 000€ - 50 000€</SelectItem>
                <SelectItem value=">50000">Plus de 50 000€</SelectItem>
              </SelectContent>
            </Select>
            {errors.budget && (
              <p className="text-sm text-red-600">{errors.budget.message as string}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="deadline">Date de livraison souhaitée *</Label>
            <Input
              id="deadline"
              type="date"
              {...register('deadline')}
            />
            {errors.deadline && (
              <p className="text-sm text-red-600">{errors.deadline.message as string}</p>
            )}
          </div>
        </div>
      </div>

      {/* Objectifs */}
      <div className="space-y-2">
        <Label htmlFor="objectives">Objectifs du projet *</Label>
        <Textarea
          id="objectives"
          rows={4}
          placeholder="Quels sont les principaux objectifs de ce projet ?"
          {...register('objectives')}
        />
        {errors.objectives && (
          <p className="text-sm text-red-600">{errors.objectives.message as string}</p>
        )}
      </div>

      {/* Public cible */}
      <div className="space-y-2">
        <Label htmlFor="targetAudience">Public cible (optionnel)</Label>
        <Input
          id="targetAudience"
          placeholder="Ex: Femmes 25-45 ans, urbaines, CSP+"
          {...register('targetAudience')}
        />
      </div>

      {/* Fonctionnalités */}
      <div className="space-y-4">
        <Label>Fonctionnalités souhaitées *</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <Checkbox
                id={feature}
                checked={selectedFeatures.includes(feature)}
                onCheckedChange={() => handleFeatureToggle(feature)}
              />
              <label
                htmlFor={feature}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {feature}
              </label>
            </div>
          ))}
        </div>
        {errors.features && (
          <p className="text-sm text-red-600">{errors.features.message as string}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-6 border-t">
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Génération en cours...
            </>
          ) : (
            'Générer le cahier des charges'
          )}
        </Button>
      </div>
    </form>
  )
}