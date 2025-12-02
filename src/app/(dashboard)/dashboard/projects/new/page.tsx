'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CreateProjectWizard } from '@/components/projects/create/CreateProjectWizard'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Wand2, ArrowLeft } from 'lucide-react'

type CreationType = 'template' | 'blank' | null

export default function NewProjectPage() {
  const router = useRouter()
  const [creationType, setCreationType] = useState<CreationType>(null)
  const [isCreating, setIsCreating] = useState(false)

  const handleComplete = async (projectData: any) => {
    setIsCreating(true)
    
    // TODO: Remplacer par un vrai appel API
    console.log('Creating project:', projectData)
    
    // Simuler un délai API
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Créer un ID mock
    const mockId = `project-${Date.now()}`
    
    // Rediriger vers l'éditeur du projet créé
    router.push(`/dashboard/projects/${mockId}/edit`)
  }

  const handleBlankProject = () => {
    // Créer un projet vide et rediriger vers l'éditeur
    const mockId = `blank-${Date.now()}`
    router.push(`/dashboard/projects/${mockId}/edit`)
  }

  if (creationType === null) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Comment souhaitez-vous créer votre projet ?
          </h1>
          <p className="text-slate-600 mt-2">
            Choisissez entre un template guidé ou créer librement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Option 1: Template Guidé */}
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
            <CardContent className="p-8">
              <div className="h-32 mb-6 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                {/* <Wand2 className="h-16 w-16 text-white" /> */}
                <Image src="/images/wand.png" alt="Template" width={60} height={60} />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Utiliser un template
              </h2>
              <p className="text-slate-600 mb-6">
                Créez rapidement avec nos templates prédéfinis : Site vitrine, E-commerce, App mobile, Identité visuelle
              </p>

              <ul className="space-y-2 mb-8 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Questionnaire guidé
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Structure pré-définie
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Génération automatique
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Idéal pour débutants
                </li>
              </ul>

              <Button 
                className="w-full bg-linear-to-r from-blue-600 to-indigo-600 group-hover:from-blue-700 group-hover:to-indigo-700"
                onClick={() => setCreationType('template')}
              >
                Choisir un template
              </Button>
            </CardContent>
          </Card>

          {/* Option 2: Projet Libre */}
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
            <CardContent className="p-8">
              <div className="h-32 mb-6 bg-linear-to-br from-blue-500 to-indigo-300 rounded-lg flex items-center justify-center">
                <FileText className="h-16 w-16 text-white" /> 
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Créer librement
              </h2>
              <p className="text-slate-600 mb-6">
                Commencez avec un document vierge et créez votre CDC de A à Z, comme avec Notion ou Google Docs
              </p>

              <ul className="space-y-2 mb-8 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Éditeur de texte riche
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Liberté totale
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Personnalisation complète
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Pour experts
                </li>
              </ul>

              <Button 
                className="w-full bg-linear-to-r from-blue-600 to-indigo-600 group-hover:from-blue-700 group-hover:to-indigo-700"
                onClick={handleBlankProject}
              >
                Créer un projet vide
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (creationType === 'template') {
    return (
      <div className="max-w-5xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => setCreationType(null)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au choix
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Créer avec un template
          </h1>
          <p className="text-slate-600 mt-2">
            Suivez les étapes pour générer votre cahier des charges
          </p>
        </div>

        <Card className="p-6">
          <CreateProjectWizard 
            onComplete={handleComplete}
            isLoading={isCreating}
          />
        </Card>
      </div>
    )
  }

  return null
}