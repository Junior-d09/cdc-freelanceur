'use client'

import { ProjectCard } from './ProjectCard'
import Link from 'next/link'
import { FolderKanban, PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
// Mock data - À remplacer par des données API
const projects = [
  {
    id: '1',
    title: 'Site Web E-commerce Mode',
    client: 'Fashion Store SAS',
    status: 'validated' as const,
    template: 'E-commerce',
    description: 'Boutique en ligne pour vêtements et accessoires de mode',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
    progress: 100,
  },
  {
    id: '2',
    title: 'Application Mobile Fitness',
    client: 'FitLife Inc.',
    status: 'in_progress' as const,
    template: 'App Mobile',
    description: 'Application de suivi d\'entraînement et nutrition',
    createdAt: '2024-01-20',
    updatedAt: '2024-01-25',
    progress: 65,
  },
  {
    id: '3',
    title: 'Identité Visuelle Restaurant',
    client: 'Le Gourmet',
    status: 'pending' as const,
    template: 'Identité Visuelle',
    description: 'Logo, charte graphique et supports de communication',
    createdAt: '2024-01-22',
    updatedAt: '2024-01-22',
    progress: 40,
  },
  {
    id: '4',
    title: 'Site Vitrine Architecte',
    client: 'ArchiDesign Studio',
    status: 'paused' as const,
    template: 'Site Vitrine',
    description: 'Site de présentation portfolio d\'architecte',
    createdAt: '2024-01-18',
    updatedAt: '2024-01-19',
    progress: 30,
  },
  {
    id: '5',
    title: 'Plateforme SaaS Analytics',
    client: 'DataViz Corp',
    status: 'in_progress' as const,
    template: 'Application Web',
    description: 'Tableau de bord analytics temps réel',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-26',
    progress: 75,
  },
  {
    id: '6',
    title: 'Refonte Site Corporate',
    client: 'TechCorp International',
    status: 'validated' as const,
    template: 'Site Vitrine',
    description: 'Refonte complète du site institutionnel',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-24',
    progress: 100,
  },
]

export function ProjectList() {
  return (
    <div>
      {projects.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
            <FolderKanban className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Aucun projet
          </h3>
          <p className="text-slate-600 mb-6">
            Commencez par créer votre premier cahier des charges
          </p>
          <Link href="/dashboard/projects/new">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Créer un projet
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

// Import nécessaire pour l'EmptyState
