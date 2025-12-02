'use client'
import { Button } from '@/components/ui/button'

export function Success({ data }: { data: any }) {
  return (
    <div className="text-center space-y-6 py-12">
      <h2 className="text-2xl font-bold">Projet créé avec succès 🎉</h2>
      <p className="text-slate-600">Votre projet <span className="font-semibold">{data?.title}</span> a bien été généré.</p>

      <div className="flex justify-center gap-3">
        <Button onClick={() => navigator.clipboard?.writeText(JSON.stringify(data))}>Copier les données (JSON)</Button>
        <Button variant="ghost" onClick={() => window.location.reload()}>Créer un autre projet</Button>
      </div>
    </div>
  )
}
