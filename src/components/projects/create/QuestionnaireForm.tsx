'use client'
import { useEffect, useState } from 'react'
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
import { Loader2 } from 'lucide-react'

interface QuestionnaireFormProps {
  templateId: string
  onSubmit: (data: any) => void
  isLoading?: boolean
}

/**
 * Schéma pro :
 * - title, objective (court), description, clientName, clientEmail,
 * - budget, deadline, designStyle, targetAudience, pages (array), features (array)
 */
const projectSchema = z.object({
  title: z.string().min(3, 'Le titre doit contenir au moins 3 caractères'),
  clientName: z.string().min(2, 'Le nom du client est requis'),
  clientEmail: z.string().email('Email invalide'),
  description: z.string().min(10, 'La description doit contenir au moins 10 caractères'),
  budget: z.string().min(1, 'Le budget est requis'),
  deadline: z.string().min(1, 'La deadline est requise'),
  objectives: z.string().min(10, 'Les objectifs doivent être détaillés'),
  designStyle: z.string().optional(),
  targetAudience: z.string().optional(),
  pages: z.array(z.string()).optional(),
  features: z.array(z.string()).min(1, 'Sélectionnez au moins une fonctionnalité'),
  references: z.string().optional(),
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
    defaultPages: ['Accueil', 'À propos', 'Services', 'Contact'],
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
    defaultPages: ['Accueil', 'Boutique', 'Produit', 'Panier', 'Contact'],
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
    defaultPages: ['Onboarding', 'Home', 'Profil'],
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
    defaultPages: ['Kit de marque'],
  },
}

export function QuestionnaireForm({ templateId, onSubmit, isLoading }: QuestionnaireFormProps) {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [pages, setPages] = useState<string[]>([])
  const [newPage, setNewPage] = useState('')

  const features = templateQuestions[templateId as keyof typeof templateQuestions]?.features || []
  const defaultPages = templateQuestions[templateId as keyof typeof templateQuestions]?.defaultPages || []

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      pages: defaultPages,
      features: [],
    },
  })

  useEffect(() => {
    // initial pages
    if (defaultPages && defaultPages.length && pages.length === 0) {
      setPages(defaultPages)
      setValue('pages', defaultPages)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFeatureToggle = (feature: string) => {
    const updated = selectedFeatures.includes(feature)
      ? selectedFeatures.filter(f => f !== feature)
      : [...selectedFeatures, feature]

    setSelectedFeatures(updated)
    setValue('features', updated, { shouldValidate: true })
  }

  const handleAddPage = () => {
    const trimmed = newPage.trim()
    if (!trimmed) return
    const updated = [...pages, trimmed]
    setPages(updated)
    setValue('pages', updated)
    setNewPage('')
  }

  const handleRemovePage = (p: string) => {
    const updated = pages.filter(x => x !== p)
    setPages(updated)
    setValue('pages', updated)
  }

  const onFormSubmit = (data: any) => {
    onSubmit({
      ...data,
      features: selectedFeatures,
      pages,
    })
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-900">
          Remplissez ce questionnaire professionnel pour générer un cahier des charges complet.
        </p>
      </div>

      {/* Base info */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-slate-900">Informations générales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="title">Nom du projet *</Label>
            <Input id="title" placeholder="Ex: Site web Mode Élégante" {...register('title')} />
            {errors.title && <p className="text-sm text-red-600">{errors.title.message as string}</p>}
          </div>

          <div>
            <Label htmlFor="clientName">Nom du client *</Label>
            <Input id="clientName" placeholder="Ex: Marie Dupont" {...register('clientName')} />
            {errors.clientName && <p className="text-sm text-red-600">{errors.clientName.message as string}</p>}
          </div>

          <div>
            <Label htmlFor="clientEmail">Email du client *</Label>
            <Input id="clientEmail" type="email" placeholder="client@exemple.com" {...register('clientEmail')} />
            {errors.clientEmail && <p className="text-sm text-red-600">{errors.clientEmail.message as string}</p>}
          </div>

          <div>
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
            {errors.budget && <p className="text-sm text-red-600">{errors.budget.message as string}</p>}
          </div>

          <div>
            <Label htmlFor="deadline">Date de livraison souhaitée *</Label>
            <Input id="deadline" type="date" {...register('deadline')} />
            {errors.deadline && <p className="text-sm text-red-600">{errors.deadline.message as string}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="description">Description du projet *</Label>
          <Textarea id="description" rows={4} placeholder="Décrivez brièvement votre projet..." {...register('description')} />
          {errors.description && <p className="text-sm text-red-600">{errors.description.message as string}</p>}
        </div>
      </div>

      {/* Objectives & target */}
      <div className="space-y-4">
        <Label htmlFor="objectives">Objectifs principaux *</Label>
        <Textarea id="objectives" rows={3} placeholder="Quels sont les objectifs (ex: augmenter conversions, présenter services...)" {...register('objectives')} />
        {errors.objectives && <p className="text-sm text-red-600">{errors.objectives.message as string}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="designStyle">Style design préféré</Label>
          <Select {...register('designStyle')}>
            <SelectTrigger>
              <SelectValue placeholder="Choisir un style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Moderne</SelectItem>
              <SelectItem value="minimal">Minimaliste</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
              <SelectItem value="colorful">Coloré</SelectItem>
              <SelectItem value="dark">Sombre</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="targetAudience">Public cible (optionnel)</Label>
          <Input id="targetAudience" placeholder="Ex: Femmes 25-45 ans, urbaines" {...register('targetAudience')} />
        </div>
      </div>

      {/* Pages */}
      <div className="space-y-2">
        <Label>Pages nécessaires</Label>
        <div className="flex gap-2">
          <Input placeholder="Ajouter une page (ex: Politique de confidentialité)" value={newPage} onChange={(e) => setNewPage(e.target.value)} />
          <Button type="button" onClick={handleAddPage}>Ajouter</Button>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {pages.map(p => (
            <div key={p} className="px-3 py-1 bg-slate-100 rounded-md flex items-center gap-2">
              <span className="text-sm">{p}</span>
              <button type="button" className="text-sm text-red-600" onClick={() => handleRemovePage(p)}>Suppr</button>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <Label>Fonctionnalités souhaitées *</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Checkbox
                id={feature}
                checked={selectedFeatures.includes(feature)}
                onCheckedChange={() => handleFeatureToggle(feature)}
              />
              <label htmlFor={feature} className="text-sm">{feature}</label>
            </div>
          ))}
        </div>
        {errors.features && <p className="text-sm text-red-600">{errors.features.message as string}</p>}
      </div>

      {/* References */}
      <div className="space-y-2">
        <Label htmlFor="references">Références / exemples (URLs ou notes)</Label>
        <Textarea id="references" rows={2} placeholder="Liens ou notes visuelles (ex: dribbble, site inspirant...)" {...register('references')} />
      </div>

      {/* Hidden inputs to ensure react-hook-form has values */}
      <input type="hidden" {...register('features')} />
      <input type="hidden" {...register('pages')} />

      {/* Submit */}
      <div className="flex justify-end pt-6 border-t">
        <Button type="submit" size="lg" disabled={isLoading} className="bg-linear-to-r from-blue-600 to-indigo-600">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Génération en cours...
            </>
          ) : (
            'Suivant : Aperçu'
          )}
        </Button>
      </div>
    </form>
  )
}
