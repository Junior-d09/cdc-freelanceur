'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  Edit, 
  Eye, 
  Send, 
  Download, 
  Copy, 
  Trash2,
  Share2 
} from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface ProjectActionsProps {
  projectId: string
}

export function ProjectActions({ projectId }: ProjectActionsProps) {
  const { toast } = useToast()

  const handleShare = () => {
    // Copier le lien dans le presse-papier
    const link = `${window.location.origin}/client/project-${projectId}`
    navigator.clipboard.writeText(link)
    
    toast({
      title: 'Lien copié',
      description: 'Le lien de partage a été copié dans le presse-papier',
    })
  }

  const handleDuplicate = () => {
    toast({
      title: 'Projet dupliqué',
      description: 'Le projet a été dupliqué avec succès',
    })
  }

  const handleDownload = () => {
    toast({
      title: 'Téléchargement en cours',
      description: 'Le PDF sera téléchargé dans quelques instants',
    })
  }

  const handleDelete = () => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      toast({
        title: 'Projet supprimé',
        description: 'Le projet a été supprimé avec succès',
      })
    }
  }

  return (
    <Card className="p-4">
      <div className="flex flex-wrap items-center gap-3">
        {/* Primary Actions */}
        <Link href={`/dashboard/projects/${projectId}/edit`}>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
            <Edit className="mr-2 h-4 w-4" />
            Éditer
          </Button>
        </Link>

        <Link href={`/dashboard/projects/${projectId}/preview`}>
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Aperçu
          </Button>
        </Link>

        <Button variant="outline" onClick={handleShare}>
          <Share2 className="mr-2 h-4 w-4" />
          Partager au client
        </Button>

        {/* Secondary Actions */}
        <Button variant="outline" onClick={handleDownload}>
          <Download className="mr-2 h-4 w-4" />
          Télécharger PDF
        </Button>

        <Button variant="outline" onClick={handleDuplicate}>
          <Copy className="mr-2 h-4 w-4" />
          Dupliquer
        </Button>

        {/* Danger Action */}
        <Button 
          variant="outline" 
          onClick={handleDelete}
          className="text-red-600 hover:bg-red-50 hover:text-red-700 ml-auto"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Supprimer
        </Button>
      </div>
    </Card>
  )
}