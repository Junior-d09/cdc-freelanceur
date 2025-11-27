'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Pause,
  ArrowRight,
  MoreVertical
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Mock data - À remplacer par des vraies données API
const projects = [
  {
    id: '1',
    title: 'Site Web E-commerce Mode',
    client: 'Fashion Store SAS',
    status: 'validated',
    template: 'E-commerce',
    createdAt: '2024-01-15',
    progress: 100,
  },
  {
    id: '2',
    title: 'Application Mobile Fitness',
    client: 'FitLife Inc.',
    status: 'in_progress',
    template: 'App Mobile',
    createdAt: '2024-01-20',
    progress: 65,
  },
  {
    id: '3',
    title: 'Identité Visuelle Restaurant',
    client: 'Le Gourmet',
    status: 'pending',
    template: 'Identité Visuelle',
    createdAt: '2024-01-22',
    progress: 40,
  },
  {
    id: '4',
    title: 'Site Vitrine Architecte',
    client: 'ArchiDesign Studio',
    status: 'paused',
    template: 'Site Vitrine',
    createdAt: '2024-01-18',
    progress: 30,
  },
]

const statusConfig = {
  validated: {
    label: 'Validé',
    icon: CheckCircle,
    color: 'bg-green-100 text-green-700',
  },
  in_progress: {
    label: 'En cours',
    icon: Clock,
    color: 'bg-blue-100 text-blue-700',
  },
  pending: {
    label: 'En attente',
    icon: AlertCircle,
    color: 'bg-yellow-100 text-yellow-700',
  },
  paused: {
    label: 'En pause',
    icon: Pause,
    color: 'bg-slate-100 text-slate-700',
  },
}

export function RecentProjects() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Projets Récents</CardTitle>
        <Link href="/dashboard/projects">
          <Button variant="ghost" size="sm">
            Voir tout
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => {
            const status = statusConfig[project.status as keyof typeof statusConfig]
            const StatusIcon = status.icon

            return (
              <div
                key={project.id}
                className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Link
                      href={`/dashboard/projects/${project.id}`}
                      className="font-semibold text-slate-900 hover:text-blue-600 transition-colors truncate"
                    >
                      {project.title}
                    </Link>
                    <Badge variant="outline" className="shrink-0">
                      {project.template}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center">
                      Client: {project.client}
                    </span>
                    <span>•</span>
                    <span>
                      {new Date(project.createdAt).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                      <span>Progression</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-blue-600 to-indigo-600 transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 ml-4">
                  <Badge className={status.color}>
                    <StatusIcon className="mr-1 h-3 w-3" />
                    {status.label}
                  </Badge>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/projects/${project.id}`}>
                          Voir le projet
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/projects/${project.id}/edit`}>
                          Modifier
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Dupliquer</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}