'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { CDCEditor } from '@/components/projects/editor/CDCEditor'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Save, Eye, Send, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function EditProjectPage() {
  const router = useRouter()
  const params = useParams()
  const { toast } = useToast()
  const [content, setContent] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  // Charger le contenu du projet (mock)
  useEffect(() => {
    // TODO: Remplacer par un vrai appel API
    const mockContent = `
      <h1>Cahier des Charges - Projet ${params.id}</h1>
      <p>Commencez à écrire votre cahier des charges ici...</p>
      <h2>1. Contexte du projet</h2>
      <p>Décrivez le contexte et les enjeux du projet.</p>
      <h2>2. Objectifs</h2>
      <ul>
        <li>Objectif principal</li>
        <li>Objectifs secondaires</li>
      </ul>
      <h2>3. Périmètre fonctionnel</h2>
      <p>Listez les fonctionnalités attendues.</p>
    `
    setContent(mockContent)
  }, [params.id])

  const handleSave = async () => {
    setIsSaving(true)
    
    try {
      // TODO: Appel API pour sauvegarder
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setLastSaved(new Date())
      toast({
        title: 'Sauvegardé',
        description: 'Votre projet a été enregistré avec succès',
      })
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible de sauvegarder le projet',
        variant: 'destructive',
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handlePreview = () => {
    router.push(`/dashboard/projects/${params.id}/preview`)
  }

  const handleShare = () => {
    router.push(`/dashboard/projects/${params.id}`)
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="border-b bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push('/dashboard/projects')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-semibold">Édition du projet</h1>
            {lastSaved && (
              <p className="text-xs text-muted-foreground">
                Dernière sauvegarde : {lastSaved.toLocaleTimeString('fr-FR')}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="mr-2 h-4 w-4" />
            Aperçu
          </Button>
          <Button variant="outline" onClick={handleShare}>
            <Send className="mr-2 h-4 w-4" />
            Partager
          </Button>
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sauvegarde...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Enregistrer
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Éditeur */}
      <div className="flex-1 overflow-y-auto">
        <CDCEditor
          initialContent={content}
          onUpdate={setContent}
          onSave={handleSave}
        />
      </div>
    </div>
  )
}