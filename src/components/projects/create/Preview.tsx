'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface PreviewProps {
  data: any
  onEdit: () => void
  onConfirm: () => void
  isLoading?: boolean
}

export function Preview({ data, onEdit, onConfirm, isLoading }: PreviewProps) {
  const {
    title,
    clientName,
    clientEmail,
    description,
    budget,
    deadline,
    objectives,
    designStyle,
    targetAudience,
    pages = [],
    features = [],
    references,
    templateType,
  } = data || {}

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">Aperçu du projet</h2>
        <p className="text-slate-600">Vérifiez les informations avant de confirmer la création du projet.</p>
      </div>

      <Card>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-slate-700">Titre</h4>
              <p className="text-lg font-semibold">{title}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-700">Client</h4>
              <p>{clientName} • {clientEmail}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-slate-700">Template</h4>
              <p>{templateType}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-slate-700">Budget</h4>
              <p>{budget} • Livraison souhaitée: {deadline}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-700">Description</h4>
            <p>{description}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-700">Objectifs</h4>
            <p>{objectives}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-slate-700">Design</h4>
              <p>{designStyle || 'Non spécifié'}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-slate-700">Public cible</h4>
              <p>{targetAudience || 'Non spécifié'}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-700">Pages</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {pages.length ? pages.map((p: string) => <Badge key={p}>{p}</Badge>) : <p>Aucune</p>}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-700">Fonctionnalités</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {features.length ? features.map((f: string) => <Badge key={f}>{f}</Badge>) : <p>Aucune</p>}
            </div>
          </div>

          {references && (
            <div>
              <h4 className="text-sm font-medium text-slate-700">Références</h4>
              <p>{references}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="ghost" onClick={onEdit}>Modifier</Button>
        <Button onClick={onConfirm} disabled={isLoading} className="bg-gradient-to-r from-green-500 to-emerald-500">
          {isLoading ? 'Création...' : 'Confirmer et créer le projet'}
        </Button>
      </div>
    </div>
  )
}
